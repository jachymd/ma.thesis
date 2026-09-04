/* app.js — renders SITE_CONTENT (content.js) into the page and drives Edit Mode.
   No build step, no framework: plain DOM. Everything editable lives in `state`,
   a deep clone of SITE_CONTENT. Export writes `state` back out as content.js text. */

(function () {
  "use strict";

  let state = JSON.parse(JSON.stringify(SITE_CONTENT));
  let editMode = false;

  // ---------- tiny helpers ----------

  function ce(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      for (const k in attrs) {
        if (k === "text") node.textContent = attrs[k];
        else if (k === "html") node.innerHTML = attrs[k];
        else if (k.startsWith("on") && typeof attrs[k] === "function") node.addEventListener(k.slice(2), attrs[k]);
        else if (attrs[k] !== undefined && attrs[k] !== null) node.setAttribute(k, attrs[k]);
      }
    }
    (children || []).forEach((c) => { if (c) node.appendChild(c); });
    return node;
  }

  function getPath(obj, path) {
    return path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);
  }

  function setPath(obj, path, value) {
    const parts = path.split(".");
    const last = parts.pop();
    const target = parts.reduce((o, k) => o[k], obj);
    target[last] = value;
  }

  function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }

  function iconBtn(label, onClick) {
    return ce("button", { class: "icon-btn", type: "button", title: label, text: "×", onclick: onClick });
  }

  function addBtn(label, onClick) {
    return ce("button", { class: "add-btn", type: "button", text: "+ " + label, onclick: onClick });
  }

  // simple single-line contenteditable bound to a state path
  function textField(tag, path, className) {
    const value = getPath(state, path) || "";
    const node = ce(tag, { class: className, text: value, "data-field": path, "data-editable": "text" });
    if (editMode) {
      node.setAttribute("contenteditable", "true");
      node.addEventListener("input", () => setPath(state, path, node.textContent));
      node.addEventListener("blur", () => setPath(state, path, node.textContent.trim()));
    }
    return node;
  }

  // multi-paragraph contenteditable bound to an array-of-strings path
  function richTextField(path, className) {
    const paragraphs = getPath(state, path) || [];
    const wrap = ce("div", { class: className, "data-field": path, "data-editable": "richtext" });
    paragraphs.forEach((p) => wrap.appendChild(ce("p", { text: p })));
    if (editMode) {
      wrap.setAttribute("contenteditable", "true");
      wrap.addEventListener("input", () => {
        const ps = Array.from(wrap.children).length
          ? Array.from(wrap.children).map((n) => n.textContent.trim())
          : [wrap.textContent.trim()];
        setPath(state, path, ps.filter((t) => t.length));
      });
    }
    return wrap;
  }

  // ---------- header ----------

  function renderHeader() {
    document.title = state.meta.siteTitle + " — MA Thesis Pitch";
    const titleEl = document.getElementById("site-title");
    clear(titleEl);
    titleEl.appendChild(textField("span", "meta.siteTitle", ""));

    const statusEl = document.getElementById("site-status");
    clear(statusEl);
    statusEl.appendChild(textField("span", "meta.status", ""));
  }

  // ---------- balance bar ----------

  function renderBalance() {
    let pct = Number(state.balance.theoryPercent);
    if (isNaN(pct)) pct = 50;
    pct = Math.min(80, Math.max(20, pct));
    document.getElementById("balance-fill").style.width = pct + "%";
    document.getElementById("balance-marker").style.left = pct + "%";
    document.getElementById("balance-theory-pct").textContent = pct + "%";
    document.getElementById("balance-practice-pct").textContent = (100 - pct) + "%";
  }

  // ---------- generic: list of plain strings (bullets / tags) ----------

  function renderBulletList(container, path, rerenderParent) {
    clear(container);
    const items = getPath(state, path) || [];
    items.forEach((val, i) => {
      const li = ce("li");
      const span = ce("span", { text: val, contenteditable: editMode ? "true" : null });
      if (editMode) {
        span.addEventListener("input", () => { items[i] = span.textContent; });
        li.appendChild(span);
        li.appendChild(iconBtn("Remove", () => { items.splice(i, 1); rerenderParent(); }));
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.gap = "10px";
        li.style.alignItems = "flex-start";
      } else {
        li.appendChild(span);
      }
      container.appendChild(li);
    });
    if (editMode) {
      container.appendChild(addBtn("add", () => { items.push("New point…"); rerenderParent(); }));
    }
  }

  // ---------- section 1 : ref lists ----------

  function renderRefList(container, path, rerenderParent) {
    clear(container);
    const items = getPath(state, path) || [];
    items.forEach((ref, i) => {
      const li = ce("li");
      if (editMode) {
        const labelInput = ce("input", { type: "text", value: ref.label, placeholder: "Label" });
        labelInput.value = ref.label;
        labelInput.addEventListener("input", () => { ref.label = labelInput.value; });
        const linkInput = ce("input", { type: "url", placeholder: "https://…" });
        linkInput.value = ref.link;
        linkInput.addEventListener("input", () => { ref.link = linkInput.value; });
        const row = ce("div", { class: "edit-row" }, [labelInput, linkInput, iconBtn("Remove", () => { items.splice(i, 1); rerenderParent(); })]);
        li.appendChild(row);
      } else {
        li.appendChild(ce("a", { href: ref.link, text: ref.label, target: "_blank", rel: "noopener" }));
      }
      container.appendChild(li);
    });
    if (editMode) {
      container.appendChild(addBtn("add reference", () => { items.push({ label: "New reference", link: "https://" }); rerenderParent(); }));
    }
  }

  function mountSection1() {
    const s = document.getElementById("section-1");

    const tq = s.querySelector('[data-field="thesisQuestion"]');
    replaceWith(tq, textField("p", "thesisQuestion", "thesis-question"));

    const to = s.querySelector('[data-field="theoryOutline"]');
    renderBulletList(to, "theoryOutline", mountSection1);

    const trs = s.querySelector('[data-field="theoryRefsShort"]');
    renderRefList(trs, "theoryRefsShort", mountSection1);

    const po = s.querySelector('[data-field="practicalOneLiner"]');
    replaceWith(po, textField("p", "practicalOneLiner", "one-liner"));

    const pol = s.querySelector('[data-field="practicalOutline"]');
    renderBulletList(pol, "practicalOutline", mountSection1);

    const prs = s.querySelector('[data-field="practicalRefsShort"]');
    renderRefList(prs, "practicalRefsShort", mountSection1);

    if (editMode) {
      const bal = s.querySelector(".balance-bar");
      let input = bal.querySelector("#balance-input");
      if (!input) {
        input = ce("input", { type: "text", id: "balance-input", style: "width:60px;margin-left:8px;" });
        bal.querySelector(".balance-hint").after(input);
      }
      input.value = state.balance.theoryPercent;
      input.oninput = () => {
        state.balance.theoryPercent = Number(input.value) || 50;
        renderBalance();
      };
    }
    renderBalance();
  }

  function replaceWith(oldEl, newEl) {
    newEl.setAttribute("data-field", oldEl.getAttribute("data-field"));
    newEl.setAttribute("data-editable", oldEl.getAttribute("data-editable"));
    oldEl.replaceWith(newEl);
  }

  // ---------- section 2 : literature ----------

  function mountSection2() {
    const s = document.getElementById("section-2");

    const why = s.querySelector('[data-field="whyItMatters"]');
    replaceWith(why, richTextField("whyItMatters", "prose"));

    const litList = document.getElementById("lit-list");
    clear(litList);

    state.literature.forEach((lit, i) => {
      const li = ce("li", { class: "lit-item" });
      if (editMode) {
        const row1 = ce("div", { class: "edit-row", style: "flex-wrap:wrap;width:100%;" });
        const authorInput = ce("input", { type: "text", placeholder: "Author / studio" }); authorInput.value = lit.author;
        authorInput.addEventListener("input", () => lit.author = authorInput.value);
        const workInput = ce("input", { type: "text", placeholder: "Work" }); workInput.value = lit.work;
        workInput.addEventListener("input", () => lit.work = workInput.value);
        const yearInput = ce("input", { type: "text", placeholder: "Year", style: "width:70px;" }); yearInput.value = lit.year;
        yearInput.addEventListener("input", () => lit.year = yearInput.value);
        row1.appendChild(authorInput); row1.appendChild(workInput); row1.appendChild(yearInput);
        row1.appendChild(iconBtn("Remove", () => { state.literature.splice(i, 1); mountSection2(); }));

        const row2 = ce("div", { class: "edit-row", style: "flex-wrap:wrap;width:100%;margin-top:6px;" });
        const typeInput = ce("input", { type: "text", placeholder: "Type / category" }); typeInput.value = lit.type;
        typeInput.addEventListener("input", () => lit.type = typeInput.value);
        const linkInput = ce("input", { type: "url", placeholder: "https://…" }); linkInput.value = lit.link;
        linkInput.addEventListener("input", () => lit.link = linkInput.value);
        row2.appendChild(typeInput); row2.appendChild(linkInput);

        li.appendChild(row1);
        li.appendChild(row2);
      } else {
        const main = ce("div", { class: "lit-main" }, [
          ce("a", { href: lit.link, target: "_blank", rel: "noopener", text: lit.author }),
          document.createTextNode(" — "),
          ce("span", { class: "lit-work", text: lit.work })
        ]);
        li.appendChild(main);
        li.appendChild(ce("span", { class: "lit-meta", text: lit.year }));
        li.appendChild(ce("span", { class: "lit-type", text: lit.type }));
      }
      litList.appendChild(li);
    });

    if (editMode) {
      litList.appendChild(addBtn("add literature entry", () => {
        state.literature.push({ author: "New author", work: "Work title", year: "", type: "", link: "https://" });
        mountSection2();
      }));
    }
  }

  // ---------- section 3 : practical ----------

  function mountSection3() {
    const s = document.getElementById("section-3");

    replaceWith(s.querySelector('[data-field="practical.title"]'), textField("h3", "practical.title", "game-title"));
    replaceWith(s.querySelector('[data-field="practical.oneLiner"]'), textField("p", "practical.oneLiner", "game-oneliner"));
    replaceWith(s.querySelector('[data-field="practical.hook"]'), textField("p", "practical.hook", "game-hook"));

    // practical.paragraph is a plain string field
    const pEl = s.querySelector('[data-field="practical.paragraph"]');
    const pText = getPath(state, "practical.paragraph");
    const properP = ce("p", { class: "game-paragraph", text: typeof pText === "string" ? pText : (pText || []).join(" ") });
    properP.setAttribute("data-field", "practical.paragraph");
    properP.setAttribute("data-editable", "text");
    if (editMode) {
      properP.setAttribute("contenteditable", "true");
      properP.addEventListener("input", () => setPath(state, "practical.paragraph", properP.textContent));
    }
    pEl.replaceWith(properP);

    replaceWith(s.querySelector('[data-field="practical.genre"]'), textField("span", "practical.genre", ""));

    const tagRow = document.getElementById("tag-row");
    clear(tagRow);
    state.practical.tags.forEach((tag, i) => {
      const chip = ce("span", { class: "tag" });
      if (editMode) {
        const input = ce("input", { type: "text", style: "background:none;border:0;color:inherit;font:inherit;width:" + Math.max(3, tag.length) + "ch;" });
        input.value = tag;
        input.addEventListener("input", () => { state.practical.tags[i] = input.value; });
        chip.appendChild(input);
        chip.appendChild(iconBtn("Remove", () => { state.practical.tags.splice(i, 1); mountSection3(); }));
      } else {
        chip.textContent = tag;
      }
      tagRow.appendChild(chip);
    });
    if (editMode) {
      tagRow.appendChild(addBtn("add tag", () => { state.practical.tags.push("new-tag"); mountSection3(); }));
    }

    ["forWhom", "playerImpact", "researcherImpact"].forEach((key) => {
      const el = s.querySelector('[data-field="practical.' + key + '"]');
      const val = getPath(state, "practical." + key);
      const p = ce("p", { text: val });
      p.setAttribute("data-field", "practical." + key);
      p.setAttribute("data-editable", "text");
      if (editMode) {
        p.setAttribute("contenteditable", "true");
        p.addEventListener("input", () => setPath(state, "practical." + key, p.textContent));
      }
      el.replaceWith(p);
    });

    renderGDDPreview();

    // prototypes
    const protoList = document.getElementById("prototype-list");
    clear(protoList);
    state.prototypes.forEach((proto, i) => {
      const card = ce("div", { class: "prototype-card" });
      const header = ce("header");

      if (editMode) {
        const titleInput = ce("input", { type: "text", placeholder: "Title" }); titleInput.value = proto.title;
        titleInput.addEventListener("input", () => proto.title = titleInput.value);
        const typeSelect = ce("select", {});
        ["placeholder", "itch", "html", "link"].forEach((t) => {
          const opt = ce("option", { value: t, text: t });
          if (proto.type === t) opt.setAttribute("selected", "selected");
          typeSelect.appendChild(opt);
        });
        typeSelect.addEventListener("change", () => { proto.type = typeSelect.value; mountSection3(); });
        header.appendChild(titleInput);
        header.appendChild(typeSelect);
        header.appendChild(iconBtn("Remove", () => { state.prototypes.splice(i, 1); mountSection3(); }));
        card.appendChild(header);

        const urlInput = ce("input", { type: "url", placeholder: "URL / path", style: "width:100%;margin:10px 16px;" });
        urlInput.value = proto.url || "";
        urlInput.addEventListener("input", () => { proto.url = urlInput.value; });
        card.appendChild(urlInput);

        const noteInput = ce("input", { type: "text", placeholder: "Note", style: "width:100%;margin:0 16px 14px;" });
        noteInput.value = proto.note || "";
        noteInput.addEventListener("input", () => { proto.note = noteInput.value; });
        card.appendChild(noteInput);
      } else {
        header.appendChild(ce("span", { text: proto.title || "Untitled prototype" }));
        header.appendChild(ce("span", { text: proto.type }));
        card.appendChild(header);

        if (proto.type === "itch" && proto.url) {
          card.appendChild(ce("iframe", { src: proto.url, allowfullscreen: "true" }));
        } else if (proto.type === "html" && proto.url) {
          card.appendChild(ce("iframe", { src: proto.url, sandbox: "allow-scripts allow-same-origin" }));
        } else if (proto.type === "link" && proto.url) {
          card.appendChild(ce("div", { class: "prototype-placeholder" }, [
            ce("a", { href: proto.url, target: "_blank", rel: "noopener", text: "Open prototype ↗" })
          ]));
        } else {
          card.appendChild(ce("div", { class: "prototype-placeholder", text: proto.note || "No build linked yet." }));
        }
      }
      protoList.appendChild(card);
    });
    if (editMode) {
      protoList.appendChild(addBtn("add prototype", () => {
        state.prototypes.push({ title: "New prototype", type: "placeholder", url: "", note: "" });
        mountSection3();
      }));
    }
  }

  function renderGDDPreview() {
    const p = state.practical;
    const text =
`GAME: ${p.title}
ONE-LINER: ${p.oneLiner}
HOOK: ${p.hook}
GENRE: ${p.genre}
TAGS: ${p.tags.join(", ")}

DESCRIPTION:
${p.paragraph}

FOR WHOM: ${p.forWhom}
PLAYER IMPACT: ${p.playerImpact}
RESEARCHER/DESIGNER VALUE: ${p.researcherImpact}

---
Using the above, draft a brief Game Design Document (core loop, key mechanics, level/space breakdown, art & audio direction, scope notes for a solo 4-month student production).`;
    document.getElementById("gdd-preview").textContent = text;
    return text;
  }

  // ---------- section 4 : timeline ----------

  function mountSection4() {
    const list = document.getElementById("timeline-list");
    clear(list);
    state.timeline.forEach((phase, i) => {
      const li = ce("li", { class: "timeline-item" });

      if (editMode) {
        const phaseInput = ce("input", { type: "text", style: "font-size:16px;width:100%;margin-bottom:4px;" });
        phaseInput.value = phase.phase;
        phaseInput.addEventListener("input", () => phase.phase = phaseInput.value);
        const dateInput = ce("input", { type: "text", style: "font-family:var(--mono);font-size:12px;width:100%;margin-bottom:10px;" });
        dateInput.value = phase.dateRange;
        dateInput.addEventListener("input", () => phase.dateRange = dateInput.value);
        li.appendChild(phaseInput);
        li.appendChild(dateInput);
      } else {
        li.appendChild(ce("h4", { text: phase.phase }));
        li.appendChild(ce("p", { class: "timeline-date", text: phase.dateRange }));
      }

      const ul = ce("ul");
      li.appendChild(ul);
      renderBulletList(ul, "timeline." + i + ".goals", () => mountSection4());

      const relWrap = ce("div", { class: "timeline-related" });
      (phase.relatedSections || []).forEach((rs, ri) => {
        const chip = ce("span", { class: "tag" });
        if (editMode) {
          const input = ce("input", { type: "text", style: "background:none;border:0;color:inherit;font:inherit;width:" + Math.max(4, rs.length) + "ch;" });
          input.value = rs;
          input.addEventListener("input", () => { phase.relatedSections[ri] = input.value; });
          chip.appendChild(input);
          chip.appendChild(iconBtn("Remove", () => { phase.relatedSections.splice(ri, 1); mountSection4(); }));
        } else {
          chip.textContent = rs;
        }
        relWrap.appendChild(chip);
      });
      li.appendChild(relWrap);
      if (editMode) {
        li.appendChild(addBtn("link section", () => { phase.relatedSections.push("Section 1"); mountSection4(); }));
        li.appendChild(iconBtn("Remove phase", () => { state.timeline.splice(i, 1); mountSection4(); }));
      }

      list.appendChild(li);
    });
    if (editMode) {
      list.appendChild(addBtn("add phase", () => {
        state.timeline.push({ phase: "New phase", dateRange: "Weeks –", goals: ["New goal"], relatedSections: [] });
        mountSection4();
      }));
    }
  }

  // ---------- render all ----------

  function renderAll() {
    renderHeader();
    mountSection1();
    mountSection2();
    mountSection3();
    mountSection4();
  }

  // ---------- edit mode toggle ----------

  document.getElementById("edit-toggle").addEventListener("click", () => {
    editMode = !editMode;
    document.body.classList.toggle("edit-mode", editMode);
    const btn = document.getElementById("edit-toggle");
    btn.setAttribute("aria-pressed", String(editMode));
    btn.textContent = editMode ? "✎ Edit mode: on" : "✎ Edit mode: off";
    renderAll();
  });

  // ---------- copy GDD prompt ----------

  document.getElementById("copy-gdd").addEventListener("click", async () => {
    const text = renderGDDPreview();
    try {
      await navigator.clipboard.writeText(text);
      const btn = document.getElementById("copy-gdd");
      const original = btn.textContent;
      btn.textContent = "Copied ✓";
      setTimeout(() => { btn.textContent = original; }, 1500);
    } catch (e) {
      // clipboard API unavailable (e.g. plain file:// in some browsers) — text is visible in the preview box for manual copy
    }
  });

  // ---------- export content.js ----------

  document.getElementById("export-content").addEventListener("click", () => {
    const body = JSON.stringify(state, null, 2)
      .replace(/^{/, "{")
      .replace(/"([a-zA-Z_][a-zA-Z0-9_]*)":/g, "$1:"); // unquote simple keys for readability
    const fileText =
`/* SITE_CONTENT — exported from Edit Mode. Overwrite js/content.js with this file and commit. */\n\nconst SITE_CONTENT = ${body};\n`;
    const blob = new Blob([fileText], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "content.js";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });

  // ---------- init ----------

  renderAll();
})();

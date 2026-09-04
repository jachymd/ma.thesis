/*
  SITE_CONTENT — the single source of truth for the pitch site.
  Edit this file directly to update the site. Every field the page
  renders is read from here; index.html has no hardcoded copy.

  Field types you'll see used below (matches data-editable in index.html):
    text        -> plain string
    richtext    -> array of paragraph strings
    list-text   -> array of strings, rendered as bullets
    list-ref    -> array of { label, link }
    list-lit    -> array of { author, work, year, type, link, note? }
    list-tags   -> array of strings
    list-proto  -> array of { title, type: "itch" | "html" | "link", url, note? }
    list-timeline -> array of { phase, dateRange, goals: [string], relatedSections: [string] }

  After editing in Edit Mode in the browser, use "Export content.js" to
  download the updated version of this file, then overwrite this file
  in the repo and commit.
*/

const SITE_CONTENT = {

  meta: {
    siteTitle: "Nostalgia Therapy: Architecture, Memory & Digital Reminiscence",
    status: "WORKING DRAFT — reframed around Nostalgia Therapy / reminiscence therapy. Bridge: architecture as a shared cultural carrier of memory → digital media extends what physical space alone could carry (music, narrative, objects, characters). Practical concept: a two-phase sci-fi reconstruction facility (comfort, then truth)."
  },

  // ---- SECTION 1 ------------------------------------------------------

  thesisQuestion:
    "Reminiscence therapy has always depended on physical space and objects to hold and surface memory. What happens when it moves into digital environments — which can add what physical architecture alone never could (music, narrative, characters, interactivity)? And what does that migration reveal about architecture's own role as a shared cultural carrier of memory in the first place?",

  theoryOutline: [
    "Reminiscence & life review therapy: the clinical tradition of using recalled memory for psychological wellbeing (Butler's life review, gerontological practice).",
    "Nostalgia as a psychological resource: Sedikides & Wildschut's function-based account — nostalgia serving self-continuity, meaning, and social connectedness, not just wistful sentiment.",
    "Architecture as a shared cultural carrier of memory: how physical space encodes and evokes both personal and collective memory (felt/phenomenological, collective/typological, and deliberate-mnemonic strands — kept open for now).",
    "Digital & VR reminiscence therapy: the early, still mostly literal, clinical attempts to move this practice into virtual environments.",
    "Nostalgia in everyday digital media: algorithmic/ambient nostalgia (endless lo-fi loops, 'nostalgiacore' aesthetics) as an uncontrolled, non-clinical parallel to the therapeutic version."
  ],

  theoryRefsShort: [
    { label: "Reminiscence therapy (overview)", link: "https://en.wikipedia.org/wiki/Reminiscence_therapy" },
    { label: "Sedikides, Wildschut, Arndt & Routledge (2008) — Nostalgia: Past, Present, and Future", link: "https://journals.sagepub.com/doi/10.1111/j.1467-8721.2008.00595.x" },
    { label: "VR Reminiscence Therapy in Dementia Care — scoping review (2025)", link: "https://xr.jmir.org/2025/1/e73539" },
    { label: "Brown et al. (2024) — #nostalgiacores and algorithmic culture", link: "https://journals.sagepub.com/doi/10.1177/13548565241270669" }
  ],

  practicalOneLiner:
    "A sci-fi reconstruction facility rebuilds a stranger's most treasured memory — and asks you to decide when comfort should give way to truth.",

  practicalOutline: [
    "Sci-fi frame: a reconstruction facility rebuilds a person's remembered space from fragments — objects, music, spatial cues, narrative, even characters. All newly available to digital media, none available to fixed physical architecture alone.",
    "Phase one — Reconstruction: the player assembles a warm, idealized version of a remembered space. Therapeutic in tone, deliberately comforting — the 'nostalgia therapy' surface.",
    "Phase two — Resolution: the dreamy, idealized layer is stripped back, revealing a more accurate — and less comfortable — version of what actually happened. Understanding replaces comfort, but the player still fills the remaining gaps themselves.",
    "Scoped for solo, 4-month production: one small facility/room-set, a handful of memory fragments, ~10–15 min playtime, closed with a short open reflection prompt."
  ],

  practicalRefsShort: [
    { label: "Ether One (White Paper Games) — a 'Restorer' navigating a dementia patient's memory", link: "https://en.wikipedia.org/wiki/Ether_One" },
    { label: "What Remains of Edith Finch", link: "https://en.wikipedia.org/wiki/What_Remains_of_Edith_Finch" },
    { label: "VR-based reminiscence therapy usability study (2024)", link: "https://link.springer.com/article/10.1007/s10796-024-10479-w" },
    { label: "Deep Nostalgia — remediated memory & algorithmic nostalgia (Kidd & Nieto McAvoy, 2023)", link: "https://journals.sagepub.com/doi/10.1177/13548565221149839" }
  ],

  balance: {
    // Percent of overall effort/weight given to the THEORETICAL part.
    // Must be between 20 and 80 (either part can lead). Practice = 100 - this.
    theoryPercent: 60
  },

  // ---- SECTION 2 ------------------------------------------------------

  whyItMatters: [
    "Personally: this reframing gives the earlier fascination with memory-in-space an actual stake. Reminiscence therapy is a real, still very physically-anchored clinical practice — built on a person's own chair, their own photographs, their own kitchen smell. Asking what digital media can and can't replace in that isn't just an aesthetic question about nostalgia anymore; it's a question about what architecture was actually doing for people all along.",
    "For architecture discourse: architecture is often theorized as a shared cultural carrier of memory in fixed, physical terms — a room, a monument, a street holds memory because it doesn't move. This thesis asks what happens when the carrier stops being fixed: what has to be added — music, narrative, characters, interactivity — to do the work that physical permanence used to do for free, and what that substitution reveals about what architecture was actually contributing in the first place.",
    "For game design / digital health discourse: existing digital and VR reminiscence therapy is early and mostly literal — rebuild grandma's living room as faithfully as possible. Pairing that clinical goal with architecture theory, nostalgia psychology, and a design commitment to ambiguity (letting the player complete meaning rather than being told it) could push the design vocabulary further than direct simulation. Meanwhile, everyday digital nostalgia — endless ambient/lo-fi loops, 'nostalgiacore' feeds — shows an appetite for this kind of experience already exists well outside any clinical context."
  ],

  literature: [
    { author: "Robert Butler", work: "The Life Review: An Interpretation of Reminiscence in the Aged (origin of life review therapy)", year: "1963", type: "Psychology — reminiscence / life review", link: "https://www.lifebio.org/blog/news/reminiscence-therapy-dr-robert-butler/" },
    { author: "Wikipedia", work: "Reminiscence therapy (overview)", year: "—", type: "Psychology — reminiscence / life review", link: "https://en.wikipedia.org/wiki/Reminiscence_therapy" },
    { author: "Sedikides, Wildschut, Arndt & Routledge", work: "Nostalgia: Past, Present, and Future", year: "2008", type: "Psychology — nostalgia", link: "https://journals.sagepub.com/doi/10.1111/j.1467-8721.2008.00595.x" },
    { author: "Sedikides & Wildschut", work: "On the Nature of Nostalgia: A Psychological Perspective", year: "2025", type: "Psychology — nostalgia", link: "https://journals.sagepub.com/doi/full/10.1177/17540739241303497" },
    { author: "Ng et al.", work: "Virtual reality-based reminiscence therapy for older adults to improve psychological well-being and cognition: a systematic review", year: "2026", type: "Clinical / HCI — digital reminiscence therapy", link: "https://onlinelibrary.wiley.com/doi/10.1111/jocn.17375" },
    { author: "JMIR XR and Spatial Computing", work: "Virtual Reality Reminiscence Therapy in Dementia Care: Scoping Review of Research", year: "2025", type: "Clinical / HCI — digital reminiscence therapy", link: "https://xr.jmir.org/2025/1/e73539" },
    { author: "Information Systems Frontiers (Springer)", work: "Development and Usability Testing of Virtual Reality (VR)-Based Reminiscence Therapy for People with Dementia", year: "2024", type: "Clinical / HCI — digital reminiscence therapy", link: "https://link.springer.com/article/10.1007/s10796-024-10479-w" },
    { author: "Brown, Carah, Tan, Angus & Burgess", work: "Finding the future in digitally mediated ruin: #nostalgiacores and the algorithmic culture of digital platforms", year: "2024", type: "Media / cultural studies — digital nostalgia", link: "https://journals.sagepub.com/doi/10.1177/13548565241270669" },
    { author: "Jenny Kidd & Eva Nieto McAvoy", work: "Deep Nostalgia: Remediated memory, algorithmic nostalgia and technological ambivalence", year: "2023", type: "Media / cultural studies — digital nostalgia", link: "https://journals.sagepub.com/doi/10.1177/13548565221149839" },
    { author: "Wikipedia", work: "Digital nostalgia (overview)", year: "—", type: "Media / cultural studies — digital nostalgia", link: "https://en.wikipedia.org/wiki/Digital_nostalgia" },
    { author: "Frances Yates", work: "The Art of Memory", year: "1966", type: "Theory — architecture & mnemonics", link: "https://en.wikipedia.org/wiki/The_Art_of_Memory" },
    { author: "Gaston Bachelard", work: "The Poetics of Space", year: "1958", type: "Theory — architecture & phenomenology", link: "https://en.wikipedia.org/wiki/The_Poetics_of_Space" },
    { author: "Juhani Pallasmaa", work: "The Eyes of the Skin / Space, Place, Memory and Imagination", year: "1996 / 2007", type: "Theory — architecture & phenomenology", link: "https://en.wikipedia.org/wiki/Juhani_Pallasmaa" },
    { author: "Christian Norberg-Schulz", work: "Genius Loci: Towards a Phenomenology of Architecture", year: "1979", type: "Theory — architecture & phenomenology (gap, not yet read)", link: "https://en.wikipedia.org/wiki/Christian_Norberg-Schulz" },
    { author: "Kevin Lynch", work: "The Image of the City", year: "1960", type: "Theory — architecture & wayfinding / urban cognition", link: "https://en.wikipedia.org/wiki/The_Image_of_the_City" },
    { author: "Svetlana Boym", work: "The Future of Nostalgia", year: "2001", type: "Theory — nostalgia (restorative vs. reflective)", link: "https://en.wikipedia.org/wiki/Svetlana_Boym" },
    { author: "Krokos, Plaisant & Varshney", work: "Virtual memory palaces: immersion aids recall", year: "2019", type: "Empirical — VR / memory", link: "https://link.springer.com/article/10.1007/s10055-018-0346-3" },
    { author: "MDPI Applied Sciences", work: "Enhancing Recognition Memory in Virtual Memory Palaces Using Worlds-in-Miniature", year: "2025", type: "Empirical — VR / memory", link: "https://www.mdpi.com/2076-3417/15/5/2304" },
    { author: "Bradley Earl Wiggins", work: "The backrooms and liminal spaces: Explorations of a digital urban legend", year: "2025", type: "Game studies — liminal / digital space", link: "https://journals.sagepub.com/doi/abs/10.1177/14614448241238395" },
    { author: "GeoJournal", work: "Navigating the in-between: liminal spaces in video game geographies", year: "2024", type: "Game studies — liminal / digital space", link: "https://link.springer.com/article/10.1007/s10708-024-11249-6" }
  ],

  // ---- SECTION 3 ------------------------------------------------------

  practical: {
    title: "RECALL (working title)",
    oneLiner: "A sci-fi reconstruction facility rebuilds a stranger's most treasured memory — and asks you to decide when comfort should give way to truth.",
    hook: "Every object you place makes the room feel more like home. Not all of them belong to the same story.",
    paragraph:
      "You operate a memory-reconstruction facility — part therapy clinic, part archive, part something stranger — assembling a patient's remembered space from fragments: furniture, music, half-legible notes, small objects, maybe a voice. In Phase One, you reconstruct: choosing and placing pieces until the room feels warm, complete, and safe, the way reminiscence therapy is meant to feel. In Phase Two, the facility's own process forces a correction — some of what felt right wasn't quite true, and the room has to be rebuilt again, closer to what actually happened. Nothing is fully explained. What you conclude about the patient's story is yours to construct, same as the room itself.",
    genre: "Short narrative exploration / reminiscence sim, sci-fi framing",
    tags: ["Atmospheric", "Narrative", "Short", "Memory", "Nostalgia", "Reminiscence Therapy", "Sci-Fi", "Mystery", "Singleplayer", "First-Person", "Experimental", "Indie"],
    forWhom:
      "Primary: the thesis committee/examiners, as a legible, playable demonstration of the theoretical bridge (reminiscence therapy → architecture-as-memory-carrier → digital extension). Secondary: players of small narrative/atmospheric memory games (Ether One, Gone Home, Edith Finch audiences), and — at a conceptual, not clinical, level — anyone interested in how digital reminiscence/nostalgia experiences might extend what physical reminiscence therapy already does.",
    playerImpact:
      "Phase One is designed to produce the mood benefit real reminiscence therapy aims for — calm, familiarity, a sense of having 'got it right.' Phase Two is designed to complicate that without erasing it: understanding replaces comfort, but the facility never states the full truth outright, so the player leaves having constructed their own reading of what actually happened — not just been told the game's official version.",
    researcherImpact:
      "This is research-through-design: building the facility tests, practically, whether reminiscence-therapy's 'comfort then understanding' logic survives translation into an interactive, ambiguous, two-phase mechanic — and whether digital media's added elements (music, narrative, character) actually do meaningful work that fixed physical architecture couldn't, or whether they mostly just decorate the same underlying spatial idea. It's also a portfolio-grade piece bridging architecture theory, psychology, and game design."
  },

  prototypes: [
    { title: "Phase One — reconstruction block-out", type: "placeholder", url: "", note: "Add the itch.io embed URL or a local build path (e.g. /prototypes/recall-phase1/index.html) once the first playable block-out exists." }
  ],

  // ---- SECTION 4 ------------------------------------------------------

  timeline: [
    {
      phase: "Phase 1 — Foundation",
      dateRange: "Weeks 1–4",
      goals: [
        "Lock the Nostalgia Therapy framing and finalize the thesis question wording",
        "Read the reminiscence-therapy and nostalgia-psychology core (Butler; Sedikides & Wildschut; VR reminiscence therapy reviews)",
        "Keep the architecture-memory anchor (felt / collective / mnemonic) open; carry 2–3 forward into writing",
        "Tech test: block out the reconstruction mechanic (Phase One) and prove the comfort → truth shift (Phase Two) works at all"
      ],
      relatedSections: ["Section 1", "Section 2"]
    },
    {
      phase: "Phase 2 — Design & first playable",
      dateRange: "Weeks 5–8",
      goals: [
        "Write the short GDD (use the Section 3 copy-to-AI prompt as a starting draft)",
        "Design the fragment set for both phases: objects, music cues, narrative notes, and what changes between them",
        "First playable of the full two-phase loop, embedded in Section 3"
      ],
      relatedSections: ["Section 3"]
    },
    {
      phase: "Phase 3 — Production & playtesting",
      dateRange: "Weeks 9–12",
      goals: [
        "Full audio (music as a cultural/mnemonic element, not just atmosphere), lighting, and material pass on both phases",
        "Light playtesting with a handful of players + open-ended reflection prompt (not a formal study)",
        "Draft theory chapters in parallel, cross-referencing what the build is teaching you about the reminiscence-therapy bridge"
      ],
      relatedSections: ["Section 2", "Section 3"]
    },
    {
      phase: "Phase 4 — Polish, write-up & defense prep",
      dateRange: "Weeks 13–16",
      goals: [
        "Collect and analyze the playtest reflections against the theory chapters",
        "Finish and edit the written thesis",
        "Final polish pass on the build; prepare defense presentation and this pitch site as supporting material"
      ],
      relatedSections: ["Section 2", "Section 3"]
    }
  ]

};

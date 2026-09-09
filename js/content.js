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
    siteTitle: "Living Atlas: Learning Spatial Patterns Through Play",
    status: "WORKING DRAFT — reframed from the “Beyond Construction: Architecture in the Digital Age” essay (WT 2024/25), moving forward from ‘can architecture connect to level design’ (already true, not a real question). Bridge: a small, honestly-scoped set of architecture patterns paired one-to-one with selected level-design patterns, made walkable and combinable in a single spatial setting. Practical concept: Living Atlas — a shapeshifting library where patterns are chosen, combined, and colour-coded into the space itself, testing whether a pattern can be recognized through play rather than exposition. Prototype not started yet — Section 3 build entries empty for now."
  },

  // ---- SECTION 1 ------------------------------------------------------

  thesisQuestion:
    "How can architecture and level-design patterns be combined into a walkable atlas that lets a player recognize each one by experiencing it — not by being told?",

  theoryOutline: [
    "A small, honestly-scoped set of architecture patterns (roughly five or six), each anchored to one clear source.",
    "Each architecture pattern paired one-to-one with an existing category in the Game Design Atlas's level-design library — a pattern library I co-created with two collaborators, where my own focus is level design.",
    "Research-through-design as the method (Frayling 1993; Zimmerman, Forlizzi & Evenson 2007): the built library and its documentation are the finding, not an illustration of one reached elsewhere.",
    "A short reflection on what's exaggerated or lost when a pattern becomes a walkable symbol (a lighthouse standing in for wayfinding, a courtyard for enclosure)."
  ],

  theoryRefsShort: [
    { label: "Game Design Atlas — collective pattern library (co-created; my focus: level design)", link: "https://yschmenz.github.io/game-design-atlas/atlas/level-design/index.html" },
    { label: "Youkhana & Pearson — Videogame Atlas: Mapping Interactive Worlds", link: "https://www.koozarch.com/essays/videogame-atlas-mapping-interactive-worlds" },
    { label: "Christopher Alexander — A Pattern Language", link: "https://en.wikipedia.org/wiki/A_Pattern_Language" },
    { label: "Christopher W. Totten — An Architectural Approach to Level Design", link: "https://www.routledge.com/Architectural-Approach-to-Level-Design-Second-edition/Totten/p/book/9780815361367" },
    { label: "Kevin Lynch — The Image of the City", link: "https://en.wikipedia.org/wiki/The_Image_of_the_City" }
  ],

  practicalOneLiner:
    "Living Atlas: an interactive library that rearranges itself.",

  practicalOutline: [
    "Two starting 'collections' greet the player — architecture core patterns and level-design core patterns (drawn from the Game Design Atlas) — and can be picked and combined freely.",
    "The library's modular architecture (bookshelves, windows, a courtyard garden, a lighthouse glimpsed through the stacks, a dungeon wing, etc.) reshapes according to the active combination of patterns.",
    "Every active pattern keeps one consistent colour between the collection screen and its manifestation in the space, so the player can track what a pattern looks like once it's built, not just what it's named.",
    "Scoped for solo, 4-month production: a small, curated set of pattern pairs (not the full combinatorial space), built to a finished-feeling polish rather than spread thin across many."
  ],

  practicalRefsShort: [
    { label: "Game Design Atlas — collective pattern library (co-created; my focus: level design)", link: "https://yschmenz.github.io/game-design-atlas/atlas/level-design/index.html" },
    { label: "Christopher Alexander — the pattern-language format itself", link: "https://en.wikipedia.org/wiki/A_Pattern_Language" },
    { label: "Raph Koster — A Theory of Fun for Game Design (pattern recognition as the core of play)", link: "https://en.wikipedia.org/wiki/A_Theory_of_Fun_for_Game_Design" },
    { label: "Firewatch", link: "https://en.wikipedia.org/wiki/Firewatch_(video_game)" },
    { label: "What Remains of Edith Finch", link: "https://en.wikipedia.org/wiki/What_Remains_of_Edith_Finch" }
  ],

  balance: {
    // Percent of overall effort/weight given to the THEORETICAL part.
    // Must be between 20 and 80 (either part can lead). Practice = 100 - this.
    theoryPercent: 30
  },

  // ---- SECTION 2 ------------------------------------------------------

  whyItMatters: [
    "Design education is still mostly text or lecture, even though video tutorials and video essays already prove a more experiential 'textbook' is possible. Interactive, spatial learning — recognizing a principle by walking through it — remains untried for architecture and level design specifically.",
    "There's a precedent for treating architecture and virtual-space design as one field: I raised this question in an earlier essay (Beyond Construction, WT 2024/25), and Youkhana & Pearson's Videogame Atlas makes the same case from architecture's side. Both disciplines' theory seems to be asking for the same merger.",
    "Personally, this sits where a long-standing interest in environmental storytelling, architecture theory, and psychology meets a newer excitement about what interactive media can do for teaching that text and video can't."
  ],

  literature: [
    { author: "Peter Eisenman", work: "Interview: Peter Eisenman", year: "2013", type: "Theory — architecture (drawing vs. building)", link: "https://www.architectural-review.com/essays/interview-peter-eisenman" },
    { author: "Adolf Loos", work: "Ornament and Crime (Řeči do prázdna, 1897–1900)", year: "1908/2014", type: "Theory — architecture & materiality", link: "https://en.wikipedia.org/wiki/Ornament_and_Crime" },
    { author: "Kenneth Frampton", work: "Studies in Tectonic Culture", year: "1995", type: "Theory — architecture & materiality", link: "https://en.wikipedia.org/wiki/Kenneth_Frampton" },
    { author: "Rem Koolhaas / AMO", work: "Content", year: "2004", type: "Theory — architecture beyond construction", link: "https://en.wikipedia.org/wiki/Rem_Koolhaas" },
    { author: "Martin Heidegger", work: "Building, Dwelling, Thinking", year: "1954", type: "Theory — architecture & phenomenology", link: "https://en.wikipedia.org/wiki/Martin_Heidegger" },
    { author: "Juhani Pallasmaa", work: "The Eyes of the Skin: Architecture and the Senses", year: "2005", type: "Theory — architecture & the senses", link: "https://en.wikipedia.org/wiki/Juhani_Pallasmaa" },
    { author: "David Chalmers", work: "Reality+: Virtual Worlds and the Problems of Philosophy", year: "2022", type: "Philosophy — virtual worlds", link: "https://en.wikipedia.org/wiki/David_Chalmers" },
    { author: "William J. Mitchell & Karen A. Franck", work: "Architects in Cyberspace (Architectural Design 11/12)", year: "1995", type: "Theory — architecture & virtual space", link: "https://en.wikipedia.org/wiki/William_J._Mitchell_(architect)" },
    { author: "Dom Hans van der Laan", work: "Architectonic Space", year: "1977", type: "Theory — architecture, measured / proportional space", link: "https://domhansvanderlaan.nl/publications/" },
    { author: "Peter Zumthor", work: "Thinking Architecture / Atmospheres", year: "1998/2006", type: "Theory — architecture, felt / atmosphere", link: "https://en.wikipedia.org/wiki/Peter_Zumthor" },
    { author: "Christopher Alexander", work: "A Pattern Language / The Timeless Way of Building", year: "1977", type: "Theory — pattern language, direct format ancestor", link: "https://en.wikipedia.org/wiki/A_Pattern_Language" },
    { author: "Kevin Lynch", work: "The Image of the City", year: "1960", type: "Theory — architecture, wayfinding & landmarks", link: "https://en.wikipedia.org/wiki/The_Image_of_the_City" },
    { author: "Jun'ichirō Tanizaki", work: "In Praise of Shadows", year: "1933", type: "Theory — architecture, culturally-coded space", link: "https://en.wikipedia.org/wiki/In_Praise_of_Shadows" },
    { author: "Christopher W. Totten", work: "An Architectural Approach to Level Design", year: "2014/2019", type: "Practice — level design method", link: "https://www.routledge.com/Architectural-Approach-to-Level-Design-Second-edition/Totten/p/book/9780815361367" },
    { author: "Rudolf Kremers", work: "Level Design: Concept, Theory, and Practice", year: "2009", type: "Practice — level design method", link: "https://www.routledge.com/Level-Design-Concept-Theory-and-Practice/Kremers/p/book/9781568813387" },
    { author: "Michael Nitsche", work: "Video Game Spaces: Image, Play, and Structure in 3D Worlds", year: "2008", type: "Game studies — virtual space typology", link: "https://mitpress.mit.edu/9780262141017/video-game-spaces/" },
    { author: "Espen Aarseth", work: "Allegories of Space: The Question of Spatiality in Computer Games", year: "2007", type: "Game studies — spatiality", link: "https://www.researchgate.net/publication/238485005_Allegories_of_Space_The_Question_of_Spatiality_in_Computer_Games" },
    { author: "Henry Jenkins", work: "Game Design as Narrative Architecture", year: "2004", type: "Game studies — architecture as metaphor", link: "https://web.mit.edu/~21fms/People/henry3/games&narrative.html" },
    { author: "Youkhana & Pearson", work: "Videogame Atlas: Mapping Interactive Worlds", year: "2023", type: "Precedent — architecture method applied to games", link: "https://www.koozarch.com/essays/videogame-atlas-mapping-interactive-worlds" },
    { author: "Raph Koster", work: "A Theory of Fun for Game Design", year: "2004", type: "Game design — pattern recognition & play", link: "https://en.wikipedia.org/wiki/A_Theory_of_Fun_for_Game_Design" },
    { author: "Ian Bogost", work: "Persuasive Games: The Expressive Power of Videogames (procedural rhetoric)", year: "2007", type: "Game design — systems that argue through play", link: "https://en.wikipedia.org/wiki/Ian_Bogost" },
    { author: "Katie Salen & Eric Zimmerman", work: "Rules of Play: Game Design Fundamentals", year: "2003", type: "Game design — meaningful play", link: "https://en.wikipedia.org/wiki/Rules_of_Play" }
  ],

  // Working chapter outline for the written thesis — short, one line per chapter.
  structureDraft: [
    "Introduction — argues architecture and virtual space are one design question, not two; builds directly on last year's essay.",
    "Architecture Patterns — the chosen patterns, their sources, and the reasoning behind each, illustrated with visual schematics.",
    "Level Design Patterns — from virtual space in general down to the chosen patterns, surveyed through existing game design methods and listed in the same format as the Game Design Atlas, with examples from games I've played.",
    "The Bridge — where the two pattern sets align and diverge: why some patterns stay tied to the physical world and others transfer freely, and whether experiencing that first-hand teaches a design principle better than reading it.",
    "Application — research-through-design in practice: building Living Atlas from the collected patterns, with sources on interactive and experiential teaching methods.",
    "Appendix — a devlog documenting how the patterns were applied while building Living Atlas."
  ],

  // ---- SECTION 3 ------------------------------------------------------

  practical: {
    title: "Living Atlas (working title)",
    oneLiner: "Living Atlas: an interactive library that rearranges itself.",
    hook: "Every pattern you pick reshapes the room around you — you don't read what it means, you walk through it.",
    paragraph:
      "Living Atlas is an abstract, walkable library that doubles as its own index. At the start, two collections are laid out for browsing: a small set of architecture patterns, and a matching set of level-design patterns drawn from the Game Design Atlas. Pick one, or several, and the modular library — its shelves, windows, a courtyard garden, a lighthouse glimpsed through the stacks — reshapes itself around the combination, with each active pattern keeping one consistent colour between the collection screen and its built form. Nothing is explained in explicit text; the space is the explanation. The test is simple: after walking through a combination, can a player say what pattern they just experienced, without ever being told its name first.",
    genre: "Short first-person spatial-learning experience / interactive pattern library",
    tags: ["First-Person", "Experimental", "Educational", "Modular", "Architecture", "Level Design", "Pattern Language", "Short", "Singleplayer", "Indie"],
    forWhom: [
      "Primary: the thesis committee/examiners, as a legible, playable demonstration of the pattern bridge between architecture and level design.",
      "Secondary: aspiring game designers, level design students, and enthusiasts — the modularity is deliberately built so the library itself could be reused or extended as a teaching tool beyond the thesis."
    ],
    playerImpact:
      "The player learns by recognition rather than exposition: a pattern is understood because it was walked through and seen change the space, not because it was defined first. The colour-coding gives them a way to check their own read against the intended pattern without being told outright whether they were right.",
    researcherImpact:
      "This is research-through-design: building Living Atlas tests, practically, whether a curated architecture / level-design pattern pairing can be made legible through spatial and colour coding alone. It also produces a reusable object — a small pattern library with real design decisions behind each entry — with more potential beyond the thesis's scope than a written argument alone would have."
  },

  prototypes: [],

  // ---- SECTION 4 ------------------------------------------------------

  timeline: [
    {
      phase: "Phase 1 — Foundation",
      dateRange: "Weeks 1–4",
      goals: [
        "Lock the framing and finalize the thesis question wording",
        "Select and finalize the 5–6 architecture patterns (one clear source each) and their matching Game Design Atlas categories",
        "Draft the Introduction chapter and the Application chapter's research-through-design methodology early — these concern framing and method, not findings, so they can be written before results exist",
        "Tech-test the core mechanic: can a module visibly reshape based on an active pattern selection at all"
      ],
      relatedSections: ["Section 1", "Section 2"]
    },
    {
      phase: "Phase 2 — Design & first playable",
      dateRange: "Weeks 5–8",
      goals: [
        "Design the module set for the chosen pattern pairs — colour coding, symbolic module choices (lighthouse, courtyard, etc.)",
        "Build a first playable combining at least two patterns",
        "Dedicated writing sprint: draft the Architecture Patterns and Level Design Patterns chapters from the pattern-selection notes"
      ],
      relatedSections: ["Section 3"]
    },
    {
      phase: "Phase 3 — Production & documentation",
      dateRange: "Weeks 9–12",
      goals: [
        "Full art / lighting pass on the finished pattern set — small and curated, not the full combinatorial space",
        "Documented design walkthroughs: play through each finished combination myself and log where the intended pattern reads clearly and where it doesn't — this replaces formal playtesting as evidence for The Bridge chapter",
        "Draft The Bridge chapter in parallel, cross-referencing what the build is teaching about the pairing"
      ],
      relatedSections: ["Section 2", "Section 3"]
    },
    {
      phase: "Phase 4 — Polish, write-up & defense prep",
      dateRange: "Weeks 13–16",
      goals: [
        "Collect and analyze the design-walkthrough notes against The Bridge and Application chapters",
        "Final two weeks reserved purely for writing / editing — kept separate from level polish so the two don't compete for time",
        "Final polish pass on the build; prepare defense presentation and this pitch site as supporting material"
      ],
      relatedSections: ["Section 2", "Section 3"]
    }
  ]

};

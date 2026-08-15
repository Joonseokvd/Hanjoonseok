(() => {
  const landing = {
    ko: `타이포그래피를 기반으로 웹, 인쇄물과 그 너머를 아우르는 다학제적 디자이너입니다. 디자인을 하나의 대상을 여러 관점에서 살펴보고, 세계를 바라보는 또 다른 방식을 드러내는 재구성의 행위로 접근합니다. 단순한 형태부터 복잡한 시스템까지 논리와 구조, 명료함을 바탕으로 작업합니다. 리서치와 사고를 통해 엄밀하면서도 표현력 있는 결과를 만들고, 프로젝트 전체가 일관된 질서를 갖도록 설계합니다.`,
    en: `I am a multidisciplinary designer rooted in typography and working across web, print, and beyond. I approach design as an act of reframing: examining a subject from multiple perspectives to reveal alternative ways of seeing the world. My practice ranges from simple forms to complex systems, always grounded in logic, structure, and clarity. Each project pursues coherence, with research and reasoning shaping outcomes that are both rigorous and expressive.`
  };

  const cvEnglish = new Map(Object.entries({
    "영원한 광경 디자인 디렉팅": "Eternal View — Design Direction",
    "Drei Stack 기획": "Drei Stack — Planning and Direction",
    "빛의 양피지 위에서(두성종이 전시)": "On the Parchment of Light (Doosung Paper Exhibition)",
    "구 레터링(페기 구)": "‘Gou’ Lettering for Peggy Gou",
    "FluoBoy(2024) 샘플북": "FluoBoy (2024) Specimen Book",
    "여백의 부피": "The Volume of White Space",
    "고가네초 FLIP": "Koganecho FLIP",
    "웹사이트 인공지능 과제수행 프로젝트": "Design with AI Project Website",
    "웹사이트 작가 유아연": "Artist Yoo Ayeon Website",
    "ENCORE 포스터": "ENCORE! Poster",
    "Unboxing New Printer 포스터": "Unboxing New Printer Poster",
    "디자인콜로키움 강연 포스터": "Design Colloquium Lecture Poster",
    "Noël Leu, 디자인 콜로키움 강연 포스터": "Noël Leu — Design Colloquium Lecture Poster",
    "Raw Archive, 2023 홍익시디 졸업주간": "Raw Archive, 2023 Hongik Visual Communication Design Graduation Week",
    "이 전시의 모든 것은 거짓이다": "Everything in This Exhibition Is a Lie",
    "이낙규": "Lee Nakkyu",
    "노기훈": "Noh Gihoon",
    "안그라픽스": "Ahn Graphics",
    "전시 ENCORE!, 홍익대학교 미술대학 R777": "ENCORE! Exhibition, R777, Hongik University College of Fine Arts",
    "전시 Unboxing New Printer, 홍익대학교 미술대학 R777": "Unboxing New Printer Exhibition, R777, Hongik University College of Fine Arts",
    "발표: 인공지능 과제수행 프로젝트, 한국디자인사학회": "Conference Presentation: Design with AI Project, Korean Society of Design History",
    "게재: 인공지능 과제수행 프로젝트, 엑스트라 아카이브 7, 디자인사연구, 한국디자인사학회": "Publication: Design with AI Project, Extra Archive 7, Design History Research, Korean Society of Design History"
  }));

  const details = {
    "/work-detail/100/16.html": {
      title: "All Kinds of White Paper",
      body: `This project surveys 419 sheets of white paper distributed in Korea by arranging them according to a deliberately unlikely system. I repeatedly classified samples collected from six domestic paper companies: Doosung, Samwon, Seokyung, Hansol, Moorim, and Hankuk. I first separated the papers officially designated as white from everything else, only to find that some papers in the “other” category were whiter than those labelled “white.” Classification by name had become meaningless.\n\nAfter removing the labels, I sorted the sheets by name, thickness, texture, and colour, arranging them along a spectrum from closest to farthest from white. Yet this method left certain papers ambiguous or excluded, even though they too were white paper. I eventually arrived at a simple conclusion: perfect white does not exist, so every one of these sheets can be called white.\n\nTo expose the arbitrariness of classification, I arranged the collected papers alphabetically by their Korean names and mounted them on black paper. None is superior to another; each exists differently, carrying its own material qualities without rank or hierarchy.`
    },
    "/work-detail/Grab it, Take it, and Feel it/4.html": { title: "Rreum", body: `A working notebook that brings together Rreum’s practice. Wanting it to reach as many readers as possible, I borrowed the familiar format and grid of a magazine.` },
    "/work-detail/Thunersee/31.html": { title: "Lake Thun — Thunersee", body: `I edited a collection of drawings by artist Lee Changheon, reinterpreting their graphic language as a book. At Lake Thun in Switzerland, he recalled a local story that abandoned metal weapons from the World Wars had given the lake its turquoise colour. Imagining weapons concealed beneath the water, he made a series of watercolours. I considered how that sense of concealment could be carried into print and into the structure of a book. The essay was therefore set on lines tilted at 45 degrees, then folded inward so that the text itself remains hidden.` },
    "/work-detail/atlas/29.html": { title: "Atlas der Metaphysischen Pflanzen", body: `An atlas of immaterial plants: talking nonsense through graphics. I designed a fictional academic journal devoted to metaphysical botanical phenomena. Through writing and illustration, it introduces plants nourished by immaterial forces such as memory, decay, time, energy, and faith.\n\nThe book was also produced to minimise its environmental impact. It uses leftover paper—so every copy contains a different selection—and avoids chemical adhesives throughout binding and packaging. Each copy is sewn and knotted using a traditional East Asian binding method.` },
    "/work-detail/chris/10.html": { title: "Design Colloquium Guest Lecture Poster", body: `I designed the second promotional poster for the October edition of Design Colloquium, a guest lecture series organised by Hongik University’s Visual Communication Design programme. The lecture featured Chris Hamamoto Partridge, a Bay Area–born designer and assistant professor at Seoul National University.` },
    "/work-detail/cor/28.html": { title: "Cor!", body: `Cor!, a process book documenting the development of a 2023 graduation project, was published through Drei Stack, the independent press I run.\n\nIntroduction\nHello, I’m Ryu Haechan. Although last year’s Tumblbug campaign did not reach its goal, I wanted all the more to preserve this project as a book. Together with designer Joonseok (@han_joonseok), I brought the project into one volume: the intense deliberations and trials, conversations with my advisor, and records made with my teammate Jung Haechan (@j_hchn). Cor! is available from Drei Stack (@dreistack) in a limited edition of fifty copies.\n\nI am now in my second year as an industrial designer, but the questions and investigations of my student years remain an essential point of departure and source of momentum. Rather than leave this record as merely a result from the past, I wanted it to remain a reference point to which I can return as I continue designing.` },
    "/work-detail/designwithai/17.html": { title: "Design with AI Project", body: `This project investigates how artificial intelligence might exercise agency and initiative as an active practitioner within the design process. I archived it as a website so that the inquiry could remain open and continue to evolve rather than end with a fixed conclusion. The project was presented at the Korean Society of Design History conference on 10 June 2022.\n\n> Visit the website` },
    "/work-detail/dreistack/27.html": { title: "Drei Stack", body: `I launched Drei Stack, an online bookshop exploring an alternative space in contemporary publishing through small editions and fluorescent printing.\n\nIntroduction\nThe conventional publishing market imposes an unusually high barrier to entry for artists. Publishing a book demands an understanding of every stage—from concept development and design to editing, printing, and distribution—and sometimes also the recognition needed to secure a publisher. For an individual, the process consumes considerable time and money without guaranteeing a return.\n\nDrei Stack proposes an alternative publishing model centred on collaboration with artists and removed from the mass-production and distribution systems of the conventional market. Once the artist determines the direction of a book, Drei Stack streamlines the unnecessary stages and handles everything from design to distribution. Every title is produced only in the quantity required.` },
    "/work-detail/ein/25.html": { title: "Ein Bericht einer kurzen Reise — A Record of a Short Journey", body: `Drawings made on an island circulate, turning together with thought. The design follows that circular movement, and every material in the book circulates as well. Each copy is made spontaneously from whatever leftover paper happens to be at hand.\n\nI told you clearly. I drew on the island. Footprints walk onward. The sound of the waves recedes. Would you like a tomato?\n\nIch habe es deutlich gesagt. Auf der Insel habe ich gezeichnet. Fußspuren gehen weiter. Das Rauschen der Wellen entfernt sich. Willst du Tomaten essen?` },
    "/work-detail/encore/12.html": { title: "ENCORE!", body: `I co-directed the exhibition ENCORE! with designer Najunheum. Reflecting its themes of reproduction and recycling, the poster tree was produced exclusively with environmentally responsible recycled papers from Doosung Paper.` },
    "/work-detail/eternal/30.html": { title: "Eternal View", body: `In 2025, I planned and designed the exhibition Eternal View. Presented in July and August 2025, it can now be visited at the Library of Photography by advance reservation.\n\nEternal View (2025–)\nThe Library of Photography must be migrated into data. Eternal View is the first attempt to relocate this physical place into the realm of data through VR and AR visualisation. Continuing the library’s spirit of being designed for disassembly and reconstruction, the project does not settle into a finished state; it remains open to repeated assembly and dismantling. By imagining a view without end, it searches for a way in which the Library of Photography might endure indefinitely.\n\nDirection and design: Han Joonseok\nVisualisation development and design: Yoo Minseo\nOrganised by: Noh Gihoon, LBDF\nSystem development: Jung Yoora` },
    "/work-detail/fluoboy/21.html": { title: "FluoBoy", body: `FluoBoy is Vine Extra Color’s first fluorescent-print specimen book. Samples were printed with different printers on a selection of papers from Doosung Paper and bound with a spiral.` },
    "/work-detail/gokanecho/18.html": { title: "Koganecho FLIP こがねちょうFLIP", body: `I designed Koganecho FLIP, a photobook by Noh Gihoon.\n\n🚇 About the book\nKoganecho FLIP comprises photographs of Keikyu Line trains passing between Hinodecho and Koganecho stations in Yokohama. Beginning with the first exposure at 5:23:57 a.m. on 17 August 2018 and continuing until the final train at 12:37:07 a.m., 683 photographs were taken in sequence from exactly the same position: 35°26'28.3\"N, 139°37'31.2\"E, at an altitude of 36 metres. The vibration of the Keikyu Line beside an ageing two-storey Japanese house designed for earthquake resistance produces minute movements in both the photographer’s body and tripod. While the human retina dissolves passengers into the streaking light of the fast-moving train, a high-speed camera shutter releases them from abstraction and renders them as still, granular photographic images. Numbered from 1 to 683, the identically framed images distinguish the changing faces inside and outside the train only through the passage of time. Since opening in 1898, the Keikyu Line has travelled along the same track. Its trajectory—extending time through the movement of a massive machine and artificial light—provides the source data that Koganecho FLIP compresses into individual photographs.` },
    "/work-detail/gou/23.html": { title: "‘Gou’ Lettering", body: `I created the Korean lettering “구” for Peggy Gou’s stage visuals.` },
    "/work-detail/incheon/2.html": { title: "INCHEON", body: `I designed this typographic poster as an experiment in city branding for Incheon. Its vivid blue draws on the clear sea and sky associated with the city. The poster was presented and exhibited in the Grand Ballroom at Songdo Convensia, Incheon.` },
    "/work-detail/itchy/5.html": { title: "Itchy Feet", body: `People may be unable to change themselves, yet they are always changing. This is worth remembering when meeting a friend after many years apart. Drawing a social observation from an intensely personal experience, I translated the idea into a printed visual work.` },
    "/work-detail/iwear/6.html": { title: "I'm__ and I Wear↓", body: `This project responds to the question of how we relate to one another today. We interpret and understand much of what surrounds us through the images we consume every day. Such image-based experiences can produce unconscious bias, stereotypes, and misunderstanding. In this context, the work asks visitors to reconsider assumptions formed around fashion. Participants enter the booth, document their personal style and identity in photographs, and revisit the results online as a way of reflecting on “fashion framing.”` },
    "/work-detail/joonseokthinks/7.html": { title: "Joonseok Thinks That, Joonseok Says That", body: `A process book collecting sociocultural design projects. It begins with the act of thinking and concludes with the act of speaking.` },
    "/work-detail/kki/33.html": { title: "Didn’t You Bring Your {kki}? Go, Get It, Quick!", body: `I designed a book around a light-hearted conversation with U.go, a metalsmith and voguing dancer. Between metalwork and voguing, I found a shared practice of repetition and disciplined training. From this connection, I devised a sculptural book that gives form to the bent wrist and the trajectory of the arm—gestures common to both practices.` },
    "/work-detail/neol/9.html": { title: "Design Colloquium Guest Lecture Poster", body: `I designed a promotional poster for Design Colloquium, a guest lecture series organised by Hongik University’s Visual Communication Design programme. That October, the programme invited Noël Leu, founder of Grilli Type and a Hongik University alumnus. The poster draws on Grilli Type’s bold fields of colour and uses GT Walsheim, designed by Leu himself—a remarkably handsome typeface.` },
    "/work-detail/novice/8.html": { title: "A Novice Sign Painter’s Practice", body: `As an exercise in drawing Roman capitals, I lettered the social-media handles of people around me and bound the results as a book.\n\nThe title, A Novice Sign Painter’s Practice, came from three ideas. First, an Instagram handle functions as the owner’s signboard in the social world. Second, the work was inspired by Roman letters painted with brushes by sign painters in the Roman Empire. Third, although a novice, I practised diligently with the intention of making each person a fine sign. Finished signs made after this exercise may eventually disperse to clients in different places, but the practice sheets remain and accumulate. Bound together, they cease to be a set of inconsequential loose exercises and become a book recording the maker’s development.` },
    "/work-detail/pasta/11.html": { title: "Pastypography", body: `How far can mass production guarantee reproducibility? Are mass-produced objects ever perfectly consistent? Paradoxically, alphabet-shaped pasta stamped out in a factory varied from piece to piece, making it an ideal material through which to exercise craftsmanship. Sorting, selecting, and printing with the pasta like a compositor in the era of metal type, I began to see each piece as two things at once: a seemingly flawless plastic artefact made by a perfect machine, and a living form that swells in water, bristles at the edges, and eventually grows mould.` },
    "/work-detail/queer/32.html": { title: "Queer Within Queer Within Queer", body: `This autobiographical essay by Ok Jahyeon reflects on the private and outward queer experiences that shaped the author’s identity. I considered how the layered experience of queerness—never reducible to a simple queer/non-queer divide—might be designed through the medium of a book.\n\nThree layers of queer identity are expressed as a book within a book within a book. To embody the irreversible nature of coming out, the inner books can be reached only by unbinding or tearing open the volume.` },
    "/work-detail/refresh/1.html": { title: "Gaewoon", body: `I explored how the Korean sensation gaewoon—a clean, bracing feeling—might be expressed through typography. An unexpected modern blackletter evokes the subtle freshness of mint. Does the poster leave you feeling refreshed?` },
    "/work-detail/reum/3.html": { title: "Rreum(?)", body: `As a designer, I usually construct letterforms according to a rationale: deciding in advance which letters to write or draw before visualising them. Here I reversed that process and tried, without overthinking it, to discover letterforms in something that already existed. Whatever the result, I simply wanted to make something for the pleasure of it.` },
    "/work-detail/ripspace/14.html": { title: "Rip Space", body: `Continuing the concerns of Park Chanyoon’s work Rip Space, I designed a book that foregrounds the materiality of its components. Waste materials left over from garment production were scanned and reframed as new forms, placing them within the exhibition’s context of haute couture.` },
    "/work-detail/roots/20.html": { title: "Roots Before a Thought", body: `This work captures the moving instant when an idea—however small or inconsequential at first—passes through many stages and finally begins to shine.` },
    "/work-detail/shadow/22.html": { title: "Reserved Seat Without a Shadow", body: `Reserved Seat Without a Shadow documents research into three makers seeking to make the fictional image of the Akira motorcycle tangible in the physical world, while examining the grounds for their practice. The publication combines a research book with the catalogue for the exhibition Reserved Seat Without a Shadow, bound together in a PVC jacket.\n\nText: Cho Moohyun\nEditing: Cho Moohyun, Han Joonseok\nDesign: Han Joonseok\nInstallation and production assistance: Han Seunghan\nSpace and exhibition archive: WWNN\nPublished 13 December 2024\n© 2024 Cho Moohyun` },
    "/work-detail/shipskin/26.html": { title: "On the Parchment of Light", body: `On the Parchment of Light is both a poem and a poster, interpreting from a designer’s perspective the possibilities of Sheep Skin paper, which inherits qualities associated with parchment.\n\nMost translucent papers available commercially feel cold, rigid, and industrial. Sheep Skin, by contrast, combines translucency with a natural texture and soft touch, opening a broad range of possibilities. Its irregular, parchment-like pattern is also particularly suited to handcrafted print.` },
    "/work-detail/soma/24.html": { title: "SOMA 2025", body: `I designed the catalogue and brochure for the Konkuk University Department of Apparel Design graduation fashion show.\n\nSOMA 2025\nPublished: 30 May 2025\nPublisher: Graduation Preparation Committee, Department of Apparel Design, Konkuk University\nBook design: Han Joonseok\nPhotography: Park Jieun\nModels: Kwon Eunji, Kim Yunseo, Kim Taeyoon, Park Soyeon, Son Jimin, Oh Hyeseong, Jung Hwanhee\nHair and make-up: Ko Sookyung, Kim Seoyeon, Kim Seonghyeon, Bae Eonsu, Son Jinyeong, Lee Jiye, Cho Sua, Han Areum` },
    "/work-detail/unboxing/13.html": { title: "Unboxing New Printer", body: `Contemporary print culture no longer demands purely rational value; it is unfolding in more varied forms than ever. Printed matter today may be unsuited to mass production, intensely personal, or produced without any obvious use.\n\n🖨 I directed an exhibition of twenty books centred on “printing and printers.” Greenbee, a graphic-design collective at Hongik University, received a fluorescent printer from Vine Extra Color. Using the machine, we considered what printed media could mean in 2022 and explored it with curiosity. We wanted to move beyond an older understanding of fluorescent colour merely as a spot ink formulated for mass production. What kinds of printed matter will we produce next, and what will we pass on to the next generation?\n\n🖨 Following the motif of high-mix, low-volume production, all twenty exhibition modules were made to different dimensions. Each footprint was derived from an open spread of the participant’s book with an appropriate margin, then assigned an individual height. At 85, 95, 105, 115, or 125 centimetres, the modules created a suitable viewing distance when looking down at the books. Step stools were provided for visitors who found the varied heights uncomfortable, and all books could be picked up and handled.` },
    "/work-detail/volume/19.html": { title: "The Volume of White Space", body: `White space is essential to typography. It is not an empty area simply left behind, but a space controlled by the absence that shapes letters and pages. The Volume of White Space addresses the white space that exists on the page. By giving it a convex, physical “volume,” the work draws attention to the presence created through emptiness.\n\nThe piece was hand-embossed on 80 × 80 cm printmaking paper and bound by hand. It was presented at the Hongik University Visual Communication Design graduation exhibition.` },
    "/work-detail/waffle/15.html": { title: "Waffles Are Spies.", body: `By looking at an everyday object as though it were unfamiliar and assigning it an entirely different function, I produced an unexpected visual result. With their suspiciously low price, enigmatic square grid, and mixture of assorted ingredients, waffles carry all the signs of espionage.` }
  };

  const path = decodeURIComponent(location.pathname);
  const detailKey = Object.keys(details).find(key => path.endsWith(key));
  const original = new WeakMap();

  function remember(element) {
    if (element && !original.has(element)) original.set(element, element.textContent);
  }

  function setText(element, value, lang) {
    if (!element) return;
    remember(element);
    element.textContent = lang === "en" ? value : original.get(element);
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.body.dataset.language = lang;

    if (path.endsWith("/index.html") || path === "/" || /\/Hanjoonseok\/?$/.test(path)) {
      const intro = document.querySelector(".intro p");
      if (intro) {
        remember(intro);
        intro.textContent = lang === "en" ? landing.en : landing.ko;
      }
    }

    if (path.endsWith("/cv.html")) {
      document.querySelectorAll(".cv .details").forEach(item => {
        remember(item);
        const ko = original.get(item).trim();
        item.textContent = lang === "en" ? (cvEnglish.get(ko) || ko) : ko;
      });
    }

    if (detailKey) {
      const translation = details[detailKey];
      setText(document.querySelector(".work-title"), translation.title, lang);
      setText(document.querySelector(".work-description p"), translation.body, lang);
    }

    document.querySelectorAll(".language-switch button").forEach(button => {
      const active = button.dataset.lang === lang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    localStorage.setItem("hanjoonseok-language", lang);
  }

  function mountSwitch() {
    if (document.querySelector(".language-switch")) return;
    const switcher = document.createElement("div");
    switcher.className = "language-switch";
    switcher.setAttribute("aria-label", "Language");
    switcher.innerHTML = `<button type="button" data-lang="en">EN</button><button type="button" data-lang="ko">한</button>`;
    switcher.addEventListener("click", event => {
      const button = event.target.closest("button[data-lang]");
      if (button) applyLanguage(button.dataset.lang);
    });
    document.body.appendChild(switcher);
  }

  document.addEventListener("DOMContentLoaded", () => {
    mountSwitch();
    applyLanguage(localStorage.getItem("hanjoonseok-language") === "en" ? "en" : "ko");
  });
})();

const CONFIG = {
  prenom1: "Siméon",
  prenom2: "Bénédicte",
  initiales: "S & B",
  dateISO: "2026-11-14T10:00:00",
  dateLongue: "Samedi 14 novembre 2026",
  accueil:
    "Nous avons la joie de vous inviter à célébrer notre union. Votre présence rendra ce jour inoubliable.",
  histoireTitre: "Notre histoire d'amour",
  histoire: [
    {
      quand: "Notre rencontre",
      texte:
        "Notre histoire commence à l’Église ARC, là où nos chemins se sont croisés sans que nous imaginions ce que l’avenir nous réservait.",
    },
    {
      quand: "Le premier rendez-vous",
      texte:
        "Au fil du temps, une belle complicité est née. Le jour de mon anniversaire, nous avons partagé notre tout premier rendez-vous au glacier Blé Doré, un moment simple, mais qui a marqué le début d'une belle aventure à deux.",
    },
    {
      quand: "La demande en mariage",
      texte:
        "Les sentiments ont grandi, les liens se sont renforcés et, au soir du réveillon de Noël 2025, dans l'intimité et loin des regards, il a fait sa demande en mariage. Un instant précieux, une promesse échangée et le début d'un engagement pour la vie.",
    },
  ],
  galerieTitre: "Nos moments",
  galerie: [
    "/assets/img/img1.jpeg",
    "/assets/img/img2.jpeg",
    "/assets/img/img4.jpeg",
  ],
  photoAccueil: "/assets/img/img4.jpeg",
  programmeTitre: "Le programme",
  programme: [
    {
      heure: "11h00",
      titre: "Mariage Civil",
      texte: "L’union officielle devant le maire",
    },
    {
      heure: "14h00",
      titre: "Bénédiction nuptiale",
      texte: "Enseignement & échange des vœux",
    },
    {
      heure: "15h00",
      titre: "Coupure du Gâteaux et remise de présents",
      texte: "Souvenirs avec famille et amis",
    },
    {
      heure: "16h00",
      titre: "Repas et ouverture du bal",
      texte: "Un déjeuner festif et musical suivie de prestations",
    },
    {
      heure: "18h00",
      titre: "Remerciements",
      texte: "Un mot pour clore la journée",
    },
  ],
  lieux: [
    {
      lieuTitre: "Mairie",
      lieuNom: "Mairie de Cocody Saint Jean",
      lieuAdresse: "Mairie Cocody St. Jean, Abidjan, Côte d'Ivoire",
      lieuUrl: "Mairie+de+Cocody",
      lieuItineraire: "Mairie+de+Cocody",
      btnText: "Mairie",
    },
    {
      lieuTitre: "Réception",
      lieuNom: "Dream Espace",
      lieuAdresse: "Cocody, Abidjan, Côte d'Ivoire",
      lieuUrl: "Dream+Espace",
      lieuItineraire: "Dream+Espace",
      btnText: "Dream Espace",
    },
  ],
  tenueTitre: "Tenue",
  tenueTexte:
    "Élégance de rigueur. Nous aimons les teintes de notre palette : bordeaux, émeraude et or. Évitez le blanc, réservé à la mariée.",
  couleurs: [
    { nom: "Bordeaux", hex: "#6d0f24" },
    { nom: "Émeraude", hex: "#0f5a46" },
    { nom: "Or", hex: "#c9a24b" },
  ],
  rsvpTitre: "Confirmer ma présence",
  rsvpTexte: "Merci de nous répondre avant le",
  rsvpDate: "12 novembre 2026",
  rsvpBouton: "Je confirme ma présence",
  rsvpLien:
    "https://docs.google.com/forms/d/e/1FAIpQLScXF7zvxPf23lYYINxYecDWLqW3kKMgFy902W9f6TC1u8vBeQ/viewform",
  merci: "Merci de faire partie de notre histoire",
  hashtag: "#SimeonEtBenedicte",
};

(function () {
  const C = CONFIG,
    $ = (s) => document.querySelector(s);
  const rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mapQ = encodeURIComponent(C.lieuRecherche);

  $("#es").textContent = C.initiales.replace(/\s/g, "");
  $("#ec").innerHTML = C.prenom1 + "<br>&amp; " + C.prenom2;
  $("#ed").textContent = "14 · 11 · 2026";
  document.title = C.prenom1 + " & " + C.prenom2 + " · " + C.dateLongue;

  $("#site").innerHTML = `
<header class="hero" id="accueil">
  <img class="bg" src="${C.photoAccueil}" alt="" onerror="this.remove()">
  <p class="cin">Nous nous marions</p>
  <h1>${C.prenom1}<i>&amp;</i>${C.prenom2}</h1>
  <p class="w">${C.accueil}</p>
  <p class="cin" style="margin-bottom:18px">${C.dateLongue}</p>
  <div class="cd" role="timer" aria-label="Compte à rebours">
    <div><b id="d">0</b><span>JOURS</span></div><div><b id="h">0</b><span>HEURES</span></div>
    <div><b id="m">0</b><span>MIN</span></div><div><b id="s">0</b><span>SEC</span></div>
  </div>
  <span class="down"></span>
</header>

<section id="histoire">
  <div class="orn rv"></div><p class="cin rv">Depuis le premier jour</p>
  <h2 data-w>${C.histoireTitre}</h2>
  <div class="tl" id="tl"><span class="ln"></span>
    ${C.histoire.map((e) => `<article class="rv"><p class="cin">${e.quand}</p><h3 data-w>${e.quand}</h3><p>${e.texte}</p></article>`).join("")}
  </div>
</section>

<section class="gal" id="galerie">
  <div class="orn rv"></div><p class="cin rv">En images</p>
  <h2 data-w>${C.galerieTitre}</h2>
  ${C.galerie.map((src) => `<figure class="ph rv"><img src="${src}" alt="Photo des mariés" loading="lazy" onerror="this.remove()"></figure>`).join("")}
</section>

<section id="programme">
  <div class="orn rv"></div><p class="cin rv">${C.dateLongue}</p>
  <h2 data-w>${C.programmeTitre}</h2>
  <ul class="prog">
    ${C.programme.map((p) => `<li class="rv"><time>${p.heure}</time><div><h3>${p.titre}</h3><p>${p.texte}</p></div></li>`).join("")}
  </ul>
</section>

<section class="band lieu" id="lieu">
      <div class="orn rv"></div><p class="cin rv">Rendez-vous</p>
      <div class="places">
${C.lieux
  .map(
    (lieu) => `
    <div>
      <h2 data-w>${lieu.lieuTitre}</h2>
      <h3 class="rv">${lieu.lieuNom}</h3>
      <p class="rv">${lieu.lieuAdresse}</p>
      <div class="map rv"><iframe title="Carte du lieu" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=${lieu.lieuUrl}&output=embed"></iframe></div>
      <a class="btn rv" target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=${lieu.lieuItineraire}">Itinéraire ${lieu.btnText}</a>
    </div>`,
  )
  .join("")}
    </div>
</section>

<section id="tenue">
  <div class="orn rv"></div><p class="cin rv">Dress code</p>
  <h2 data-w>${C.tenueTitre}</h2>
  <p class="rv">${C.tenueTexte}</p>
  <div class="dots rv">${C.couleurs.map((c) => `<div><i style="background:${c.hex}"></i>${c.nom}</div>`).join("")}</div>
</section>

<section class="rsvp" id="rsvp"><div>
  <div class="orn rv"></div><p class="cin rv">Votre réponse</p>
  <h2 data-w>${C.rsvpTitre}</h2>
  <p class="rv">${C.rsvpTexte}<b>${C.rsvpDate}</b></p>
  <a class="btn rv" target="_blank" rel="noopener" href="${C.rsvpLien}">${C.rsvpBouton}</a>
</div></section>

<footer>
  <p class="rv">${C.merci}</p>
  <div class="scr rv">${C.initiales}</div>
  <span class="cin rv">${C.hashtag}</span>
</footer>`;

  /* titres mot par mot */
  document.querySelectorAll("[data-w]").forEach((h) => {
    let i = 0;
    h.innerHTML = h.textContent
      .trim()
      .split(/\s+/)
      .map(
        (w) =>
          `<span class="wd" style="transition-delay:${i++ * 0.16}s">${w}</span>`,
      )
      .join(" ");
  });

  /* apparition au scroll */
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.18, rootMargin: "0px 0px -6% 0px" },
  );
  document.querySelectorAll(".rv,[data-w]").forEach((n) => io.observe(n));

  /* compte à rebours */
  const target = new Date(C.dateISO).getTime();
  function tick() {
    let t = (Math.max(0, target - Date.now()) / 1000) | 0;
    const v = {
      d: (t / 86400) | 0,
      h: ((t % 86400) / 3600) | 0,
      m: ((t % 3600) / 60) | 0,
      s: t % 60,
    };
    for (const k in v) $("#" + k).textContent = String(v[k]).padStart(2, "0");
  }
  tick();
  setInterval(tick, 1000);

  /* frise + parallaxe */
  const tl = $("#tl"),
    phs = [...document.querySelectorAll(".ph")];
  let busy = false;
  function onScroll() {
    busy = false;
    const vh = innerHeight,
      r = tl.getBoundingClientRect();
    tl.style.setProperty(
      "--p",
      Math.min(1, Math.max(0, (vh * 0.72 - r.top) / r.height)),
    );
    phs.forEach((p) => {
      const b = p.getBoundingClientRect();
      if (b.bottom < 0 || b.top > vh) return;
      const k = (b.top + b.height / 2 - vh / 2) / vh;
      p.firstElementChild &&
        (p.firstElementChild.style.transform = `translateY(${(-k * b.height * 0.12).toFixed(1)}px)`);
    });
  }
  if (rm) {
    tl.style.setProperty("--p", 1);
  } else {
    addEventListener(
      "scroll",
      () => {
        if (!busy) {
          busy = true;
          requestAnimationFrame(onScroll);
        }
      },
      { passive: true },
    );
    addEventListener("resize", onScroll);
    onScroll();
  }

  /* ouverture */
  $("#open").addEventListener("click", () => {
    const intro = $("#intro");
    intro.classList.add("open");
    const d = rm ? 200 : 3300;
    setTimeout(() => {
      $("#site").classList.add("show");
      intro.classList.add("gone");
      document.body.classList.remove("lock");
      window.scrollTo(0, 0);
      setTimeout(() => intro.remove(), 1600);
    }, d);
  });
})();

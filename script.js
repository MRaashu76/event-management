/**
 * ============================================================
 *  SCRIPT.JS — PAGE BUILDER + INTERACTIONS
 *  Reads all content from data.js and renders the full page.
 *  You should NOT need to edit this file to update content.
 * ============================================================
 */

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => ctx.querySelectorAll(sel);

function el(tag, cls = "", html = "") {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html) e.innerHTML = html;
  return e;
}

// ─── BUILD: PAGE TITLE ────────────────────────────────────────────────────────
document.title = `${SITE.name} – ${SITE.tagline}`;

// ─── BUILD: NAVBAR ────────────────────────────────────────────────────────────
function buildNav() {
  const nav = $("nav");
  const logo = el("a", "nav-logo", `<span>${SITE.name[0]}</span>${SITE.name.slice(1)}`);
  logo.href = "#";

  const ul = el("ul", "nav-links");
  ul.id = "navLinks";

  SITE.nav.forEach(item => {
    const li = el("li");
    if (item.dropdown) {
      li.classList.add("dropdown");
      const a = el("a", "", item.text);
      a.href = "#";
      const sub = el("ul", "dropdown-menu");
      item.dropdown.forEach(d => {
        const sli = el("li");
        const sa = el("a", "", d.text);
        sa.href = d.href;
        sli.appendChild(sa);
        sub.appendChild(sli);
      });
      li.appendChild(a);
      li.appendChild(sub);
    } else {
      const a = el("a", "", item.text);
      a.href = item.href;
      li.appendChild(a);
    }
    ul.appendChild(li);
  });

  const ctaLi = el("li");
  const cta = el("a", "nav-btn", SITE.navCTA.text);
  cta.href = SITE.navCTA.href;
  ctaLi.appendChild(cta);
  ul.appendChild(ctaLi);

  const ham = el("div", "hamburger");
  ham.id = "hamburger";
  ham.onclick = toggleNav;
  ham.innerHTML = "<span></span><span></span><span></span>";

  nav.appendChild(logo);
  nav.appendChild(ul);
  nav.appendChild(ham);
}

// ─── BUILD: HERO ─────────────────────────────────────────────────────────────
function buildHero() {
  $("#hero").innerHTML = `
    <div class="hero-bg">
      <div class="hero-grid"></div>
      <div class="hero-orb hero-orb-1"></div>
      <div class="hero-orb hero-orb-2"></div>
    </div>
    <div class="hero-content">
      <div class="hero-eyebrow">${SITE.heroEyebrow}</div>
      <h1 class="hero-title"><span>${SITE.name[0]}</span>${SITE.name.slice(1)}</h1>
      <p class="hero-subtitle">${SITE.heroSubtitle}</p>
      <div class="hero-cta">
        <a href="${SITE.heroCTA1.link}" class="btn-primary">${SITE.heroCTA1.text}</a>
        <a href="${SITE.heroCTA2.link}" class="btn-outline">${SITE.heroCTA2.text}</a>
      </div>
    </div>
    <div class="hero-scroll">SCROLL</div>
  `;
}

// ─── BUILD: TICKER ────────────────────────────────────────────────────────────
function buildTicker() {
  const inner = $(".ticker-inner");
  const doubled = [...SITE.ticker, ...SITE.ticker]; // duplicate for seamless scroll
  inner.innerHTML = doubled.map(t => `<span class="ticker-item">${t}</span>`).join("");
}

// ─── BUILD: SHOWS ─────────────────────────────────────────────────────────────
function buildShows() {
  $(".shows-list").innerHTML = SITE.shows.map((show, i) => `
    <a href="${show.ticketLink}" class="show-item">
      <div class="show-num">${String(i + 1).padStart(2, "0")}</div>
      <div class="show-info">
        <div class="show-name">${show.name}</div>
        <div class="show-genre">${show.genre}</div>
      </div>
      <div class="show-date">${show.date} · ${show.city}</div>
      <button class="show-tickets">Get Tickets</button>
    </a>
  `).join("");
}

// ─── BUILD: ABOUT ─────────────────────────────────────────────────────────────
function buildAbout() {
  const a = SITE.about;
  $("#about-text").innerHTML = `
    <div class="section-label">${a.label}</div>
    <h2 class="big-quote">${a.heading} <span>${a.headingHighlight}</span></h2>
    ${a.paragraphs.map(p => `<p>${p}</p>`).join("")}
    <a href="${a.ctaLink}" class="btn-primary">${a.ctaText}</a>
  `;

  $(".stats-row").innerHTML = SITE.stats.map(s => `
    <div class="stat-card">
      <div class="stat-num">${s.number}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join("");
}

// ─── BUILD: GALLERY ───────────────────────────────────────────────────────────
function buildGallery() {
  $(".gallery-grid").innerHTML = SITE.gallery.map((g, i) => {
    let spanClass = "";
    if (g.span === "large") spanClass = "gallery-large";
    if (g.span === "wide")  spanClass = "gallery-wide";

    const content = g.image
      ? `<img src="${g.image}" alt="${g.label || "Gallery"}" class="gallery-img">`
      : `<div class="gallery-placeholder">
           ${i === 0 ? '<div class="gallery-lights"></div>' : ""}
           ${g.emoji || ""}
           ${g.label ? `<br><span style="font-size:0.8rem;letter-spacing:2px;margin-top:8px">${g.label}</span>` : ""}
         </div>`;

    return `
      <div class="gallery-item ${spanClass}" data-index="${i}">
        ${content}
        <div class="gallery-overlay">
          <div class="gallery-icon">⊕</div>
          ${g.label ? `<div class="gallery-caption">${g.label}</div>` : ""}
        </div>
      </div>
    `;
  }).join("");
}

// ─── BUILD: ARTISTS ───────────────────────────────────────────────────────────
function buildArtists() {
  $(".artists-grid").innerHTML = SITE.artists.map(a => {
    const bg = a.avatarGradient || "linear-gradient(135deg, var(--neon), #ff8800)";
    return `
      <div class="artist-card">
        <div class="artist-avatar" style="background:${bg}">${a.initials}</div>
        <div class="artist-name">${a.name}</div>
        <div class="artist-genre">${a.genre}</div>
      </div>
    `;
  }).join("");
}

// ─── BUILD: CATEGORIES ────────────────────────────────────────────────────────
function buildCategories() {
  $(".cat-grid").innerHTML = SITE.categories.map(c => `
    <a href="${c.link}" class="cat-item">
      <div class="cat-icon">${c.icon}</div>
      <div class="cat-name">${c.name}</div>
      <div class="cat-desc">${c.desc}</div>
      <div class="cat-arrow">→</div>
    </a>
  `).join("");
}

// ─── BUILD: NEWS ──────────────────────────────────────────────────────────────
function buildNews() {
  $(".news-grid").innerHTML = SITE.news.map(n => `
    <a href="${n.link}" class="news-card">
      <div class="news-thumb">
        <div class="news-img-placeholder">${n.emoji}</div>
        <span class="news-tag">${n.tag}</span>
      </div>
      <div class="news-meta">${n.date} · ${n.comments} Comments</div>
      <div class="news-title">${n.title}</div>
    </a>
  `).join("");
}

// ─── BUILD: NEWSLETTER ────────────────────────────────────────────────────────
function buildNewsletter() {
  const nl = SITE.newsletter;
  $(".newsletter-inner").innerHTML = `
    <div class="section-label">${nl.label}</div>
    <h2>${nl.heading}<br>It's <span style="color:var(--neon)">${nl.headingHighlight}</span></h2>
    <p>${nl.subtext}</p>
    <div class="newsletter-form">
      <input type="email" placeholder="Your email address">
      <button>${nl.buttonText}</button>
    </div>
  `;
}

// ─── BUILD: FOOTER ────────────────────────────────────────────────────────────
function buildFooter() {
  const f = SITE.footer;

  $(".footer-inner").innerHTML = `
    <div class="footer-brand">
      <div class="logo"><span>${SITE.name[0]}</span>${SITE.name.slice(1)}</div>
      <p>${f.about}</p>
      <div class="footer-socials">
        ${f.socials.map(s => `<a href="${s.link}">${s.label}</a>`).join("")}
      </div>
    </div>
    ${f.columns.map(col => `
      <div class="footer-col">
        <h4>${col.heading}</h4>
        <ul>${col.links.map(l => `<li><a href="${l.href}">${l.text}</a></li>`).join("")}</ul>
      </div>
    `).join("")}
  `;

  $(".footer-bottom").innerHTML = `
    <span>${f.copyright}</span>
    <span>${f.tagline}</span>
  `;
}

// ─── INTERACTIONS ────────────────────────────────────────────────────────────

function toggleNav() {
  $("#navLinks").classList.toggle("open");
}

// Close mobile nav on any nav link click
document.addEventListener("click", (e) => {
  if (e.target.closest(".nav-links a")) {
    $("#navLinks").classList.remove("open");
  }
});

// Navbar shrink on scroll
window.addEventListener("scroll", () => {
  $("nav").classList.toggle("scrolled", window.scrollY > 60);
  highlightActiveNav();
});

// Highlight current section in nav
function highlightActiveNav() {
  let current = "";
  $$("section[id]").forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  $$(".nav-links a").forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
}

// Scroll-reveal animation
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.08 });

  $$(".show-item, .news-card, .artist-card, .cat-item, .stat-card, .gallery-item").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    el.style.transition = "opacity 0.55s ease, transform 0.55s ease";
    observer.observe(el);
  });
}

// Newsletter form
function initNewsletter() {
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".newsletter-form button")) return;
    const input = $(".newsletter-form input");
    const btn   = $(".newsletter-form button");
    if (input && input.value.includes("@")) {
      input.value = "";
      btn.textContent = "✓ Subscribed!";
      btn.style.background = "#28a745";
      setTimeout(() => {
        btn.textContent = SITE.newsletter.buttonText;
        btn.style.background = "";
      }, 3000);
    } else if (input) {
      input.style.borderColor = "#ff3c00";
      input.placeholder = "Please enter a valid email";
      setTimeout(() => {
        input.style.borderColor = "";
        input.placeholder = "Your email address";
      }, 2000);
    }
  });

  document.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && e.target.closest(".newsletter-form input")) {
      $(".newsletter-form button")?.click();
    }
  });
}

// ─── GALLERY LIGHTBOX + VIEW ALL ─────────────────────────────────────────────
function initGallery() {
  let currentIndex = 0;

  // ── Inject lightbox HTML into page ──
  const lightboxHTML = `
    <div id="lb-overlay" class="lb-overlay" style="display:none">
      <button class="lb-close" id="lb-close">✕</button>
      <button class="lb-arrow lb-prev" id="lb-prev">&#8249;</button>
      <div class="lb-content">
        <div class="lb-media" id="lb-media"></div>
        <div class="lb-caption" id="lb-caption"></div>
        <div class="lb-counter" id="lb-counter"></div>
      </div>
      <button class="lb-arrow lb-next" id="lb-next">&#8250;</button>
    </div>

    <div id="va-overlay" class="va-overlay" style="display:none">
      <div class="va-box">
        <div class="va-header">
          <span class="va-title">Full Gallery</span>
          <button class="va-close" id="va-close">✕</button>
        </div>
        <div class="va-grid" id="va-grid"></div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", lightboxHTML);

  // ── Helpers ──
  function getMediaHTML(g) {
    if (g.image) return `<img src="${g.image}" alt="${g.label || "Gallery"}" class="lb-img">`;
    return `<div class="lb-emoji-wrap"><div class="lb-emoji">${g.emoji || "🎵"}</div></div>`;
  }

  function openLightbox(index) {
    currentIndex = index;
    showLightboxSlide();
    document.getElementById("lb-overlay").style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    document.getElementById("lb-overlay").style.display = "none";
    document.body.style.overflow = "";
  }

  function showLightboxSlide() {
    const g = SITE.gallery[currentIndex];
    document.getElementById("lb-media").innerHTML = getMediaHTML(g);
    document.getElementById("lb-caption").textContent = g.label || "";
    document.getElementById("lb-counter").textContent = `${currentIndex + 1} / ${SITE.gallery.length}`;
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + SITE.gallery.length) % SITE.gallery.length;
    showLightboxSlide();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % SITE.gallery.length;
    showLightboxSlide();
  }

  // ── Lightbox controls ──
  document.getElementById("lb-close").addEventListener("click", closeLightbox);
  document.getElementById("lb-prev").addEventListener("click", (e) => { e.stopPropagation(); prevSlide(); });
  document.getElementById("lb-next").addEventListener("click", (e) => { e.stopPropagation(); nextSlide(); });

  document.getElementById("lb-overlay").addEventListener("click", (e) => {
    if (e.target.id === "lb-overlay") closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    const lb = document.getElementById("lb-overlay");
    const va = document.getElementById("va-overlay");
    if (lb.style.display !== "none") {
      if (e.key === "ArrowLeft")  prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "Escape")     closeLightbox();
    }
    if (va.style.display !== "none" && e.key === "Escape") closeViewAll();
  });

  // Click on gallery item → open lightbox
  document.addEventListener("click", (e) => {
    const item = e.target.closest(".gallery-item");
    if (!item) return;
    openLightbox(parseInt(item.dataset.index));
  });

  // ── View All Gallery ──
  function openViewAll() {
    const grid = document.getElementById("va-grid");
    grid.innerHTML = SITE.gallery.map((g, i) => `
      <div class="va-item" data-index="${i}">
        ${g.image
          ? `<img src="${g.image}" alt="${g.label || "Gallery"}">`
          : `<div class="va-emoji">${g.emoji || "🎵"}</div>`
        }
        ${g.label ? `<div class="va-label">${g.label}</div>` : ""}
      </div>
    `).join("");

    // Click on view-all item → switch to lightbox
    grid.querySelectorAll(".va-item").forEach(item => {
      item.addEventListener("click", () => {
        closeViewAll();
        openLightbox(parseInt(item.dataset.index));
      });
    });

    document.getElementById("va-overlay").style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function closeViewAll() {
    document.getElementById("va-overlay").style.display = "none";
    document.body.style.overflow = "";
  }

  document.getElementById("va-close").addEventListener("click", closeViewAll);
  document.getElementById("va-overlay").addEventListener("click", (e) => {
    if (e.target.id === "va-overlay") closeViewAll();
  });

  // Hook "View Full Gallery" button
  document.addEventListener("click", (e) => {
    const btn = e.target.closest('a[href="#"]');
    if (btn && btn.textContent.trim().toLowerCase().includes("view full gallery")) {
      e.preventDefault();
      openViewAll();
    }
  });
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  buildNav();
  buildHero();
  buildTicker();
  buildShows();
  buildAbout();
  buildGallery();
  buildArtists();
  buildCategories();
  buildNews();
  buildNewsletter();
  buildFooter();

  initScrollReveal();
  initNewsletter();
  initGallery();
});

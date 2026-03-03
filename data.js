/**
 * ============================================================
 *  DATA.JS — SITE CONFIGURATION & CONTENT
 *  Edit this file to update all website content easily.
 *  No need to touch index.html, style.css, or script.js.
 * ============================================================
 */

const SITE = {

  // ─── GENERAL SETTINGS ───────────────────────────────────────
  name: "EVENT",                         // Site name
  tagline: "Live. Love. Dance.",         // Tagline shown in browser tab
  heroEyebrow: "New Experiences Await",  // Small text above main title
  heroSubtitle: "Live · Love · Dance",   // Subtitle below main title
  heroCTA1: { text: "Upcoming Shows", link: "#shows" },
  heroCTA2: { text: "Our Story",      link: "#about" },

  // ─── TICKER (scrolling banner) ───────────────────────────────
  // Add or remove ticker messages as you like
  ticker: [
    "Upcoming Events",
    "Live Performances",
    "World Class Artists",
    "Unforgettable Nights",
    "Book Your Tickets Now",
  ],

  // ─── UPCOMING SHOWS ──────────────────────────────────────────
  // Fields: name, genre, date, city, ticketLink
  shows: [
    { name: "Aashu",          genre: "Melodic House & Techno",  date: "Mar 15, 2026", city: "Mumbai",    ticketLink: "#" },
    { name: "AASHU",          genre: "Ethnic House",            date: "Mar 28, 2026", city: "Holi Special", ticketLink: "#" },
    { name: "AASHU",     genre: "Deep House, Techno",      date: "Apr 5, 2026",  city: "Delhi",     ticketLink: "#" },
    { name: "AASHU",   genre: "Afro House, Techno",      date: "Apr 18, 2026", city: "Bengaluru", ticketLink: "#" },
    { name: "AASHU",  genre: "Big Room House",          date: "May 2, 2026",  city: "Mumbai",    ticketLink: "#" },
    { name: "AASHU",genre: "Electronic · Multi-Genre",date: "Jun 10, 2026", city: "Abu Dhabi", ticketLink: "#" },
  ],

  // ─── ABOUT SECTION ───────────────────────────────────────────
  about: {
    label: "Who We Are",
    heading: "Were You",
    headingHighlight: "There?",
    paragraphs: [
      "Music, passion, and togetherness — EVENT brought thousands together to celebrate dance music with some of the most legendary artists in the world. From intimate underground sets to massive mainstage moments, every show is crafted to be unforgettable.",
      "Asia's premier live music experience. We don't just organize events — we create worlds you can step into, lose yourself in, and remember for a lifetime.",
    ],
    ctaText: "Explore Events",
    ctaLink: "#shows",
  },

  // ─── STATS ───────────────────────────────────────────────────
  stats: [
    { number: "500K+", label: "Attendees Annually" },
    { number: "200+",  label: "World-Class Artists" },
    { number: "15+",   label: "Years of Events" },
  ],

  // ─── ARTISTS ─────────────────────────────────────────────────
  // initials = shown inside avatar circle
  // avatarGradient = CSS gradient string (optional, leave "" for default orange)
  artists: [
    { name: "AASHU",         genre: "Melodic Techno",    initials: "AD", avatarGradient: "" },
    { name: "AASHU",         genre: "Ethnic House",      initials: "AD", avatarGradient: "" },
    { name: "AASHU",    genre: "Deep House",        initials: "AD", avatarGradient: "linear-gradient(135deg,#8800ff,#ff3c00)" },
    { name: "AASHU",  genre: "Afro Techno",       initials: "AD", avatarGradient: "linear-gradient(135deg,#000,#444)" },
    { name: "AASHU", genre: "Big Room",          initials: "AD", avatarGradient: "linear-gradient(135deg,#0044ff,#00ccff)" },
    { name: "AASHU",   genre: "Electronic",        initials: "AD", avatarGradient: "linear-gradient(135deg,#ff6600,#ffcc00)" },
    { name: "AASHU",      genre: "Dubstep / Bass",    initials: "AD", avatarGradient: "linear-gradient(135deg,#00ff88,#0088ff)" },
    { name: "AASHU", genre: "Progressive House", initials: "AD", avatarGradient: "linear-gradient(135deg,#ff0088,#ff3c00)" },
  ],

  // ─── GALLERY ─────────────────────────────────────────────────
  // HOW TO ADD YOUR OWN PHOTOS:
  // 1. Create a folder called "images" next to index.html
  // 2. Inside "images", create a folder called "gallery"
  // 3. Save your photos as: gallery1.jpg, gallery2.jpg ... gallery5.jpg
  // 4. The website will automatically load them from images/gallery/
  //
  // TIP: You can also use any name e.g. "images/gallery/concert-night.jpg"
  // span: "large" = big tile (top-left)  |  span: "wide" = full-width tile
  gallery: [
    {
      image: "images/gallery/gallery1.jpg",
      label: "MAINSTAGE",
      span: "large"
    },
    {
      image: "images/gallery/gallery2.jpg",
      label: "FESTIVAL CROWD"
    },
    {
      image: "images/gallery/gallery3.jpg",
      label: "STAGE LIGHTS"
    },
    {
      image: "images/gallery/gallery4.jpg",
      label: "DJ SET",
      span: "wide"
    },
    {
      image: "images/gallery/gallery5.jpg",
      label: "NIGHT CROWD"
    },
  ],

  // ─── EXPERIENCE CATEGORIES ───────────────────────────────────
  categories: [
    { icon: "🎪", name: "EVENT Festival", desc: "Our flagship multi-day festival featuring the biggest names in electronic music.",   link: "#" },
    { icon: "🏟️", name: "EVENT Arena",    desc: "World-class arena shows bringing global headliners to India's top cities.",          link: "#" },
    { icon: "🎓", name: "EVENT Academy",  desc: "Music production workshops and masterclasses with industry professionals.",          link: "#" },
    { icon: "🛍️", name: "EVENT Store",    desc: "Official merchandise, limited-edition drops, and collector items.",                  link: "#" },
  ],

  // ─── NEWS / BLOG ─────────────────────────────────────────────
  // emoji = placeholder image; date = display date; link = article URL
  news: [
    {
      emoji: "🌅",
      tag: "News",
      date: "February 11, 2026",
      comments: 0,
      title: "EVENT Holi Weekend 2026 to bring Holi hues and high-energy beats with KSHMR's 5-city tour",
      link: "#",
    },
    {
      emoji: "🎶",
      tag: "News",
      date: "July 16, 2024",
      comments: 0,
      title: "On Popular Demand: EVENT Arena brings back Boris Brejcha to India this December!",
      link: "#",
    },
    {
      emoji: "🎤",
      tag: "News",
      date: "March 21, 2024",
      comments: 0,
      title: "Alan Walker Announces His Biggest Ever India Tour with EVENT Festival",
      link: "#",
    },
  ],

  // ─── NEWSLETTER SECTION ──────────────────────────────────────
  newsletter: {
    label: "Stay Connected",
    heading: "This isn't just a festival.",
    headingHighlight: "It's beyond.",
    subtext: "Subscribe to get early access to tickets, exclusive lineups, and behind-the-scenes content delivered to your inbox.",
    buttonText: "Subscribe",
  },

  // ─── FOOTER ──────────────────────────────────────────────────
  footer: {
    about: "Asia's premier live music experience. Creating unforgettable moments where music, community, and passion collide.",
    copyright: "EVENT Festival © 2026. All Rights Reserved.",
    tagline: "Live · Love · Dance",
    socials: [
      { label: "f",  link: "#" },
      { label: "𝕏",  link: "#" },
      { label: "in", link: "#" },
      { label: "▶",  link: "#" },
    ],
    columns: [
      {
        heading: "Navigate",
        links: [
          { text: "Home",     href: "#" },
          { text: "Abu Dhabi",href: "#" },
          { text: "Events",   href: "#shows" },
          { text: "Gallery",  href: "#gallery" },
          { text: "About Us", href: "#about" },
        ],
      },
      {
        heading: "Discover",
        links: [
          { text: "News",       href: "#news" },
          { text: "Artists",    href: "#artists" },
          { text: "Academy",    href: "#" },
          { text: "Merch Store",href: "#" },
          { text: "Contact",    href: "#newsletter" },
        ],
      },
      {
        heading: "Legal",
        links: [
          { text: "Privacy Policy",   href: "#" },
          { text: "Terms of Use",     href: "#" },
          { text: "Annual Returns",   href: "#" },
          { text: "Director Details", href: "#" },
          { text: "AGM Notices",      href: "#" },
        ],
      },
    ],
  },

  // ─── NAV LINKS ───────────────────────────────────────────────
  nav: [
    { text: "Home",     href: "#hero" },
    { text: "Events",   href: "#shows" },
    { text: "Artists",  href: "#artists" },
    { text: "Gallery",  href: "#gallery" },
    {
      text: "Discover",
      dropdown: [
        { text: "News",       href: "#news" },
        { text: "Artists",    href: "#artists" },
        { text: "Experience", href: "#categories" },
      ],
    },
    { text: "About Us", href: "#about" },
    { text: "Contact",  href: "#newsletter" },
  ],
  navCTA: { text: "Buy Tickets", href: "#shows" },

};

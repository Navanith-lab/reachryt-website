/* ================= ReachRyt site config ================= */
const SITE = {
  wa: "918825992769",                       // WhatsApp Business number (country code, no +)
  waDisplay: "+91 88259 92769",
  email: "",                                // add business email when ready, e.g. "hello@reachryt.com"
  instagram: "#",                           // dummy for now – replace with real Instagram URL
  facebook: "", linkedin: "",               // leave empty to hide
  company: "SAVANTEVO SOLUTIONS PRIVATE LIMITED",
  address: "Covai Tech Park, Site No: 86, 87, Kovai Thiru Nagar, Kalapatty (E), Coimbatore, Tamil Nadu – 641014",
  cin: "U61201TZ2025PTC035348",
  gstin: "33ABQCS7690Q1Z6",
  logo: "https://reachryt-website.vercel.app/brand/logo-primary.webp",
  logoDark: "https://reachryt-website.vercel.app/brand/logo-inverse.webp"
};

/* ================= icons ================= */
const I = {
  wa:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l2 .9c.3.1.5.2.5.3.1.2.1.7-.1 1.3z"/></svg>',
  arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  left:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M15 6l-6 6 6 6"/></svg>',
  right:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M9 6l6 6-6 6"/></svg>',
  down:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M6 9l6 6 6-6"/></svg>',
  up:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M6 15l6-6 6 6"/></svg>',
  menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  logo:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17l6-6 4 4 7-8"/><path d="M15 7h6v6"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  ig:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  fb:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8z"/></svg>',
  li:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 9h4v12H4zM6 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm4 6h4v1.7c.6-1 1.9-2 3.9-2 4.1 0 4.1 2.8 4.1 6V21h-4v-5.6c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21h-4z"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  ads:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 11l18-8-8 18-2-8-8-2z"/></svg>',
  seo:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3M8 11h6M11 8v6"/></svg>',
  social:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>',
  web:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 21h8M12 18v3M2 8h20"/></svg>',
  star:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.5 5.5 21l2-7.5L2 9h7z"/></svg>',
  video:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="15" height="14" rx="2"/><path d="M17 10l5-3v10l-5-3z"/></svg>',
  cap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/></svg>',
  bot:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 4v4M9 13h.01M15 13h.01M9 17h6"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 6-7"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg>',
  sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
  send:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/></svg>',
  spark:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.2 6.3L20 10l-5.8 1.7L12 18l-2.2-6.3L4 10l5.8-1.7z"/><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z"/></svg>',
  school:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6M12 5V2h3"/></svg>',
  book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/></svg>',
  health:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 8v8M8 12h8"/></svg>',
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 11l9-7 9 7v10H3z"/><path d="M9 21v-6h6v6"/></svg>',
  bag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M5 7h14l-1 14H6z"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/></svg>',
  food:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 2v20M4 2v6a3 3 0 0 0 6 0V2M17 22V2c-2 0-4 2-4 6v5h4"/></svg>',
  factory:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M2 21V10l6 4V10l6 4V4h4l2 17z"/><path d="M6 17h2M11 17h2M16 17h2"/></svg>',
  brief:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M9 7V4h6v3M3 13h18"/></svg>',
  plane:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M10.5 13.5L3 11l1.5-1.5 8 1 4-4.5c1-1 3-1.5 3.5-1s0 2.5-1 3.5L14.5 12l1 8L14 21.5l-2.5-7.5L8 17v3l-1.5 1L5 18l-2-1.5L4 15h3z"/></svg>',
  rocket:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2"/><path d="M9 15l-3-3c1-4 4-8 12-9-1 8-5 11-9 12z"/><circle cx="15" cy="9" r="1.5"/></svg>',
  hand:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M2 12l4-4 4 2 3-2 4 1 5 3-4 5-3 1-4-3"/><path d="M7 14l3 3M9 12l4 4"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"/></svg>'
};
window.I = I;

const NAV_SERVICES = [
  ["services.html#whatsapp","wa","WhatsApp Marketing","API, broadcasts, chatbots"],
  ["whatsapp-white-label.html","bot","WhatsApp White-Label","Your brand, our engine"],
  ["services.html#ads","ads","Meta & Google Ads","Lead-generation campaigns"],
  ["services.html#seo","seo","SEO & Google Business","Rank where it matters"],
  ["services.html#social","social","Social Media","Content, reels, community"],
  ["services.html#web","web","Websites & Landing Pages","Built to convert"],
  ["services.html#content","video","Content & Creatives","Design, video, copy"],
  ["services.html#reputation","star","Reputation & Reviews","Trust that sells"]
];

/* ================= header / footer ================= */
function logoHTML(mode){
  if(!SITE.logo) return `<span class="logo-mark">${I.logo}</span><span>Reach<b>Ryt</b></span>`;
  if(mode==="dark") return `<img class="logo-img" src="${SITE.logoDark}" alt="ReachRyt – Digital Marketing" width="160" height="41">`;
  return `<img class="logo-img logo-light" src="${SITE.logo}" alt="ReachRyt – Digital Marketing" width="160" height="41"><img class="logo-img logo-dark" src="${SITE.logoDark}" alt="" aria-hidden="true" width="160" height="41">`;
}
function waLink(text){ return `https://wa.me/${SITE.wa}${text?`?text=${encodeURIComponent(text)}`:""}`; }

function buildHeader(){
  const page = location.pathname.split("/").pop() || "index.html";
  const act = p => (page===p || (p==="index.html" && page==="")) ? "active" : "";
  const dd = NAV_SERVICES.map(([h,ic,t,s])=>`<a href="${h}"><span class="mi">${I[ic]}</span><span><strong>${t}</strong><small>${s}</small></span></a>`).join("");
  const el = document.getElementById("site-header");
  if(!el) return;
  el.innerHTML = `
  <div class="topbar"><div class="wrap">
    <div class="topbar-l">
      <a href="${waLink()}" target="_blank" rel="noopener">${I.phone}${SITE.waDisplay}</a>
      ${SITE.email?`<a href="mailto:${SITE.email}">${I.mail}${SITE.email}</a>`:""}
      <span class="hide-sm">${I.pin}Coimbatore, Tamil Nadu</span>
    </div>
    <div class="topbar-r"><span>${I.clock}Mon – Sat, 9:30 AM – 6:30 PM</span></div>
  </div></div>
  <header class="site" id="hdr"><div class="wrap nav">
    <a href="index.html" class="logo" aria-label="ReachRyt home">${logoHTML()}</a>
    <nav class="menu" id="menu">
      <a href="index.html" class="${act("index.html")}">Home</a>
      <a href="about.html" class="${act("about.html")}">About</a>
      <div class="dd" id="dd"><button type="button" class="${act("services.html")}" aria-haspopup="true">Services ${I.down}</button><div class="dd-panel">${dd}</div></div>
      <a href="whatsapp-white-label.html" class="${act("whatsapp-white-label.html")}">WhatsApp White-Label</a>
      <a href="education.html" class="${act("education.html")}">Schools & Colleges</a>
      <a href="contact.html" class="${act("contact.html")}">Contact</a>
    </nav>
    <div class="nav-right">
      <button class="theme-btn" id="themeBtn" aria-label="Toggle dark mode">${I.moon}</button>
      <a href="contact.html" data-lead="" class="btn btn-primary nav-cta magnetic">Book a free call ${I.arrow}</a>
      <button class="burger" id="burger" aria-label="Open menu">${I.menu}</button>
    </div>
  </div></header>`;
  document.getElementById("burger").onclick=()=>document.getElementById("menu").classList.toggle("open");
  const ddEl=document.getElementById("dd");
  ddEl.querySelector("button").onclick=()=>{ if(innerWidth<=1020) ddEl.classList.toggle("open"); else location.href="services.html"; };
}

function buildFooter(){
  const el = document.getElementById("site-footer");
  if(!el) return;
  const soc = [
    SITE.instagram!==""?`<a href="${SITE.instagram}" aria-label="Instagram" ${SITE.instagram!=="#"?'target="_blank" rel="noopener"':""}>${I.ig}</a>`:"",
    SITE.facebook?`<a href="${SITE.facebook}" aria-label="Facebook" target="_blank" rel="noopener">${I.fb}</a>`:"",
    SITE.linkedin?`<a href="${SITE.linkedin}" aria-label="LinkedIn" target="_blank" rel="noopener">${I.li}</a>`:"",
    `<a href="${waLink()}" aria-label="WhatsApp" target="_blank" rel="noopener">${I.wa}</a>`
  ].join("");
  el.innerHTML = `
  <footer class="site"><div class="wrap">
    <div class="foot-top">
      <div>
        <a href="index.html" class="logo">${logoHTML("dark")}</a>
        <p>Digital marketing and low-cost white-label WhatsApp solutions for schools, colleges and growing businesses across India.</p>
        <div class="socials">${soc}</div>
      </div>
      <div><h5>Services</h5>
        <a href="services.html#whatsapp">WhatsApp Marketing</a><a href="whatsapp-white-label.html">WhatsApp White-Label</a>
        <a href="services.html#ads">Meta & Google Ads</a><a href="services.html#seo">SEO</a><a href="services.html#social">Social Media</a><a href="services.html#web">Websites</a>
      </div>
      <div><h5>Company</h5>
        <a href="about.html">About Us</a><a href="education.html">Schools & Colleges</a><a href="contact.html">Contact</a>
        <a href="privacy-policy.html">Privacy Policy</a><a href="terms.html">Terms & Conditions</a>
      </div>
      <div><h5>Reach us</h5>
        <p style="color:#fff;font-weight:600">${SITE.company}</p>
        <p>${SITE.address}</p>
        <p><a href="${waLink()}" target="_blank" rel="noopener" style="display:inline;color:#7ef0a8;font-weight:700">WhatsApp: ${SITE.waDisplay}</a></p>
        ${SITE.email?`<p><a href="mailto:${SITE.email}" style="display:inline">${SITE.email}</a></p>`:""}
      </div>
    </div>
    <div class="copy"><span>© ${new Date().getFullYear()} ReachRyt · ${SITE.company}. All rights reserved.</span><span><a href="privacy-policy.html">Privacy</a><a href="terms.html">Terms</a></span></div>
  </div></footer>
  <a class="float-wa" href="${waLink("Hi ReachRyt, I'd like to know more about your services.")}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${I.wa}</a>
  <button class="to-top" id="toTop" aria-label="Back to top">${I.up}</button>
  <div class="progress" id="prog"></div>
  <div class="toast" id="toast"></div>`;
  document.getElementById("toTop").onclick=()=>scrollTo({top:0,behavior:"smooth"});
}


/* ---- floating lead capture (drawer + tab + mobile bar) ---- */
const LEAD_OPTIONS=["WhatsApp White-Label Platform","Admission Marketing","WhatsApp Marketing for my business","Meta & Google Ads","SEO & Website","Social Media Management","Content & Creatives","Reputation & Reviews","Complete Digital Marketing"];
function buildLeadDrawer(){
  const wrap=document.createElement("div");
  wrap.innerHTML=`
  <button class="lead-tab" id="leadTab" aria-label="Get a free quote">${I.spark}Get Free Quote</button>
  <div class="lead-overlay" id="leadOv"></div>
  <aside class="lead-drawer" id="leadDr" role="dialog" aria-modal="true" aria-labelledby="ldTitle">
    <div class="ld-head"><button class="ld-close" id="ldClose" aria-label="Close">×</button>
      <span class="hf-badge" style="position:relative;z-index:1">${I.spark}Free · no obligation</span>
      <h3 id="ldTitle">Get your free growth plan</h3><p>Share a few details and we'll reply on WhatsApp with a plan and quote.</p></div>
    <form data-wa id="ldForm">
      <label>Your name *<input name="name" required placeholder="Full name"></label>
      <label>WhatsApp number *<input name="phone" required placeholder="10-digit number" inputmode="tel"></label>
      <label>Organisation<input name="org" placeholder="School, college or business"></label>
      <label>I'm interested in<select name="need" id="ldNeed">${LEAD_OPTIONS.map(o=>`<option>${o}</option>`).join("")}</select></label>
      <label>Monthly budget<select name="budget"><option value="">Prefer not to say</option><option>Under ₹10,000</option><option>₹10,000 – ₹25,000</option><option>₹25,000 – ₹50,000</option><option>₹50,000 – ₹1,00,000</option><option>Above ₹1,00,000</option></select></label>
      <label>Message<textarea name="msg" rows="3" placeholder="Your goal in one line"></textarea></label>
      <button class="btn btn-wa" type="submit">${I.wa}Send & get my plan</button>
    </form>
    <div class="ld-steps"><span><b>1</b>Send details</span><span><b>2</b>We call / WhatsApp</span><span><b>3</b>Get your plan</span></div>
  </aside>
  <div class="m-bar"><button class="btn btn-primary" data-lead="">${I.spark}Free Quote</button><a class="btn btn-wa" href="${waLink("Hi ReachRyt!")}" target="_blank" rel="noopener">${I.wa}WhatsApp</a></div>`;
  document.body.appendChild(wrap);
  const dr=document.getElementById("leadDr"), ov=document.getElementById("leadOv"), need=document.getElementById("ldNeed");
  window.openLead=(svc)=>{
    if(svc){ if(![...need.options].some(o=>o.value===svc)) need.add(new Option(svc,svc),0); need.value=svc; }
    dr.classList.add("open"); ov.classList.add("open"); try{sessionStorage.setItem("rr-lead-seen","1");}catch(e){}
    setTimeout(()=>dr.querySelector("input[name=name]").focus(),350);
  };
  const close=()=>{dr.classList.remove("open");ov.classList.remove("open");};
  document.getElementById("ldClose").onclick=close; ov.onclick=close;
  addEventListener("keydown",e=>{if(e.key==="Escape")close();});
  document.getElementById("leadTab").onclick=()=>openLead();
  document.addEventListener("click",e=>{const b=e.target.closest("[data-lead]"); if(b){e.preventDefault(); openLead(b.dataset.lead);}});
  dr.querySelector("form").addEventListener("submit",()=>setTimeout(close,400));
  // gentle one-time prompt: exit intent (desktop) or after 40s, once per session
  let seen=false; try{seen=!!sessionStorage.getItem("rr-lead-seen");}catch(e){}
  if(!seen && !/contact\.html$/.test(location.pathname)){
    const fire=()=>{ if(seen) return; seen=true; if(!document.querySelector(".lead-drawer.open,.bot.open")) openLead(); };
    document.addEventListener("mouseout",e=>{ if(!e.relatedTarget && e.clientY<8) fire(); });
    setTimeout(fire,40000);
  }
}

/* ================= behaviours ================= */
function onScroll(){
  const y=scrollY, h=document.documentElement.scrollHeight-innerHeight;
  document.getElementById("hdr")?.classList.toggle("scrolled",y>10);
  document.getElementById("toTop")?.classList.toggle("show",y>600);
  const p=document.getElementById("prog"); if(p) p.style.width=(h>0?y/h*100:0)+"%";
}

function reveal(){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}}),{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
}

function counters(){
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(!e.isIntersecting) return; io.unobserve(e.target);
    const el=e.target, end=parseFloat(el.dataset.count), suf=el.dataset.suffix||"", dur=1600, t0=performance.now();
    const step=t=>{const k=Math.min((t-t0)/dur,1), v=end*(1-Math.pow(1-k,3)); el.textContent=Math.round(v)+suf; if(k<1) requestAnimationFrame(step);};
    requestAnimationFrame(step);
  }),{threshold:.5});
  document.querySelectorAll("[data-count]").forEach(el=>io.observe(el));
}

function typed(){
  const el=document.querySelector("[data-typed]"); if(!el) return;
  const words=JSON.parse(el.dataset.typed); let w=0,c=0,del=false;
  (function tick(){
    const word=words[w]; el.textContent=word.slice(0,c);
    if(!del&&c<word.length){c++;setTimeout(tick,80);}
    else if(!del){del=true;setTimeout(tick,1600);}
    else if(c>0){c--;setTimeout(tick,40);}
    else{del=false;w=(w+1)%words.length;setTimeout(tick,250);}
  })();
}

function sliders(){
  document.querySelectorAll("[data-slider]").forEach(root=>{
    const track=root.querySelector(".slides"), items=[...track.children];
    const prev=root.querySelector("[data-prev]"), next=root.querySelector("[data-next]"), dotsEl=root.querySelector(".dots");
    let i=0, timer;
    const perView=()=>{const w=items[0].getBoundingClientRect().width; return Math.max(1,Math.round(track.parentElement.clientWidth/(w+22)));};
    const max=()=>Math.max(0,items.length-perView());
    const go=n=>{i=n<0?max():n>max()?0:n; track.style.transform=`translateX(-${i*(items[0].getBoundingClientRect().width+22)}px)`; renderDots();};
    function renderDots(){ if(!dotsEl) return; dotsEl.innerHTML=""; for(let d=0;d<=max();d++){const b=document.createElement("button");b.ariaLabel="Slide "+(d+1);if(d===i)b.className="on";b.onclick=()=>{go(d);restart();};dotsEl.appendChild(b);} }
    const restart=()=>{clearInterval(timer);timer=setInterval(()=>go(i+1),4500);};
    prev&&(prev.onclick=()=>{go(i-1);restart();}); next&&(next.onclick=()=>{go(i+1);restart();});
    let sx=0; track.addEventListener("touchstart",e=>sx=e.touches[0].clientX,{passive:true});
    track.addEventListener("touchend",e=>{const dx=e.changedTouches[0].clientX-sx; if(Math.abs(dx)>40){go(i+(dx<0?1:-1));restart();}});
    root.addEventListener("mouseenter",()=>clearInterval(timer)); root.addEventListener("mouseleave",restart);
    addEventListener("resize",()=>go(Math.min(i,max())));
    go(0); restart();
  });
}

function tabs(){
  document.querySelectorAll("[data-tabs]").forEach(root=>{
    const btns=root.querySelectorAll(".tabs button"), panes=root.querySelectorAll(".tab-body>div"); let k=0, t;
    const show=n=>{k=n;btns.forEach((b,j)=>b.classList.toggle("on",j===n));panes.forEach((p,j)=>p.classList.toggle("on",j===n));};
    btns.forEach((b,j)=>b.onclick=()=>{show(j);clearInterval(t);});
    show(0); t=setInterval(()=>show((k+1)%btns.length),5000);
  });
}

function orbit(){
  document.querySelectorAll(".ring").forEach(r=>{
    const nodes=r.querySelectorAll(".node"), n=nodes.length;
    nodes.forEach((nd,j)=>{const a=(j/n)*Math.PI*2-Math.PI/2; nd.style.left=(50+50*Math.cos(a))+"%"; nd.style.top=(50+50*Math.sin(a))+"%";});
  });
}

function particles(){
  document.querySelectorAll("canvas[data-particles]").forEach(cv=>{
    const ctx=cv.getContext("2d"); let W,H,pts=[];
    const size=()=>{W=cv.width=cv.offsetWidth*devicePixelRatio;H=cv.height=cv.offsetHeight*devicePixelRatio;
      pts=Array.from({length:Math.min(70,Math.floor(cv.offsetWidth/18))},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35*devicePixelRatio,vy:(Math.random()-.5)*.35*devicePixelRatio}));};
    size(); addEventListener("resize",size);
    (function draw(){
      ctx.clearRect(0,0,W,H);
      const L=130*devicePixelRatio;
      for(const p of pts){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
        ctx.fillStyle="rgba(170,185,255,.8)";ctx.beginPath();ctx.arc(p.x,p.y,1.6*devicePixelRatio,0,7);ctx.fill();}
      for(let a=0;a<pts.length;a++)for(let b=a+1;b<pts.length;b++){const dx=pts[a].x-pts[b].x,dy=pts[a].y-pts[b].y,d=Math.hypot(dx,dy);
        if(d<L){ctx.strokeStyle=`rgba(120,140,255,${(1-d/L)*.35})`;ctx.lineWidth=devicePixelRatio;ctx.beginPath();ctx.moveTo(pts[a].x,pts[a].y);ctx.lineTo(pts[b].x,pts[b].y);ctx.stroke();}}
      requestAnimationFrame(draw);
    })();
  });
}

function chatDemo(){
  const box=document.getElementById("chatDemo"); if(!box) return;
  const script=[
    ["in","Hi Priya 👋 Admissions for 2027–28 are open! Want the fee details or a campus tour?"],
    ["quick",["📄 Fee details","🏫 Campus tour","📞 Counsellor"]],
    ["out","🏫 Campus tour"],
    ["in","Great choice! Pick a slot:\n• Sat 10:00 AM\n• Sat 2:00 PM\n• Sun 11:00 AM"],
    ["out","Sat 10:00 AM"],
    ["in","✅ Booked! We'll remind you a day before. See you on campus 🎓"]
  ];
  let k=0;
  const time=()=>{const d=new Date();return d.getHours()+":"+String(d.getMinutes()).padStart(2,"0");};
  function next(){
    if(k>=script.length){setTimeout(()=>{box.innerHTML="";k=0;next();},3500);return;}
    const [type,val]=script[k++];
    if(type==="in"){
      const t=document.createElement("div");t.className="typing";t.innerHTML="<i></i><i></i><i></i>";box.appendChild(t);
      setTimeout(()=>{t.remove();add(`<div class="msg in">${val.replace(/\n/g,"<br>")}<span class="t">${time()}</span></div>`);setTimeout(next,1300);},1000);
    } else if(type==="quick"){ add(`<div class="quick">${val.map(v=>`<span>${v}</span>`).join("")}</div>`); setTimeout(next,1200); }
    else { add(`<div class="msg out">${val}<span class="t">${time()} ✓✓</span></div>`); setTimeout(next,900); }
  }
  function add(h){box.insertAdjacentHTML("beforeend",h);while(box.scrollHeight>box.clientHeight&&box.children.length>1)box.firstElementChild.remove();}
  next();
}

function toast(msg){const t=document.getElementById("toast");if(!t)return;t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),3200);}

function forms(){
  document.querySelectorAll("form[data-wa]").forEach(f=>f.addEventListener("submit",e=>{
    e.preventDefault();
    const d=new FormData(f);
    if(!/^[0-9+\s-]{10,15}$/.test((d.get("phone")||"").trim())){toast("Please enter a valid phone number");return;}
    const lines=[`Hi ReachRyt! 👋`,`Name: ${d.get("name")}`,`Phone: ${d.get("phone")}`];
    if(d.get("org")) lines.push(`Organisation: ${d.get("org")}`);
    if(d.get("city")) lines.push(`City: ${d.get("city")}`);
    if(d.get("need")) lines.push(`Interested in: ${d.get("need")}`);
    if(d.get("budget")) lines.push(`Monthly budget: ${d.get("budget")}`);
    if(d.get("msg")) lines.push(`Message: ${d.get("msg")}`);
    const a=document.createElement("a");a.href=waLink(lines.join("\n"));a.target="_blank";a.rel="noopener";document.body.appendChild(a);a.click();a.remove();
    toast("Opening WhatsApp… just hit send ✅"); f.reset();
  }));
}

/* inject site-wide values into any [data-site] element */
function siteValues(){
  document.querySelectorAll("[data-site]").forEach(el=>{const k=el.dataset.site; if(SITE[k]!==undefined) el.textContent=SITE[k];});
  document.querySelectorAll("[data-walink]").forEach(el=>{el.href=waLink(el.dataset.walink||"");el.target="_blank";el.rel="noopener";});
  document.querySelectorAll("[data-icon]").forEach(el=>{el.innerHTML=I[el.dataset.icon]||"";});
}

document.addEventListener("DOMContentLoaded",()=>{
  buildHeader(); buildFooter(); buildLeadDrawer(); siteValues();
  reveal(); counters(); typed(); sliders(); tabs(); orbit(); particles(); chatDemo(); forms();
  addEventListener("scroll",onScroll,{passive:true}); onScroll();
});

/* ================= v3: unique dynamic features ================= */
function preloader(){
  const p=document.createElement("div");p.className="preloader";
  p.innerHTML=`<div><div class="pl-logo">${SITE.logo?`<img src="${SITE.logoDark}" alt="ReachRyt" style="height:60px">`:`<span class="logo-mark" style="width:52px;height:52px;border-radius:15px">${I.logo}</span>ReachRyt`}</div><div class="pl-bar"><i></i></div></div>`;
  document.body.appendChild(p);
  const done=()=>setTimeout(()=>p.classList.add("done"),350);
  if(document.readyState==="complete") done(); else addEventListener("load",done);
  setTimeout(()=>p.classList.add("done"),2500);
}

function theme(){
  const root=document.documentElement, btn=document.getElementById("themeBtn");
  let saved=null; try{saved=localStorage.getItem("rr-theme");}catch(e){}
  const set=d=>{root.classList.toggle("dark-mode",d); if(btn) btn.innerHTML=d?I.sun:I.moon; try{localStorage.setItem("rr-theme",d?"dark":"light");}catch(e){}};
  set(saved==="dark");
  btn&&(btn.onclick=()=>set(!root.classList.contains("dark-mode")));
}

function pointerFx(){
  if(!matchMedia("(hover:hover)").matches) return;
  const g=document.createElement("div");g.className="cursor-glow";document.body.appendChild(g);
  addEventListener("pointermove",e=>{g.style.left=e.clientX+"px";g.style.top=e.clientY+"px";},{passive:true});
  // spotlight + 3D tilt
  document.querySelectorAll(".card,.plan,.slide,.pstep").forEach(el=>{
    el.classList.add("tilt");
    el.addEventListener("pointermove",e=>{
      const r=el.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
      el.style.setProperty("--mx",x+"px");el.style.setProperty("--my",y+"px");
      const rx=((y/r.height)-.5)*-6, ry=((x/r.width)-.5)*6;
      el.style.transform=`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });
    el.addEventListener("pointerleave",()=>el.style.transform="");
  });
  // magnetic buttons
  document.querySelectorAll(".btn-primary,.btn-wa,.btn-light,.magnetic").forEach(b=>{
    b.addEventListener("pointermove",e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.25}px)`;});
    b.addEventListener("pointerleave",()=>b.style.transform="");
  });
}

function scramble(){
  const chars="!<>-_\\/[]{}—=+*^?#";
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(!e.isIntersecting) return; io.unobserve(e.target);
    const el=e.target, final=el.textContent; let f=0; const total=28;
    const t=setInterval(()=>{ el.textContent=final.split("").map((c,i)=> c===" "?" ": i< final.length*f/total ? c : chars[Math.floor(Math.random()*chars.length)]).join(""); if(++f>total){clearInterval(t);el.textContent=final;} },30);
  }),{threshold:.6});
  document.querySelectorAll(".scramble").forEach(el=>io.observe(el));
}


/* ---- 360 hub ---- */
function hub(){
  const h=document.getElementById("hub"); if(!h) return;
  const D=[
    {ic:"wa",t:"WhatsApp Marketing",s:"WhatsApp",c:["#1fb855","#0ea5a4"],d:"Reply to every enquiry in seconds on the app your customers already check all day.",l:["Official Meta WhatsApp Business API","Broadcasts, chatbots & shared team inbox","Click-to-WhatsApp ads from Instagram"],u:"services.html#whatsapp"},
    {ic:"bot",t:"WhatsApp White-Label",s:"White-Label",c:["#0ea5a4","#2563eb"],d:"Your own branded WhatsApp platform — use it yourself or resell it to your clients.",l:["Your logo, colours & domain","Reseller panel with your own pricing","Setup & support handled by us"],u:"whatsapp-white-label.html"},
    {ic:"ads",t:"Meta & Google Ads",s:"Ads",c:["#2563eb","#0ea5e9"],d:"Lead-generation campaigns that bring enquiries every day — tuned weekly to lower cost per lead.",l:["Instagram, Facebook, Google & YouTube","Lead forms, landing pages & tracking","Weekly optimisation & retargeting"],u:"services.html#ads"},
    {ic:"seo",t:"SEO & Google Business",s:"SEO",c:["#f59e0b","#f97316"],d:"Get found when people search for what you offer — on Google search and Maps.",l:["Technical & on-page SEO","Google Business Profile optimisation","Monthly ranking reports"],u:"services.html#seo"},
    {ic:"social",t:"Social Media",s:"Social",c:["#ec4899","#a855f7"],d:"Stay visible and trusted with a consistent calendar of posts, reels and replies.",l:["Monthly content calendar","Posts, carousels & reels","Comment & DM management"],u:"services.html#social"},
    {ic:"web",t:"Websites & Landing Pages",s:"Website",c:["#6366f1","#2563eb"],d:"Fast, mobile-first websites built to turn visitors into enquiries — connected to WhatsApp.",l:["Business & institution websites","Admission & campaign landing pages","WhatsApp, form & CRM integration"],u:"services.html#web"},
    {ic:"video",t:"Content & Creatives",s:"Creatives",c:["#ef4444","#f97316"],d:"Creative that makes people stop scrolling — ads, videos, brochures and copy.",l:["Ad creatives & social graphics","Short videos & reels","Brochures, prospectus & copy"],u:"services.html#content"},
    {ic:"star",t:"Reputation & Reviews",s:"Reviews",c:["#eab308","#f59e0b"],d:"Turn happy customers into your best advertising with genuine Google reviews.",l:["Review campaigns via WhatsApp","Review monitoring & replies","Testimonial content"],u:"services.html#reputation"}
  ];
  const stage=h.querySelector(".hub-stage"), svg=h.querySelector(".hub-lines"), n=D.length, R=44;
  svg.innerHTML='<defs><linearGradient id="hg" x1="0" x2="1"><stop offset="0" stop-color="#2563eb"/><stop offset="1" stop-color="#1fb855"/></linearGradient></defs>';
  const nodes=D.map((d,i)=>{
    const a=(i/n)*Math.PI*2-Math.PI/2, x=50+R*Math.cos(a), y=50+R*Math.sin(a);
    const ln=document.createElementNS("http://www.w3.org/2000/svg","line");
    ln.setAttribute("x1",50);ln.setAttribute("y1",50);ln.setAttribute("x2",x);ln.setAttribute("y2",y);svg.appendChild(ln);
    const b=document.createElement("button");b.className="hub-node";b.style.left=x+"%";b.style.top=y+"%";
    b.style.setProperty("--c1",d.c[0]);b.style.setProperty("--c2",d.c[1]);
    b.innerHTML=`<i>${I[d.ic]}</i><span>${d.s}</span>`;b.setAttribute("aria-label",d.t);
    stage.appendChild(b); return {b,ln};
  });
  const P=h.querySelector(".hub-panel"), bar=P.querySelector(".hp-bar i");
  let cur=0,timer;
  const show=i=>{
    cur=i; const d=D[i];
    nodes.forEach((o,j)=>{o.b.classList.toggle("on",j===i);o.ln.classList.toggle("on",j===i);});
    P.style.setProperty("--pc",d.c[0]);P.style.setProperty("--pc2",d.c[1]);
    P.querySelector(".hp-ico").innerHTML=I[d.ic];
    P.querySelector(".hp-no").textContent=String(i+1).padStart(2,"0");
    P.querySelector(".hp-title").textContent=d.t;
    P.querySelector(".hp-desc").textContent=d.d;
    P.querySelector(".hp-list").innerHTML=d.l.map(x=>`<li>${x}</li>`).join("");
    P.querySelector(".hp-get").dataset.lead=d.t;
    P.querySelector(".hp-more").href=d.u;
    [".hp-title",".hp-desc",".hp-list",".hp-ico"].forEach(s=>{const e=P.querySelector(s);e.classList.remove("swap");void e.offsetWidth;e.classList.add("swap");});
    bar.classList.remove("run");void bar.offsetWidth;bar.classList.add("run");
  };
  const start=()=>{clearInterval(timer);timer=setInterval(()=>show((cur+1)%n),5000);};
  nodes.forEach((o,j)=>{o.b.onclick=()=>{show(j);start();};o.b.onmouseenter=()=>{show(j);clearInterval(timer);bar.classList.remove("run");};o.b.onmouseleave=start;});
  P.addEventListener("mouseenter",()=>{clearInterval(timer);bar.classList.remove("run");});
  P.addEventListener("mouseleave",()=>{show(cur);start();});
  show(0); start();
}

/* ---- ROI calculator ---- */
function calculator(){
  const c=document.getElementById("roiCalc"); if(!c) return;
  const q=s=>c.querySelector(s), fmt=n=>"₹"+Math.round(n).toLocaleString("en-IN");
  const upd=()=>{
    c.querySelectorAll("input[type=range]").forEach(r=>{r.style.setProperty("--p",((r.value-r.min)/(r.max-r.min)*100)+"%");});
    const leads=+q("#rLeads").value, conv=+q("#rConv").value, val=+q("#rVal").value, up=+q("#rUp").value;
    q("#oLeads").textContent=leads.toLocaleString("en-IN"); q("#oConv").textContent=conv+"%"; q("#oVal").textContent=fmt(val); q("#oUp").textContent=up+"%";
    const now=leads*conv/100, after=now*(1+up/100), extra=after-now;
    q("#xNow").textContent=Math.round(now); q("#xAfter").textContent=Math.round(after);
    q("#xExtra").textContent="+"+Math.round(extra); q("#xRev").textContent=fmt(extra*val*12);
  };
  c.querySelectorAll("input").forEach(i=>i.addEventListener("input",upd)); upd();
  q("#calcWa").onclick=()=>{const a=document.createElement("a");a.href=waLink(`Hi ReachRyt! I used your growth calculator.\nMonthly enquiries: ${q("#rLeads").value}\nCurrent conversion: ${q("#rConv").value}%\nAvg. value per customer/admission: ${fmt(q("#rVal").value)}\nI'd like a plan to improve my results.`);a.target="_blank";a.rel="noopener";document.body.appendChild(a);a.click();a.remove();};
}

/* ---- Build-your-plan ---- */
function planBuilder(){
  const b=document.getElementById("planBuilder"); if(!b) return;
  const segBtns=b.querySelectorAll(".seg button"); let seg=segBtns[0]?.textContent;
  segBtns.forEach(x=>x.onclick=()=>{segBtns.forEach(y=>y.classList.remove("on"));x.classList.add("on");seg=x.textContent;});
  segBtns[0]?.classList.add("on");
  const count=()=>{const n=b.querySelectorAll(".opt input:checked").length;b.querySelector("#selN").textContent=n;};
  b.querySelectorAll(".opt input").forEach(i=>i.addEventListener("change",count)); count();
  b.querySelector("#planSend").onclick=()=>{
    const sel=[...b.querySelectorAll(".opt input:checked")].map(i=>i.value);
    if(!sel.length){toast("Pick at least one service 🙂");return;}
    const a=document.createElement("a");a.href=waLink(`Hi ReachRyt! I built my plan on your website.\nI am: ${seg}\nServices I need:\n• ${sel.join("\n• ")}\nPlease share a quote.`);a.target="_blank";a.rel="noopener";document.body.appendChild(a);a.click();a.remove();
  };
}

/* ---- White-label live brand preview ---- */
function brandPreview(){
  const w=document.getElementById("wlLive"); if(!w) return;
  const name=w.querySelector("#bName"), dom=w.querySelector("#bDom"), dash=w.querySelector(".dash");
  const upd=()=>{const n=name.value.trim()||"YourBrand"; w.querySelector("#dName").textContent=n; w.querySelector("#dInit").textContent=n[0].toUpperCase();
    w.querySelector("#dUrl").textContent=(dom.value.trim()||n.toLowerCase().replace(/[^a-z0-9]/g,"")+".com").replace(/^https?:\/\//,"")+"/dashboard";};
  name.addEventListener("input",upd); dom.addEventListener("input",upd);
  w.querySelectorAll(".swatches button").forEach(s=>{s.style.background=s.dataset.c; s.onclick=()=>{w.querySelectorAll(".swatches button").forEach(x=>x.classList.remove("on"));s.classList.add("on");dash.style.setProperty("--bc",s.dataset.c);};});
  w.querySelector(".swatches button")?.classList.add("on");
  const bars=w.querySelectorAll(".bars i"); const shuffle=()=>bars.forEach(b=>b.style.height=(30+Math.random()*70)+"%"); shuffle(); setInterval(shuffle,2500);
  upd();
}

/* ---- ReachRyt assistant (rule-based, hands off to WhatsApp) ---- */
function assistant(){
  const KB=[
    {k:["price","cost","pricing","charge","fee","rate","budget","how much"],a:"Our plans are built for small and growing budgets. Pricing depends on the services and volume you need — tap below and we'll send a quote on WhatsApp within working hours."},
    {k:["white","label","resell","reseller","partner","agency","own brand"],a:"With our <b>white-label WhatsApp platform</b>, you get the full WhatsApp Business API dashboard with your own logo, colours and domain. Use it yourself or resell it with your own pricing. <a href='whatsapp-white-label.html'>See details →</a>"},
    {k:["school","college","admission","education","institution","university","coaching","student","parent"],a:"Education is our speciality 🎓 We run admission campaigns, instant WhatsApp follow-ups with brochure & fees, and parent communication. <a href='education.html'>See education solutions →</a>"},
    {k:["whatsapp","api","broadcast","chatbot","bulk","green tick","template"],a:"We set up the <b>official Meta WhatsApp Business API</b> with broadcasts, no-code chatbots, a shared team inbox and click-to-WhatsApp ads."},
    {k:["seo","google","rank","search","map"],a:"We handle SEO and Google Business Profile — technical fixes, content and local SEO so customers find you on Google. <a href='services.html#seo'>More →</a>"},
    {k:["ads","meta","facebook","instagram","leads","campaign","marketing"],a:"We run lead-generation campaigns on Instagram, Facebook, Google and YouTube, optimised every week to lower your cost per lead. <a href='services.html#ads'>More →</a>"},
    {k:["website","site","landing","web"],a:"We build fast, mobile-first websites and landing pages connected to WhatsApp and your CRM. <a href='services.html#web'>More →</a>"},
    {k:["where","address","location","office","coimbatore"],a:"We're at <b>Covai Tech Park, Kalapatty, Coimbatore – 641014</b>, and we work with clients across India."},
    {k:["time","long","fast","soon","live","start"],a:"Most campaigns and WhatsApp setups go live within a few working days of onboarding, depending on Meta approvals."},
    {k:["contact","call","talk","human","number","phone"],a:`You can WhatsApp us anytime at <b>${SITE.waDisplay}</b>. <a href="${waLink("Hi ReachRyt, I'd like to talk to someone.")}" target="_blank" rel="noopener">Open WhatsApp →</a>`},
    {k:["hi","hello","hey","vanakkam"],a:"Hello! 👋 How can I help you grow today?"}
  ];
  const fab=document.createElement("button");fab.className="bot-fab";fab.innerHTML=`<i>${I.spark}</i><span>Ask ReachRyt</span>`;
  const box=document.createElement("div");box.className="bot";box.setAttribute("role","dialog");box.setAttribute("aria-label","ReachRyt assistant");
  box.innerHTML=`<div class="bot-head"><span class="ba">${I.bot}</span><div><b>ReachRyt Assistant</b><small>Instant answers · humans on WhatsApp</small></div><button aria-label="Close">×</button></div>
   <div class="bot-log"></div>
   <div class="bot-chips"><button>Pricing</button><button>White-label</button><button>Admissions</button><button>WhatsApp API</button><button>Talk to a human</button></div>
   <form class="bot-in"><input placeholder="Ask anything…" aria-label="Your question"><button aria-label="Send">${I.send}</button></form>`;
  document.body.append(fab,box);
  const log=box.querySelector(".bot-log");
  const say=(h,who="b")=>{const d=document.createElement("div");d.className="bm "+who;d.innerHTML=h;log.appendChild(d);log.scrollTop=log.scrollHeight;};
  const answer=q=>{
    say(q.replace(/</g,"&lt;"),"u");
    const t=q.toLowerCase(); let best=null,score=0;
    KB.forEach(e=>{const s=e.k.filter(k=>t.includes(k)).length; if(s>score){score=s;best=e;}});
    const typing=document.createElement("div");typing.className="bm b";typing.innerHTML='<span class="typing" style="padding:0;box-shadow:none"><i></i><i></i><i></i></span>';log.appendChild(typing);log.scrollTop=log.scrollHeight;
    setTimeout(()=>{typing.remove();
      say(best?best.a:"Good question! Our team can answer that best.");
      say(`<a href="${waLink("Hi ReachRyt! "+q)}" target="_blank" rel="noopener">Continue on WhatsApp →</a>`);
    },700);
  };
  let opened=false;
  const toggle=()=>{box.classList.toggle("open"); if(!opened){opened=true;say("Hi! 👋 I'm the ReachRyt assistant. Ask me about pricing, WhatsApp white-label, admission marketing or any service.");}};
  fab.onclick=toggle; box.querySelector(".bot-head button").onclick=toggle;
  box.querySelectorAll(".bot-chips button").forEach(b=>b.onclick=()=>answer(b.textContent==="Talk to a human"?"contact":b.textContent));
  box.querySelector("form").onsubmit=e=>{e.preventDefault();const i=e.target.querySelector("input");if(i.value.trim()){answer(i.value.trim());i.value="";}};
}

document.addEventListener("DOMContentLoaded",()=>{
  preloader(); theme(); pointerFx(); scramble(); calculator(); planBuilder(); brandPreview(); hub();
});

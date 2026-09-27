const skills = [
  ["Languages", "Java", "SQL", "JavaScript"],
  ["Frameworks & Web", "Spring Boot", "React.js", "REST APIs", "HTML5", "CSS3"],
  ["Cloud & Networking", "AWS Cloud", "CCNA (Routing & Switching)", "Cisco Networking"],
  ["IoT & Embedded", "Microcontrollers", "Embedded Systems", "Sensor Integration"],
  ["Tools & Testing", "Git/GitHub", "Selenium", "Advanced Excel", "Visual Studio"],
  ["Core Competencies", "Full-Stack Dev", "JWT Auth", "Data Validation", "Prompt Engineering"]
];

document.getElementById('skillRows').innerHTML = skills.map(([label, ...tags]) => 
  `<div class="skill-row">
     <h3>${label}</h3>
     <div class="pills">${tags.map(t => `<span class="pill">${t}</span>`).join('')}</div>
   </div>`
).join('');


const projects = [
  [
    "Smart Student Attendance System", 
    "Python · OpenCV · CNN · Haar Cascade",
    [
      "Real-time facial-recognition attendance using CNN and Haar Cascade, tuned to 98% accuracy.", 
      "Automated report generation, cutting manual log-in time by 40%."
    ]
  ],
  [
    "IoT-Based Accident Detection", 
    "IoT · Embedded Systems · Sensors",
    [
      "Real-time vehicle accident detection that automatically triggers emergency alerts.", 
      "Hardware-to-cloud pipeline built to shorten emergency response time."
    ]
  ],
  [
    "Appliance Booking Platform", 
    "React · Spring Boot · JWT · Tailwind",
    [
      "Full-stack booking app for browsing, cart management and scheduling — live on Netlify.", 
      "JWT authentication plus a dedicated feedback microservice."
    ]
  ],
  [
    "Co-Parent Ledger", 
    "React · REST APIs · Client-Server",
    [
      "Full-stack app helping co-parents track shared expenses in one place.", 
      "Decoupled frontend/backend, deployed live on Vercel."
    ]
  ],
  [
    "Pet Shop — Responsive Site", 
    "HTML5 · CSS3 · JavaScript",
    [
      "Multi-page site with a breed catalogue, dashboard and contact flow.", 
      "Deployed on Vercel with consistent UI/UX across devices."
    ]
  ]
];

document.getElementById('projGrid').innerHTML = projects.map(([t, s, b]) => 
  `<div class="card">
     <h3>${t}</h3>
     <div class="stack">${s}</div>
     <ul>${b.map(x => `<li>${x}</li>`).join('')}</ul>
   </div>`
).join('');

const certs = [
  "IBM Full Stack Software Developer Certificate (in progress)",
  "JPMorgan Chase — Software Engineering Job Simulation",
  "GenAI-Powered Data Analytics Job Simulation",
  "AWS Cloud Computing",
  "Cisco CCNA 1, 2, 3 (Routing & Switching)",
  "Cisco Cyber Security",
  "Cisco Programming Essentials in Python",
  "AI For Everyone"
];

document.getElementById('certList').innerHTML = certs.map(c => `<li>${c}</li>`).join('');


const stackWords = ["Java", "Spring Boot", "React.js", "Python", "AWS", "IoT", "SQL", "JavaScript", "Selenium", "Git", "REST APIs", "CCNA"];
document.getElementById('marqueeTrack').innerHTML = Array(2).fill(
  stackWords.map(w => `<span><b>${w}</b> ·</span>`).join('')
).join('');

document.getElementById('yr').textContent = new Date().getFullYear();


const header = document.getElementById('siteHeader');
addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 30), { passive: true });


const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));


const sections = document.querySelectorAll('.reveal, .card, .skill-row');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { 
    if (e.isIntersecting) { 
      e.target.classList.add('show'); 
      io.unobserve(e.target); 
    } 
  });
}, { threshold: 0.15 });

sections.forEach(s => io.observe(s));


const navA = document.querySelectorAll('.navlinks a');
const navIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navA.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });

document.querySelectorAll('main section[id]').forEach(s => navIO.observe(s));


document.getElementById('copyBtn').addEventListener('click', function () {
  navigator.clipboard.writeText(this.dataset.copy).then(() => {
    const old = this.textContent; 
    this.textContent = 'Copied!';
    setTimeout(() => this.textContent = old, 1500);
  }).catch(() => {});
});
// ============================================
// PORTFOLIO SCRIPT
// ============================================

console.log("Portfolio script loaded ✅");


// ============================================
// DARK MODE TOGGLE
// ============================================
// Toggles a `dark-mode` class on <body>. The CSS
// variables in styles.css do all the visual work.

const themeToggle = document.querySelector("#theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        themeToggle.textContent = isDark ? "☀️" : "🌙";
        console.log(`Theme toggled → ${isDark ? "dark" : "light"}`);
    });
} else {
    console.warn("No #theme-toggle button found.");
}


// ============================================
// PROJECTS — rendered from a JS array
// ============================================
// To add a new project, just push another object
// into this array. The DOM is built from it below.

const projects = [
    {
        title: "CUNY Central Hackathon Project",
        description:
            "A smart student platform designed to help CUNY students plan classes, find internships, build resumes, and chat with an AI-powered advisor.",
        link: "https://devpost.com/software/cuny-central",
        tags: ["Hackathon", "AI", "Web App"],
    },
    {
        title: "InfluenceFlow Hackathon Project",
        description:
            "An AI-powered marketing platform that helps small businesses automate campaigns, influencer outreach, analytics, and growth in one affordable system.",
        link: "https://devpost.com/software/influenceflow?ref_content=user-portfolio&ref_feature=in_progress",
        tags: ["Hackathon", "AI", "Marketing Tech"],
    },
    {
        title: "AI Object Detection Research",
        description:
            "A research project comparing object detection models such as YOLOv8, SSD, RetinaNet, Faster R-CNN, and DETR for speed, memory, energy use, and CPU-only deployment.",
        link: "research.html",
        tags: ["AI", "Computer Vision", "Python"],
},
    {
        title: "Personal Portfolio",
        description:
            "A one-page portfolio built with semantic HTML, modern CSS, and vanilla JavaScript to showcase my growth as a developer.",
        link: "#",
        tags: ["HTML", "CSS", "JavaScript"],
    },
];

const grid = document.querySelector("#projects-grid");

if (grid) {
    projects.forEach((project) => {
        const card = document.createElement("article");
        card.className = "project-card";

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const tagList = document.createElement("div");
        tagList.className = "project-card__tags";
        project.tags.forEach((label) => {
            const tag = document.createElement("span");
            tag.className = "project-card__tag";
            tag.textContent = label;
            tagList.appendChild(tag);
        });

        const link = document.createElement("a");
        link.className = "project-card__link";
        link.href = project.link;
        link.textContent = "View project →";
        link.target = "_blank";
        link.rel = "noopener";

        card.append(title, description, tagList, link);
        grid.appendChild(card);
    });
}


// ============================================
// FOOTER YEAR
// ============================================

const yearEl = document.querySelector("#year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

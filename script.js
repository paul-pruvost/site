const maison = document.getElementById("localisation");
maison.addEventListener("click", () => {
    window.open("https://www.google.com/maps/place/Comines,+7780+Comines-Warneton/@50.786475,2.9574273,13z/data=!3m1!4b1!4m6!3m5!1s0x47dcd2c09e08e41d:0x6a29c4f1d1b2e0a0!8m2!3d50.7687459!4d2.9997061!16s%2Fg%2F122_s31j?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D")
});

const mail = document.getElementById("email");
mail.addEventListener("click", () => {
    window.open("mailto: paulpruvost26800@gmail.com");
});

const phone = document.getElementById("telephone");
phone.addEventListener("click", () => {
    window.open("tel:07-83-53-64-31");
});

const buttons = document.querySelectorAll(".button");
const aboutButton = document.getElementById("aboutButton");
const resumeButton = document.getElementById("resumeButton");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => {
            btn.style.backgroundColor = '';
            btn.style.color = '';
        });

        button.style.color = 'rgb(245, 180, 2)';
    });
});

const allId = ["resume", "projects"];
let isActive = false;

document.addEventListener("DOMContentLoaded", () => {
    let currentId = "me";

    const toggleVisibility = (nextId) => {
        if (!isActive){
            isActive = true;
            const nextSection = document.getElementById(nextId);
            const currentSection = document.getElementById(currentId);

            if (currentId !== nextId){
                currentSection.style.opacity = 0;
                currentSection.style.transition = "transform 1s ease, opacity 1s ease";
                currentSection.style.transform = "translateX(100%) scale(0.5)";

                setTimeout(() => {
                    nextSection.style.opacity = 1;
                    nextSection.style.transition = "transform 1s ease, opacity 1s ease";
                    nextSection.style.transform = "translateX(0%) scale(1)";
                }, 800);
            };
            currentId = nextId;
        };
        setTimeout(() => {
            isActive = false;
        }, 800);
    };

    const aboutButton = document.getElementById("aboutButton");
    const resumeButton = document.getElementById("resumeButton");
    const projectsButton = document.getElementById("projectButton");

    aboutButton.addEventListener("click", () => toggleVisibility("me"));
    resumeButton.addEventListener("click", () => toggleVisibility("resume"));
    projectsButton.addEventListener("click", () => toggleVisibility("projects"));
});
aboutButton.click();

allId.forEach(section => {
    let elt = document.getElementById(section)
    elt.style.opacity = 0;
    elt.style.transform = "translateX(100%) scale(0.5)";
});

const allProjects = ["zombicide", "railroadDiv", "simulateur"];
const nextButton = document.getElementById("nextButton");
let i = 0;

const toggleVisibilityProjects = () => {
    const currentProject = document.getElementById(allProjects[i]);
    
    currentProject.style.opacity = 0;
    currentProject.style.transition = "transform 1s ease, opacity 1s ease";
    currentProject.style.transform = "translateX(100%) scale(0.5)";
    i = (i+1)%(allProjects.length);

    const nextProject = document.getElementById(allProjects[i]);
    document.getElementById(allProjects[i]).style.opacity = 1;
    nextProject.style.transition = "transform 1s ease, opacity 1s ease";
    nextProject.style.transform = "translateX(0%) scale(1)";
}
allProjects.slice(1, allProjects.length).forEach(section => {
    let elt = document.getElementById(section)
    elt.style.opacity = 0;
    elt.style.transform = "translateX(100%) scale(0.5)";
});

nextButton.addEventListener("click", toggleVisibilityProjects);
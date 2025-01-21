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

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => {
            btn.style.backgroundColor = '';
            btn.style.color = '';
        });

        button.style.color = 'rgb(245, 180, 2)';
    });
});



const allId = ["me", "resume", "projects"];
let currentId = "me";

allId.slice(1, allId.length).forEach(section => {
    let elt = document.getElementById(section)
    elt.style.opacity = 0;
    elt.style.transform = "translateX(100%) scale(0.5)";
});

const toggleVisibility = (nextId) => {
    allId.forEach(section => {
        currentId = nextId;
        if (section !== currentId){
            const otherSection = document.getElementById(section);
            otherSection.style.opacity = 0;
            otherSection.style.transition = "transform 1s ease, opacity 1s ease";
            otherSection.style.transform = "translateX(100%) scale(0.5)";
        }
        else{
            const thisSection = document.getElementById(section);
            thisSection.style.opacity = 1;
            thisSection.style.transform = "translateX(0%) scale(1)";
            thisSection.style.transition = "transform 1s ease, opacity 1s ease";
        }
    });
};

const aboutButton = document.getElementById("aboutButton");
const resumeButton = document.getElementById("resumeButton");
const projectsButton = document.getElementById("projectButton");

aboutButton.addEventListener("click", () => toggleVisibility("me"));
resumeButton.addEventListener("click", () => toggleVisibility("resume"));
projectsButton.addEventListener("click", () => toggleVisibility("projects"));

const allProjects = ["zombicide", "railroadDiv", "simulateur"];
const nextButton = document.getElementById("nextButton");
let i = 0;

const toggleVisibilityProjects = () => {
    nextButton.disabled = true;
    const currentProject = document.getElementById(allProjects[i]);
    
    currentProject.style.opacity = 0;
    currentProject.style.transition = "transform 1s ease, opacity 1s ease";
    currentProject.style.transform = "translateX(100%) scale(0.3)";

    currentProject.addEventListener("transitionend", function handleTransitionProjectEnd(event) {
        currentProject.style.transition = "none";
        currentProject.style.transform = "translateX(-100%) scale(0.3)";
        nextButton.disabled = false;
        currentProject.removeEventListener("transitionend", handleTransitionProjectEnd);
    });
    i = (i+1)%(allProjects.length);

    const nextProject = document.getElementById(allProjects[i]);
    nextProject.style.opacity = 1;
    nextProject.style.transition = "transform 1s ease, opacity 1s ease";
    nextProject.style.transform = "translateX(0%) scale(1)";
};


allProjects.slice(1, allProjects.length).forEach(section => {
    let elt = document.getElementById(section)
    elt.style.opacity = 0;
    elt.style.transform = "translateX(-100%) scale(0.3)";
});

nextButton.addEventListener("click", toggleVisibilityProjects);
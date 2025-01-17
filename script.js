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
const aboutButton = document.getElementById("about");
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


document.addEventListener("DOMContentLoaded", function() {
    const me = document.getElementById("me").childNodes;
    const resume = document.getElementById("resume").childNodes;

    const showAbout = () => {
        me.forEach(child => {
            if (child.nodeType === 1 && child.id != "button"){
                child.style.opacity = "1";
                child.style.transition = "transform 1s ease, opacity 1s ease";  
                child.style.transform = "translateX(0%)";    
            }
        });
        resume.forEach(child => {
            if (child.nodeType === 1 && child.id != "button"){
                child.style.opacity = "0";
                child.style.transition = "opacity 1s ease";        
            }
        })
    }

    const showResume = () => {
        me.forEach(child => {
            if (child.nodeType === 1 && child.id != "button"){   
                child.style.opacity = "0";
                child.style.transition = "transform 1s ease, opacity 1s ease";
                child.style.transform = "translateX(100%)";  
            }
        });
        resume.forEach(child => {
            if (child.nodeType === 1 && child.id != "button"){
                child.style.opacity = "1";
                child.style.transition = "opacity 1s ease";        
            }
        })
    }

    aboutButton.addEventListener("click", showAbout);
    resumeButton.addEventListener("click", showResume);
    aboutButton.click();
});

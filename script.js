// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
});

document.getElementById("search-button").addEventListener("click", function() {
    let query = document.getElementById("search-input").value.toLowerCase();
    
    if (query) {
        window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    }
});

const micButton = document.getElementById("mic-button");
const assistantResponse = document.getElementById("assistant-response");

const commands = {
    "go to home": () => window.location.href = "index.html",
    "open about": () => window.location.href = "about.html",
    "view projects": () => window.location.href = "projects.html",
    "contact me": () => window.location.href = "contact.html",
    "hi": () => assistantResponse.innerText = "Hello! How can I assist you?",
    "bye": () => assistantResponse.innerText = "Goodbye! Have a great day!"
};

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US";

micButton.addEventListener("click", () => {
    assistantResponse.innerText = "Listening...";
    recognition.start();
});

recognition.onresult = (event) => {
    let command = event.results[0][0].transcript.toLowerCase();
    assistantResponse.innerText = `You said: ${command}`;

    for (let key in commands) {
        if (command.includes(key)) {
            commands[key]();
            break;
        }
    }
};

recognition.onerror = (event) => {
    assistantResponse.innerText = "Error: " + event.error;
};

function speak(text) {
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US"; // change according to your language
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

const command = {
    "go to home": () => {
        speak("Navigating to Home");
        window.location.href = "index.html";
    },
    "open about": () => {
        speak("Opening About Section");
        window.location.href = "about.html";
    },
    "view projects": () => {
        speak("Showing Projects");
        window.location.href = "projects.html";
    },
    "contact me": () => {
        speak("Opening Contact Page");
        window.location.href = "contact.html";
    },
    "hi": () => speak("Hello! How can I assist you?"),
    "bye": () => speak("Goodbye! Have a great day!")
};

recognition.onresult = (event) => {
    let command = event.results[0][0].transcript.toLowerCase();
    assistantResponse.innerText = `You said: ${command}`;

    for (let key in commands) {
        if (command.includes(key)) {
            commands[key]();
            break;
        }
    }
};

function speak(text) {
    if ('speechSynthesis' in window) {
        let speech = new SpeechSynthesisUtterance(text);
        speech.lang = "en-US";
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
       
        setTimeout(() => {
            window.speechSynthesis.speak(speech);
        }, 100); // 100ms delay
    } else {
        console.log("Speech Synthesis not supported in this browser.");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".cta-button");
    const icon = button.querySelector(".icon");

    button.addEventListener("click", function () {
        icon.style.opacity = "1";
        icon.style.transform = "translateX(20px)";

        // Hide after 1 second
        setTimeout(() => {
            icon.style.opacity = "0";
            icon.style.transform = "translateX(100px)"; // Adjust slide 
        }, 1000);
    });
});

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

document.addEventListener("click", function (event) {
    let navLinks = document.querySelector(".nav-links");
    let hamburger = document.querySelector(".hamburger-menu");

    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        navLinks.classList.remove("active");

        // After 300ms display: none
        setTimeout(() => {
            navLinks.style.display = "none";
        }, 300);
    }
});

function toggleMenu() {
    let navLinks = document.querySelector(".nav-links");
   
    if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
       
        setTimeout(() => {
            navLinks.style.display = "none";
        }, 300);
    } else {
        navLinks.style.display = "flex";
        setTimeout(() => {
            navLinks.classList.add("active");
        }, 10);
    }
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    window.scrollY > 50 ?
    navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)' :
    navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
});
function changeNavbarToActive() {
    document.querySelector("nav").classList.add("active");
    document.querySelectorAll(".bar").forEach((bar) => {
        bar.classList.add("active");
    });
}

function changeNavbarToInactive() {
    document.querySelector("nav").classList.remove("active");
    document.querySelectorAll(".bar").forEach((bar) => {
        bar.classList.remove("active");
    });
}

// Sticky-Header Transparency Transistion
document.addEventListener("scroll", () => {
    if(window.scrollY > 0) {
        changeNavbarToActive();  
    } else {
        changeNavbarToInactive();
    }
});

// Activate Mobile Navbar
document.querySelector(".hamburger").addEventListener("click", () => {
    changeNavbarToActive();
    if (document.querySelector(".bar").classList.contains("toggled") && window.scrollY === 0) {
        changeNavbarToInactive();
    }
    document.querySelector("body").classList.toggle("noScrolling");
    document.querySelectorAll(".bar").forEach((bar) => {
        bar.classList.toggle("toggled");
    });
    document.querySelector(".links").classList.toggle("toggled");
});

// Contact-Form "Backend"
document.querySelector("#sendButton").addEventListener("click", () => {
    const receiver = "raphael@matjeschk.dev";
    const subject = document.querySelector("#mailSubject").value;
    const content = document.querySelector("#mailContent").value;

    const mailtoLink = `mailto:${receiver}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(content)}`;
    window.location.href = mailtoLink;
});

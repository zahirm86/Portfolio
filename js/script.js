/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");
  const navLogo = document.getElementById("navLogo");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
    navLogo.style.marginTop = "8px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
    navLogo.style.marginTop = "10px";
  }
}

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1500,
  reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

// Education Section
sr.reveal(".outer-class", { delay: 100 });

// emailform
// sr.reveal(".formspace", { delay: 100, duration: 1500 });

// skillsbox
// sr.reveal(".skills-box", { delay: 100, duration: 1500 });

// about info
// sr.reveal(".contact-info", { delay: 100, duration: 1500 });

// contact info
// sr.reveal(".about-info", { delay: 100, duration: 1500 });

// project section
// sr.reveal(".box-container", { delay: 100, duration: 2000 });

/* -- PROJECT BOX -- */
sr.reveal(".tilt", { interval: 200 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "36px",
  duration: 1500,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "36px",
  duration: 1500,
  reset: true,
});

srRight.reveal(".about-info-skills", { delay: 100 });
srRight.reveal(".formspace", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

//emailjs for contact section
function sendMail(event) {
  event.preventDefault(); // Prevent default form submission

  // Initialize EmailJS
  emailjs.init("RzhEy4LZAzvAY2sfU"); // Your EmailJS public key

  const serviceID = "service_tipzu5e"; // Your EmailJS service ID
  const templateID = "template_tvyqv98"; // Your EmailJS template ID

  // Send the form data
  emailjs.sendForm(serviceID, templateID, "#contact-form").then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Form Submitted Successfully");
      document.getElementById("contact-form").reset(); // Clear form after submission
    },
    function (error) {
      console.log("FAILED...", error);
      alert("Form Submission Failed! Try Again");
    }
  );
}

/*
function sendMail(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Initialize EmailJS with your public key
  emailjs.init("RzhEy4LZAzvAY2sfU");

  // Email service and template IDs
  const serviceID = "service_tipzu5e";
  const templateID = "service_tipzu5e";

  // Collect the form data and pass it to EmailJS
  const form = document.getElementById("contact-form");
  
  emailjs.sendForm(serviceID, templateID, form).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Form Submitted Successfully");
      // Reset the form after successful submission
      form.reset();
    },
    function (error) {
      console.log("FAILED...", error);
      alert("Form Submission Failed! Try Again");
    }
  );
}

*/
/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Web Developer", "Programmer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

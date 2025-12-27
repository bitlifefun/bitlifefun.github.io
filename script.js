// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("navMenu")

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    hamburger.classList.toggle("active")
  })

  // Close menu when clicking nav link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      hamburger.classList.remove("active")
    })
  })

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove("active")
      hamburger.classList.remove("active")
    }
  })
}

// FAQ Accordion
const faqQuestions = document.querySelectorAll(".faq-question")

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement
    const isActive = faqItem.classList.contains("active")

    // Close all FAQ items
    document.querySelectorAll(".faq-item").forEach((item) => {
      item.classList.remove("active")
    })

    // Open clicked item if it wasn't active
    if (!isActive) {
      faqItem.classList.add("active")
    }
  })
})

// Contact Form Submission
const contactForm = document.getElementById("contactForm")
const formMessage = document.getElementById("formMessage")

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    // Simulate form submission (replace with actual backend integration)
    console.log("Form submitted:", data)

    // Show success message
    formMessage.textContent = "Thank you for your message! We'll get back to you within 24-48 hours."
    formMessage.className = "form-message success"
    formMessage.style.display = "block"

    // Reset form
    contactForm.reset()

    // Hide message after 5 seconds
    setTimeout(() => {
      formMessage.style.display = "none"
    }, 5000)

    // Uncomment below for actual form submission
    /*
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            formMessage.textContent = 'Thank you for your message! We\'ll get back to you within 24-48 hours.';
            formMessage.className = 'form-message success';
            formMessage.style.display = 'block';
            contactForm.reset();
        })
        .catch(error => {
            formMessage.textContent = 'Sorry, there was an error sending your message. Please try again.';
            formMessage.className = 'form-message error';
            formMessage.style.display = 'block';
        });
        */
  })
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")

    // Only prevent default for valid hash links
    if (href !== "#" && href !== "") {
      const target = document.querySelector(href)
      if (target) {
        e.preventDefault()
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
  })
})

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe feature cards
document.querySelectorAll(".feature-card, .why-card, .gameplay-step").forEach((card) => {
  observer.observe(card)
})

// Add Active Class to Current Page in Navigation
const currentPage = window.location.pathname.split("/").pop() || "index.html"
document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active")
  }
})

// Prevent right-click on game iframe (optional)
const gameFrame = document.querySelector(".game-frame")
if (gameFrame) {
  gameFrame.addEventListener("contextmenu", (e) => {
    e.preventDefault()
  })
}

// Console Welcome Message
console.log("%c🎮 Welcome to Bitlife Unblocked! 🎮", "color: #4A90E2; font-size: 20px; font-weight: bold;")
console.log("%cEnjoy playing the game!", "color: #50C878; font-size: 14px;")

// Performance Monitoring (optional)
if ("performance" in window) {
  window.addEventListener("load", () => {
    const perfData = window.performance.timing
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart
    console.log(`⚡ Page loaded in ${pageLoadTime}ms`)
  })
}

// Add scroll progress indicator (optional enhancement)
const createScrollProgress = () => {
  const progressBar = document.createElement("div")
  progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 5px;
        background: linear-gradient(to right, #4A90E2, #9B59B6, #FF6B9D);
        z-index: 9999;
        transition: width 0.2s ease;
    `
  document.body.appendChild(progressBar)

  window.addEventListener("scroll", () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrolled = (window.scrollY / windowHeight) * 100
    progressBar.style.width = scrolled + "%"
  })
}

// Uncomment to enable scroll progress indicator
// createScrollProgress();

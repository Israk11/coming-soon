// Timer countdown setup
const countdownDate = new Date("Dec 31, 2024 00:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const dayDigits = ("0" + days).slice(-2).split("");
    const hourDigits = ("0" + hours).slice(-2).split("");
    const minuteDigits = ("0" + minutes).slice(-2).split("");
    const secondDigits = ("0" + seconds).slice(-2).split("");

    document.getElementById("day1").innerHTML = dayDigits[0];
    document.getElementById("day2").innerHTML = dayDigits[1];
    document.getElementById("hour1").innerHTML = hourDigits[0];
    document.getElementById("hour2").innerHTML = hourDigits[1];
    document.getElementById("minute1").innerHTML = minuteDigits[0];
    document.getElementById("minute2").innerHTML = minuteDigits[1];
    document.getElementById("second1").innerHTML = secondDigits[0];
    document.getElementById("second2").innerHTML = secondDigits[1];

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

// Popup functionality
function openPopup(contentType) {
    const popupContent = {
        contact: {
            title: "Contact Us",
            text: "You can reach us at contact@yourcompany.com or call us at +123456789. We are happy to assist you with any inquiries or support."
        },
        about: {
            title: "About Us",
            text: "We are a dynamic team dedicated to bringing you innovative solutions. Our upcoming product is designed to revolutionize the industry. Stay tuned for more updates!"
        },
        faq: {
            title: "FAQs",
            text: "Q: When will the site be live?\nA: We are launching soon! Stay tuned.\nQ: How can I stay updated?\nA: Follow us on social media or subscribe to our newsletter."
        }
    };

    document.getElementById("popup-title").innerText = popupContent[contentType].title;
    document.getElementById("popup-text").innerText = popupContent[contentType].text;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

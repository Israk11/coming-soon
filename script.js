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



// Open the subscribe popup
document.getElementById("subscribeBtn").onclick = function() {
    document.getElementById("subscribePopup").style.display = "flex";
}

// Close the popup
function closePopup() {
    document.getElementById("subscribePopup").style.display = "none";
    document.getElementById("popup").style.display = "none";
}

// Handle form submission
document.getElementById("subscribeForm").onsubmit = function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Example of saving data to a free database like Firebase
    saveToFirebase(name, email);

    // You can replace this with another service or GitHub API if needed

    // Close the popup after submission
    closePopup();
    alert("Thank you for subscribing!");
};

// Example: Save data to Firebase (replace with your Firebase configuration)
function saveToFirebase(name, email) {
    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
        databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_PROJECT_ID.appspot.com",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };

    // Initialize Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const database = firebase.database();
    const subscribersRef = database.ref('subscribers');

    subscribersRef.push({
        name: name,
        email: email,
        timestamp: new Date().toISOString()
    });
}

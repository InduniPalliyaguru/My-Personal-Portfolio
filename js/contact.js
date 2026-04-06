
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let status = document.getElementById("statusMsg");

    status.textContent = "Message sent successfully!";
    status.style.color = "#1F6F78";

    this.reset();
});
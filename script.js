const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", handleContactSubmit);

function handleContactSubmit(event) {
    event.preventDefault();

    const name = contactForm.elements["name"].value;
    const email = contactForm.elements["email"].value;
    const message = contactForm.elements["message"].value;

    const result = `Nome: ${name} \nE-mail: ${email} \nMensagem: ${message}`;

    alert(result);
}

const form = document.getElementById("form")

function handleSubmit(event) {
    event.preventDefault();

    const name = form.elements['name'].value
    const email = form.elements['email'].value
    const message = form.elements['message'].value

    const result = `Nome: ${name} \n Email: ${email} \n Mensagem: ${message}`;
    alert(result);
}

form.addEventListener("submit", handleSubmit);
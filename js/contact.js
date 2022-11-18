// Agrego una funcion al boton de submit

let submit = document.getElementById("submit")
submit.onclick = () => {
    Swal.fire({
        title: 'Thanks for reaching out to us',
        text: 'We payed a rogue to send you an email',
        icon: 'success',
        showConfirmButton: false,
        timer: 3500
    })
}
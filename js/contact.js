// Agrego una funcion al boton de submit
function convertir (){
    var uid = document.getElementById("name").value;
    var surname = document.getElementById("surname").value; 
    var email = document.getElementById("email").value;

//storage
    var user = localStorage.setItem("uid",uid);
    var userSurname = localStorage.setItem("surname",surname);
    var userEmail = localStorage.setItem("email",email);
    if (uid == null || uid == "", surname == null || surname == "", email == null || email == "") {
        Swal.fire({
            title: 'Form incomplete',
            text: 'I hope u are not a thief',
            icon: 'error',
            showConfirmButton: false,
            timer: 3500
        })
    }else{
    Swal.fire({
        title: 'Thanks '+uid+' for reaching out to us',
        text: 'We payed a rogue to send you a crow to this destination: '+email,
        icon: 'success',
        showConfirmButton: false,
        timer: 3500
    })
    }
}



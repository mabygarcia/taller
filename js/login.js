function login(){

    let email = document.getElementById('email').value;
    let clave = document.getElementById('clave').value;

if (email !="" && clave!=""){
    localStorage.setItem('user', email);
    location.href='index.html';
} else {
    alert('Email y contraseña con requeridos')
}
}

document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('ingresar').addEventListener('click',()=>{
        login();
    })
})
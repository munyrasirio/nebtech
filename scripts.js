let menu = document.querySelector('nav');
let mask = document.querySelector('.mask');
let logo = document.querySelector('.logo-nav');
let logoS = document.querySelector('.logo-nav-small');
let link = document.querySelector('ul');

function openMenu() {
    menu.classList.add('active')
};

function closeMenu() {
    mask.addEventListener('click', () => {
        menu.classList.remove('active')
    });
    link.addEventListener('click', () => {
        menu.classList.remove('active')
    })
}
closeMenu();
window.onscroll = function() {
    "use strict";
    if (window.innerWidth >= 900 && window.scrollY >= 400) {
        menu.classList.add("nav-colored");
        logo.classList.add("logo-hide");
        logoS.classList.add("logo-small");
        menu.classList.remove("nav-transparent")
    } else {
        menu.classList.add("nav-transparent");
        logo.classList.remove("logo-hide");
        logoS.classList.remove("logo-small");
        menu.classList.remove("nav-colored")
    }
};
let emailForm = document.querySelector('.contato');
let emailFail = document.querySelector('.email-failed');
let emailSend = document.querySelector('.email-sended');
let emailTransfer = document.querySelector('.email-travel');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let message = document.querySelector('#message');
let erro = document.querySelector('#erro');
let sBtn = document.querySelector('#sendbtn');

function retryEmail() {
    emailForm.classList.add('displayBox');
    emailFail.classList.remove('displayBox')
};

function newEmail() {
    emailForm.classList.add('displayBox');
    emailSend.classList.remove('displayBox')
};

function sendEmail() {
    let mail = {
        name: name.value,
        email: email.value,
        message: message.value,
    }
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!mail.name || !mail.email || !mail.message) {
        erro.className = 'alert';
        erro.innerHTML = 'Alguns campos se encontram em branco.'
    } else if (!email.value.match(mailFormat)) {
        erro.className = 'alert';
        erro.innerHTML = 'O e-mail apresentado é inválido.'
    } else {
        sBtn.disabled = !0;
        emailTransfer.classList.add('displayBox');
        erro.className = 'none';
        erro.innerHTML = '';

        setTimeout(() => {
            name.value = '';
            email.value = '';
            message.value = '';
            erro.className = 'none';
            erro.innerHTML = '';
            sBtn.disabled = !1;
            emailSend.classList.add('displayBox');
            emailForm.classList.remove('displayBox');
            emailTransfer.classList.remove('displayBox')

           /* NÃO ESTÁ ENVIANDO E-MAILS, SOMENTE EXIBE A ANIMAÇÃO
           
           var http = new XMLHttpRequest();
            http.onreadystatechange = () => {
                if (http.readyState == 4) {
                    if (http.status === 200) {
                        name.value = '';
                        email.value = '';
                        message.value = '';
                        erro.className = 'none';
                        erro.innerHTML = '';
                        sBtn.disabled = !1;
                        emailSend.classList.add('displayBox');
                        emailForm.classList.remove('displayBox');
                        emailTransfer.classList.remove('displayBox')
                    } else {
                        emailTransfer.classList.remove('displayBox');
                        emailFail.classList.add('displayBox');
                        emailForm.classList.remove('displayBox');
                        erro.className = 'none';
                        erro.innerHTML = ''
                    }
                }
            };   */         
        }, 3000);
        http.open("POST", "/mail", !0);
        http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        http.send(JSON.stringify(mail))
    }
}
function init() {

    document.getElementById('user').addEventListener('click', e => {
        if (!localStorage.getItem("token")) {
            alert("You are not logged in");
            window.location.href = '/login.html';
            return;
        }
        window.location.href = '/pages/user/user.html';
    });

    document.getElementById('karavan').addEventListener('click', e => {
        if (!localStorage.getItem("token")) {
            alert("You are not logged in");
            window.location.href = '/login.html';
            return;
        }
        window.location.href = '/pages/karavan/karavan.html';
    });

    document.getElementById('kombi').addEventListener('click', e => {
        if (!localStorage.getItem("token")) {
            alert("You are not logged in");
            window.location.href = '/login.html';
            return;
        }
        window.location.href = '/pages/kombi/kombi.html';
    });

    document.getElementById('limuzina').addEventListener('click', e => {
        if (!localStorage.getItem("token")) {
            alert("You are not logged in");
            window.location.href = '/login.html';
            return;
        }
        window.location.href = '/pages/limuzina/limuzina.html';
    });

    document.getElementById('motor').addEventListener('click', e => {
        if (!localStorage.getItem("token")) {
            alert("You are not logged in");
            window.location.href = '/login.html';
            return;
        }
        window.location.href = '/pages/motor/motor.html';
    });

    document.getElementById('suv').addEventListener('click', e => {
        if (!localStorage.getItem("token")) {
            alert("You are not logged in");
            window.location.href = '/login.html';
            return;
        }
        window.location.href = '/pages/suv/suv.html';
    });
    document.getElementById('login').addEventListener('click', e => {
        window.location.href = '/pages/user/login.html';
    });

    document.getElementById('logout').addEventListener('click', e => {
        if (!localStorage.getItem("token")) {
            alert("You are not logged in");
            return;
        }
        window.location.href = 'login.html';
    });
}
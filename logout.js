function login() {
    window.location.href = LOGIN_URL;
}

    function initPage() {

        if (usuarioCorrente.login) {
            document.getElementById('btn_logout').innerHTML = '<img class="icon" src="img/logout.png" alt="login">';
            document.getElementById('btn_login').style.display = 'none';
            document.getElementById('btn_logout').style.display = 'flex';
            document.getElementById('btn_logout').addEventListener('click', logoutUser);
        } else {
            document.getElementById('btn_login').addEventListener('click', login);
        }
    }

    // Associa ao evento de carga da página a função para verificar se o usuário está logado
    window.addEventListener('load', initPage);
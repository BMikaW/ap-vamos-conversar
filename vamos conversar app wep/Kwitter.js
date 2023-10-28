function Entrar() {
    var name = document.getElementById("login").value;
localStorage.setItem("login", name);
window.location.replace("kwitter_room.js");
}
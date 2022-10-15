function login()
{
    username = document.getElementById("username").value;
    localStorage.setItem("username",username);
    password = document.getElementById("password").value;
    localStorage.setItem("password",password);
    window.location = "index2.html";
}

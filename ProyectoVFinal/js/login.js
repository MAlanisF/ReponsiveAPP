function login(){
    let inputuser = document.getElementById("username").value;
    let inputpass = document.getElementById("password").value;
    
    sessionStorage.setItem("usuario", inputuser );
    sessionStorage.setItem("contraseña", inputpass );
	
	window.location.href ="index.html";
}
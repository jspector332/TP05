const fbnombre = document.getElementById("fb-nombre");
const fbapellido = document.getElementById("fb-apellido");
const fbnombreUsuario = document.getElementById("fb-nombreUsuario");
const fbcontrasenia = document.getElementById("fb-contrasenia");
const fbtipo = document.getElementById("fb-tipo");
const nombreUsuarioLogin = document.getElementById("fb-nombreusuariologin");
const fbcontrasenialogin = document.getElementById("fb-contlogin");

function enviarFormulario(){
    
    
    const nombre = fbnombre.value;
    const apellido = fbapellido.value;
    const nombreUsuario = fbnombreUsuario.value;
    const contrasenia = fbcontrasenia.value;
    const tipo = fbtipo.value;

    const errores = [];
    limpiarFeedbacks();

    if (nombre === "" || isNaN(nombre) === false) {
        errores.push("El nombre esta vacio/es invalido.");
        mostrarError("fb-nombre", "Campo obligatorio.");
    }
    else{
        mostrarOK("fb-nombre", "OK");
    }

    if (apellido === "" || isNaN(apellido) === false) {
        errores.push("El apellido esta vacio/es invalido.");
        mostrarError("fb-apellido", "Campo obligatorio.");
    }
    else{
        mostrarOK("fb-apellido", "OK");
    }

    if (nombreUsuario === "" || isNaN(nombreUsuario) === false) {
        errores.push("El nombre de usuario esta vacio/es invalido.");
        mostrarError("fb-nombreUsuario", "Campo obligatorio.");
    }
    else{
        mostrarOK("fb-nombreUsuario", "OK");
    }

    if (contrasenia === "" || contrasenia.length < 8) {
        errores.push("La contraseña es obligatoria y debe tener al menos 8 caracteres.");
        mostrarError("fb-contrasenia", "Campo obligatorio.");
    }
    else{
        mostrarOK("fb-contrasenia", "OK");
    }

    if (tipo === "") {
        errores.push("El tipo de usuario es obligatorio.");
        mostrarError("fb-tipo", "Campo obligatorio.");
    }
    else{
        mostrarOK("fb-tipo", "OK");
    }

    if (errores.length > 0){
        divResultado.style.color  = "red";
        divResultado.style.border = "1px solid red";
        divResultado.style.padding = "8px";
        divResultado.innerHTML = "<strong>No se pudo enviar:</strong><br>" + errores.join("<br>");
    }
    else{
        divResultado.style.color  = "green";
        divResultado.style.border = "1px solid green";
        divResultado.style.padding = "8px";
        divResultado.innerHTML = "<strong>¡Registro exitoso!</strong><br>";
    }
}

function mostrarError(id, msg) {
    const el = document.getElementById(id);
    el.innerHTML = msg;
    el.style.color = "red";
}

function mostrarOK(id, msg){
    const el = document.getElementById(id);
    el.innerHTML = msg;
    el.style.color = "green";
}

function limpiarFeedbacks() {
    fbnombre.innerHTML = "";
    fbapellido.innerHTML = "";
    fbnombreUsuario.innerHTML = "";
    fbcontrasenia.innerHTML = "";
    fbtipo.innerHTML = "";
}

function limpiarFeedbacksLogin() {
    nombreUsuarioLogin.innerHTML = "";
    fbcontrasenialogin.innerHTML = "";
}

function enviarFormLogin(){
    const nombreUsuario = nombreUsuarioLogin.value;
    const contrasenia = fbcontrasenialogin.value;

    const erroresLogin = [];
    limpiarFeedbacksLogin();

    if (nombreUsuario === "" || isNaN(nombreUsuario) === false) {
        erroresLogin.push("El nombre de usuario esta vacio/no es valido.");
        mostrarError("fb-nombreusuariologin", "Campo obligatorio.");
    }
    else{
        mostrarOK("fb-nombreusuariologin", "OK");
    }

    if (contrasenia === "" || contrasenia.length < 8) {
        erroresLogin.push("La contraseña es incorrecta o esta vacia.");
        mostrarError("fb-contlogin", "Campo obligatorio.");
    }
    else{
        mostrarOK("fb-contlogin", "OK");
    }

    if (erroresLogin.length > 0){
        divResultado.style.color  = "red";
        divResultado.style.border = "1px solid red";
        divResultado.style.padding = "8px";
        divResultado.innerHTML = "<strong>No se pudo enviar:</strong><br>" + errores.join("<br>");
    }
    else{
        divResultado.style.color  = "green";
        divResultado.style.border = "1px solid green";
        divResultado.style.padding = "8px";
        divResultado.innerHTML = "<strong>¡Registro exitoso!</strong><br>";
    }
}

function validarFormulario() {
    if (errores.length > 0) {
        return false;
    }
    else{
        return true;
    }
}

function validarFormularioLogin() {
    if (erroresLogin.length > 0) {
        return false;
    }
    else{
        return true;
    }
}
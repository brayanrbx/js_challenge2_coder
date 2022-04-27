const login = () => {
    alert("Bienvenido al sistema de ubicación para zonas publicas WIFI");
    let user = "51606"; // Usuario para ingresar
    let password = "60615" // Contraseña de ingreso
    alert(`Para acceder por favor digite como usuario: ${user} y como contraseña: ${password}`);
    let nameUser = prompt("Digite su nombre de usuario: ");

    if (nameUser != user) {
        alert("Error, debe ingresar un usuario valido");
        return false;
    }
    else {
            alert("Bienvenido");
    }

    userPass = prompt("Digite su contraseña: ");

    if (userPass != password) {
        alert("Error, debe ingresar una contraseña correcta");
        return false;
    }
    else {
        alert("password successful");
        return true;
    }
};

const codigo = () => {
    let n1 = 606
    let n2 = ((6 * 0 + 6) + (6 * 6 - 0)) * 0
    let catpcha = parseInt(prompt(`Para continuar ingrese el valor del código de seguridad: ${n1} + ${n2} = `));

    if (catpcha === (n1 + n2)) {
        alert("Sesión iniciada");
        return true;
    }
    else {
        alert("Error, el codigo de seguridad ingresado es incorrecto");
        return false;
    }
};

setTimeout (() => {
    let cancelar = true;
    while (cancelar) {
        cancelar = login();
        if (cancelar != false) {
            cancelar =  codigo();
        }
        else {
            break;
        }
    };
}, 2000);






















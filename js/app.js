const option = ["Cambiar contraseña", "Ingresar coordenadas actuales", "Ubicar zona WIFI mas cercana",
        "Guardar archivo con ubicación cercana", "Actualizar registros de zonas WIFI desde archivos",
        "Elegir opción de menu favorita", "Cerrar sesión"];

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
        alert("Error, el código de seguridad ingresado es incorrecto");
        return false;
    }
};

function seleccion(option) {
    opcion = parseInt(prompt(`1. ${option[0]} \n2. ${option[1]} \n3. ${option[2]} \n4. ${option[3]} \n5. ${option[4]} \n6. ${option[5]} \n7. ${option[6]} \nPor favor seleccione la opcion que desea realizar: `));
    return opcion;
};

function main(option) {
    while (true) {
        let opcion = seleccion(option);
        let cont = 3;
        while ((opcion < 1) || (opcion > 7)) {
            if (cont == 0) {
                alert(`Error tus intentos restantes son ${cont}`);
                return false;
            }
            alert(`Error, opcion invalida, te quedan ${cont} intentos`);
            opcion = seleccion(option);
            cont -= 1;
        }
        if (opcion == 1) {
            alert("Usted ha elegido la opción 1");
        }
        else if (opcion == 2) {
            alert("Usted ha elegido la opción 2");
        }
        else if (opcion == 3) {
            alert("Usted ha elegido la opción 3");
        }
        else if (opcion == 4) {
            alert("Usted ha elegido la opción 4");
        }
        else if (opcion == 5) {
            alert("Usted ha elegido la opción 5");
        }
        else if (opcion == 6) {
            let favorite = parseInt(prompt("Por favor seleccione una opcion del 1-5 como favorito: "));
            if ((favorite < 1) || (favorite > 5)) {
                alert("Error, ha ingresado una opcion invalida");
            }
            else {
                alert("para confirmar la selección deberá responder las siguientes preguntas");
                let n1 = parseInt(prompt("Antes era un ocho pero perdí mi parte superior, la respuesta es: "));
                if (n1 != 0) {
                    alert("Error, respuesta incorrecta");
                }
                else {
                    let n2 = parseInt(prompt("Soy hermano del nueve pero siempre mi cabeza mira al piso, la respuesta es: "));
                    if (n2 != 6) {
                        alert("Error, respuesta incorrecta");
                    }
                    else {
                        let temp = option[favorite - 1];
                        option.splice((favorite - 1), 1);
                        option.splice(0, 0, temp);
                    }
                }
            }
        }
        else if (opcion == 7) {
            alert("Has seleccionado cerrar sesión \nHasta pronto");
            return;
        }
    }
}

setTimeout(() => {
    let exit;
    exit = login();
    if (exit != false) {
        exit = codigo();
        if (exit != false) {
            main(option);
        }
        else {
            return;
        }
    }
    else {
        return;
    }
}, 2000);













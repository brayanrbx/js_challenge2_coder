// array para ingresar las coordenadas actuales
const coordenada = [
    {
        coordenadas_casa: {
            latitud: "",
            longitud: ""
        }
    },

    {
        coordenadas_trabajo: {
            latitud: "",
            longitud: ""
        }
    },

    {
        coordenadas_parque: {
            latitud: "",
            longitud: ""
        }
    }
];

// array que contiene las opciones del menu
const option = ["Cambiar contraseña", "Ingresar coordenadas actuales", "Ubicar zona WIFI mas cercana",
        "Guardar archivo con ubicación cercana", "Actualizar registros de zonas WIFI desde archivos",
        "Elegir opción de menu favorita", "Cerrar sesión"];

// objeto que contiene los datos de usuario
const user = {
    user: "51606",
    password: "60615",
    codigo1: 606,
    codigo2: (((6 * 0 + 6) + (6 * 6 - 0)) * 0),
    coordenadas: false // controlador para saber si el usuario ya ingreso las coordenadas
};

// funcion para el login de usuario
const login = () => {
    alert(`Bienvenido al sistema de ubicación para zonas publicas WIFI \nPara acceder por favor digite como usuario: ${user.user} y como contraseña: ${user.password}`);
    let nameUser = prompt("Digite su nombre de usuario: ");

    if (nameUser != user.user) {
        alert("Error, debe ingresar un usuario valido");
        return false;
    }
    else {
        alert("Bienvenido");
    }

    userPass = prompt("Digite su contraseña: ");

    if (userPass != user.password) {
        alert("Error, debe ingresar una contraseña correcta");
        return false;
    }
    else {
        alert("password successful");
        return true;
    }
};

// funcion para el codigo de seguridad del usuario
const code = () => {
    let catpcha = parseInt(prompt(`Para continuar ingrese el valor del código de seguridad: ${user.codigo1} + ${user.codigo2} = `));

    if (catpcha === (user.codigo1 + user.codigo2)) {
        alert("Sesión iniciada");
        return true;
    }
    else {
        alert("Error, el código de seguridad ingresado es incorrecto");
        return false;
    }
};

/**
 *
 * @param {
 * } option array con las opciones del menu
 * @returns la opcion elegida por el usuario
 */

function choice(option) {
    opcion = (prompt(`1. ${option[0]} \n2. ${option[1]} \n3. ${option[2]} \n4. ${option[3]} \n5. ${option[4]} \n6. ${option[5]} \n7. ${option[6]} \nPor favor seleccione la opcion que desea realizar: `));
    return opcion;
};

// funcion para elegir la opcion de menu favorita
function favorite(option) {
    let favorite = parseInt(prompt("Por favor seleccione una opcion del 1-5 como favorito: "));
    let temp = option[favorite - 1];
    option.splice((favorite - 1), 1);
    option.splice(0, 0, temp);
};

// funcion para validar que se ingrese un numero entero
function validationInt(opcion) {
    while (true) {
        num_format = /^[+]?([0-9])*$/; //expresión regular para validar que se ingrese un numero entero
        try {
            entero = (choice(opcion));
            if (num_format.test(entero)) {
                return entero
            }
            else {
                throw new Error;
            }
        }
        catch (Error) {
            alert("Error, el valor ingresado no es un numero entero vuelva y digite un numero entero");
        }
    }
};

// funcion para validar que se ingrese un float
function validationFloat(mensaje) {
    while (true) {
        num_format = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/; //expresión regular para validar que se ingrese un numero flotante
        try {
            let entrada = prompt(mensaje);
            if (!num_format.test(entrada)) {
                throw new Error;
            }
            else {
                flotante = parseFloat(entrada);
                return flotante;
            }
        }
        catch (Error) {
            alert("Error, el valor ingresado no es un numero vuelva y digite un numero");
        }
    }
};

// funcion para cambiar la contraseña
function cambio_password(password) {
    let confirmacion = prompt("Digite la contraseña actual: ");
    if (confirmacion == password) {
        let newpassword = prompt("Ingrese su nueva contraseña: ");
        if (newpassword == password) {
            alert("Error, Esa contraseña ya existe")
            return;
        }
        else {
            user.password = newpassword;
        }
    }
    else {
        alert("Error, esa no es la contraseña actual")
        return;
    }
};

// funcion para ingresar las coordenadas actuales
function ingresoCoordenadas(element) {
    let mensaje1 = `Las coordenadas para latitud deben estar en el rango Sup: -3.002 hasta Inf:-4.227 \nIntroduce las coordenadas de latitud`; //string para las coordenadas de latitud
    let mensaje2 = `Las coordenadas para longitud deben estar en el rango Or:-69.714 hasta Occ:-70.365 \nIntroduce las coordenadas de longitud`; // string para las coordenadas de longitud
    let latitud = validationFloat(mensaje1);
    if ((latitud < -4.227) || (latitud > -3.002)) {
        alert("Error coordenada");
        return;
    }
    else {
        latitud.toFixed(3);
        temp = latitud
    }

    let longitud = validationFloat(mensaje2)
    if ((longitud < -70.365) || (longitud > -69.714)) {
        alert("Error coordenada");
        return;
    }
    else {
        longitud.toFixed(3);
        element.latitud = temp;
        element.longitud = longitud;
    }
};

/**
 *@description funcion para ingresar las coordenadas
 */

function coordenadas(coordenada) {
    coordenada.forEach((element) => {
        if (element.coordenadas_casa) {
            cancel = ingresoCoordenadas(element.coordenadas_casa);
        }
        if (element.coordenadas_trabajo) {
            ingresoCoordenadas(element.coordenadas_trabajo);
        }
        if (element.coordenadas_parque) {
            ingresoCoordenadas(element.coordenadas_parque);
        }
    });
};

// funcion principal para el menu
function main(option) {
    while (true) {
        let opcion = validationInt(option);
        let cont = 3;
        while ((opcion < 1) || (opcion > 7)) {
            if (cont == 0) {
                alert(`Error tus intentos restantes son ${cont}`);
                return false;
            }
            alert(`Error, opcion invalida, te quedan ${cont} intentos`);
            opcion = choice(option);
            cont -= 1;
        }
        if ((opcion - 1) === option.findIndex(x => x === "Cambiar contraseña")) {
            alert("Has seleccionado cambiar contraseña");
            cambio_password(user.password);
        }
        else if ((opcion - 1) ===  option.findIndex(x => x === "Ingresar coordenadas actuales")) {
            alert("Has seleccionado ingresar coordenadas actuales");
            if (user.coordenadas == false) {
                coordenadas(coordenada);
                user.coordenadas = true;
            }
            else {
                alert("Ya has ingresado las coordenadas actuales");
                console.log(coordenada);
            }
        }
        else if ((opcion - 1) === option.findIndex(x => x === "Ubicar zona WIFI mas cercana")) {
            alert("Has seleccionado ubicar zona WIFI mas cercana");
        }
        else if ((opcion -1) === option.findIndex(x => x === "Guardar archivo con ubicación cercana")) {
            alert("Has seleccionado guardar archivo con ubicación cercana");
        }
        else if ((opcion - 1) === option.findIndex(x => x === "Actualizar registros de zonas WIFI desde archivos")) {
            alert("Has seleccionado actualizar registros de zonas WIFI desde archivos");
        }
        else if ((opcion - 1) === option.findIndex(x => x === "Elegir opción de menu favorita")) {
            alert("Has seleccionado elegir opción de menu favorita");
            favorite(option);
        }
        else if ((opcion - 1) === option.findIndex(x => x === "Cerrar sesión")) {
            alert("Has seleccionado cerrar sesión \nHasta pronto");
            return;
        }
    }
};

setTimeout(() => {
    let exit;
    exit = login();
    if (exit != false) {
        exit = code();
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



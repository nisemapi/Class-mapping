let silla = 0 //crea variable para la funcion crearSalon
let contenedor = document.getElementById("container") //para llamar el contenedor del salon a crear
var nombreUsuario = ""
var uid = ""
var userId = ""
var salonActual = ""

// para crear salón
function crearSalon(f, c) {
    for (let i = 0; i < f; i++) { //crea las filas
        for (let index = 0; index < c; index++) { // crea las columnas
            silla++
            //crear flip-cards con divs
            let div1 = document.createElement("div");
            div1.setAttribute("class", "flip-card");
            div1.setAttribute("id", silla);
            div1.setAttribute("onClick", "elegirSilla(this.id)");
            contenedor.appendChild(div1);
            let div2 = document.createElement("div");
            div2.setAttribute("class", "flip-card-inner");
            div1.appendChild(div2);
            let div3 = document.createElement("div");
            div3.setAttribute("class", "flip-card-front");
            div2.appendChild(div3);
            let h1 = document.createElement("h1");
            div3.appendChild(h1);
            h1.setAttribute("id", "nombre" + silla);
            h1.innerHTML = silla;
            div2.setAttribute("class", "flip-card-inner");
            let div4 = document.createElement("div");
            div4.setAttribute("class", "flip-card-back");
            div2.appendChild(div4);
            let div5 = document.createElement("div");
            div5.setAttribute("class", "date");
            div4.appendChild(div5);
            let h2 = document.createElement("h2");
            h2.setAttribute("class", "name");
            h2.setAttribute("id", "nombreAtras" + silla);
            div5.appendChild(h2);
            let p1 = document.createElement("p");
            p1.setAttribute("id", "telefono" + silla);
            div5.appendChild(p1);
            let p2 = document.createElement("p");
            div5.appendChild(p2);

        }
    }

    console.log(salonActual)

    document.getElementById("container").style.display = "grid";
    document.getElementById("container").style.gridTemplateColumns = "repeat(" + c + ", auto)"; //crea las columnas

}
//cerrar sesión y volver a login
function logout() {
    auth.signOut().then(() => {
        window.location.href = "index.html";
        console.log("El usuario ha cerrado sesión")
    });
}


//super función
auth.onAuthStateChanged(user => { //verifica el cambio en autenticación y obtiene el usuario que inició sesión.
    if (user == null) {
        window.location.href = "index.html";
    } else {
        let f = 0
        let c = 0
        let nombre = document.getElementById("h3-nombre");
        uid = user.uid

        // console.log("uid: ", uid);
        db.collection("users").where("authId", "==", uid)
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    salonActual = doc.data().idSalon
                    db.collection("salones").doc(salonActual).get()
                        .then(function (doc) {
                            if (doc.exists) {
                                f = doc.data().filas
                                c = doc.data().columnas
                                crearSalon(f, c)
                                let nombreSalon = document.getElementById("h3-id-salon")
                                nombreSalon.innerHTML = doc.data().nombre + " " + salonActual

                            }
                            actualizarSillas()
                        })
                })
                querySnapshot.forEach(function (doc) {
                    nombre.innerHTML = doc.data().nombre
                    nombreUsuario = doc.data().nombre
                    telefonoUsuario = doc.data().telefono
                    userId = doc.id
                });
            })
    }
});

actualizarSillas = () => db.collection("users").where("idSalon", "==", salonActual)
    .onSnapshot(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            // asignar datos de usuarios del salón a sus sillas
            let nombreTarjetaFrente = document.getElementById("nombre" + doc.data().chair)
            let nombreTarjetaAtras = document.getElementById("nombreAtras" + doc.data().chair)
            let telefonoTarjetaAtras = document.getElementById("telefono" + doc.data().chair)
            //asignar valores a variables
            nombreTarjetaFrente.innerHTML = doc.data().nombre
            nombreTarjetaAtras.innerHTML = doc.data().nombre
            telefonoTarjetaAtras.innerHTML = doc.data().telefono

        })
    });
//asigna datos de usuario con click 
//pendiente: cambiar de silla.
//pendiente: escoger sólo una silla a la vez
//guardar silla elegida del usuario en db
function elegirSilla(silla) {

    console.log("silla " + silla + " agregada al usuario " + nombreUsuario)
    db.collection("users").doc(userId).get()
        .then(function (doc) {
            if (doc.data().chair == undefined) {
                db.collection("users").doc(userId).set({
                    chair: "0"
                }, {
                    merge: true
                })
            } else {

                let sillaAnterior = doc.data().chair;
            }
            let sillaAnterior = doc.data().chair;
            console.log("Silla anterior: ",sillaAnterior)
            // asignar datos de usuarios del salón a sus sillas
            let nombreTarjetaFrente = document.getElementById("nombre" + sillaAnterior)
            let nombreTarjetaAtras = document.getElementById("nombreAtras" + sillaAnterior)
            let telefonoTarjetaAtras = document.getElementById("telefono" + sillaAnterior)
            //asignar valores a variables
            nombreTarjetaFrente.innerHTML = sillaAnterior
            nombreTarjetaAtras.innerHTML = ""
            telefonoTarjetaAtras.innerHTML = ""

            db.collection("users").doc(userId).set({
                chair: silla
            }, {
                merge: true
            })
        })
}



// realTime = () => db.collection("users").where("idSalon", "==", doc.data().idSalon)
//     .onSnapshot(function (querySnapshot) {
//         querySnapshot.forEach(function (doc) {
//             let nombreTarjetaFrente = document.getElementById("nombre" + doc.data().chair)
//             let nombreTarjetaAtras = document.getElementById("nombreAtras" + doc.data().chair)
//             let telefonoTarjetaAtras = document.getElementById("telefono" + doc.data().chair)
//             //asignar valores a variables
//             nombreTarjetaFrente.innerHTML = doc.data().nombre
//             nombreTarjetaAtras.innerHTML = doc.data().nombre
//             telefonoTarjetaAtras.innerHTML = doc.data().telefono

//         });
// realTime()

// actualizarSillas = () => db.collection("users").where("idSalon", "==", salonActual).get()
//     .then(function (querySnapshot) {
//         querySnapshot.forEach(function (doc) {
//             console.log(silla)
//             // asignar datos de usuarios del salón a sus sillas
//             let nombreTarjetaFrente = document.getElementById("nombre" + doc.data().chair)
//             let nombreTarjetaAtras = document.getElementById("nombreAtras" + doc.data().chair)
//             let telefonoTarjetaAtras = document.getElementById("telefono" + doc.data().chair)
//             //asignar valores a variables
//             nombreTarjetaFrente.innerHTML = doc.data().nombre
//             nombreTarjetaAtras.innerHTML = doc.data().nombre
//             telefonoTarjetaAtras.innerHTML = doc.data().telefono

//         })
//     })
// actualizarSillas()
// });
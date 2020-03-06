let silla = 0 //crea variable para la funcion crearSalon
let contenedor = document.getElementById("container") //para llamar el contenedor del salon a crear
var nombreUsuario = ""


function crearSalon(f,c) {
    for (let i = 0; i < f; i++) { //crea las filas
        for (let index = 0; index < c; index++) { // crea las columnas
            silla++
            //crear flip-cards con divs
            let div1 = document.createElement("div");
            div1.setAttribute("class", "flip-card");
            div1.setAttribute("id", silla);
            div1.setAttribute("onClick", "agregarDatos(this.id)" );
            contenedor.appendChild(div1);
            let div2 = document.createElement("div");
            div2.setAttribute("class", "flip-card-inner");
            div1.appendChild(div2);
            let div3 = document.createElement("div");
            div3.setAttribute("class", "flip-card-front");
            div2.appendChild(div3);
            let h1 = document.createElement("h1");
            div3.appendChild(h1);
            h1.setAttribute("id", "nombre"+silla);
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
            h2.setAttribute("id", "nombreAtras"+silla);
            div5.appendChild(h2);
            let p1 = document.createElement("p");
            p1.setAttribute("id", "telefono"+silla);
            div5.appendChild(p1);
            let p2 = document.createElement("p");
            div5.appendChild(p2);
            
        }
    }

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
    let salonActual = ""
    let f = 0
    let c = 0
    let uid = user.uid
let nombre = document.getElementById("h3-nombre");

// console.log("uid: ", uid);
db.collection("users").where("authId", "==", uid)
.get()
    .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            salonActual = doc.data().idSalon
            // console.log("salonId: " + doc.data().idSalon)
            db.collection("salones").doc(salonActual).get()
                .then(function (doc) {
                    if (doc.exists) {
                        f = doc.data().filas
                        c = doc.data().columnas
                        crearSalon(f,c)
                        let nombreSalon = document.getElementById("h3-id-salon")
                        nombreSalon.innerHTML = doc.data().nombre +" "+ salonActual
                        
                    }
                })
            })
            querySnapshot.forEach(function (doc) {
                nombre.innerHTML = doc.data().nombre
                nombreUsuario = doc.data().nombre
                telefonoUsuario = doc.data().telefono
            });
        })
    
    });
    
//asigna datos de usuario con click 
    function agregarDatos(silla) {
        console.log(silla)
       console.log(nombreUsuario)
       let nombreTarjetaFrente = document.getElementById("nombre"+silla)
    //    nombreTarjetaFrente.style.fontSize = "250%"
       let nombreTarjetaAtras= document.getElementById("nombreAtras"+silla)
       let telefonoTarjetaAtras = document.getElementById("telefono"+silla)
        nombreTarjetaFrente.innerHTML = nombreUsuario
        nombreTarjetaAtras.innerHTML = nombreUsuario
        telefonoTarjetaAtras.innerHTML = telefonoUsuario
    }
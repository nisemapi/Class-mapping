let filas = document.getElementById("filas")
let columnas = document.getElementById("columnas")
let silla = 0
let contenedor = document.getElementById("container")

function crearSalon() {
    let f= filas.value
    let c= columnas.value
    for (let i = 0; i < f; i++) {
        for (let index = 0; index < c; index++) {
            silla ++
            let div1 = document.createElement("div");
            div1.setAttribute("class", "flip-card");
            contenedor.appendChild(div1);
            let div2 = document.createElement("div");
            div2.setAttribute("class", "flip-card-inner");
            div1.appendChild(div2);
            let div3 = document.createElement("div");
            div3.setAttribute("class", "flip-card-front");
            div2.appendChild(div3);
            let h1 = document.createElement("h1");
            div3.appendChild(h1);
            console.log("silla antes de h1: ", silla)
            h1.innerHTML = silla ;
            div2.setAttribute("class", "flip-card-inner");
            let div4 = document.createElement("div");
            div4.setAttribute("class", "flip-card-back");
            div2.appendChild(div4);
            let div5 = document.createElement("div");
            div5.setAttribute("class", "date");
            div4.appendChild(div5);
            let h2 = document.createElement("h2");
            h2.setAttribute("class","name");
            div5.appendChild(h2);
            let p1 = document.createElement("p");
            div5.appendChild(p1);
            let p2 = document.createElement("p");
            div5.appendChild(p2);
        }
        // document.write("<br>")
    }

    document.getElementById("container").style.display ="grid";
    document.getElementById("container").style.gridTemplateColumns = "repeat("+c+", auto)";
    document.getElementById("cabeza").style.visibility = "hidden";

}
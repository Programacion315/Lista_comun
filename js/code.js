
const listar = () =>{
    
    let nombre = document.querySelector("#campo").value;
    document.querySelector("#caja").insertAdjacentHTML('beforeend', `<div>${nombre}</div>`);
}

document.querySelector("#boton").onclick=listar;
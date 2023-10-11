let ide;
var colorinchi;
var colorCelda;

function dibujarTabla() {
  for (let i = 0; i < 30; i++) {
    let fila = document.getElementById("tabla").insertRow(i); //insertar filas en la tabla
    for (let j = 0; j < 30; j++) {
      let celda = fila.insertCell(j); //insertar celdas en las filas
      ide = "id" + (i + 1) + "-" + (j + 1);
      celda.setAttribute("id", ide); //atribuir un id a cada celda para poder pintar
    }
  }
  seleccionado();
}

function elegirColor(colorCelda) {
  //esta función es llamada al hacer click en uno de los colores de la muestra

  if (colorCelda == "azul") {
    //si el color de celda es azul
    colorinchi = "#03BFFF"; // la variable colorinchi toma el valor blue
    colorSelected.innerHTML = "Se ha seleccionado el color AZUL"; //y se pinta la instrucción del color elegido
  } else if (colorCelda == "rojo") {
    colorinchi = "#FF0100";
    colorSelected.innerHTML = "Se ha seleccionado el color ROJO";
  } else if (colorCelda == "naranja") {
    colorinchi = "#F39C12";
    colorSelected.innerHTML = "Se ha seleccionado el color NARANJA";
  } else if (colorCelda == "amarillo") {
    colorinchi = "#FEFF00";
    colorSelected.innerHTML = "Se ha seleccionado el color AMARILLO";
  } else if (colorCelda == "verde") {
    colorinchi = "#32CD32";
    colorSelected.innerHTML = "Se ha seleccionado el color VERDE";
  } else if (colorCelda == "rosa") {
    colorinchi = "#FF7BB7";
    colorSelected.innerHTML = "Se ha seleccionado el color ROSA";
  } else if (colorCelda == "marron") {
    colorinchi = "#BA4A00";
    colorSelected.innerHTML = "Se ha seleccionado el color MARRÓN";
  } else if (colorCelda == "violeta") {
    colorinchi = "#A569BD";
    colorSelected.innerHTML = "Se ha seleccionado el color VIOLETA";
  } else if (colorCelda == "negro") {
    colorinchi = "#000000";
    colorSelected.innerHTML = "Se ha seleccionado el color NEGRO";
  } else if (colorCelda == "gris") {
    colorinchi = "#72756C";
    colorSelected.innerHTML = "Se ha seleccionado el color GRIS";
  } else if (colorCelda == "blanco") {
    colorinchi = "white";
    colorSelected.innerHTML = "Se ha seleccionado el color BLANCO";
  }
}

function seleccionado() {
  var rIndex;
  var cIndex;
  var table = document.getElementById("tabla");

  for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      //leer todas las celdas
      table.rows[i].cells[j].onmouseover = function () {
        //al pasar el ratón ejecutar la funcion
        rIndex = this.parentElement.rowIndex + 1;
        cIndex = this.cellIndex + 1;
        ide = "id" + rIndex + "-" + cIndex; //asignar un id a la celda sobre la que se pasa
        //console.log("ide " + ide);
        //console.log(colorinchi);
        document.getElementById(ide).style.backgroundColor = colorinchi; //asignar un color según elección
      };
      table.rows[i].cells[j].onclick = function () {
        //si se hace clic el color se vuelve nulo, se deselecciona el color
        colorinchi = "none";
        colorSelected.innerHTML = "&nbsp;";
      };
    }
  }
}

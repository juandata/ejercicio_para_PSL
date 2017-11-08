/*Obtengo la variable que guarddará el input*/
var input = document.getElementById('numero');
/* añado el event listener cuando el usuario digita en el input */
document.getElementById("numero").addEventListener('change', imprimir_en_lcd);
/* Esta es la función principal, es la que imprime los elementos "textarea" dependiendo del número que se digite */
function imprimir_en_lcd(){

    str = this.value;
    var size = str.charAt(0);
    var texto = "";
    var n0= "";  var n1= "";  var n2= "";var n3= "";  var n4= "";  var n5= ""; var n6= "";  var n7= "";  var n8= ""; var n9= "";
    n0 = document.getElementById("n0").value;
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    n3 = document.getElementById("n3").value;
    n4 = document.getElementById("n4").value;
    n5 = document.getElementById("n5").value;
    n6 = document.getElementById("n6").value;
    n7 = document.getElementById("n7").value;
    n8 = document.getElementById("n8").value;
    n9 = document.getElementById("n9").value;
    /*Itero en un for loop para obtener los números que el usuario desea se muestren */
    var i;
    for (i= 2; i < str.length; i++) {

        var numeros = document.createElement("textarea");
        numeros.className += "numeros_digitados"
        if (str[i] == "0") {
          document.body.appendChild(numeros);
          var t = document.createTextNode(n0);       // Creo un nodo de texto
          numeros.appendChild(t);
        }
        else if (str[i] == "1") {

          document.body.appendChild(numeros);
          var t = document.createTextNode(n1);       // Creo un nodo de texto
          numeros.appendChild(t);
        }
        else if (str[i] == "2") {

          document.body.appendChild(numeros);
          var t = document.createTextNode(n2);       // Creo un nodo de texto
          numeros.appendChild(t);
        }
        else if (str[i] == "3") {

          document.body.appendChild(numeros);
          var t = document.createTextNode(n3);       // Creo un nodo de texto
          numeros.appendChild(t);
        }
        else if (str[i] == "4") {

          document.body.appendChild(numeros);
          var t = document.createTextNode(n4);       // Creo un nodo de texto
          numeros.appendChild(t);
        }
        else if (str[i] == "5") {

          document.body.appendChild(numeros);
          var t = document.createTextNode(n5);       // Creo un nodo de texto
          numeros.appendChild(t);
        }
        else if (str[i] == "6") {

          document.body.appendChild(numeros);
          var t = document.createTextNode(n6);       // Creo un nodo de texto
          numeros.appendChild(t);
        }
        else if (str[i] == "7") {

          document.body.appendChild(numeros);
          var t = document.createTextNode(n7);       // Creo un nodo de texto
          numeros.appendChild(t);
        }
        else if (str[i] == "8") {

          document.body.appendChild(numeros);
          var t = document.createTextNode(n8);       // Creo un nodo de texto
          numeros.appendChild(t);
        }
        else if (str[i] == "9") {

          document.body.appendChild(numeros);
          var t = document.createTextNode(n9);       // Creo un nodo de texto
          numeros.appendChild(t);
        }
        texto +=  + str[i] + "  ";
  }

    document.getElementById("demo").innerHTML = texto;

    /*No fue posible sumar y resstar con los caracteres "-" y "|" en HTML por lo que modifico el tamaño de la fuente con un switch*/
    var losnumeros = document.getElementsByClassName('numeros_digitados');
  for (var i = 0; i < losnumeros.length; i++) {
    switch (size) {
  case "1":
      losnumeros[i].style.fontSize = "40%"; break;
    case "2":
        losnumeros[i].style.fontSize = "60%"; break;
        case "3":
            losnumeros[i].style.fontSize = "90%"; break;
            case "4":
                losnumeros[i].style.fontSize = "140%"; break;
                case "5":
                    losnumeros[i].style.fontSize = "210%"; break;
                    case "6":
                        losnumeros[i].style.fontSize = "320%"; break;
                        case "7":
                            losnumeros[i].style.fontSize = "480%"; break;
                            case "8":
                                losnumeros[i].style.fontSize = "720%"; break;
                                case "9":
                                    losnumeros[i].style.fontSize = "1080%"; break;
                    }
                  }
                  /*Si el usuario digita 0,0 la aplicación se detiene eliminando todo el contenido del DOM*/
        var losnumeros = document.getElementsByClassName('numeros_digitados');
        for (var i = 0; i < losnumeros.length; i++) {

          if (str == "0,0") {
           console.log("el string es 0,0");
           document.body.style.display = "none";
         }
        }

      } /* fin function imprimir_en_lcd*/

      /*Si el usuario digita "backspace" se deben borrar todos los números digitados para comenzar de nuevo*/
  input.onkeydown = function() {
    var key = event.keyCode || event.charCode;

    if( key == 8 || key == 46 )
    var losnumeros = document.getElementsByClassName('numeros_digitados');
    for (var i = 0; i < losnumeros.length; i++) {

       losnumeros[i].style.display = "none";

    }
  };

/* Gracias por la oportunidad de hacer este ejercicio. Quedo atento a sus comentarios */





/*
var numero = document.getElementById("numero").value ;
console.log(numero);*/

/* event listener */
document.getElementById("numero").addEventListener('change', imprimir_en_lcd);


/* function */
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
    var i;
    for (i= 2; i < str.length; i++) {


        if (str[i] == "0") {

          var numeros = document.createElement("textarea");
          numeros.className += "numeros_digitados";

          document.body.appendChild(numeros);
          var t = document.createTextNode(n0);       // Create a text node
          numeros.appendChild(t);


        }
        else if (str[i] == "1") {
          var numeros = document.createElement("textarea");
          document.body.appendChild(numeros);
          var t = document.createTextNode(n1);       // Create a text node
          numeros.appendChild(t);
        }
        else if (str[i] == "2") {
          var numeros = document.createElement("textarea");
          document.body.appendChild(numeros);
          var t = document.createTextNode(n2);       // Create a text node
          numeros.appendChild(t);
        }
        else if (str[i] == "3") {
          var numeros = document.createElement("textarea");
          document.body.appendChild(numeros);
          var t = document.createTextNode(n3);       // Create a text node
          numeros.appendChild(t);
        }
        else if (str[i] == "4") {
          var numeros = document.createElement("textarea");
          document.body.appendChild(numeros);
          var t = document.createTextNode(n4);       // Create a text node
          numeros.appendChild(t);
        }
        else if (str[i] == "5") {
          var numeros = document.createElement("textarea");
          document.body.appendChild(numeros);
          var t = document.createTextNode(n5);       // Create a text node
          numeros.appendChild(t);
        }
        else if (str[i] == "6") {
          var numeros = document.createElement("textarea");
          document.body.appendChild(numeros);
          var t = document.createTextNode(n6);       // Create a text node
          numeros.appendChild(t);
        }
        else if (str[i] == "7") {
          var numeros = document.createElement("textarea");
          document.body.appendChild(numeros);
          var t = document.createTextNode(n7);       // Create a text node
          numeros.appendChild(t);
        }
        else if (str[i] == "8") {
          var numeros = document.createElement("textarea");
          document.body.appendChild(numeros);
          var t = document.createTextNode(n8);       // Create a text node
          numeros.appendChild(t);
        }
        else if (str[i] == "9") {
          var numeros = document.createElement("textarea");
          document.body.appendChild(numeros);
          var t = document.createTextNode(n9);       // Create a text node
          numeros.appendChild(t);
        }


        else {
          document.getElementById("areatexto").innerHTML = "no has digitado un número";
        }
        texto += str[i] + "<br>";



    }

    document.getElementById("demo").innerHTML = texto;

    console.log(size);
    switch (size) {
    case "2":
        console.log("el valor es 2");
        break;
    case "3":
        console.log("el valor es 3");
        break;

}

        for (var i = 0; i < str.length; i++) {

          if (str == "0,0") {
           console.log("el string es 0,0");
           var losnumeros = document.getElementsByTagName('textarea');
           document.body.style.display = "none";
            console.log(losnumeros);
         }
        }






}




/*var texto1 =document.getElementById("numero").value;
alert('Horray! Someone wrote "' + this.value + '"!');
var size = str.charAt(0)
var n1 = str.charAt(2)
var n2 = str.charAt(3)
var n3 = str.charAt(4)
var n4 = str.charAt(5)
var n5 = str.charAt(6)
var n6 = str.charAt(7)
var n7 = str.charAt(8)
var n8 = str.charAt(9)
var n9 = str.charAt(10)
var n10 = str.charAt(11)
*/

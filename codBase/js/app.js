//Objeto global
function Calculadora(){

var digitos=8;//Números que recibe la calculadora
var numeroAnterior='';
var numeroInicial='0';
var operacion = "";
var display = document.getElementById("display");//pantalla calculadora

//Reiniciar calculadora

this.reiniciar = function(){
  numeroAnterior = "";
  numeroInicial = "0";
  operacion = "";
  refrescarDisplay();
};

this.masMenos = function() {
    if (numeroInicial !== "0") {
        if (numeroInicial.indexOf("-") < 0) {
            numeroInicial = "-" + numeroInicial;
        } else {
            numeroInicial = numeroInicial.replace("-", "");
        }
        refrescarDisplay();
    }
};

//Adiciona el punto

this.addPunto = function() {
    if (numeroInicial.indexOf(".") < 0 &&
        numeroInicial.length < digitos) {
        numeroInicial += ".";
        refrescarDisplay();
    }
};

//Adiciona numeros a la calculadora
this.addNumero = function(unNumero) {
    if ( numeroInicial.length < digitos) {
        if (numeroInicial === "0") {
            numeroInicial = unNumero.toString();
        } else {
            numeroInicial += unNumero.toString();
        }
        refrescarDisplay();
    }
};

var refrescarDisplay = function() {
    display.innerHTML = numeroInicial.toString();
};


this.operar = function() {
    numeroAnterior = numeroInicial;
    numeroInicial = "0";
    refrescarDisplay();
};

this.sumar = function() {
    if (numeroInicial !== "0") {
        operacion = "sumando";
        this.operar();
    }
};

this.restar = function() {
    if (numeroInicial !== "0") {
        operacion = "restando";
        this.operar();
    }
};

this.multiplicar = function() {
    if (numeroInicial !== "0") {
        operacion = "multiplicando";
        this.operar();
    }
};

this.dividir = function() {
    if (numeroInicial !== "0") {
        operacion = "dividiendo";
        this.operar();
    }
};



this.calcular = function() {
    if (operacion === "sumando") {
        numeroInicial = (parseFloat(numeroAnterior) + parseFloat(numeroInicial)).toString().substring(0, digitos);
    } else if (operacion === "restando") {
        numeroInicial = (parseFloat(numeroAnterior) - parseFloat(numeroInicial)).toString().substring(0, digitos);
    } else if (operacion === "multiplicando") {
        numeroInicial = (parseFloat(numeroAnterior) * parseFloat(numeroInicial)).toString().substring(0, digitos);
    } else if (operacion === "dividiendo") {
        numeroInicial = (parseFloat(numeroAnterior) / parseFloat(numeroInicial)).toString().substring(0, digitos);
    }
    refrescarDisplay();
};

};


var calculadora = new Calculadora()
//Metodos para reducir tamaños de las teclas

document.getElementById('0').addEventListener('mousedown',function(e){
  e.target.style.transform='scale(0.9,0.9)';
});

document.getElementById('0').addEventListener('mouseup',function(e){
  e.target.style.transform='scale(1,1)';
});
//Metodo para que ejecute los numeros en pantalla
document.getElementById('0').addEventListener('click',function(){
  calculadora.addNumero(0)

});
document.getElementById('1').addEventListener('mousedown',function(e){
  e.target.style.transform='scale(0.9,0.9)';
});
document.getElementById('1').addEventListener('mouseup',function(e){
  e.target.style.transform='scale(1,1)';
});
document.getElementById('1').addEventListener('click',function(){
  calculadora.addNumero(1)

});
document.getElementById('2').addEventListener('mousedown',function(e){
  e.target.style.transform='scale(0.9,0.9)';
});
document.getElementById('2').addEventListener('mouseup',function(e){
  e.target.style.transform='scale(1,1)';
});
document.getElementById('2').addEventListener('click',function(){
  calculadora.addNumero(2)

});
document.getElementById('3').addEventListener('mousedown',function(e){
  e.target.style.transform='scale(0.9,0.9)';
});
document.getElementById('3').addEventListener('mouseup',function(e){
  e.target.style.transform='scale(1,1)';
});
document.getElementById('3').addEventListener('click',function(){
  calculadora.addNumero(3)

});
document.getElementById('4').addEventListener('mousedown',function(e){
  e.target.style.transform='scale(0.9,0.9)';
});
document.getElementById('4').addEventListener('mouseup',function(e){
  e.target.style.transform='scale(1,1)';
});
document.getElementById('4').addEventListener('click',function(){
  calculadora.addNumero(4)

});

document.getElementById('5').addEventListener('mousedown',function(e){
  e.target.style.transform='scale(0.9,0.9)';
});
document.getElementById('5').addEventListener('mouseup',function(e){
  e.target.style.transform='scale(1,1)';
});
document.getElementById('5').addEventListener('click',function(){
  calculadora.addNumero(5)

});

document.getElementById('6').addEventListener('mousedown',function(e){
  e.target.style.transform='scale(0.9,0.9)';
});
document.getElementById('6').addEventListener('mouseup',function(e){
  e.target.style.transform='scale(1,1)';
});
document.getElementById('6').addEventListener('click',function(){
  calculadora.addNumero(6)

});

document.getElementById('7').addEventListener('mousedown',function(e){
  e.target.style.transform='scale(0.9,0.9)';
});
document.getElementById('7').addEventListener('mouseup',function(e){
  e.target.style.transform='scale(1,1)';
});
document.getElementById('7').addEventListener('click',function(){
  calculadora.addNumero(7)

});

document.getElementById('8').addEventListener('mousedown',function(e){
  e.target.style.transform='scale(0.9,0.9)';
});
document.getElementById('8').addEventListener('mouseup',function(e){
  e.target.style.transform='scale(1,1)';
});
document.getElementById('8').addEventListener('click',function(){
  calculadora.addNumero(8)

});

document.getElementById('9').addEventListener('mousedown',function(e){
  e.target.style.transform='scale(0.9,0.9)';
});
document.getElementById('9').addEventListener('mouseup',function(e){
  e.target.style.transform='scale(1,1)';
});
document.getElementById('9').addEventListener('click',function(){
  calculadora.addNumero(9)

});
// Boton encendido
document.getElementById("on").addEventListener("mousedown", function(e) {
    e.target.style.transform = "scale(0.9,0.9)";
});

document.getElementById("on").addEventListener("mouseup", function(e) {
    e.target.style.transform = "scale(1,1)";
});

//Boton punto
document.getElementById("punto").addEventListener("mousedown", function(e) {
    e.target.style.transform = "scale(0.9,0.9)";
});

document.getElementById("punto").addEventListener("mouseup", function(e) {
    e.target.style.transform = "scale(1,1)";
});

//Boton igual
document.getElementById("igual").addEventListener("mousedown", function(e) {
    e.target.style.transform = "scale(0.9,0.9)";
});

document.getElementById("igual").addEventListener("mouseup", function(e) {
    e.target.style.transform = "scale(1,1)";
});
//Boton de suma
document.getElementById("mas").addEventListener("mousedown", function(e) {
    e.target.style.transform = "scale(0.9,0.9)";
});

document.getElementById("mas").addEventListener("mouseup", function(e) {
    e.target.style.transform = "scale(1,1)";
});

//Boton de resta
document.getElementById("menos").addEventListener("mousedown", function(e) {
    e.target.style.transform = "scale(0.9,0.9)";
});

document.getElementById("menos").addEventListener("mouseup", function(e) {
    e.target.style.transform = "scale(1,1)";
});

//Boton de multiplicacion
document.getElementById("por").addEventListener("mousedown", function(e) {
    e.target.style.transform = "scale(0.9,0.9)";
});

document.getElementById("por").addEventListener("mouseup", function(e) {
    e.target.style.transform = "scale(1,1)";
});

//Boton de division
document.getElementById("dividido").addEventListener("mousedown", function(e) {
    e.target.style.transform = "scale(0.9,0.9)";
});

document.getElementById("dividido").addEventListener("mouseup", function(e) {
    e.target.style.transform = "scale(1,1)";
});

// Boton de +/-
document.getElementById("sign").addEventListener("mousedown", function(e) {
    e.target.style.transform = "scale(0.9,0.9)";
});

document.getElementById("sign").addEventListener("mouseup", function(e) {
    e.target.style.transform = "scale(1,1)";
});

window.onclick = function(e) {
    var tecla = e.target;

    if (tecla.id === "on") {//tecla borrado
        calculadora.reiniciar();
    }else if (tecla.id === 'mas'){//tecla suma
      calculadora.sumar();
    }else if (tecla.id === 'igual'){//tecla resultado
      calculadora.calcular();
    }else if (tecla.id === 'menos'){//Tecla de resta
      calculadora.restar();
    }else if (tecla.id ==='dividido'){// Tecla de division
      calculadora.dividir();
    }else if (tecla.id === 'sign'){// Tecla para poner mas(+) o menos(-)
      calculadora.masMenos();
    }else if (tecla.id ==='por'){// Tecla de multiplicacion
      calculadora.multiplicar();
    }else if (tecla.id === 'punto'){//Tecla para poner el punto
      calculadora.addPunto();
    }
  };

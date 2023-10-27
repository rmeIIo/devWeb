var var1 = 10;
let let1 = "5";
const const1 = 5;

var1 += let1;
var1 = var1.toString();

document.getElementById('js').innerText = "Hello World!";

document.getElementById('js').innerText += "\nVar = " + typeof(var1) + "\nLet = " + typeof(let1) + "\nConst = " + const1;

//operadores relacionais
const js = document.getElementById('js');

js.innerHTML += "<hr> Var1=15 com Const1 = 15" + "<br> Var 1 == Const1 = " + (var1 == const1)
+ "<br> Var 1 == Const1 = " + (var1 == const1)
+ "<br> Var 1 == Const1 = " + (var1 != const1) 
+ "<br> Var 1 == Const1 = " + (var1 > const1) 
+ "<br> Var 1 == Const1 = " + (var1 < const1) 
+ "<br> Var 1 == Const1 = " + (var1 >= const1)
+ "<br> Var 1 == Const1 = " + (var1 <= const1);

//Operadores Lógicos
js.innerHTML += "<hr> " + 
"Var1 == const1 E var1 == let1 = " + (var1 == const1 && var1 == let1) +
"<br> Var1 == const1 OU var1 == let1 = " + (var1 == const1 || var1 == let1) ;
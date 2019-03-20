

var teste = [0,2,0,0];
var novoteste= teste.filter(function(item){
    return item == 2
})
// function verificar(array) {
//   return array.filter(function(item) {
//     return item == 2;
//   })
// }

//console.log(novoteste);


function moedaParaNumero(valor)
{
    return isNaN(valor) == false ? parseFloat(valor) :   parseFloat(valor.replace("R$","").replace(".","").replace(",","."));
}

function numeroParaMoeda(n, c, d, t)
{
    c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "," : d, t = t == undefined ? "." : t, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
    return "R$ "+s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}

let a = numeroParaMoeda(0.5)
console.log(a, moedaParaNumero(a))

function formatReal( valor )
{
    const teste = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return teste
}
let b = formatReal(50)

console.log(b, moedaParaNumero(b))




function converteFloatMoeda(valor){
    var inteiro = null, decimal = null, c = null, j = null;
    var aux = new Array();
    valor = ""+valor;
    c = valor.indexOf(".",0);
    //encontrou o ponto na string
    if(c > 0){
       //separa as partes em inteiro e decimal
       inteiro = valor.substring(0,c);
       decimal = valor.substring(c+1,valor.length);
    }else{
       inteiro = valor;
    }
    
    //pega a parte inteiro de 3 em 3 partes
    for (j = inteiro.length, c = 0; j > 0; j-=3, c++){
       aux[c]=inteiro.substring(j-3,j);
    }
    
    //percorre a string acrescentando os pontos
    inteiro = "";
    for(c = aux.length-1; c >= 0; c--){
       inteiro += aux[c]+'.';
    }
    //retirando o ultimo ponto e finalizando a parte inteiro
    
    inteiro = inteiro.substring(0,inteiro.length-1);
    
    decimal = parseInt(decimal);
    if(isNaN(decimal)){
       decimal = "00";
    }else{
       decimal = ""+decimal;
       if(decimal.length === 1){
          decimal = decimal+"0";
       }
    }  
    
    valor = "R$ "+inteiro+","+decimal;   
    return valor;

 }

 console.log(converteFloatMoeda(500))
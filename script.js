const saudarUsuario= ()=>{
   let nome=prompt("Digite seu nome");
   alert("Olá, {nome}! Seja bem-vindo ao curso de de Web Design!");
};

const taxaConversao=1.609;

function converterMilhas(){
   let Milhas=parseFloat(prompt("Digite o valor em milhas"));
   let km= milhas* taxaConversao;
   alert("${milhas}) milhas equivalem a ${km.toFixed(2)} km.");
}

function verificarMaioridade(){
   let idade= parseInt(prompt("Digite sua idade"));

   if (idade >=18){
        alert("true- Você é maior de idade.");
} else {
        alert(false-"Você é menor de idade.");
}
}
 function calcularPreco(){
 let preço=parseFloat(prompt("Digite o preço do produto:"));
 let desconto=parseFloat(prompt("Digite a porcentagem de desconto"));

 let valorFinal;

 if (desconto>10){
    valorFinal= preco-(preco * desconto/100);
 } else{
     valorFinal=preco;
 }
 alert("Valor final:R$ ${valorFinal.toFixed(2)}");
}

function manipularTexto(){
let texto= prompt("Digite um texto:");

let resultado={
    maiusculas:texto.toUpperCase(),
    minusculas:texto.toLowerCase(),
    quantidadeCaracteres:texto.length
};

alert(
   "Maiúsculas:" +resultado.maiusculas+
    "/nMinusculas:"+resultado.minusculas+
    "/nQuantidade de caracteres:" +resultado.quantidadeCaracteres
);

}

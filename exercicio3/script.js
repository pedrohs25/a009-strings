//a)
const frase1 = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`

//b)
const frase2 = `${frase1.replaceAll ("verde", "rosa")} `
const frase3 = `${frase2.replaceAll ("azul", "laranja")} `
console.log(frase3);

//c)
console.log(`A nova string inclui a palavra "verde"? \n${frase3.includes("verde")}`);
console.log(`A nova string inclui a palavra "laranja"? \n${frase3.includes ("laranja")}`);

//Extra
console.log(`Passando o final da frase para maiúscula ficará assim: \n${frase3.replaceAll ("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR")}`);

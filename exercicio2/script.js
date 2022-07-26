const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

//a)
const fraseSemEspacos = minhaString.trim();

//b)
console.log(`A frase: ${minhaString} \nPossui ${minhaString.length} caracteres \nA frase ${fraseSemEspacos} \nPossui ${fraseSemEspacos.length} caracteres depois da remoção dos espaços.`);

//c)
const fraseSubstituida = fraseSemEspacos.replace ("________", "sticioso")
console.log(`Substituindo os traços, a frase ficará: \n${fraseSubstituida}`);

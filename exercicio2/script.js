const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const fraseSemEspacos = minhaString.trim();
console.log(`A frase: ${minhaString} \nPossui ${minhaString.length} caracteres \nA frase ${fraseSemEspacos} \nPossui ${fraseSemEspacos.length} caracteres depois da remoção dos espaços.`);

const fraseSubstituida = fraseSemEspacos.replace ("________", "sticioso")

console.log(`Substituindo os traços, a frase ficará: \n${fraseSubstituida}`);

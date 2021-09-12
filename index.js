

function introduction(name) {
  return`Hi, my name is ${name}.`;
}
let result = introduction('Josh');
console.log(result);


function introductionWithLanguage(name, language) {
  return`Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguage('Nancy', 'React'));


function introductionWithLanguageOptional(name, language = "JavaScript") {
  return`Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguageOptional('Gracie'));
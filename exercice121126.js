const grand = Array.from(
    { length: 70000},
    (_, i) => i
)

const petit = [3, 6, 4, 2, 2]



const rechercheDoubon = () => {
  const tableau = [3, 2, 2, 5];

  for (let i =0; i < tableau.length; i++) {
    let n = tableau[i];
    for (let j=i+1; j < tableau.length; j++ ) {
        if (n === tableau [j]) {
            console.log((i+1)*j);
            return true
        }
    }
  }



}
console.time("rechercheDoublonNaïve")
console.log(rechercheDoubon(grand))
console.timeEnd("rechercheDoublonNaïve")


// recherche du max

const rechercheDoublonRapide = (tableau) => {
  let valeurs = {};
    for (let i=0; i < tableau.length; i++) {
        let n = tableau[i];
        //valeurs ['chaussettes']
        if(valeurs[n] === true) {
            console.log(i);
            return true;
        }else {
            valeurs[n] = true;
        }
    }

}

console.time("rechercheDoublonNaïve")
console.log(rechercheDoublonRapide(grand))
console.timeEnd("rechercheDoublonNaïve")

console.time("rechercheDoublonNaïve")
console.log(rechercheDoublonRapide(petit))
console.timeEnd("rechercheDoublonNaïve")

console.time("rechercheDoublonNaïve")
console.log(rechercheDoublonRapide(petit))
console.timeEnd("rechercheDoublonNaïve")





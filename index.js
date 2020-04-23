// function fact(nb) {
//     let resultat = 1;
//     for (let i = 2; i <= nb; i++) {
//         resultat *= i;
//     }
//     return resultat;
// }


// function fact(nb) {
//     let resultat = 1;
//     while (nb > 1) {
//         resultat *= nb;
//         nb--;
//     }
//     return resultat;
// }


function fact(nb) {
    if (nb <= 1) {
        return 1;
    }
    return nb * fact(nb - 1);
}
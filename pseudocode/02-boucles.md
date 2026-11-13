Exo 1compterJusqua(n)
Affiche les nombres de 1 à n dans la console.
compterJusqua(5) → affiche 1, 2, 3, 4, 5

VARIABLES:
n: ENTIER
i: ENTIER

DEBUT

POUR i <- 1 à n
    AFFICHER i
FIN POUR
FIN


Exo 2afficherPairs(n)
Affiche uniquement les nombres pairs de 1 à n dans la console.
afficherPairs(8) → affiche 2, 4, 6, 8


VARIABLES:
n: ENTIER
i: ENTIER

DEBUT

POUR i <- 1 à n
    SI i % 2 == 0 ALORS 
        AFFICHER i
    FIN SI 
FIN POUR
FIN



Exo 3somme(n)
Retourne la somme de tous les entiers de 1 à n.
somme(5) → 15
somme(0) → 0


VARIABLES:
n: ENTIER
i: ENTIER 
acc: ENTIER

DEBUT 

acc <- 0

 POUR i <- 1 à n
    acc <- acc + i
    FIN POUR 

    RETOURNE acc
 FIN
    



 Exo 4produit(n)
Retourne le produit de tous les entiers de 1 à n (factorielle). Retourne 1 pour n = 0.
produit(5) → 120
produit(0) → 1

VARIABLES
n: ENTIER
i: ENTIER
ACC: ENTIER


DEBUT

ACC <- 1
POUR i <- 1 à n 
    ACC <- ACC * i
FIN POUR 

RETOURNE ACC 
FIN    






Exo 5compterPairs(n)
Retourne le nombre d'entiers pairs entre 1 et n inclus.
compterPairs(10) → 5
compterPairs(7)  → 3


VARIABLES:
n: ENTIER
i: ENTIER 
nombre: ENTIER

DEBUT
    nombre <- 0
    POUR i <- 1 à n
        SI i % 2 ==0    ALORS 
            nombre <- nombre + 1
        FIN SI 
    FIN POUR 
    RETOURNE nombre
FIN    





Exo 6table(n)
Retourne un tableau contenant les n premiers multiples de n.
table(3) → [3, 6, 9]
table(0) → []


VARIABLES:
n : ENTIER 
i : ENTIER
tableau : TABLEAU

DEBUT 
tableau <- []

POUR i <- 1 à n
    AJOUTER n * i au tableau
FIN POUR 

RETOURNE tableau
FIN 




Exo 7multiplesJusqua(n, limite)
Retourne un tableau contenant tous les multiples de n inférieurs ou égaux à limite.
multiplesJusqua(3, 12) → [3, 6, 9, 12]
multiplesJusqua(7, 20) → [7, 14]


VARIABLES:
n : ENTIER
i : ENTIER
tableau : TABLEAU
limite : ENTIER 

DEBUT
tableau <- []
i <- 1

SI n <= 0 ALORS
    RETOURNE tableau
FIN SI

TANT QUE n * i <=  limite
    AJOUTER n * i au tableau
    i <- i + 1
FIN TANT QUE     

RETOURNE tableau 
FIN

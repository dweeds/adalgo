Exo 1maximum(tableau)
Retourne la plus grande valeur. Sans Math.max().
maximum([3, 7, 2, 9, 1]) → 9

VARIABLES:
 i : ENTIER
 plusGrand : ENTIER


 FONCTION maximum (tableau)
    
    plusGrand <- tableau[0]

    POUR i de 1 à longueur (tableau) - 1


        SI tableau[i] > plusGrand ALORS

            plusGrand <- tableau[i] 


        FIN SI 

    FIN POUR

    RETOURNER plusGrand
    FIN 




Exo 2minimum(tableau)
Retourne la plus petite valeur. Sans Math.min().
minimum([3, 7, 2, 9, 1]) → 1


VARIABLES:
 i : ENTIER
 plusPetit : ENTIER


 FONCTION minimum (tableau)

    plusPetit <- tableau[0]

    POUR i de 1 à longueur (tableau) - 1

        SI tableau[i] < plusPetit ALORS

            plusPetit <- tableau[i]

        FIN SI
FIN POUR

RETOURNE plusPetit
FIN



Exo 3moyenne(tableau)
Retourne la moyenne. Retourne null si le tableau est vide.
moyenne([2, 4, 6]) → 4
moyenne([])        → null


VARIABLES:
i : ENTIER
somme : NOMBRE

FONCTION moyenne (tableau)

    SI longueur (tableau) = 0 ALORS
        RETOURNER nul
    FIN SI 

    somme <- 0

    POUR i de 0 à longueur(tableau) - 1
        somme <- somme + tableau[i]
    FIN POUR

    RETOURNER somme / longueur (tableau)
FIN            



Exo 4contient(tableau, valeur)
Retourne true si la valeur est dans le tableau. Sans .includes().
contient([1, 2, 3], 2) → true
contient([1, 2, 3], 5) → false


VARIABLES :
i : ENTIER

FONCTION contient (tableau, valeur)

    POUR i de 0 à longueur (tableau) - 1

        SI tableau[i] = valeur ALORS 
            RETOURNER true
        FIN SI 

    FIN POUR

    RETOURNER false

FIN 


Exo 5compter(tableau, valeur)
Retourne le nombre de fois que la valeur apparaît.
compter([1, 2, 2, 3, 2], 2) → 3


VARIABLES :
i : ENTIER
nombre : ENTIER 

FONCTION compter(tableau, valeur)


    nombre <- 0

    POUR i de 0 à longueur (tableau) - 1

        SI tableau[i] = valeur ALORS
            NOMBRE <- nombre + 1
        FIN SI 

    FIN POUR 

    RETOURNER nombre

FIN            
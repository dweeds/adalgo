EXERCICE 01 CONDITION:

VARIABLE
n: ENTIER

DEBUT
    SI n >= 0 ALORS 
RETOURNE true
    SINON
    RETOURNE false
FIN SI

FIN 


Exo 2estPair(n)
Retourne true si n est pair.


VARIABLE
n: ENTIER 

DEBUT
    SI n%2 == 0 ALORS 
RETOURNE true
    SINON
    RETOURNE false
FIN SI 

FIN         


Exo 3max(a, b)
Retourne le plus grand des deux nombres. Sans Math.max().

VARIABLE
a: ENTIER
b: ENTIER 

DEBUT
    SI a < b ALORS
REOURNE B
    SINON 
RETOURNE a
FIN SI 
FIN  

Exo 4mention(note)
Retourne la mention : >= 16 "Très bien", >= 14 "Bien", >= 12 "Assez bien", >= 10 "Passable", sinon "Insuffisant".

VARIABLE
note: ENTIER 

DEBUT 
    SI note >= 16 ALORS 
RETOURNE "Très bien." 
    SINON SI note >= 14 ALORS 
RETOURNE "Bien."
    SINON SI note >= 12 ALORS 
RETOURNE "Assez bien."
    SINON SI note >= 10 ALORS 
RETOURNE "Passable."
    SINON 
RETOURNE "Insuffisant." 


Exo 5 — facultatiffizzbuzz(n)
Retourne "Fizz" si divisible par 3, "Buzz" par 5, "FizzBuzz" si les deux, sinon le nombre en string.

VARIABLE
n: ENTIER 
m: STRING

DEBUT
    SI n % 3 == 0 && n % 5 == 0 ALORS 
RETOURNE "FizzBuzz"
    SINON SI n % 3 == 0 ALORS 
RETOURNE "Fizz"
    SINON SI n % 5 == 0 ALORS
RETOURNE "Buzz"
    SINON 
RETOURNE "n convertie en chaine de caractère"                
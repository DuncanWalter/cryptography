/*
Congruence & Residue Class Ring


=== := congruence

//    VV Not Multiplication
a === b(mod m) <=> m | a - b // basic clock arithmetic
b(mod m) = b + mZZ

// basic properties
a === a(mod m) // identity
a === b(mod m) <=> b === a(mod m) // symmetry
a === b(mod m) & b === c(mod m) => a === c(mod m) // transitive

// equivalence relation

// a residue class
a + mZZ = { b : b === a(mod m) }

given an m, there are abs(m) residue classes

addition:
(a+mZZ)+(b+mZZ) = a+b + mZZ

multiplication:
(a+mZZ)(b+mZZ) = ab + mZZ // falls trivially from distributive

multiplicative inverses to the identity element of 1 are observed

(11+12ZZ) is its own inverse, for example.

if gcd(m, a) == 1, a+mZZ has an inverse 

(m - 1) + mZZ is its own inverse?



// example decryption with key (inverse)
11 + x === 7
11 * 11 * x ===  7 * 11
x === 5


xgcd(a, b) = (1, (a + bZZ)^-1, Z);


73x === 8 + 101ZZ, x = 43 + 101ZZ



*/








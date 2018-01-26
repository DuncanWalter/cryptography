/*
AXIOM BLOCK

Let a, b = integers.

Let nZZ = { a: n|a }. // also thought of as ZZ.map(v => nv)

Let nZZ + mZZ = { a+b: a|n, b|m }. // 1D basis? Sort of?

We say n is a common divisor if n|a and n|b.

The greatest common divisor of two numbers and b is defined the usual way.

*/



// There exists an n such that aZZ + bZZ = nZZ.
/* PROOF

let s = smallest positive element of aZZ =bZZ

assume there is an x such that !s|x.

x = qn + r : r != 0
r = x - qn, x - qn is in aZZ+bZZ



*/


// 2ZZ + 3ZZ === ZZ
// 3ZZ + 7ZZ === ZZ
// 2ZZ + 8ZZ === 2ZZ
// aZZ + bZZ === gcd(a, b)ZZ


// Every common divisor of a and b divides gcd(a, b).


// find u, v in gcd(p, q) = pu + qv.




// Euclidean Algorithm (Remaindering Sequence)
const gcd = (a, b) => {
    const aa = Math.abs(a);
    const bb = Math.abs(b);
    switch(true){
        case aa == 0 || bb == 0: {
            return aa + bb;
        };
        case aa > bb: {
            return gcd(bb, aa % bb);
        };
        case bb > aa: {
            return gcd(aa, bb % aa);
        };
    }
}

// console.log(gcd(27, 9));
// console.log(gcd(86, 4));
// console.log(gcd(49, 14));
// console.log(gcd(101, 79));
// console.log(gcd(23, 11));
// console.log(gcd(4235, 8135));



// Extended Euclidean Algorithm :: ax + by = gcd(a, b)
const xgcd = (_a, _b) => {
    const a = Math.abs(_a);
    const b = Math.abs(_b);
    switch(true){
        case b > a: {
            const [g, x, y] = xgcd(b, a);
            return [g, y, x];
        };
        case a == 0 || b == 0: {
            return [a + b, 1, 0];
        };
        case a > b: {
            const r = a % b;
            const q = (a - r) / b;
            const [g, x, y] = xgcd(b, r);
            return [g, y, x-y*q];
        };
        case a == b: {
            return [a, 1, 0];
        };
    }
}

// console.log(xgcd(27, 9));
// console.log(xgcd(86, 4));
// console.log(xgcd(49, 14));
// console.log(xgcd(101, 79));
// console.log(xgcd(23, 11));
// console.log(xgcd(4235, 8135));
// console.log(xgcd(8135, 4235));


/*
To prove:

consider a = qb + r.
then show that:
gcd(a, b) = gcd(b, r) 
<== gcd(a, b)|gcd(b, r) & gcd(b, r)|gcd(a, b) // number theorists show equality this way
<== gcd(a, b)|b & gcd(a, b)|r                 // show gcd(a, b) is a common divisor
<== gcd(a, b)|r                               // b side works by def
<== true                                      // a - qb := a linear combo of multiple of gcd(a, b)



To show complexity:

a = qb + r
r <= a/2
<== 

*/
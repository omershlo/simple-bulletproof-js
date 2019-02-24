const BigInteger = require('big-integer');
const Consts = require('./consts');
const EC = require('elliptic').ec;

const ec = new EC('secp256k1');


function pickRandom(max = Consts.MAXIMUM_NUMBER,min=0) {
  return BigInteger.randBetween(min, max);
}
function turnToBig(number){
  return BigInteger(number)
}

function pickRandomInRange(min = 0, max = Consts.MAXIMUM_NUMBER) {
  return BigInteger.randBetween(min, max);
}

function generateProbablePrime(maxSize, certainty = 5) {
  let random;

  do {
    random = pickRandom(maxSize);
  } while (random.isProbablePrime(certainty)==false) ;

  return random;
}

//performs a mod b for bigInteger
// a must be bigInteger
function modulo(a,b) {
  while (a.lesser(BigInteger(0))){a=a.add(b);}
  const c = a.mod(b);
  const d = new BigInteger(c < 0 ? c.add(b) : c);
  return d
}

function moduloMul(A,B,m){
  return modulo(modulo(A,m).multiply(modulo(B,m)),m);
}
function moduloMulq(A,B){
  return modulo(modulo(A,Consts.q).multiply(modulo(B,Consts.q)),Consts.q);
}
function moduloAdd(A,B,m){
  return modulo(modulo(A,m).add(modulo(B,m)),m);
}
function moduloAddq(A,B){
  return modulo(modulo(A,Consts.q).add(modulo(B,Consts.q)),Consts.q);
}
function moduloSub(A,B,m){
  return modulo(modulo(A,m).subtract(modulo(B,m)),m);
}
function moduloSubq(A,B){
  return modulo(modulo(A,Consts.q).subtract(modulo(B,Consts.q)),Consts.q);
}
function subtractBigAndNegate(A,B){
  return A.subtract(B);

}
function moduloPow(base,exp, mod) {
  exp = new BigInteger(exp);
  mod = new BigInteger(mod);
  if (mod.isZero()) throw new Error("Cannot take modPow with modulus 0");
  var r = BigInteger.one,
      base;
      //base = this.mod(mod);
  while (exp.isPositive()) {
      if (base.isZero()) return BigInteger.zero;
      if (exp.isOdd()) r = modulo(r.multiply(base),mod);
      exp = exp.divide(2);
      base = modulo(base.square(),mod);
    }
  return r;
}


module.exports = {
  moduloMul,
  moduloMulq,
  moduloAdd,
  moduloAddq,
  moduloSub,
  moduloSubq,
  pickRandom,
  generateProbablePrime,
  modulo,
  moduloPow,
  ec,
  pickRandomInRange,
  turnToBig
};
const BigInteger = require('big-integer');
const BigNumber = require('bignumber.js');


// P(256)https://github.com/indutny/elliptic/blob/79e2f3769771cbd092c75c740ac45c73a59be688/lib/elliptic/curves.js
//p256:
//const q = new BigInteger("ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551", 16);

// https://en.bitcoin.it/wiki/Secp256k1

// Parameter N in secp256k1 
const q = new BigInteger("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141", 16);
//const n = new BigInteger("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F", 16);
const qOver3 = BigInteger(BigNumber(q.toString()).div(3).floor().toString(16), 16);
const MAXIMUM_NUMBER = new BigInteger("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", 16);
const qBitLengthMinusOne = 255;




// https://en.wikipedia.org/wiki/EdDSA
const q25519 = (BigInteger(2).pow(255)).subtract(BigInteger(19));
const p25519 = new BigInteger("1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed",16);
// security property for some of the zk proofs: 
const securityNum = 40;
module.exports = {
  q,
  q25519,
  p25519,
  qOver3,
  MAXIMUM_NUMBER,
  HEX: 16,
  securityNum,
  qBitLengthMinusOne,
};
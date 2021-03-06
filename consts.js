const BigInteger = require('big-integer');



//https://github.com/indutny/elliptic/blob/79e2f3769771cbd092c75c740ac45c73a59be688/lib/elliptic/curves.js
// https://en.bitcoin.it/wiki/Secp256k1
// Parameter N in secp256k1 

const q = new BigInteger("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141", 16);
const MAXIMUM_NUMBER = new BigInteger("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", 16);
const start=2;
var MAX_RANGE_END= 4294967296 //2^32
var upperBoundNumBits = 32;
module.exports = {
  q,
  MAXIMUM_NUMBER,
  HEX: 16,
  upperBoundNumBits,
  start,
  MAX_RANGE_END
};
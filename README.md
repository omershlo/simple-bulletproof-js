# simple-bulletproof-js
javascript code for one-round,single range-proof bulletproof for *secp256k1* elliptic curve.

Based on first version of https://eprint.iacr.org/2017/1066.

**This code is a proof of concept and should not be used in production.**

**To run**: 1) npm install. 2) node bulletproof_single.js

**NPM packages**: elliptic, big-integer.

To configure value and range: (a) change value inside controller() and (b) change bound in Consts.js.  

Verifier should return true if OK. 
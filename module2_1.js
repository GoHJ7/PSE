const crypto = require('crypto');

// Asymmetric encryption
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });

// Encrypt
const plaintext = 'This is a secret message.';
// TODO: Use the publicKey to encrypt the plaintext message. Remember that RSA encryption is public key encryption.
let enc_m = crypto.publicEncrypt(publicKey,Buffer.from(plaintext));
console.log(enc_m);
// Decrypt
// TODO: Use the privateKey to decrypt the encrypted message. The result should be the original plaintext.
let dec_m = crypto.privateDecrypt(privateKey,enc_m);
console.log(dec_m.toString("utf-8"));
// Create a digital signature
const sign = crypto.createSign('SHA256');
sign.update(plaintext);
sign.end();
// TODO: Use the privateKey to sign the plaintext message. This will generate a digital signature.
let dig_sig = sign.sign(privateKey);
console.log(dig_sig);
// Verify a digital signature
const verify = crypto.createVerify('SHA256');
verify.update(plaintext);
verify.end();
// TODO: Use the publicKey to verify the signature. It should return true if the signature is valid.
let ver = verify.verify(publicKey,dig_sig);
console.log(ver);
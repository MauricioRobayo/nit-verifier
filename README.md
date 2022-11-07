# NIT Verifier ☑️

[![npm version](https://badge.fury.io/js/nit-verifier.svg)](https://badge.fury.io/js/nit-verifier)
![10x faster](https://img.shields.io/badge/10x-faster-brightgreen)
![10x smaller](https://img.shields.io/badge/10x-smaller-brightgreen)

Blazing fast, ultra-light, minimal, dependency-free, tree-shakeable, battle-tested, types included, reliable, Colombian NIT verifier.

```
npm i nit-verifier
```

## Usage

```
getVerificationDigit("860.069.804")
// 2
```

Check the extensive [tests](./index.test.js) for more uses cases.

## Verification algorithm

It uses the undocumented DIAN's `module-11` algorithm to generate the verification digit for any given NIT.

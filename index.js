exports.getVerificationDigit = function (nit) {
  const constants = [3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71];
  const nitArray = Array.from(String(nit).replace(/\D/g, ""));
  const arrLen = nitArray.length;
  let total = 0;
  for (let i = 0; i < arrLen; i++) {
    total = total + Number(nitArray[i]) * constants[arrLen - i - 1];
  }
  const mod = total % 11;
  return 11 - mod;
};

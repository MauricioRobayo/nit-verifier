const { getVerificationDigit } = require(".");

const tests = [
  [900491889, 0],
  [900553170, 1],
  [900477347, 2],
  [890900266, 3],
  [900087414, 4],
  [900059238, 5],
  [890902070, 6],
  [806008394, 7],
  [890932389, 8],
  [900298372, 9],
  ["830095213", 0],
  ["899999068", 1],
  ["900156264", 2],
  ["900531210", 3],
  ["830053800", 4],
  ["800021308", 5],
  ["890100577", 6],
  ["900112515", 7],
  ["860002554", 8],
  ["890900608", 9],
  ["830.037.248", 0],
  ["890.904.996", 1],
  ["860.069.804", 2],
  ["890.107.487", 3],
  ["800.130.907", 4],
  ["900.818.921", 5],
  ["860.005.224", 6],
  ["800.153.993", 7],
  ["900.585.067", 8],
  ["900.268.747", 9],
  ["800-251-163", 0],
  ["890-900-943", 1],
  ["800-088-702", 2],
  ["860-025-792", 3],
  ["900-061-554", 4],
  ["901-097-473", 5],
  ["800-251-440", 6],
  ["860-066-942", 7],
  ["860-063-875", 8],
  ["860-005-223", 9],
];

for (const [nit, verificationDigit] of tests) {
  console.assert(
    getVerificationDigit(nit) === verificationDigit,
    "verification digit for %s should be %i",
    nit,
    verificationDigit
  );
}

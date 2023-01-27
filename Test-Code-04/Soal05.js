const angka1 = 15;
const angka2 = -90;
const angka3 = -21;
const angka4 = 85;

const pengubahHandal = (angka) => {
  const rubahTapiMasihString = angka.toString().split("").reverse().join("");
  console.log(parseInt(rubahTapiMasihString));
};

pengubahHandal(angka1);
pengubahHandal(angka2);
pengubahHandal(angka3);
pengubahHandal(angka4);

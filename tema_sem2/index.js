let ani=[1998, 2021, 2023, 1995, 1980];
const anulcurent=new Date().getFullYear();
const varste=ani.map(an => anulcurent - an);
const result =varste.filter(varsta => varsta >= 18);
console.log(result);

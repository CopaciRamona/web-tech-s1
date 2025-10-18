const numere=[4,6,8,9,11,13,14]
const numar=2
const result = numere
.filter(n => n%numar===0)
.reduce((prev,curent)=>{
    return prev+curent
},0);
console.log(result)
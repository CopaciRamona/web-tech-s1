function DeepClone(s){

    const copie={}
    if(s instanceof Object )
    {
        Object.keys(s).forEach((key)=> copie[key]=s[key])
    }
    return copie;

}

const laptop={
    producator : "Lenovo",
    model : "i5",
    an : "2019"
}
const c=DeepClone(laptop);
laptop.producator="Apple";
console.log(c);


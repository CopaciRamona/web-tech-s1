function increaseSalary(s,procent){
    if(!(s instanceof Array) || typeof procent !=='Number')
    {
        throw new Error('Valorile introduse nu sunt permise!');
    }
    else
    {
        s.forEach((elem) =>{
            elem+=elem*procent/100;
            console.log(`Valoarea noua este ${elem}`);
        })

    }
}

const salarii=[100,200,300];
const sal ={
    valoare : 100
}

try{
    increaseSalary(salarii,10);
    increaseSalary(sal,20);

}catch(err){
    console.warn(err);
}
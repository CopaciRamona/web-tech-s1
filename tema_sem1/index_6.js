
const array = (vector) => {

    const sir=vector.split('');
    let rezultat={};
    for(let litera of sir)
    {
        if(litera in rezultat)
        rezultat[litera]++;
    else
    {
        rezultat[litera]=1;
    }
}
    return rezultat;
}

console.log(array("acadele"));
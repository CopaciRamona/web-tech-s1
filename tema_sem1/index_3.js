let lista = (vector) => { 
    let rezultat = [];
    for(let i=0; i<vector.length; i++) {
            rezultat.push(Number(vector[i]));
    }
    return rezultat;
}
console.log(lista(process.argv.slice(2)));
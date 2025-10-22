function eGen() {
    const cache={};
    const exp = (base,e) =>{
        const num=base + '^' + e;
        if(num in cache)
        {
            console.log('found' + num);
            return cache[num];
        }
        else{
            console.log('calculated' + num);
            if(e===0)
                cache[num]=1;
            else
                cache[num]=base* exp(base,e-1);
            return cache[num];
        }
    }
    return exp;
}

const exp=eGen();
console.log(exp(2,5));
console.log(exp(2,3));
console.log(exp(3,3));
console.log(exp(3,1));
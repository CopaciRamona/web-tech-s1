
const text="javascript este minuntat";
const dictionary=['este']

const result = (text,dictionary) =>{

    let v=text.split(' ').map( cuv => {
        if(dictionary.includes(cuv)){
            let s=[ ]
            for(let i=1;i<cuv.length-1;i++)
                s+='*';
            cuv=cuv[0]+ s + cuv[cuv.length-1];
        }
        return cuv;
    }
).join(' ');
    return v
}

console.log(result(text,dictionary))
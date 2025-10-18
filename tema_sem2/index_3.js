
s=[1,2,3,4]

const reduce = (s,transformation) => {

    let result=0
    for(let i=0;i<s.length;i++){
        result=transformation(result,s[i]);
    }
    return result
}

console.log(reduce(s,(sum,element)=>sum+element))
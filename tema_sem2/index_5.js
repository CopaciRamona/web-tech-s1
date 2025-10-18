const pisica=[
    {
        culoare :"neagra",
        greutate : 6
    },
    {
        culoare :"alba",
        greutate : 5
    },
    {
        culoare :"gri",
        greutate : 10
    }
]

const sortare = (v,key) => {

    return v.sort((a,b)=>
    {
        if(a[key]<b[key])
        {
            return -1;
        }
    })

}
const result=sortare(pisica,"culoare");
console.log(result);
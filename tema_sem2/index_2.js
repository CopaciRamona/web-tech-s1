
const result = (s,format) =>
{
    let modified=s
    for(let i in format)
    {
        modified=modified.replace('{'+ i + '}',format[i])
    }
    return modified
}

console.log(result("un {substantiv} este {adjectiv}",{
    substantiv : "catel",
    adjectiv : "frumos"
}));

function add(n,m)
{
    let array=[];
    for(var i=0;i<n.length;i++)
    {
        array.push(n[i]);
        array.push(m[i]);
    }
    return array;
}
console.log(add([1,2,3],[5,8,9]).join(' '));
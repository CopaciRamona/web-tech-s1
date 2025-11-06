
let oddCollection = document.querySelectorAll("tbody tr:nth-child(odd)")
let first=document.querySelector('#first');
let last=document.querySelector('#last');

if (oddCollection && oddCollection.length > 0) {
    for (let item of oddCollection)
        item.bgColor = 'violet';
}

if(first){
    first.bgColor='blue';
}

if(last){
    last.bgColor='green';
}
const apiUrl = 'http://localhost:8000/api/'

async function get(url) {
    return (await axios.get(url)).data
}

async function post(url, body) {
    return (await axios.post(url, JSON.stringify(body), { headers: { 'Content-Type': 'application/json' } })).data
}

async function sendData() {
    let id = document.getElementById('input').value;
    let data=document.getElementById('data');

    if(!id){
        alert('Trebuie sa introduceti un ID');
        return;
    }

    data.innerHTML=`<p>Se cauta ID-ul ${id}....</p>`;
    try{
        const pers=await post(apiUrl + "postList", { id : id});
        data.innerHTML = `
            <p>Rezultat gasit: Persoana cu ID-ul ${pers.id} are numele ${pers.name} 
            si varsta ${pers.age}.
            </p>`;

    }catch(error){
        console.error('Eroare a cautare:',error);
        if(error.response && error.response.status===404){
            data.innerHTML=`<p>Nu s-a gasit niciun ID</p>`;
        }else{
            data.innerHTML=`<p>Alta eroare</p>`;
        }
    }


}


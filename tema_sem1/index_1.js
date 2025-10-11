function verificare(n,m) 
    {
        if(n.length != m.length) return -1;
        else
        {
            let nr=0;
            for(let i=0;i<n.length;i++)
            if(n[i]!=m[i]) nr++;     
            return nr;}
    }
console.log(verificare("mare","zare"));
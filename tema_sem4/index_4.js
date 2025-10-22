Number.prototype.times= function(n){
   for(let i=0;i<this;i++)
    n();
}
Number(3).times(()=>{
    console.log('Executie!');
});
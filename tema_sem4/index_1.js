class Stream{
    #value;
    constructor(value){
        this.#value=value;
    }

    get value(){
        return this.#value;
    }

    next(){
        if(this.#value%2===0)
            this.#value+=2;
        else
            this.#value+=1;
        return this.#value;
    }

}

const even= new Stream(1);
while(even.value<40)
{
    console.log(even.next());
}
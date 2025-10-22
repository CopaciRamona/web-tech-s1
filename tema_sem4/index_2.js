class Software{

    run(){
        console.log("Acest soft a fost creat!");
    }
}

class Plugin{

    constructor(description)
    {
        this.description=description;
    }
}

class Browser extends Software{

    constructor(){
        super();
    this.plugins=[];
    }

    addPlugins(p)
    {
        this.plugins.push(p);
    }

    install()
    {
        console.log("Browser care poate instala plugins!");
        this.plugins.forEach(p => console.log(`A fost instalat plugin : ${p.description}`));
    }

}

const b1=new Browser();
const p1=new Plugin("Plugin de traducere");
const p2=new Plugin("Plugin de blocare reclame");
b1.addPlugins(p1);
b1.addPlugins(p2);
b1.install();
b1.run();


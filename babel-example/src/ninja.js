class Ninja {
    constructor(name) {
        this.name = name;
    }

    announce() {
        alert(this.name);
    }
}
var ninja = new Ninja('Leonardo').announce();
 //outputs 25
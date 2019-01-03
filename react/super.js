class Rectangle {
    constructor(h, w) {
        this.height = h;
        this.width = w;
    }

    printarea() {
        console.log(this.height * this.width);
    }
}

var somulu = new Rectangle(5, 3);

somulu.printarea();


class Square extends Rectangle {
    constructor(s) {
        super(s, s);
    }
}

var krushn = new Square(5);

krushn.printarea();
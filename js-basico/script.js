//ORIENTAÇÃO A OBJETO
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read() {
        return `Estou lendo ${this.title}`
    }
}

let book = new Book("Algoritmos para viver", "Brian", 500);
let book2 = new Book("Um exu em NY", "Cidinha da Silva", 100);

console.log(book.read());
console.log(book2);


//HERANÇA
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read() {
        return `Estou lendo ${this.title}`
    }
}

class ITBook extends Book {
    constructor(title, author, pages, tech) {
        super(title, author, pages);
        this.tech = tech;
    }
}

let itBook = new ITBook("Algoritmos para viver", "Brian", 500, "Algoritmos");

console.log(itBook.read());
console.log(itBook);


//ENCAPSULAMENTO
class Person {
    constructor(name) {
        this._name = name;
    }

    get name() { //pega esse nome joga lá no console person.name
        return this._name;
    }

    set name(value) { //permite reatribuir um valor
        this._name = value;
    }
}

let person = new Person("Maria");
person.name = "João";
console.log(person.name);
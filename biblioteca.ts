//Imagina que estás desarrollando un sistema de gestión de una biblioteca que mantiene un registro de libros.
// Cada libro tiene un título, un autor y un estado (disponible o prestado). 
//Diseña una clase Book que encapsule esta información y proporcione métodos para gestionar el estado del libro. 
//Libro y autor se integran por el mecanismo de composición

class Author {
    constructor(public name: string) {}
}

class Book {
    private status: string = "Disponible";

    constructor(public title: string, public author: Author) {}

    borrow(): void {
        if (this.status === "Disponible") {
            this.status = "Prestado";
            console.log(`El libro '${this.title}' ha sido prestado.`);
        } else {
            console.log(`El libro '${this.title}' no está disponible para prestar.`);
        }
    }

    returnBook(): void {
        if (this.status === "Prestado") {
            this.status = "Disponible";
            console.log(`El libro '${this.title}' ha sido devuelto.`);
        } else {
            console.log(`El libro '${this.title}' no estaba prestado.`);
        }
    }

    getStatus(): string {
        return this.status;
    }
}

class Library {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
        console.log(`El libro '${book.title}' ha sido añadido a la biblioteca.`);
    }

    displayBooks(): void {
        console.log("Libros en la biblioteca:");
        for (const book of this.books) {
            console.log(`'${book.title}' por ${book.author.name} - Estado: ${book.getStatus()}`);
        }
    }
}

// Crear autores
const author1 = new Author("Autor 1");
const author2 = new Author("Autor 2");

// Crear libros
const book1 = new Book("Libro 1", author1);
const book2 = new Book("Libro 2", author2);
const book3 = new Book("Libro 3", author1);

// Crear biblioteca
const library = new Library();

// Agregar libros a la biblioteca
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Mostrar libros disponibles
library.displayBooks();

// Prestar un libro
book1.borrow();

// Intentar prestar un libro ya prestado
book1.borrow();

// Devolver un libro
book1.returnBook();

// Mostrar libros después de prestar y devolver
library.displayBooks();

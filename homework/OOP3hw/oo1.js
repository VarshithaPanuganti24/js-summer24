class Book{
    title;
    author;
    yearPublished;
    constructor(title,author,yearPublished){
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;

    }
    getSummary(){
        return console.log(this.title ,this.author,this.yearPublished) ;
        
    }
}
const book1 = new Book("Energy","Sham",2010);
book1.getSummary();
interface Book {
  title: string,
  author: string,
  year: number
}

const bookArr: Book[] = [
  { title: 'Под Игото', author: 'Иван Вазов', year: 1894 },
  { title: 'Бай Ганьо', author: 'Алеко Константинов', year: 1895 }, 
  { title: 'Железният светилник', author: 'Димитър Талев', year: 1952 }
];

function printBook(book: Book): void {
  console.log(`Книга: ${book.title} от ${book.author} издадена през: ${book.year}г.`);
}

function getNewestBook(books: Book[]): Book {
  return books.reduce((newest, current) => current.year >  newest.year ? current : newest);
} 

printBook(getNewestBook(bookArr));
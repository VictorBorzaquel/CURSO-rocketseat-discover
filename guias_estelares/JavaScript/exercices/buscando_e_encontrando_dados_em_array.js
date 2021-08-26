const books = {
  data: [
    {
      category: 'Riqueza',
      books: [
        {
          title: 'Os segredos da mente milionária',
          author: 'T. Harv Eker',
        },
        {
          title: 'O homem mais rico da Babilônia',
          author: 'George S. Clason',
        },
        {
          title: 'Pai rico, pai pobre',
          author: 'Robert T. Kiyosaki e Sharon L. Lechter',
        },
      ]
    },
    {
      category: 'Inteligência Emocional',
      books: [
        {
          title: 'Você é Indestrutível',
          author: 'Augusto Cury',
        },
        {
          title: 'Ansiedade - Como enfrentar o mal do século',
          author: 'Augusto Cury',
        },
        {
          title: 'Os 7 hábitos das pessoas altamente eficazes',
          author: 'Stephen R. Covey',
        },
      ]
    }
  ],
  numberOfCategory: () => "Quantidade de categorias: " + books.data.length,
  numberOfAuthor: () => {
    let authors = [];
    for (let category of books.data) {
      for (let book of category.books) {
        authors.push(book.author);
      }
    }
    
    const uniqueAuthor = [...new Set(authors)];
    const numberOfAuthor = uniqueAuthor.length;

    return "Quantidade de autores: " + numberOfAuthor;
  },
  booksOfAuthor: (author) => {
    let allBooks = [];
    for (let category of books.data) {
      for (let book of category.books) {
        if(author === book.author) {
          allBooks.push(book.title);
        }
      }
    }
    return {[author]: allBooks};
  }
}

console.log(books.numberOfCategory());
console.log(books.numberOfAuthor());
console.log(books.booksOfAuthor('Augusto Cury'));

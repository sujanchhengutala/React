import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'

const Books = {
  firstBook: {
    title: "Ghumne Mechmathi Andho Manche",
    author: "Bhupi Sherchan",
    image: "https://m.media-amazon.com/images/I/61iJPlzk4wL._AC_UY218_.jpg"
  },
  secondBook: {
    title: "China Harayeko Manchhe",
    author: "Haribansha Acharya ",
    image: "https://m.media-amazon.com/images/I/71C6wasTqYL._AC_UY218_.jpg"
  },
  thirdBook: {
    title: "Phoolko Aankhaama",
    author: "Ani Choying Drolma",
    image: "https://m.media-amazon.com/images/I/61-shXcuDAL._AC_UY218_.jpg"
  }
}

const BookList = () => {
  return (
    <section className="booklist">
      <Book image={Books.firstBook.image} title={Books.firstBook.title} author={Books.firstBook.author} />
      <Book image={Books.secondBook.image} title={Books.secondBook.title} author={Books.secondBook.author} />
      <Book image={Books.thirdBook.image} title={Books.thirdBook.title} author={Books.thirdBook.author} />
    </section>
  )
}
const Book = ({ image, title, author }) => {
  return (
    <article calssName="book">
      <img src={image} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}
ReactDOM.render(<BookList />, document.getElementById('root'));
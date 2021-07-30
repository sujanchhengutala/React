import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

const books = [
  {
    id :1,
    title: "Ghumne Mechmathi Andho Manche",
    author: "Bhupi Sherchan",
    img: "https://m.media-amazon.com/images/I/61iJPlzk4wL._AC_UY218_.jpg"
  },
 {
    id :2,
    title: "China Harayeko Manchhe",
    author: "Haribansha Acharya ",
    img: "https://m.media-amazon.com/images/I/71C6wasTqYL._AC_UY218_.jpg"
  }, 
  {
    id :3,
    title: "Phoolko Aankhaama",
    author: "Ani Choying Drolma",
    img: "https://m.media-amazon.com/images/I/61-shXcuDAL._AC_UY218_.jpg"
  }
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </section>
  )
}

const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert('I am clicked')
  }

  const exampleHandler = (author) => {
    console.log(author)
  }
  return (
    <article className='book' onMouseOver={() => console.log(title)}>
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}> {title} </h1>
      <h4> {author} </h4>
      <button type='button' onClick={clickHandler}>
        Click Me
      </button>

      <button  className = "but" type='button' onClick={() => exampleHandler(author)}>
        Author Name
      </button>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
import axios from "axios";
import React, { useState } from "react";
import Card from "./BookCard";



export default function Main() {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const [bookShelf, setBookShelf] = useState([]);

  function addToShelf(book) {
    console.log(book);
    const temporaryShelf = [...bookShelf];
    temporaryShelf.push(book);

    setBookShelf(temporaryShelf);
  }


  const searchBook = (event) => {
    if (event.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyCqOKrqzMnQR7vgAcnOFa4WcfUD9djIuX4"+"&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="pol">
      <div className="header">
        <div className="search">
          <input className="inputsearch"
            type="text"
            placeholder="Search your Book here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchBook}
          />
        </div>
        <img src="" alt="" />
      </div>
      
      <div className="shelf">

        {bookShelf.map((a) => (
            <div>
             <img className="card-img-top" src="" alt=""/>
          <div className="rrr">{a.volumeInfo.title}</div>
          
          </div>
        ))}
      </div>
      <section className="py-4 container">
        <div className="row justify-content-center">
          <div></div>
          <Card book={bookData} addToShelf={addToShelf} />
        </div>
      </section>
      </div>
    </>
  );
}
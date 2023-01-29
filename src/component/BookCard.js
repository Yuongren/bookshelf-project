import React from "react";

function Card({ book, addToShelf }) {
    return (
        <>
            {book.map((item, index) => {
                let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                // if(thumbnail!== undefined && amount !== undefined)
                // {
                return (
                    <div className="container">
                        <div className="book" key={index}>
                            <img className="book-img-top" src={thumbnail} alt="" />
                            <div className="book-body">
                                <h6 className="book-title">{item.volumeInfo.title}</h6>
                                <p className="book-text">By:{item.volumeInfo.authors}</p>
                                <p className="book-text">Description:{item.volumeInfo.description}</p>
                                <p className="book-text">{amount}</p>
                                <button className="btn btn-primary"
                                    onClick={() => addToShelf(item)}>ADD TO BOOKSHELF</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
export default Card;
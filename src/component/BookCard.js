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

                    // <div className="card"  key={index}>
                    //     <img className="card-img-top" src={thumbnail} alt="" />
                    //     <div className="card-body">
                    //         <h6 className="card-title">{item.volumeInfo.title}</h6>
                    //         <p className="card-text">By:{item.volumeInfo.authors}</p>
                    //         <p className="card-text">By:{item.volumeInfo.description}</p>

                    //         <p className="card-text">{amount}</p>
                    //         <button className="btn btn-primary"
                    //             onClick={() => addToShelf(item)}>ADD TO BOOKSHELF</button>
                    //     </div>
                    // </div>
                     <div className="A"  key={index}>
                        <img className="B" src={thumbnail} alt="" />
                        <div className="C">
                            <h3 className="D">{item.volumeInfo.title}</h3>
                            <p className="E">{item.volumeInfo.authors}</p>
                            <p className="F">Description:{item.volumeInfo.description}</p>

                            <p className="F">{amount}</p>
                            <button className="J"
                                onClick={() => addToShelf(item)}>ADD TO BOOKSHELF</button>
                        </div>
                    </div>
                );



            })}
        </>
    );
}
export default Card;
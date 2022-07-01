import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getBooks } from "../Redux/action";

const SingleBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.reducer.books);
  const [currentBook, setCurrentBook] = useState({});

  useEffect(() => {
    if (!data.length) {
      dispatch(getBooks());
    }
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      const temp = data.find((data) => data.id === +id);
      temp && setCurrentBook(temp);
    }
  }, [data, id]);



  return (
    <div style={{ textAlign: "center" }}>
      <img src={currentBook?.cover_photo} alt="" />
      <h2>
        <b>Name:</b> {currentBook?.book_name}
      </h2>
      <p>
        <b>Category:</b> {currentBook?.category}
      </p>
      <p>
        <b>Author:</b> {currentBook?.author}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "200px",
          margin: "auto",
        }}
      >
        <p>
          <b>Year:</b>
          {currentBook?.release_year}
        </p>
        <p>
          <b>Chapters:</b>
          {currentBook?.no_of_chapter}
        </p>
      </div>
      <Link to={`/books/${id}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default SingleBook;

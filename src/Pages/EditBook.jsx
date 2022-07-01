import React from "react";
import { useDispatch } from "react-redux";
import { addBooksAPI } from "../Redux/action";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(id);

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = e.target[0].value;
    const author = e.target[1].value;
    if (book && author) {
      dispatch(addBooksAPI({ book, author, id }));
      navigate("/");
    }
  };
  return (
    <div style={{ width: "400px", margin: "auto", textAlign: "center" }}>
      <h1>Edit Your Book Details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter Book Name</label> <br />
          <input type="text" />
        </div>
        <div>
          <label>Enter Author Name</label> <br />
          <input type="text" />
        </div>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EditBook;

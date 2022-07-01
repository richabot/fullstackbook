import React from "react";
import FilterSort from "../components/FilterSort";
import BookLIst from "../components/BookLIst";

const Books = () => {
  return (
    <div style={{ display: "flex", padding: "10px", gap: "10px" }}>
      <FilterSort />
      <BookLIst />
    </div>
  );
};

export default Books;

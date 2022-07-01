import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { decreasingBooks, getBooks, increasingBooks } from "../Redux/action";

const FilterSort = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();


  const urlCategory = searchParams.getAll("category");

  const [sortBy, setSortBy] = useState("");
  const [category, setCategory] = useState(urlCategory || []);

  //filtering
  const handleChange = (e) => {
    let newCategory = [...category];
    const option = e.target.value;

    //if option is already present then remove it else ppush it.
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  useEffect(() => {
    if (category) {
      let params = {};
      category && (params.category = category);
      sortBy && (params.sortBy = sortBy);
      setSearchParams(params);
      // dispatch(getBooks({ params: { category } }));
    }
  }, [category, searchParams, dispatch]);

  //sorting
  const handleSort = (e) => {
    let radioValue = e.target.value;
    setSortBy(radioValue);

    if (radioValue === "asc") {
      dispatch(increasingBooks());
    } else if (radioValue === "desc") {
      dispatch(decreasingBooks());
    }
  };


  useEffect(() => {
    if (sortBy) {
      const params = {
        category: searchParams.getAll("category"),
        sortBy,
      };

      setSearchParams(params);

      // dispatch(getBooks({ params: getBooksParams }));
    }
  }, [sortBy, searchParams]);

  return (
    <div
      style={{
        width: "250px",
        border: "1px solid",
        paddingLeft: "1%",
        height: "95vh",
        fontSize: "18px",
      }}
    >
      <h3>Filter</h3>
      <div>
        <div>
          <input
            type="checkbox"
            value="Novel"
            defaultChecked={category.includes("Novel")}
            onChange={handleChange}
          />
          <label>Novel</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Thriller"
            defaultChecked={category.includes("Thriller")}
            onChange={handleChange}
          />
          <label>Thriller</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Coventional"
            defaultChecked={category.includes("Coventional")}
            onChange={handleChange}
          />
          <label>Coventional</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Fiction"
            defaultChecked={category.includes("Fiction")}
            onChange={handleChange}
          />
          <label>Fiction</label>
        </div>
      </div>

      <h3>Sort</h3>
      <div onChange={handleSort}>
        <input
          type="radio"
          value="asc"
          name="soryBy"
          defaultChecked={sortBy === "asc"}
        />
        <label>By Inc Year</label> <br />
        <input
          type="radio"
          value="desc"
          name="soryBy"
          defaultChecked={sortBy === "desc"}
        />
        <label>By Dec Year</label>
      </div>
    </div>
  );
};

export default FilterSort;

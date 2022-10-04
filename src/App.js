import React from "react";
import { useState } from "react";
import "./styles.css";

const data = {
  javascript: [
    {
      name: "Eloquent Javascript",
      rating: "4/5"
    },
    {
      name: "You don't know JS",
      rating: "3/5"
    }
  ],
  fiction: [
    { name: "Shiva Triology", rating: "4/5" },
    { name: "Harry  Porter", rating: "4.5/5" }
  ],
  business: [
    { name: "Never Split the difference", rating: "4.5/5" },
    { name: "Loonshots", rating: "4/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function clickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>📚 goodbooks</h1>
      <p>Check my favourite books. Select a genre to get selected.</p>

      <div>
        {Object.keys(data).map((genre) => (
          <button
            onClick={() => clickHandler(genre)}
            style={{
              cursor: "pointer",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {data[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

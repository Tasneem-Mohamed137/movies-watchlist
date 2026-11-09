import "./App.css";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);


  function handleSubmit(e) {
  e.preventDefault();
  if (title.trim() === "") return;
  const newMovie = {id: Date.now(), title, review, rating };
  setMovies([...movies, newMovie]);
  setTitle("");
  setReview("");
  setRating(5);
  }

  function handleDelete(id) {
    setMovies(movies.filter((movie) => movie.id !== id));
  }

  return (
    <div className="app">
      <h1 className="title">Movies Watchlist</h1>

      <form className="movie-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Movie Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>

        <button type="submit" className="btn">Add Movie</button>
      </form>

      <ul className="movie-list">
        {movies.map((movie) => (
            <li className="movie-card" key={movie.id}>
              <div className="movie-header">
               <h3 className="movie-title">{movie.title}</h3>
              </div>
              <p className="stars">{"⭐".repeat(movie.rating)} stars</p>
              <p className="review">{movie.review}</p>
              <button className="remove
              -btn" onClick={() => handleDelete(movie.id)}>
                Delete
              </button>
            </li>  
        ))}
      </ul>
    </div>
  );
}

export default App;

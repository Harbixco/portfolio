import { useState } from "react";
import axios from "axios";

export default function FillForm() {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/api/workouts", { title, load, reps })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
        name="title"
      />

      <label>Load (in kg):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        name="load"
      />

      <label>Number of Reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        name="reps"
      />

      <button type="submit">Add Workout</button>
    </form>
  );
}

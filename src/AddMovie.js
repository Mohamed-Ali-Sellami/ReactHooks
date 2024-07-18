import React, { useState } from "react";
import "./AddMovie.css";

const AddMovie = ({ fnct }) => {
  const [show, setshow] = useState(false);
  const [newmovie, setnewmovie] = useState({
    name: "",
    description: "",
    image: "",
    rate: "",
  });

  return (
    <div>
      <button onClick={() => setshow(true)}> Add Movie </button>
      {show ? (
        <div className="box-form">
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setnewmovie({ ...newmovie, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="description"
            onChange={(e) =>
              setnewmovie({ ...newmovie, description: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="image"
            onChange={(e) =>
              setnewmovie({ ...newmovie, image: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="rate"
            onChange={(e) => setnewmovie({ ...newmovie, rate: e.target.value })}
          />

          <div className="box-btn-form">
            <button onClick={() => fnct(newmovie)}>submit</button>
            <button onClick={() => setshow(false)}>cancel</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AddMovie;

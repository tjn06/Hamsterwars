import React, { useState, useEffect } from "react";
import "../styles/addHamster.scoped.css";
import { Link } from "react-router-dom";
function Add() {
  const [userData, setUserdata] = useState({});
  const submit = e => {
    e.preventDefault();
    console.log(userData);
    fetch("https://hamsterwarz-api.herokuapp.com/addhamster", {
      method: "POST",
      mode: "cors",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: userData.name,
        age: userData.age,
        favFood: userData.favFood,
        loves: userData.loves,
        imgName: userData.imgName
      })
    })
      .then(function (response) {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " +
            response.status
          );
          return;
        }
        response.json().then(function (data) {
          console.log(data);
        });
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  };
  return (
    <div className="container">
      <h1 className="add-hamster">ADD HAMSTER</h1>
      <form className="form" onSubmit={submit}>
        <div className="form-block">
          <label htmlFor="fname">First name</label>
          <input
            type="text"
            name="userData[name]"
            value={userData.name}
            onChange={e =>
              setUserdata({ ...userData, name: e.target.value })
            }
            required
            minLength="3"
            maxLength="15"
            pattern="^[a-zA-Z0-9]+$"
          // title="m"
          />
        </div>
        <div className="form-block">
          <label htmlFor="lname">Favorite food</label>
          <input
            type="text"
            name="userData[favFood]"
            value={userData.favFood}
            onChange={e =>
              setUserdata({
                ...userData,
                favFood: e.target.value
              })
            }
            required
            minLength="3"
            maxLength="15"
            pattern="^[a-zA-Z]+$"
            title="Skriv med bokstäver"
          />
        </div>
        <div className="form-block">
          <label htmlFor="lname">Age</label>
          <input
            type="number"
            name="userData[age]"
            value={userData.age}
            onChange={e =>
              setUserdata({ ...userData, age: e.target.value })
            }
            required
            min="1"
            max="10"
            step="1"
            pattern="\d+"
          // title="Skriv med siffror"
          />
        </div>
        <div className="form-block">
          <label htmlFor="lname">Loves</label>
          <input
            type="text"
            name="userData[loves]"
            value={userData.loves}
            onChange={e =>
              setUserdata({ ...userData, loves: e.target.value })
            }
            required
            minLength="3"
            maxLength="15"
            pattern="^[a-zA-Z0-9]+$"
          />
        </div>
        <div className="form-block">
          <label htmlFor="lname">Image</label>
          <input
            type="text"
            name="userData[imgName]"
            value={userData.imgName}
            onChange={e =>
              setUserdata({
                ...userData,
                imgName: e.target.value
              })
            }
            required
            title="https://website.com/image.jpg"
            pattern="https?://(www.)?[-a-zA-Z0-9@:%.+~#=]{2,256}.[a-z]{2,4}\b([-a-zA-Z0-9@:%+.~#?&//=]*)(.jpg)"
          />
        </div>
        <input
          type="submit"
          className="add-hamster-button"
          name="ADD HAMSTER"
          value="ADD HAMSTER"
        />
      </form>
      <Link to="/battlemode" className="back-to-battlemode">
        <button className="back-to-battlemode">
          &lt; GO TO BATTLEMODE &gt;
        </button>
      </Link>
    </div>
  );
}
export default Add;
import React, { useState, useEffect } from "react";
import axios from "../../util/axiosInstance";
import { useParams } from "react-router-dom";
import "./userEdit.scss";
import HeroImage from "../../components/heroImage/HeroImage";

function EditUser() {
  const { id } = useParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetname, setStreetname] = useState("");
  const [hausnumber, setHausnumber] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [land, setLand] = useState("");

  const handelUpdates = async (e) => {
    e.preventDefault();

    const response = await axios.put(`/user/userprofile/${id}/edituser`, {
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      address: {
        streetname: streetname,
        hausnumber: hausnumber,
        zipcode: zipcode,
        city: city,
        land: land,
      },
    });
    console.log(response.data.user);
  };

  return (
    <div>
      <div className="heroImage">
        <HeroImage />
      </div>

      <div className="form_container">
        <form onSubmit={handelUpdates}>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="phone">
            <label htmlFor="phone">Phone Number</label>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              id="phone"
              name="phone"
              required
            />
          </div>

          <div className="address">
            <label htmlFor="address">Address</label>
            <input
            className="street"
              onChange={(e) => setStreetname(e.target.value)}
              type="text"
              placeholder="street"
              name="street"
              required
            />
            <input
            className="house"
              onChange={(e) => setHausnumber(e.target.value)}
              type="text"
              placeholder="hausnumber"
              name="hausnumber"
              required
            />
            <input
            className="code"
              onChange={(e) => setZipcode(e.target.value)}
              type="text"
              placeholder="zip code"
              name="zip"
              required
            />
            <input
            className="city"
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="city"
              name="city"
              required
            />
            <input
            className="land"
              onChange={(e) => setLand(e.target.value)}
              type="text"
              placeholder="land"
              name="land"
              required
            />
          </div>

          <div className="password">
            <label htmlFor="password">
              put your password to confirm changes
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              required
            />
          </div>

          <div className="button">
            <button type="submit">Update</button>
          </div>
        </form>
      </div>

      {console.log(streetname)}
    </div>
  );
}

export default EditUser;

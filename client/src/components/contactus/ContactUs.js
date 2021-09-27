import React, { useState } from "react";
import "./contactUs.scss";


import "react-quill/dist/quill.snow.css"; // ES6

import axios from "axios";

import HeroImage from "../../components/heroImage/HeroImage";
// import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";


const styleIcon = {background:'#004a99', fontSize:'60px', borderRadius:'100%', color: 'white'};


function ContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);

  const handleQuillChange = (value) => {
    setMessage(value);
  };

  const handleRequest = async (e) => {
    if (email && company && name && subject !== "") {
      if (message !== "") {
        e.preventDefault();
        setLoading(true);
        console.log({ email, message, name, subject, company });

        const body = {
          email,
          message,
          subject,
          name,
          company,
        };

        await axios
          .post("http://localhost:3030/mail", body, {
            headers: {
              "Content-type": "application/json",
            },
          })
          .then((res) => {
            alert("Email Sent Successfully");
            setLoading(false);
            console.log(res);
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      } else {
        alert("Compose Email");
      }
    } else {
      alert("Please fill all required filled");
    }
  };

  return (
    <div>
      <div className="heroImage">
        <HeroImage />
      </div>

      <div className="container_contact">
        <h2> contact Us </h2>
        <p> contact us for any question </p>

        <div className="two_block">

          <div className="info_contact">
         

            <div className="phone">
            </div>
            <div className="email">
            </div>

            <div className="location">
            </div>

            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style={{border:'0', width: '100%', height: '340px'}} allowfullscreen></iframe>
            </div>'

            


          </div>

          <div className="form_contact">

            <form onSubmit={handleRequest} method="post">
              
              <div className="form">
                <div className="form__wrapper">
                  <div className="form__title">
                    <h4>{loading ? "Sending..." : "Send Email"}</h4>
                    {loading}
                  </div>
                  <div className="form__container">
                    <div className="form__containerItems">
                      <div className="form__containerItem">
                        <div className="form__containerItemName">
                          <label>Name</label>
                         
                        </div>
                        <div className="form__containerItemField">
                          <input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required={true}
                            type="text"
                            placeholder="Enter Your Name"
                          />
                        </div>
                      </div>
                      <div className="form__containerItem">
                        <div className="form__containerItemName">
                          <label>Email</label>
                       
                        </div>
                        <div className="form__containerItemField">
                          <input
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required={true}
                            type="text"
                            placeholder="Enter Your valid Email"
                          />
                        </div>
                      </div>
                      <div className="form__containerItem">
                        <div className="form__containerItemName">
                          <label>Company</label>
                         
                        </div>
                        <div className="form__containerItemField">
                          <input
                            id="company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            type="text"
                            placeholder="Enter Your Company Name"
                          />
                        </div>
                      </div>
                      <div className="form__containerItem">
                        <div className="form__containerItemName">
                          <label>Subject</label>
                         
                        </div>
                        <div className="form__containerItemField">
                          <input
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                            type="text"
                            placeholder="Add Subject"
                          />
                        </div>
                      </div>
                      <div className="form__containerItem">
                        <div className="form__containerItemName">
                          <label>Compose Mail</label>
                          <button
                            disabled={loading}
                            onClick={handleRequest}
                            type="submit"
                            className="btn btn-success"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                      <div className="container__composeMail">
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

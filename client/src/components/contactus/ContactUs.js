import React, {useState} from "react";
import "./contactUs.scss";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import BusinessIcon from "@material-ui/icons/Business";
import SubjectIcon from "@material-ui/icons/Subject";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // ES6

import axios from "axios";

import HeroImage from "../../components/heroImage/HeroImage";

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
          <h3> Contact Information</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>

          <p>☎️ 686868686868</p>
          <p>📧 email@email.com</p>
          </div>

          <div className="form_contact">
             
          <form onSubmit={handleRequest} method="post">
      <div className="form">
        <div className="form__wrapper">
          <div className="form__title">
            <h4>{loading ? "Sending..." : "Send Email"}</h4>
            {loading }
          </div>
          <div className="form__container">
            <div className="form__containerItems">
              <div className="form__containerItem">
                <div className="form__containerItemName">
                  <label>Name</label>
                  <PersonIcon />
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
                  <EmailIcon />
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
                  <BusinessIcon />
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
                  <SubjectIcon />
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
              <div className = "container__composeMail">
            <ReactQuill
              id = "message"
              value = {message}
              onChange = {handleQuillChange}
              className = "quill" 
              placeholder = "Enter Content from here..."
            />
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

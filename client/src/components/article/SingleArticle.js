import React, { useState, useEffect, useContext } from "react";
import axios from "../../util/axiosInstance";
import { useParams, useHistory } from "react-router-dom";
import "./SingleArticleStyle.scss";
import HeroImage from "../heroImage/HeroImage";
import { ContextAPI } from "../../store/context";
import { Draggable, Droppable } from "react-drag-and-drop";

// 2 september

function SingleArticle() {
  const history = useHistory();
  const { userId } = useContext(ContextAPI);
  const { category, id } = useParams();

  const [selectedArticle, setSelectedArticle] = useState([]);
  const { articlename, description, status, note, created } = selectedArticle;

  const [refresh, setRefresh] = useState(false);

  const [user, setUser] = useState("");
  const [address, setAddress] = useState({});

  // sending message state
  const [message, setMessage] = useState("");
  const [sendMessage, setSendMessage] = useState(false);

  // make offer
  const [makeoffer, setMakeoffer] = useState(false);
  const [myArticle, setMyArticle] = useState([]);
  const [drop, setDrop] = useState([]);
  const [walet, setWalet] = useState([]);

  const [remove, setRemove] = useState(false);

  // to get one article
  const singleArticle = async (category, id) => {
    try {
      const response = await axios.get(`/article/category/${category}/${id}`);
      setSelectedArticle(response.data.article);
      setUser(response.data.article.user_id);
      setAddress(response.data.address);
    } catch (error) {
      console.log(error.message);
    }
  };

  // set the article to favorite list
  const makeFavorite = async (id) => {
    try {
      await axios.put(`/user/addToFavorite/${id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  // to remove the article from my Articles list
  const removeArticle = async (category, id) => {
    try {
      await axios.delete(`/article/category/${category}/${id}`);
      history.push(`/category/${category}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  const removedArticle = () => {
    setRemove(true);
    removeArticle(category, id);
  };

  // sending message
  let owner = user._id;
  const handleSendingMessage = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/message/sendmessage/${id}/${owner}`, {
        message: message,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  // make offer to user
  const getMyArticle = async () => {
    try {
      const response = await axios.get(`/user/myarticle/user/${userId}`);
      setMyArticle(response.data.article);
      setWalet(response.data.article);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDrop = (data) => {
    const droppedArticle = myArticle.find((item) => item._id === data.article);
    setDrop([...drop, droppedArticle]);
    const indexDroppedArticle = myArticle.indexOf(droppedArticle);
    walet.splice(indexDroppedArticle, 1);
  };

  useEffect(() => {
    singleArticle(category, id);
    getMyArticle();

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [id, remove]);

  return (
    <div className="single_article">
      <div className="hero_image">
        <HeroImage />
      </div>
      <div className="big_container">
        <div className="container_add_fav">
          <div className="image_offer">
            <div className="image">
              <img
                src={`${process.env.REACT_APP_SERVER_URL}/${process.env.REACT_APP_IMGA}/${selectedArticle.articleimage}`} alt="" />
            </div>

            <div className="description">
              <h2>Description</h2>
              <p>{description}</p>
            </div>
          </div>

          <div className="details">
            <div className="details_card">
              <div className="title">
                <h2>{articlename}</h2>
                <p>Status: {status}</p>
                <p>Note : {note}</p>
                <span className="create_date">
                  {new Date(created).toLocaleDateString()}
                </span>


                <h2>{user.username}</h2>
                <p className="address">
                  <span>{address.zipcode},</span>
                  <span className="user_zip">{address.city}</span>
                </p>

              </div>
            </div>

            <div className="offer">
              {userId !== null && userId !== user._id ? (
                <div className="user_button">
                  <button onClick={() => setSendMessage(!sendMessage)}>
                    Send Message
                  </button>
                  <button
                    onClick={() =>
                      setSendMessage(false) & setMakeoffer(!makeoffer)
                    }
                  >
                    Make offer
                  </button>
                  <button onClick={() => makeFavorite(id)}>
                    Add to Favorites
                  </button>
                  </div>
                  ) : ""}
                  {userId === user._id && (
                    <button className="remove_item" onClick={() => removedArticle()}>Delete Item</button>
                  )}
            </div>
          </div>
        </div>

        <div className="send_message_container">
          {sendMessage ? (
            <form>
              <div className="user">
                <label htmlFor="message">Message</label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                >
                  send message
                </textarea>
              </div>
              <button
                type="button"
                onClick={(e) => handleSendingMessage(e)}>
                Send message
              </button>

            </form>
          ) : makeoffer ? (
            <div className="offer_container">
              <div className="Smoothie_container" >
                <div className="first_smothie">
                  <ul >
                    {walet.map((item) => (
                      <Draggable
                        key={item._id}
                        type="article"
                        data={item._id}
                        className="my_item"
                      >
                        <li><img
                          src={`${process.env.REACT_APP_SERVER_URL}/${process.env.REACT_APP_IMGA}/${item.articleimage}`} alt="" /></li>
                      </Draggable>
                    ))}
                  </ul>
                </div>
                <div className="second_smothie">
                  <Droppable types={["article"]} onDrop={handleDrop}>
                    <ul
                      className="SmoothieTwo">
                      {drop.map((item) => (
                        <li><img
                        src={`${process.env.REACT_APP_SERVER_URL}/${process.env.REACT_APP_IMGA}/${item.articleimage}`} alt="" /></li>
                      ))}
                    </ul>
                  </Droppable>
                </div>
              </div>

              <button onClick={() => window.location.reload() & window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
              })} type="button">send the offer</button>
            </div>
          ) : ("")}
        </div>
      </div>
    </div>
  );
}

export default SingleArticle;

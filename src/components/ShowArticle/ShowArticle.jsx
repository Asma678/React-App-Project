import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ContextData } from "../Context/ContextData"
import { ContextTheme } from "../Context/ContextTheme"
import RelatedArticle from "./RelatedArticle"
import AuthorImage from "../../gallery/author.png"
import Clap from "../../gallery/clap.jpg"
import "./ShowArticle.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faYoutube,
  faFacebook,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

export default function ShowArticle() {
  const { id } = useParams()
  const [DataContext, setDataContext] = useContext(ContextData)
  const [darkMode] = useContext(ContextTheme)
  const [counter, setCounter] = useState(1)

  useEffect(() => {
    DataContext.forEach((item) => {
      if (item.id === +id) {
        setCounter(item.clap)
      }
    })
  }, [DataContext, id])

  const upvoteHandler = () => {
    let newValue = counter + 1
    setCounter(() => newValue)
    setDataContext((prevState) =>
      prevState.map((article) =>
        article.id === +id
          ? {
              ...article,
              clap: newValue,
            }
          : article
      )
    )
  }

  return (
    <div>
      <div className="containerArticle">
        {DataContext.map((item) => {
          return item.id === +id ? (
            <div className="Article" key={Math.floor(Math.random() * 1000)}>
              <h2 className="articleTitle">{item.title}</h2>

              <div className="authorDetailsContainer">
                <div className="authorDetails">
                  <img src={AuthorImage} alt="author" className="authorImage" />
                  <div>
                    <p className="authorName">{item.author}</p>
                    <div>
                      <small>{item.date}</small> .{" "}
                      <small>{item.readTime}</small>
                    </div>
                  </div>
                </div>
            <div>
         <span id="social" > <a href="https://www.youtube.com"
          className="youtube">
         <FontAwesomeIcon icon={faYoutube} size="2x" />
         </a>
         <a href="https://www.facebook.com"
         className="facebook">
         <FontAwesomeIcon icon={faFacebook} size="2x" />
         </a>
         <a href="https://www.twitter.com" className="twitter">
         <FontAwesomeIcon icon={faTwitter} size="2x" />
         </a>
         <a href="https://www.whatsapp.com" className='whatsapp'>
         <FontAwesomeIcon icon={faWhatsapp} size="2x" />
         </a>
         <a href="https://www.instagram.com"
         className="instagram">
         <FontAwesomeIcon icon={faInstagram} size="2x" />
         </a></span>
         </div>
              </div>
              <img src={item.src} alt={item.alt} className="articleImage" />
              <br />
              <br />
              <p>{item.details}</p>

              <div className="articleText">{item.description}</div>
              <br />
              <div className={` articleTags ${darkMode ? "Dark2" : "Light"}`}>
                {item.tags}
              </div>
              <div className="clapContainer">
                <button
                  onClick={upvoteHandler}
                  className={`${darkMode ? `Dark` : "Light2"}`}
                >
                  <img src={Clap} alt="clap" className="clap" />
                </button>
                <p>{counter} claps</p>
              </div>
              <hr />
              <div className="authorDetails">
                <img src={AuthorImage} alt="author" className="authorImage" />
                <div>
                  <p className="writtenBy">WRITTEN BY</p>
                  <p className="authorName">{item.author}</p>
                  <div>
                    <small>{item.date}</small> . <small>{item.readTime}</small>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          ) : null
        })}
      </div>
        <h3>Some More From The Siren</h3>
        <hr />
        <RelatedArticle />
      </div>
  )
}
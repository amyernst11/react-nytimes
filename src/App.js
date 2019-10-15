import React from 'react';
import './App.css';

let article = [
  {
    subtitle: "THE SHIFT",
    date: "Jan. 30, 2018",
    header:"Kodak's Dubious BlockChain Gamble",
    abstract: "What's a 130-year-old photo photo company dabbling in cryptocurrency? Either revolutionizing digital rights management or trying to make a quick buck.",
    byline:"By KEVIN ROOSE",
    image:"https://www.thehindubusinessline.com/migration_catalog/article22447825.ece/ALTERNATES/LANDSCAPE_1200/bl16%20it%20kodakcoin",
    alt:"kodak",
  },
  {
    date: "Jan. 30, 2018",
    header: "Taiwan Retaliates Against Chinese Airlines, Hampering Lunar New Year Travel",
    abstract: "Taiwain, pushing back over encroachment on Taiwan Strait airspace, may leave thousands without flights home for the holiday.",
    byline: "By CHRIS HORTON",
    image: "https://steemitimages.com/0x0/https://elevenews.com/wp-content/uploads/2018/03/iwo-1.jpg",
    alt: "taiwan airlines",
  },
  {
    date: "Jan. 29, 2018",
    header: "New Jersey Embraces an Idea it Once Rejected: Make Utilities Pay to Emit Carbons",
    abstract: "Democractic governors nationwide are taking steps to tax or price emissions within their own borders, even as Trump dismantles federal climate policy.",
    byline: "By Brad Plumer",
    image: "https://cdn.hswstatic.com/gif/carbon-capture-2.jpg",
    alt: "emit carbons",
  }
  ]

  function App() {
    return (
      <div className= "App">
        <Post subtitle={article[0].subtitle}  date = {article[0].date} header={article[0].header} abstract={article[0].abstract} 
              byline={article[0].byline} image = {article[0].image} alt = {article[0].alt}/>
        <hr></hr>
        <Post date = {article[1].date} header={article[1].header} abstract={article[1].abstract} 
              byline={article[1].byline} image = {article[1].image} alt = {article[1].alt}/>
        <hr></hr>
        <Post date = {article[2].date} header={article[2].header} abstract={article[2].abstract} 
              byline={article[2].byline} image = {article[2].image} alt = {article[2].alt}/>
      </div>
    );
  }
  
  
  function Post(props) {
    return (
      <div className="articleCard">
          <div className="article-date">
              <p> {props.date} </p>
          </div>
          <div className="article-content">  
              <p>{props.subtitle}</p>
              <h1> {props.header} </h1> 
              <h3> {props.abstract} </h3>
              <h5> {props.byline} </h5>
          </div>
          <div className="article-image">
              <img src={props.image} alt={props.alt}></img>
          </div>
      </div> 
  
    );
  }
  
  
  export default App;
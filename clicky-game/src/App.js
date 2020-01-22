import React, { Component, Fragment } from 'react';
import './App.css';
// import logo from './logo.svg';
import Cards from './components/cards';
import images from './images'
import HeaderDisp from './components/header/header'
import ScoreDisp from './components/score/score';
var shuffle = require('shuffle-array');


class App extends Component {
  // Setting this.state.friends to the friends json array
state = {
  score: 0,
  images: images,
  length: 0,
  clicked: []
};

displayImage = arg => {
  // Filter this.state.friends for friends with an id not equal to the id being removed
  const images = this.state.images
  // Set this.state.friends equal to the new friends array
  this.setState({ images });
};

handleOnClick = event => {

  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
 
};

win = () => {
  let score = this.state.score
  let clicked = this.state.clicked
  console.log('length: ', clicked.length)
  if (clicked.length === 12) {
    alert("You Win!")
    this.setState({
      score: 0,
      clicked: []
    })
  }
}

clicked =(pictureId) => {
  let clicked = this.state.clicked
  let images = this.state.images

  console.log('picture id: ', pictureId)
  

  console.log('clicked: ', this.state.clicked)
  
  if (clicked.includes(pictureId)) {
    alert("You Lose!")
    this.setState({
      score: 0,
      clicked: []
    })
    shuffle(images)
  } else {
    let scoreUpdate = this.state.score
    scoreUpdate = scoreUpdate + 1
    this.setState({
      score: scoreUpdate
    })
    clicked.push(pictureId)
    shuffle(images)
    this.win()
  }
}


render() {
  return (
    <div>
      <ScoreDisp 
    score={this.state.score}/>
    <div>
    <HeaderDisp />
    </div>
    {this.state.images.map(image => {
      return(
        <Cards
          id={image.id}
          key={image.id}
          url={image.img}
          clicked={this.clicked}
        />
      )
    })}
         
    </div>
  );
}
}


export default App;

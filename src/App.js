import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Peter Parker',
        bio: 'Friendly Neighborhood Spider-Man',
        imgSrc: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/03/spider-man-with-spidey-sense.jpg?q=50&fit=contain&w=943&h=&dpr=1.5',
        profession: 'Superhero',
      },
      shows: false,
      mountedTime: null,
      timeElapsed: 0
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.setState({ mountedTime: new Date() });

    this.interval = setInterval(() => {
      if (this.state.mountedTime) {
        const timeElapsed = Math.floor((new Date() - this.state.mountedTime) / 1000);
        this.setState({ timeElapsed });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow() {
    this.setState(prevState => ({ shows: !prevState.shows }));
  }

  render() {
    const { person, shows, timeElapsed } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}
        style={{ backgroundColor: 'blue', color: 'white' }}
        >
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div className="profile">
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" />
            <p>{person.profession}</p>
          </div>
        )}
        <p>Time since component mounted: {timeElapsed} seconds</p>
      </div>
    );
  }
}

export default App;
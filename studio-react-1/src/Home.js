import React from 'react';

const Home = () => {
  return (
    <div id="home-div">
      <div id="text-div">
        <h1>Hi there!</h1>
        <p>
          My name is Phillip, and I am a student at Penn.
          I am passionate about computer science. More about me <a href="/about">here</a>
        </p>
        <p>I enjoy playing drums and ultimate frisbee.</p>
      </div>
      <div>
        <img className="home-image" src="/assets/cool.png" alt="Cool" />
        <img className="home-image" src="/assets/gradient.png" alt="Gradient" />  
      </div>
    </div>
  );
};

export default Home;
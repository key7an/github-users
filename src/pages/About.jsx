import React from 'react';

const About = () => {
  return (
    <div>
      <h1 className=" text-6xl mb-16">Github Finder</h1>
      <p className="mb-8 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. This
        project is part of the
        <a href="https://github.com/keyvanone">
          {' '}
          @keyvanone road to Redemption
        </a>{' '}
        passed by
        <strong>
          <a href="https://traversymedia.com"> Keyvan Razavi</a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.2.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout By:
        <a className="text-white" href="https://twitter.com/hassibmoddasser">
          Hassib Moddasser
        </a>
      </p>
    </div>
  );
};

export default About;

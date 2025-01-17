import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`Semih ve Semih`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 310 }}>
          {' '}
          <a href="semihvesemih social media accounts">Semih BABACAN</a> ve{' '}
          <a href="semihvesemih social media accounts">Semih AYDIN</a>{' '}
          tarafından yazıldı. <br></br>
          Bizim&nbsp;yadığımız ve paylaştığımız yer.
        </p>
      </div>
    );
  }
}

export default Bio;

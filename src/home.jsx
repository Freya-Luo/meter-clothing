import React from 'react';

import './home.scss';

const Home = () => (
  <div className='homepage'>
    <h1>See what meter brings to you!</h1>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>HATS</div>
          <span className='subtitle'>SEE MORE</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>JACKETS</div>
          <span className='subtitle'>SEE MORE</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>SHOES</div>
          <span className='subtitle'>SEE MORE</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>WOMENS</div>
          <span className='subtitle'>SEE MORE</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>MENS</div>
          <span className='subtitle'>SEE MORE</span>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
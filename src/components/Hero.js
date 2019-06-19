import React, { Component } from 'react';
import './Hero.css';
import Button from './Button';
import sunandpuddleslogo from '../img/sunandpuddleslogo.png';
import star from '../img/star.png';
import Modal from './Modal';

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <section className='heroSection'>
        <div className='heroImage'></div>
        <div className='heroContent'>
          <h1 className='heroContentTitle'>
            Who is reading your emails? <span className='magicalLine'>Email Tracker</span><br />is the <span className='magicalLine'>#1 rated app</span> for Google Chrome.
          </h1>
          <p className='heroContentCopy'>
            Know who is opening and reading your emails with Email Tracker. Simply install Email Tracker and be alerted to <i>anyone</i> who opens or reads your emails.
          </p>
          {/* <Button buttonLabel='Download Today' buttonStyle='hero' /> */}
          <button className='hero button' onClick={this.toggleModal}>Download Today</button>
          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}>Email Tracker</Modal>
          <div className='starRating'>
            <img src={star} alt='star' />
            <img src={star} alt='star' />
            <img src={star} alt='star' />
            <img src={star} alt='star' />
            <img src={star} alt='star' />
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
import React, { Component } from 'react';
import './Cards.css';
import Card from './Card';
import iconTelephone from '../img/icon_telephone.png';
import iconAlert from '../img/icon_alert.png';
import iconEmail from '../img/icon_email.png';
import iconUser from '../img/icon_user.png';

class Cards extends Component {
  render() {
    return (
      <section className='cardsSection'>
        <h1 className='headingOne'>A Redefined Palette Of Innovation</h1>
        <div className='cards'>
          <div className='cardWrapper'>
            <Card
              cardIcon={iconEmail}
              cardTitle='Real-Time Updates'
              cardText='Get alerted the moment someone opens your email. Email Tracker is the #1 rated app on the Chrome store. Get real-time updates with Email Tracker.'
            />
          </div>
          <div className='cardWrapper'>
            <Card
              cardIcon={iconAlert}
              cardTitle='Instant Phone Alerts'
              cardText='Email Tracker sends results directly to your smartphone via its 5-star rated companion app. Available on Android, iOS, Windows, and Blackberry devices.'
            />
          </div>
          <div className='cardWrapper'>
            <Card
              cardIcon={iconUser}
              cardTitle='Constant Contact'
              cardText='Figure out who is reading your email. Email Tracker integrates directly with your address book to identify who is reading your emails.'
            />
          </div>
          <div className='cardWrapper'>
            <Card
              cardIcon={iconTelephone}
              cardTitle='Follow-Up Phone Calls'
              cardText='Email Tracker automatically calls people who are not opening your emails. Powered by Google and given two thumbs up by PC Magazine.'
            />
          </div>
        </div>
      </section>
    );
  }
}
export default Cards;

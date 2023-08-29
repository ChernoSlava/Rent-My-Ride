import React from 'react';

import { Bunner } from '../../components/Bunner/Bunner';
import { CallUs } from '../../components/CallUs/CallUs';

import facebook from './images/facebook.svg';
import github from './images/github.svg';
import insta from './images/instagram.svg';
import linkedin from './images/linkedin.svg';

import './contacts.scss';

export function Contacts() {
  return (
    <>
      <Bunner page="Contacts" />

      <section>
        <div className="contacts">
          <div className="container">
            <div className="contacts__content">
              <div className="contacts__heading">
                <h2 className="contacts__title">Get in Touch</h2>
                <p className="contacts__subtitle">
                  Feel free to reach out to us with any inquiries, questions, or
                  feedback. We are here to assist you and provide the
                  information you need. You can contact us through the following
                  channels:
                </p>
              </div>
              <div className="contacts__box box">
                <div className="info">
                  <h4 className="info__title">Contact Information:</h4>
                  <div className="info__block">
                    <h4>Location:</h4>
                    <p>Kishinev</p>
                    <p>Republic Of Moldova</p>
                    <div className="decorator" />
                  </div>
                  <div className="info__block">
                    <h4>Phone numbers</h4>
                    <div>
                      <p>Main:</p>
                      <p>+373(699)-37-646</p>
                    </div>
                    <div>
                      <p>Customer Support:</p>
                      <p>+373(699)-37-646</p>
                    </div>
                    <div className="decorator" />
                  </div>
                  <div className="info__block">
                    <h4>Email address</h4>
                    <div>
                      <p>General Inquiries:</p>
                      <p>slavachernogorov@gmail.com</p>
                    </div>
                    <div>
                      <p>Customer Support:</p>
                      <p>slavachernogorov@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="socials">
                  <h4 className="socials__title">Social Media:</h4>
                  <div className="socials__social socials__social_first">
                    <a
                      href="www.linkedin.com/in/slavachernogorov"
                      target="_blank"
                      rel="noreferrer">
                      <img src={linkedin} alt="linkedin icon" />
                    </a>
                  </div>
                  <div className="socials__social">
                    <a
                      href="https://github.com/ChernoSlava"
                      target="_blank"
                      rel="noreferrer">
                      <img src={github} alt="github icon" />
                    </a>
                  </div>
                  <div className="socials__social socials__social_first">
                    <a
                      href="https://www.instagram.com/chernoslava/"
                      target="_blank"
                      rel="noreferrer">
                      <img src={insta} alt="instagram icon" />
                    </a>
                  </div>
                  <div className="socials__social">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.facebook.com/slavachernogorv/">
                      <img src={facebook} alt="facebook icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="titlemap">We are here</h3>
                <iframe
                  title="map"
                  className="map"
                  // eslint-disable-next-line max-len
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87073.84721912425!2d28.775775840605338!3d46.99983949572082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c3628b769a1%3A0x37d1d6305749dd3c!2z0JrQuNGI0LjQvdGR0LIsINCc0L7Qu9C00L7QstCw!5e0!3m2!1sru!2s!4v1693346542375!5m2!1sru!2s"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="form">
                <p>Do you have a question?</p>
                <button type="button">Push here</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallUs />
    </>
  );
}

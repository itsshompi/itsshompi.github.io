import React, { Component } from 'react';

//CSS
import './main.css';

//Images
import avatar from '../../images/profile.jpeg';
import badgePML from '../../images/google-pml-badge.png';
import badgeCloudDev from '../../images/cloud-developer-badge.png';
import badgeDigitalLeader from '../../images/digital-leader-badge.png';
import badgeGenAI from '../../images/gen-ai-leader-badge.png';
import badgeCloudEng from '../../images/associate-cloud-engineer-badge.png';
import badgeData from '../../images/associate-data-practitioner-badge.png';

export default class LeftSide extends Component {
  render() {
    return (
      <div className="container-info fadeInDown animated">
        <div className="inner-block">
          <div className="content-block">
            <img className="avatar" src={avatar} role="presentation" alt="Felipe Schneeberger" />
            <div className="principal">
              <h1>FELIPE SCHNEEBERGER</h1>
              <h2>Computer Science Engineer</h2>
              <h3>Information Technologies</h3>
              <h4>
                <span>AI & ML Engineer</span>
                <br /> From Temuco, Chile.
              </h4>
              <p>
                You can contact me at:
                <br />
                <span>fs@unnamed.ai</span>
              </p>

              <div style={{ marginTop: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                {/* Professional Level */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                  <img src={badgePML} alt="Professional Machine Learning Engineer" title="Professional Machine Learning Engineer" className="badge-img" style={{ width: '110px', height: '110px' }} />
                  <img src={badgeCloudDev} alt="Professional Cloud Developer" title="Professional Cloud Developer" className="badge-img" style={{ width: '110px', height: '110px' }} />
                </div>

                {/* Associate / Leader Level */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                  <img src={badgeGenAI} alt="Generative AI Leader" title="Generative AI Leader" className="badge-img" style={{ width: '60px', height: '60px' }} />
                  <img src={badgeCloudEng} alt="Associate Cloud Engineer" title="Associate Cloud Engineer" className="badge-img" style={{ width: '60px', height: '60px' }} />
                  <img src={badgeData} alt="Associate Data Practitioner" title="Associate Data Practitioner" className="badge-img" style={{ width: '60px', height: '60px' }} />
                </div>
              </div>
            </div>
            <div className="footer">
              <p>Social Networks</p>
              <ul>
                <li><a href="https://github.com/itsshompi" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/itsshompi/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
              </ul>
              <p>Created with <i className="fa fa-heart"></i> in Temuco, Chile.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

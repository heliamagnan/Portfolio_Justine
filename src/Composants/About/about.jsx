import React from 'react';
import './about.css';

import FleurBleu from '../../assets/img/fleur-bleu.png';
import FleurRose from '../../assets/img/fleur-rose.png';

const About = () => {
  return (
    <div className="container2">
      <img 
        src={FleurBleu} 
        alt="fleur décorative" 
        className="corner-flower flower-top-left" 
      />
      <img 
        src={FleurRose}
        alt="fleur décorative" 
        className="corner-flower flower-bottom-right" 
      />

      <div className="profile-header">
        <div>
          <h1 className='textabout'>Justine 22 ans</h1>
        </div>
      </div>

      <div className="section">
        <div className="section-title">BAC : 2020 </div>
        <p>
          BAC Pro ASSP<br />
          Lycée Jean Jaures Carmaux - Mention Bien
        </p>
      </div>

      <div className="section">
        <div className="section-title">Formation :</div>
        <p>
          2024 : Openclassroom : Intégrateur WEB<br />
          2020/2023 : L1/L2 License Psychologie - Champollion Albi
        </p>
      </div>

      <div className="section">
        <div className="section-title">Centre d'intérêt :</div>
        <ul className="interests">
          <li>La photographie</li>
          <li>La formule 1</li>
          <li>Informatique</li>
          <li>L'art / Design</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
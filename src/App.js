import React from 'react';
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="Resume">
        <div className="Header">
          <h1>IVAN ANDRES</h1>
          <h2>Professional Gamer & Software Engineer</h2>
        </div>
        <div className="Content">
          <div className="Contact">
            <h3>CONTACT</h3>
             <ul>
                <li>
                      09192733514 <span className="icon">
      <img src="https://cdn-icons-png.flaticon.com/128/3095/3095610.png" alt="Phone Icon" />
    </span>
                      
                </li>
                <li>
                      ivandres.student@ua.edu.ph <span className="icon">
      <img src="https://cdn-icons-png.flaticon.com/128/2590/2590818.png" alt="Email Icon" />
    </span>
              </li>
              <li>
                      Santiago Sta Ana, Pampanga<span className="icon">
      <img src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png" alt="Location Icon" />
    </span>
             </li>
             <li><a href="https://www.facebook.com/ivnzdrs?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">Facebook</a>
             <span className="icon">
      <img src="https://cdn3.iconfinder.com/data/icons/social-media-2527/24/glyph_facebook_facebook_logo_logo_logotype_letter_f_social_media_social_media-512.png" alt="Facebook Icon" />
    </span>
             </li>
              <li>
                 <a href="https://github.com/ivnzdrs" target="_blank" rel="noopener noreferrer">Github</a>
                 <span className="icon">
      <img src="https://cdn-icons-png.flaticon.com/256/25/25231.png" alt="Github Icon" />
    </span>
             </li>
          </ul>


            <h3>EDUCATION</h3>
            <ul>
              <li>Bachelor of Science in Information Technology</li>
              <li>Full Stack Web Development Course</li>
              <li>Advanced Algorithms and Data Structures</li>
              <li>Cloud Computing and AWS Certification</li>
            </ul>

            <h3>SKILLS</h3>
            <ul>
              <li>JavaScript, HTML, CSS, Bootstrap</li>
              <li>React, Redux, Angular</li>
              <li>Node.js, Express</li>
              <li>SQL, MongoDB</li>
              <li>Python, Flask, Django</li>
              <li>Git, Docker, Jenkins</li>
            </ul>
          </div>

          <div className="WorkExperience">
            <h3>WORK EXPERIENCE</h3>
            <ul>
              <li>
                Managed Facebook Ads campaigns resulting in a total revenue of <u><strong>5 digits in transactions.</strong></u>
              </li>
              <li>
                Performed Stock and Crypto trading with a total gain of <u><strong>6 digits in value</strong></u> through strategic analysis and market timing.
              </li>
              <li>
                Provided freelance photo editing services with high customer satisfaction and improved client portfolios.
              </li>
            </ul>

            <h3>GAMING EXPERIENCE</h3>
            <ul>
              <li>
                Valorant: Achieved the rank of Ascendant, which is roughly around <u><strong>1.4% of players globally.</strong></u>
              </li>
              <li>
                Mobile Legends: Ranked <u><strong>Top 8 in the Philippines</strong></u> as a Khufra main in 2020.
              </li>
              <li>
                Clash of Clans: Managing two maxed-out Town Hall 13 accounts.
              </li>
            </ul>
            
            <h3>Senior Engineering Manager</h3>
            <ul>
              <li>Enhanced development pipelines and agile methodologies to reduce production cycle times <u><strong>by 17%</strong></u>, while resolving AWS-related app incompatibilities that slashed user issues <u><strong>by 92%</strong></u></li>
            </ul>
            <h3><strong>Key Achievements:</strong></h3>
            <ul>
            <li>Decreased mobile app <u><strong>defects by 31%</strong></u> through integration of React Native UI elements.</li>
            <li>Maintained a <u><strong>94% customer feedback</strong></u> satisfaction rating.</li>
            </ul>


            <h3>CERTIFICATIONS</h3>
            <ul>
              <li>JavaScript Essentials 1</li>
              <li>Introduction to Cybersecurity</li>
              <li>Data Analytics Essentials</li>
              <li>Introduction to Data Science</li>
              <li>Python Essentials 1</li>
              <li>Introduction to Networks</li>
            </ul>


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

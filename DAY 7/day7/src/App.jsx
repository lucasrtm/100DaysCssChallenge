import React  from 'react';
import './App.css';

import {openAside, openSearch} from './methods/logic';

import searchIcon from './img/searchIcon.png'
import dashboardIcon from './img/dashboardIcon.png'
import profileIcon from './img/profileIcon.png'
import notificationIcon from './img/notificationIcon.png'
import messageIcon from './img/messageIcon.png'
import settingIcon from './img/settingIcon.png'

function App() {
  return (
    <div className="App">
      <div className='background'>
        <div className='squareWithContent'>
            <aside>
                <ul>
                  <li>
                    <img src={dashboardIcon} />
                    <p>Dashboard</p>
                  </li>
                  <li>
                    <img src={profileIcon} />
                    <p>Profile</p>
                  </li>
                  <li>
                    <img src={notificationIcon} />
                    <p>Notifications</p>
                  </li>
                  <li>
                    <img src={messageIcon}/>
                    <p>Messages</p>
                  </li>
                  <li>
                    <img src={settingIcon} />
                    <p>Settings</p>
                  </li>
                </ul>
            </aside>
            <div id='notificationScreen' className='notificationScreen'>
                  <header>
                    <input id='searchInput' placeholder='Search...' type="text" />
                    <div onClick={openAside} className='patternDivHeader navegation'>
                      <hr />
                      <hr />
                    </div>
                    <div className='patternDivHeader notifications'>
                      NOTIFICAÇÕES
                    </div>
                    <div className='patternDivHeader search'>
                      <img onClick={openSearch} src={searchIcon} />
                    </div>
                  </header>
                  <main>
                    <ul>
                      <li>
                        <div className='listStyleBall'>
                          <span></span>
                        </div>
                        <div className='notificationContent'>
                          <p className='timeContent'>
                            9:24 AM
                          </p>
                          <p className='textContent'>
                            <strong>John Walker</strong> posted a photo on your wall.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className='listStyleBall'>
                          <span></span>
                        </div>
                        <div className='notificationContent'>
                          <p className='timeContent'>
                            9:24 AM
                          </p>
                          <p className='textContent'>
                            <strong>John Walker</strong> posted a photo on your wall.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className='listStyleBall'>
                          <span></span>
                        </div>
                        <div className='notificationContent'>
                          <p className='timeContent'>
                            9:24 AM
                          </p>
                          <p className='textContent'>
                            <strong>John Walker</strong> posted a photo on your wall.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </main>
            </div>
        </div>
      </div>
    </div>
  );
}
export default App;
import React from 'react';
import './App.css';
import BorderOverlay from './components/BorderOverlay';
import Header from './components/Header';
import SideBar from './components/SideNav';
import profile from './profile.json';

function App() {
  const [currentTab, setCurrentTab] = React.useState(0);

  return (
    <>
      <BorderOverlay />
      <Header profile={profile} />
      <div id="site-content">
        <SideBar
          tabs={profile.tabs}
          currentTab={currentTab}
          onTabChange={(tab) => setCurrentTab(tab)}
        />
        <div id="pg-content">
          <div id="pg-content-title-block">
            <div
              style={{
                position: 'absolute',
                height: '25px',
                width: 'calc(100% - 172px)',
                top: '24px',
                left: '100px',
                display: 'flex',
                boxSizing: 'border-box',
                zIndex: -1
              }}
            >
              <div
                style={{
                  height: '100%',
                  borderTop: '1px solid #DDDDDD',
                  width: 'calc(100% - 25px)',
                  backgroundColor: '#DDDDDD77',
                }}
              ></div>
              <svg width="26px" height="26px">
                <path d="M 0 0 L 25 25" fill="none" stroke="#DDDDDD" />
                <path
                  d="M 0 0 L 26 26 L 0 26 L 0 0"
                  fill="#DDDDDD77"
                  stroke="#none"
                />
              </svg>
            </div>
            <svg width="50px" height="50px">
              <path d="M 0 50 L 0 25 L 25 0 L 50 0" fill="#none" stroke="#DDDDDD" />
              <path
                d="M 0 50 L 0 25 L 25 0 L 50 0 L 50 50 L 0 50"
                fill="#DDDDDD77"
                stroke="#none"
              />
            </svg>
            <div id="pg-content-title">{profile.tabs[currentTab].title}</div>
            <svg width="50px" height="50px">
              <path d="M 0 0 L 25 25 L 50 25" fill="none" stroke="#DDDDDD" />
              <path
                d="M 0 0 L 25 25 L 50 25 L 50 50 L 0 50 L 0 0"
                fill="#666666
                "
                stroke="#none"
              />
            </svg>
          </div>
          <div id="content-box"></div>
          <div style={{position: 'relative'}}>
              <svg width="26px" height="26px">
                <path d="M 0 0 L 25 25" fill="none" stroke="#DDDDDD" />
                <path
                  d="M 0 0 L 25 0 L 25 25 L 0 0"
                  fill="#DDDDDD77"
                  stroke="#none"
                />
              </svg>
              <div
              style={{
                position: 'absolute',
                height: '25px',
                width: 'calc(100% - 82px)',
                top: 0,
                left: '25px',
                display: 'flex',
                boxSizing: 'border-box',
                zIndex: -1
              }}
            >
              <div
                style={{
                  height: '100%',
                  borderBottom: '1px solid #DDDDDD',
                  width: 'calc(100% - 25px)',
                  backgroundColor: '#DDDDDD77',
                }}
              ></div>
              <svg width="250px" height="50px">
                <path d="M 0 25 L 25 50 L 175 50 200 25 L 200 0 " fill="none" stroke="#DDDDDD" />
                <path
                  d="M 0 0 L 200 0 L 200 25 L 175 50 L 25 50 L 0 25 L 0 0"
                  fill="#DDDDDD77"
                  stroke="#none"
                />
                <path d="M 35 45 L 165 45 L 170 50 L 30 50 L 35 45" fill="#0000FF" stroke="#0000FF" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

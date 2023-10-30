import React, { useState } from 'react';
import HomeDashboard from '../screens/HomeDashboard';
import HomeIcon from '@mui/icons-material/Home';
import MonitorIcon from '@mui/icons-material/Monitor';
import SearchIcon from '@mui/icons-material/Search';
import BugReportIcon from '@mui/icons-material/BugReport';

const TabBar = () => {
    const [activeTab, setActiveTab] = useState('home');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className='tabs'>
                <div
                    onClick={() => handleTabClick('home')}
                    className={activeTab === 'home' ? 'active' : ''}
                    style={{ display: 'inline-block', verticalAlign: 'middle' }}
                >
                    <HomeIcon style={{ verticalAlign: 'middle' }} />
                    <p style={{ display: 'inline-block', marginLeft: '8px', verticalAlign: 'middle' }}>Home</p>
                </div>
                <div
                    onClick={() => handleTabClick('monitor')}
                    className={activeTab === 'monitor' ? 'active' : ''}
                    style={{ display: 'inline-block', verticalAlign: 'middle' }}
                >
                    <MonitorIcon style={{
                        verticalAlign: 'middle',
                    }} />
                    <p style={{ display: 'inline-block', marginLeft: '8px', verticalAlign: 'middle' }}>Monitor</p>
                </div>

                <div onClick={() => handleTabClick('search')}
                    className={activeTab === 'search' ? 'active' : ''}
                    style={{ display: 'inline-block', verticalAlign: 'middle' }}
                >
                    <SearchIcon style={{
                        verticalAlign: 'middle',
                    }} />
                    <p style={{ display: 'inline-block', marginLeft: '8px', verticalAlign: 'middle' }}>Search</p>
                </div>
                <div
                    onClick={() => handleTabClick('threats')}
                    className={activeTab === 'threats' ? 'active' : ''}
                    style={{ display: 'inline-block', verticalAlign: 'middle' }}
                >
                    <BugReportIcon style={{
                        verticalAlign: 'middle',
                    }} />
                    <p style={{ display: 'inline-block', marginLeft: '8px', verticalAlign: 'middle' }}>Threats</p>
                </div>
            </div>
            {activeTab === 'home' && <HomeDashboard />}
            {activeTab === 'monitor' && <HomeDashboard />}
            {activeTab === 'search' && <HomeDashboard />}
            {activeTab === 'threats' && <HomeDashboard />}
        </>
    );
};

export default TabBar;

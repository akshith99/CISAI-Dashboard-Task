import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-icons">
                <div className="dropdown">
                    <NotificationsActiveIcon
                        style={{
                            verticalAlign: 'middle',
                            marginRight: '10px'
                        }}
                    />
                    <span>System Notifications </span>
                    <ExpandMoreIcon style={{ verticalAlign: 'middle' }} />
                    <div className="dropdown-content">

                    </div>
                </div>
                <div className="dropdown">
                    <WarningAmberIcon style={{
                        verticalAlign: 'middle',
                        marginRight: '10px'
                    }} />
                    <span>Alerts</span>
                    <ExpandMoreIcon style={{ verticalAlign: 'middle' }} />
                    <div className="dropdown-content">

                    </div>
                </div>
                <div className="dropdown">
                    <AccountCircleIcon style={{
                        verticalAlign: 'middle',
                        marginRight: '10px'
                    }} />
                    <span>admin</span>
                    <ExpandMoreIcon style={{ verticalAlign: 'middle' }} />
                    <div className="dropdown-content">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

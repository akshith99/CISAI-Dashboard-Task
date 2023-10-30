import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import CandleStickContainer from "../components/CandleStick";

const HomeDashboard = () => {
    return (
            <div className="home-dashboard">
                <div className="home-dashboard-header">
                    <HomeIcon />
                    <h3>Home-Dashboard</h3>
                </div>
                <div className="candle-stick-container">
                    <CandleStickContainer />
                    <CandleStickContainer />
                    <CandleStickContainer />
                    <CandleStickContainer />
                </div>
            </div>

    )
};

export default HomeDashboard;
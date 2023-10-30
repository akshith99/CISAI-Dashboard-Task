import React from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';

const CandleStick = () => {
    return (
        <div className='candle-container'>
            <div className="candle-stick"></div>
        </div>
    );
}

const CandleStickContainer = () => {
    const candleSticks = Array.from({ length: 7 }).map((_, index) => (
        <CandleStick key={index} />
    ));
    return (
        <div className="container">
            <div className="candle-header">19,679,600</div>
            <RefreshIcon className='refreshicon'/>
            <div className="candle-subheader">Today's log events</div>
            <div className="candle-description">819,983 avg per hour</div>
            {candleSticks}
        </div>
    );
}

export default CandleStickContainer;

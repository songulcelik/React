import React from 'react'
import "./clock1.scss";
import moment from 'moment';
const Clock1 = () => {
    const dateTime=moment();
    const timeStr=dateTime.format("HH:mm");
    const dateStr=dateTime.format("LL");
    const dayStr=dateTime.format("dddd");
    const hour=dateTime.format("HH");

    let message="";
    if(hour>=6 && hour<11){
        message="MORNING";
    }else if(hour>=11 && hour<14){
        message="NON";
    }else if(hour>=14 && hour<17){
        message="AFTERNOON";
    }else if(hour>=17 && hour<21){
        message="EVENING"
    }else{
        message="NIGHT";
    }



    console.log()


  return (
    <div className="clock-container">
        <div className="time">{timeStr}</div>
        <div>
            <div className="date">{dateStr}</div>
            <div className="day">{dayStr} {message}</div>
        </div>
    </div>
  )
}
export default Clock1

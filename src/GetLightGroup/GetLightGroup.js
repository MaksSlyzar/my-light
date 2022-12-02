import React, { useState } from "react";
import { getDayTime } from "../generate";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./GetLightGroup.css";
import { Button } from "react-bootstrap";


function vtime (time) {
    let hours = time[0], min = time[1];
    if (min < 10)
        min = "0" + min;
    return `${hours}:${min}`;
}

function vtime2 (time) {
    let hours = time[0], min = time[1];
    return `${hours} години, ${min} хвилин`;
}

function getDayName (day) {
    const days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
    return days[day];
}

function GetLightGroup (props) {
    const group = props.group;
    const [ day, setDay ] = useState(new Date(Date.now()).getDay() - 1);
    const [ hours, setHours ] = useState(new Date(Date.now()).getHours());
    const [ minutes, setMinutes ] = useState(new Date(Date.now()).getMinutes());
    const [ data, setData ] = useState(getDayTime(group, day, hours, minutes));

    const activities = ["відключення електроенергії", "електроенергія є", "можливе відключення"];
    const foractivities = ["відключення електроенергії", "електроенергія буде", "можливе відключення"];

    const update = () => {
        setDay(new Date(Date.now()).getDay() - 1);
        setHours(new Date(Date.now()).getHours());
        setMinutes(new Date(Date.now()).getMinutes());
    
    
        setData(getDayTime(group, day, hours, minutes));

        console.log("update")
    }

    return (
        <div className="GetLightGroup">
            <div className="nowTime">
                <div>{getDayName(day)}</div>
                <div>{vtime([hours, minutes])}</div>
            </div>

            

            <div className="atNow">
            
                <h5 className="">На даний момент 
                <span className="activity"> {activities[data.now.activity]}</span></h5>
            </div>

            <div>
                <h6>Через {vtime2(data.forNextTime)}
                <span> {foractivities[data.next.activity]} до {vtime(data.next.to)}</span>
                </h6>
            </div>

            <Button onClick={() => update()} variant="primary">Оновити</Button>
        </div>
    )
}

export default GetLightGroup;
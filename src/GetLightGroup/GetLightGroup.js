import React from "react";
import { getDayTime } from "../generate";
import "./GetLightGroup.css";

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
    const day = new Date(Date.now()).getDay() - 1;
    const hours = new Date(Date.now()).getHours();
    const minutes = new Date(Date.now()).getMinutes();


    const data = getDayTime(group, day, hours, minutes);
    console.log(data);

    const activities = ["електроенергія подається", "відключення електроенергії", "можливе відключення електроенергії"];

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
                <span> {activities[data.next.activity]} до {vtime(data.next.to)}</span>
                </h6>
            </div>
        </div>
    )
}

export default GetLightGroup;
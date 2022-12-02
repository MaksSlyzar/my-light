import _data from "./data";


export function getDayTime (group, day, hours, minutes) {
    day = Number(day);
    hours = Number(hours);
    minutes = Number(minutes);
    group = Number(group);

    const dayData = _data[group][day];
    const data = [
        [ hoursToMin(1, 0), hoursToMin(5, 0) ],
        [ hoursToMin(5, 0), hoursToMin(9, 0) ],
        [ hoursToMin(9, 0), hoursToMin(13, 0) ],
        [ hoursToMin(13, 0), hoursToMin(17, 0) ],
        [ hoursToMin(17, 0), hoursToMin(21, 0) ],
        [ hoursToMin(21, 0), hoursToMin(1, 0) ],
    ];

    const userTime = hoursToMin(hours, minutes);

    for (let timeInd = 0; timeInd < data.length; timeInd++ ) {
        const time = data[timeInd];

        if (userTime >= time[0] && userTime < time[1]) {
            let nextTimeInd = timeInd + 1;

            if (nextTimeInd > data.length)
                nextTimeInd = 0;
            const nextTime = data[nextTimeInd];

            return {
                group: group,
                day:day,
                now: { 
                    from: toNormalTime(time[0]),
                    to: toNormalTime(time[1]),
                    activity: dayData[timeInd],
                },
                next: {
                    from: toNormalTime(nextTime[0]), 
                    to: toNormalTime(nextTime[1]), 
                    activity: dayData[nextTimeInd]
                },
                forNextTime: toNormalTime(nextTime[0] - userTime)
            };
        }
    }
}


function hoursToMin (hours, minutes) {
    if (hours < 12) {
        hours = hours + 24;
    }
    return hours * 60 + minutes;
}

function toNormalTime (minutes) {
    let hours = Math.round(minutes / 60);
    if (hours > 24) {
        hours -= 24;
    }

    return [ hours, minutes % 60]
}



// console.log(getDayTime(2, 4, 18, 11));
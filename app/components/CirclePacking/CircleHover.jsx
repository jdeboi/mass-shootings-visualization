import React, { useState } from 'react';

export default function CircleHover({ d, i, setCircleInfo }) {
    const [isOn, setIsOn] = useState(false);

    const handleMouseOver = (d, i) => {
        setCircleInfo({
            killed: i,
            wounded: i,
            incidents: 1
        })
        setIsOn(true);
    }

    const handleMouseOut = (d, i) => {
        setIsOn(false);
    }

    return (
        <circle
            fill={"#fff"}
            stroke={isOn ? "red" : null}
            r={d.r}
            onMouseEnter={() => handleMouseOver()}
            onMouseLeave={() => handleMouseOut()}

            style={{ pointerEvents: "all" }}
        />
    )
}
import React from 'react';

function CircleStatic({fillC, r}) {
    console.log("static")
    return (
        <circle
            fill={fillC}
            stroke={null}
            r={r}
            style={{ pointerEvents: "none" }}
        />
    )
}

export default React.memo(CircleStatic);
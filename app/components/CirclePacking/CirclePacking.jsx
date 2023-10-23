'use client'

import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import Tooltip from '../Tooltip/Tooltip';
import CircleHover from './CircleHover';
import CircleStatic from './CircleStatic';

import data from './data_circles.json';

function CirclePacking() {
    const [root, setRoot] = useState(null);
    const [circleInfo, setCircleInfo] = useState("");
    const [circleIndex, setCircleIndex] = useState(null);
    const width = 928;
    const height = width;
    const margin = 1; // to avoid clipping the root circle stroke
    const format = d3.format(",d");

    useEffect(() => {

        // Create the pack layout.
        const pack = d3.pack()
            .size([width - margin * 2, height - margin * 2])
            .padding(3);

        // Compute the hierarchy from the JSON data; recursively sum the
        // values for each node; sort the tree by descending value; lastly
        // apply the pack layout.
        const rt = pack(d3.hierarchy(data)
            .sum(d => d.value)
            .sort((a, b) => b.value - a.value));
        setRoot(rt);


    }, [])




    console.log("testt")
    return (
        <>
            <h1>Mass Shooting Incidents</h1>
            <h2>grouped by victim number per incident</h2>
            {root &&
                <svg width={width} height={height} viewBox={[-margin, -margin, width, height]}>
                    {root.descendants().map((d, i) => {
                        return (
                            <g style={{ pointerEvents: "none" }} transform={`translate(${d.x},${d.y})`} key={i}>

                                {d.children ?
                                    <CircleHover
                                        d={d}
                                        i={i}
                                        setCircleInfo={setCircleInfo}
                                    />
                                    :
                                    <CircleStatic
                                        fillC={d.data.name == "k" ? "red" : "blue"}
                                        r={d.r}
                                    />
                                }
                            </g>
                        )
                    })}
                </svg>

            }
            {
                circleInfo &&
                <Tooltip {...circleInfo} />
            }
        </>
    );
}

export default React.memo(CirclePacking);
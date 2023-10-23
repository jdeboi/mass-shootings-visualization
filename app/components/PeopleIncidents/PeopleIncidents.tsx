"use client"

import { useState } from 'react';
import * as d3 from 'd3';
import allData from './data.json';
import People from './components/People';
import Legend from './components/Legend';
import Tooltip from '../Tooltip/Tooltip';
allData.sort((a, b) => b.incidents - a.incidents);
const dataBefore = allData.filter(d => d.killed >= 4);

const numAllIncidents = allData.map((d) => d.incidents).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const numIncidentsBefore = dataBefore.map((d) => d.incidents).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

interface dI {
    incidents: number;
    killed: number;
    wounded: number;
}

export default function PeopleIncidents() {
    const [data, setData] = useState(dataBefore);
    const [isWoundedAndKilled, setIsChecked] = useState(false);

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [circleInfo, setCircleInfo] = useState<dI | null>(null);

    const width = 1000;
    const height = 1000;
    const xBars = 250;

    // Define the scales for mapping data to the chart dimensions
    const xScale = d3.scaleLinear()
        .domain([0, d3.max(allData, d => d.incidents)!])
        .range([0, width - xBars - 20]);

    const yScale = d3.scaleBand()
        .domain(allData.map((d, i) => i + ""))
        .range([0, height - 20])
        .padding(0);

    const handleMouseOver = (d: dI, i: number) => {
        setCircleInfo({
            killed: d.killed,
            wounded: d.wounded,
            incidents: d.incidents
        })
        setSelectedIndex(i);
    }
    const handleMouseLeave = (d: dI, i: number) => {
        setSelectedIndex(null);
        setCircleInfo(null);
    }

    const handleCheckboxChange = (checked: boolean) => {
        setIsChecked(checked);
        if (checked)
            setData(allData)
        else
            setData(dataBefore)
    }

    return (
        <>
            <div className="flex flex-col justify-center align-middle text-center">
                <div><h1 className="text-white mb-0">Mass Shooting Incidents</h1></div>
                <div><p className="mb-10">Data from Everytown prepared by <a href="https://jdeboi.com">Jenna deBoisblanc</a> for Graphicacy</p></div>
                <div>
                    <div className="dropdown dropdown-hover">
                        <label tabIndex={0} className="btn m-1">Mass Shooting Definition</label>
                        <ul tabIndex={0} className="dropdown-content z-[1] m-0 menu shadow bg-base-100 rounded-box w-55">
                            <li className="m-0"><a className="no-underline" onClick={() => handleCheckboxChange(false)}>4+ killed</a></li>
                            <li className="m-0"><a className="no-underline" onClick={() => handleCheckboxChange(true)}>4+ wounded or killed</a></li>

                        </ul>
                    </div>
                </div>
                <p className="m-0 text-sm">{isWoundedAndKilled ? "4+ wounded or killed" : "4+ killed"}</p>

            </div>

            <hr className="mb-10 mt-10" />



            <Legend showingAll={true} />
            <div className="mb-10 mt-2 text-center">
                <h2 className="mb-10 mt-2">{isWoundedAndKilled ? numAllIncidents : numIncidentsBefore} total incidents</h2>
            </div>

            <div className="h-700 overflow-y-scroll" style={{ width: width }}>
                <svg width={width} height={height}>
                    {data.map((d, i) => {
                        return (
                            <g
                                key={i}
                                onMouseOver={() => handleMouseOver(d, i)}
                                onMouseLeave={() => handleMouseLeave(d, i)}
                            >
                                <People
                                    killed={d.killed}
                                    wounded={d.wounded}
                                    h={yScale.bandwidth()!}
                                    y={yScale(i + "")!}
                                />
                                <rect
                                    className='bar'
                                    stroke={"black"}
                                    fill={i == selectedIndex ? "rgb(255,54, 47)" : "rgb(255,54, 47)"}
                                    opacity={i == selectedIndex ? .8 : 1}
                                    x={xBars}
                                    y={yScale(i + "")!}
                                    width={Math.max(xScale(d.incidents)!, 4)}
                                    height={yScale.bandwidth()!}

                                />
                            </g>
                        )
                    })}

                </svg>
                {
                    circleInfo &&
                    <Tooltip {...circleInfo} />
                }
            </div>

        </>
    );
}

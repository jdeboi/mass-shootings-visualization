import * as React from 'react';

export interface IPeopleProps {
    killed: number;
    wounded: number;
    y: number;
    h: number;
}

export default function People({ y, h, killed, wounded }: IPeopleProps) {
    const killedArr: number[] = Array.from(Array(killed));
    const woundedArr: number[] = Array.from(Array(wounded));

    const imgW = 10;
    // const imgH = 20;
    const xStart = 250-(killed + wounded)*(imgW+2)-10;

    return (
        <>
            {woundedArr.map((d, i) => {
                return (
                    <image
                        key={i}
                        xlinkHref={"/people/blue.png"}
                        x={xStart + i*(imgW+2)}
                        y={y}
                        width={imgW}
                        height={h}
                    />
                )
            })}
            {killedArr.map((d, i) => {
                return (
                    <image
                        key={i}
                        xlinkHref={"/people/red.png"}
                        x={xStart + i*(imgW+2) + wounded*(imgW+2)}
                        y={y}
                        width={imgW}
                        height={h}
                    />
                )
            })}
        </>
    );
}

import * as React from 'react';
import Image from 'next/image';

interface LegendP {
    showingAll: boolean;
}

export default function Legend({ showingAll }: LegendP) {

    return (
        <>
            <div className="flex flex-wrap justify-center">
                {/* <div className="text-lg">
                    <h1>200 incidents</h1>
                </div> */}
                <div className="px-4 py-2 pr-4">
                    <Image
                        className="m-auto"
                        alt="blue person"
                        src="/people/blue.png"
                        width={20}
                        height={10}
                    />
                    <p className="text-center mt-2">wounded</p>
                </div>
                <div className="px-4 py-2">
                    <Image
                        className="m-auto"
                        alt="red person"
                        src="/people/red.png"
                        width={20}
                        height={10}
                    />
                    <p className="text-center mt-2">killed</p>
                </div>
                {/* <div> */}
                    {/* <div className="flex flex-col">
                        <button>test</button>
                        <h2 className="m-0">{showingAll ? 1200 : 400} total incidents</h2>
                    </div> */}
                {/* </div> */}
            </div>


        </>
    );
}

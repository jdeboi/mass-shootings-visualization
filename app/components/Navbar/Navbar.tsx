import * as React from 'react';
import Link from 'next/link';

export interface IAppProps {
}

export default function Navbar(props: IAppProps) {
    return (
        <div className="navbar bg-base-100" style={{backgroundColor: "#001c60"}}>
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">Mass Shooting Incidents</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/about">About</Link></li>
                    <li><a href="https://colab.research.google.com/drive/1naewWw9uA2qE3eoxaSoIzwOJ07HGET_s?usp=sharing">Exploratory Analysis</a></li>
                </ul>
            </div>
        </div>
    );
}

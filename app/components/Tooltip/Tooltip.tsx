import React, { useState, useEffect } from 'react';
import './Tooltip.css';

interface Position {
  x: number;
  y: number;
}

interface TooptipProps {
  killed: number;
  wounded: number;
  incidents: number;
}

const Tooltip: React.FC<TooptipProps> = ({ incidents, killed, wounded }: TooptipProps) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.pageX + 5, y: e.pageY + 5 });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {position.x && position.y &&
        <div
          className="follower card w-50 bg-base-100 shadow-xl m-0"
          style={{ position: "absolute", left: position.x, top: position.y }}
        >
          <div className="card-body p-5 gap-0">
            <div className="card-title">{incidents} incidents</div>
            <div className="p-0 text-red">{killed} killed</div>
            <div className="p-0 text-blue">{wounded} wounded</div>
          </div>
        </div>
      }
    </>
  );
};

export default Tooltip;
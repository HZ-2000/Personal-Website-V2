import React, { useState, useCallback, useRef } from "react";
import { Nav } from '../components/Nav';
import styles from './css/cgol.module.css';
import './css/vars.css';
import produce from 'immer';

const numRows = 50;
const numCols = 50;

const operations = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0]
];

//-------------tempelates---------------
const blinker = [
    [1,1],
    [1,2],
    [1,3]
];

const toad = [
    [1,1],
    [1,2],
    [1,3],
    [2,2],
    [2,3],
    [2,4]
];

const glider = [
    [1,2],
    [2,3],
    [3,3],
    [3,2],
    [3,1],
];

const glider_gun = [
    [6,1],
    [7,1],
    [6,2],
    [7,2],
    [6,11],
    [7,11],
    [8,11],
    [9,12],
    [10,13],
    [10,14],
    [5,12],
    [4,13],
    [4,14],
    [5,16],
    [6,17],
    [7,18], 
    [7,17],
    [7,15],
    [8,17],
    [9,16],
    [6,21],
    [5,21],
    [4,21],
    [6,22],
    [5,22],
    [4,22],
    [3,23],
    [3,25],
    [2,25],
    [7,25],
    [8,25],
    [7,23],
    [4,35],
    [5,35],
    [4,36],
    [5,36]
]
//----------------------------------

const generateEmptyGrid = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
  
    return rows;
};

export const CGOL: React.FC = () => {
    document.title = "ZH | CGOL";

    const [grid, setGrid] = useState(() => {
        const rows = [];
        for(let i = 0; i < numRows; i++){
            rows.push(Array.from(Array(numCols), () => 0));
        }

        return rows;
    });

    const [running, setRunning] = useState(false);
    const runningRef = useRef(running);
    runningRef.current = running;

    const [speed, setSpeed] = useState(1000);
    const speedRef = useRef(speed);
    speedRef.current = speed;

    const runSimulation = useCallback(() => {
        if(!runningRef.current) {
            return;
        }
        //simulate 
        setGrid((g) => {
            return produce(g, gridCopy => {
                for(let i = 0; i < numRows; i++){
                    for(let k = 0; k < numCols; k++) {
                        let neighbors = 0;
                        operations.forEach(([x, y]) => {
                            const newI = i + x;
                            const newK = k + y;
                            if(newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                                neighbors += g[newI][newK];
                            }
                        });

                        if(neighbors < 2 || neighbors > 3) {
                            gridCopy[i][k] = 0;
                        }else if (g[i][k] === 0 && neighbors === 3) { 
                            gridCopy[i][k] = 1;
                        }
                    }
                }
            });
        });
        setTimeout(runSimulation, speedRef.current); 
    }, []);

    const setGridTempelate = (tempelate: number[][]) => {
        setGrid(generateEmptyGrid());
        setGrid((g) => {
            return produce(g, gridCopy => {
                tempelate.forEach(([x, y]) => {
                    gridCopy[x][y] = 1;
                });
            });
        });
    };

    return (
        <div className={styles.main}>
            <Nav />
            <div className={styles.title}>
                <h1>conway's game of life</h1>
            </div>

            <div className={styles.game}>
                <div className={styles.gridSection}>
                    <div className={styles.buttons}>
                        <button className={styles.button}
                            onClick={() => {
                                setRunning(!running);
                                if(!running) {
                                    runningRef.current = true;
                                    runSimulation();
                                }
                            }}>
                            {running ? 'stop' : 'start'}
                        </button>
                        <button className={styles.button}
                            onClick={() => {
                            setGrid(generateEmptyGrid());
                            }}>
                            clear
                        </button>
                        <button className={styles.button}
                            onClick={() => {
                                setSpeed(1000);
                            }}>
                            slow
                        </button>
                        <button className={styles.button}
                            onClick={() => {
                                setSpeed(50);
                            }}>
                            fast
                        </button>
                    </div>
                        
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: `repeat(${numCols}, 20px)`
                        }}
                    >
                        {grid.map((rows, i) => 
                            rows.map((col, k) => 
                                <div 
                                    key={`${i}-${k}`}
                                    onClick={() => {
                                        const newGrid = produce(grid, gridCopy => {
                                            gridCopy[i][k] = grid[i][k] ?  0 : 1; // removal/insertion
                                        })
                                        setGrid(newGrid)
                                    }}
                                    style={{width: 20,
                                            height: 20, 
                                            backgroundColor: grid[i][k] ? "pink" : undefined, 
                                            border: "solid 1px grey"}} />
                            )
                        )}
                    </div>
                </div>

                <div className={styles.tempelatesSection}>
                    <h1>tempelates</h1>

                    <div className={styles.tempelates}>
                        <li>
                            <ul onClick={() => {
                                setGridTempelate(blinker);
                            }} className={styles.tempelate}>
                                <h2>blinker</h2>
                            </ul>
                            <ul onClick={() => {
                                setGridTempelate(toad);
                            }} className={styles.tempelate}>
                                <h2>toad</h2>
                            </ul>
                            <ul onClick={() => {
                                setGridTempelate(glider);
                            }} className={styles.tempelate}>
                                <h2>glider</h2>
                            </ul>
                            <ul onClick={() => {
                                setGridTempelate(glider_gun);
                            }} className={styles.tempelate}>
                                <h2>gosper glider gun</h2>
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    )
}

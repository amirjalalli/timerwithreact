import React, { useEffect, useState } from "react";
import "./Counter.css"

const Counter = () => {
    const targateDate = new Date("2022-03-20")
    const nowDate = new Date()
    const [target,setTarget] = useState(0)
    const [state,setState] = useState(0)
    useEffect(() => {
      const timer =  setTimeout (() =>{
            setState(target-nowDate)
        },1000) 
        return () => clearTimeout(timer)
    },[state])

    const days = Math.floor(state / (1000 * 60 * 60 * 24));
    const hours = Math.floor (state / (1000 * 60 * 60) % 24);
    const minutes = Math.floor(state / (1000 * 60) % 60);
    const seconds = Math.floor(state / (1000) % 60);
    
    
console.log(targateDate,nowDate)

    return <div>
        <div className="contet">
            <div>
                <h2>Comming <span className="son">Soon</span></h2>
                <input type="date" onChange={event => setTarget(new Date(event.target.value))} />
            </div>
            <div className={`timeContent ${state>0 && "visible"}`}>
                <div className="chileContent">
                    <div>Day</div>
                    <div className="num">{days}</div>
                </div>   
                <div className="chileContent">
                             <div>Hour</div>
                    <div className="num">{hours}</div>
                </div>   
                <div className="chileContent">
                             <div>Minute</div>
                    <div className="num">{minutes}</div>
                </div>    
                <div className="chileContent">
                            <div>Second</div>
                    <div className="num">{seconds}</div>
                </div>




            </div>

        </div>
    </div>
}

export default Counter;
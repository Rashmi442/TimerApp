import React ,{useEffect,useState}from "react";

function TimerApp() {
    // State to store the seconds value
    const [seconds,setSeconds]=useState(0);
    // State to check whether the timer is running or not
    const [running,setRunning]=useState(false);
    // useeffect runs when running is true
    useEffect(()=>{
        let timer;
        //if running is true
        if(running){
            timer=setInterval(()=>{
                setSeconds(a=>a+1);
            },1000); // excutes witha gap of 1 seconds
        } return ()=> clearInterval(timer);
    },[running]);// dependancy array -run effect (once the running value changes)
  return (
    <div>
      <h2>Timer Application</h2>
      <p>{seconds} Seconds</p>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={() => setSeconds(0)}>Reset</button>
    </div>
  );
}
export default TimerApp;

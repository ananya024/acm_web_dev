//CLOCK!!!!!!!!!!!!!!!!!!!!!!
function myclock () {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const clockDisplay= document.getElementById("clockDisplay");
  clockDisplay.textContent = 
    String(hours).padStart(2, '0') + ":" + 
    String(minutes).padStart(2, '0') + ":" + 
    String(seconds).padStart(2, '0');
}
myclock(); //to avoid the frst 1sec delay
setInterval(myclock, 1000);
// NOT defining a udf here, setinterval is a function which 
// takes a function as arg and calls it repeatedly
// ................................................

//STOPWATCH!!!!!!!!!!!!!!!!!!!
const stopwatch = document.getElementById("stopwatch");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");


let timerId = null;
let elapsed = 0;
let tillnow=elapsed;
function startfn() 
{
  if (timerId !== null) {return;} // already running
  let stt=Date.now();
  tillnow=elapsed;
  timerId = setInterval(function(){
    elapsed=tillnow+Date.now()-stt;
    const hr = Math.floor(elapsed / 3600000);
    const min = Math.floor((elapsed % 3600000) / 60000);
    const sec = Math.floor((elapsed % 60000) / 1000);
    const clockDisplay= document.getElementById("clockDisplay");
    stopwatch.textContent = 
      String(hr).padStart(2, '0') + ":" + 
      String(min).padStart(2, '0') + ":" +  
      String(sec).padStart(2, '0');
  },1000);
  startBtn.classList.add("hidden");
  resetBtn.classList.add("hidden");
  stopBtn.classList.remove("hidden");
}

function stopfn() 
{
  clearInterval(timerId);
  timerId = null;
  stopBtn.classList.add("hidden");
  startBtn.classList.remove("hidden");
  resetBtn.classList.remove("hidden");
}

function resetfn()
{
  clearInterval(timerId);
  timerId = null;
  tillnow = 0;
  elapsed = 0;
  stopwatch.textContent = "00:00:00";
}

startBtn.addEventListener("click", startfn); // function () {
// stt=Date.now();
// stpwtch=setInterval(function(){
//     const elapsed=Date.now()-stt;
//      const hr = Math.floor(elapsed / 3600000);
// const min = Math.floor((elapsed % 3600000) / 60000);
// const sec = Math.floor((elapsed % 60000) / 1000);
// const clockDisplay= document.getElementById("clockDisplay");
// stopwatch.textContent = 
//     String(hr).padStart(2, '0') + ":" + 
//     String(min).padStart(2, '0') + ":" +  
//     String(sec).padStart(2, '0');
// },1000); // This 1000 does NOTHING
// cboz addEventListener(eventType, callback) takes 2 agrs

stopBtn.addEventListener("click", stopfn);

resetBtn.addEventListener("click",resetfn);
// startbtn is a button element
// stopwatch is a div element
// so the lines
//     startBtn.style.display = "none"; //changes appearance
//     stopwatch.textContent = "00:00:01"; //changes content
// might look similar, but arer very different



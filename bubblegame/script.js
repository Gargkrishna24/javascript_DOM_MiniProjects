const makingBubble = () => {
var cluster = "";

  for (var i = 0; i < 162; i++) {
    cluster += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector("#panel-bottom").innerHTML = cluster;
};

var counter = 10;

const timer = () => {
  var countDown = setInterval(() => {
    if (counter> 0) {
      counter--;
      document.querySelector("#timeInterval").textContent =counter;
    } else {
      clearInterval(countDown);
      document.querySelector("#panel-bottom").innerHTML=`<h1> Game Over </h1>`
    }
  }, 1000);
};
var currentHitting = 0 ;
const hitElement = ()=>{
  currentHitting=Math.floor(Math.random()*10);
  document.querySelector("#hitting").textContent=currentHitting;
}

var score = 0;
const changeScore=()=>{
  score+=10;
  document.querySelector("#increaseScore").textContent=score;
}

document.querySelector("#panel-bottom").addEventListener("click",(dets)=>{
  // alert("hello")
  var hitVal=Number(dets.target.textContent);
  // console.log(hitVal);
  
  if(hitVal===currentHitting){
    changeScore();
    makingBubble();
    hitElement();
  }
})
timer();
hitElement();
makingBubble();


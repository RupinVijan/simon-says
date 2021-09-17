const color = ["red", "blue", "green", "yellow"];
const newcolor = document.getElementById("newcolor");
let gamearr = [],
  i,
  li = [],res=[];
var level=0,started=false;
const red = document.getElementById("r");
const green = document.getElementById("g");
const blue = document.getElementById("b");
const yellow = document.getElementById("y");
const score = document.getElementById("score");

red.addEventListener("click", () => {
    res.push("red");
    userclickpat(res.length-1);
});
blue.addEventListener("click", () => {
    res.push("blue");
    userclickpat(res.length-1);
});
green.addEventListener("click", () => {
    res.push("green");
    userclickpat(res.length-1);
});
yellow.addEventListener("click", () => {
    res.push("yellow");
    userclickpat(res.length-1);
});

document.getElementById("btn").addEventListener("click",()=>{
    if(started==false){
        nextseq();
        started=true;
    }
    

})

function userclickpat(currentLevel){
    if (li[currentLevel] === res[currentLevel]) {

        console.log("success");
  
        
        if (li.length === res.length){
  
        
          setTimeout(function () {
            nextseq();
          }, 100);
  
        }
  
      }

      else {

        console.log("wrong");
  
        startover();
  
        
  
      }
}






function nextseq(){
    level++;
    var num = Math.floor(Math.random() * 4);
        li.push(color[num])
        console.log(li)
        newcolor.innerText = color[num];
    score.innerText=level;
}

function startover(){
    level=0;
    res=[];
    started=false;
    newcolor.innerText="LOST"
}




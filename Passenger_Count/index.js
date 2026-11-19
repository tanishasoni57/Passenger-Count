// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let count=0;
function increment() {
  count=count+1;
  document.getElementById("count-el").innerText=count;
}



let saveEl=document.getElementById("save-el");
function save(){
  console.log(count);
  
  let previousEnteries = count+ " - ";
  saveEl.textContent+= " "+previousEnteries;
  document.getElementById("count-el").innerText=0;
  count=0;

}

let welcomeEl = document.getElementById("welcome-el"); 
let name="Tanisha ";
let greeting="Welcome";


welcomeEl.innerText=name+greeting;
welcomeEl.innerText += "👋"




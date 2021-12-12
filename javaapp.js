const rElement = document.getElementById("F");
const rElement = document.getElementById("g");
const rElement = document.getElementById("b");

const levels = Array.from(document.getElementsByClassName("mode"));

let gamelevel = levels.find((level)=>{
const classList = Array.from(level.classList);
return classList.includes("selected");
}).innerHTML;

levels.forEach((level)=>{
level.addEventListener("click", function(){
    levels.forEach((mode)=> mode.classList.remove("selected"));
    this.classList.add("selected");

    gamelevel = this.innerHTML;
});
});

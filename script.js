let btn1 = document.getElementById("myButton1");
let btn2 = document.getElementById("myButton2");
let copyDiv = document.querySelector(".copyCode");
let rgb1 = "#051937";
let rgb2 = "#008793";
const hexValues = ()=>{
    let myHexValue = "123456789abcdef";
    let colors = "#";
    for(let i=0;i<6;i++){
        colors = colors + myHexValue[Math.floor(Math.random()*15)];
    }
    return colors;
};
const handlebutton1 = ()=>{
    rgb1 = hexValues();
    console.log(rgb1);
    btn1.innerText = rgb1;
    // btn1.style.backgroundColor = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right,  ${rgb1}, ${rgb2})`;
};
const handlebutton2 = ()=>{
    rgb2 = hexValues();
    console.log(rgb2);
    btn2.innerText = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right,  ${rgb1}, ${rgb2})`;
};
btn1.addEventListener("click",handlebutton1);
btn2.addEventListener("click",handlebutton2);
copyDiv.addEventListener("click",()=>{
    navigator.clipboard.writeText(copyDiv.innerText);
    alert("copied to clipboard");
});
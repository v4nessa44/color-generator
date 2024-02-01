let box = document.querySelector(".box");
let colorCode = document.querySelector("p");
let btn = document.querySelector("button");


const changeColor = () =>{

    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    colorCode.innerHTML = `Color Code: RGB(${r}, ${g} ,${b})`

    box.style.backgroundColor = `rgba(${r},${g},${b})`;

        
};

btn.addEventListener("click", changeColor);
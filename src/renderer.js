const func = async() => {
    const response = await window.versions.ping()
    console.log(response)
}

func()

let isSideBarOpen = false;
let slide_in = new Audio("../src/sounds/slide_in.wav");
let slide_out = new Audio("../src/sounds/slide_out.wav");
    
const sidebar = document.querySelector(".sidebar");
document.addEventListener("keydown", (event) => {
    if (event.keyCode === 9) {
        if (isSideBarOpen) {
            sidebar.style.animation = "slide-out 200ms";
            slide_out.play();
            setTimeout(() => sidebar.style.display = "none", 200);
        } else {
            sidebar.style.display = "flex";
            sidebar.style.animation = "slide-in 300ms forwards";
            slide_in.play();
        };
        isSideBarOpen = !isSideBarOpen;
    };
});

const done_btn = document.createElement("btn");
done_btn.classList.add('btn');
done_btn.classList.add('done-btn');
done_btn.textContent = "Done!";


document.querySelector(".home").appendChild(done_btn);


//Handles sound effects for all buttons
const buttons = document.querySelectorAll("btn");
let click_sound = new Audio('../src/sounds/click.mp3');
let hover_sound = new Audio('../src/sounds/low_hover.wav');

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        click_sound.play();
    });
    btn.addEventListener('mouseenter', () => {
        hover_sound.play();
    });
})
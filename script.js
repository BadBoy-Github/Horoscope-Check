
// Elements
let parent = document.getElementById("parent");
let btnToggle = document.getElementById("btnToggle");
let cardParent = document.getElementById("cardParent");
let heading = document.getElementById("heading");
let btnRound = document.getElementById("btnRound");


let isLight = true;

// Functions
const toggleTheme = () => {
    if (isLight) {
        parent.style.backgroundColor = "#d6d6d6";
        cardParent.style.backgroundColor = "#FFFFFF";
        btnToggle.style.backgroundColor = "#3B82F6";
        heading.style.color = "#0F172A";
        btnRound.style.transform = "translateX(0px)";
        // text #E5E7EB
        // mtext #94A3B8
    } else {
        parent.style.backgroundColor = "#020617";
        cardParent.style.backgroundColor = "#0F172A";
        btnToggle.style.backgroundColor = "#2563EB";
        heading.style.color = "#E5E7EB";
        btnRound.style.transform = "translateX(30px)";
        // text #0F172A
        // mtext #64748B
    }
}


toggleTheme();

btnToggle.addEventListener("click", () => {
    isLight = !isLight;
    toggleTheme();
})



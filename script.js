
// Elements
let parent = document.getElementById("parent");
let btnToggle = document.getElementById("btnToggle");
let cardParent = document.getElementById("cardParent");
let heading = document.getElementById("heading");
let btnRound = document.getElementById("btnRound");
let cardPara = document.getElementById("cardPara");
let label = document.getElementById("label");
let selectTrigger = document.getElementById("selectTrigger");
let selectOptions = document.getElementById("selectOptions");
let customSelect = document.getElementById("customSelect");
let selectedValue = document.getElementById("selectedValue");
let options = document.querySelectorAll(".option");
let button = document.getElementById("button");
let signSign = document.getElementById("signSign");
let dateDate = document.getElementById("dateDate");
let signText = document.getElementById("signText");
let dateText = document.getElementById("dateText");
let horoscopeData = document.getElementById("horoscopeData");






selectTrigger.addEventListener("click", () => {
    selectOptions.classList.toggle("open");
});

options.forEach(option => {
    option.addEventListener("click", () => {
        selectedValue.textContent = option.textContent;
        selectOptions.classList.remove("open");
    });
});

document.addEventListener("click", (e) => {
    if (!customSelect.contains(e.target)) {
        selectOptions.classList.remove("open");
    }
});




let isLight = true;

// Functions
const toggleTheme = () => {
    if (isLight) {
        parent.style.backgroundColor = "#d6d6d6";
        cardParent.style.backgroundColor = "#FFFFFF";
        btnToggle.style.backgroundColor = "#3B82F6";
        heading.style.color = "#0F172A";
        btnRound.style.backgroundColor = "#d6d6d6";
        btnRound.style.transform = "translateX(0px)";
        cardPara.style.color = "#0F172A";
        label.style.color = "#0F172A";
        selectTrigger.style.backgroundColor = "#E2E8F0";
        selectTrigger.style.color = "#0F172A";
        selectOptions.style.backgroundColor = "#FFFFFF";
        selectOptions.style.color = "#0F172A";
        button.style.backgroundColor = "#2563EB";
        button.style.color = "#FFFFFF";
        signText.style.color = "#64748B";
        dateText.style.color = "#64748B";
        signSign.style.color = "#0F172A";
        dateDate.style.color = "#0F172A";
        horoscopeData.style.color = "#0F172A";

    } else {
        parent.style.backgroundColor = "#020617";
        cardParent.style.backgroundColor = "#0F172A";
        btnToggle.style.backgroundColor = "#2563EB";
        heading.style.color = "#E5E7EB";
        btnRound.style.backgroundColor = "#020617";
        btnRound.style.transform = "translateX(30px)";
        cardPara.style.color = "#E5E7EB";
        label.style.color = "#E5E7EB";
        selectTrigger.style.backgroundColor = "#1E293B";
        selectTrigger.style.color = "#E5E7EB";
        selectOptions.style.backgroundColor = "#0F172A";
        selectOptions.style.color = "#E5E7EB";
        button.style.backgroundColor = "#3B82F6";
        button.style.color = "#E5E7EB";
        signText.style.color = "#94A3B8";
        dateText.style.color = "#94A3B8";
        signSign.style.color = "#E5E7EB";
        dateDate.style.color = "#E5E7EB";
        horoscopeData.style.color = "#E5E7EB";

    }
}

toggleTheme();

btnToggle.addEventListener("click", () => {
    isLight = !isLight;
    toggleTheme();
})

let selectedSign = "Aries";

options.forEach(option => {
    option.addEventListener("click", () => {
        selectedSign = option.textContent;
        selectedValue.textContent = selectedSign;
        selectOptions.classList.remove("open");
    });
});

button.addEventListener("click", async () => {
    const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(
        `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${selectedSign.toUpperCase()}&day=TODAY`
    )}`;

    console.log("Button Clicked");


    try {
        console.log("Getting Data...");


        let eDiv = document.createElement("div");
        let eSpan = document.createElement("span");
        eSpan.className = "horoscope-data-emoji";

        horoscopeData.innerHTML = "";
        signSign.innerText = "";
        dateDate.innerText = "";

        eDiv.innerText = "Reaching your star";
        eSpan.innerText = " 🚀";

        eDiv.appendChild(eSpan);
        horoscopeData.appendChild(eDiv);
        let response = await fetch(url);
        let data = await response.json();
        signSign.innerText = selectedSign;
        dateDate.innerText = data.data.date;
        horoscopeData.innerText = data.data.horoscope_data;
        console.log(data);
    }
    catch (error) {
        console.log("Error Getting Data");
        let eDiv = document.createElement("div");
        let eSpan = document.createElement("span");
        eSpan.className = "horoscope-data-error-emoji";

        horoscopeData.innerHTML = "";

        eDiv.innerText = "Difficult reaching your star";
        eSpan.innerText = " ⭐";

        eDiv.appendChild(eSpan);
        horoscopeData.appendChild(eDiv);
        console.error(error);

    }

});




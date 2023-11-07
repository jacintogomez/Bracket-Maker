const screenSelector = document.getElementById("screenSelector");
const screen1 = document.getElementById("screen1"); //8 teams
const screen2 = document.getElementById("screen2"); //16 teams
const screen3 = document.getElementById("screen3"); //32 teams
const screen4 = document.getElementById("screen4"); //64 teams

screenSelector.addEventListener("change", function () {
    if (screenSelector.value === "screen1") {
        screen1.style.display = "block";
        screen2.style.display = "none";
        screen3.style.display = "none";
        screen4.style.display = "none";
    } else if (screenSelector.value === "screen2") {
        screen1.style.display = "none";
        screen2.style.display = "block";
        screen3.style.display = "none";
        screen4.style.display = "none";
    } else if (screenSelector.value === "screen3") {
        screen1.style.display = "none";
        screen2.style.display = "none";
        screen3.style.display = "block";
        screen4.style.display = "none";
    } else if (screenSelector.value === "screen4") {
        screen1.style.display = "none";
        screen2.style.display = "none";
        screen3.style.display = "none";
        screen4.style.display = "block";
    }
});

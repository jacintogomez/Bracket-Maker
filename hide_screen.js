const screenSelector = document.getElementById("screenSelector");
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");

screenSelector.addEventListener("change", function () {
    if (screenSelector.value === "screen1") {
        screen1.style.display = "block";
        screen2.style.display = "none";
    } else if (screenSelector.value === "screen2") {
        screen1.style.display = "none";
        screen2.style.display = "block";
    }
});

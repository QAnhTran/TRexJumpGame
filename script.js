const trex = document.getElementById("trex");
const blocks = document.getElementById("blocks");

console.log(trex.classList);
let jump = () => {
    if (trex.classList != "jumpClass") {
    trex.classList.add("jumpClass");
    }
    setTimeout(function() {
        trex.classList.remove("jumpClass");
    }, 500);
}

let collision = setInterval(function() {
    let trexTop = parseInt(window.getComputedStyle(trex).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(blocks).getPropertyValue("left"));

    if(blockLeft > 0 && blockLeft < 20 && trexTop >= 220) {
        alert("Game over");
        blocks.style.animation = "none";
        blocks.style.display = "none";
    }
}, 10)

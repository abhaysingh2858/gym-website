let topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "160px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px";
topBtn.style.background = "red";
topBtn.style.color = "white";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.display = "none";
topBtn.style.cursor = "pointer";

window.addEventListener("scroll", () => {
if (window.scrollY > 300) {
topBtn.style.display = "block";
} else {
topBtn.style.display = "none";
}
});

topBtn.addEventListener("click", () => {
window.scrollTo({ top: 0, behavior: "smooth" });
});
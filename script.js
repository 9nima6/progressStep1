const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progress = document.getElementById("progress");
const steps = document.getElementsByClassName("circle");

let activeIndex = 0;
const setActive = (toggle, index) => {
  progress.style.width = `${(toggle ? index : index - 1) * (100 / 3)}%`;
  steps[index].classList.toggle("active", toggle);
};
next.addEventListener("click", () => {
  activeIndex += 1;
  setActive(true, activeIndex);
  prev.disabled = false;
  if (activeIndex === steps.length - 1) {
    next.disabled = true;
  }
});
prev.addEventListener("click", () => {
  next.disabled = false;
  setActive(false, activeIndex);
  activeIndex -= 1;
  if (activeIndex === 0) {
    prev.disabled = true;
  }
});
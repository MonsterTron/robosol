function startAnimation(slider) {
  const mascott = slider.children[0],
        speed = 60,
        distancePx = (
            slider.offsetWidth
            - parseInt(getComputedStyle(slider).paddingLeft)
            - parseInt(getComputedStyle(slider).paddingRight)
            - mascott.offsetWidth
        ),
        duration = distancePx / speed;
  mascott.style.animation = `BackAndForth ${duration}s infinite linear`;
}

function animate() {
  startAnimation(document.getElementById('sl2'));
}

cbfunc = function(){
  animate();
  window.addEventListener('resize', animate);
};

if (
  document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
cbfunc();
} else {
document.addEventListener("DOMContentLoaded", cbfunc);
}
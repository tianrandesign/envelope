var animation = lottie.loadAnimation({
  container: document.getElementById("lottie"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "data.json"
	
});

/* Play&Stop by Single click/mouse over*/
/* Use this code below if by Single click*/
//
function start() {
	"use strict";
    animation.play();
	document.getElementById("playbtn").style.display = "none";
	document.getElementById("stopbtn").style.display = "inline";
}
document.querySelector('.start').addEventListener('click', start);

function stop() {
	"use strict";
    animation.goToAndStop(0);
	document.getElementById("stopbtn").style.display = "none";
	document.getElementById("playbtn").style.display = "inline";
}
document.querySelector('.stop').addEventListener('click', stop);

/* Use this code below if by mouse over and leave*/
/*document.getElementById('lottie').addEventListener('mouseover', function(){ animation.play(); })
document.getElementById('lottie').addEventListener('mouseleave', function(){ animation.stop(); });*/
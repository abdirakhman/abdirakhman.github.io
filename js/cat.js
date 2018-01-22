var cat = document.getElementById('cat');
var full_time = 0, last_time = new Date();
function update() {
  var now = new Date();
  var dt = (now - last_time) / 1000;
  last_time = now;
  full_time += dt;
//  console.log(full_time, dt);

  var W = window.innerWidth * 0.4, H = window.innerHeight * 0.4;

  var omega = 3.14 / 40;
  cat.style.left = W + W * Math.cos(5 * full_time * omega);
  cat.style.top  = H + H * Math.sin(6 * full_time * omega);
  var dx = -5 * W * Math.sin(5 * full_time * omega);
  var dy = 6 * H * Math.cos(6 * full_time * omega);
  var angle = 180 + Math.atan2(dy, dx) / Math.PI * 180;
  cat.style.transform = "rotate(" + angle + "deg)";
}

setInterval(update, 10);

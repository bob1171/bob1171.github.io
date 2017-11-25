if (window.location.href==='https://bob1171.github.io/home.html'){
var clicks = localStorage.getItem("clicks");

if (clicks === null) {
var clicks = 0;
localStorage.setItem("clicks", 0);}

function clicked(){
clicks++;
localStorage.setItem('clicks', clicks);
swal('You Clicked me!','You have clicked ' + clicks + ' times.','success');
}

var s = document.createElement('style')
s.innerHTML = '.clicker-button{border-radius:5px;background:#73AD21;width:80px;height:55px;text-align:center;display:center}'
document.head.appendChild(s)
}

s = document.createElement('script')
s.src = 'sweetalert2.min.js'
document.head.appendChild(s)

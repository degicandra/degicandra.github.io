//Function for Preloader
var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
loader.style.display = "none";
})

//Back to Top START
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//Back to Top END


//Navbar Background Transparent to Solid START
const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEl.classList.add('mask-custom');
    } else if (window.scrollY < 56) {
        navEl.classList.remove('mask-custom');
    }
});
//Navbar Background Transparent to Solid END


//Parallax START
// 1. ambil element main
const mainNode = document.querySelector('.gambar');
// 2. tambahkan event mousemove pada mainNode
mainNode.addEventListener('mousemove', (e) => {
 // 3. simpan posisi koordinat x dan y dari kursor lalu dibagi 9
 // pembagian 9 agar pergeseran koodinat x dan y tidak terlalu jauh
 var moveY = (e.clientY / -10);
// 4. update posisi gambar menggunakan property: backgroundPosition
 mainNode.style.backgroundPosition = '0px ' + moveY + 'px';
});
//Parallax END
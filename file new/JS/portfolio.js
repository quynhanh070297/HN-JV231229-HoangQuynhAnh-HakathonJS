const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};
const sr = ScrollReveal({
  distance: "25px",
  duration: 2500,
  reset: true,
});
sr.reveal(".home-text", { delay: 190, origin: "bottom" });
sr.reveal(".about,.sevices,.portfolio,.contact", {
  delay: 190,
  origin: "bottom",
});





function renderServices() {

  let arrServices = JSON.parse(localStorage.getItem("thongtinServices")) || [];
  console.log(arrServices);
  if (arrServices.length != 0) {
    for (let i = 0; i < arrServices.length; i++) {
      document.getElementById("services-content").innerHTML += `
    <div class="box">
          <img src="../Image/${arrServices[i].img}" alt="#" />
          <h3>${arrServices[i].title}</h3>
          <p>
          ${arrServices[i].content}
          </p>
        </div>
    `;
    }
  }

}
renderServices() ;


function renderMyPortfolio() {
  let arrMyPortfolio =
    JSON.parse(localStorage.getItem("thongtinMyPortfolio")) || [];
    for (let i = 0; i < arrMyPortfolio.length; i++) {
      console.log(arrMyPortfolio);
      document.getElementById("portfolio-content").innerHTML += `
    <div class="row">
          <img src="../Image/${arrMyPortfolio[i].img}" alt="" />
          <div class="main-row">
            <div class="row-text">
              <h6>${arrMyPortfolio[i].title}</h6>
            </div>
            <div class="row-icon">
              <i class="bx bx-heart"></i>
            </div>
          </div>
          <h3>${arrMyPortfolio[i].content}</h3>
        </div>

    `;
  }
}

renderMyPortfolio();

// function renderAdmIf() {
//   let adIf = JSON.parse(localStorage.getItem("admIf"));
//   document.getElementById("home").innerHTML = `
//   <div class="home-text" >
//         <h1>${adIf.text}<br />
//         ${adIf.text1}<br />
//             <span style="color: transparent;
//             background: linear-gradient(to right, #ff0000, #0788f0);
//             animation: colorChange 5s linear infinite;
//             background-clip: text;"> ${adIf.text2}</span><br />
//             ${adIf.text3}<br />${adIf.text4}</h1>
//         <h3>${adIf.textMini}</h3>
//         <a href="#" class="btn"> Hire Me</a>
//       </div>
//       <div class="background-img">
//         <img style= "border-radius: 50% ; border: 10px;
//         width: 60vh;  display: flex;
      
//         " src="../Image/${adIf.img}" alt="" />
//       </div>
//   `;
// }
// renderAdmIf()
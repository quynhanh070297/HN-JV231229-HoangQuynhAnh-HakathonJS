
let portfolioList = [
    {
      id: 1,
      img: "z5174096355594_f972f3eee8a1970ce418ac98696f4673.jpg",
      title: "Developerment",
      content: "Mobile app landing design & Services",
    },
    {
      id: 2,
      img: "z5174110788767_88fb7fc2ac0418d273574d4c0976f52c.jpg",
      title: "Developerment",
      content: "Mobile app landing design & Services",
    },
    {
      id: 3,
      img: "z5174108148277_efbf1c50a4cd2d0b72f50e91e4b143c0.jpg",
      title: "Developerment",
      content: "Mobile app landing design & Services",
    },
    {
      id: 4,
      img: "z5174103355577_583bcccfb308d6eec48db1c3dfc59891.jpg",
      title: "Developerment",
      content: "Mobile app landing design & Services",
    },
    {
      id: 5,
      img: "z5174101466373_b72a62a936e3c66c0164b6e4dfd0595d.jpg",
      title: "Developerment",
      content: "Mobile app landing design & Services",
    },
    {
      id: 6,
      img: "z5174105880948_2d966099b0429156e6bc599ceb474373.jpg",
      title: "Developerment",
      content: "Mobile app landing design & Services",
    },
  ];
  
  localStorage.setItem("thongtinMyPortfolio", JSON.stringify(portfolioList));
let servicesList= [
    {
    id: 1,
    img: "z5174079439735_71433a06288419cb2eab09d68f810eef.jpg",
    title: "Mobile App",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur",
   },
   {
    id: 2,
    img: "z5174084918235_5c766e182a295e944fb5cc94e2e723d0.jpg",
    title: "Web Design",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur",
   },
   {
    id: 3,
    img: "z5174089142755_3b0f15708b48c06169d8108c6af9a0a5.jpg",
    title: "Video Editting",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur",
   }
  ]
  
  localStorage.setItem("thongtinServices", JSON.stringify(servicesList));



function serv() {
    document.getElementById('maints').innerHTML=`
    <div class="maint">
                <div class="maint-id">
                    <input id="anhServices" type="text" placeholder="Link Ảnh">
                    <input id="tieudeServices" type="text" placeholder="Tên dự án">
                    <input id="textServices" type="text" placeholder="Nội Dung ">
                    <button onclick="saveServices()">Save</button>
                </div>
                <table border=1  style="  position: absolute;
                top: 200px;
                left 12000px;"
                >
                <caption>Edit Services</caption>
            <thead >
                <tr>
                    <th>
                        Số Thứ Tự
                    </th>
                    <th>
                        Tên Dự Án
                    </th>
                    <th>
                        Nội Dung
                    </th>
                    <th>
                    Link Image

                </th>
                    <th>
                        Action
                    </th>

                </tr>
            </thead>
            <tbody id="tableText">
                
            </tbody>
        </table>
            </div>
            `
            
            
let arrServices = JSON.parse(localStorage.getItem('thongtinServices'))||[];
console.log(arrServices);
 if(arrServices.length!=0){
  for (let i = 0; i < arrServices.length; i++) {

    document.getElementById("tableText").innerHTML+=`
    <tr>
         <td>
         
        ${arrServices[i].id}
        </td>
                    <td>
                    ${arrServices[i].img}
                    </td>
                    <td>
                    ${arrServices[i].title}
                    </td>
                    <td>
                    ${arrServices[i].content}
                    </td>
                    <td>
                    <button id= "btn">Edit</button>
                        <button onclick="xoas(${arrServices[i].id})">xoa</button>
                    </td>
                </tr>
    `
  }
 }
}
function saveServices() {
    let thongtinServices =JSON.parse(localStorage.getItem('thongtinServices'))||[];
    let img = document.getElementById("anhServices").value;
    let tieude = document.getElementById("tieudeServices").value;
    let noidung = document.getElementById("textServices").value;
    let thongtinServicesx={
        id:Date.now(),
        img:img,
        title:tieude,
        content:noidung,
    }
    thongtinServices.push(thongtinServicesx);
    localStorage.setItem("thongtinServices",JSON.stringify(thongtinServices));
    serv();
}

  let flag = -1 ; 

function editServices(index) {
    let thongtinServices =JSON.parse(localStorage.getItem('thongtinServices'))||[];
 img.value = thongtinServices[index].img; 
 tieude.value = thongtinServices[index].title; 
 noidung.value= thongtinServices[index].content;
  
 document.getElementById("btn").addEventListener("click");
}



function xoas(id) {
    let arrServices = JSON.parse(localStorage.getItem('thongtinServices'))||[];

  for (let i = 0; i < arrServices.length; i++) {
    if (id==arrServices[i].id) {
        arrServices.splice(i,1);
        localStorage.setItem("thongtinServices",JSON.stringify(arrServices));
    }
  }
  serv()
}
function renderMyPortfolio() {
    document.getElementById('maints').innerHTML=`
    <div class="maint">
                <div class="maint-id">
                    <input id="anhMyPortfolio" type="text" placeholder="link anh">
                    <input id="tieudeMyPortfolio" type="text" placeholder="tieu de">
                    <input id="textMyPortfolio" type="text" placeholder="noi dung ">
                    <button onclick="editMyPortfolio()">luu</button>
                </div>
                <table border=1 class="maint-id" 
                style="  position: absolute;
                top: 200px;
                left 12000px;">
                <caption>editMyPortfolio</caption>
            <thead >
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Noi dung
                    </th>
                    <th>
                        Tieu de
                    </th>
                    <th>
                        action
                    </th>
                </tr>
            </thead>
            <tbody id="tableText">
                
            </tbody>
        </table>
            </div>
            `
            
            let arrMyPortfolio = JSON.parse(localStorage.getItem('thongtinMyPortfolio'))||[];
 if(arrMyPortfolio.length!=0){
  for (let i = 0; i < arrMyPortfolio.length; i++) {
    document.getElementById("tableText").innerHTML+=`
    <tr>
                    <td>
                    ${arrMyPortfolio[i].img}
                    </td>
                    <td>
                    ${arrMyPortfolio[i].title}
                    </td>
                    <td>
                    ${arrMyPortfolio[i].content}
                    </td>
                    <td>
                        <button onclick="xoaMyPortfolio(${arrMyPortfolio[i].id})">xoa</button>
                    </td>
                </tr>
    `
  }
 }
}
function editMyPortfolio() {
    let thongtinMyPortfolio =JSON.parse(localStorage.getItem('thongtinMyPortfolio'))||[];
    let img = document.getElementById("anhMyPortfolio").value;
    let tieude = document.getElementById("tieudeMyPortfolio").value;
    let noidung = document.getElementById("textMyPortfolio").value;
    let thongtinServicesx={
        id:Date.now(),
        img:img,
        tieude:tieude,
        noidung:noidung,
    }
    thongtinMyPortfolio.push(thongtinServicesx)
    localStorage.setItem("thongtinMyPortfolio",JSON.stringify(thongtinMyPortfolio));
    renderMyPortfolio()
}
function xoaMyPortfolio(id) {
    let arrMyPortfolio = JSON.parse(localStorage.getItem('thongtinMyPortfolio'))||[];

  for (let i = 0; i < arrMyPortfolio.length; i++) {
    if (id==arrMyPortfolio[i].id) {
        arrMyPortfolio.splice(i,1);
        localStorage.setItem("thongtinMyPortfolio",JSON.stringify(arrMyPortfolio));
    }
  }
  renderMyPortfolio()
}

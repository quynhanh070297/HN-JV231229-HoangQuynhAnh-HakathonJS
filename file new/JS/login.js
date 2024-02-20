 const admin = [{
    admin : "quynhanh",
    pass : 12345678,
 }
]
localStorage.setItem("ad", JSON.stringify(admin))  ;

// Đây là một admin cho sẵn để đăng nhập 
// Nếu không xoá đi thì khi làm CRUD sẽ bị lỗi ạ.
// Nó bị Reset lại giá trị ban đầu.

const arrAdmin = JSON.parse(localStorage.getItem("ad")); 

function login (){
    event.preventDefault(); 
   let adminTk = document.getElementById("tk").value; 
   let adminMk = document.getElementById("mk").value; 

   for (let i = 0; i < arrAdmin.length; i++) {
     if (arrAdmin[i].admin == adminTk && arrAdmin[i].pass == adminMk) {
    window.location.href="./admin.html"
    return;
     }
   }
   alert("Tài khoản không chính xác")
}



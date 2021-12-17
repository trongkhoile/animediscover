//xáo trộn các ảnh trên trang
function shuffle(mang) {
  let currentIndex = mang.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [mang[currentIndex], mang[randomIndex]] = [
      mang[randomIndex],
      mang[currentIndex],
    ];
  }

  return mang;
}
// mảng tìm kiếm
var searcharr = [{ name: "Hyouka" }, { name: "Yuuta" }];
// mảng ảnh
var imgarr = [
  {
    nameid: "Hyouka",
    img: "https://media3.giphy.com/media/kOCftLxBJCRCU/giphy.gif?cid=ecf05e47csezkws081hvgtbga52ogfgltck2xf208rk4w0hy&rid=giphy.gif&ct=g",
  },
  {
    nameid: "Hyouka",
    img: "https://media2.giphy.com/media/6DNtXFxz7RHxK/giphy.gif?cid=ecf05e47csezkws081hvgtbga52ogfgltck2xf208rk4w0hy&rid=giphy.gif&ct=g",
  },
  {
    nameid: "Hyouka",
    img: "https://media3.giphy.com/media/3o7aCX1aK0V2324956/giphy.gif?cid=ecf05e47csezkws081hvgtbga52ogfgltck2xf208rk4w0hy&rid=giphy.gif&ct=g",
  },
  {
    nameid: "Hyouka",
    img: "https://media2.giphy.com/media/6ZEFy5pCwwG5y/giphy.gif?cid=ecf05e477ibnemv2ikecg2sdl589yh3ltknalvj9zkd1b1y4&rid=giphy.gif&ct=g",
  },
  {
    nameid: "Hyouka",
    img: "https://media3.giphy.com/media/xT9IgMwRFVcbF0HCcU/giphy.gif?cid=ecf05e47u1vnj9j25ryjb1slbm0ouzt36tke3simklmfofj7&rid=giphy.gif&ct=g",
  },
  {
    nameid: "Hyouka",
    img: "https://media2.giphy.com/media/8t0Ky79zROgeY/giphy.gif?cid=ecf05e47ig33vlyn9ptxqde0hnenolec142cerjx9rj8ybm8&rid=giphy.gif&ct=g",
  },
  {
    nameid: "Hyouka",
    img: "https://media0.giphy.com/media/EJR8r8shCC8jS/giphy.gif?cid=ecf05e471sktrbjz4izzv9zsys9696pu5kapl3w8ed5hfrx0&rid=giphy.gif&ct=g",
  },
  //
  {
    nameid: "Hyouka",
    img: "https://i.pinimg.com/564x/50/db/fc/50dbfc17226716fdd4375ebcac7a4b94.jpg",
  },
  {
    nameid: "Hyouka",
    img: "https://i.pinimg.com/564x/ed/c4/eb/edc4eb14a7b7b26b800f0da7c72a9db6.jpg",
  },
  {
    nameid: "Hyouka",
    img: "https://i.pinimg.com/564x/6e/37/13/6e371317342c80fa9765a96ebab7e71f.jpg",
  },
  {
    nameid: "Hyouka",
    img: "https://i.pinimg.com/564x/3d/df/e8/3ddfe8a1e34863e7d0f96f29c9a6c72a.jpg",
  },
  {
    nameid: "Hyouka",
    img: "https://i.pinimg.com/564x/14/98/e5/1498e523c2a87f01479892f90804e192.jpg",
  },
  {
    nameid: "Hyouka",
    img: "https://i.pinimg.com/564x/57/7c/f4/577cf4815277724c3e70930dcd1f89b9.jpg",
  },
  {
    nameid: "Hyouka",
    img: "https://i.pinimg.com/564x/04/59/22/045922ee64d3925c2f6bab18485ab508.jpg",
  },
  {
    nameid: "Hyouka",
    img: "https://i.pinimg.com/564x/34/9f/ff/349fff487b292fb37847ec4563c025f3.jpg",
  },
  {
    nameid: "Hyouka",
    img: "https://i.pinimg.com/564x/fb/6d/34/fb6d3458fa64ba2f8ad176e761ae7fd9.jpg",
  },
  //block
  {
    nameid: "Yuuta",
    img: "https://i.pinimg.com/564x/de/c4/8b/dec48b74c72e3b964225a211b8022e2d.jpg",
  },
  {
    nameid: "Yuuta",
    img: "https://i.pinimg.com/564x/b5/00/d0/b500d080846359a465c519707fdafa5c.jpg",
  },
  {
    nameid: "Yuuta",
    img: "https://i.pinimg.com/564x/0d/59/dc/0d59dc6b5888468d817446530f5fb44d.jpg",
  },
  {
    nameid: "Yuuta",
    img: "https://i.pinimg.com/736x/1b/66/22/1b66224ac54f16300cf5803670327417.jpg",
  },
  {
    nameid: "Yuuta",
    img: "https://i.pinimg.com/564x/cd/49/3e/cd493eabbcbddd29951dcc49e6157755.jpg",
  },
  {
    nameid: "Yuuta",
    img: "https://i.pinimg.com/736x/2f/55/1a/2f551a12c31af1c57cd18e4656ab1f0f.jpg",
  },
  {
    nameid: "Yuuta",
    img: "https://i.pinimg.com/736x/2f/55/1a/2f551a12c31af1c57cd18e4656ab1f0f.jpg",
  },
  //
  {
    nameid: "Yuuta",
    img: "https://i.pinimg.com/564x/af/06/c9/af06c9c3b4b6bde5220bd9201353aaa6.jpg",
  },
  {
    nameid: "Yuuta",
    img: "https://i.pinimg.com/564x/d8/5e/1b/d85e1bf1e52d4a46272cd76579e21f27.jpg",
  },
  {
    nameid: "Yuuta",
    img: "https://i.pinimg.com/564x/90/d0/32/90d032d9fcad15d9240821abe28b7fdc.jpg",
  },
  {
    nameid: "Yuuta",
    img: "https://i.pinimg.com/564x/83/16/c5/8316c5d5561d9dbf97997042bb2adfb8.jpg",
  },
  {
    nameid: "Yuuta",
    img: "https://i.pinimg.com/564x/b3/28/11/b328112ab79a30f8162311cf25a476b7.jpg",
  },
  {
    nameid: "Yuuta",
    img: "https://i.pinimg.com/564x/d1/ac/31/d1ac312636b31166d1bc6e0b0d44497a.jpg",
  },
  {
    nameid: "Yuuta",
    img: "https://i.pinimg.com/564x/f2/1b/f7/f21bf75651d6f48ccd6993430eb2d4fd.jpg",
  },
];
// mảng update
var updatearr = [
  {
    name: "Hyouka",
    img1: "https://i.pinimg.com/564x/50/db/fc/50dbfc17226716fdd4375ebcac7a4b94.jpg",
    img2: "https://i.pinimg.com/564x/ed/c4/eb/edc4eb14a7b7b26b800f0da7c72a9db6.jpg",
    img3: "https://i.pinimg.com/564x/6e/37/13/6e371317342c80fa9765a96ebab7e71f.jpg",
  },
  {
    name: "Yuuta",
    img1: "https://i.pinimg.com/736x/1b/66/22/1b66224ac54f16300cf5803670327417.jpg",
    img2: "https://i.pinimg.com/564x/f2/1b/f7/f21bf75651d6f48ccd6993430eb2d4fd.jpg",
    img3: "https://i.pinimg.com/564x/b3/28/11/b328112ab79a30f8162311cf25a476b7.jpg",
  },
];
// gọi hàm refresh , mỗi khi load trang sẽ kích hoạt hàm này
shuffle(imgarr);
var input = document.getElementById("myInput");
// định nghĩa hàm xử lý myFunction
function myFunction() {
  var filter, ul, li, a, i;
  // lấy giá trị người dùng nhập
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  // Nếu filter không có giá trị thị ẩn phần kết quare\
  if (!filter) {
    ul.style.display = "none";
  } else {
    // lặp qua tất cả các thẻ li chứa kết quả
    for (i = 0; i < li.length; i++) {
      // lấy thẻ a trong các thẻ li
      a = li[i].getElementsByTagName("a")[0];
      // kiểm tra giá trị nhập có tôn tại trong nội dung thẻ a
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        //nếu có hiển thị phàn tử ul và các thẻ li đó
        ul.style.display = "block";
        li[i].style.display = "";
      } else {
        // nếu không ẩn các thẻ li
        li[i].style.display = "none";
      }
    }
  }
}
//gán sự kiện cho thẻ input
input.addEventListener("keyup", myFunction);
//in ra các mục tìm kiếm
for (e of searcharr) {
  const html = `<div class="hover"><li onclick="choose(this)" class="" ><a style="color:black;font-size:20px;"  >${e.name}</a></li></div>`;
  $("#myUL").append(html);
}
//in ra các ảnh và gif trên trang chủ
var so = 1;
for (e of imgarr) {
  const html = ` <div class="fr container ml-3">
  <br> 
  <img class="img rounded" src="${e.img}"  style="width:100%"/> 
  </div>
  `;

  $(".framesimg" + so).append(html);
  var so = so + 1;
  if (so == 4) {
    var so = 1;
  }
}
// ấn nút refresh
function refresh() {
  // xóa trang cũ đi
  $(".fr").remove();
  // gọi lại hàm refresh lại
  shuffle(imgarr);
  // in lại sau khi đã refresh
  var so = 1;
  for (e of imgarr) {
    // localstr rỗng thì in rf full
    if (localStorage.data == null) {
      const html = ` <div class="fr container ml-3">
    <br> 
    <img class="img rounded" src="${e.img}"  style="width:100%"/> 
    </div>
    `;

      $(".framesimg" + so).append(html);

      var so = so + 1;
      if (so == 4) {
        var so = 1;
      }
    } else {
      // nếu lcstr có dữ liệu thì chỉ in ra dữ liệu cần
      if (localStorage.data == e.nameid) {
        const html = ` <div class="fr container ml-3">
        <br> 
        <img class="img rounded" src="${e.img}"  style="width:100%"/> 
        </div>
        `;

        $(".framesimg" + so).append(html);
        var so = so + 1;
        if (so == 4) {
          var so = 1;
        }
      }
    }
  }
}
//in ra toàn bộ dữ liệu khi ấn nút showall
function showall() {
  $(".fr").remove();
  shuffle(imgarr);
  var so = 1;
  for (e of imgarr) {
    const html = ` <div class="fr container ml-3">
  <br> 
  <img class="img rounded" src="${e.img}"  style="width:100%"/> 
  </div>
  `;

    $(".framesimg" + so).append(html);
    var so = so + 1;
    if (so == 4) {
      var so = 1;
    }
  }
}
//chọn từ ô tìm kiếm
function choose(e) {
  var namee = e.children[0].innerText;
  shuffle(imgarr);
  localStorage.setItem("data", namee);
  // in ra dữ liệu tương ứng
  $(".fr").remove();
  var so = 1;
  for (e of imgarr) {
    if (e.nameid == namee) {
      const html = ` <div class="fr container ml-3">
      <br> 
      <img class="img rounded" src="${e.img}"  style="width:100%"/> 
      </div>
      `;

      $(".framesimg" + so).append(html);
      var so = so + 1;
      if (so == 4) {
        var so = 1;
      }
    }
  }
}
// chuyển hướng về trang chủ
function redicter() {
  window.location.assign("index.html");
}
// thêm dữ liệu vào phần update
for (e of updatearr) {
  const html = `  <div class="" style="background-color: #E6E6E6;">
    <h6 class="pt-2 pb-3" style="color:black">Add Topic "${e.name}"</h6>

    <div class="pb-3 d-flex flex-row justify-content-around">
    <img class="imgupdt rounded"
      src="${e.img1}">
    <img class="imgupdt rounded"
      src="${e.img2}">
    <img class="imgupdt rounded"
      src="${e.img3}">
    </div>
    </div>
    <br> `;
  $(".update").append(html);
}
//ẩn hiện phần update và phần tìm kiếm khi visit trang
function update1() {
  $(".update").hide(200);
  $("#myUL").hide(100);
}
function update() {
  $(".update").toggle(200);
}
//vào trang đăng ký
function chuyenhuong() {
  window.location.assign("signin.html");
}

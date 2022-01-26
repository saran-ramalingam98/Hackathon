button = document.createElement("button");
button.setAttribute("onclick", "func()");
button.setAttribute("class","ms-5")
button.innerHTML = "Search";
document.body.appendChild(button);

hr=document.createElement("hr")
document.body.append(hr)

var ans = document.createElement("div");
ans.setAttribute("id", "ans");
document.body.append(ans);

var row = document.createElement("div");
row.classList.add("row");
row.setAttribute("id", "mm");
// row.innerText="hello"
document.body.appendChild(row);

function func() {
  var a = document.getElementById("search").value;

  str = "";
  //document.getElementById("ans").innerHTML=a
  if (a == "") {
    document.getElementById("ans").innerHTML = "Please Enter username";

    row.innerHTML = "";
  } else {
    fetch("https://avatars.githubusercontent.com/u/98377456?v=4" + a + "/repos")
      .then((bdata) => {
        console.log(bdata);
        fetch(bdata.url)
          .then((c) => c.json())
          .then((p) => {
            //row.innerHTML = `<div >Search by Repository Name:<input type="text" placeholder="search Repo"id="repo"> </div>`;

   


             console.log(p[1].owner.avatar_url)

            document.getElementById("ans").innerHTML = "";
            for (let i = 0; i < p.length; i++) {
              console.log("inside url");
              console.log(p[i]);
              console.log(p[1].clone_url);

              str += p[i].clone_url;
              k=p[i].contents_url

              // document.getElementById("mm").innerHTML=str

              row.innerHTML += `<div class="col-sm-5 col-md-3 col-lg-3 col-xl-4 my-2 pp">
                <div>
                <div class="card-header text-center"> User Name: ${p[i].owner.login}<div>
                Repository Name:<a href=${p[i].clone_url}>${p[i].name}</a>
                <div>Forks_count: ${p[i].forks_count}<br>
                Stars_count: ${p[i].stargazers_count}</div>
                
                <div>
                </div>`;
            }
        
          })
          .catch((er) => {
            console.log(er);
            document.getElementById("ans").innerHTML = "Invalid USer Name";
          });

        // if(bdata.redirected==false){
        //     console.log("No valid User Present")
        // }
        console.log(bdata);
      })
      .catch((er) => {
        console.log("er");
      });
  }
}

// function repo() {
//   var a = document.getElementById("search").value;
//   count = 0;

//   fetch("https://avatars.githubusercontent.com/u/98377456?v=4" + a + "/repos").then((bdata) => {
//     console.log(bdata);
//     fetch(bdata.url)
//       .then((c) => c.json())
//       .then((p) => {
//         var b = document.getElementById("repo").value;
//         console.log(p);

//         if (b == "") {
//           document.getElementById("ans").innerHTML = "";
//         } else {
//           console.log(b + "entering");
//           row.innerHTML = "";
//           for (let i = 0; i < p.length; i++) {
//             if (b == p[i].name) {
//               console.log(p[i]);
//               count++;
//               document.getElementById("ans").innerHTML = "";
//               row.innerHTML = `<div >Search by Repository Name:<input type="text" id="repo"> </div>`;

//               row.innerHTML += `<div> <button onclick="repo()" > Search Repo </button> </div>`;

//               row.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 my-2">
//             <div>
//             <div class="card-header text-center"> User Name: ${p[i].owner.login}<div>
//             Repository Name:<a href=${p[i].clone_url}>${p[i].name}</a>
//             <div>Default Branch: ${p[i].default_branch}<br>
//             Visibility: ${p[i].visibility}</div>
//             <button onclick="list(k)">Display list </button>
//             <div id="dis"></div>
//             <div>
//             </div>`;
//              // console.log(count);
//             }

//             if (count == 0) {
//               document.getElementById("ans").innerHTML = "No Match Found";
//             }
//           }
//         }
//       });
//   });
// }
// function list(k){
// // console.log(k[0].name)
//  m=k.split("/")
//  m.pop()

// n=m.join("/")
// console.log(n)

// fetch(n).then((kdata)=>kdata.json())
// .then((kjson)=>{

//   str1=""
//   console.log(kjson)
//   for(let i=0;i<kjson.length;i++){
//     str1+=i+"."+kjson[i].name
//     str1+="\n"
//   }
//   console.log(str1)
//   if(str1==""){
//     alert("No Folder UP")
//   }else{
//   alert(str1)

//   str1=""
//   }
// })
//}
document.body.innerHTML=`
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" onclick="bad()">BREAKING BAD</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" onclick="toggleName()">NAME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onclick="toggleId()">ID</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onclick="bad(innerText)">ALL CHARACTERS</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="search-bottom-container">
<div class="head">
  <input type="search" id="search" class="search" placeholder="search..."/>
  <button class="search-bottom" onclick="bad(innerText)">search</button>
</div>
<div class="idSearch">
<input type="search" id="id" class="search" placeholder="search..."/>
<button class="search-bottom" onclick="bad(innerText)">id</button>
</div>
</div>
<section class="cat-list">  </section>`
function toggleName(){
let searchName=document.querySelector(".head")
let searchId=document.querySelector(".idSearch")
searchName.style.display=
searchName.style.display=="block"?"none":"block";
searchId.style.display="none"
}
function toggleId(){
let searchId=document.querySelector(".idSearch")
let searchName=document.querySelector(".head")
searchId.style.display=
searchId.style.display=="block"?"none":"block";
searchName.style.display="none"
}
function bad(value){
  let chardetails= document.querySelector  (".cat-list")
  chardetails.innerHTML=" "
    console.log("working")
let chrName=document.querySelector("#search").value
let chrId=document.querySelector("#id").value

let url=`https://breakingbadapi.com/api/`
if (value=="search")
{url+=`characters?name=${chrName}`}
else if (value=="id")
{url+=`characters/${chrId}`}
else if (value=="ALL CHARACTERS")
{url+=`characters`}
else{
    url+=`character/random`
}

fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Something went wrong');
    }
  })
  .then((responseJson) => {
      console.log(responseJson)
      responseJson.forEach(data=>{
    let chardetails= document.querySelector  (".cat-list")
     chardetails.innerHTML+=`
      <div class="break">
      <div>
      <img class="image" src="${data.img}"/>
      </div>
      <div>
      <p>NAME: ${data.name}</p>
      <p>OCCUPATION: ${data.occupation}</p>
      <p>NICK NAME: ${data.nickname}</p>
      <p>PORTRAYED: ${data.portrayed}</p>
      <p>APPERANCE: ${data.appearance}</p>
      <p>STATUS: ${data.status}</p>
      </div>
      <div>
      `
    })
  })
  .catch((error) => {
    console.log(error)
  });
}
bad();               

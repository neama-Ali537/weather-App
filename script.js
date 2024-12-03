let navLinks = document.querySelectorAll("ul li");
let finalData = [];
async function getDataFromApi(contryCode) {
  let response = await fetch(
    `http://api.weatherapi.com/v1/search.json?key=a6e0022048474bb486b135539242311&q=${contryCode}`
  );

  let data = await response.json();
  finalData = data;
  displayDataToDom();
  console.log(finalData);
}

getDataFromApi("Canada");

function displayDataToDom() {

  let cartona = ``;
  for (let i = 0; i < finalData.length; i++) {
    cartona += `
    <div class = "box1 col-md-3 col-sm-3">
      <h4>${finalData[i].country}</h4>
    </div>
    <div class="box col-md-3 col-sm-3">
     <p>${finalData[i].name}</p>
    </div>
     <div class="box1 col-md-3 col-sm-3 ">
     <p>Temperature is :<div class="fs-4"> ${Math.floor(finalData[i].lat)} C</div></p>
     <i class="fs-2 fas fa-sun"></i>
     </div>
    <div class="box col-md-3 col-sm-3"> 
     <p>${finalData[i].region}</p>
    </div>



`;
  }
  document.getElementById("displaydata").innerHTML = cartona;
}

navLinks.forEach((item) => {
  item.addEventListener("click", (e) => {
    let contryCode = e.target.getAttribute("code-Contry");
    getDataFromApi(contryCode);
  });
});

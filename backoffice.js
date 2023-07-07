const URL = "https://striveschool-api.herokuapp.com/api/product/";

fetch("https://striveschool-api.herokuapp.com/api/product/", {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3Y2RjMjEyYjUwYzAwMTQ5ZTRmOTAiLCJpYXQiOjE2ODg3MTg3ODYsImV4cCI6MTY4OTkyODM4Nn0.xr7JGljLz9_Rumg8HssBFFGp1cRxIglRE92308v5b8Q",
  },
});


const addressBarContent = new URLSearchParams(location.search);

const fishId = addressBarContent.get("id");
console.log("FISHID", fishId);

if (fishId) {

  document.querySelector(".btn-primary").innerText = "Modifica prodotto";
  
  document.querySelector("h1").innerText = "Pescheria - Modifica pesce";
  
  fetch(URL + fishId,{
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3Y2RjMjEyYjUwYzAwMTQ5ZTRmOTAiLCJpYXQiOjE2ODg3MTg3ODYsImV4cCI6MTY4OTkyODM4Nn0.xr7JGljLz9_Rumg8HssBFFGp1cRxIglRE92308v5b8Q",
    },
  })
  
    .then((res) => {
      if (res.ok) {
        return res.json(); 
      } else {
        throw new Error("Questo pesce è fuggito");
      }
    })
    .then((detail) => {
      console.log("DETAIL", detail);
   
      const nameInput = document.getElementById("fish-name");
      const descriptionInput = document.getElementById("fish-description");
      const priceInput = document.getElementById("fish-price");
      const fishBrand = document.getElementById("fish-brand");
      const fishImage = document.getElementById("fish-image");

      nameInput.value = detail.name;
      console.log(nameInput.value)
      descriptionInput.value = detail.description;
      priceInput.value = detail.price;
      fishImage.value = detail.imageUrl;
      fishBrand.value = detail.brand;
      const deleteButton = document.getElementById('delete')
      console.log(deleteButton)
      deleteButton.addEventListener('click',function (){
        fetch(`https://striveschool-api.herokuapp.com/api/product/${fishId}`, {
          method: 'DELETE',
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3Y2RjMjEyYjUwYzAwMTQ5ZTRmOTAiLCJpYXQiOjE2ODg3MTg3ODYsImV4cCI6MTY4OTkyODM4Nn0.xr7JGljLz9_Rumg8HssBFFGp1cRxIglRE92308v5b8Q",
          }
        })
        .then(response => {
          location.assign('index.html')
         alert('Il pesce è scappato')
        })
        .catch(error => console.log(error));
       
      })
    })
   
}

const fishForm = document.getElementById("fish-form");
fishForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("pesco i pesci");

  const nameInput = document.getElementById("fish-name");
  const descriptionInput = document.getElementById("fish-description");
  const priceInput = document.getElementById("fish-price");
  const fishBrand = document.getElementById("fish-brand");
  const fishImage = document.getElementById("fish-image");

  const newFish = {
    name: nameInput.value,
    description: descriptionInput.value,
    price: priceInput.value,
    brand: fishBrand.value,
    imageUrl: fishImage.value,
  };

  console.log("ecco i valori recuperati dal form:", newFish);



  const URL = "https://striveschool-api.herokuapp.com/api/product/";
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3Y2RjMjEyYjUwYzAwMTQ5ZTRmOTAiLCJpYXQiOjE2ODg3MTg3ODYsImV4cCI6MTY4OTkyODM4Nn0.xr7JGljLz9_Rumg8HssBFFGp1cRxIglRE92308v5b8Q",
    },
  });


  let urlToUse;
  if (fishId) {
    urlToUse = URL + "/" + fishId;
  } else {
    urlToUse = URL;
  }

  let methodToUse;
  if (fishId) {
    methodToUse = "PUT";
  } else {
    methodToUse = "POST";
  }

  fetch(urlToUse, {
    method: methodToUse,
    body: JSON.stringify(newFish),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3Y2RjMjEyYjUwYzAwMTQ5ZTRmOTAiLCJpYXQiOjE2ODg3MTg3ODYsImV4cCI6MTY4OTkyODM4Nn0.xr7JGljLz9_Rumg8HssBFFGp1cRxIglRE92308v5b8Q",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        alert("PESCE INSERITO!");

        nameInput.value = "";
        descriptionInput.value = "";
        priceInput.value = "";
        fishImage.value = "";
        fishBrand.value = "";
        location.assign("index.html");
      } else {
        throw new Error("Errore nell'inserimento del pesce");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});



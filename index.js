const URL = "https://striveschool-api.herokuapp.com/api/product";

const getFishData = function () {
  fetch(URL, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3Y2RjMjEyYjUwYzAwMTQ5ZTRmOTAiLCJpYXQiOjE2ODg3MTg3ODYsImV4cCI6MTY4OTkyODM4Nn0.xr7JGljLz9_Rumg8HssBFFGp1cRxIglRE92308v5b8Q",
    },
  })
    .then((res) => {
      console.log("Risposta della GET", res);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nella chiamata API");
      }
    })
    .then((pesci) => {
      console.log("PESCI", pesci);

      const spinnerContainer = document.getElementById("spinner-container");
      spinnerContainer.classList.add("d-none");

      pesci.forEach((pesce) => {
        let newCol = document.createElement("div");
        newCol.classList.add("col", "col-12", "col-sm-6", "col-md-3");
        newCol.innerHTML = `
            <div class="card">
                <img
                  src=${pesce.imageUrl}
                  class="card-img-top"
                  alt="fish placeholder image"
                />
                <div class="card-body">
                  <h5 class="card-title">${pesce.name}</h5>
                  <p class="card-text">
                    ${pesce.description}
                  </p>
          
                  <p class="card-text fw-bold">
                    ${pesce.price}€
                  </p>
                  <a href="./detail.html?id=${pesce._id}" class="btn btn-primary">Scopri di più</a>
                  <a href="backoffice.html?id=${pesce._id}"><button type="submit" class="btn btn-info" id="modifica">
                  Modifica
                </button></a>
                </div>
         
              </div>
          `;
        const pesciRow = document.getElementById("pesci-row");
        console.log(pesciRow);
        pesciRow.appendChild(newCol);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

getFishData();

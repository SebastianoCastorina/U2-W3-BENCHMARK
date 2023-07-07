const URL = 'https://striveschool-api.herokuapp.com/api/product/'

const addressBarContent = new URLSearchParams(location.search)

const fishId = addressBarContent.get('id')
console.log('fishID', fishId)
console.log(URL + fishId)

fetch(URL + fishId,{
    headers: {
    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3Y2RjMjEyYjUwYzAwMTQ5ZTRmOTAiLCJpYXQiOjE2ODg3MTg3ODYsImV4cCI6MTY4OTkyODM4Nn0.xr7JGljLz9_Rumg8HssBFFGp1cRxIglRE92308v5b8Q",
    }
    }
    )
  .then((res) => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error("Errore nel pescare il pesce")
    }
  })
  .then((detail) => {
    console.log('DETAIL', detail)
    const spinnerContainer = document.getElementById('spinner-container')
    spinnerContainer.classList.add('d-none')
    let newCol = document.createElement('div')
    newCol.classList.add('col', 'col-12', 'col-sm-8', 'text-center')
    newCol.innerHTML = `
          <div class="card">
              <img style= max-widht 20%
                src="${detail.imageUrl}"
                class="card-img-top"
                alt="fish placeholder image"
              />
              <div class="card-body fs-4">
                <h2 class="card-title">${detail.name}</h2>
                <p class="card-text">
                  ${detail.description}
                </p>
                <p class="card-text fst-italic">
                  ${detail.brand}
                </p>
                <p class="card-text fw-bold">
                  ${detail.price}€
                </p>               
              </div>
            </div>
        `
    const fishRow = document.getElementById('fish-row')
    fishRow.appendChild(newCol)
  })
  .catch((err) => {
    console.log(err)
  })
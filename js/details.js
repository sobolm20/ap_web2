
const evedetails = data.events
let query = location.search
console.log(query)
let params = new URLSearchParams(query)
console.log(params)
let id_query = params.get('id')
console.log(id_query);


function defineDetails(evedetails) {
    return `
    <div class="col-md-4">
          <img src="${data.image}" class="img-fluid rounded-start" alt="${data.name}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">${data.date}</p>
            <p class="card-text">${data.description}</p>
            <p class="card-text">${data.category}</p>
            <p class="card-text">${data.place}</p>
            <p class="card-text">${data.capacity}</p>
            <p class="card-text">${data.assistance}</p>
            <h6 class="card-subtitle mb-2 text-muted">${data.price}</h6>
            <a class="btn btn-primary" href="details.html?_id=${data._id}" role="button">Details</a>
          </div>
        </div>
    `
}

function notFound(id) {
    let container = document.querySelector(id)
    container.innerHTML = `
    <div class="card m-2 card-box">
        <div class="card-body d-flex flex-column align-items-center">
            <h3 class="card-title d-flex flex-column align-items-center justify-center">EVENTS NON FOUND</h3>
        </div>
    </div>
    `
}

function printDetails (id, dato, evedetails){
    let container = document.querySelector(id)
    let dat = evedetails.find(each => each._id == dato)
    let details = defineDetails(dato)
    container.innerHTML = details
}

printDetails('detailscomp', id_query, evedetails)


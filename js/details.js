
async function fetchApi() {
    try{
        let urlApi = 'https://mindhub-ab35.onrender.com/api/amazing-events'
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()
        eventos = [...response.events]
        console.log(eventos);
        defineDetails(eventos)
        return response
    } catch(error){
        console.log(error);
    }
}

fetchApi()

let query = location.search
console.log(query)
let params = new URLSearchParams(query)
console.log(params)
let id_query = params.get('id')
console.log(id_query);

let cards = []

function defineDetails(array_events){
    let eventsfilter = array_events.filter(each => each.id == id_query)[0];
    cards = 
    `
    <div class="col-md-4">
      <img src="${eventsfilter.image}" class="img-fluid rounded-start" alt="${eventsfilter.name}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${eventsfilter.name}</h5>
        <p class="card-text">${eventsfilter.date}</p>
        <p class="card-text">${eventsfilter.description}</p>
        <p class="card-text">${eventsfilter.category}</p>
        <p class="card-text">${eventsfilter.place}</p>
        <p class="card-text">${eventsfilter.capacity}</p>
        <p class="card-text">${eventsfilter.assistance}</p>
        <h6 class="card-subtitle mb-2 text-muted">${eventsfilter.price}</h6>
        <a class="btn btn-primary" href="details.html?id=${eventsfilter.id}" role="button">Details</a>
      </div>
    </div>
`
let gencard = document.getElementById('detailscomp')
gencard.innerHTML = cards
}


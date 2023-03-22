
//CARD

function createCards(array){
    let cardEventos = []
    for (let card of array){
        let listcard = 
        `
        <div class="card" style="width: 18rem;" ${card._id}>
            <img src=${card.image} class="card-img-top img-fit" alt=${card.name}>
            <div class="card-body">
                <h5 class="card-title">${card.name}</h5>
                <p class="card-text">${card.description}</p>
                <h6 class="card-subtitle mb-2 text-muted">${card.price}</h6>
                <a class="btn btn-primary" href="details.html?id=${card.id}" role="button">Details</a>
            </div>
        </div>
        ` 
        cardEventos.push(listcard);
    }
    return cardEventos
}

function printCards(id, array){
    let cardEventos = createCards(array)
    let basecard = document.getElementById(id)
    basecard.innerHTML = cardEventos.join('')

}

let eventos = []

async function fetchApi() {
    try{
        let urlApi = 'https://mindhub-ab35.onrender.com/api/amazing-events'
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()
        eventos = [...response.events]
        console.log(eventos);
        printCards('eventscomp',response.events)
        check (eventos)
        printCategory('categcomp',categories);
        return response
    } catch(error){
        console.log(error);
    }
}

fetchApi()


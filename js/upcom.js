
//CARD

let eventos = []

async function fetchApi() {
    try{
        let urlApi = 'https://mindhub-ab35.onrender.com/api/amazing-events'
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()
        eventos = [...response.events]
        console.log(eventos);
        currentDate = response.currentDate;
        printCards('eventsupcom',response.events)
        check (eventos)
        printCategory('categupcom',categories);
        return response
    } catch(error){
        console.log(error);
    }
}

fetchApi()

let cardEventos = []

function printCards(){
    for (let card of eventos){
        if(card.date > currentDate){
            let listcard = 
            `
            <div class="card" style="width: 18rem;">
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
            console.log(cardEventos);
        }
    }
    let basecard = document.getElementById('eventsupcom');
    basecard.innerHTML = cardEventos.join('');
}

console.log(cardEventos);

printCards();


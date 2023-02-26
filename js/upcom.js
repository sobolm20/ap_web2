console.log(data);
const eventos = data.events
console.log(eventos);

let currentDate = data.currentDate;
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
                    <a class="btn btn-primary" href="details.html" role="button">Details</a>
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

printCards();
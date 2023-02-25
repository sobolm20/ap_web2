console.log(data);
const eventos = data.events
console.log(eventos);

let cardEventos = []

function printCards(){
    for (let card of eventos){
        let listcard = 
        `
        <div class="card" style="width: 18rem;">
            <img src=${card.image} class="card-img-top img-fit" alt=${card.name}>
            <div class="card-body">
                <h5 class="card-title">${card.name}</h5>
                <p class="card-text">${card.description}</p>
                <h6 class="card-subtitle mb-2 text-muted">${card.price}</h6>
                <a href="details.html" class="card-link">Details</a>
            </div>
        </div>
        ` 
        cardEventos.push(listcard);
        console.log(cardEventos);
    }
    let basecard = document.getElementById('eventscomp');
    basecard.innerHTML = cardEventos.join('');
}

printCards();





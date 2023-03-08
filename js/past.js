console.log(data);
const eventos = data.events
console.log(eventos);

//CARD
let currentDate = data.currentDate;
let cardEventosP = []

function printCards(){
    for (let card of eventos){
        if(card.date < currentDate){
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

            cardEventosP.push(listcard);
            console.log(cardEventosP);
        }
    }
    let basecard = document.getElementById('eventspast');
    basecard.innerHTML = cardEventosP.join('');
}

printCards();
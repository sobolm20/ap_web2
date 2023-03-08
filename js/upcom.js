console.log(data);
const eventos = data.events
console.log(eventos);

//CARD
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

console.log(cardEventos);

printCards();

//CATEGORIAS
// let categories = []
// console.log(eventos.forEach(each => { 
//     if (!categories.includes(each.category))
//     categories.push(each.category)
// }));
// console.log(categories);

// let templeteCategory = []

// function printCategory(){
//     for (let each of categories){
//     let listcategory =
//         `
//         <fieldset class="p-2 m-2">
//             <label class="contact-label" for="${each}">${each}</label>
//             <input onclick="captureDataU()" class="class_checks contact-input categinputU" type="checkbox" name="categ" value="${each}" id="${each}"> 
//         </Fieldset>
//         `
//         templeteCategory.push(listcategory);       
//     }
//     let basecateg = document.getElementById('categupcom');
//     basecateg.innerHTML = templeteCategory.join('')
// }

// printCategory();

//FILTRAR
// let templeteCardU = (cardEventos) =>{
//     return`
//     <div class="card" style="width: 18rem;">
//         <img src=${cardEventos.image} class="card-img-top img-fit" alt=${cardEventos.name}>
//         <div class="card-body">
//             <h5 class="card-title">${cardEventos.name}</h5>
//             <p class="card-text">${cardEventos.description}</p>
//             <h6 class="card-subtitle mb-2 text-muted">${cardEventos.price}</h6>
//             <a class="btn btn-primary" href="details.html" role="button">Details</a>
//         </div>
//     </div>
//     `
// } 

// let printEventsU = (id_html, array_cardEventos) => {
//     let selectorU = document.querySelector(`#${id_html}`)
//     selectorU.innerHTML = ""
//     let templeteU = array_cardEventos.map(templeteCardU).join('')
//     selectorU.innerHTML = templeteU
// }

// let captureDataU = () =>{
//     let inputTextU = document.querySelector(`#nameU`).value
//     console.log(inputTextU);
//     let inputChecksU = Array.from(document.querySelectorAll(`.categinputU:checked`)).map(each =>each.value)
//     console.log(inputChecksU);
//     let eveFilteredU = cardEventos.filter(each =>{
//         return(
//             each.name.toLowerCase().includes(inputTextU.toLowerCase()) && (inputChecksU.length === 0 || inputChecksU.includes(each.category)))
//     })
//     console.log(eveFilteredU);
//     printEventsU('eventsupcom',eveFilteredU);
// }

// document.querySelector('#nameU').addEventListener("keyup", ()=> captureDataU("nameU","checks", eventos))
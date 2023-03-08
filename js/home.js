console.log(data);
const eventos = data.events
console.log(eventos);

//CARD
let cardEventos = []

function printCards(){
    for (let card of eventos){
        let listcard = 
        `
        <div class="card" style="width: 18rem;" ${card._id}>
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
    let basecard = document.getElementById('eventscomp')
    basecard.innerHTML = cardEventos.join('')
}

printCards();


//CATEGORIAS
// let categories = []
// eventos.forEach(each => { 
//     if (!categories.includes(each.category)){
//         categories.push(each.category)
//     }
// });
// console.log(categories);

// let templeteCategory = ()=>{
//     return
//     `
//     <fieldset class="p-2 m-2">
//         <label class="contact-label" for="${each}">${each}</label>
//         <input onclick="captureData()" class="class_checks contact-input" type="checkbox" name="categ" value="${each}" id="${each}"> 
//     </Fieldset>       
//     `

// }

// let printCategory = (id_html, categories) => {
//     let selector = document.querySelector(`#${id_html}`)
//     let templete = categories.map(templeteCategory).join('')
//     selector.innerHTML(templete)
//     console.log(templeteCategory);
// }

// printCategory('categcomp',categories);


// function printCategory(){
//     for (let each of categories){
//     let listcategory =
//         `
//         <fieldset class="p-2 m-2">
//             <label class="contact-label" for="${each}">${each}</label>
//             <input onclick="captureData()" class="class_checks contact-input" type="checkbox" name="categ" value="${each}" id="${each}"> 
//         </Fieldset>
//         `
//         templeteCategory.push(listcategory);       
//     }
//     let basecateg = document.getElementById('categcomp');
//     basecateg.innerHTML = templeteCategory.join('')
// }

// printCategory();

// function captureData() {
//     let texto = document.getElementById('id_search').value
//     let checks = Array.from(document.querySelectorAll('.class_checks:checked')).map(each => each.value)
//     let filtro = eventos.filter(each => {
//         return(
//             each.name.includes(texto)
//         ) && (
//             (checks.length === 0 || checks.includes(each.category))
//         )
//     })
//     console.log(filtro)
//     if (filtro.length=0) {
//         printCards('eventscomp',filtro)
//     } else {
//         let container = document.querySelector('eventscomp')
//         container.innerHTML = `
//         <div class="card" style="width: 18rem;">
//             <div class="card-body">
//                 <h5 class="card-title">EVENTS NON FOUND</h5>
//             </div>
//         </div>
//         `
//     }
// }

    






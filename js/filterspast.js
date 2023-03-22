//seleccionar PAST

let templeteCard = (eventos) =>{
    return`
    <div class="card" style="width: 18rem;">
        <img src=${eventos.image} class="card-img-top img-fit" alt=${eventos.name}>
        <div class="card-body">
            <h5 class="card-title">${eventos.name}</h5>
            <p class="card-text">${eventos.description}</p>
            <h6 class="card-subtitle mb-2 text-muted">${eventos.price}</h6>
            <a class="btn btn-primary" href="details.html" role="button">Details</a>
        </div>
    </div>
    `
} 

let printEvents = (id_html, array_events) => {
    let selector = document.querySelector(`#${id_html}`)
    let templetes = array_events.map(templeteCard).join('')
    selector.innerHTML = templetes
    console.log(templetes);
}
         
let captureData = () =>{
    let inputText = document.querySelector(`#namepast`).value
    console.log(inputText);
    let inputChecks = Array.from(document.querySelectorAll(`.categinputpast:checked`)).map(each =>each.value)
    let eveFiltered = eventos.filter(each =>{
        return(
            each.name.toLowerCase().includes(inputText.toLowerCase()) && (inputChecks.length === 0 || inputChecks.includes(each.category)) && (each.date < currentDate))
    })
    console.log(eveFiltered);
    printEvents('eventspast',eveFiltered);
}

document.querySelector('#namepast').addEventListener("keyup", ()=> captureData("name","checks", eventos))
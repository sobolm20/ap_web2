//seleccionar
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
         
let printEvents = (id_html, array_eventos) => {
    let selector = document.querySelector(`#${id_html}`)
    let templete = array_eventos.map(templeteCard).join('')
    selector.innerHTML = templete

}

let captureData = (id_text, id_checks, array_eventos) =>{
    let inputText = document.querySelector(`#${id_text}`).value
    let inputChecks = Array.from(document.querySelectorAll(`.${id_checks}:checked`)).map(each =>each.value)
    let eveFiltered = array_eventos.filter(each =>{
        return((
            each.name.toLowerCase().includes(inputText.toLowerCase().trim())
        )&&(each.length === 0 || inputChecks.includes(each.category)))
    })
    printEvents('categcomp',eveFiltered);
}

document.querySelector('#name').addEventListener("keyup", ()=> captureData("name","checks", eventos))




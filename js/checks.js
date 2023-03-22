let categories = []

function check(array_events){
    categories = Array.from(new Set(array_events.map(each => each.category)))
}

console.log(categories);

function templeteCategory (category){
    return`
    <fieldset class="fs-6 m-2">
        <label class="contact-label" for="${category}">${category}</label>
        <input onclick='captureData()' class="class_checks contact-input categinput" type="checkbox" name="categ" value="${category}" id="${category}"> 
    </Fieldset>       
    `
}

let printCategory = (id_html, categories) => {
    let selector = document.querySelector(`#${id_html}`)
    let templetes = categories.map(templeteCategory).join('')
    selector.innerHTML = templetes
    console.log(templetes);
}

printCategory('categcomp',categories);
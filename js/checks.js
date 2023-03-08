let categories = []
eventos.forEach(each => { 
    if (!categories.includes(each.category)){
        categories.push(each.category)
    }
});
console.log(categories);

let templeteCategory = (category)=>{
    return`
    <fieldset class="p-2 m-2">
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
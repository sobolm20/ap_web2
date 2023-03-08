//CATEGORIAS PAST
let categories = []
console.log(eventos.forEach(each => { 
    if (!categories.includes(each.category))
    categories.push(each.category)
}));
console.log(categories);

let templeteCategory = []

function printCategory(){
    for (let each of categories){
    let listcategory =
        `
        <fieldset class="p-2 m-2">
            <label class="contact-label" for="${each}">${each}</label>
            <input onclick='captureData()' class="class_checks contact-input categinputpast" type="checkbox" name="categ" value="${each}" id="${each}"> 
        </Fieldset>
        `
        templeteCategory.push(listcategory);       
    }
    let basecateg = document.getElementById('categpast');
    basecateg.innerHTML = templeteCategory.join('')
}

printCategory();
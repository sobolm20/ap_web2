//CATEGORIAS UPCOMING

let categories = []

function check(array_events){
    categories = Array.from(new Set(array_events.map(each => each.category)))
}

let templeteCategory = []

function printCategory(){
    for (let each of categories){
    let listcategory =
        `
        <fieldset class="fs-6 m-2">
            <label class="contact-label" for="${each}">${each}</label>
            <input onclick='captureData()' class="class_checks contact-input categinputupcom" type="checkbox" name="categ" value="${each}" id="${each}"> 
        </Fieldset>
        `
        templeteCategory.push(listcategory);       
    }
    let basecateg = document.getElementById('categupcom');
    basecateg.innerHTML = templeteCategory.join('')
}

printCategory();


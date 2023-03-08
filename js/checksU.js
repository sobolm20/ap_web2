//CATEGORIAS UPCOMING
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

printCategory('categupcom',categories);



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
//             <input onclick="captureData()" class="class_checks contact-input" type="checkbox" name="categ" value="${each}" id="${each}"> 
//         </Fieldset>
//         `
//         templeteCategory.push(listcategory);       
//     }
//     let basecateg = document.getElementById('categupcom');
//     basecateg.innerHTML = templeteCategory.join('')
// }

// printCategory();

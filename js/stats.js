async function fetchApi() {
    try{
        let urlApi = 'https://mindhub-ab35.onrender.com/api/amazing-events?time=past'
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()
        let eventospast = response.events;
        
        let stats = eventospast.map(each => {
            let objeto = {
                name: each.name,
                percent: (100 * (each.assistance))/each.capacity} 
            return objeto
            }).sort((elem1,elem2)=>(elem1.percent)-(elem2.percent))
        let stats2 = eventospast.map(each => {
            let objeto2 = {
                name: each.name,
                capacity: each.capacity} 
            return objeto2
            }).sort((elem1,elem2)=>(elem2.capacity)-(elem1.capacity))

        console.log(stats)
        console.log(stats[0])
        console.log(stats[stats.length-1])
        console.log(stats2[0])
        document.getElementById("statsone").innerHTML=templateTable1(stats[stats.length-1], stats[0], stats2[0])

        tablepast (eventospast)
        printTablepast (tablepast (eventospast), "statsthree")    
      
        return response
    } catch(error){
        console.log(error);
    }
}

fetchApi()


function templateTable1 (max, min, capac) {
	return`
    <tr>
        <td class="p-3 bg-light bg-opacity-15 border border-info rounded-end">${max.name}</td>
        <td class="p-3 bg-light bg-opacity-15 border border-info rounded-end">${(max.percent).toFixed(2)} % </td>
        <td class="p-3 bg-light bg-opacity-15 border border-info rounded-end">${min.name}</td>
        <td class="p-3 bg-light bg-opacity-15 border border-info rounded-end">${(min.percent).toFixed(2)} % </td>
        <td class="p-3 bg-light bg-opacity-15 border border-info rounded-end">${capac.name}</td>
        <td class="p-3 bg-light bg-opacity-15 border border-info rounded-end">${capac.capacity} </td>
    </tr>
    `
}


async function tabla2() {
    try{
        let urlApi = 'https://mindhub-ab35.onrender.com/api/amazing-events?time=upcoming'
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()
        let eventosupcom = response.events;
        console.log(eventosupcom);
        tableupcom(eventosupcom)
        printTableupcom (tableupcom (eventosupcom), "statstwo")
        return response
    } catch(error){
        console.log(error);
    }
}

tabla2()

function tableupcom (array){
    let categories = Array.from(new Set(array.map(each => each.category)))
    console.log(categories);
    let eventsfiltered = categories.map(categ => array.filter(each=> each.category == categ))
    console.log(eventsfiltered);
    let totales = eventsfiltered.map(eventCat=>{
        let calcula = eventCat.reduce((acum, array)=>{
            acum.category = array.category
            acum.reveneus += (array.assistance || array.estimate) * array.price
            acum.percentage += (100 * (array.assistance || array.estimate))/array.capacity
        return acum
        },{
            category: "",
            reveneus: 0,
            percentage: 0,
        })
    calcula.percentage = calcula.percentage / eventCat.length 
    return calcula  
    })
    console.log(totales);
    return totales
}

function printTableupcom (array, idTag){
let selector = document.getElementById(idTag);
let container = array.map(each =>{
    return`
    <tr>
    <td class="p-3 bg-light bg-opacity-15 border border-info rounded-end">${each.category}</td>
    <td class="p-3 bg-light bg-opacity-15 border border-info rounded-end">${each.reveneus}</td>
    <td class="p-3 bg-light bg-opacity-15 border border-info rounded-end">${each.percentage.toFixed(2)}</td>
    </tr>
    `
})
selector.innerHTML = container.join('')
}


function tablepast (array){
    let categories = Array.from(new Set(array.map(each => each.category)))
    console.log(categories);
    let eventsfiltered = categories.map(categ => array.filter(each=> each.category == categ))
    console.log(eventsfiltered);
    let totales = eventsfiltered.map(eventCat=>{
        let calcula = eventCat.reduce((acum, array)=>{
            acum.category = array.category
            acum.reveneus += (array.assistance || array.estimate) * array.price
            acum.percentage += (100 * (array.assistance || array.estimate))/array.capacity
        return acum
        },{
            category: "",
            reveneus: 0,
            percentage: 0,
        })
    calcula.percentage = calcula.percentage / eventCat.length 
    return calcula  
    })
    console.log(totales);
    return totales
}

function printTablepast (array, id){
let selector = document.getElementById(id);
let container = array.map(each =>{
    return`
    <tr>
    <td class="p-3 bg-light bg-opacity-15 border border-info rounded-end">${each.category}</td>
    <td class="p-3 bg-light bg-opacity-15 border border-info rounded-end">${each.reveneus}</td>
    <td class="p-3 bg-light bg-opacity-15 border border-info rounded-end">${each.percentage.toFixed(2)}</td>
    </tr>
    `
})
selector.innerHTML = container.join('')
}
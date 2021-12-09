const URL = 'http://hp-api.herokuapp.com/api/characters'

const main = document.getElementById('main')
const templateCard = document.getElementById('templateCard').content
const select = document.querySelector('.select')

const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', ()=>{
    fetchApi()
})

const fetchApi = ()=>{
    fetch(URL)
    .then(res => res.json())
    .then(producto=>{
        main.innerHTML=""

        seleccionarOpcion(producto)
    })
}

const seleccionarOpcion= producto=>{
    producto.forEach(data=>{
        const option= document.createElement('option')
        option.setAttribute('value', data.name)
        option.classList.add('option')
        option.textContent=data.name
        fragment.appendChild(option)
    })
    select.appendChild(fragment)
    crearCard(producto)
    select.addEventListener('change', function (){
        crearCard(producto)
    })
        
}



const crearCard=producto=>{
    if(select.value=="todos"){
        main.innerHTML=""
            producto.forEach(producto =>{
            templateCard.querySelector('.titu-card').textContent=producto.name
            templateCard.querySelector('.img-card').src=producto.image
            templateCard.querySelector('.genero').textContent=producto.gender
            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)
            main.appendChild(fragment)
        })
        
        
        
    }else { 
        main.innerHTML=""
        const producto2 = producto.filter(producto => producto.name === select.value)
            templateCard.querySelector('.titu-card').textContent=producto2[0].name
            templateCard.querySelector('.img-card').src=producto2[0].image
            templateCard.querySelector('.genero').textContent=producto2[0].gender
            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)
            main.appendChild(fragment)
    }

}



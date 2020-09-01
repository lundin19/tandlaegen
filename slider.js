
let personal = [
    { 
        image: "emilie",
        profession: "receptionist",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, voluptatem ut? Officia et quidem alias." 
    },
    {   
        image: "lars",
        profession: "tandlæge",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, voluptatem ut? Officia et quidem alias." 
    },
    { 
        image: "mads",
        profession: "klinikassistent",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, voluptatem ut? Officia et quidem alias." 
    }
]
let personalSec = [
    { 
        image: "angelika",
        profession: "tandlæge",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, voluptatem ut? Officia et quidem alias." 
    },
    {   
        image: "brorup",
        profession: "tandlæge",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, voluptatem ut? Officia et quidem alias." 
    },
    { 
        image: "christian",
        profession: "tandplejer",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, voluptatem ut? Officia et quidem alias." 
    }
];
const sliderContainer = document.querySelector('.sliderContainer')
const previous = document.querySelector('.previous')
const next = document.querySelector('.next')

// Run first array => arrType(arr = images)
// hide first Btn
arrType()
previous.style.display = 'none'

previous.addEventListener('click', () => {
    // Remove btn after click
    next.style.display = 'unset'
    previous.style.display = 'none'
    removeContainerChildren()
    arrType(personal)
})

next.addEventListener('click', () => {
     // Remove btn after click
    previous.style.display = 'unset'
    next.style.display = 'none'
    removeContainerChildren()
    arrType(personalSec)
})

function removeContainerChildren() {
    document.querySelector('.productContainer')
    // Dom elementet container children slettet inden nu array bliver kaldt.
    // tager længden af children container indeholder(childNodes), hvorefter
    // antalt children(array items containere) fjernes
    for (let i = 0; i < sliderContainer.childNodes.length; i) {
        document.querySelector('.productContainer').remove()
    }
}
// function call when arrFirst or arrLast event btn,
// arr bestemes af hvilken btn der trykkes
function arrType(arr = personal) {
    for (element of arr) {
        /* create elements and add classes*/
    let productContainer = document.createElement('div')
    productContainer.classList.add('productContainer')
    let card = document.createElement('div')
    card.classList.add('card')
    let product = document.createElement("div")
    product.classList.add('product')
    let text = document.createElement("div")
    text.classList.add('text')
    /* array name/desc => DOM */
    let name = document.createElement("h3")
    name.innerHTML = `${element.image}`;
    let profession = document.createElement("h4")
    profession.innerHTML = element.profession;
    let desc = document.createElement("p")
    desc.innerHTML = element.desc;
    
    /* Images array src => DOM */
    let img = document.createElement("img");
    img.classList.add('img')
    img.setAttribute("alt", element.alt)
    img.src = `img/${element.image}.jpg`
    /* Append elements to each other and finally to the container*/
    productContainer.appendChild(card)
    card.appendChild(product)
    product.appendChild(img)
    card.appendChild(text)
    text.appendChild(name)
    text.appendChild(profession)
    text.appendChild(desc)
    sliderContainer.appendChild(productContainer)
    }
}
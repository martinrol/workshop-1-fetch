const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');

appNode.addEventListener("click", (event) => {
    if(event.target.nodeName === 'H2') {
        window.alert('Hola')
    }
})

// Formato a monedas
const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD',
    }).format(price);
    
    return newPrice;
}


const fetchData = async () => {
    const response = await fetch(`${baseUrl}/api/avo`);
    const responseJson = await response.json();

    try {
        const allOfItems = [];

        responseJson.data.forEach((item) => {
        const image = document.createElement('img');
        image.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
        image.src = `${baseUrl}${item.image}`;

        const title = document.createElement('h2');
        title.className = "text-lg";
        title.textContent = item.name;

        const price = document.createElement('p');
        price.className = "text-gray-600";
        price.textContent = formatPrice(item.price);
        
        //Contenedor para título y precio
        const priceAndTitle = document.createElement('div');
        priceAndTitle.className = "text-center md:text-left";
        priceAndTitle.appendChild(title);
        priceAndTitle.appendChild(price);

        // Agrupando contenido en una card
        const card = document.createElement('div');
        card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
        card.appendChild(image);
        card.appendChild(priceAndTitle)


        // Agregando contenido al contenedor principal
        const container = document.createElement('div');
        container.append(card);

        allOfItems.push(container)
    });

    appNode.append(...allOfItems);
    } catch(error) {
        console.error(error.message);
    }
}
fetchData()
const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');

const fetchData = async () => {
    const response = await fetch(`${baseUrl}/api/avo`);
    const responseJson = await response.json();

    try {
        const allOfItems = [];

        responseJson.data.forEach((item) => {
        const image = document.createElement('img');
        image.src = `${baseUrl}${item.image}`;

        const title = document.createElement('h2');
        title.textContent = item.name;

        const price = document.createElement('p');
        price.textContent = item.price;

        const container = document.createElement('div');
        container.append(image, title, price);

        allOfItems.push(container)
    });

    appNode.append(...allOfItems);
    } catch(error) {
        console.error(error.message);
    }
}
fetchData()
/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo";

const fetchData = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();

    try {
        const allOfItems = [];

        responseJson.data.forEach((item) => {
        const image = document.createElement('img');
        const title = document.createElement('h2');
        const price = document.createElement('p');

        const container = document.createElement('div');
        container.append(image, title, price);

        allOfItems.push(container)
    });

    document.body.append(...allOfItems);
    } catch(error) {
        console.error(error.message);
    }
}
fetchData()
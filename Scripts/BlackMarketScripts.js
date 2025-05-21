const data = [
    { name: 'Maze', altText: 'A black and white linocut print featuring a geometric maze like pattern in each quadrant of the paper in varying print qualities', imageRef: 'Images/Maze.jpg', quantity : '1 of 1', },
    { name: 'Noodle',  altText: '', imageRef: 'Images/Noodle.png', quantity : '1', },
    { name: 'Mushrooms', altText: '', imageRef: 'Images/Mushrooms.png', quantity : '1', },
    { name: 'Catz', altText: '', imageRef: 'Images/Catz.png', quantity : '1 of 1', },
    { name: 'Bamboo Fountain', altText: '', imageRef: 'Images/BambooFountain.png', quantity : '2', },
    { name: 'Circles', title: 'Arcane Circles Print Reference Thumbnail', altText: '', imageRef: 'Images/Circles.png', quantity : '1', },
    { name: 'Torch Creatures', title: 'Torch Creature Print Reference Thumbnail', altText: '', imageRef: 'Images/flames.png', quantity : '3', },
    { name: 'Mirror', altText: '', imageRef: 'Images/Mirror.png', quantity : '1', },
    { name: 'Scary Faces', altText: '', imageRef: 'Images/ScaryFaces.png', quantity : '2', },
    { name: 'Spirals', altText: '', imageRef: 'Images/Spirals.png', quantity : '1 of 1', },
    { name: 'Arcane Tome', altText: '', imageRef: 'Images/Tome.png', quantity : '3', },
    { name: 'Weevil (black)', altText: '', imageRef: 'Images/WeevilBlack.png', quantity : '1', },
    { name: 'Weevil (blue)', altText: '', imageRef: 'Images/WeevilBlue.png', quantity : '1 of 1', },
    { name: 'Weevil (red)', altText: '', imageRef: 'Images/WeevilRed.png', quantity : '2', },
]

const list = document.querySelector('.ShopGridLayout')
data.forEach((item) => {
    if(item.title !== null && item.title !== undefined) {
        list.innerHTML +=
            `<a href="${item.imageRef}" target="_blank">
            <div class="ShopGridLayoutItem">
                <p>${item.name}</p>
                <img src="${item.imageRef}" alt="${item.altText}" title="${item.title}"/>
                <h5>
                    Quantity <br />
                    ${item.quantity}
                </h5>
            </div>
        </a>`
    }
    else
    {
        list.innerHTML +=
            `<a href="${item.imageRef}" target="_blank">
            <div class="ShopGridLayoutItem">
                <p>${item.name}</p>
                <img src="${item.imageRef}" alt="${item.altText}" title="${item.name} Print Reference Thumbnail"/>
                <h5>
                    Quantity <br />
                    ${item.quantity}
                </h5>
            </div>
        </a>`
    }
})
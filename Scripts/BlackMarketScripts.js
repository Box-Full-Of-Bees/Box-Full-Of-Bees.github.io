const data = [
    { name: 'Maze', altText: 'A black and white linocut print featuring a geometric maze like pattern in each quadrant of the paper in varying print qualities.', imageRef: 'Images/Maze.jpg', quantity : '1 of 1', },
    { name: 'Noodle',  altText: 'A linocut print featuring 2 eastern serpentine dragon inspired creatures slightly offset, with major chatter, printed in black ink.', imageRef: 'Images/Noodle.png', quantity : '1', },
    { name: 'Mushrooms', altText: 'A linocut print featuring a collection of 5 mushrooms coming from a representation of the ground with minor chatter on the top porion of the print, all done in prussian blue on ivory stock.', imageRef: 'Images/Mushrooms.png', quantity : '1', },
    { name: 'Catz', altText: 'A linocut print featuring a repeating pattern of small cats in a two by four grid of varying print qualities, all include moderate chatter and are printed in black ink on white paper.', imageRef: 'Images/Catz.png', quantity : '1 of 1', },
    { name: 'Bamboo Fountain', altText: 'A linocut print depicting a scene of a small garden with a focus on a bamboo fountain in the foreground, along with falling leaves and moderate chatter printed in black and white on ivory paper', imageRef: 'Images/BambooFountain.png', quantity : '2', },
    { name: 'Circles', title: 'Arcane Circles Print Reference Thumbnail', altText: 'A linocut print of a series of complex geometric patterns representing arcane spell circles printed with mid blue ink on ivory stock, including minor chatter', imageRef: 'Images/Circles.png', quantity : '1', },
    { name: 'Torch Creatures', title: 'Torch Creature Print Reference Thumbnail', altText: 'A black and white linocut print depicting 2 sets of 4 flame like creatures with varying expressions including anger, worry, happiness, and neutral. The sets are offset into the top left and bottom right corners of the image.', imageRef: 'Images/Flames.png', quantity : '3', },
    { name: 'Mirror', altText: 'A linocut print featuring 2 nude figures, one male and one female, depicted using segmented linework seperated back to back by a large vertical line inside of a thick border with some print errors leading to uneven inking on the top and right edges. The image is black ink on ivory paper.', imageRef: 'Images/Mirror.png', quantity : '1', },
    { name: 'Scary Faces', altText: 'A linocut image depicting a schene of a figure at a desk and two large amorphous mostly circular eyeless grinning creatures within a white circle with moderate chatter inside a large swirling rectangular frame. Printed black ink on white paper with moderate inking inconsistency.', imageRef: 'Images/ScaryFaces.png', quantity : '2', },
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
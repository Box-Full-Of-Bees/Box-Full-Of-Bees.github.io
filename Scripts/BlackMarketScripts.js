const data = [
	{
		name: 'Maze',
		altText: 'A linocut printed in black ink on white paper featuring a geometric maze like pattern in each quadrant of the paper in varying print qualities.',
		imageRef: '../Images/Maze.jpg',
		quantity: '1 of 1',
	},
	{
		name: 'Noodle',
		altText: 'A linocut printed in black ink on white paper featuring 2 eastern serpentine dragon inspired creatures slightly offset, with major chatter.',
		imageRef: '../Images/Noodle.png',
		quantity: '1',
	},
	{
		name: 'Bamboo Fountain',
		altText: 'A linocut print depicting a scene of a small garden with a focus on a bamboo fountain in the foreground, along with falling leaves, and moderate chatter printed in black ink on ivory paper',
		imageRef: '../Images/BambooFountain.png',
		quantity: '2',
	},
	{
		name: 'Circles',
		title: 'Arcane Circles Print Reference Thumbnail',
		altText: 'A linocut printed in mid blue ink on ivory paper of a series of complex geometric patterns representing arcane spell circles including minor chatter and wide margins outside of the print.',
		imageRef: '../Images/Circles.png',
		quantity: '1',
	},
	{
		name: 'Torch Creatures',
		title: 'Torch Creature Print Reference Thumbnail',
		altText: 'A linocut printed in black ink on white paper depicting 2 sets of 4 flame like creatures with varying expressions including anger, worry, happiness, and neutral. The sets are offset into the top left and bottom right corners of the image.',
		imageRef: '../Images/Flames.png',
		quantity: '3',
	},
	{
		name: 'Mirror',
		altText: 'A linocut printed in black ink on ivory paper featuring 2 nude figures, one male and one female, depicted using segmented linework seperated back to back by a large vertical line inside of a thick border with some print errors leading to uneven inking on the top and right edges. The image is black ink on ivory paper.',
		imageRef: '../Images/Mirror.png',
		quantity: '1',
	},
	{
		name: 'Scary Faces',
		altText: 'A linocut image depicting a schene of a figure at a desk and two large amorphous mostly circular eyeless grinning creatures within a white circle with moderate chatter inside a large swirling rectangular frame. Printed black ink on white paper with moderate inking inconsistency.',
		imageRef: '../Images/ScaryFaces.png',
		quantity: '2',
	},
	{
		name: 'Spirals',
		altText: 'A linocut printed in black ink on white paper featuring 6 unevenly spaced spiral patterns in a rough two by three grid with all featuring minor chatter with various inking issues.',
		imageRef: '../Images/Spirals.png',
		quantity: '1 of 1',
	},
	{
        name: 'Arcane Tome',
        altText: 'A linocut printed in charcoal gray ink on ivory stock depicting a schene of a mystical tome floating within a runic circle above a plinth nad in front of an obelisk with minor chatter throughout the negative space and wide margins surrounding the print.',
        imageRef: '../Images/Tome.png',
        quantity: '2',
    },
	{
        name: 'Weevil (black)',
        altText: 'A linocut printed in black ink on ivory paper depicting a stylized lineart weevil lifting a dumbbell within a thin frame border. Print includes minor chatter and wide margins outside of the print.',
        imageRef: '../Images/WeevilBlack.png',
        quantity: '1',
    },
	{
        name: 'Weevil (blue)',
        altText: 'A two color registration linocut printed in black and prussian blue ink on ivory paper depicting a stylized blue weevil with black lineart lifting a dumbbell within a frame border. Print includes major chatter and wide margins outside of the print.',
        imageRef: '../Images/WeevilBlue.png',
        quantity: '1 of 1',
    },
	{
        name: 'Weevil (red)',
        altText: 'A linocut printed in warm red ink on ivory paper depicting a column of 3 lineart weevils lifting dumbbells in varying inking qualities. Print includes major chatter and wide margins on the left and right of the print.',
        imageRef: '../Images/WeevilRed.png',
        quantity: '1',
    },
	{
		name: 'Magnolia',
		altText: 'A linocut printed in black ink on white paper depicting a magnolia flower growing from the bottom right corner of a simple rectangular frame.',
		imageRef: '../Images/Magnolia.png',
		quantity: 'Not Yet',
	},
]

const list = document.querySelector('.ShopGridLayout')
data.forEach((item) => {
	if (item.title !== null && item.title !== undefined) {
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
	else {
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
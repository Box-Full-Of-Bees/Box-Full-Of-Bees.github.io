const data = [
	{
		name: 'Mushrooms',
		altText: 'A linocut printed in prussian blue ink on ivory stock that features a collection of 5 mushrooms growing out of the ground in a cluster. There is minor chatter on the top potion of the print and a wide margin surrounding the print.',
		imageRef: '../Images/Mushrooms.png',
	},
	{
		name: 'Catz',
		altText: 'A linocut printed in black ink on white paper featuring a repeating pattern of small cats in a two by four grid of varying print qualities, all include moderate chatter.',
		imageRef: '../Images/Catz.png',
	},
	{
		name: 'BoxFullOfBees Icon (Original)',
		altText: 'A linocut printed in black ink on white paper featuring a vertical column of offset cardboard boxes containing a large bee-like creature. Print contains considerable overinking and moderate chatter.',
		imageRef: '../Images/FirstPrint.png',
	},
	{
		name: 'BoxFullOfBees Icon (Updated)',
		altText: 'A linocut printed in black ink on white paper featuring a vertical column of cardboard boxes containing a large bee-like creature wearing a bell along with some smaller bee like creatures. Print contains minor chatter and large margins to the left and right of the print.',
		imageRef: '../Images/BoxIcon2.png',
	},
	{
		name: 'Jumping Bean',
		altText: 'A linocut printed in black ink on white paper depicting a round creature with a leaf for a tail in the motion of a single jump across the bottom of the paper. Print contains a large ink stain on the right of the image and considerable chatter.',
		imageRef: '../Images/JumpingBeans.png',
	},
	{
		name: 'SentyPurr Birthday Fanart 2025',
		altText: 'A linocut printed in black ink on white paper depicting a long tailed cat like creature in a party hat depicting the Vtuber SentyPurr\'s original character Robyn. Print includes moderate chatter in the negative space and wide margins surrounding the print.',
		imageRef: '../Images/SentyFanart.png',
	},
	{
		name: 'rosedoodle Kickflip Fanart',
		altText: 'A linocut printed in black ink on white paper depicting the scene of Vtuber rosedoodle\'s model performing a kickflip on a skateboard. Print includes considerable chatter in the negative space and wide margins surrounding the print.',
		imageRef: '../Images/RoseKickflip.png',
	},
	{
		name: 'TTRPG Map Tileset',
		altText: 'A linocut printed in black ink on white paper featuring a series of small prints depicting different maze landscape features including walls, floors, doors, and stairs in varying qualities of inking and print result.',
		imageRef: '../Images/Tileset.png',
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
            </div>
        </a>`
	}
	else {
		list.innerHTML +=
			`<a href="${item.imageRef}" target="_blank">
            <div class="ShopGridLayoutItem">
                <p>${item.name}</p>
                <img src="${item.imageRef}" alt="${item.altText}" title="${item.name} Print Reference Thumbnail"/>
            </div>
        </a>`
	}
})
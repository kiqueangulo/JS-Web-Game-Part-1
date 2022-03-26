// Function to create images
function newImage(url){
    let image = document.createElement('img')
    image.src = url
    document.body.append(image)
    return image // Return to use it later
}

// Function to create new items
function newItem(url){
    let item = newImage(url)
    // Event to make the item go to inventory
    item.addEventListener('click', () => {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url;
        inventory.append(inventoryItem)
    })
    return item
}

// Function to ubicate/guide elements
function move(element) {
    element.style.position = 'fixed'

    // To place items/images
    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    // To move the pc
    function moveWithArrowKeys(left, bottom, callback) {
        let direction = null; // Trigger variable
        let x = left;
        let y = bottom;
        
        element.style.left = x + 'px';
        element.style.bottom = y + 'px';
        
        // Updating the pc's position every 1ms
        setInterval(() => {
            if (direction === 'west') {
                x -= 1;
            };
            if (direction === 'north') {
                y += 1;
            };
            if (direction === 'east') {
                x += 1;
            };
            if (direction === 'south') {
                y -= 1;
            };

            if (x <= 0 || x === window.innerWidth) {
                element.style.left = '0px';
            }

            element.style.left = x + 'px';
            element.style.bottom = y + 'px';
        }, 1);

        // Assigning intuitive behavior to arrow keys
        document.addEventListener('keydown', function(e) {
            if(e.repeat) return;

            if (e.key === 'ArrowLeft') {
                direction = 'west';
            };
            if (e.key === 'ArrowUp') {
                direction = 'north';
            };
            if (e.key === 'ArrowRight') {
                direction = 'east';
            };
            if (e.key === 'ArrowDown') {
                direction = 'south';
            };

            callback(direction); // To call the illusion function
        });

        document.addEventListener('keyup', function(e) {
            direction = null;
            callback(direction);
        });
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys,
    }
}

// Function to create the inventory
function newInventory(){
    let inventory = document.createElement('div')
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
    return inventory
}

const inventory = newInventory() // Making scope inventory general
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif') // Playable character (pc)

// Function to give the impression of changing directions
function handleDirectionChange(direction) {
    if (direction === null) {
        character.src = 'assets/green-character/static.gif';
    };
    if (direction === 'west') {
        character.src = 'assets/green-character/west.gif';
    };
    if (direction === 'north') {
        character.src = 'assets/green-character/north.gif';
    };
    if (direction === 'east') {
        character.src = 'assets/green-character/east.gif';
    };
    if (direction === 'south') {
        character.src = 'assets/green-character/south.gif';
    };
}

move(character).withArrowKeys(100, 250, handleDirectionChange);

move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/sheild.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)

/* This was supposed to be the back ground, but I have to figure out why it's not working

function background(backgroundAddress, leftPosition, bottomPosition, leftIndentantionFactor, bottomIndentantionFactor) {
    for(let h = 0; h < bottomIndentantionFactor; h++) {
        for(let w = 0; w < leftIndentantionFactor; w++) {
            newImage(backgroundAddress, leftPosition + w * 100, bottomPosition + h * 100);
        }
    }
}

let groundHeight = window.innerHeight * 0.64;
let skyHeight = window.innerHeight - groundHeight;

background('assets/grass.png', '0', '0', window.innerWidth / 100, groundHeight / 100);

background('assets/sky.png', '0', groundHeight, window.innerWidth / 100, skyHeight / 100); */
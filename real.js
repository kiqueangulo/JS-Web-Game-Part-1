// Function to create, positionate, and add an image to the page
function newImage(imgAddress, leftPosition, bottomPosition) {
    let imgName = document.createElement('img');
    imgName.src = imgAddress;
    imgName.style.position = 'fixed';
    imgName.style.left = leftPosition + 'px';
    imgName.style.bottom = bottomPosition + 'px';
    document.body.append(imgName);
    return imgName; // I have to return it so I can can call it and assign it to another variable
}

// Function to make an image disappear (being picked up)
function newItem(itemAddress, leftPosition, bottomPosition) {
    let itemName = newImage(itemAddress, leftPosition, bottomPosition); // I call a function within a function by assigning it to a variable

    itemName.addEventListener('dblclick', function() {
        itemName.remove();
    })
}

// Function to generate the background
function background(backgroundAddress, leftPosition, bottomPosition, leftIndentantionFactor, bottomIndentantionFactor) {
    for(let h = 0; h < bottomIndentantionFactor; h++) { // This will be adding the image vertically
        for(let w = 0; w < leftIndentantionFactor; w++) { // This will be adding the image horizontally
            newImage(backgroundAddress, leftPosition + w * 100, bottomPosition + h * 100);
            // Times 100 because that's the width and height of the images I'm using, so the next will be added right next to the previous one
        }
    }
}

let groundHeight = window.innerHeight * 0.64; // Total height of the grass within the viewport
let skyHeight = window.innerHeight - groundHeight; // The remmaining space of the viewport

background('assets/grass.png', '0', '0', window.innerWidth / 100, groundHeight / 100); // Divided by 100 to make it a factor of the width and height of the images

background('assets/sky.png', '0', groundHeight, window.innerWidth / 100, skyHeight / 100); //I use groundHeight as bottomPosition to begin the sky where the grass ends

newImage('./assets/green-character.gif', '100', '100');

newImage('./assets/pine-tree.png', '450', '200');

newImage('assets/tree.png', '200', '300');

newImage('assets/pillar.png', '350', '100');

newImage('assets/crate.png', '150', '200');

newImage('assets/well.png', '500', '450');

newItem('assets/sword.png', '500', '405');

newItem('assets/sheild.png', '165', '185');

newItem('assets/staff.png', '600', '100');
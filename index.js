// function newImage(imgName, imgAddress, leftPosition, bottomPosition) {

//     let cond = 'Item';
    
//     if (imgName.includes(cond)) {
//         function newItem(imgName, imgAddress, leftPosition, bottomPosition) {
//             imgName = document.createElement('img');
//             imgName.src = imgAddress;
//             imgName.position = 'fixed';
//             imgName.left = leftPosition;
//             imgName.bottom = bottomPosition;
//             document.body.append(imgName);
//             imgName.addEventListener('dblclick', function() {
//                 imgName.remove();
//             })
//         }
//         newItem(imgName, imgAddress, leftPosition, bottomPosition);   
//     } else {
//         imgName = document.createElement('img') // I don't have to use let, because imgName is alredy declared in the function's parameter
//         imgName.src = imgAddress
//         imgName.style.position = 'fixed'
//         imgName.style.left = leftPosition
//         imgName.style.bottom = bottomPosition
//         document.body.append(imgName)
//     }
// }

// let greenCharacter = document.createElement('img')
// greenCharacter.src = './assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

newImage('./assets/green-character.gif', '100', '100'); // Every argument that is suposed to be text goes in quotations

// let pineTree = document.createElement('img')
// pineTree.src = './assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)

newImage('./assets/pine-tree.png', '450', '200');

newImage('assets/tree.png', '200', '300');

newImage('assets/pillar.png', '350', '100');

newImage('assets/crate.png', '150', '200');

newImage('assets/well.png', '500', '450');

// // Adding an item
// let sword = document.createElement('img');
// sword.src = 'assets/sword.png';
// sword.position = 'fixed';
// sword.left = '500px';
// sword.bottom = '405px';
// document.body.append(sword);
// // Making the item desappear when it's clicked
// sword.addEventListener('click', function() {
//     sword.remove();
// })

// function newItem(itemName, itemAddress, leftPosition, bottomPosition) {
//     itemName = document.createElement('img');
//     itemName.src = itemAddress;
//     itemName.position = 'fixed';
//     itemName.left = leftPosition;
//     itemName.bottom = bottomPosition;
//     document.body.append(itemName);
//     itemName.addEventListener('click', function() {
//         itemName.remove();
//     })
// }

newItem('assets/sword.png', '500', '405');

function newImage(imgAddress, leftPosition, bottomPosition) {

    let imgName = document.createElement('img'); // I don't have to use let, because imgName is alredy declared in the function's parameter
    imgName.src = imgAddress;
    imgName.style.position = 'fixed';
    imgName.style.left = leftPosition + 'px';
    imgName.style.bottom = bottomPosition + 'px';
    document.body.append(imgName);
    return imgName;
}

function newItem(itemAddress, leftPosition, bottomPosition) {
    let itemName = newImage(itemAddress, leftPosition, bottomPosition);

    itemName.addEventListener('dblclick', function() {
        itemName.remove();
    })
}

newItem('assets/sheild.png', '165', '185');

newItem('assets/staff.png', '600', '100');

function background(url, left, bottom, width, height) {
    for(let h = 0; h < height; h++) {
        for(let w = 0; w < width; w++) {
            newImage(url, left + w * 100, bottom + h * 100);
        }
    }
}

let groundHeight = window.innerHeight * 0.6;
let skyHeight = window.innerHeight - groundHeight;

background('assets/grass.png', '0', '0', window.innerWidth / 100, groundHeight / 100);

background('assets/sky.png', '0', groundHeight, window.innerWidth / 100, skyHeight / 100);
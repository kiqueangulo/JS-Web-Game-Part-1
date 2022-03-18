// function newImage(imgName, imgAddress, leftPosition, bottomPosition) {
//     imgName = document.createElement('img') // I don't have to use let, because imgName is alredy declared in the function's parameter
//     imgName.src = imgAddress
//     imgName.style.position = 'fixed'
//     imgName.style.left = leftPosition
//     imgName.style.bottom = bottomPosition
//     document.body.append(imgName)
// }

// let greenCharacter = document.createElement('img')
// greenCharacter.src = './assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

newImage('greenCharacter', './assets/green-character.gif', '100px', '100px'); // Every argument that is suposed to be text goes in quotations

// let pineTree = document.createElement('img')
// pineTree.src = './assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)

newImage('pineTree', './assets/pine-tree.png', '450px', '200px');

newImage('tree', 'assets/tree.png', '200px', '300px');

newImage('pillar', 'assets/pillar.png', '350px', '100px');

newImage('crate', 'assets/crate.png', '150px', '200px');

newImage('well', 'assets/well.png', '500px', '450px');

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

newItem('sword', 'assets/sword.png', '500px', '405px');

function newImage(imgName, imgAddress, leftPosition, bottomPosition) {
    imgName = document.createElement('img') // I don't have to use let, because imgName is alredy declared in the function's parameter
    imgName.src = imgAddress
    imgName.style.position = 'fixed'
    imgName.style.left = leftPosition
    imgName.style.bottom = bottomPosition
    document.body.append(imgName)

    function newItem(itemName, itemAddress, leftPosition, bottomPosition) {
        itemName = document.createElement('img');
        itemName.src = itemAddress;
        itemName.position = 'fixed';
        itemName.left = leftPosition;
        itemName.bottom = bottomPosition;
        document.body.append(itemName);
        itemName.addEventListener('click', function() {
            itemName.remove();
        })
    }
}
const form = document.querySelector('form')
const items = []

function addItem() {
    const catalogNumber = form.elements['catalogNumber'].value
    const itemName = form.elements['itemName'].value
    const itemPrice = form.elements['itemPrice'].value
    const itemPhoto = form.elements['itemPhoto'].value
    const item = {
        catalogNumber: catalogNumber,
        itemName: itemName,
        itemPrice: itemPrice,
        itemPhoto: itemPhoto,
    }
    items.push(item)
    addItemToPage(item)
                  
}

function addItemToPage(itemToAdd) {
    const itemDetails = document.createElement('div')
    itemDetails.classList.add('item-details')
    itemDetails.setAttribute('id', 'item_' + itemToAdd.catalogNumber)

    const itemName = document.createElement('div')
    itemName.innerHTML = itemToAdd.itemName

    const itemPhoto = document.createElement('div')
    const itemPhotoImage = document.createElement('img')
    itemPhotoImage.classList.add('item-photo')
    itemPhotoImage.src = itemToAdd.itemPhoto
    itemPhoto.appendChild(itemPhotoImage)

    const itemPrice = document.createElement('div')
    itemPrice.innerHTML = itemToAdd.itemPrice

   
    const btnEdit = document.createElement('div')
    const buttonEditHtmlString = "<button onclick=edit('" + itemToAdd.catalogNumber + "')>Edit</button>"
    btnEdit.innerHTML = buttonEditHtmlString

    const btnDelete = document.createElement('div')
    const buttonDeleteHtmlString = "<button onclick=deleteItem('" + itemToAdd.catalogNumber + "')>Delete</button>"
    btnDelete.innerHTML = buttonDeleteHtmlString
    
    itemDetails.appendChild(itemName)
    itemDetails.appendChild(itemPhoto)
    itemDetails.appendChild(itemPrice)
    itemDetails.appendChild(btnEdit)
    itemDetails.appendChild(btnDelete)

    const listOfItems = document.querySelector('.list-of-items')
    listOfItems.appendChild(itemDetails)
}

function deleteItem(catalogNumber) {
    let indexToDelete
    for(let index in items) {

        if(items[index].catalogNumber === catalogNumber) {
            delete items[index]
        }
    }

    const itemDetails = document.querySelector('#' + 'item_' + catalogNumber)
    itemDetails.remove()
}
 
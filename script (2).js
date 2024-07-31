document.getElementById('addItemButton').addEventListener('click', function() {
    let newItem = document.createElement('li');
    newItem.innerText = 'New Item';
    document.getElementById('itemList').appendChild(newItem);
});

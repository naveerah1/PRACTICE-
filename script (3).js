let hoverDiv = document.getElementById('hoverDiv');

hoverDiv.addEventListener('mouseover', function() {
    hoverDiv.style.backgroundColor = 'lightgreen';
});

hoverDiv.addEventListener('mouseout', function() {
    hoverDiv.style.backgroundColor = 'lightblue';
});

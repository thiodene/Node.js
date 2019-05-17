var clickMeButton = document.createElement('button');
clickMeButton.id = 'btn';
clickMeButton.innerHTML = 0;
document.body.appendChild(clickMeButton);
var i = 0;
var btn = document.getElementById('btn');
btn.onclick = function() {
    i++;
    btn.innerHTML = i;
};

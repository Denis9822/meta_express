document.addEventListener("DOMContentLoaded", function() {

    var amount = 30;
    var body = document.querySelector('body');
    var i = 0;

    while (i < amount) {
        var rands = Math.floor(Math.random() * 2) + 1;

        var node = document.createElement("i");
        var posX = Math.floor(Math.random() * window.innerWidth);
        var posY = Math.floor(Math.random() * $(document).height());
        var rotation = Math.random() * 180;
        var delay = Math.random() * 20;
        var scale = Math.random() * 0.2;
        node.style.left = posX + 'px';
        node.style.top = posY + 'px';
        node.style.transform = 'rotate(' + rotation + 'deg) scale(' + scale + ')';
        node.style.animationDelay = delay + 's';
        if (rands == 1) {
            node.style.backgroundColor = "#FF1C5E";
            node.style.boxShadow = "0px 0px 5px 3px #FF1C5E";
        } else {
            node.style.backgroundColor = "white";
            node.style.boxShadow = "0px 0px 5px 3px #fff";
        }
        body.appendChild(node);
        i++;
    }

});

alert("asd");
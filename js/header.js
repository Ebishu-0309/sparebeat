/*
 <h1>Ebishu's Sparebeat Page</h1>
        <div class="header">
            <div class="header-list">
                <ul>
                    <li><a href="index.html">ƒz[ƒ€</a></li>
                    <li><a href="scores.html">•ˆ–Êˆê——</a></li>
                    <li><a href="contact.html">contact</a></li>
                    <li><a href="https://sparebeat.com/settings"target="_blank" rel="noopener noreferrer">İ’è</a> </li>
                </ul>
            </div>
        </div>
        */

var h1, div1, div2, ul, li, a;
h1 = document.createElement('h1'), div1 = document.createElement('div'), div2 = document.createElement('div'),
    ul = document.createElement('ul');

var url = ["scores.html", "update.html", "contact.html", "https://sparebeat.com/settings"], text = ["home", "update", "contact", "setting"];

for (var i = 0; i < 4; ++i) {
    var a = document.createElement('a'), li = document.createElement('li');
    a.href = url[i], a.textContent = text[i];
    li.appendChild(a);
    ul.appendChild(li);
}

h1.textContent = "Ebishu's Sparebeat Page", div1.className = 'header', div2.className = 'header-list';
div2.appendChild(ul);
div1.appendChild(div2);

document.getElementById('wrap').appendChild(h1);
document.getElementById('wrap').appendChild(div1);
const Data = {
    'raveltex': ['Raveltex - ETIA.', 'Raveltex', { 'Easy': '-', 'Normal': '-', 'Hard': '14'}],
    'gleam_of_aigis': ['Gleam of Aigis - Lime', 'Gleam of Aigis', { 'Easy': '-', 'Normal': '15', 'Hard': '16' }],
    'cold_breath': ['Cold Breath - SHIKI', 'Cold Breath', { 'Easy': '-', 'Normal': '11', 'Hard': '14' }],
    'cold_breath_H+': ['Cold Breath - SHIKI', 'Cold Breath Hard+', { 'Hard+': '16' }],
    'turn_it_up': ['Turn It Up - ETIA.', 'Turn It Up', { 'Easy': '6', 'Normal': '10', 'Hard': '13' }]
};

const id = location.search.substring(1).split('=')[1];
const data = Data[id];

if (data != undefined) {
    document.title = data[0];

    var h2 = document.createElement('h2'), ul = document.createElement('ul'), iframe = document.createElement('iframe');
    h2.textContent = data[1];
    document.getElementById('wrap').appendChild(h2);

    for (var i in data[2]) {
        var li = document.createElement('li');
        li.textContent = i + ': ' + data[2][i];
       ul.appendChild(li);
    }

    ul.style.listStyleType = "none";

    document.getElementById('wrap').appendChild(ul);

    iframe.id = "sparebeat",
        iframe.width = "960",
        iframe.height = "640",
        iframe.src = "https://sparebeat.com/embed/",
        iframe.frameBorder = "0";

    document.getElementById('wrap').appendChild(iframe);

    import("https://sparebeat.com/embed/client.js");

    Sparebeat.load('../map/' + id + '.json', '../music/' + id + '.mp3');

    window.addEventListener('load', function () {
        document.getElementById('sparebeat').height = window.outerWidth < 990 ? 1280 : 640;
    });

    var timeline_link = document.getElementById('start-timeline').children('a').href;
    var object = document.createElement('object');
    object.data = timeline_link,
        object.align = center,
        object.width = "960",
        object.height = "600",
        object.frameborder = "no",
        object.scrolling = "yes";

    document.getElementById('wrap').appendChild(object);
}
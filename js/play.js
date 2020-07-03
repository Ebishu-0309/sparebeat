const Data = {
    "raveltex": {
        "title": "Raveltex - ETIA.",
        "songtitle": "Raveltex",
        "mp3": "raveltex",
        "level": {
            "Easy": "-",
            "Normal": "-",
            "Hard": "14"
        }
    },
    "gleam_of_aigis": {
        "title": "Gleam of Aigis - Lime",
        "songtitle": "Gleam of Aigis",
        "mp3": "gleam_of_aigis",
        "level": {
            "Easy": "-",
            "Normal": "15",
            "Hard": "16"
        }
    },
    "cold_breath": {
        "title": "Cold Breath - SHIKI",
        "songtitle": "Cold Breath",
        "mp3": "cold_breath",
        "level": {
            "Easy": "-",
            "Normal": "11",
            "Hard": "14"
        }
    },
    "cold_breath_H+": {
        "title": "Cold Breath - SHIKI",
        "songtitle": "Cold Breath Hard+",
        "mp3": "cold_breath",
        "level": {
            "Hard+": "16"
        }
    },
    "turn_it_up": {
        "title": "Turn It Up - ETIA.",
        "songtitle": "Turn It Up",
        "mp3": "turn_it_up",
        "level": {
            "Easy": "6",
            "Normal": "10",
            "Hard": "13"
        }
    },
    "hisyou": {
        "title": "飛翔天華 - しらいし",
        "songtitle": "飛翔天華",
        "mp3" : "hisyou",
        "level": {
            "Easy": "7",
            "Normal": "10",
            "Hard": "14"
        }
    },
    "gleam_of_aigis_remake": {
        "title": "Gleam of Aigis - Lime",
        "songtitle": "Gleam of Aigis [Remake]",
        "mp3": "gleam_of_aigis",
        "level": {
            "Easy": "13",
            "Normal": "15",
            "Hard": "16"
        }
    }
};

const id = location.search.substring(1).split('=')[1];
const data = Data[id];

if (data != undefined) {
    document.title = data["title"];

    var h2 = document.createElement('h2'), ul = document.createElement('ul'), iframe = document.createElement('iframe');
    h2.textContent = data["songtitle"];
    document.getElementById('wrap').appendChild(h2);

    for (var key in data["level"]) {
        var li = document.createElement('li');
        li.textContent = key + ': ' + data["level"][key];
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
}
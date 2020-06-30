var obj = document.createElement("object");
obj.data = "https://sparebeat.com/embed/timeline/" + CybozuLabs.MD5.calc("https://ebishu-0309.github.io/sparebeat/play/?id=" + id);
obj.align = "center";
obj.width = "960";
obj.height = "600";
obj.frameborder = "no";
obj.scrolling = "yes";

document.getElementById("wrap").appendChild(obj);
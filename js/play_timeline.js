var obj = document.createElement("object");
obj.data = "https://sparebeat.com/embed/timeline/" + Data[id]["timeline"];
obj.align = "center";
obj.width = "960";
obj.height = "600";
obj.frameborder = "no";
obj.scrolling = "yes";

document.getElementById("wrap").appendChild(obj);
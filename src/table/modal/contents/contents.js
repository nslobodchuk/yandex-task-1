var Head = require("./components/head.js");
var Info = require("./components/info.js");
var Image = require("./components/image.js");

function Contents(){
    this.element = document.createElement("div");
    this.element.className = "container";
    this.element.id = "modal-contents";

        this.head = new Head();
        this.element.appendChild(this.head.element);

        this.body = document.createElement("div");
        this.body.id = "modal-body";
        this.element.appendChild(this.body);

            this.info = new Info();
            this.body.appendChild(this.info.element);
            this.image = new Image();
            this.body.appendChild(this.image.element);

    this.set_contents = function(data){
        this.info.p.textContent = data["info"];
        this.image.img.src = data["img"];
    };
}

module.exports = Contents;
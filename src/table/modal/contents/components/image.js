function Image(){
	this.element = document.createElement("div");
	this.element.id = "modal-image";

	    this.img = document.createElement("img");
	    this.element.appendChild(this.img);
	    this.img.src = "";
}

module.exports = Image;
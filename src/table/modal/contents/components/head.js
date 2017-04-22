function Head(){
	this.element = document.createElement("div");
	this.element.id = "modal-head";

	    this.title = document.createElement("h3");
	    this.element.appendChild(this.title);

	        var title_text = document.createTextNode("Информация о лекторе.");
	        this.title.appendChild(title_text);

	    this.close = document.createElement("h1");
	    this.close.id = "modal-close";
	    this.element.appendChild(this.close);

	        close_text = document.createTextNode("\u00d7");
	        this.close.appendChild(close_text);
}

module.exports = Head;
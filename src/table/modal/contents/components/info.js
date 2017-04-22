function Info(){
	this.element = document.createElement("div");
	this.element.id = "modal-info";

	    this.p = document.createElement("p");
	    this.element.appendChild(this.p);

	        this.text = document.createTextNode("");
	        this.p.appendChild(this.text);
}

module.exports = Info;
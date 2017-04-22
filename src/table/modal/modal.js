var Contents = require("./contents/contents.js");

function Modal() {

	this.element = document.createElement("div");
	this.element.id = "modal";
	document.body.appendChild(this.element);
	this.contents = new Contents();
	this.element.appendChild(this.contents.element);

	this.bottom = -100;
	this.opacity = 0;
	this.interval = {};
	this.interval.activate = null;
	this.interval.deactivate = null;

	this.activate = function(data){
		console.log("activating modal");
		console.log(this);
		this.contents.set_contents(data);
		clearInterval(this.interval.activate);
        clearInterval(this.interval.deactivate);
        this.interval.activate = setInterval(activate_modal.bind(this), 10);
	};

	this.deactivate = function(){
		console.log("deactivating modal");
		clearInterval(this.interval.activate);
        clearInterval(this.interval.deactivate);
        this.interval.deactivate = setInterval(deactivate_modal.bind(this), 10);
	};

	function activate_modal(){
		var index = (this.bottom+100)/100;

		index===0? (index=0.01) : (index = Math.pow(index, 0.9));
	    this.bottom = -100*(1-index);
	    this.element.style.bottom =  this.bottom + "%";
	    if (this.bottom>=-0.1){
	        clearInterval(this.interval.activate);
	        this.bottom = 0;
	        this.element.style.bottom =  "0%";
	  
	        console.log("cleared interval with bottom " + this.bottom);
	    }
	}

	function deactivate_modal(){
		var index = (-this.bottom)/100;
		index===0? (index=0.01) : (index = Math.pow(index, 0.9));
		this.bottom = -100*index;
		this.element.style.bottom =  this.bottom+"%";
		if (this.bottom<=-100){
		    clearInterval(this.interval.deactivate);
		    this.bottom = -100;
		    this.element.style.bottom =  "-100%";
		    console.log("cleared interval with bottom " + this.bottom);
		    }
    }

    this.contents.head.close.addEventListener("click", this.deactivate.bind(this));
    this.element.addEventListener("click", function(event){if (this.element!==event.target) return; this.deactivate();}.bind(this));


}

module.exports = Modal;
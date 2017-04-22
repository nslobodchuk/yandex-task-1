var Row = require("./row/row.js");
var Modal = require("./modal/modal.js");

function Table(schedule, lecturers){

    this.schedule = schedule;
    this.lecturers = lecturers;
    this.element = document.createElement("div");
    this.rows = [];

    for(var i = 0; i < schedule.length; ++i){
        var row = new Row(schedule[i]);
        this.element.appendChild(row.element);
        row.lecturer_cell.element.addEventListener("click", return_activate(this.lecturers[schedule[i]["лектор"]]));
        this.rows.push(row);
    }

}

var modal = new Modal();

/*storing lecturer data with closure*/
function return_activate(data){
    return function(){
        modal.activate(data);
    };
}

module.exports = Table;




var SchoolCell = require("./cell/school_cell.js");
var LectureCell = require("./cell/lecture_cell.js");
var LecturerCell = require("./cell/lecturer_cell.js");
var DateCell = require("./cell/date_cell.js");
var RoomCell = require("./cell/room_cell.js");
var LinksCell = require("./cell/links_cell.js");


function Row(data){

    this.data = data;
    this.element = document.createElement("div");
    this.element.className = "row container";

    this.school_cell = new SchoolCell(data["школы"]);
    this.element.appendChild(this.school_cell.element);
    this.lecture_cell = new LectureCell(data["тема"]);
    this.element.appendChild(this.lecture_cell.element);
    this.lecturer_cell = new LecturerCell(data["лектор"]);
    this.element.appendChild(this.lecturer_cell.element);
    this.date_cell = new DateCell(data["дата"]);
    this.element.appendChild(this.date_cell.element);
    this.room_cell = new RoomCell(data["место"]);
    this.element.appendChild(this.room_cell.element);
    

    var now = new Date();
    if (this.date_cell.data<now){
        this.element.className = this.element.className + " passed";
        this.links_cell = new LinksCell(data["ссылки"]);
        this.element.appendChild(this.links_cell.element);
    }

}

module.exports = Row;
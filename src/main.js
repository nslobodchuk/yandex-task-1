var schedule = require("./data/schedule.json");
var lecturers = require("./data/lecturers.json");
var Table = require("./table/table.js");

var schedule_container = document.getElementById("schedule");
var table = new Table(schedule, lecturers);
schedule_container.appendChild(table.element);
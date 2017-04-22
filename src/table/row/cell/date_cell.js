function DateCell(data){
    var ymd = data.split("-");
    this.data = new Date(parseInt(ymd[0]), parseInt(ymd[1]), parseInt(ymd[2]));
    this.element = document.createElement("div");
    this.element.className = "date-column";

        var container = document.createElement("div");
        container.className = "container cell";
        this.element.appendChild(container);

            var title_div = document.createElement("div");
            title_div.className = "date-title title";
            container.appendChild(title_div);

                var title = document.createElement("p");
                title_div.appendChild(title);

                    var title_text = document.createTextNode("Дата лекции:");
                    title.appendChild(title_text);

            var value_div = document.createElement("div");
            value_div.className = "date-value value";
            container.appendChild(value_div);
                
                var value = document.createElement("p");
                value_div.appendChild(value);

                    var value_text = document.createTextNode(data);
                    value.appendChild(value_text);     
}

module.exports = DateCell;
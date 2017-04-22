function SchoolCell(data){
    this.data = data;
    this.element = document.createElement("div");
    this.element.className = "school-column";

        var container = document.createElement("div");
        container.className = "container cell";
        this.element.appendChild(container);

            var title_div = document.createElement("div");
            title_div.className = "school-title title";
            container.appendChild(title_div);

                var title = document.createElement("p");
                title_div.appendChild(title);

                    var title_text = document.createTextNode((data.constructor === Array && data.length>1) ? "Школы:" : "Школа:");
                    title.appendChild(title_text);

            var value_div = document.createElement("div");
            value_div.className = "school-value value";
            container.appendChild(value_div);
                
                if (data.constructor === Array){
                    for (var data_index = 0; data_index < data.length; ++data_index){
                        var value = document.createElement("p");
                        value_div.appendChild(value);

                            var value_text = document.createTextNode(data[data_index]);
                            value.appendChild(value_text);
                    }
                } else {
                    var value = document.createElement("p");
                    value_div.appendChild(value);

                        var value_text = document.createTextNode(data);
                        value.appendChild(value_text);
                }
}


module.exports = SchoolCell;
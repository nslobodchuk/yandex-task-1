function LecturerCell(data){
    this.data = data;
    this.element = document.createElement("div");
    this.element.className = "lecturer-column";

        var container = document.createElement("div");
        container.className = "container cell";
        this.element.appendChild(container);

            var title_div = document.createElement("div");
            title_div.className = "lecturer-title title";
            container.appendChild(title_div);

                var title = document.createElement("p");
                title_div.appendChild(title);

                    var title_text = document.createTextNode("Имя лектора:");
                    title.appendChild(title_text);

            var value_div = document.createElement("div");
            value_div.className = "lecturer-value value";
            container.appendChild(value_div);
                
                var value = document.createElement("p");
                value_div.appendChild(value);

                    var value_text = document.createTextNode(data);
                    value.appendChild(value_text);     
}

module.exports = LecturerCell;
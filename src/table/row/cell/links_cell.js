function LinksCell(data){
    this.data = data;
    this.element = document.createElement("div");
    this.element.className = "links-column";

        var container = document.createElement("div");
        container.className = "container cell";
        this.element.appendChild(container);

            var title_div = document.createElement("div");
            title_div.className = "links-title title";
            container.appendChild(title_div);

                var title = document.createElement("p");
                title_div.appendChild(title);

                    var title_text = document.createTextNode("Видеозапись и материалы лекции:");
                    title.appendChild(title_text);

            var value_div = document.createElement("div");
            value_div.className = "links-value value";
            container.appendChild(value_div);

               for (var link_name in data){
                    console.log(link_name);
                    var p = document.createElement("p");
                        var value = document.createElement("a");
                        value.href = data[link_name];
                            var value_text = document.createTextNode(link_name);
                            value.appendChild(value_text);  
                    value_div.appendChild(p);
                    p.appendChild(value);
               }
                
                   
}

module.exports = LinksCell;
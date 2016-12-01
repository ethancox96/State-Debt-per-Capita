    // Various accessors that specify the four dimensions of data to visualize.
    function x(d) { return d.expenses; }
    function y(d) { return d.income; }
    function radius(d) { return d.perCapita; }
    function color(d) { return d.region; }
    function key(d) { return d.name; }
		
    // Chart dimensions.
    var margin = {top: 20, right: 40, bottom: 30, left: 50},
        width = 1024 - margin.right,
        height = 550 - margin.top - margin.bottom;
    
    // Various scales. These domains make assumptions of data, naturally.
    var xScale = d3.scale.linear().domain([1, 60])
        .range([0, width]);
    var yScale = d3.scale.linear().domain([1, 60])
        .range([height, 0]);
    var radiusScale = d3.scale.sqrt().domain([0, 12500])
        .range([0, 50]);
    var colorScale = d3.scale.ordinal().domain(["1","2","3","4","5","6","7","8","9","10"])
        .range(["#4169E1","#9ACD32","#DC143C","#008000","#000080","#DAA520","#FFD700","#8A2BE2","#A0522D","#F0E68C"]);
		
    // The x & y axes.
    var xAxis = d3.svg.axis()
        .orient("bottom").scale(xScale)
        .ticks(12, d3.format(",d"));
    
    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");
		
    // Create the SVG container and set the origin.
    var svg = d3.select("#chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    // Add the x-axis.
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);
    
    // Add the y-axis.
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);
    
    // Add an x-axis label.
    svg.append("text")
        .attr("class", "x label")
        .attr("text-anchor", "end")
        .attr("x", width)
        .attr("y", height - 6)
        .text("Expenses (billions)");
    
    // Add a y-axis label.
    svg.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .attr("y", 6)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("Income (billions)");
    
    // Add the year label; the value is set on transition.
    var label = svg.append("text")
        .attr("class", "year label")
        .attr("text-anchor", "end")
        .attr("y", height - 24)
        .attr("x", width)
        .text(2000);

    // draw legend colored rectangles
    svg.append("rect")
        .attr("x", width-670)
        //.attr("y", height-230)
        .attr("y", height-500)
        .attr("width", 220)
        .attr("height", 270)
        .attr("fill", "lightgrey")
        .style("stroke-size", "1px");

    svg.append("circle")
        .attr("r", 10)
        .attr("cx", width-470)
        //.attr("cy", height-215)
        .attr("cy", height-480)
        .style("fill", "#4169E1");
    
    svg.append("circle")
        .attr("r", 10)
        .attr("cx", width-470)
        //.attr("cy", height-190)
        .attr("cy", height-455)
        .style("fill", "#9ACD32");

    svg.append("circle")
        .attr("r", 10)
        .attr("cx", width-470)
        //.attr("cy", height-120)
        .attr("cy", height-430)
        .style("fill", "#DC143C");

    svg.append("circle")
        .attr("r", 10)
        .attr("cx", width-470)
        //.attr("cy", height-120)
        .attr("cy", height-405)
        .style("fill", "#008000");

    svg.append("circle")
        .attr("r", 10)
        .attr("cx", width-470)
        //.attr("cy", height-120)
        .attr("cy", height-380)
        .style("fill", "#000080");

    svg.append("circle")
        .attr("r", 10)
        .attr("cx", width-470)
        //.attr("cy", height-120)
        .attr("cy", height-355)
        .style("fill", "#DAA520");

    svg.append("circle")
        .attr("r", 10)
        .attr("cx", width-470)
        //.attr("cy", height-120)
        .attr("cy", height-330)
        .style("fill", "#FFD700");

    svg.append("circle")
        .attr("r", 10)
        .attr("cx", width-470)
        //.attr("cy", height-120)
        .attr("cy", height-305)
        .style("fill", "#8A2BE2");

    svg.append("circle")
        .attr("r", 10)
        .attr("cx", width-470)
        //.attr("cy", height-120)
        .attr("cy", height-280)
        .style("fill", "#A0522D");

    svg.append("circle")
        .attr("r", 10)
        .attr("cx", width-470)
        //.attr("cy", height-120)
        .attr("cy", height-255)
        .style("fill", "#F0E68C");

    svg.append("text")
        .attr("class", "label")
        .attr("x", width -520)
        //.attr("y", height-212)
        .attr("y", height-475)
        .style("text-anchor", "end")
        .text("Connecticut");

    svg.append("text")
        .attr("class", "label")
        .attr("x", width -520)
        //.attr("y", height-187)
        .attr("y", height-450)
        .style("text-anchor", "end")
        .text("Alaska");

    svg.append("text")
        .attr("class", "label")
        .attr("x", width -520)
        //.attr("y", height-117)
        .attr("y", height-425)
        .style("text-anchor", "end")
        .text("Massachusets");

    svg.append("text")
        .attr("class", "label")
        .attr("x", width -520)
        //.attr("y", height-117)
        .attr("y", height-400)
        .style("text-anchor", "end")
        .text("Rhode Island");

    svg.append("text")
        .attr("class", "label")
        .attr("x", width -520)
        //.attr("y", height-117)
        .attr("y", height-375)
        .style("text-anchor", "end")
        .text("New Jersey");

    svg.append("text")
        .attr("class", "label")
        .attr("x", width -520)
        //.attr("y", height-117)
        .attr("y", height-350)
        .style("text-anchor", "end")
        .text("Tennessee");

    svg.append("text")
        .attr("class", "label")
        .attr("x", width -520)
        //.attr("y", height-117)
        .attr("y", height-325)
        .style("text-anchor", "end")
        .text("Nevada");

    svg.append("text")
        .attr("class", "label")
        .attr("x", width -520)
        //.attr("y", height-117)
        .attr("y", height-300)
        .style("text-anchor", "end")
        .text("Nebraska");

    svg.append("text")
        .attr("class", "label")
        .attr("x", width -520)
        //.attr("y", height-117)
        .attr("y", height-275)
        .style("text-anchor", "end")
        .text("Wyoming");

    svg.append("text")
        .attr("class", "label")
        .attr("x", width -520)
        //.attr("y", height-117)
        .attr("y", height-250)
        .style("text-anchor", "end")
        .text("Georgia");

    //legend for population size
    // draw legend colored rectangles
    svg.append("rect")
        .attr("x", 25)
        //.attr("y", height-230)
        .attr("y", 10)
        .attr("width", 260)
        .attr("height", 175)
        .attr("fill", "lightgrey")
        .style("stroke-size", "1px");

    svg.append("circle")
        .attr("r", 10)
        .attr("cx", 225)
        //.attr("cy", height-215)
        .attr("cy", 173)
        .style("fill", "white");
    
    svg.append("circle")
        .attr("r", 20)
        .attr("cx", 225)
        //.attr("cy", height-190)
        .attr("cy", 142)
        .style("fill", "white");

    svg.append("circle")
        .attr("r", 50)
        .attr("cx", 225)
        //.attr("cy", height-120)
        .attr("cy", 72)
        .style("fill", "white");

    svg.append("text")
        .attr("class", "label")
        .attr("x", 160)
        //.attr("y", height-212)
        .attr("y", 173)
        .style("text-anchor", "end")
        .text("$650 debt per Capita");

    svg.append("text")
        .attr("class", "label")
        .attr("x", 160)
        //.attr("y", height-187)
        .attr("y", 147)
        .style("text-anchor", "end")
        .text("$5000 debt per Capita");

    svg.append("text")
        .attr("class", "label")
        .attr("x", 160)
        //.attr("y", height-117)
        .attr("y", 77)
        .style("text-anchor", "end")
        .text("$12,500 debt per Capita");

    /*var lineData = [{x:1,y:1}, {x:10,y:10}, {x:20,y:20}, {x:30,y:30}, {x:40,y:40}, {x:50,y:50},     {x:60,y:60}];

    var line = d3.svg.line()
        .x(function(d) {
            return xScale(d.x);
        })
        .y(function(d) {
            return yScale(d.y);
        })
        .interpolate("basis");

    svg.append("path")
      .attr("d", line(lineData))
      .attr("stroke", "black")
      .attr("stroke-width", .5)
      .attr("fill", "none");*/

    var div = d3.select("#chart").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);
		
    // Load the data.
    d3.json("states.json", function(error, states) {
		if (error) throw error;
        
        // A bisector since many nation's data is sparsely-defined.
        var bisect = d3.bisector(function(d) { return d[0]; });

        // Add a dot per nation. Initialize the data at 2009, and set the colors.
        var dot = svg.append("g")
            .attr("class", "dots")
            .selectAll(".dot")
            .data(interpolateData(2000))
            .enter().append("circle")
            .attr("class", "dot")
            .style("fill", function(d) { return colorScale(color(d)); })
            .call(position)
            .sort(order)
            .on("mouseover", function(d) {
                div.transition()
                .duration(275)
                .style("opacity", .9);
                var expenses = "Expenses: " + Math.round(d.expenses * 10)/10 + " Billion";
                var income = "Income: " + Math.round(d.income * 10)/10 + " Billion";
                var perCapita = "Debt per Capita: " + Math.round(d.perCapita * 10)/10;
                div.html(d.name + "<br>" + expenses + "<br>" + income + "<br>" + perCapita)
                    .style("left", (d3.event.pageX + 5) + "px")
                    .style("top", (d3.event.pageY - 28) + "px");
            })
            .on("mouseout", function(d) {
                div.transition()
                   .duration(300)
                   .style("opacity", 0);
            });

          // Add a title.
          dot.append("title")
              .text(function(d) { return d.name; });

          // Add an overlay for the year label.
          var box = label.node().getBBox();

          var overlay = svg.append("rect")
                .attr("class", "overlay")
                .attr("x", box.x)
                .attr("y", box.y)
                .attr("width", box.width)
                .attr("height", box.height - 20)
                .on("mouseover", enableInteraction);

          // Start a transition that interpolates the data based on year.
          svg.transition()
              .duration(15000)
              .ease("linear")
              .tween("year", tweenYear)
              .each("end", enableInteraction);

          // Positions the dots based on data.
          function position(dot) {
             dot.attr("cx", function(d) { return xScale(x(d)); })
                .attr("cy", function(d) { return yScale(y(d)); })
                .attr("r", function(d) { return radiusScale(radius(d)); });
          }

          // Defines a sort order so that the smallest dots are drawn on top.
          function order(a, b) {
            return radius(b) - radius(a);
          }

          // After the transition finishes, you can mouseover to change the year.
          function enableInteraction() {
            var yearScale = d3.scale.linear()
                .domain([2000, 2016])
                .range([box.x + 10, box.x + box.width - 10])
                .clamp(true);

            // Cancel the current transition, if any.
            svg.transition().duration(0);

            overlay
                .on("mouseover", mouseover)
                .on("mouseout", mouseout)
                .on("mousemove", mousemove)
                .on("touchmove", mousemove);

            function mouseover() {
                label.classed("active", true);
            }

            function mouseout() {
                label.classed("active", false);
            }

            function mousemove() {
                displayYear(yearScale.invert(d3.mouse(this)[0]));
            }
          }

          // Tweens the entire chart by first tweening the year, and then the data.
          // For the interpolated data, the dots and label are redrawn.
          function tweenYear() {
            var year = d3.interpolateNumber(2000, 2016);
            return function(t) { displayYear(year(t)); };
          }

          // Updates the display to show the specified year.
          function displayYear(year) {
            dot.data(interpolateData(year), key).call(position).sort(order);
            label.text(Math.round(year));
          }

          // Interpolates the dataset for the given (fractional) year.
          function interpolateData(year) {
            return states.map(function(d) {
              return {
                name: d.state,
                region: d.state,
                expenses: interpolateValues(d.expenses, year),
                income: interpolateValues(d.income, year),
                perCapita: interpolateValues(d.perCapita, year)
              };
            });
          }

          // Finds (and possibly interpolates) the value for the specified year.
          function interpolateValues(values, year) {
            var i = bisect.left(values, year, 0, values.length - 1),
                a = values[i];
            if (i > 0) {
              var b = values[i - 1],
                  t = (year - a[0]) / (b[0] - a[0]);
              return a[1] * (1 - t) + b[1] * t;
            }
            return a[1];
          }
    });

    function showAllTen(){
        d3.select("svg").remove();
        
        /*// Chart dimensions.
        var margin = {top: 20, right: 40, bottom: 30, left: 50},
            width = 1024 - margin.right,
            height = 550 - margin.top - margin.bottom;

        // Various scales. These domains make assumptions of data, naturally.
        var xScale = d3.scale.linear().domain([1, 60])
            .range([0, width]);
        var yScale = d3.scale.linear().domain([1, 60])
            .range([height, 0]);
        var radiusScale = d3.scale.sqrt().domain([0, 12500])
            .range([0, 50]);
        var colorScale = d3.scale.ordinal().domain(["1","2","3","4","5","6","7","8","9","10"])
            .range(["#4169E1","#9ACD32","#DC143C","#008000","#000080","#DAA520","#FFD700","#8A2BE2","#A0522D","#F0E68C"]);

        // The x & y axes.
        var xAxis = d3.svg.axis()
            .orient("bottom").scale(xScale)
            .ticks(12, d3.format(",d"));

        var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left");*/

        // Create the SVG container and set the origin.
        var svg = d3.select("#chart").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // Add the x-axis.
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        // Add the y-axis.
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);

        // Add an x-axis label.
        svg.append("text")
            .attr("class", "x label")
            .attr("text-anchor", "end")
            .attr("x", width)
            .attr("y", height - 6)
            .text("Expenses (billions)");

        // Add a y-axis label.
        svg.append("text")
            .attr("class", "y label")
            .attr("text-anchor", "end")
            .attr("y", 6)
            .attr("dy", ".75em")
            .attr("transform", "rotate(-90)")
            .text("Income (billions)");

        // Add the year label; the value is set on transition.
        var label = svg.append("text")
            .attr("class", "year label")
            .attr("text-anchor", "end")
            .attr("y", height - 24)
            .attr("x", width)
            .text(2000);

        // draw legend colored rectangles
        svg.append("rect")
            .attr("x", width-670)
            //.attr("y", height-230)
            .attr("y", height-500)
            .attr("width", 220)
            .attr("height", 270)
            .attr("fill", "lightgrey")
            .style("stroke-size", "1px");

        svg.append("circle")
            .attr("r", 10)
            .attr("cx", width-470)
            //.attr("cy", height-215)
            .attr("cy", height-480)
            .style("fill", "#4169E1");

        svg.append("circle")
            .attr("r", 10)
            .attr("cx", width-470)
            //.attr("cy", height-190)
            .attr("cy", height-455)
            .style("fill", "#9ACD32");

        svg.append("circle")
            .attr("r", 10)
            .attr("cx", width-470)
            //.attr("cy", height-120)
            .attr("cy", height-430)
            .style("fill", "#DC143C");

        svg.append("circle")
            .attr("r", 10)
            .attr("cx", width-470)
            //.attr("cy", height-120)
            .attr("cy", height-405)
            .style("fill", "#008000");

        svg.append("circle")
            .attr("r", 10)
            .attr("cx", width-470)
            //.attr("cy", height-120)
            .attr("cy", height-380)
            .style("fill", "#000080");

        svg.append("circle")
            .attr("r", 10)
            .attr("cx", width-470)
            //.attr("cy", height-120)
            .attr("cy", height-355)
            .style("fill", "#DAA520");

        svg.append("circle")
            .attr("r", 10)
            .attr("cx", width-470)
            //.attr("cy", height-120)
            .attr("cy", height-330)
            .style("fill", "#FFD700");

        svg.append("circle")
            .attr("r", 10)
            .attr("cx", width-470)
            //.attr("cy", height-120)
            .attr("cy", height-305)
            .style("fill", "#8A2BE2");

        svg.append("circle")
            .attr("r", 10)
            .attr("cx", width-470)
            //.attr("cy", height-120)
            .attr("cy", height-280)
            .style("fill", "#A0522D");

        svg.append("circle")
            .attr("r", 10)
            .attr("cx", width-470)
            //.attr("cy", height-120)
            .attr("cy", height-255)
            .style("fill", "#F0E68C");

        svg.append("text")
            .attr("class", "label")
            .attr("x", width -520)
            //.attr("y", height-212)
            .attr("y", height-475)
            .style("text-anchor", "end")
            .text("Connecticut");

        svg.append("text")
            .attr("class", "label")
            .attr("x", width -520)
            //.attr("y", height-187)
            .attr("y", height-450)
            .style("text-anchor", "end")
            .text("Alaska");

        svg.append("text")
            .attr("class", "label")
            .attr("x", width -520)
            //.attr("y", height-117)
            .attr("y", height-425)
            .style("text-anchor", "end")
            .text("Massachusets");

        svg.append("text")
            .attr("class", "label")
            .attr("x", width -520)
            //.attr("y", height-117)
            .attr("y", height-400)
            .style("text-anchor", "end")
            .text("Rhode Island");

        svg.append("text")
            .attr("class", "label")
            .attr("x", width -520)
            //.attr("y", height-117)
            .attr("y", height-375)
            .style("text-anchor", "end")
            .text("New Jersey");

        svg.append("text")
            .attr("class", "label")
            .attr("x", width -520)
            //.attr("y", height-117)
            .attr("y", height-350)
            .style("text-anchor", "end")
            .text("Tennessee");

        svg.append("text")
            .attr("class", "label")
            .attr("x", width -520)
            //.attr("y", height-117)
            .attr("y", height-325)
            .style("text-anchor", "end")
            .text("Nevada");

        svg.append("text")
            .attr("class", "label")
            .attr("x", width -520)
            //.attr("y", height-117)
            .attr("y", height-300)
            .style("text-anchor", "end")
            .text("Nebraska");

        svg.append("text")
            .attr("class", "label")
            .attr("x", width -520)
            //.attr("y", height-117)
            .attr("y", height-275)
            .style("text-anchor", "end")
            .text("Wyoming");

        svg.append("text")
            .attr("class", "label")
            .attr("x", width -520)
            //.attr("y", height-117)
            .attr("y", height-250)
            .style("text-anchor", "end")
            .text("Georgia");

        //legend for population size
        // draw legend colored rectangles
        svg.append("rect")
            .attr("x", 25)
            //.attr("y", height-230)
            .attr("y", 10)
            .attr("width", 260)
            .attr("height", 175)
            .attr("fill", "lightgrey")
            .style("stroke-size", "1px");

        svg.append("circle")
            .attr("r", 10)
            .attr("cx", 225)
            //.attr("cy", height-215)
            .attr("cy", 173)
            .style("fill", "white");

        svg.append("circle")
            .attr("r", 20)
            .attr("cx", 225)
            //.attr("cy", height-190)
            .attr("cy", 142)
            .style("fill", "white");

        svg.append("circle")
            .attr("r", 50)
            .attr("cx", 225)
            //.attr("cy", height-120)
            .attr("cy", 72)
            .style("fill", "white");

        svg.append("text")
            .attr("class", "label")
            .attr("x", 160)
            //.attr("y", height-212)
            .attr("y", 173)
            .style("text-anchor", "end")
            .text("$650 debt per Capita");

        svg.append("text")
            .attr("class", "label")
            .attr("x", 160)
            //.attr("y", height-187)
            .attr("y", 147)
            .style("text-anchor", "end")
            .text("$5000 debt per Capita");

        svg.append("text")
            .attr("class", "label")
            .attr("x", 160)
            //.attr("y", height-117)
            .attr("y", 77)
            .style("text-anchor", "end")
            .text("$12,500 debt per Capita");

        /*var lineData = [{x:1,y:1}, {x:10,y:10}, {x:20,y:20}, {x:30,y:30}, {x:40,y:40}, {x:50,y:50},     {x:60,y:60}];

        var line = d3.svg.line()
            .x(function(d) {
                return xScale(d.x);
            })
            .y(function(d) {
                return yScale(d.y);
            })
            .interpolate("basis");

        svg.append("path")
          .attr("d", line(lineData))
          .attr("stroke", "black")
          .attr("stroke-width", .5)
          .attr("fill", "none");*/

        var div = d3.select("#chart").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        // Load the data.
        d3.json("states.json", function(error, states) {
            if (error) throw error;

            // A bisector since many nation's data is sparsely-defined.
            var bisect = d3.bisector(function(d) { return d[0]; });

            // Add a dot per nation. Initialize the data at 2009, and set the colors.
            var dot = svg.append("g")
                .attr("class", "dots")
                .selectAll(".dot")
                .data(interpolateData(2000))
                .enter().append("circle")
                .attr("class", "dot")
                .style("fill", function(d) { return colorScale(color(d)); })
                .call(position)
                .sort(order)
                .on("mouseover", function(d) {
                    div.transition()
                    .duration(275)
                    .style("opacity", .9);
                    var expenses = "Expenses: " + Math.round(d.expenses * 10)/10 + " Billion";
                    var income = "Income: " + Math.round(d.income * 10)/10 + " Billion";
                    var perCapita = "Debt per Capita: " + Math.round(d.perCapita * 10)/10;
                    div.html(d.name + "<br>" + expenses + "<br>" + income + "<br>" + perCapita)
                        .style("left", (d3.event.pageX + 5) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
                })
                .on("mouseout", function(d) {
                    div.transition()
                       .duration(300)
                       .style("opacity", 0);
                });

              // Add a title.
              dot.append("title")
                  .text(function(d) { return d.name; });

              // Add an overlay for the year label.
              var box = label.node().getBBox();

              var overlay = svg.append("rect")
                    .attr("class", "overlay")
                    .attr("x", box.x)
                    .attr("y", box.y)
                    .attr("width", box.width)
                    .attr("height", box.height - 20)
                    .on("mouseover", enableInteraction);

              // Start a transition that interpolates the data based on year.
              svg.transition()
                  .duration(15000)
                  .ease("linear")
                  .tween("year", tweenYear)
                  .each("end", enableInteraction);

              // Positions the dots based on data.
              function position(dot) {
                 dot.attr("cx", function(d) { return xScale(x(d)); })
                    .attr("cy", function(d) { return yScale(y(d)); })
                    .attr("r", function(d) { return radiusScale(radius(d)); });
              }

              // Defines a sort order so that the smallest dots are drawn on top.
              function order(a, b) {
                return radius(b) - radius(a);
              }

              // After the transition finishes, you can mouseover to change the year.
              function enableInteraction() {
                var yearScale = d3.scale.linear()
                    .domain([2000, 2016])
                    .range([box.x + 10, box.x + box.width - 10])
                    .clamp(true);

                // Cancel the current transition, if any.
                svg.transition().duration(0);

                overlay
                    .on("mouseover", mouseover)
                    .on("mouseout", mouseout)
                    .on("mousemove", mousemove)
                    .on("touchmove", mousemove);

                function mouseover() {
                    label.classed("active", true);
                }

                function mouseout() {
                    label.classed("active", false);
                }

                function mousemove() {
                    displayYear(yearScale.invert(d3.mouse(this)[0]));
                }
              }

              // Tweens the entire chart by first tweening the year, and then the data.
              // For the interpolated data, the dots and label are redrawn.
              function tweenYear() {
                var year = d3.interpolateNumber(2000, 2016);
                return function(t) { displayYear(year(t)); };
              }

              // Updates the display to show the specified year.
              function displayYear(year) {
                dot.data(interpolateData(year), key).call(position).sort(order);
                label.text(Math.round(year));
              }

              // Interpolates the dataset for the given (fractional) year.
              function interpolateData(year) {
                return states.map(function(d) {
                  return {
                    name: d.state,
                    region: d.state,
                    expenses: interpolateValues(d.expenses, year),
                    income: interpolateValues(d.income, year),
                    perCapita: interpolateValues(d.perCapita, year)
                  };
                });
              }

              // Finds (and possibly interpolates) the value for the specified year.
              function interpolateValues(values, year) {
                var i = bisect.left(values, year, 0, values.length - 1),
                    a = values[i];
                if (i > 0) {
                  var b = values[i - 1],
                      t = (year - a[0]) / (b[0] - a[0]);
                  return a[1] * (1 - t) + b[1] * t;
                }
                return a[1];
              }
        });
    }
    
    function showBiggest(){
        d3.select("svg").remove();
        
        // Chart dimensions.
        var margin = {top: 20, right: 40, bottom: 30, left: 50},
            width = 1024 - margin.right,
            height = 550 - margin.top - margin.bottom;

        // Various scales. These domains make assumptions of data, naturally.
        var xScale = d3.scale.linear().domain([1, 60])
            .range([0, width]);
        var yScale = d3.scale.linear().domain([1, 60])
            .range([height, 0]);
        var radiusScale = d3.scale.sqrt().domain([0, 12500])
            .range([0, 50]);
        var colorScale = d3.scale.ordinal().domain(["1","2","3","4","5"])
            .range(["#4169E1","#9ACD32","#DC143C","#008000","#000080"]);

        // The x & y axes.
        var xAxis = d3.svg.axis()
            .orient("bottom").scale(xScale)
            .ticks(12, d3.format(",d"));

        var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left");

        // Create the SVG container and set the origin.
        var svg = d3.select("#chart").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // Add the x-axis.
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        // Add the y-axis.
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);

        // Add an x-axis label.
        svg.append("text")
            .attr("class", "x label")
            .attr("text-anchor", "end")
            .attr("x", width)
            .attr("y", height - 6)
            .text("Expenses (billions)");

        // Add a y-axis label.
        svg.append("text")
            .attr("class", "y label")
            .attr("text-anchor", "end")
            .attr("y", 6)
            .attr("dy", ".75em")
            .attr("transform", "rotate(-90)")
            .text("Income (billions)");

        // Add the year label; the value is set on transition.
        var label = svg.append("text")
            .attr("class", "year label")
            .attr("text-anchor", "end")
            .attr("y", height - 24)
            .attr("x", width)
            .text(2000);
        
        // draw legend colored rectangles
        svg.append("rect")
            .attr("x", width-670)
            //.attr("y", height-230)
            .attr("y", height-500)
            .attr("width", 220)
            .attr("height", 140)
            .attr("fill", "lightgrey")
            .style("stroke-size", "1px");
        
        svg.append("circle")
            .attr("r", 10)
            .attr("cx", width-470)
            //.attr("cy", height-215)
            .attr("cy", height-480)
            .style("fill", "#4169E1");

        svg.append("circle")
            .attr("r", 10)
            .attr("cx", width-470)
            //.attr("cy", height-190)
            .attr("cy", height-455)
            .style("fill", "#9ACD32");

        svg.append("circle")
            .attr("r", 10)
            .attr("cx", width-470)
            //.attr("cy", height-120)
            .attr("cy", height-430)
            .style("fill", "#DC143C");

        svg.append("circle")
            .attr("r", 10)
            .attr("cx", width-470)
            //.attr("cy", height-120)
            .attr("cy", height-405)
            .style("fill", "#008000");

        svg.append("circle")
            .attr("r", 10)
            .attr("cx", width-470)
            //.attr("cy", height-120)
            .attr("cy", height-380)
            .style("fill", "#000080");
        
        svg.append("text")
            .attr("class", "label")
            .attr("x", width -520)
            //.attr("y", height-212)
            .attr("y", height-475)
            .style("text-anchor", "end")
            .text("Connecticut");

        svg.append("text")
            .attr("class", "label")
            .attr("x", width -520)
            //.attr("y", height-187)
            .attr("y", height-450)
            .style("text-anchor", "end")
            .text("Alaska");

        svg.append("text")
            .attr("class", "label")
            .attr("x", width -520)
            //.attr("y", height-117)
            .attr("y", height-425)
            .style("text-anchor", "end")
            .text("Massachusets");

        svg.append("text")
            .attr("class", "label")
            .attr("x", width -520)
            //.attr("y", height-117)
            .attr("y", height-400)
            .style("text-anchor", "end")
            .text("Rhode Island");

        svg.append("text")
            .attr("class", "label")
            .attr("x", width -520)
            //.attr("y", height-117)
            .attr("y", height-375)
            .style("text-anchor", "end")
            .text("New Jersey");

        //legend for population size
        // draw legend colored rectangles
        svg.append("rect")
            .attr("x", 25)
            //.attr("y", height-230)
            .attr("y", 10)
            .attr("width", 260)
            .attr("height", 175)
            .attr("fill", "lightgrey")
            .style("stroke-size", "1px");

        svg.append("circle")
            .attr("r", 10)
            .attr("cx", 225)
            //.attr("cy", height-215)
            .attr("cy", 173)
            .style("fill", "white");

        svg.append("circle")
            .attr("r", 20)
            .attr("cx", 225)
            //.attr("cy", height-190)
            .attr("cy", 142)
            .style("fill", "white");

        svg.append("circle")
            .attr("r", 50)
            .attr("cx", 225)
            //.attr("cy", height-120)
            .attr("cy", 72)
            .style("fill", "white");

        svg.append("text")
            .attr("class", "label")
            .attr("x", 160)
            //.attr("y", height-212)
            .attr("y", 173)
            .style("text-anchor", "end")
            .text("$650 debt per Capita");

        svg.append("text")
            .attr("class", "label")
            .attr("x", 160)
            //.attr("y", height-187)
            .attr("y", 147)
            .style("text-anchor", "end")
            .text("$5000 debt per Capita");

        svg.append("text")
            .attr("class", "label")
            .attr("x", 160)
            //.attr("y", height-117)
            .attr("y", 77)
            .style("text-anchor", "end")
            .text("$12,500 debt per Capita");
        
        var div = d3.select("#chart").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);
        
        d3.json("biggest.json", function(error, biggest) {
            if (error) throw error;

            // A bisector since many nation's data is sparsely-defined.
            var bisect = d3.bisector(function(d) { return d[0]; });

            // Add a dot per nation. Initialize the data at 2009, and set the colors.
            var dot = svg.append("g")
                .attr("class", "dots")
                .selectAll(".dot")
                .data(interpolateData(2000))
                .enter().append("circle")
                .attr("class", "dot")
                .style("fill", function(d) { return colorScale(color(d)); })
                .call(position)
                .sort(order)
                .on("mouseover", function(d) {
                    div.transition()
                    .duration(275)
                    .style("opacity", .9);
                    var expenses = "Expenses: " + Math.round(d.expenses * 10)/10 + " Billion";
                    var income = "Income: " + Math.round(d.income * 10)/10 + " Billion";
                    var perCapita = "Debt per Capita: " + Math.round(d.perCapita * 10)/10;
                    div.html(d.name + "<br>" + expenses + "<br>" + income + "<br>" + perCapita)
                        .style("left", (d3.event.pageX + 5) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
                })
                .on("mouseout", function(d) {
                    div.transition()
                       .duration(300)
                       .style("opacity", 0);
                });

              // Add a title.
              dot.append("title")
                  .text(function(d) { return d.name; });

              // Add an overlay for the year label.
              var box = label.node().getBBox();

              var overlay = svg.append("rect")
                    .attr("class", "overlay")
                    .attr("x", box.x)
                    .attr("y", box.y)
                    .attr("width", box.width)
                    .attr("height", box.height - 20)
                    .on("mouseover", enableInteraction);

              // Start a transition that interpolates the data based on year.
              svg.transition()
                  .duration(15000)
                  .ease("linear")
                  .tween("year", tweenYear)
                  .each("end", enableInteraction);

              // Positions the dots based on data.
              function position(dot) {
                 dot.attr("cx", function(d) { return xScale(x(d)); })
                    .attr("cy", function(d) { return yScale(y(d)); })
                    .attr("r", function(d) { return radiusScale(radius(d)); });
              }

              // Defines a sort order so that the smallest dots are drawn on top.
              function order(a, b) {
                return radius(b) - radius(a);
              }

              // After the transition finishes, you can mouseover to change the year.
              function enableInteraction() {
                var yearScale = d3.scale.linear()
                    .domain([2000, 2016])
                    .range([box.x + 10, box.x + box.width - 10])
                    .clamp(true);

                // Cancel the current transition, if any.
                svg.transition().duration(0);

                overlay
                    .on("mouseover", mouseover)
                    .on("mouseout", mouseout)
                    .on("mousemove", mousemove)
                    .on("touchmove", mousemove);

                function mouseover() {
                    label.classed("active", true);
                }

                function mouseout() {
                    label.classed("active", false);
                }

                function mousemove() {
                    displayYear(yearScale.invert(d3.mouse(this)[0]));
                }
              }

              // Tweens the entire chart by first tweening the year, and then the data.
              // For the interpolated data, the dots and label are redrawn.
              function tweenYear() {
                var year = d3.interpolateNumber(2000, 2016);
                return function(t) { displayYear(year(t)); };
              }

              // Updates the display to show the specified year.
              function displayYear(year) {
                dot.data(interpolateData(year), key).call(position).sort(order);
                label.text(Math.round(year));
              }

              // Interpolates the dataset for the given (fractional) year.
              function interpolateData(year) {
                return biggest.map(function(d) {
                  return {
                    name: d.state,
                    region: d.state,
                    expenses: interpolateValues(d.expenses, year),
                    income: interpolateValues(d.income, year),
                    perCapita: interpolateValues(d.perCapita, year)
                  };
                });
              }

              // Finds (and possibly interpolates) the value for the specified year.
              function interpolateValues(values, year) {
                var i = bisect.left(values, year, 0, values.length - 1),
                    a = values[i];
                if (i > 0) {
                  var b = values[i - 1],
                      t = (year - a[0]) / (b[0] - a[0]);
                  return a[1] * (1 - t) + b[1] * t;
                }
                return a[1];
              }
        });
    }

    function showSmallest(){
        d3.select("svg").remove();

        /*// Chart dimensions.
        var margin = {top: 20, right: 40, bottom: 30, left: 50},
            width = 1024 - margin.right,
            height = 550 - margin.top - margin.bottom;

        // Various scales. These domains make assumptions of data, naturally.
        var xScale = d3.scale.linear().domain([1, 60])
            .range([0, width]);
        var yScale = d3.scale.linear().domain([1, 60])
            .range([height, 0]);
        var radiusScale = d3.scale.sqrt().domain([0, 12500])
            .range([0, 50]);
        var colorScale = d3.scale.ordinal().domain(["1","2","3","4","5","6","7","8","9","10"])
        .range(["#4169E1","#9ACD32","#DC143C","#008000","#000080","#DAA520","#FFD700","#8A2BE2","#A0522D","#F0E68C"]);

        // The x & y axes.
        var xAxis = d3.svg.axis()
            .orient("bottom").scale(xScale)
            .ticks(12, d3.format(",d"));

        var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left");*/

        // Create the SVG container and set the origin.
        var svg = d3.select("#chart").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // Add the x-axis.
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        // Add the y-axis.
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);

        // Add an x-axis label.
        svg.append("text")
            .attr("class", "x label")
            .attr("text-anchor", "end")
            .attr("x", width)
            .attr("y", height - 6)
            .text("Expenses (billions)");

        // Add a y-axis label.
        svg.append("text")
            .attr("class", "y label")
            .attr("text-anchor", "end")
            .attr("y", 6)
            .attr("dy", ".75em")
            .attr("transform", "rotate(-90)")
            .text("Income (billions)");

        // Add the year label; the value is set on transition.
        var label = svg.append("text")
            .attr("class", "year label")
            .attr("text-anchor", "end")
            .attr("y", height - 24)
            .attr("x", width)
            .text(2000);
        
        // draw legend colored rectangles
        svg.append("rect")
            .attr("x", width-670)
            //.attr("y", height-230)
            .attr("y", height-500)
            .attr("width", 220)
            .attr("height", 140)
            .attr("fill", "lightgrey")
            .style("stroke-size", "1px");
        
        svg.append("circle")
            .attr("r", 10)
            .attr("cx", width-470)
            //.attr("cy", height-215)
            .attr("cy", height-480)
            .style("fill", "#DAA520");

        svg.append("circle")
            .attr("r", 10)
            .attr("cx", width-470)
            //.attr("cy", height-190)
            .attr("cy", height-455)
            .style("fill", "#FFD700");

        svg.append("circle")
            .attr("r", 10)
            .attr("cx", width-470)
            //.attr("cy", height-120)
            .attr("cy", height-430)
            .style("fill", "#8A2BE2");

        svg.append("circle")
            .attr("r", 10)
            .attr("cx", width-470)
            //.attr("cy", height-120)
            .attr("cy", height-405)
            .style("fill", "#A0522D");

        svg.append("circle")
            .attr("r", 10)
            .attr("cx", width-470)
            //.attr("cy", height-120)
            .attr("cy", height-380)
            .style("fill", "#F0E68C");
        
        svg.append("text")
            .attr("class", "label")
            .attr("x", width -520)
            //.attr("y", height-212)
            .attr("y", height-475)
            .style("text-anchor", "end")
            .text("Tennessee");

        svg.append("text")
            .attr("class", "label")
            .attr("x", width -520)
            //.attr("y", height-187)
            .attr("y", height-450)
            .style("text-anchor", "end")
            .text("Nevada");

        svg.append("text")
            .attr("class", "label")
            .attr("x", width -520)
            //.attr("y", height-117)
            .attr("y", height-425)
            .style("text-anchor", "end")
            .text("Nebraska");

        svg.append("text")
            .attr("class", "label")
            .attr("x", width -520)
            //.attr("y", height-117)
            .attr("y", height-400)
            .style("text-anchor", "end")
            .text("Wyoming");

        svg.append("text")
            .attr("class", "label")
            .attr("x", width -520)
            //.attr("y", height-117)
            .attr("y", height-375)
            .style("text-anchor", "end")
            .text("Georgia");

        //legend for population size
        // draw legend colored rectangles
        svg.append("rect")
            .attr("x", 25)
            //.attr("y", height-230)
            .attr("y", 10)
            .attr("width", 260)
            .attr("height", 175)
            .attr("fill", "lightgrey")
            .style("stroke-size", "1px");

        svg.append("circle")
            .attr("r", 10)
            .attr("cx", 225)
            //.attr("cy", height-215)
            .attr("cy", 173)
            .style("fill", "white");

        svg.append("circle")
            .attr("r", 20)
            .attr("cx", 225)
            //.attr("cy", height-190)
            .attr("cy", 142)
            .style("fill", "white");

        svg.append("circle")
            .attr("r", 50)
            .attr("cx", 225)
            //.attr("cy", height-120)
            .attr("cy", 72)
            .style("fill", "white");

        svg.append("text")
            .attr("class", "label")
            .attr("x", 160)
            //.attr("y", height-212)
            .attr("y", 173)
            .style("text-anchor", "end")
            .text("$650 debt per Capita");

        svg.append("text")
            .attr("class", "label")
            .attr("x", 160)
            //.attr("y", height-187)
            .attr("y", 147)
            .style("text-anchor", "end")
            .text("$5000 debt per Capita");

        svg.append("text")
            .attr("class", "label")
            .attr("x", 160)
            //.attr("y", height-117)
            .attr("y", 77)
            .style("text-anchor", "end")
            .text("$12,500 debt per Capita");
        
        var div = d3.select("#chart").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);
        
        d3.json("smallest.json", function(error, smallest) {
            if (error) throw error;

            // A bisector since many nation's data is sparsely-defined.
            var bisect = d3.bisector(function(d) { return d[0]; });

            // Add a dot per nation. Initialize the data at 2009, and set the colors.
            var dot = svg.append("g")
                .attr("class", "dots")
                .selectAll(".dot")
                .data(interpolateData(2000))
                .enter().append("circle")
                .attr("class", "dot")
                .style("fill", function(d) { return colorScale(color(d)); })
                .call(position)
                .sort(order)
                .on("mouseover", function(d) {
                    div.transition()
                    .duration(275)
                    .style("opacity", .9);
                    var expenses = "Expenses: " + Math.round(d.expenses * 10)/10 + " Billion";
                    var income = "Income: " + Math.round(d.income * 10)/10 + " Billion";
                    var perCapita = "Debt per Capita: " + Math.round(d.perCapita * 10)/10;
                    div.html(d.name + "<br>" + expenses + "<br>" + income + "<br>" + perCapita)
                        .style("left", (d3.event.pageX + 5) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
                })
                .on("mouseout", function(d) {
                    div.transition()
                       .duration(300)
                       .style("opacity", 0);
                });

              // Add a title.
              dot.append("title")
                  .text(function(d) { return d.name; });

              // Add an overlay for the year label.
              var box = label.node().getBBox();

              var overlay = svg.append("rect")
                    .attr("class", "overlay")
                    .attr("x", box.x)
                    .attr("y", box.y)
                    .attr("width", box.width)
                    .attr("height", box.height - 20)
                    .on("mouseover", enableInteraction);

              // Start a transition that interpolates the data based on year.
              svg.transition()
                  .duration(15000)
                  .ease("linear")
                  .tween("year", tweenYear)
                  .each("end", enableInteraction);

              // Positions the dots based on data.
              function position(dot) {
                 dot.attr("cx", function(d) { return xScale(x(d)); })
                    .attr("cy", function(d) { return yScale(y(d)); })
                    .attr("r", function(d) { return radiusScale(radius(d)); });
              }

              // Defines a sort order so that the smallest dots are drawn on top.
              function order(a, b) {
                return radius(b) - radius(a);
              }

              // After the transition finishes, you can mouseover to change the year.
              function enableInteraction() {
                var yearScale = d3.scale.linear()
                    .domain([2000, 2016])
                    .range([box.x + 10, box.x + box.width - 10])
                    .clamp(true);

                // Cancel the current transition, if any.
                svg.transition().duration(0);

                overlay
                    .on("mouseover", mouseover)
                    .on("mouseout", mouseout)
                    .on("mousemove", mousemove)
                    .on("touchmove", mousemove);

                function mouseover() {
                    label.classed("active", true);
                }

                function mouseout() {
                    label.classed("active", false);
                }

                function mousemove() {
                    displayYear(yearScale.invert(d3.mouse(this)[0]));
                }
              }

              // Tweens the entire chart by first tweening the year, and then the data.
              // For the interpolated data, the dots and label are redrawn.
              function tweenYear() {
                var year = d3.interpolateNumber(2000, 2016);
                return function(t) { displayYear(year(t)); };
              }

              // Updates the display to show the specified year.
              function displayYear(year) {
                dot.data(interpolateData(year), key).call(position).sort(order);
                label.text(Math.round(year));
              }

              // Interpolates the dataset for the given (fractional) year.
              function interpolateData(year) {
                return smallest.map(function(d) {
                  return {
                    name: d.state,
                    region: d.state,
                    expenses: interpolateValues(d.expenses, year),
                    income: interpolateValues(d.income, year),
                    perCapita: interpolateValues(d.perCapita, year)
                  };
                });
              }

              // Finds (and possibly interpolates) the value for the specified year.
              function interpolateValues(values, year) {
                var i = bisect.left(values, year, 0, values.length - 1),
                    a = values[i];
                if (i > 0) {
                  var b = values[i - 1],
                      t = (year - a[0]) / (b[0] - a[0]);
                  return a[1] * (1 - t) + b[1] * t;
                }
                return a[1];
              }
        });
    }




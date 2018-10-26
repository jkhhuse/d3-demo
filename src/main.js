import * as d3 from "d3";

// d3.select("body")
//   .append("div")
//   .style("border", "1px black solid")
//   .html("hello world");

// d3.select("div")
//   .style("background-color", "pink")
//   .style("font-size", "24px")
//   .attr("id", "newDiv")
//   .attr("class", "d3div")
//   .on("click", ()=>{console.log("you clicked a div")})

d3.select("body")
  .append("svg")
  .attr("width", "1300px")
  .attr("height", "500px");

  d3.select("svg")
  .append("circle")
  .attr("r", 20)
  .attr("cx",20)
  .attr("cy",20)
  .style("fill","red");
  d3.select("svg")
  .append("text")
  .attr("id", "a")
  .attr("x",20)
  .attr("y",20)
  .style("opacity", 0)
  .text("HELLO WORLD");
  d3.select("svg")
  .append("circle")
  .attr("r", 100)
  .attr("cx",400)
  .attr("cy",400)
  .style("fill","lightblue");
  d3.select("svg")
  .append("text")
  .attr("id", "b")
  .attr("x",400)
  .attr("y",400)
  .style("opacity", 0)
  .text("Uh, hi.");
  d3.select("#a").transition().delay(1000).style("opacity", 1);
d3.select("#b").transition().delay(3000).style("opacity", .75);
d3.selectAll("circle").transition().duration(2000).attr("cy", 200);

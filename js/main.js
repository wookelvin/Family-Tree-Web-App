jsPlumb.ready(function() {
  var w34Stroke = 'rgba(50, 50, 200, 1)';
  var w34HlStroke = 'rgba(180, 180, 200, 1)';  
  var common = {
    anchors:["Bottom", "Top"],
    //endpoints:["Dot", "Blank" ],
    outlineColor:"black",
    connector: [ "Flowchart", { stub: [5, 5], gap: 0, midpoint:0.15, cornerRadius: 10, alwaysRespectStubs: true } ],
    endpointStyle:{ fillStyle:"black", outlineColor:"black", outlineWidth:0, radius:4 },
    paintStyle:{ strokeStyle:"#aaa", lineWidth:2 }
  };
  jsPlumb.connect({source:"darleneparents", target:"darlene"}, common);
  jsPlumb.connect({source:"darleneparents", target:"doug"}, common);
  jsPlumb.connect({source:"darleneparents", target:"dale"}, common);
  jsPlumb.connect({source:"jim", target:"chris"}, common);
  jsPlumb.connect({source:"olsoncouple", target:"hannah"}, common);
  jsPlumb.connect({source:"olsoncouple", target:"emily"}, common);
  jsPlumb.connect({source:"dougwendy", target:"carrie"}, common);
  jsPlumb.connect({source:"dougwendy", target:"katie"}, common);
  jsPlumb.connect({source:"dougwendy", target:"russ"}, common);
  jsPlumb.connect({source:"dougwendy", target:"amy"}, common);
  jsPlumb.connect({source:"katiepastor", target:"ezekiel"}, common);
  jsPlumb.connect({source:"amysergio", target:"cassidy"}, common);
  jsPlumb.connect({source:"amysergio", target:"caden"}, common);
  
  
  jsPlumb.connect({source:"jimparents", target:"jim"}, common);
  jsPlumb.connect({source:"jimparents", target:"karen"}, common);
  jsPlumb.connect({source:"jimparents", target:"michelle"}, common);
  jsPlumb.connect({source:"jimparents", target:"andrea"}, common);
  
  jsPlumb.connect({source:"michelle", target:"mandy"}, common);
  jsPlumb.connect({source:"michelle", target:"mandysib"}, common);
  jsPlumb.connect({source:"karenjared", target:"alex"}, common);
  jsPlumb.connect({source:"karenjared", target:"meagan"}, common);
  jsPlumb.connect({source:"steveandrea", target:"sean"}, common);
});
$(document).ready(function() {
  $("button").click(function(event) {
    let favBand = $("input#band").val();
    let favSeason = $("input#season").val();
    let favArchitecture = $("input#architecture").val();
    let favAnimal = $("input#animal").val();
    let favMovie = $("input#movie").val();
    let favArray = [favBand,favSeason,favArchitecture,favAnimal,favMovie];
    
    let resultArray = [];
    resultArray.push(favArray[1],favArray[0],favArray[2]);

    let result1 = resultArray[0];
    let result2 = resultArray[1];
    let result3 = resultArray[2];

    $("#result1").text(result1);
    $("#result2").text(result2);
    $("#result3").text(result3);

  (event).preventDefault();
  });
});
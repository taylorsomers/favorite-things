$(document).ready(function() {
  $("button").click(function(event) {
    const favBand = $("input#band").val();
    const favSeason = $("input#season").val();
    const favArchitecture = $("input#architecture").val();
    const favAnimal = $("input#animal").val();
    const favMovie = $("input#movie").val();
    const favArray = [favBand,favSeason,favArchitecture,favAnimal,favMovie];
    
    let resultArray = [];
    resultArray.push(favArray[1],favArray[0],favArray[2]);

    $("#results").text(resultArray);

  (event).preventDefault();
  });
});
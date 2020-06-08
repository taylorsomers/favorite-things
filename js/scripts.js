$(document).ready(function() {
  $("button").click(function(event) {
    const favBand = $("input#band").val();
    const favSeason = $("input#season").val();
    const favArchitecture = $("input#architecture").val();
    const favAnimal = $("input#animal").val();
    const favMovie = $("input#movie").val();

    const favArray = [favBand,favSeason,favArchitecture,favAnimal,favMovie]

    $("#results").text(favArray);

  (event).preventDefault();
  });
});
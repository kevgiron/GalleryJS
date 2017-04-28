var chico = [
  {description: "O'Connel", picture: "http://www.csuchico.edu/maps/buildings/images/oconnell.jpg", from: "csuchico.edu"},
  {description: "Kendall Hall", picture: "http://www.csuchico.edu/maps/images/buildings-photos/building-kendall.jpg", from: "csuchico.edu"},
  {description: "Holt Hall", picture: "http://www.csuchico.edu/maps/campus/images/holt.jpg", from: "csuchico.edu"},
  {description: "Arts and Humanities Buiding", picture: "http://ottoconstruction.com/wp-content/uploads/2015/02/MG_2485_F.jpg", from: "ottoconstruction.com"},
  {description: "Bidwell Mansion", picture: "https://www.parks.ca.gov/pages/460/images/BidwellMansion%20002.jpg", from: "parks.ca.gov"}
];
var current;

function shuffleGallery()
{
  var randIndex;
  randIndex = randomUpTo(chico.length - 1);
  while(current == chico[randIndex]){
    randIndex = randomUpTo(chico.length - 1);
  }
  current = chico[randIndex];
  document.getElementById("picture").src = current.picture;
  document.getElementById("caption").innerHTML = current.description;
  document.getElementById("source").innerHTML = "Image courtesy of: " + current.from;
  }

function randomUpTo(max){
  return Math.floor(Math.random() * (max+1));
}

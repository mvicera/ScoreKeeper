$(document).ready(function() {

  var score = 0;

  $("#increase-5").on("click", function() {
    //Step 1: Increase my score by 5
    //Step 2: Set the HTML of the score display to the new score

    score += 5;

    $("#score").html(score + " Points");
  });

  $("#decrease-5").on("click", function() {
    //Step 1: Decrease my score by 5
    //Step 2: Check to see if score goes below 0
    //Step 3: If score goes below 0, set it back to 0 and update the HTML to a score of 0
    //Step 4: If the score is 0 or above, update the score and update the HTML display
    score -= 5;

    if (score < 0) {
      score = 0;
      $("#score").html("0 Points");
    } else {
      $("#score").html(score + " Points");
    }
  });

  $("#custom-score-form").on("submit", function(event) {
    event.preventDefault();

    //Step 1: Retrieve number from input
    //Step 2: Convert the text number to an integer number
    //Step 3: Set the score to the user-entered value
    //Step 4: Update the HTML display to reflect the new score

    var customScore = parseInt($("#custom-score").val());
    score = customScore;
    $("#score").html(score + " Points");

//Check if the new score is below 0
    if (customScoreInt < 0) {
      alert("You can't enter a score less than 0!");
    } else {
      //Set the score variable to the custom score and update the HTML
      score = customScoreInt;
      $("#score").html(score + " Points");
    }

    //Optional: Clears out the value after submission
    $("#custom-score").val("");
  });

});

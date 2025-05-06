 function showRating() {
      var sub1 = 87;
      var sub2 = 88;
      var sub3 = 92;

      var ave = (sub1 + sub2 + sub3) / 3;
      var roundedAve = Math.round(ave * 100) / 100;
      var rating = "";

      if (roundedAve >= 94) rating = "Excellent";
      else if (roundedAve >= 87) rating = "Above Satisfactory";
      else if (roundedAve >= 80) rating = "Satisfactory";
      else if (roundedAve >= 75) rating = "Needs Improvement";
      else if (roundedAve >= 70) rating = "Poor";
      else rating = "Invalid Average";

      alert("Your average is " + roundedAve.toFixed(2) + " - " + rating);
    }

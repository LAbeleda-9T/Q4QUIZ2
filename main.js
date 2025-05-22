function showRating() {
  const grade1 = document.getElementById("grade1").value;
  const grade2 = document.getElementById("grade2").value;
  const grade3 = document.getElementById("grade3").value;

  if (grade1 === "" || grade2 === "" || grade3 === "") {
    alert("Please enter grades for all subjects.");
    return;
  }

  const sub1 = parseFloat(grade1);
  const sub2 = parseFloat(grade2);
  const sub3 = parseFloat(grade3);

  const ave = (sub1 + sub2 + sub3) / 3;
  const roundedAve = Math.round(ave * 100) / 100;
  let rating = "";

  if (roundedAve >= 94) rating = "Excellent";
  else if (roundedAve >= 87) rating = "Above Satisfactory";
  else if (roundedAve >= 80) rating = "Satisfactory";
  else if (roundedAve >= 75) rating = "Needs Improvement";
  else if (roundedAve >= 70) rating = "Poor";
  else rating = "Invalid Average";

  alert("Your average is " + roundedAve.toFixed(2) + " - " + rating);
}

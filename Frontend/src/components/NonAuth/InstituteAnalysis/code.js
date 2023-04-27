function SelectDiabetes() {
    var d = document.getElementById("diabetes").value;
    var dType = document.getElementById("diabetestypebox");
    if(d == "negative")
      dType.style.display = "none";
    else
      dType.style.display = "block";
  }
  
  SelectDiabetes();
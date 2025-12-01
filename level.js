const LEVEL = [1, 2, 3];
const LEVEL1_STR = ["transform:", "255,0,0", "}"]
const LEVEL2_STR = [ ]

var sbt = document.getElementById("submit_btn");

function checkInput(){
    var incorrect = [];

    for (let i = 0; i < 3; i++)
    {
        var var_name = "inp" + (i + 1);
        var id = "blank" + (i + 1);
        var var_name = document.getElementById(id).value;

        if (var_name != LEVEL1_STR[i])
            incorrect.push(i);
    }

    for (let i = 0; i < incorrect.length; i++)
        alert(incorrect[i]);
    if (incorrect.length == 0)
        alert("Ang galing mo!");
}

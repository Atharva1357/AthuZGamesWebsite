document.getElementById("button2").style.visibility = "hidden"
var color = document.getElementById("button1");
function darkMode()
{
        document.getElementById("button1").style.backgroundColor = "#808080";
        document.getElementById("html").style.backgroundColor = "#808080";
        document.getElementById("button1").style.visibility = "hidden"
        document.getElementById("button2").style.visibility = "visible"
        console.log("Darkmode On")
}
function lightMode()
{
    document.getElementById("button1").style.backgroundColor = "#ffffff";
        document.getElementById("html").style.backgroundColor = "#ffffff";
        document.getElementById("button1").style.visibility = "visible"
        document.getElementById("button2").style.visibility = "hidden"
        console.log("Darkmode Off")
}
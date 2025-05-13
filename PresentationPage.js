const Active = setTimeout(ShowLogoName, 1000);//set time for showing the logo name
const ShowLogo = setTimeout(ShowTagLine, 2000);//set time for showing the tag line
const Fade = setTimeout(ShowTagLine1, 3000);//set time for disappear

//showing the logo name
function ShowLogoName() {
    document.getElementById("LogoName").classList.add("LogoName");
    document.getElementById("LogoName").innerHTML = "Dreamio";
}

//showing the Tag line
function ShowTagLine() {
    document.getElementById("TagLine").classList.add("TagLine");
    document.getElementById("TagLine").innerHTML = "Unleash Your Cinematic Imagination";
}

//disappearing the content
function ShowTagLine1() {
    document.getElementById("BodyTag").classList.add("fade");
}






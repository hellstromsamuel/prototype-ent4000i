// fixing Dato input
const dateInput = document.getElementById("dato");
const today = new Date(Date.now()).toISOString().split("T")[0];
dateInput.value = today;
dateInput.min = today;
todaySplit = today.split("-");
dateInput.max = (parseInt(todaySplit[0])+1)+"-"+todaySplit[1]+"-"+todaySplit[2]; "om 1 år er max"


// ----- Handle menu buttons
const divSwitchAdm = document.getElementById("switch-adm");
const divSwitchMarket = document.getElementById("switch-market"); 
function admActive(){
    divSwitchAdm.style.display = "block";
    divSwitchMarket.style.display = "none";
}
function marketActive(){
    divSwitchAdm.style.display = "none"
    divSwitchMarket.style.display = "block"
}


// Adm section
const divCompaniesAdm = document.getElementById("companies-adm");
const divStudentsAdm = document.getElementById("students-adm");
function showAdmCompanies(){
    divCompaniesAdm.style.display = "block";
    divStudentsAdm.style.display = "none";
}
function showAdmStudents(){
    divCompaniesAdm.style.display = "none";
    divStudentsAdm.style.display = "block";
}


// Market section
const divCompaniesMarket = document.getElementById("companies-market");
const divStudentsMarket = document.getElementById("students-market");
function showMarketCompanies(){
    divCompaniesMarket.style.display = "block";
    divStudentsMarket.style.display = "none";
}
function showMarketStudents(){
    divCompaniesMarket.style.display = "none";
    divStudentsMarket.style.display = "block";
}


// Main menu section
const radioMainAdm = document.getElementById("radio-main-adm");
const radioMainMarket = document.getElementById("radio-main-market");
const radioAdmCompanies = document.getElementById("radio-adm-companies");
const radioAdmStudents = document.getElementById("radio-adm-students");
const radioMarketCompanies = document.getElementById("radio-market-companies");
const radioMarketStudents = document.getElementById("radio-market-students");

function mainMenu(){
    if (radioMainAdm.checked){
        admActive();
        admOptions();
    }
    if (radioMainMarket.checked) {
        marketActive();
        marketOptions();
    } 
}
function admOptions(){
    divCompaniesMarket.style.display = "none";
    divStudentsMarket.style.display = "none";
    if (radioAdmCompanies.checked) showAdmCompanies();
    if (radioAdmStudents.checked) showAdmStudents();
}
function marketOptions(){
    divCompaniesAdm.style.display = "none";
    divStudentsAdm.style.display = "none";
    if (radioMarketCompanies.checked) showMarketCompanies();
    if (radioMarketStudents.checked) showMarketStudents();
}


// ----- Handle inputs
const elseTypeRadio = document.getElementById("radio-type-annet");
const elseInput = document.getElementById("input-annet");
function visAnnetInput(){
    if (elseTypeRadio.checked) elseInput.style.display = "inline";
}

const dateRadio = document.getElementById("radio-time-date");
function visDatoInput(){
    if (dateRadio.checked) dateInput.style.display = "inline";
}


// Send inn Button
function sendTask(){
    alert("Her blir forespørselen sendt - koden er ikke ferdig ;)")
}


// ----- Main
mainMenu();
admOptions();

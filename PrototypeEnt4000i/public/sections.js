// ****************************************
// --- JS BEDRIFTER ---

var companiesClick = 0;

const btnPrevCompanies = document.getElementById("btn_prev_companies");
const btnNextCompanies = document.getElementById("btn_next_companies");
btnPrevCompanies.addEventListener("click", btnCompaniesClick);
btnNextCompanies.addEventListener("click", btnCompaniesClick);

// Håndtere data og slideshow
const dataCompanies = [
    {img: "./assets/images/workmentor.jpg", header: "Matche studenter og bedrifter", 
    intro: "Kom i kontakt med aktuelle studenter på en enklere måte. Gjennom", 
    description: "en digital plattform kan bedrifter komme i kontakt med studenter som passer akkurat deres behov. Tjenesten validerer kunnskap og matcher studenter med bedrifter ut i fra begges preferanser (trykk på pilene for å lære mer)"},

    {img: "./assets/images/teamwork2.jpg", header: "Fleksibilitet", 
    intro: "Deltid, internship, workshops, bedriftpresentasjoner, tjenesten samler tilbudene og",
    description: "distribuerer alt på et sted. Bedriften selv bestemmer hvor mye man ønsker å tilby, og hva man trenger."},

    {img: "./assets/images/teamwork.jpg", header: "Tidlig nettverk med dyktige studenter", 
    intro: "Tjensten gir bedriften mulighet til å vise seg fram og",
    description: "møte studentene i tidlig fase. Gjennom å være nære studentmiljøer tidlig skaper man relasjoner vil bli nyttige i ansettelsesfaser og styrke omdømmet."}


];

const imgCompanies = document.getElementById("img-companies");
const headerCompanies = document.getElementById("header-companies");
const introCompanies = document.getElementById("intro-companies");
const descriptionCompanies = document.getElementById("description-companies")

function btnCompaniesClick(){
    companiesClick++;
    console.log("Bedrift knapper klikk: " + companiesClick);
}

var slideIndexCompanies = 0;

// Les mer knapp: bedrift
var readMoreClosedCompanies = true;
function readMoreCompanies() {
    var dotsCompanies = document.getElementById("dots-companies");
    var moreTextCompanies = document.getElementById("description-companies");
    var readMoreBtnCompanies = document.getElementById("readMoreBtnCompanies");

    if (dotsCompanies.style.display === "none") {
        btnCompaniesClick(); // Logger alle click på bedrift-slide
        readMoreClosedCompanies = true;
        dotsCompanies.style.display = "inline";
        readMoreBtnCompanies.style.color = "#1763e9";
        readMoreBtnCompanies.style.background = "white"
        readMoreBtnCompanies.innerHTML = "Les mer +"; 
        moreTextCompanies.style.display = "none";
    } else {
        btnCompaniesClick(); // Logger alle click på bedrift-slide
        readMoreClosedCompanies = false;
        dotsCompanies.style.display = "none";
        readMoreBtnCompanies.style.color = "white";
        readMoreBtnCompanies.style.background = "#1763e9"
        readMoreBtnCompanies.innerHTML = "Vis mindre -"; 
        moreTextCompanies.style.display = "inline";
    }
}


showSlidesCompanies(slideIndexCompanies);

function plusSlidesCompanies(n) {
    showSlidesCompanies(slideIndexCompanies += n);
}

function showSlidesCompanies(n) {
    if (n > dataCompanies.length-1) {slideIndexCompanies = 0}    
    if (n < 0) {slideIndexCompanies = dataCompanies.length-1}

    if (!readMoreClosedCompanies){ readMoreCompanies() } // lukke "Les mer" knappen mellom trykk

    imgCompanies.value = n;
    imgCompanies.src = dataCompanies[slideIndexCompanies].img;
    headerCompanies.innerHTML = dataCompanies[slideIndexCompanies].header;
    introCompanies.innerHTML = dataCompanies[slideIndexCompanies].intro;
    descriptionCompanies.innerHTML = dataCompanies[slideIndexCompanies].description;
}





// ****************************************
// --- JS STUDENTER ---
var studentClick = 0;

const btnPrevStudents = document.getElementById("btn_prev_students");
const btnNextStudents = document.getElementById("btn_next_students");
btnPrevStudents.addEventListener("click", btnStudentsClick);
btnNextStudents.addEventListener("click", btnStudentsClick);

// Håndtere data og slideshow
const dataStudents = [
    {img: "./assets/images/groupwork.jpg", header: "Kontakt med næringslivet", 
    intro: "Kom lettere i kontakt med relevante bedrifter. Gjennom ", 
    description: "en digital plattform vil studenter få tilgang på arbeidsmuligheter og arrangementer fra aktuelle bedrifter (trykk på pilene for å lære mer)"},

    {img: "./assets/images/agile.jpg", header: "Løse praktiske oppgaver", 
    intro: "Bedrifter tilbyr studenter relevante oppgaver eller",
    description: "opplæringsprogram, alt etter hva bedriften kan tilby. Plattformen validerer kunnskap og matcher studenter med bedrifter ut i fra begges preferanser."},

    {img: "./assets/images/startup.jpg", header: "Relevant arbeidserfaring", 
    intro: "Tjensten gir studenter mulighet til å vise seg fram for bedrifter og",
    description: "utforske ulike retninger. Slik kan studenter sikre seg relevante ferdigheter og bli mer aktuelle for bedrifter etter studiene."}


];

const imgStudents = document.getElementById("img-students");
const headerStudents = document.getElementById("header-students");
const introStudents = document.getElementById("intro-students");
const descriptionStudents = document.getElementById("description-students")

function btnStudentsClick(){
    studentClick++;
    console.log("Student knapper klikk: " + studentClick);
}

var slideIndexStudents = 0;

// Les mer knapp: bedrift
var readMoreClosedStudents = true;
function readMoreStudents() {
    var dotsStudents = document.getElementById("dots-students");
    var moreTextStudents = document.getElementById("description-students");
    var readMoreBtnStudents = document.getElementById("readMoreBtnStudents");

    if (dotsStudents.style.display === "none") {
        btnStudentsClick(); // Logger alle click på student-slide
        readMoreClosedStudents = true;
        dotsStudents.style.display = "inline";
        readMoreBtnStudents.style.color = "#1763e9";
        readMoreBtnStudents.style.background = "white"
        readMoreBtnStudents.innerHTML = "Les mer +"; 
        moreTextStudents.style.display = "none";
    } else {
        btnStudentsClick(); // Logger alle click på student-slide
        readMoreClosedStudents = false;
        dotsStudents.style.display = "none";
        readMoreBtnStudents.style.color = "white";
        readMoreBtnStudents.style.background = "#1763e9"
        readMoreBtnStudents.innerHTML = "Vis mindre -"; 
        moreTextStudents.style.display = "inline";
    }
}


showSlidesStudents(slideIndexStudents);

function plusSlidesStudents(n) {
    showSlidesStudents(slideIndexStudents += n);
}

function showSlidesStudents(n) {
    if (n > dataStudents.length-1) {slideIndexStudents = 0}    
    if (n < 0) {slideIndexStudents = dataStudents.length-1}

    if (!readMoreClosedStudents){ readMoreStudents() } // lukke "Les mer" knappen mellom trykk

    imgCompanies.value = n;
    imgStudents.src = dataStudents[slideIndexStudents].img;
    headerStudents.innerHTML = dataStudents[slideIndexStudents].header;
    introStudents.innerHTML = dataStudents[slideIndexStudents].intro;
    descriptionStudents.innerHTML = dataStudents[slideIndexStudents].description;
}


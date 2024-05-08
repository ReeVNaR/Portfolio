const firebaseConfig = {
    apiKey: "AIzaSyCYTPRseOFP-VmPcfQ9WhI8LUEr1tdv4cI",
    authDomain: "ranveer-portfolio.firebaseapp.com",
    databaseURL: "https://ranveer-portfolio-default-rtdb.firebaseio.com",
    projectId: "ranveer-portfolio",
    storageBucket: "ranveer-portfolio.appspot.com",
    messagingSenderId: "11784305480",
    appId: "1:11784305480:web:d9b0aa77f694157df7917d"
  };
  
  firebase.initializeApp(firebaseConfig);


var contactformDB = firebase.database().ref("contactform");


document.getElementById("contactform").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");

    saveMessages(name, emailid, msgContent);

    document.querySelector(".alert").style.display = "block";

    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    document.getElementById("contactform").reset();
}

const saveMessages = (name ,emailid, msgContent) => {
    var newcontactform = contactformDB.push();
    newContactForm.set({
        name: name,
        emailid: emailid,
        msgContent: msgContent,
    });
}
const getElementVal = (id) => {
    return document.getElementById(id).ariaValueMax;
};
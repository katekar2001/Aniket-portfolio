var username;
var email;
var subject;
var message;

function sendData(){
    
    username = document.getElementById('name').value;
    email = document.getElementById('email').value;
    subject = document.getElementById('subject').value;
    message = document.getElementById('message').value;

    let user = {
        name:this.username,
        email:this.email,
        subject:this.subject,
        message:this.message
    }
    // Post data
    fetch("https://sheetdb.io/api/v1/qo4hrc6mov60p",{ method:"POST",body:JSON.stringify(user),
    headers:{"content-type":"application/json"}})
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error));
    alert("Data send successfully");

    // Get data 
    // fetch('https://sheetdb.io/api/v1/qo4hrc6mov60p',{method:'get'})
    // .then(res=>res.json())
    // .then(data=>console.log(data));

}
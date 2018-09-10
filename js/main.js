

let submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function(e){

    //prevents submission of the form by default
    e.preventDefault();

    //get the values from the form
    let email = document.getElementById('form_email');
    let name = document.getElementById('form_name');
    let message = document.getElementById('form_message');
    let favGame = document.getElementById('form_favgame');

    //Create a json with the data to be sent to the server
    let data = {
        email: email.value,
        name: name.value,
        message: message.value,
        favGame: favGame.value,
    }

    console.log(data);

});
console.log('aefaf');



const weatherForm = document.querySelector('form');
const idk = document.querySelector('input');
const messageOne = document.querySelector('#message1');
const messageTwo = document.querySelector('#message2');

weatherForm.addEventListener('submit' ,(e) => {
    e.preventDefault();
    messageOne.textContent = "please wait! the wather is loading:"
    messageTwo.textContent = ""
    fetch(`/weather?address=${idk.value}`)
.then((response) =>{
    response.json()
    .then((response) =>{
        messageOne.textContent = `location:${response.location}`;
        messageTwo.textContent = `temp:${response.currentweather.temperature}`
    })
    .catch((error) =>{
        messageOne.textContent = 'you must provide an address';
    })
})
.catch((error) =>{
    console.log(error);
});


})
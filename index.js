function sendMail(){
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
    }
    const serviceID = "service_ekjyrsn";
    const templateID = "template_vtaqbiq";
    
    emailjs.send(serviceID,templateID,params)
    .then(
        res => {
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('message').value = '';
            console.log(res);
            alert('Your message has been successfully sent. \nWe will respond to you within 24 hours.');
    })
    .catch((err) => console.log(err));

}
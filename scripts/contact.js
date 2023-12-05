// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

function submit(){
    document.getElementById('contact-page').innerHTML= '<p id="byeP">Thank you for message!</p>';
    document.getElementById('byeP').style.fontSize='24px';
    // document.getElementById('contact-page')
}

document.getElementById('submit-button').addEventListener('click',submit);

document.getElementById('form').addEventListener('submit',function (event) {

    event.preventDefault();
    
    //getting form data
    let formData={
         firstname : document.getElementById("firstname").value,
         lastname: document.getElementById("lastname").value,
         email :document.getElementById("email").value,
         phone : document.getElementById("phone").value,
         message : document.getElementById("message").value  
    }
    



    // Retrieve existing responses from localStorage or initialize an empty array
    let responses = JSON.parse(localStorage.getItem("responses")) || [];



    // Add new response
    responses.push(formData);



    // Save updated responses array to localStorage
    localStorage.setItem("responses", JSON.stringify(responses));



    // Reset the form after submission
    this.reset();



    // Alert user
    alert('Your Message Sent! Thank You For Your Time');

    
    
    console.log(firstname,lastname,email,phone,message);
            // Clear the form fields
    
})




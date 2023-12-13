/* updates welcome message dependong on the time of the day*/
    function updateGreeting() {
        const hour = new Date().getHours();
        const greetingElement = document.getElementById('greeting');

        if (hour < 12) {
            greetingElement.innerHTML = 'Good Morning! Welcome to Musbau Soccer Training Academy';
        } else if (hour < 15) {
            greetingElement.innerHTML = 'Good Afternoon! Welcome to Musbau Soccer Training Academy';
        } else {
            greetingElement.innerHTML = 'Good Evening! Welcome to Musbau Soccer Training Academy';
        }
    }

    
    updateGreeting();


   /* This is to validate the form on the registration page*/
   function validateForm() {
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var age = parseFloat(document.getElementById('age').value);
    var gender = document.getElementById('gender').value;
    var experience = parseFloat(document.getElementById('experience').value);

    // Check if any field is empty
    if (!fullName || !email || !phone || isNaN(age) || !gender || isNaN(experience)) {
        alert('Please fill out all fields.');
        return false; // Prevent form submission
    }

    // Check if age is not a valid number or less than 10
    if (age < 10) {
        alert('Age must be 10 or older.');
        return false; // Prevent form submission
    }

    // Check if experience is not a valid number or less than 0
    if (experience < 0) {
        alert('Soccer experience must be a valid number and not negative.');
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}







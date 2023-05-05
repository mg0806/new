const inputs = document.querySelectorAll("input"),
    button = document.querySelector("button");

// iterate over all inputs
inputs.forEach((input, index1) => {
    input.addEventListener("keyup", (e) => {
        // This code gets the current input element and stores it in the currentInput variable
        // This code gets the next sibling element of the current input element and stores it in the nextInput variable
        // This code gets the previous sibling element of the current input element and stores it in the prevInput variable
        const currentInput = input,
            nextInput = input.nextElementSibling,
            prevInput = input.previousElementSibling;

        // if the value has more than one character then clear it
        if (currentInput.value.length > 1) {
            currentInput.value = "";
            return;
        }
        // if the next input is disabled and the current value is not empty
        //  enable the next input and focus on it
        if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }

        // if the backspace key is pressed
        if (e.key === "Backspace") {
            // iterate over all inputs again
            inputs.forEach((input, index2) => {
                // if the index1 of the current input is less than or equal to the index2 of the input in the outer loop
                // and the previous element exists, set the disabled attribute on the input and focus on the previous element
                if (index1 <= index2 && prevInput) {
                    input.setAttribute("disabled", true);
                    input.value = "";
                    prevInput.focus();
                }
            });
        }
        //if the fourth input( which index number is 3) is not empty and has not disable attribute then
        //add active class if not then remove the active class.
        if (!inputs[3].disabled && inputs[3].value !== "") {
            button.classList.add("active");
            return;
        }
        button.classList.remove("active");
    });
});


const https = require('https');
const qs = require('querystring');
const random = require('random');

// Replace the placeholders with your actual API key and the client's mobile number
const api_key = 'YOUR_API_KEY';
const mobile_number = '+91CLIENT_MOBILE_NUMBER';

// Generate a 6-digit OTP code
const otp = random.int(10000, 9999);

// Construct the message to be sent
const message = `Your OTP code is ${otp}. Do not share it with anyone.`;

// Construct the request body
const requestBody = {
    sender_id: 'FSTSMS',
    message: message,
    language: 'english',
    route: 'p',
    numbers: mobile_number
};

// Construct the HTTP request options
const options = {
    hostname: 'www.fast2sms.com',
    path: '/dev/bulk',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': api_key
    }
};

// Make an HTTPS request to the Fast2SMS API
const req = https.request(options, (res) => {
    res.on('data', (d) => {
        // Parse the response data
        const response = JSON.parse(d.toString());
        if (response.return === true) {
            console.log('OTP code sent successfully');
        } else {
            console.error(`Failed to send OTP code with error: ${response.message}`);
        }
    });
});

// Handle errors with the HTTPS request
req.on('error', (error) => {
    console.error(`Failed to send OTP code with error: ${error}`);
});

// Send the request body as form data
req.write(qs.stringify(requestBody));
req.end();


//focus the first input which index is 0 on window load
window.addEventListener("load", () => inputs[0].focus());

//   function reloadWindow() {

//     window.location.reload();
//   }
function verify() {
    // Get the verified symbol element
    const verified = document.querySelector('.verified');

    console.log('verified');
    // Show the verified symbol element
    verified.style.display;
    // document.innerHtml = "verified";
}
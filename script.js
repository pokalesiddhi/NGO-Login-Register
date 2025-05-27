
const container = document.getElementById('container');

function showRegister() {
container.style.transform = 'translateX(-50%)';
}

function showLogin() {
container.style.transform = 'translateX(0%)';
}

// Utility functions
function validateEmail(email) {
const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return pattern.test(email);
}

function validatePhone(phone) {
const pattern = /^\d{10}$/;
return pattern.test(phone);
}

function validatePasswordStrength(password) {
const minLength = password.length >= 6;
const hasUppercase = /[A-Z]/.test(password);
const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
return minLength && hasUppercase && hasSpecialChar;
}

function showError(inputId, message) {
document.getElementById(inputId + "Error").innerText = message;
}

function clearErrors() {
const errors = document.querySelectorAll(".error");
errors.forEach(e => e.innerText = "");
}

// Login form validation
document.getElementById("loginForm").addEventListener("submit", function(e) {
e.preventDefault();
clearErrors();

const email = document.getElementById("loginEmail").value.trim();
const password = document.getElementById("loginPassword").value.trim();

if (!validateEmail(email)) {
    showError("loginEmail", "Please enter a valid email.");
} else if (password.length < 6) {
    showError("loginPassword", "Password must be at least 6 characters long.");
} else {
    document.getElementById("loginSuccess").innerText = "✅ Login successful!";
}
});

// Register form validation
document.getElementById("registerForm").addEventListener("submit", function(e) {
e.preventDefault();
clearErrors();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const phone = document.getElementById("phone").value.trim();
const password = document.getElementById("password").value.trim();
const confirmPassword = document.getElementById("confirmPassword").value.trim();

let isValid = true;

if (name === "") {
    showError("name", "Please enter your full name.");
    isValid = false;
}

if (!validateEmail(email)) {
    showError("email", "Please enter a valid email.");
    isValid = false;
}

if (!validatePhone(phone)) {
    showError("phone", "Please enter a valid 10-digit phone number.");
    isValid = false;
}

if (!validatePasswordStrength(password)) {
    showError("password", "Password must be 6+ chars with uppercase & special char.");
    isValid = false;
}

if (password !== confirmPassword) {
    showError("confirmPassword", "Passwords do not match.");
    isValid = false;
}

if (isValid) {
    document.getElementById("registerSuccess").innerText = "✅ Registered successfully!";
    showLogin();
} else {
    document.getElementById("registerSuccess").innerText = "";
}
});


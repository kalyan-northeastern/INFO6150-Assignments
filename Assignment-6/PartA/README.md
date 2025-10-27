# Part A: Calculator Web Application with User Login

## Description
A two-page web application featuring a secure login system and a calculator that performs basic arithmetic operations. The application demonstrates modern web development practices using jQuery and ES6+ JavaScript features.

## Features Implemented

### Login Page (`login.html`)
- **Email Validation**: Validates Northeastern email format (@northeastern.edu)
- **Password Validation**: Minimum 8 characters required
- **Real-time Validation**: jQuery validation on keyup and blur events
- **Hardcoded User Authentication**: 5 pre-defined user accounts for testing
- **Remember Me Functionality**: Option to store session in localStorage vs sessionStorage
- **Session Management**: Secure session storage with user data and timestamps
- **Error Handling**: Specific error messages displayed below form fields
- **Success Animation**: jQuery animation on successful login with redirect

### Calculator Page (`calculator.html`)
- **Authentication Check**: Automatic redirect to login if no valid session
- **Single Arrow Function**: One `calculate()` function handles all four operations (add, subtract, multiply, divide)
- **Input Validation**: Numeric validation for both input fields
- **Edge Case Handling**: Division by zero protection
- **jQuery Chaining**: UI updates using jQuery method chaining
- **Session Display**: Welcome message with username
- **Logout Functionality**: FadeOut animation with session cleanup

### Hardcoded Users
1. `kalyan.k@northeastern.edu` / `password123`
2. `janke.s@northeastern.edu` / `password456`
3. `dheeraj.d@northeastern.edu` / `password789`
4. `naveen.n@northeastern.edu` / `password012`
5. `rohit.r@northeastern.edu` / `password345`

## Technologies Used
- **HTML5**: Semantic markup and form elements
- **CSS3**: Professional styling with Flexbox, gradients, and animations
- **JavaScript ES6+**: Arrow functions, const/let, template literals
- **jQuery 3.6.0**: DOM manipulation, event handling, animations
- **Responsive Design**: Mobile-friendly layout with CSS Grid and Flexbox

## How to Run the Application
1. Open `login.html` in a web browser
2. Use any of the hardcoded user credentials to log in
3. After successful login, you'll be redirected to the calculator
4. Perform calculations using the four operation buttons
5. Use the logout button to return to the login page

## File Structure
```
PartA/
├── login.html          # Login page with form validation
├── calculator.html     # Calculator page with authentication
├── login.js           # Login functionality and validation
├── calculator.js      # Calculator logic and session management
├── styles.css         # Professional CSS styling
└── README.md          # This file
```

## Key JavaScript Features
- **Single Arrow Function**: `const calculate = (num1, num2, operation) => { ... }`
- **jQuery Validation**: Real-time form validation with error messages
- **Session Management**: Secure storage using sessionStorage/localStorage
- **jQuery Animations**: FadeOut effects and UI transitions
- **Method Chaining**: `$('#result').val(result).css(...).animate(...)`

## CSS Features
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Professional Styling**: Clean, modern interface with consistent color scheme
- **Visual Hierarchy**: Clear distinction between sections and elements
- **Error/Success States**: Color-coded messages and button states
- **Smooth Animations**: Hover effects and transitions

## Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Security Features
- Input validation and sanitization
- Session-based authentication
- Automatic session timeout
- Secure credential storage
- XSS protection through proper input handling

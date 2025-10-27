$(document).ready(function() {
    // Hardcoded users for validation
    const hardcodedUsers = [
        { email: "kalyan.k@northeastern.edu", password: "password123", username: "kalyan.k" },
        { email: "janke.s@northeastern.edu", password: "password456", username: "janke.s" },
        { email: "dheeraj.d@northeastern.edu", password: "password789", username: "dheeraj.d" },
        { email: "naveen.n@northeastern.edu", password: "password012", username: "naveen.n" },
        { email: "rohit.r@northeastern.edu", password: "password345", username: "rohit.r" }
    ];

    // Email validation
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@northeastern\.edu$/;
        return emailRegex.test(email);
    }

    // Password validation
    function validatePassword(password) {
        return password.length >= 8;
    }

    // Clear error messages
    function clearError(fieldId) {
        $(`#${fieldId}Error`).text('').hide();
    }

    // Show error message
    function showError(fieldId, message) {
        $(`#${fieldId}Error`).text(message).show();
    }

    // Check if form is valid
    function checkFormValidity() {
        const email = $('#email').val();
        const password = $('#password').val();
        
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);
        
        $('#loginBtn').prop('disabled', !(isEmailValid && isPasswordValid));
    }

    // Email field validation
    $('#email').on('keyup blur', function() {
        const email = $(this).val();
        
        if (email === '') {
            showError('email', 'Please enter a valid Northeastern email');
        } else if (!validateEmail(email)) {
            showError('email', 'Please enter a valid Northeastern email');
        } else {
            clearError('email');
        }
        
        checkFormValidity();
    });

    // Password field validation
    $('#password').on('keyup blur', function() {
        const password = $(this).val();
        
        if (password === '') {
            showError('password', 'Password is required');
        } else if (password.length < 8) {
            showError('password', 'Password must be at least 8 characters');
        } else {
            clearError('password');
        }
        
        checkFormValidity();
    });

    // Clear errors when focusing on fields
    $('#email').on('focus', function() {
        clearError('email');
    });

    $('#password').on('focus', function() {
        clearError('password');
    });

    // Form submission
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        
        const email = $('#email').val();
        const password = $('#password').val();
        const rememberMe = $('#rememberMe').is(':checked');
        
        // Clear previous errors
        $('#loginError').text('').hide();
        
        // Find matching user
        const user = hardcodedUsers.find(u => u.email === email && u.password === password);
        
        if (user) {
            // Create session data
            const sessionData = {
                username: user.username,
                email: user.email,
                loginTimestamp: new Date().toISOString(),
                isLoggedIn: true
            };
            
            // Store in sessionStorage or localStorage based on Remember Me
            if (rememberMe) {
                localStorage.setItem('calculatorSession', JSON.stringify(sessionData));
            } else {
                sessionStorage.setItem('calculatorSession', JSON.stringify(sessionData));
            }
            
            // Show success message with animation
            $('#successMessage').text('Login successful! Redirecting to calculator...').show();
            
            // Redirect after 2 seconds
            setTimeout(function() {
                window.location.href = 'calculator.html';
            }, 2000);
            
        } else {
            // Show error message
            $('#loginError').text('Invalid email or password').show();
        }
    });
});

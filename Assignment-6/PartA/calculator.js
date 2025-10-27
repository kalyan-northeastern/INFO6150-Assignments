$(document).ready(function() {
    // Check authentication on page load
    function checkAuthentication() {
        let sessionData = sessionStorage.getItem('calculatorSession');
        if (!sessionData) {
            sessionData = localStorage.getItem('calculatorSession');
        }
        
        if (!sessionData) {
            window.location.href = 'login.html';
            return;
        }
        
        try {
            const session = JSON.parse(sessionData);
            if (!session.isLoggedIn) {
                window.location.href = 'login.html';
                return;
            }
            
            // Update welcome message
            $('#welcomeMessage').text(`Welcome, ${session.username}!`);
        } catch (e) {
            window.location.href = 'login.html';
        }
    }

    // Single arrow function for all operations (REQUIREMENT)
    const calculate = (num1, num2, operation) => {
        switch (operation) {
            case 'add':
                return num1 + num2;
            case 'subtract':
                return num1 - num2;
            case 'multiply':
                return num1 * num2;
            case 'divide':
                if (num2 === 0) {
                    throw new Error('Division by zero is not allowed');
                }
                return num1 / num2;
            default:
                throw new Error('Invalid operation');
        }
    };

    // Validate number input
    function validateNumber(value, fieldId) {
        if (value === '') {
            showError(fieldId, 'Please enter a valid number');
            return false;
        }
        
        const num = parseFloat(value);
        if (isNaN(num)) {
            showError(fieldId, 'Please enter a valid number');
            return false;
        }
        
        clearError(fieldId);
        return true;
    }

    // Clear error message
    function clearError(fieldId) {
        $(`#${fieldId}Error`).text('').hide();
    }

    // Show error message
    function showError(fieldId, message) {
        $(`#${fieldId}Error`).text(message).show();
    }

    // Check if both inputs are valid
    function checkInputsValidity() {
        const num1 = $('#number1').val();
        const num2 = $('#number2').val();
        
        const isValid1 = validateNumber(num1, 'number1');
        const isValid2 = validateNumber(num2, 'number2');
        
        return isValid1 && isValid2;
    }

    // Number input validation
    $('#number1').on('blur', function() {
        validateNumber($(this).val(), 'number1');
    });

    $('#number2').on('blur', function() {
        validateNumber($(this).val(), 'number2');
    });

    // Clear errors when focusing on fields
    $('#number1').on('focus', function() {
        clearError('number1');
    });

    $('#number2').on('focus', function() {
        clearError('number2');
    });

    // Operation button click handler
    $('.operation-btn').on('click', function() {
        if (!checkInputsValidity()) {
            return;
        }
        
        const num1 = parseFloat($('#number1').val());
        const num2 = parseFloat($('#number2').val());
        const operation = $(this).data('operation');
        
        try {
            const result = calculate(num1, num2, operation);
            
            // Display result using jQuery chaining
            $('#result')
                .val(result)
                .css('background-color', '#e8f5e8')
                .animate({ opacity: 0.7 }, 200)
                .animate({ opacity: 1 }, 200);
                
        } catch (error) {
            $('#result')
                .val('Error: ' + error.message)
                .css('background-color', '#ffe8e8');
        }
    });

    // Logout functionality
    $('#logoutBtn').on('click', function() {
        // Clear session from both storages
        sessionStorage.removeItem('calculatorSession');
        localStorage.removeItem('calculatorSession');
        
        // Show fadeOut animation using jQuery
        $('body').fadeOut(500, function() {
            window.location.href = 'login.html';
        });
    });

    // Initialize authentication check
    checkAuthentication();
});

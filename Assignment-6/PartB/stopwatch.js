$(document).ready(function() {
    // Stopwatch state
    let startTime = 0;
    let elapsedTime = 0;
    let timerInterval = null;
    let isRunning = false;
    let isPaused = false;

    // Initialize date picker to today's date
    const today = new Date().toISOString().split('T')[0];
    $('#eventDate').val(today);

    // Format time helper function
    function formatTime(milliseconds) {
        const hours = Math.floor(milliseconds / 3600000);
        const minutes = Math.floor((milliseconds % 3600000) / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // Update timer display
    function updateTimerDisplay() {
        const currentTime = Date.now();
        const totalElapsed = elapsedTime + (isRunning ? (currentTime - startTime) : 0);
        $('#timerDisplay').text(formatTime(totalElapsed));
    }

    // Start timer using setInterval (REQUIREMENT)
    function startTimer() {
        if (!isRunning) {
            startTime = Date.now();
            isRunning = true;
            isPaused = false;
            
            timerInterval = setInterval(updateTimerDisplay, 1000);
            updateTimerDisplay();
        }
    }

    // Pause timer using clearInterval (REQUIREMENT)
    function pauseTimer() {
        if (isRunning) {
            elapsedTime += Date.now() - startTime;
            isRunning = false;
            isPaused = true;
            clearInterval(timerInterval);
        }
    }

    // Resume timer
    function resumeTimer() {
        if (isPaused) {
            startTime = Date.now();
            isRunning = true;
            isPaused = false;
            timerInterval = setInterval(updateTimerDisplay, 1000);
        }
    }

    // Stop timer and save session
    async function stopTimer() {
        if (isRunning || isPaused) {
            elapsedTime += Date.now() - startTime;
            isRunning = false;
            isPaused = false;
            clearInterval(timerInterval);
            
            // Save session using async/await (REQUIREMENT)
            await saveSession();
            
            // Reset timer
            resetTimer();
        }
    }

    // Reset timer
    function resetTimer() {
        isRunning = false;
        isPaused = false;
        startTime = 0;
        elapsedTime = 0;
        clearInterval(timerInterval);
        $('#timerDisplay').text('00:00:00');
    }

    // Validate date field
    function validateDate() {
        const date = $('#eventDate').val();
        if (!date) {
            showError('date', 'Please select a date');
            return false;
        }
        clearError('date');
        return true;
    }

    // Validate event name field
    function validateEventName() {
        const eventName = $('#eventName').val().trim();
        const eventNameRegex = /^[a-zA-Z0-9\s\-']+$/;
        
        if (!eventName) {
            showError('eventName', 'Event name is required');
            return false;
        } else if (eventName.length < 3) {
            showError('eventName', 'Event name must be at least 3 characters');
            return false;
        } else if (eventName.length > 100) {
            showError('eventName', 'Event name too long (max 100 characters)');
            return false;
        } else if (!eventNameRegex.test(eventName)) {
            showError('eventName', 'Event name contains invalid characters');
            return false;
        }
        
        clearError('eventName');
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

    // Save session using Promise (REQUIREMENT)
    function saveSession() {
        return new Promise((resolve, reject) => {
            try {
                const session = {
                    id: Date.now(),
                    date: $('#eventDate').val(),
                    eventName: $('#eventName').val().trim(),
                    duration: elapsedTime,
                    timestamp: new Date().toISOString()
                };

                // Get existing sessions from localStorage
                const existingSessions = JSON.parse(localStorage.getItem('stopwatchSessions') || '[]');
                
                // Add new session
                existingSessions.unshift(session);
                
                // Save back to localStorage
                localStorage.setItem('stopwatchSessions', JSON.stringify(existingSessions));
                
                // Update display
                loadSessions();
                updateStatistics();
                
                // Show success notification
                showNotification('Session saved successfully!', 'success');
                
                resolve(session);
            } catch (error) {
                showNotification('Error saving session: ' + error.message, 'error');
                reject(error);
            }
        });
    }

    // Load sessions from localStorage
    function loadSessions(filterDate = null) {
        const sessions = JSON.parse(localStorage.getItem('stopwatchSessions') || '[]');
        let filteredSessions = sessions;
        
        if (filterDate) {
            filteredSessions = sessions.filter(session => session.date === filterDate);
        }
        
        const historyList = $('#historyList');
        
        if (filteredSessions.length === 0) {
            historyList.html('<div class="no-sessions">No sessions recorded yet</div>');
            return;
        }
        
        let html = '';
        filteredSessions.forEach(session => {
            html += `
                <div class="history-item">
                    <div class="history-date">${new Date(session.date).toLocaleDateString()}</div>
                    <div class="history-event">${session.eventName}</div>
                    <div class="history-duration">${formatTime(session.duration)}</div>
                </div>
            `;
        });
        
        historyList.html(html);
    }

    // Update statistics
    function updateStatistics() {
        const sessions = JSON.parse(localStorage.getItem('stopwatchSessions') || '[]');
        const totalSessions = sessions.length;
        const totalTime = sessions.reduce((sum, session) => sum + session.duration, 0);
        
        $('#totalSessions').text(totalSessions);
        $('#totalTime').text(formatTime(totalTime));
    }

    // Show notification
    function showNotification(message, type = 'info') {
        const notification = $(`
            <div class="notification ${type}">
                ${message}
            </div>
        `);
        
        $('body').append(notification);
        
        setTimeout(() => {
            notification.fadeOut(300, function() {
                $(this).remove();
            });
        }, 3000);
    }

    // Update button states
    function updateButtonStates() {
        const isTimerActive = isRunning || isPaused;
        
        $('#startBtn').prop('disabled', isTimerActive);
        $('#pauseBtn').prop('disabled', !isTimerActive);
        $('#stopBtn').prop('disabled', !isTimerActive);
        
        if (isRunning) {
            $('#pauseBtn').text('Pause');
        } else if (isPaused) {
            $('#pauseBtn').text('Resume');
        }
        
        // Disable form fields when timer is running
        $('#eventDate, #eventName').prop('disabled', isTimerActive);
    }

    // Event handlers
    $('#startBtn').on('click', async function() {
        if (validateDate() && validateEventName()) {
            startTimer();
            updateButtonStates();
        }
    });

    $('#pauseBtn').on('click', function() {
        if (isRunning) {
            pauseTimer();
        } else if (isPaused) {
            resumeTimer();
        }
        updateButtonStates();
    });

    $('#stopBtn').on('click', async function() {
        await stopTimer();
        updateButtonStates();
    });

    $('#resetBtn').on('click', function() {
        resetTimer();
        updateButtonStates();
    });

    // Clear errors when focusing on fields
    $('#eventDate').on('focus', function() {
        clearError('date');
    });

    $('#eventName').on('focus', function() {
        clearError('eventName');
    });

    // Filter functionality
    $('#dateFilter').on('change', function() {
        const filterDate = $(this).val();
        loadSessions(filterDate);
    });

    $('#clearFilter').on('click', function() {
        $('#dateFilter').val('');
        loadSessions();
    });

    // Initialize
    loadSessions();
    updateStatistics();
    updateButtonStates();
});

# Part B: Event Stopwatch with Session Logging

## Description
A single-page stopwatch application that allows users to time events, associate them with specific dates, and maintain a comprehensive history stored in localStorage. The application demonstrates modern JavaScript features including async/await, Promises, setInterval, and clearInterval.

## Features Implemented

### Timer Display
- **Large Timer Display**: Prominent HH:MM:SS format timer (minimum 48px font size)
- **Real-time Updates**: Updates every second using setInterval
- **Monospace Font**: Clear, readable timer display using Courier New
- **Read-only Interface**: Users cannot manually edit the timer

### Event Details Section
- **Date Picker**: HTML5 date input, defaults to today's date
- **Event Name Field**: Text input with validation (3-100 characters)
- **Field Validation**: Both fields required before starting timer
- **Disabled State**: Fields disabled while timer is running
- **Real-time Validation**: jQuery validation with specific error messages

### Control Buttons
- **Start Button**: Begins stopwatch (requires valid date and event name)
- **Pause/Resume Button**: Toggles between pause and resume states
- **Stop & Save Button**: Stops timer and saves session to localStorage
- **Reset Button**: Clears timer without saving
- **Dynamic States**: Buttons enabled/disabled based on timer state

### Session History Section
- **Session Display**: Shows all saved sessions with date, event name, and duration
- **Chronological Order**: Most recent sessions displayed first
- **Date Filtering**: Filter sessions by specific date
- **Statistics**: Total sessions count and total time across all sessions
- **Empty State**: "No sessions recorded yet" message when no history exists

### Modern JavaScript Features
- **Async/Await**: Used for session saving operations
- **Promises**: Session saving wrapped in Promise for error handling
- **setInterval/clearInterval**: Timer functionality using native JavaScript methods
- **localStorage**: Persistent session storage across browser sessions
- **Error Handling**: Comprehensive try-catch blocks for robust error management

## Technologies Used
- **HTML5**: Semantic markup, date input type, form elements
- **CSS3**: Professional styling with CSS Grid, Flexbox, gradients, animations
- **JavaScript ES6+**: Async/await, Promises, arrow functions, const/let
- **jQuery 3.6.0**: DOM manipulation, event handling, animations
- **localStorage API**: Persistent data storage
- **Responsive Design**: Mobile-friendly layout

## How to Run the Application
1. Open `index.html` in a web browser
2. Select a date (defaults to today)
3. Enter an event name (minimum 3 characters)
4. Click "Start" to begin timing
5. Use "Pause/Resume" to control the timer
6. Click "Stop & Save" to save the session
7. View saved sessions in the history section
8. Use date filter to view sessions by specific date

## File Structure
```
PartB/
├── index.html         # Main stopwatch application
├── stopwatch.js       # Timer logic and session management
├── styles.css         # Professional CSS styling
└── README.md          # This file
```

## Key JavaScript Features

### Modern JavaScript Implementation
```javascript
// Async/Await for session saving
async function stopTimer() {
    await saveSession();
    resetTimer();
}

// Promise-based session saving
function saveSession() {
    return new Promise((resolve, reject) => {
        // Session saving logic
    });
}

// setInterval/clearInterval for timer
function startTimer() {
    timerInterval = setInterval(updateTimerDisplay, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
}
```

### Validation Features
- **Date Validation**: Ensures date is selected before starting
- **Event Name Validation**: 
  - Required field
  - Minimum 3 characters, maximum 100 characters
  - Only letters, numbers, spaces, hyphens, and apostrophes allowed
- **Real-time Feedback**: Errors displayed below fields in red
- **Field Focus Handling**: Errors cleared when user focuses on field

### Session Management
- **Persistent Storage**: Sessions saved to localStorage
- **Session Structure**: 
  ```javascript
  {
    id: timestamp,
    date: selectedDate,
    eventName: eventName,
    duration: elapsedTime,
    timestamp: ISOString
  }
  ```
- **Statistics Calculation**: Total sessions and cumulative time
- **Date Filtering**: Filter sessions by specific date

## CSS Features
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Professional Styling**: Clean, modern interface with consistent color scheme
- **Large Timer Display**: Minimum 48px font size for prominent timer
- **Color-coded Buttons**: Different colors for different actions
- **Notification System**: Toast notifications for success/error messages
- **Visual Hierarchy**: Clear separation between sections
- **Smooth Animations**: Hover effects and transitions
- **Disabled State Styling**: Visual feedback for disabled elements

## Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Data Persistence
- **localStorage**: Sessions persist across browser sessions
- **Data Structure**: JSON format for easy manipulation
- **Error Handling**: Graceful handling of localStorage errors
- **Data Validation**: Ensures data integrity before storage

## Performance Features
- **Efficient Timer**: Uses setInterval for smooth updates
- **Memory Management**: Proper cleanup of intervals
- **Optimized Rendering**: Efficient DOM updates
- **Responsive Design**: Smooth performance on all devices

## Accessibility Features
- **Semantic HTML**: Proper use of form elements and labels
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and structure
- **High Contrast**: Clear visual distinction between elements

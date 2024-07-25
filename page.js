document.addEventListener('DOMContentLoaded', function() {
    // Load Google Slide widget
    document.getElementById('google-slide-widget').innerHTML = '<iframe src="widgets/google_slide.html" class="widget"></iframe>';
    
    // Load Pomodoro Timer widget
    document.getElementById('pomodoro-widget').innerHTML = '<iframe src="widgets/pomodoro.html" class="widget"></iframe>';
  
    // Load Google Spreadsheet widget
    document.getElementById('google-spreadsheet-widget').innerHTML = '<iframe src="widgets/google_spreadsheet.html" class="widget"></iframe>';
  
    // Load other widgets similarly...
  });
  
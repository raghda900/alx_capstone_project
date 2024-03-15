document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: [
        {
          title: 'Event 1',
          start: '2024-03-15T10:00:00',
          end: '2024-03-15T12:00:00'
        },
        {
          title: 'Event 2',
          start: '2024-03-16T14:00:00',
          end: '2024-03-16T16:00:00'
        }
      ]
    });
  
    calendar.render();
  });
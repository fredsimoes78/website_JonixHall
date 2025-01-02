function updateClock() {
    const due_date = new Date('2034-11-10')
    const now = new Date();
    const diff = due_date - now  //this is miliseconds

    const days = String(diff.getDays()).padStart(4, '0');
    const hours = String(diff.getHours()).padStart(2, '0');
    const mins = String(diff.getMinutes()).padStart(2, '0');
    const secs = String(diff.getSeconds()).padStart(2, '0');

    document.getElementById('clock').textContent = `${days}${hours}:${mins}:${secs}`;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000); //every 1000 miliseconds
  
  // Initialize the clock immediately
  updateClock();
  
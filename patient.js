function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

// Show dashboard by default
showSection('dashboard');

// Enhanced calendar for September
const calendar = document.getElementById('calendar');
const weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

// Weekday header
weekdays.forEach(day => {
    const div = document.createElement('div');
    div.textContent = day;
    div.style.fontWeight = 'bold';
    div.style.backgroundColor = 'transparent';
    div.style.cursor = 'default';
    calendar.appendChild(div);
});

// Days
const daysInMonth = 30; // Example
for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement('div');
    day.textContent = i;
    day.addEventListener('click', () => {
        alert(`You selected ${i} Sep 2025`);
    });
    calendar.appendChild(day);
}

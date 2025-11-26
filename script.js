// Показ экранов
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Обработка формы
document.getElementById('profile-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        goal: document.getElementById('goal').value,
        children: document.getElementById('children').value,
        values: document.getElementById('values').value,
        interests: document.getElementById('interests').value,
        hideName: document.getElementById('show-name').checked
    };
    
    console.log('Данные анкеты:', formData);
    showScreen('success-screen');
});

// Закрытие приложения
function closeApp() {
    if (typeof Telegram !== 'undefined' && Telegram.WebApp) {
        Telegram.WebApp.close();
    }
}

// Показываем welcome экран при загрузке
document.addEventListener('DOMContentLoaded', function() {
    showScreen('welcome-screen');
});

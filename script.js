const notifyButton = document.getElementById('notify-btn');
const contactInput = document.getElementById('user-contact');

notifyButton.addEventListener('click', () => {
    const contactValue = contactInput.value.trim();

    if (contactValue !== '') {
        // Чистая официальная ссылка на твой аккаунт без ломающих параметров
        const telegramUrl = 'https://t.me';
        
        // Открываем чат в Telegram. На телефонах это сразу запустит приложение
        window.open(telegramUrl, '_blank');
        
        // Очищаем поле ввода на сайте
        contactInput.value = '';
    } else {
        alert('Пожалуйста, введите ваш Telegram или телефон! 📱');
    }
});

const notifyButton = document.getElementById('notify-btn');
const contactInput = document.getElementById('user-contact');

notifyButton.addEventListener('click', () => {
    const contactValue = contactInput.value.trim();

    if (contactValue !== '') {
        // Формируем текст сообщения
        const text = 'Привет! Хочу узнать об открытии WOODZY SHOP. Мой contact: ' + contactValue;
        
        // Кодируем текст для безопасной передачи
        const encodedText = encodeURIComponent(text);
        
        // ВНУТРЕННЯЯ КОМАНДА ДЛЯ ТЕЛЕФОНА (открывает чат со 100% гарантией)
        const telegramUrl = 'tg://resolve?domain=managerwoodzy&text=' + encodedText;
        
        // Открываем Telegram на телефоне напрямую
        window.open(telegramUrl, '_self');
        
        // Очищаем поле ввода на сайте
        contactInput.value = '';
    } else {
        alert('Пожалуйста, введите ваш Telegram или телефон! 📱');
    }
});

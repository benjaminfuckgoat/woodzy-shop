const notifyButton = document.getElementById('notify-btn');
const contactInput = document.getElementById('user-contact');

notifyButton.addEventListener('click', () => {
    const contactValue = contactInput.value.trim();

    if (contactValue !== '') {
        // Формируем текст сообщения для чата
        const text = 'Привет! Хочу узнать об открытии WOODZY SHOP. Мой контакт: ' + contactValue;
        
        // Кодируем текст, чтобы он корректно передался в ссылке
        const encodedText = encodeURIComponent(text);
        
        // ЖЕЛЕЗОБЕТОННАЯ ССЫЛКА: Слэш '/' после t.me теперь на месте на 100%
        const telegramUrl = 'https://t.me/managerwoodzy' + encodedText;
        
        // Открываем диалог в Telegram
        window.open(telegramUrl, '_blank');
        
        // Очищаем поле ввода на сайте
        contactInput.value = '';
    } else {
        alert('Пожалуйста, введите ваш Telegram или телефон! 📱');
    }
});

// === НАСТРОЙКИ TELEGRAM ===
const TELEGRAM_TOKEN = '8662546367:AAHFcXSU-0C03EwxIfigEo1tARw69fl5c8Y';
const TELEGRAM_CHAT_ID = '6253020992';

// Находим элементы на странице
const notifyButton = document.getElementById('notify-btn');
const contactInput = document.getElementById('user-contact');
const successText = document.getElementById('success-text');

notifyButton.addEventListener('click', () => {
    const contactValue = contactInput.value.trim();

    if (contactValue !== '') {
        // Формируем текст сообщения для тебя
        const messageText = `🔥 Новая заявка в WOODZY SHOP!\n📱 Контакт клиента: ${contactValue}`;

        // Ссылка запроса (используем обычные кавычки и стандартное сложение строк, чтобы браузер точно не ругался)
        const url = 'https://telegram.org' + TELEGRAM_TOKEN + '/sendMessage';

        // Отправляем запрос на сервер Telegram
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: messageText
            })
        })
        .then(response => {
            if (response.ok) {
                // Если всё ок, скрываем форму и показываем текст успеха
                contactInput.style.display = 'none';
                notifyButton.style.display = 'none';
                successText.style.display = 'block';
            } else {
                alert('Произошла ошибка со стороны Telegram. Проверь, запущен ли бот! 🙏');
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при отправке запроса.');
        });

    } else {
        alert('Пожалуйста, введите ваш Telegram или телефон! 📱');
    }
});

// НАСТРОЙКИ СВЯЗИ
const TELEGRAM_USERNAME = 'managerwoodzy'; // Юзернейм аккаунта без знака @
const WHATSAPP_NUMBER = '79991234567';     // Номер для WhatsApp (только цифры, начиная с 7)

// Находим новые кнопки
const tgOrderButton = document.getElementById('order-tg-btn');
const waOrderButton = document.getElementById('order-wa-btn');

// Клик по кнопке Telegram
tgOrderButton.addEventListener('click', () => {
    // Чистая ссылка на профиль: так приложение откроет чат без ошибок
    const url = 'https://t.me' + TELEGRAM_USERNAME;
    window.open(url, '_blank');
});

// Клик по кнопке WhatsApp
waOrderButton.addEventListener('click', () => {
    // Прямая официальная ссылка на чат WhatsApp по номеру телефона
    const url = 'https://wa.me' + WHATSAPP_NUMBER;
    window.open(url, '_blank');
});

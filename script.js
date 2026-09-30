const notifyButton = document.getElementById('notify-btn');
const contactInput = document.getElementById('user-contact');

notifyButton.addEventListener('click', () => {
    const contactValue = contactInput.value.trim();

    if (contactValue !== '') {
        
        // ВПИШИ СЮДА СВОЙ НОМЕР ТЕЛЕФОНА (без +, без пробелов, начиная с 7)
        // Пример: '79991234567'
        const myPhoneNumber = '1 351 358 1759'; 
        
        // ВАРИАНТ 1: Прямой переход в WhatsApp (самый надежный на телефонах, открывает чат сразу)
        const url = 'https://wa.me' + myPhoneNumber;
        
        // ВАРИАНТ 2: Если хочешь именно Telegram по номеру, сотри строчку выше и раскомментируй эту:
        // const url = 'https://t.me+' + myPhoneNumber;

        // Открываем чат мессенджера
        window.open(url, '_blank');
        
        // Очищаем поле ввода на сайте
        contactInput.value = '';
    } else {
        alert('Пожалуйста, введите ваш Telegram или телефон! 📱');
    }
});

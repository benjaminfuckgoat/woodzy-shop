// Находим все элементы вопросов на странице
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Находим всю карточку вопроса (родительский элемент)
        const faqItem = question.parentElement;
        
        // Переключаем класс .active (если его нет — добавит, если есть — уберет)
        faqItem.classList.toggle('active');
    });
});

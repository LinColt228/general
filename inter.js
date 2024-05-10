// JavaScript код
document.getElementById('directionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняємо перезавантаження сторінки при відправці форми

    // Отримуємо дані з форми
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var email = document.getElementById('email').value;

    // Генеруємо напрямок
    var direction = "Заголовок: " + title + "<br>Опис: " + description + "<br>Адреса електронної пошти: " + email;

    // Виводимо напрямок на сторінці
    document.getElementById('output').innerHTML = "<h3>Згенерований напрямок:</h3>" + direction;
});

// JavaScript код
        document.getElementById('directionForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Зупиняємо перезавантаження сторінки при відправці форми

            // Отримуємо дані з форми
            var group = document.getElementById('group').value;
            var course = document.getElementById('course').value;
            var title = document.getElementById('title').value;
            var description = document.getElementById('description').value;
            var email = document.getElementById('email').value;

            // Генеруємо напрямок
            var direction = "<h3>Згенерований напрямок:</h3><p><strong>Група:</strong> " + group + "</p><p><strong>Курс:</strong> " + course + "</p><p><strong>Заголовок:</strong> " + title + "</p><p><strong>Опис:</strong> " + description + "</p><p><strong>Адреса електронної пошти:</strong> " + email + "</p>";

            // Додаємо напрямок на сторінку
            document.getElementById('output').innerHTML = direction;

            // Показуємо кнопку для відправки напрямку на пошту
            document.getElementById('sendDirection').style.display = 'block';
        });

        // Додавання обробника події для кнопки відправки напрямку на пошту
        document.getElementById('sendDirection').addEventListener('click', function() {
            // Отримуємо дані зі згенерованого напрямку
            var directionData = document.getElementById('output').innerHTML;

            // Виконайте тут логіку для відправки напрямку на вказану адресу електронної пошти
            // Наприклад, ви можете використовувати AJAX-запит до серверного скрипта для відправки пошти
            console.log('Відправлено на пошту:', directionData);
        });
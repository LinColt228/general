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

        // Надсилаємо напрямок на електронну пошту
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'send_email.php', true); // Замініть 'send_email.php' на URL вашого серверного скрипту
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText); // Виведіть відповідь сервера у консоль
            }
        };
        xhr.send('group=' + encodeURIComponent(group) + '&course=' + encodeURIComponent(course) + '&title=' + encodeURIComponent(title) + '&description=' + encodeURIComponent(description) + '&email=' + encodeURIComponent(email));
    });


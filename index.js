document.getElementById('directionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняємо перезавантаження сторінки при відправці форми

    // Отримуємо дані з форми
    var group = document.getElementById('group').value;
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var email = document.getElementById('email').value;

    // Генеруємо напрямок
    var direction = "Група: " + group + "\nЗаголовок: " + title + "\nОпис: " + description + "\nАдреса електронної пошти: " + email;

    // Відправляємо напрямок на електронну пошту
    var subject = "Напрямок на перездачу";
    var body = direction;
    var mailToLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    // Відкриваємо поштовий клієнт з заповненим листом
    window.location.href = mailToLink;

    // Опціонально: Очистити поля форми після відправки
    document.getElementById('group').value = "";
    document.getElementById('title').value = "";
    document.getElementById('description').value = "";
    document.getElementById('email').value = "";

    // Виводимо напрямок на сторінці
    document.getElementById('output').innerHTML = "<h3>Згенерований напрямок:</h3>" + direction;
});

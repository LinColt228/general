  <script>
        document.getElementById('directionForm').addEventListener('submit', function(event) {
            event.preventDefault();

            var teacher = document.getElementById('teacher').value;
            var student = document.getElementById('student').value;
            var group = document.getElementById('group').value;
            var course = document.getElementById('course').value;
            var subject = document.getElementById('subject').value;
            var date = document.getElementById('date').value;

            var direction = `
                <div style="font-family: Arial, sans-serif;">
                    <p>Студент ${student} ${group}, ${course} направляється до Вас для здачі повторного іспиту з предмету ${subject}</p>
                    <p>В результаті перездачі іспиту (заліку) студент отримав оцінку:_________</p>
                    <p>Викладач: ${teacher}</p>
                    <p>Дата: ${date} р.</p>
                    <p style="text-align: left;">Підпис викладача: ____________________</p>
                    <p style="text-align: right;">Підпис зав.відділення: ____________________</p>
                </div>
            `;

            document.getElementById('output').innerHTML = direction;
            document.getElementById('downloadDirection').style.display = 'block';
        });

        document.getElementById('downloadDirection').addEventListener('click', function() {
            html2canvas(document.getElementById('output'), {
                onrendered: function(canvas) {
                    var link = document.createElement('a');
                    link.href = canvas.toDataURL('image/png');
                    link.download = 'Направлення.png';
                    link.click();
                }
            });
        });
    </script>

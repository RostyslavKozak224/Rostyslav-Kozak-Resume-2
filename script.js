document
    .querySelectorAll('.navigation__container a') // Отримуємо всі посилання і проходимося по них циклом
    .forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Запобігаємо стандартній поведінці

            const targetId = this.getAttribute('href'); // Отримуємо у кожного посилання атрибут href
            const targetElement = document.querySelector(targetId); // Знаходимо елемент за id

            if (targetElement) {
                history.replaceState(null, null, targetId); // Змінюємо хеш у посиланні
                document
                    .querySelectorAll('.navigation__container a') // Збираємо всі посилання навігації на сторінці
                    .forEach((underline) => {
                        // Проходимося по всіх посиланнях і видаляємо клас і колір активного посилання
                        underline.style.removeProperty('color');
                        underline.childNodes[1].classList.remove('active');
                    });

                // Отримуємо елемент span з посилання
                const underline = this.querySelector('.navigation__underline');
                if (underline) {
                    // І додаємо йому активний клас
                    underline.classList.add('active');
                    this.style.color = '#0284c7';
                }

                // Якщо елемент існує
                const elementTop = targetElement.offsetTop; // Відстань від верхньої частини документа до елемента

                // Встановлюємо відстань до верхньої межі елемента, враховуючи висоту навігації
                window.scrollTo({
                    top: elementTop - 120,
                    behavior: 'smooth', // Плавна прокрутка
                });
            }
        });
    });

# Igor Asessorov

## Contact information:

E-mail: igor.asessorov@gmail.com

Phone/WhatsApp: +7(924)281-25-65

Telegram: [Bumble_sakh](https://t.me/Bumble_sakh)

GitHub: [Bumble-sakh](https://github.com/Bumble-sakh)

RS School Discord: Igor Asessorov (@bumble-sakh)

---

## Skills

- HTML
- CSS
- JS
- Bootstrap
- Git

---

## Code example

    function customHttp() {
      return {
        get(url, cb) {
          try {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.send();

            xhr.addEventListener('load', () => {
              if(Math.floor(xhr.status / 100) !== 2) {
                cb(`Error. Status code: ${xhr.status}`, xhr);
                return ;
              }
              const response = JSON.parse(xhr.responseText);
              cb(null, response);
            });

            xhr.addEventListener('error', () => {
              cb(`Error. Status code: ${xhr.status}`, xhr);
            });
          } catch (error) {
            cb(`Error. ${error}`);
          }
        },
      }
    }

---

## Experience

- ### Avia Tickets App (HTML, CSS, JS, Bootstrap, API)

  - [Deploy](https://bumble-sakh.github.io/Training-Avia-Tickets/dist/)

  - [GitHub](https://github.com/Bumble-sakh/Training-Avia-Tickets)

- ### News App (HTML, CSS, JS, Bootstrap, API)

  - [Deploy](https://bumble-sakh.github.io/Training-News-App/)
  - [GitHub](https://github.com/Bumble-sakh/Training-News-App)

- ### ToDo Project (HTML, CSS, JS)

  - [Deploy](https://bumble-sakh.github.io/JS-ToDoList/)

  - [GitHub](https://github.com/Bumble-sakh/JS-ToDoList)

---

## Education

- Moscow University for Industry and Finance "Synergy" (2016-2020)

- [Udemy: Modern javascript from beginning](https://www.udemy.com/course/modern-javascript-from-beginning)

---

## Language skills

- Russian (Native)

- English (A1)

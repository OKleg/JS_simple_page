# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
## При запуске выполниь
```
   yarn
   yarn dev
```


# Задание 
Используемые технологии: React, Redux.
Задача - Реализовать приложение, которое умеет показывать следующие страницы:
- •	/ — главная
- •	/login — страница ввода логина и пароля
- •	/movies — страница со списком фильмов (плюсом будем, если запрашивать эти данные отсюда https://www.themoviedb.org/documentation/api?language=ru-RU)
- •	/profile — страница с произвольным текстом, недоступная без авторизации

На сайте, в шапке или подвале реализовать ссылки:
- •	На главную (/)
- •	Фильмы (/movies)
- •	Профиль (/profile)

Если пользователь кликает на страницу “профиля” и он не “авторизован” — перекидывать на страницу /login
Форма входа (/login) принимает “фейковые” данные:
username: Admin
password: 12345

Если введены другие данные, то показывается сообщения: "Имя пользователя или пароль введены не верно"
Если введены корректные данные, то перебрасывать на страницу /profile

Информацию об авторизации пользователя можно хранить в localStorage, простым параметром true/false. Базу данных реализовать не нужно.
Все, необходимое на ваш взгляд, прокинуть через Redux.
**Оформление (дизайн) — не обязательно, но будет плюсом**.

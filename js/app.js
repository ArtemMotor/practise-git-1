'use strict'
/* 
Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', 4)

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

let lastFilm_1 = prompt(
  'Один из последних просмотренных фильмов?',
  'terminator'
)
let markLastFilm_1 = prompt('На сколько оцените его?', 5.6)

let lastFilm_2 = prompt('Один из последних просмотренных фильмов?', 'robocop')
let markLastFilm_2 = prompt('На сколько оцените его?', 7.3)

personalMovieDB.movies[lastFilm_1] = markLastFilm_1
personalMovieDB.movies[lastFilm_2] = markLastFilm_2

console.log(typeof personalMovieDB.count) // количество фильмов
console.log(personalMovieDB.movies) // сюда записаны фильмы и их оценка
console.log(personalMovieDB) // позволяет увидеть объект

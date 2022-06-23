/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

import { movies } from "../modules/movies.js";
import { modal, modalBg, openModal, closeModal } from "../modules/modal.js";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const moviesListArea = document.querySelector('.promo__interactive-list')
// {/* <li class="promo__interactive-item">ЛОГАН
//                             <div class="delete"></div>
//                         </li>
//                         <li class="promo__interactive-item">ЛИГА СПРАВЕДЛИВОСТИ
//                             <div class="delete"></div>
//                         </li>
//                         <li class="promo__interactive-item">ЛА-ЛА ЛЭНД
//                             <div class="delete"></div>
//                         </li>
//                         <li class="promo__interactive-item">ОДЕРЖИМОСТЬ
//                             <div class="delete"></div>
//                         </li>
//                         <li class="promo__interactive-item">СКОТТ ПИЛИГРИМ ПРОТИВ...
//                             <div class="delete"></div>
//                         </li> */}
function reload(arr) {
    moviesListArea.innerHTML = ''
    for (let item of arr) {
        // Creating list
        let li = document.createElement('li')
        let del = document.createElement('div')
        // Decorating it
        li.classList.add('promo__interactive-item')
        li.innerHTML = item.Title
        del.classList.add('delete')
        // Appending each of them to other (connecting)
        moviesListArea.append(li)
        li.append(del)
        // Events
        li.onclick = () => {
            openModal(item)
        }
    }
}
reload(movies)
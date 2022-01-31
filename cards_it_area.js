var colors = {
    blue: "#04809F",
    dark_blue: "#05434E",
    white: "#FFFFFF",
    black: "#000000",
    gray: "#808080",
    milk: "#FAFAFA"
}

var it_area__card__events = [
    it_area__card__events_1 = {
        name: "Хакатон Moscow Secure Traffic",
        link: "https://securetraffic.moscow/",
        date: "3 - 5 декабря 2021",
        description: "Хакатон направлен на поиск новых и нестандартных решений в области кибербезопасности сервисов Московского транспорта"
    },

    it_area__card__eventss_2 = {
        name: "YaTalks 2021",
        link: "https://yatalks.yandex.ru/",
        date: "3 - 4 декабря 2021",
        description: "Яндекс анонсировал YaTalks 2021 — конференция для IT-сообщества. На ней подведут итоги индустрии за последний год, а также затронут lifestyle-темы, связанные с жизнью разработчиков."
}
]

var it_area__card___book = [
    it_area__card___book_1 = {
        name: "Deadline",
        author: "Том ДеМарко"
    },

    it_area__card___book_2 = {
        name: "Чистый код",
        author: "Роберт Мартин"
    },

    it_area__card___book_3 = {
        name: "Алгоритмы: построение и анализ",
        author: "Томас Кормен"
    }
]

var it_area__card__courses = [
    it_area__card__sources_1 = {
        name: "Coursera",
        link: "https://www.coursera.org/",
        description: "Развивайте навыки с помощью онлайн-курсов, сертификаций и дипломных программ от лучших университетов и компаний мира."
    },

    it_area__card__sources_2 = {
        name: "Школа 21",
        link: "https://21-school.ru/",
        description: "<p>Программирование с нуля для тех, кто хочет</p><br><p>&bull; сменить профессию</p><p>&bull; найти себя в ИТ</p><p>&bull; получить практические знания</p>"
    },

    it_area__card__sources_3 = {
        name: "Stepik",
        link: "https://welcome.stepik.org/ru",
        description: "Онлайн-курсы от ведущих вузов и компаний страны. Пройдите лучшие курсы, подготовленные вузами, компаниями и индивидуальными авторами на Stepik"
    }
]

let max_count_of_click;
let count_of_click = 0

function previous_card() {
    if (count_of_click > 0)
        count_of_click--;
    if (count_of_click >= 0) {
        let distance = 220 * count_of_click;
        document.getElementById('scroll').style.position = "relative";
        document.getElementById('scroll').style.right = distance.toString() + "px";
    }
}

function next_card() {
    if (window.innerWidth <= 660)
        max_count_of_click = 2;
    else if (window.innerWidth <= 880)
        max_count_of_click = 1;
    else if (window.innerWidth <= 900)
        max_count_of_click = 0;
    if (count_of_click >= 0 && count_of_click < max_count_of_click) {
        count_of_click++;
        let distance = 220 * count_of_click;
        document.getElementById('scroll').style.position = "relative";
        document.getElementById('scroll').style.right = distance.toString() + "px";
    }
}

function paint_block(element) {
    document.getElementById('it_area__events').style.backgroundColor = colors.white;
    document.getElementById('it_area__events').style.color = colors.black;
    document.getElementById('it_area__events').style.borderColor = colors.gray;
    document.getElementById('it_area__road_map').style.backgroundColor = colors.white;
    document.getElementById('it_area__road_map').style.color = colors.black;
    document.getElementById('it_area__road_map').style.borderColor = colors.gray;
    document.getElementById('it_area__book').style.backgroundColor = colors.white;
    document.getElementById('it_area__book').style.color = colors.black;
    document.getElementById('it_area__book').style.borderColor = colors.gray;
    document.getElementById('it_area__free_courses').style.backgroundColor = colors.white;
    document.getElementById('it_area__free_courses').style.color = colors.black;
    document.getElementById('it_area__free_courses').style.borderColor = colors.gray;
    document.getElementById(element).style.backgroundColor = colors.blue;
    document.getElementById(element).style.color = colors.milk;
    document.getElementById(element).style.borderColor = colors.blue;
}

function fill__events__card() {
    document.querySelector('.it_area__content__main__content').innerHTML = "";
    paint_block("it_area__events");
    for (let i = 0; i < it_area__card__events.length; i++) {
        let card = document.createElement('div');
        card.className = "stack-cards__item js-stack-cards__item it_area__main__block it_area__events";
        card.id = "it_area__card__events_" + i;
        document.querySelector('.it_area__content__main__content').appendChild(card);

        let content_block_top = document.createElement('div');
        content_block_top.className = "content_block_top";
        content_block_top.id = "content_block_top_" + i;
        document.querySelector('#it_area__card__events_' + i).appendChild(content_block_top);

        let event_name = document.createElement('div');
        event_name.className = "event_name";
        event_name.id = "event_name_" + i;
        event_name.textContent = it_area__card__events[i].name;
        document.querySelector('#content_block_top_' + i).appendChild(event_name);

        let date = document.createElement('div');
        date.className = "date";
        date.id = "date" + i;
        date.textContent = it_area__card__events[i].date;
        document.querySelector('#content_block_top_' + i).appendChild(date);

        let content_block_bottom = document.createElement('div');
        content_block_bottom.className = "content_block_bottom";
        content_block_bottom.id = "content_block_bottom_" + i;
        document.querySelector('#it_area__card__events_' + i).appendChild(content_block_bottom);

        let description = document.createElement('div');
        description.className = "description";
        description.id = "description_" + i;
        description.textContent = it_area__card__events[i].description;
        document.querySelector('#content_block_bottom_' + i).appendChild(description);

        let button_to_site = document.createElement('div');
        button_to_site.className = "button_to_site";
        button_to_site.id = "button_to_site" + i;
        button_to_site.textContent = "На сайт";
        button_to_site.onclick = function () {
            document.location.href = it_area__card__events[i].link;
        }
        document.querySelector('#content_block_bottom_' + i).appendChild(button_to_site);
    }
}

function fill__road_map__content() {
    document.querySelector('.it_area__content__main__content').innerHTML = "";''
    paint_block("it_area__road_map");

    let road_map__content = document.createElement('div');
    road_map__content.className = "road_map__content";
    road_map__content.id = "road_map__content__element";
    road_map__content.style.position = "relative";
    // road_map__content.style.top = "60px";
    document.querySelector('.it_area__content__main__content').appendChild(road_map__content);

    let title = document.createElement('div');
    title.className = "road_map__content__title";
    title.textContent = "Roadmap";
    document.querySelector('.road_map__content').appendChild(title);

    let main_text = document.createElement('div');
    main_text.className = "road_map__content__main_text";
    main_text.textContent = "roadmap.sh - это попытка сообщества создать ментальные карты, руководства и другой образовательный контент, чтобы помочь разработчикам выбрать путь и направить их обучение."
    document.querySelector('.road_map__content').appendChild(main_text);

    let button_to_site = document.createElement('div');
    button_to_site.className = "road_map__content_button_to_site";
    button_to_site.textContent = "На сайт";
    button_to_site.onclick = function () {
        document.location.href = "https://roadmap.sh"
    }
    document.querySelector('.road_map__content').appendChild(button_to_site);
}

function fill__books__card() {
    document.querySelector('.it_area__content__main__content').innerHTML = "";
    paint_block("it_area__book");
    let library = document.createElement('div');
    library.className = "library";
    library.id = "library__element";
    document.querySelector('.it_area__content__main__content').appendChild(library);

    for (let i = 0; i < it_area__card___book.length; i++) {
        let book =  document.createElement('div');
        book.className = "library__book";
        book.id = "library__book_" + i;
        document.querySelector('.library').appendChild(book);

        let content = document.createElement('div');
        content.className = "library__book__content";
        content.id = "library__book__content_" + i;
        document.querySelector("#library__book_" + i).appendChild(content);

        let book_name = document.createElement('div');
        book_name.className = "library__book__name";
        book_name.textContent = it_area__card___book[i].name;
        document.querySelector("#library__book__content_" + i).appendChild(book_name);

        let book_author = document.createElement('div');
        book_author.className = "library__book__author";
        book_author.textContent = it_area__card___book[i].author;
        document.querySelector("#library__book__content_" + i).appendChild(book_author);

        if (i % 2 === 0) {
            book.style.backgroundColor = colors.dark_blue;
            book.style.color = colors.milk;
        }
        else {
            book.style.backgroundColor = colors.milk;
            book.style.color = colors.dark_blue;
        }
    }
}
fill__books__card()

function fill__courses__card() {
    document.querySelector('.it_area__content__main__content').innerHTML = "";
    paint_block("it_area__free_courses");
    for (let i = 0; i < it_area__card__courses.length; i++) {
        let card = document.createElement('div');
        card.className = "stack-cards__item js-stack-cards__item it_area__main__block it_area__free_courses";
        card.id = "it_area__card__free_courses_" + i;
        document.querySelector('.it_area__content__main__content').appendChild(card);

        let name = document.createElement('div');
        name.className = "name";
        name.id = "name_" + i;
        name.textContent = it_area__card__courses[i].name;
        document.querySelector("#it_area__card__free_courses_" + i).appendChild(name);

        let content_block = document.createElement('div');
        content_block.className = "content_block";
        content_block.id = "content_block_" + i;
        document.querySelector("#it_area__card__free_courses_" + i).appendChild(content_block);

        let description = document.createElement('div');
        description.className = "description";
        description.id = "description_" + i;
        description.innerHTML = it_area__card__courses[i].description;
        document.querySelector('#content_block_' + i).appendChild(description);

        let button_to_site = document.createElement('div');
        button_to_site.className = "button_to_site";
        button_to_site.id = "button_to_site" + i;
        button_to_site.textContent = "На сайт";
        button_to_site.onclick = function () {
            document.location.href = it_area__card__courses[i].link;
        }
        document.querySelector('#content_block_' + i).appendChild(button_to_site);
    }
}

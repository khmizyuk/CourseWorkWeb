var colors = {
    blue: "#04809F",
    dark_blue: "#05434E",
    white: "#FFFFFF",
    black: "#000000",
    gray: "#808080",
    milk: "#FAFAFA"
}

var for_students__card__university = [
    for_students__card__university_1 = {
        name: "Forbes Education",
        link: "https://education.forbes.ru/authors/rating-vuzov-2021",
        description: "Forbes составил рейтинг лучших университетов России 2021. Как и в прошлом году, на первой строчке оказалась Высшая школа экономики, второе место занял МГУ им. М.В. Ломоносова, замыкает тройку МИФИ, который на несколько баллов опередил Физтех."
    },

    for_students__card__university_2 = {
        name: "Вузотека",
        link: "https://vuzoteka.ru/вузы",
        description: "Рейтинг всех вузов, институтов и университетов России. Приводится информация о направлениях поступления, вступительных испытаниях, проходных баллах, стоимости обучения и бюджетных местах. В рейтинге участвуют более двух тысяч вузов. Основными критериями при составлении рейтинга являются: качество обучения, научная деятельность, международные связи, востребованность работодателями студентов вузов."
    },

    for_students__card__university_3 = {
        name: "Buduguru",
        link: "http://buduguru.org/universities",
        description: "Перед вами — рейтинг вузов России по уровню зарплат выпускников, работающих в IT. Рейтинг составлен РОЦИТ и РАЭК на основе сравнения среднего балла ЕГЭ зачисленных студентов, наличия ИТ-специальностей в перечне программ подготовки и других факторов"
    }
]

var for_students__card__events = [
    for_students__card__events_1 = {
        name: 'Олимпиада «Я - профессионал»',
        link: "https://yandex.ru/profi/",
        date: "10.12.2121",
        description: "Всероссийская олимпиада для студентов разных направлений подготовки: технических, гуманитарных, социально-экономических, естественно-научных, педагогических, аграрных и медицинских"
    },

    for_students__card__events_2 = {
        name: "Летняя ИТ-школа КРОК",
        link: "https://schoolcroc.ru/",
        date: "лето 2022",
        description: "Летняя ИТ-школа КРОК – бесплатный интенсив по погружению в одну из ИТ-профессий: от разработки и аналитики до маркетинга и продаж. В 2021 году студенты прошли обучение по 10 направлениям!"
    }
]

var for_students__card__internships = [
    for_students__card__internships_1 = {
        name: "SberSeasons",
        link: "https://sbergraduate.ru/sberseasons-moscow/",
        description: "«Не бойтесь пробовать и используйте любую возможность, которая вам даётся. Вы можете даже не догадываться, сколько дверей она сможет открыть перед вами»"
    },

    for_students__card__internships_2 = {
        name: "КРОК",
        link: "https://internship.croc.ru/",
        description: "Не просто старт карьеры в ИТ, а путешествие в будущее, в котором ты меняешься, растешь и бросаешь вызов своим возможностям."
    },

    for_students__card__internships_3 = {
        name: "Яндекс",
        link: "https://yandex.ru/yaintern/",
        description: "Всем стажёрам нужны отличные знания базовых алгоритмов и структур данных, а также умение писать код на одном из языков программирования. Остальные требования зависят от направления."
    }
]

let max_count_of_click;
let count_of_click = 0;

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
        max_count_of_click = 1;
    else if (window.innerWidth <= 880)
        max_count_of_click = 0;
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
    document.getElementById('for_students__university').style.backgroundColor = colors.white;
    document.getElementById('for_students__university').style.color = colors.black;
    document.getElementById('for_students__university').style.borderColor = colors.gray;
    document.getElementById('for_students__events').style.backgroundColor = colors.white;
    document.getElementById('for_students__events').style.color = colors.black;
    document.getElementById('for_students__events').style.borderColor = colors.gray;
    document.getElementById('for_students__internships').style.backgroundColor = colors.white;
    document.getElementById('for_students__internships').style.color = colors.black;
    document.getElementById('for_students__internships').style.borderColor = colors.gray;
    document.getElementById(element).style.backgroundColor = colors.blue;
    document.getElementById(element).style.color = colors.milk;
    document.getElementById(element).style.borderColor = colors.blue;
}

function fill__university__card() {
    document.querySelector('.for_students__content__main__content').innerHTML = "";
    paint_block("for_students__university")
    for (let i = 0; i < for_students__card__university.length; i++) {
        let card = document.createElement('div');
        card.className = "stack-cards__item js-stack-cards__item for_students__main__block for_student__university";
        card.id = "for_student__card__university_" + i;
        document.querySelector('.for_students__content__main__content').appendChild(card);

        let name = document.createElement('div');
        name.className = "name";
        name.id = "name_" + i;
        name.textContent = for_students__card__university[i].name;
        document.querySelector('#for_student__card__university_' + i).appendChild(name);

        let content_block = document.createElement('div');
        content_block.className = "content_block";
        content_block.id = "content_block_" + i;
        document.querySelector('#for_student__card__university_' + i).appendChild(content_block);

        let description = document.createElement('div');
        description.className = "description";
        description.id = "description_" + i;
        description.textContent = for_students__card__university[i].description;
        document.querySelector('#content_block_' + i).appendChild(description);

        let button_to_site = document.createElement('div');
        button_to_site.className = "button_to_site";
        button_to_site.id = "button_to_site" + i;
        button_to_site.textContent = "На сайт";
        button_to_site.onclick = function () {
            document.location.href = for_students__card__university[i].link;
        }
        document.querySelector('#content_block_' + i).appendChild(button_to_site);
    }
}
fill__university__card()

function fill__events__card() {
    document.querySelector('.for_students__content__main__content').innerHTML = "";
    paint_block("for_students__events");
    for (let i = 0; i < for_students__card__events.length; i++) {
        let card = document.createElement('div');
        card.className = "stack-cards__item js-stack-cards__item for_students__main__block for_students__events";
        card.id = "for_student__card__events_" + i;
        document.querySelector('.for_students__content__main__content').appendChild(card);

        let content_block_top = document.createElement('div');
        content_block_top.className = "content_block_top";
        content_block_top.id = "content_block_top_" + i;
        document.querySelector('#for_student__card__events_' + i).appendChild(content_block_top);

        let event_name = document.createElement('div');
        event_name.className = "event_name";
        event_name.id = "event_name_" + i;
        event_name.textContent = for_students__card__events[i].name;
        document.querySelector('#content_block_top_' + i).appendChild(event_name);

        let date = document.createElement('div');
        date.className = "date";
        date.id = "date" + i;
        date.textContent = for_students__card__events[i].date;
        document.querySelector('#content_block_top_' + i).appendChild(date);

        let content_block_bottom = document.createElement('div');
        content_block_bottom.className = "content_block_bottom";
        content_block_bottom.id = "content_block_bottom_" + i;
        document.querySelector('#for_student__card__events_' + i).appendChild(content_block_bottom);

        let description = document.createElement('div');
        description.className = "description";
        description.id = "description_" + i;
        description.textContent = for_students__card__events[i].description;
        document.querySelector('#content_block_bottom_' + i).appendChild(description);

        let button_to_site = document.createElement('div');
        button_to_site.className = "button_to_site";
        button_to_site.id = "button_to_site" + i;
        button_to_site.textContent = "На сайт";
        button_to_site.onclick = function () {
            document.location.href = for_students__card__events[i].link;
        }
        document.querySelector('#content_block_bottom_' + i).appendChild(button_to_site);
    }
}

function fill__internships__card() {
    document.querySelector('.for_students__content__main__content').innerHTML = "";
    paint_block("for_students__internships");
    for (let i = 0; i < for_students__card__internships.length; i++) {
        let card = document.createElement('div');
        card.className = "stack-cards__item js-stack-cards__item for_students__main__block for_student__university";
        card.id = "for_student__card__university_" + i;
        document.querySelector('.for_students__content__main__content').appendChild(card);

        let name = document.createElement('div');
        name.className = "name";
        name.id = "name_" + i;
        name.textContent = for_students__card__internships[i].name;
        document.querySelector('#for_student__card__university_' + i).appendChild(name);

        let content_block = document.createElement('div');
        content_block.className = "content_block";
        content_block.id = "content_block_" + i;
        document.querySelector('#for_student__card__university_' + i).appendChild(content_block);

        let description = document.createElement('div');
        description.className = "description";
        description.id = "description_" + i;
        description.textContent = for_students__card__internships[i].description;
        document.querySelector('#content_block_' + i).appendChild(description);

        let button_to_site = document.createElement('div');
        button_to_site.className = "button_to_site";
        button_to_site.id = "button_to_site" + i;
        button_to_site.textContent = "На сайт";
        button_to_site.onclick = function () {
            document.location.href = for_students__card__internships[i].link;
        }
        document.querySelector('#content_block_' + i).appendChild(button_to_site);
    }
}
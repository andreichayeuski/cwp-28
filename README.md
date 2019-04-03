#CWP/TASK/28 - Swagger
function task00() {

Создаем на Github репозиторий cwp-28, клонируем его, открываем в IDE

Устанавливаем sequelize

Устанавливаем yo и generator-swaggerize в качестве зависимостей разработки

Будем разрабатывать REST API для веб-приложения слежки за потреблением еды от ФБР

}

function task01() {

Модели данных выглядят следующим образом

Person:

"id": int / autoincrement

"name": string

"address": string

"isAlive": bool

Food:

"id": int / autoincrement

"name": string

"calories": number

Agent:

"id": int / autoincrement

"callsign": string

Ingestion:

"id": int / autoincrement

"when": datetime

"foodId": int / reference to Foods

"personId": int / reference to Persons

"reportedById": int / reference to Agents

}

function task02() {

С помощью редактора опишем спецификацию нашего REST API на языке yaml

1. Пять endpoint-ов для CRUD операций с людьми

2. Пять endpoint-ов для CRUD операций с едой

3. Пять endpoint-ов для CRUD операций с агентами

4. Пять endpoint-а для CRUD с приемами пищи (будут вложены в путь людей)

}

function task03() {

С помощью пакета swaggerize-express сгенерируем код из yaml-файла

Свяжем полученный код с реальной базой данных с помощью sequelize

}
# ColdHotJS
 
# Описание проекта

Игра "Холодно-горячо"(cold-hot). Игрок пытается угадать случайное трехзначное число (без повторяющихся цифр), сгенерированное компьютером. После каждой попытки компьютер предоставляет игроку подсказки трех типов:
"Холодно". Ни одна цифра не отгадана.
"Тепло" Одна цифра отгадана, но не отгадана ее позиция.
"Горячо". Одна цифра и ее позиция отгадана.

* * *

* "Холодно". Ни одна цифра не отгадана.
* "Тепло" Одна цифра отгадана, но не отгадана ее позиция. 
* "Горячо". Одна цифра и ее позиция отгадана.
На каждом ходе компьютер должен выдать три подсказки, отсортированные в алфавитном порядке. Если секретное число 456, а предположение игрока — 546, подсказки будут иметь вид «Горячо Тепло Тепло». Подсказка «Горячо» относится к 6, а «Тепло Тепло» — к 4 и 5.
* Необходимо писать трехзначное число без запятых между цифрами.

* Информация о датах и исходах всех партий, а также о всех ходах, сделанных во время игры, должна сохраняться в базе данных indexedDB.
* Для каждой игры в базе хранится следующая информация:
    * id игры
    * Имя игрока
    * Дата игры
    * Загаданное число
    * Статус игры
* В программе реализованы три режима, которым соответствуют кнопки в меню:
    * `Начать игру`. Новая игра.
    * `Список игр`. Вывод списка всех сохраненных игр.
    * `Показать игру`. Повтор игры с идентификатором id.

* * *

## Требования

Браузер с поддержкой JS

* * *

## Инструкция по установке и запуску игры

1. Перейти по ссылке https://ts-stas.github.io/402_DBTech_Tjurin_SA/
2. Приступить к игре
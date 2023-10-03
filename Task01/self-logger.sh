#!/bin/bash
sqlite3 logs.db "create table if not exists logs(User varchar(10), Date text default current_timestamp);"
sqlite3 logs.db "insert into logs values('$USER', datetime('now', 'localtime'));"

echo "Имя программы: $(basename "$0")"
printf "Количество запусков: "
sqlite3 -separator ' ' logs.db "select count(*) from logs;"
printf "Первый запуск: "
sqlite3 -separator ' ' logs.db "select Date from logs order by Date asc limit 1;"

echo
sqlite3 -separator ' | ' -header logs.db "select * from logs;"
echo
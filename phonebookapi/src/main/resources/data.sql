DROP TABLE IF EXISTS phone_book CASCADE;
CREATE TABLE phone_book
(
    phone_book_id   serial PRIMARY KEY NOT NULL,
    name character varying

);

DROP TABLE IF EXISTS entry CASCADE;
CREATE TABLE entry
(
    entry_id      serial PRIMARY KEY NOT NULL,
    name          character varying  NOT NULL,
    cell character varying  NOT NULL,
    id_phone_book smallint,
    FOREIGN KEY (id_phone_book) REFERENCES phone_book (phone_book_id)

);


insert into phone_book
values (1, 'MyPhoneBook');
insert into entry
values (1, 'Lucy D. Rivers', '+12025550104', 1);
insert into entry
values (2, 'Kelley B. Smith', '+12025550104', 1);
insert into entry
values (3, 'Anna H. Moore', '+9209170537', 1);
insert into entry
values (4, 'Mary P. Sanders', '+12025550104', 1);

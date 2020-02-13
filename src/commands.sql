DROP TABLE IF EXISTS visitors;

CREATE TABLE visitors (
    id SERIAL PRIMARY KEY,
    v_name character varying(50),
    age integer,
    dateofvisit varchar,
    timeofvisit varchar,
    assistant character varying(50),
    comments character varying(255)
);
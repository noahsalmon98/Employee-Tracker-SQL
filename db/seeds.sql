INSERT INTO department (department_name)
VALUES ('Engineering'),
       ('Finance'),
       ('Sales'),
       ('Human Resources');

INSERT INTO role (title, salary,department_id)
VALUES ('Software Engineer',70000,1),
       ('Senior Engineer',150000,1),
       ('Acountant',60000,2),
       ('Account Manager', 110000,2),
       ('Sales Associate',32000,3),
       ('Sales Director',200000,3),
       ('HR Manager',70000,4),
       ('HR Director',110000,4);

INSERT INTO employee (first_name,last_name,role_id,)
VALUES ('Ben','Stiller',3),
       ('Robert','Downey JR.',4),
       ('Jack','Black',2),
       ('Tom','Cruise',1),
       ('Jay','Baruchel',7),
       ('Brandon T.','Jackson',5),
       ('Nick','Nolte',8),
       ('Matthew','McConaughey',6),
       ('Danny','McBride',2),
       ('Owen','Wilson',7)
       ('Tobey','Maguire',3);
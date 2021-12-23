-- The following drop statements are likely not needed.
DROP TABLE IF EXISTS professor CASCADE;
DROP TABLE IF EXISTS enrollment CASCADE;
DROP TABLE IF EXISTS section CASCADE;
DROP TABLE IF EXISTS grade CASCADE;
DROP TABLE IF EXISTS assessment CASCADE;
DROP TABLE IF EXISTS studentoutcome CASCADE;
DROP TABLE IF EXISTS student CASCADE;
DROP TABLE IF EXISTS course CASCADE;


CREATE TABLE professor ( 
    prof_id INTEGER primary key,
    prof_email VARCHAR (255), 
    prof_fname VARCHAR(30),
    prof_lname VARCHAR(30)
); 
CREATE TABLE student ( 
    std_id INTEGER PRIMARY KEY,
    std_fname VARCHAR(30),
    std_lname VARCHAR(30),
    std_major VARCHAR(5),
    CONSTRAINT check_major CHECK (std_major in ('CS', 'EMS', 'GE'))
); 
CREATE TABLE assessment ( 
    assess_id INTEGER PRIMARY KEY,
    assess_name VARCHAR(200)
);
CREATE TABLE course ( 
    course_code VARCHAR(10) PRIMARY KEY,
    course_name VARCHAR(50)
); 
/*Here we will use an single attribute primary key in sections to avoid having a nested primary key in enrollment*/
CREATE TABLE section ( 
    section_id VARCHAR(20) PRIMARY KEY,
    course_code VARCHAR(10),
    prof_id VARCHAR(30), 
    CONSTRAINT related_to_course FOREIGN KEY(course_code) REFERENCES course(course_code) ON UPDATE CASCADE ON DELETE SET NULL, 
    CONSTRAINT related_to_prof FOREIGN KEY(prof_id) REFERENCES professor(prof_ID) ON UPDATE CASCADE ON DELETE SET NULL
);
CREATE TABLE grade ( 
    std_id INTEGER,
    assess_id INTEGER,
    grade DECIMAL(5, 2),
    CONSTRAINT related_to_student FOREIGN KEY(std_id) REFERENCES student(std_id) ON UPDATE CASCADE ON DELETE SET NULL,
    CONSTRAINT related_to_assessment FOREIGN KEY(assess_id) REFERENCES assessment(assess_id) ON UPDATE CASCADE ON DELETE SET NULL,
    PRIMARY KEY(std_id, assess_id)
);
CREATE TABLE studentoutcome ( 
    so_number INTEGER PRIMARY KEY,
    so_description VARCHAR(255),
    assess_id INTEGER,
    course_code VARCHAR(10),
    CONSTRAINT related_to_assess FOREIGN KEY(assess_id) REFERENCES assessment(assess_id) ON UPDATE CASCADE ON DELETE SET NULL,
    CONSTRAINT related_to_course FOREIGN KEY(course_code) REFERENCES course(course_code) ON UPDATE CASCADE ON DELETE SET NULL
);
CREATE TABLE enrollment ( 
    std_id INTEGER,
    section_id VARCHAR(20), 
    CONSTRAINT related_to_student FOREIGN KEY(std_id) REFERENCES student(std_id) ON UPDATE CASCADE ON DELETE SET NULL,
    CONSTRAINT related_to_section FOREIGN KEY(section_id) REFERENCES section(section_id) ON UPDATE CASCADE ON DELETE SET NULL,
    PRIMARY KEY(std_id, section_id)
); 
INSERT INTO TABLE professor VALUES (1, 'I.kissani@aui.ma', 'Ilham', 'Kissani'),
 (2, 'L.Bouanane@aui.ma', 'Lamiae', 'Bouanane'),
  (3, 'f.chaatit@aui.ma', 'Fouad', 'Chaatit'); 
INSERT INTO TABLE student VALUES (1, 'Hanane', 'Moussa', 'CS'), (2, 'Leila', 'Moussa', 'CS'), 
(3, 'Hamza', 'Alaoui', 'CS'), (4, 'Ahmed', 'Jaafari', 'CS'), (5, 'Mehdi', 'Boustani', 'CS'), 
(6, 'Ayoub', 'Mabkhout', 'CS'), (7, 'Soundous', 'Chamrah', 'CS'), (8, 'Younes', 'Boubbou', 'CS'), 
(9, 'Ouissal', 'Moumou', 'CS'), (10, 'Omar', 'Moussa', 'EMS'), (11, 'Salma', 'Ibenyahia', 'GE'),
 (12, 'Aniss', 'Lwissi', 'EMS'); 
INSERT INTO TABLE assessment VALUES (1, 'Quiz1'), (2, 'Quiz2'), (3, 'Assignment1'), 
(4, 'Test1'), (5, 'Test2'); 
INSERT INTO TABLE course VALUES ('CSC1401', 'Computer Programming'),
 ('CSC2306', 'Object Oriented Programming'), 
 ('MTH3331', 'Probability and Statistics for Engineers'), 
 ('EGR2303', 'Engineering Economics'), ('CSC3326', 'Database Systems'),
  ('MTH1304', 'Discrete Mathematics'); 
INSERT INTO TABLE section VALUES ('CSC140101','CSC1401', 2), ('CSC230601', 'CSC2306', 2), 
('MTH333101', 'MTH3331', 3), ('EGR230301', 'EGR2303', 1), ('CSC332601', 'CSC3326', 2); 
INSERT INTO TABLE grade VALUES (1, 1, 95), (2, 2, 100), (3,1,86), (1,4, 50), (2,4,85),
 (3,4,56), (4,4,89), (1,5,105),(2,5,94),(3,5,97),(4,5,63),(5,5,57),(5,4,91),(6,4,86),
 (7,4,45),(8,4,85),(9,4,92),(10,4,90),(11,4,84),(12,4,65); 
INSERT INTO TABLE studentoutcome VALUES (1, 'Understand Pointers', 4, 'CSC1401'), 
(2, 'Understand Data Modeling', 1, 'CSC3326'), (3, 'Understand Polymorphism', 2, 'CSC2306'),
 (4, 'Understand Bayes Theorem', 5, 'MTH3331'); 
INSERT INTO TABLE enrollment VALUES (1,'CSC140101'), (2,'CSC140101'), (3,'CSC140101'),
 (4,'CSC140101'), (5,'CSC140101'), (6,'CSC140101'), (7,'CSC140101'),(8,'CSC140101'),
 (9,'CSC140101'),(10,'CSC140101'),(11,'CSC140101'),(12,'CSC140101'); 



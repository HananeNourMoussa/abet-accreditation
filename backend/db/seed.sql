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
    prof_id VARCHAR(30) primary key,
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

INSERT INTO professor VALUES 
('90210');
INSERT INTO student VALUES 
(80035), (76287), (82500), (84100);
INSERT INTO assessment VALUES 
(1, 'Quiz'), (2, 'Test1'), (3, 'Test2');
INSERT INTO course VALUES 
('CSC2306', 'Advanced programming in Java'), ('CSC2302', 'Data Structures'), ('MTH3331', 'Probability and statistics');
INSERT INTO studentoutcome VALUES 
(1, 'Learn Java Programming', 1, 'CSC2306'), (2, 'Learn ERD', 2, 'CSC2306'), (3, 'Learn Normal Distribution', 3, 'MTH3331');
INSERT INTO section VALUES 
('CSC230601', 'CSC2306'),('CSC230202', 'CSC2302'),('MTH333103', 'MTH3331');
INSERT INTO enrollment VALUES 
(80035, 'CSC230601'), (76287, 'CSC230202');
INSERT INTO grade VALUES
(80035, 1, 85), (76287, 1, 70); 

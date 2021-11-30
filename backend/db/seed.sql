-- The following drop statements are likely not needed.
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS enrollment CASCADE;
DROP TABLE IF EXISTS sections CASCADE;
DROP TABLE IF EXISTS grades CASCADE;
DROP TABLE IF EXISTS assessments CASCADE;
DROP TABLE IF EXISTS studentoutcomes CASCADE;
DROP TABLE IF EXISTS students CASCADE;
DROP TABLE IF EXISTS courses CASCADE;
DROP TABLE IF EXISTS assessments;

CREATE TABLE users ( 
    user_email VARCHAR (255) PRIMARY KEY, 
    user_fname VARCHAR(30),
    user_lname VARCHAR(30)
); 
CREATE TABLE students ( 
    std_id INTEGER PRIMARY KEY,
    std_fname VARCHAR(30),
    std_lname VARCHAR(30),
    std_major VARCHAR(5),
    CONSTRAINT check_major CHECK (std_major in ('CS', 'EMS', 'GE'))
); 
CREATE TABLE assessments ( 
    assess_num INTEGER PRIMARY KEY,
    assess_name VARCHAR(200)
);
CREATE TABLE courses ( 
    course_code VARCHAR(10) PRIMARY KEY,
    course_name VARCHAR(50)
); 
/*Here we will use an single attribute primary key in sections to avoid having a nested primary key in enrollment*/
CREATE TABLE sections ( 
    sec_id VARCHAR(20) PRIMARY KEY,
    course_code VARCHAR(10),
    CONSTRAINT related FOREIGN KEY(course_code) REFERENCES courses(course_code) ON UPDATE CASCADE ON DELETE SET NULL
);
CREATE TABLE grades ( 
    std_id INTEGER,
    assess_num INTEGER,
    sec_id VARCHAR(20),
    CONSTRAINT related_to_student FOREIGN KEY(std_id) REFERENCES students(std_id) ON UPDATE CASCADE ON DELETE SET NULL,
    CONSTRAINT related_to_section FOREIGN KEY(sec_id) REFERENCES sections(sec_id) ON UPDATE CASCADE ON DELETE SET NULL,
    CONSTRAINT related_to_assessment FOREIGN KEY(assess_num) REFERENCES assessments(assess_num) ON UPDATE CASCADE ON DELETE SET NULL,
    PRIMARY KEY(std_id, sec_id)
);
CREATE TABLE studentoutcomes ( 
    so_number INTEGER PRIMARY KEY,
    so_description VARCHAR(255),
    assess_num INTEGER,
    CONSTRAINT related FOREIGN KEY(assess_num) REFERENCES assessments(assess_num) ON UPDATE CASCADE ON DELETE SET NULL 
);
CREATE TABLE enrollment ( 
    std_id INTEGER,
    sec_id VARCHAR(20),
    course_code varchar(10), 
    CONSTRAINT related_to_student FOREIGN KEY(std_id) REFERENCES students(std_id) ON UPDATE CASCADE ON DELETE SET NULL,
    CONSTRAINT related_to_section FOREIGN KEY(sec_id) REFERENCES sections(sec_id) ON UPDATE CASCADE ON DELETE SET NULL,
    PRIMARY KEY(std_id, sec_id)
); 

INSERT INTO users VALUES 
('i.kissani@aui.ma');
INSERT INTO students VALUES 
(80035), (76287), (82500), (84100);
INSERT INTO assessments VALUES 
(1, 'Quiz'), (2, 'Test1'), (3, 'Test2');
INSERT INTO studentoutcomes VALUES 
(1), (2), (3);
INSERT INTO courses VALUES 
('CSC2306'), ('CSC2302'), ('MTH3331');
INSERT INTO sections VALUES 
('CSC230601', 'CSC2306'),('CSC230202', 'CSC2302'),('MTH333103', 'MTH3331');
INSERT INTO enrollment VALUES 
(80035, 'CSC230601'), (76287, 'CSC230202');

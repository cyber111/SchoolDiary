-- # 1 ORGANIZATION
-- - OID
-- - ONAME
CREATE TABLE organization (OID INT PRIMARY KEY AUTO_INCREMENT, ONAME VARCHAR
(50));
INSERT INTO organization
  (ONAME)
VALUES
  ('SUNBEAM')
;
-- # 2 PARENT

CREATE TABLE parent (PID INT PRIMARY KEY  AUTO_INCREMENT, S_ID INT, PFIRSTNAME VARCHAR
(50), PLASTNAME VARCHAR
(50), PMOBILE BIGINT, PEMAIL VARCHAR
(50), PADDRESS VARCHAR
(50), PRELATION VARCHAR
(50));
INSERT INTO parent
  ( S_ID, PFIRSTNAME,PLASTNAME, PMOBILE, PEMAIL, PADDRESS, PRELATION)
VALUES
  (1, 'PRASHANT', 'JAIN', '8745157458', 'prashant@gmail.com', 'BULDHANA', 'FATHER');


INSERT INTO parent
  ( S_ID, PFIRSTNAME,PLASTNAME, PMOBILE, PEMAIL, PADDRESS, PRELATION)
VALUES
  (10, 'SANJAY', 'SANCHETI', '8745157458', 'sanjay@gmail.com', 'AURANGABAD', 'FATHER');


-- # 3 FACULTY
CREATE TABLE faculty (FID INT PRIMARY KEY AUTO_INCREMENT ,FFIRSTNAME VARCHAR
(50), FLASTNAME VARCHAR
(50),FMOBILE BIGINT, FADDRESS VARCHAR
(50), FGENDER VARCHAR
(50), FSUBJECTSPECILITY VARCHAR
(50));
INSERT INTO faculty
  (FFIRSTNAME, FLASTNAME, FMOBILE, FADDRESS, FGENDER, FSUBJECTSPECILITY)
VALUES
  ('ROHAN', 'PARMANE', '8888888888', 'PUNE', 'MALE', 'LAB-FACULTY');
INSERT INTO faculty
  (FFIRSTNAME, FLASTNAME, FMOBILE, FADDRESS, FGENDER, FSUBJECTSPECILITY)
VALUES
  ('ROHAN', 'PARMANE', '8888888888', 'PUNE', 'MALE', 'LAB-FACULTY');
INSERT INTO faculty
  (FFIRSTNAME, FLASTNAME, FMOBILE, FADDRESS, FGENDER, FSUBJECTSPECILITY)
VALUES
  ('ROHAN', 'PARMANE', '8888888888', 'PUNE', 'MALE', 'LAB-FACULTY');
INSERT INTO faculty
  (FFIRSTNAME, FLASTNAME, FMOBILE, FADDRESS, FGENDER, FSUBJECTSPECILITY)
VALUES
  ('ROHAN', 'PARMANE', '8888888888', 'PUNE', 'MALE', 'LAB-FACULTY');
INSERT INTO faculty
  (FFIRSTNAME, FLASTNAME, FMOBILE, FADDRESS, FGENDER, FSUBJECTSPECILITY)
VALUES
  ('ROHAN', 'PARMANE', '8888888888', 'PUNE', 'MALE', 'LAB-FACULTY');

-- # 4 DIVISION
-- - DNAME
-- - DID
CREATE TABLE division (DID INT PRIMARY KEY AUTO_INCREMENT, DNAME VARCHAR
(50));
INSERT INTO division
  (DNAME)
VALUES
  ('DMC');
INSERT INTO division
  (DNAME)
VALUES
  ('DAC');
INSERT INTO division
  (DNAME)
VALUES
  ('DBDA');

--STUDENT
CREATE TABLE student (S_ID INT primary key AUTO_INCREMENT, SFNAME VARCHAR
(50), SLNAME VARCHAR
(50), SROLLNO INT, PID INT
(50), SGENDER VARCHAR
(50), SBOARD VARCHAR
(50), SADDRESS VARCHAR
(50), SBIRTHDATE DATE, SEMAIL VARCHAR
(50), SCLASS VARCHAR
(50), SDIVISION VARCHAR
(50))  ;
INSERT INTO student
  (SFNAME ,SLNAME ,SROLLNO ,PID ,SGENDER ,SBOARD ,SADDRESS ,SBIRTHDATE ,SEMAIL ,SCLASS ,SDIVISION)
VALUES
  ('PRATIK', 'JAIN', 44, 1, 'MALE', 'MH', 'PUNE', '1997-09-15', 'pjpratikjin7@gmail,com', 'DMC', 'CDAC');
INSERT INTO student
  (SFNAME ,SLNAME ,SROLLNO ,PID ,SGENDER ,SBOARD ,SADDRESS ,SBIRTHDATE ,SEMAIL ,SCLASS ,SDIVISION)
VALUES
  ('PRASAD', 'DESHMUKH', 45, 1, 'MALE', 'MH', 'PUNE', '1997-07-11', 'pjprasaddeshmukh17@gmail,com', 'DMC', 'CDAC');
INSERT INTO student
  (SFNAME ,SLNAME ,SROLLNO ,PID ,SGENDER ,SBOARD ,SADDRESS ,SBIRTHDATE ,SEMAIL ,SCLASS ,SDIVISION)
VALUES
  ('PRATIK', 'LAVHANE', 46, 1, 'MALE', 'MH', 'PUNE', '1997-01-15', 'pratikl17@gmail,com', 'DMC', 'CDAC');
INSERT INTO student
  (SFNAME ,SLNAME ,SROLLNO ,PID ,SGENDER ,SBOARD ,SADDRESS ,SBIRTHDATE ,SEMAIL ,SCLASS ,SDIVISION)
VALUES
  ('NEETA', 'VEDPATHAK', 47, 1, 'FEMALE', 'MH', 'PUNE', '1997-05-06', 'neeta@gmail,com', 'DMC', 'CDAC');
INSERT INTO student
  (SFNAME ,SLNAME ,SROLLNO ,PID ,SGENDER ,SBOARD ,SADDRESS ,SBIRTHDATE ,SEMAIL ,SCLASS ,SDIVISION)
VALUES
  ('RUDRA', 'JOSHI', 48, 1, 'MALE', 'MH', 'PUNE', '1997-01-04', 'rudra@gmail,com', 'DMC', 'CDAC');
INSERT INTO student
  (SFNAME ,SLNAME ,SROLLNO ,PID ,SGENDER ,SBOARD ,SADDRESS ,SBIRTHDATE ,SEMAIL ,SCLASS ,SDIVISION)
VALUES
  ('VAISHNAVI', 'JOSHI', 49, 1, 'FEMALE', 'MH', 'PUNE', '1997-01-11', 'vaishnavi@gmail,com', 'DMC', 'CDAC');
INSERT INTO student
  (SFNAME ,SLNAME ,SROLLNO ,PID ,SGENDER ,SBOARD ,SADDRESS ,SBIRTHDATE ,SEMAIL ,SCLASS ,SDIVISION)
VALUES
  ('CHAITALI', 'POTODE', 50, 1, 'FEMALE', 'MH', 'PUNE', '1997-11-02', 'chaitali@gmail,com', 'DMC', 'CDAC');
INSERT INTO student
  (SFNAME ,SLNAME ,SROLLNO ,PID ,SGENDER ,SBOARD ,SADDRESS ,SBIRTHDATE ,SEMAIL ,SCLASS ,SDIVISION)
VALUES
  ('MUKUL', 'RAMTEKE', 51, 1, 'MALE', 'MH', 'PUNE', '1997-12-31', 'mukul@gmail,com', 'DMC', 'CDAC');

-- # 6 CLASS
-- - CID
-- - CGRADE
CREATE TABLE classes (CID INT PRIMARY KEY AUTO_INCREMENT, CGRADE VARCHAR
(50));

-- # 7 USER
CREATE TABLE user
(
  EMAIL VARCHAR(50),
  USERNAME VARCHAR(50),
  PASSWORD VARCHAR(50),
  USERTYPE VARCHAR(50)
);
desc classes;
desc division;
desc faculty;
desc parent;
desc student;
desc user; 
desc organization;




-- mysql> SELECT * FROM classes;
-- Empty set (0.01 sec)

-- mysql> SELECT * FROM division;
-- +-----+-------+
-- | DID | DNAME |
-- +-----+-------+
-- |   1 | DMC   |
-- |   2 | DAC   |
-- |   3 | DBDA  |
-- +-----+-------+
-- 3 rows in set (0.00 sec)

-- mysql> SELECT * FROM faculty;
-- +-----+------------+-----------+------------+----------+---------+-------------------+
-- | FID | FFIRSTNAME | FLASTNAME | FMOBILE    | FADDRESS | FGENDER | FSUBJECTSPECILITY |
-- +-----+------------+-----------+------------+----------+---------+-------------------+
-- |   1 | ROHAN      | PARMANE   | 8888888888 | PUNE     | MALE    | LAB-FACULTY       |
-- +-----+------------+-----------+------------+----------+---------+-------------------+
-- 1 row in set (0.00 sec)

-- mysql> SELECT * FROM parent;
-- +-----+------+------------+-----------+------------+--------------------+----------+-----------+
-- | PID | S_ID | PFIRSTNAME | PLASTNAME | PMOBILE    | PEMAIL             | PADDRESS | PRELATION |
-- +-----+------+------------+-----------+------------+--------------------+----------+-----------+
-- |   1 |    1 | PRASHANT   | JAIN      | 8745157458 | prashant@gmail.com | BULDHANA | FATHER    |
-- +-----+------+------------+-----------+------------+--------------------+----------+-----------+
-- 1 row in set (0.00 sec)

-- mysql> SELECT * FROM student;
-- +------+-----------+-----------+---------+------+---------+--------+----------+------------+------------------------------+--------+-----------+
-- | S_ID | SFNAME    | SLNAME    | SROLLNO | PID  | SGENDER | SBOARD | SADDRESS | SBIRTHDATE | SEMAIL                       | SCLASS | SDIVISION |
-- +------+-----------+-----------+---------+------+---------+--------+----------+------------+------------------------------+--------+-----------+
-- |    1 | PRATIK    | JAIN      |      44 |    1 | MALE    | MH     | PUNE     | 1997-09-15 | pjpratikjin7@gmail,com       | DMC    | CDAC      |
-- |    2 | PRATIK    | JAIN      |      44 |    1 | MALE    | MH     | PUNE     | 1997-09-15 | pjpratikjin7@gmail,com       | DMC    | CDAC      |
-- |    3 | PRASAD    | DESHMUKH  |      45 |    1 | MALE    | MH     | PUNE     | 1997-07-11 | pjprasaddeshmukh17@gmail,com | DMC    | CDAC      |
-- |    4 | PRATIK    | LAVHANE   |      46 |    1 | MALE    | MH     | PUNE     | 1997-01-15 | pratikl17@gmail,com          | DMC    | CDAC      |
-- |    5 | NEETA     | VEDPATHAK |      47 |    1 | FEMALE  | MH     | PUNE     | 1997-05-06 | neeta@gmail,com              | DMC    | CDAC      |
-- |    6 | RUDRA     | JOSHI     |      48 |    1 | MALE    | MH     | PUNE     | 1997-01-04 | rudra@gmail,com              | DMC    | CDAC      |
-- |    7 | VAISHNAVI | JOSHI     |      49 |    1 | FEMALE  | MH     | PUNE     | 1997-01-11 | vaishnavi@gmail,com          | DMC    | CDAC      |
-- |    8 | CHAITALI  | POTODE    |      50 |    1 | FEMALE  | MH     | PUNE     | 1997-11-02 | chaitali@gmail,com           | DMC    | CDAC      |
-- |    9 | MUKUL     | RAMTEKE   |      51 |    1 | MALE    | MH     | PUNE     | 1997-12-31 | mukul@gmail,com              | DMC    | CDAC      |
-- +------+-----------+-----------+---------+------+---------+--------+----------+------------+------------------------------+--------+-----------+
-- 9 rows in set (0.00 sec)

-- mysql> SELECT * FROM user; 
-- Empty set (0.00 sec)

-- mysql> SELECT * FROM organization;
-- +-----+---------+
-- | OID | ONAME   |
-- +-----+---------+
-- |   1 | SUNBEAM |
-- +-----+---------+
-- 1 row in set (0.00 sec)



ALTER TABLE student 
ADD DID int;

UPDATE student SET DID = 1 WHERE S_ID = 1;
UPDATE student SET DID = 1 WHERE S_ID = 2;
UPDATE student SET DID = 1 WHERE S_ID = 3;
UPDATE student SET DID = 1 WHERE S_ID = 4;
UPDATE student SET DID = 1 WHERE S_ID = 5;
UPDATE student SET DID = 1 WHERE S_ID = 6;
UPDATE student SET DID = 1 WHERE S_ID = 7;
UPDATE student SET DID = 1 WHERE S_ID = 8;
UPDATE student SET DID = 1 WHERE S_ID = 9;


ALTER TABLE student 
ADD CID int;

UPDATE student SET CID = 1 WHERE S_ID = 1;
UPDATE student SET CID = 1 WHERE S_ID = 2;
UPDATE student SET CID = 1 WHERE S_ID = 3;
UPDATE student SET CID = 1 WHERE S_ID = 4;
UPDATE student SET CID = 1 WHERE S_ID = 5;
UPDATE student SET CID = 1 WHERE S_ID = 6;
UPDATE student SET CID = 1 WHERE S_ID = 7;
UPDATE student SET CID = 1 WHERE S_ID = 8;
UPDATE student SET CID = 1 WHERE S_ID = 9;


ALTER TABLE student ADD CONSTRAINT FK_PID FOREIGN KEY (PID) REFERENCES parent(PID);
ALTER TABLE student ADD CONSTRAINT FK_CID FOREIGN KEY (CID) REFERENCES CLASS(CID);
ALTER TABLE student ADD CONSTRAINT FK_DID FOREIGN KEY (DID) REFERENCES CLASS(DID);

ALTER TABLE parent ADD CONSTRAINT FK_S_ID FOREIGN KEY (S_ID) REFERENCES student(S_ID);



alter table user add UID INT PRIMARY KEY
AUTO_INCREMENT;

ALTER TABLE student ADD CONSTRAINT FK_UID FOREIGN KEY (U_ID) REFERENCES user(U_ID);

ALTER TABLE student ADD UID INT FOREIGN KEY REFERENCES user(UID);

ALTER TABLE faculty ADD CID INT;

ALTER TABLE faculty ADD CONSTRAINT FK_F_CID FOREIGN KEY (CID) REFERENCES classes(CID);

ALTER TABLE faculty
DROP FOREIGN KEY FK_CID;


mysqldump -u dmc -pdmc school_diary_db > BACKUP_PROJECT.sql.sql








INSERT INTO student
  (
  SFNAME ,SLNAME ,SROLLNO
  ,PID , SGENDER ,SBOARD ,
  SBIRTHDATE ,SEMAIL ,SCLASS ,
  SDIVISION, DID, CID
  )
VALUES
  (
    '${SFNAME}', '${SLNAME}', '${SROLLNO}',
    '${PID}', '${SGENDER}', '${SBOARD}',
    '${SADDRESS}', '${SEMAIL}', '${SCLASS}',
    '${SDIVISION}', '${DID}', '${CID}'
  );


  ALTER TABLE student
DROP FOREIGN KEY FK_PID;


INSERT INTO user (EMAIL, USERNAME, PASSWORD) VALUES ('test1@test.com','test1','test1');


CREATE TABLE admin (USERNAME VARCHAR(50), PASSWORD VARCHAR(500));
INSERT INTO admin VALUES('admin', 'admin');

alter table user add is_block boolean;
UPDATE user SET is_block = 0 where is_block = NULL;



UPDATE user SET is_block = 0 where is_block = NULL;


UPDATE user SET is_block = 0 where UID=1;
UPDATE user SET is_block = 0 where UID=2;
UPDATE user SET is_block = 0 where UID=4;
UPDATE user SET is_block = 0 where UID=5;
UPDATE user SET is_block = 0 where UID=16;
UPDATE user SET is_block = 0 where UID=17;
UPDATE user SET is_block = 0 where UID=18;
UPDATE user SET is_block = 0 where UID=19;



ng serve --port 4401   


ALTER TABLE user
ADD role VARCHAR(50);


UPDATE user SET role = "student" where UID=1;
UPDATE user SET role = "student" where UID=2;
UPDATE user SET role = "student" where UID=4;
UPDATE user SET role = "student" where UID=5;
UPDATE user SET role = "student" where UID=16;
UPDATE user SET role = "student" where UID=17;
UPDATE user SET role = "student" where UID=18;
UPDATE user SET role = "student" where UID=19;
UPDATE user SET role = "student" where UID=20;
UPDATE user SET role = "student" where UID=22;
UPDATE user SET role = "student" where UID=21;

ALTER TABLE student
DROP FOREIGN KEY FK_UID;
ALTER TABLE student
    ADD FK_UID FOREIGN KEY (UID)
    REFERENCES user (UID)
    ON UPDATE CASCADE;

    ALTER TABLE 
    student ADD 
    CONSTRAINT 
    FK_UID FOREIGN KEY (UID) 
    REFERENCES user (UID)
    ON UPDATE CASCADE;



    INSERT INTO student
  (SFNAME ,SLNAME ,SROLLNO ,PID ,SGENDER ,SBOARD ,SADDRESS ,SBIRTHDATE ,SEMAIL ,SCLASS ,SDIVISION, UID)
VALUES
  ('PRATIK', 'JAIN', 46, 1, 'MALE', 'MH', 'PUNE', '1997-01-15', 'pratikl17@gmail,com', 'DMC', 'CDAC','23');


  ALTER TABLE 
  student ADD USERNAME VARCHAR(500);
  ALTER TABLE 
  student ADD PASSWORD VARCHAR(500);

  TRUNCATE TABLE student;






  INSERT INTO student
  (SFNAME ,SLNAME ,SROLLNO ,PID ,SGENDER ,SBOARD ,SADDRESS ,SBIRTHDATE ,SEMAIL ,SCLASS ,SDIVISION, UID, USERNAME, PASSWORD)
VALUES
  ('PRATIK', 'JAIN', 44, 1, 'MALE', 'MH', 'PUNE', '1997-09-15', 'pjpratikjin7@gmail,com', 'DMC', 'CDAC', '1','pratik','123');

  
INSERT INTO student
  (SFNAME ,SLNAME ,SROLLNO ,PID ,SGENDER ,SBOARD ,SADDRESS ,SBIRTHDATE ,SEMAIL ,SCLASS ,SDIVISION, UID, USERNAME, PASSWORD)
VALUES
  ('PRASAD', 'DESHMUKH', 45, 1, 'MALE', 'MH', 'PUNE', '1997-07-11', 'pjprasaddeshmukh17@gmail,com', 'DMC', 'CDAC', '2','prasad','123');

  
INSERT INTO student
  (SFNAME ,SLNAME ,SROLLNO ,PID ,SGENDER ,SBOARD ,SADDRESS ,SBIRTHDATE ,SEMAIL ,SCLASS ,SDIVISION, UID, USERNAME, PASSWORD)
VALUES
  ('PRASHANT', 'JAIN', 46, 1, 'MALE', 'MH', 'PUNE', '1997-01-15', 'pratikl17@gmail,com', 'DMC', 'CDAC', '3','prashant','123');


INSERT INTO student
  (SFNAME ,SLNAME ,SROLLNO ,PID ,SGENDER ,SBOARD ,SADDRESS ,SBIRTHDATE ,SEMAIL ,SCLASS ,SDIVISION, UID, USERNAME, PASSWORD)
VALUES
  ('PRATIK', 'LAVHANE', 47, 1, 'FEMALE', 'MH', 'PUNE', '1997-05-06', 'neeta@gmail,com', 'DMC', 'CDAC', '4','pratik1','123');


INSERT INTO student
  (SFNAME ,SLNAME ,SROLLNO ,PID ,SGENDER ,SBOARD ,SADDRESS ,SBIRTHDATE ,SEMAIL ,SCLASS ,SDIVISION, UID, USERNAME, PASSWORD)
VALUES
  ('PRANAV', 'JOSHI', 48, 1, 'MALE', 'MH', 'PUNE', '1997-01-04', 'rudra@gmail,com', 'DMC', 'CDAC', '5','pranav','123');


INSERT INTO student
  (SFNAME ,SLNAME ,SROLLNO ,PID ,SGENDER ,SBOARD ,SADDRESS ,SBIRTHDATE ,SEMAIL ,SCLASS ,SDIVISION, UID, USERNAME, PASSWORD)
VALUES
  ('SHRIPAD', 'JOSHI', 49, 1, 'FEMALE', 'MH', 'PUNE', '1997-01-11', 'vaishnavi@gmail,com', 'DMC', 'CDAC', '6','shripad','123');


INSERT INTO student
  (SFNAME ,SLNAME ,SROLLNO ,PID ,SGENDER ,SBOARD ,SADDRESS ,SBIRTHDATE ,SEMAIL ,SCLASS ,SDIVISION, UID, USERNAME, PASSWORD)
VALUES
  ('AKASH', 'PATIL', 50, 1, 'FEMALE', 'MH', 'PUNE', '1997-11-02', 'chaitali@gmail,com', 'DMC', 'CDAC', '7','akash','123');


INSERT INTO student
  (SFNAME ,SLNAME ,SROLLNO ,PID ,SGENDER ,SBOARD ,SADDRESS ,SBIRTHDATE ,SEMAIL ,SCLASS ,SDIVISION, UID, USERNAME, PASSWORD)
VALUES
  ('CHAITALI', 'POTODE', 51, 1, 'MALE', 'MH', 'PUNE', '1997-12-31', 'mukul@gmail,com', 'DMC', 'CDAC', '8','chaitali','123');




INSERT INTO user (EMAIL, USERNAME, PASSWORD, is_block, role) VALUES ('pratik@gmail.com','pratik','123', '0', 'student');
INSERT INTO user (EMAIL, USERNAME, PASSWORD, is_block, role) VALUES ('prasad@gmail.com','prasad','123', '0', 'student');
INSERT INTO user (EMAIL, USERNAME, PASSWORD, is_block, role) VALUES ('prashant@gmail.com','prashant','123', '0', 'student');
INSERT INTO user (EMAIL, USERNAME, PASSWORD, is_block, role) VALUES ('pratik.1@gmail.com','pratik1','123', '0', 'student');
INSERT INTO user (EMAIL, USERNAME, PASSWORD, is_block, role) VALUES ('pranav@gmail.com','pranav','123', '0', 'student');
INSERT INTO user (EMAIL, USERNAME, PASSWORD, is_block, role) VALUES ('shripad@gmail.com','shripad','123', '0', 'student');
INSERT INTO user (EMAIL, USERNAME, PASSWORD, is_block, role) VALUES ('akash@gmail.com','akash','123', '0', 'student');
INSERT INTO user (EMAIL, USERNAME, PASSWORD, is_block, role) VALUES ('chaitali@gmail.com','chaitali','123', '0', 'student');


 TRUNCATE TABLE user;
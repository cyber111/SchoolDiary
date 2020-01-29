-- MySQL dump 10.13  Distrib 8.0.17, for Linux (x86_64)
--
-- Host: localhost    Database: school_diary_db
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `USERNAME` varchar(50) DEFAULT NULL,
  `PASSWORD` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES ('admin','admin');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classes` (
  `CID` int(11) NOT NULL AUTO_INCREMENT,
  `CGRADE` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`CID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` VALUES (1,'10TH'),(2,'9TH'),(3,'8TH');
/*!40000 ALTER TABLE `classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `division`
--

DROP TABLE IF EXISTS `division`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `division` (
  `DID` int(11) NOT NULL AUTO_INCREMENT,
  `DNAME` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`DID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `division`
--

LOCK TABLES `division` WRITE;
/*!40000 ALTER TABLE `division` DISABLE KEYS */;
INSERT INTO `division` VALUES (1,'A'),(2,'A'),(3,'A');
/*!40000 ALTER TABLE `division` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faculty`
--

DROP TABLE IF EXISTS `faculty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faculty` (
  `FID` int(11) NOT NULL AUTO_INCREMENT,
  `FFIRSTNAME` varchar(50) DEFAULT NULL,
  `FLASTNAME` varchar(50) DEFAULT NULL,
  `FMOBILE` bigint(20) DEFAULT NULL,
  `FADDRESS` varchar(50) DEFAULT NULL,
  `FGENDER` varchar(50) DEFAULT NULL,
  `FSUBJECTSPECILITY` varchar(50) DEFAULT NULL,
  `CID` int(11) DEFAULT NULL,
  `UID` int(11) DEFAULT NULL,
  PRIMARY KEY (`FID`),
  KEY `FK_F_CID` (`CID`),
  KEY `FK_UID_FACULTY` (`UID`),
  CONSTRAINT `FK_F_CID` FOREIGN KEY (`CID`) REFERENCES `classes` (`CID`),
  CONSTRAINT `FK_UID_FACULTY` FOREIGN KEY (`UID`) REFERENCES `user` (`UID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faculty`
--

LOCK TABLES `faculty` WRITE;
/*!40000 ALTER TABLE `faculty` DISABLE KEYS */;
INSERT INTO `faculty` VALUES (1,'ROHAN','PARMANE',8888888888,'PUNE','MALE','LAB-FACULTY',1,11),(2,'Manjusha','Nikam',8888888888,'PUNE','FEMALE','LAB-FACULTY',2,10),(8,'Rahul','Patil',976398395,'Pune','MALE','C++',3,9),(11,'Sandeep','Kulange',988451234,'Katraj','undefined','C++, Java',NULL,NULL);
/*!40000 ALTER TABLE `faculty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notice`
--

DROP TABLE IF EXISTS `notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `notice_text` varchar(10000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notice`
--

LOCK TABLES `notice` WRITE;
/*!40000 ALTER TABLE `notice` DISABLE KEYS */;
INSERT INTO `notice` VALUES (1,'Holiday ugu where id = 3'),(2,'Holiday ugu where id = 3'),(3,'Holiday ugu where id = 3'),(4,'Holiday');
/*!40000 ALTER TABLE `notice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `organization`
--

DROP TABLE IF EXISTS `organization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `organization` (
  `OID` int(11) NOT NULL AUTO_INCREMENT,
  `ONAME` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`OID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organization`
--

LOCK TABLES `organization` WRITE;
/*!40000 ALTER TABLE `organization` DISABLE KEYS */;
INSERT INTO `organization` VALUES (1,'SUNBEAM');
/*!40000 ALTER TABLE `organization` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parent`
--

DROP TABLE IF EXISTS `parent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parent` (
  `PID` int(11) NOT NULL AUTO_INCREMENT,
  `S_ID` int(11) DEFAULT NULL,
  `PFIRSTNAME` varchar(50) DEFAULT NULL,
  `PLASTNAME` varchar(50) DEFAULT NULL,
  `PMOBILE` bigint(20) DEFAULT NULL,
  `PEMAIL` varchar(50) DEFAULT NULL,
  `PADDRESS` varchar(50) DEFAULT NULL,
  `PRELATION` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`PID`),
  KEY `FK_S_ID` (`S_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parent`
--

LOCK TABLES `parent` WRITE;
/*!40000 ALTER TABLE `parent` DISABLE KEYS */;
INSERT INTO `parent` VALUES (1,1,'PRASHANT','JAIN',8745157458,'prashant@gmail.com','BULDHANA','FATHER'),(4,10,'SANJAY','SANCHETI',8745157458,'sanjay@gmail.com','AURANGABAD','FATHER'),(10,5,'Bob','Patil',8830734900,'bp@gmail.com','Pune','FATHER'),(11,4,'PRABHAKAR','LAVHANE',8830497800,'pl@gmail.com','Pune','FATHER'),(12,5,'PRAVIN','JOSHI',9763984562,'pravinjoshi@gmail.com','Buldana','Father'),(13,6,'SHAM','JOSHI',8877451245,'sham@gmail.com','pune','FATHER'),(14,7,'RAHUL','PATIL',4567891234,'RAHUKPATIL@GMAIL.COM','PUNE','FATHER'),(15,8,'DILIP','POTODE',8754623145,'dilippotode@gmail.com','Amaravati','FATHER'),(17,21,'RAJESH','JAIN',976398875,'rajjain@gmail.com','Pune','Father'),(18,21,'ABHAY','PATIL',9789456897,'abhay@gmail.com','PUNE','FATHER');
/*!40000 ALTER TABLE `parent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `test_id` int(11) DEFAULT NULL,
  `question` varchar(500) DEFAULT NULL,
  `answer` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `test_id` (`test_id`),
  CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,1,'5 + 5 = ?','10'),(2,1,'6 + 6 = ?','12'),(3,1,'7++=?','14'),(4,1,'8+8=?','16'),(5,2,'5+5 = ?','10'),(6,3,'Explain the human Digestive system','The human digestive system consists of the gastrointestinal tract plus the accessory organs of digestion (the tongue, salivary glands, pancreas, liver, and gallbladder). Digestion involves the breakdown of food into smaller and smaller components, until they can be absorbed and assimilated into the body.'),(7,3,'Where Digestive Starts ?','Mouth'),(8,4,'fdxgchvjbknlm ?','Prat');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `remark`
--

DROP TABLE IF EXISTS `remark`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `remark` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `remark` varchar(500) DEFAULT NULL,
  `sid` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sid` (`sid`),
  CONSTRAINT `remark_ibfk_1` FOREIGN KEY (`sid`) REFERENCES `student` (`S_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `remark`
--

LOCK TABLES `remark` WRITE;
/*!40000 ALTER TABLE `remark` DISABLE KEYS */;
INSERT INTO `remark` VALUES (1,'asasadasd',5,'2020-01-10'),(2,'Good',5,'2020-01-02'),(3,'Bad',8,'2020-01-17'),(4,'Nice',8,'2020-01-25'),(5,'Good',4,'2020-01-16'),(6,'Need to improve Math',8,'2020-01-08'),(7,'Bad',5,'2020-01-04'),(8,'Bad',4,'2020-01-04'),(9,'Verry Good',4,'2020-01-09'),(10,'Good',7,'2020-01-02'),(11,' Bad',6,'2020-01-10'),(12,'Baddddddddddddd',4,'2020-01-15');
/*!40000 ALTER TABLE `remark` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedules`
--

DROP TABLE IF EXISTS `schedules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schedules` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `details` varchar(500) DEFAULT NULL,
  `day` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedules`
--

LOCK TABLES `schedules` WRITE;
/*!40000 ALTER TABLE `schedules` DISABLE KEYS */;
INSERT INTO `schedules` VALUES (1,'2020-01-16','Hellol','Wednesday'),(2,'2020-01-22','123','Thursday'),(3,'2020-01-15','aa','Tuesday'),(4,'2020-01-21','Holiday','Friday'),(5,'2020-01-16','2 hrs ','Tuesday'),(6,'2020-01-25','Holiday','Saturday');
/*!40000 ALTER TABLE `schedules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `S_ID` int(11) NOT NULL AUTO_INCREMENT,
  `SFNAME` varchar(50) DEFAULT NULL,
  `SLNAME` varchar(50) DEFAULT NULL,
  `SROLLNO` int(11) DEFAULT NULL,
  `PID` int(50) DEFAULT NULL,
  `SGENDER` varchar(50) DEFAULT NULL,
  `SBOARD` varchar(50) DEFAULT NULL,
  `SADDRESS` varchar(50) DEFAULT NULL,
  `SBIRTHDATE` date DEFAULT NULL,
  `SEMAIL` varchar(50) DEFAULT NULL,
  `SCLASS` varchar(50) DEFAULT NULL,
  `SDIVISION` varchar(50) DEFAULT NULL,
  `DID` int(11) DEFAULT NULL,
  `CID` int(11) DEFAULT NULL,
  `UID` int(11) DEFAULT NULL,
  `USERNAME` varchar(500) DEFAULT NULL,
  `PASSWORD` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`S_ID`),
  KEY `FK_DID` (`DID`),
  KEY `FK_CID` (`CID`),
  KEY `FK_PID` (`PID`),
  KEY `FK_UID` (`UID`),
  CONSTRAINT `FK_CID` FOREIGN KEY (`CID`) REFERENCES `classes` (`CID`),
  CONSTRAINT `FK_DID` FOREIGN KEY (`DID`) REFERENCES `division` (`DID`),
  CONSTRAINT `FK_UID` FOREIGN KEY (`UID`) REFERENCES `user` (`UID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (4,'PRATIK','LAVHANE',47,4,'Male','MH','PUNE','2019-11-28','PRATIK@gmail,com','8TH','A',1,3,4,'pratik1','123'),(5,'PRANAV','JAIN',48,5,'Male','MH','PUNE','2019-12-08','pranav@gmail,com','10TH','A',1,1,5,'pranav','123'),(6,'SHRIPAD','JOSHI',49,13,'Male','MH','PUNE','2019-12-11','SHRIPAD@gmail,com','10TH','A',1,1,6,'shripad','123'),(7,'AKASH','PATIL',50,7,'Male','MH','PUNE','2019-12-06','akashpatil@gmail,com','10TH','A',1,1,7,'akash','123'),(8,'CHAITALI','POTODE',51,15,'Female','MH','PUNE','2019-12-22','CHAI@gmail,com','8TH','A',1,3,8,'chaitali','123'),(23,'Vaishnavi','Patil',11,18,'Female','MH','Pune','2020-01-15','vp@gmail.com','10TH','A',1,1,26,'vaish11','123');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tests`
--

DROP TABLE IF EXISTS `tests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `test_name` varchar(500) DEFAULT NULL,
  `class_name` varchar(52) DEFAULT NULL,
  `class_id` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `subject` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `class_id` (`class_id`),
  CONSTRAINT `tests_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `classes` (`CID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tests`
--

LOCK TABLES `tests` WRITE;
/*!40000 ALTER TABLE `tests` DISABLE KEYS */;
INSERT INTO `tests` VALUES (1,'Unit Test','9TH',2,'2020-01-15','Math'),(2,'Unit Test 2','9TH',2,'2020-01-12','Math'),(3,'Unit test 2','10TH',1,'2020-01-26','Science'),(4,'Unit 2','9TH',2,'2020-01-02','Hostory');
/*!40000 ALTER TABLE `tests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `EMAIL` varchar(50) DEFAULT NULL,
  `USERNAME` varchar(50) DEFAULT NULL,
  `PASSWORD` varchar(50) DEFAULT NULL,
  `UID` int(11) NOT NULL AUTO_INCREMENT,
  `is_block` tinyint(1) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`UID`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('prashant@gmail.com','prashant','123',3,0,'student'),('pratik.1@gmail.com','pratik1','123',4,0,'student'),('pranav@gmail.com','pranav','123',5,0,'student'),('shripad@gmail.com','shripad','123',6,0,'student'),('akash@gmail.com','akash','123',7,0,'student'),('chaitali@gmail.com','chaitali','123',8,0,'student'),('rahul@gmail.com','rahul','123',9,0,'faculty'),('manjush@gmail.com','manjusha','123',10,0,'faculty'),('rohan@gmail.com','rohan','123',11,0,'faculty'),('shadha@gail.com','shradha','123',14,0,'student'),('neeta@gmail.com','neeta','123',15,0,'student'),('brijesh@gmail.com','Brijesh','123',16,0,'student'),('prashant@gmail.com','prashant','123',18,0,'parent'),('pjshaurya@gmail.com','shaurya','123',19,0,'student'),('niranjan@gmail.com','niranjan','123',22,0,'student'),('ram@gmail.com','ram','123',23,0,'student'),('raj@gmail.com','raj','123',25,0,'student'),('vp@gmail.com','vaish11','123',26,0,'student'),('prashant@gmail.com','prashantjain','123',27,0,'parent'),('sanjay@gmail.com','sanjay','123',28,0,'parent'),('bp@gmail.com','bob','123',29,0,'parent'),('pl@gmail.com','prabhakar','123',30,0,'parent'),('pravinjoshi@gmail.com','pravin','123',31,0,'parent'),('sham@gmail.com','sham','123',32,0,'parent'),('RAHUKPATIL@GMAIL.COM','rahul','123',33,0,'parent'),('dilippotode@gmail.com','diliip','123',34,0,'parent'),('rajjain@gmail.com','rajesh','123',35,0,'parent'),('kunal@gmail.com','kunal','123',37,0,'faculty');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-29 12:54:22

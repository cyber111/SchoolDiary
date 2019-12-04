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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faculty`
--

LOCK TABLES `faculty` WRITE;
/*!40000 ALTER TABLE `faculty` DISABLE KEYS */;
INSERT INTO `faculty` VALUES (1,'ROHAN','PARMANE',8888888888,'PUNE','MALE','LAB-FACULTY',1,11),(2,'Manjusha','Nikam',8888888888,'PUNE','FEMALE','LAB-FACULTY',2,10),(8,'Rahul','Patil',976398395,'Pune','MALE','C++',3,9);
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
INSERT INTO `notice` VALUES (1,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It'),(2,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It'),(3,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It'),(4,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It');
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parent`
--

LOCK TABLES `parent` WRITE;
/*!40000 ALTER TABLE `parent` DISABLE KEYS */;
INSERT INTO `parent` VALUES (1,1,'PRASHANT','JAIN',8745157458,'prashant@gmail.com','BULDHANA','FATHER'),(4,10,'SANJAY','SANCHETI',8745157458,'sanjay@gmail.com','AURANGABAD','FATHER');
/*!40000 ALTER TABLE `parent` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (1,'PRATIK','JAIN',44,1,'Male','MH','PUNE','2019-12-19','pjpratikjin7@gmail,com','10TH','A',1,1,1,'pratik','123'),(2,'PRASAD','DESHMUKH',45,1,'Male','MH','PUNE','2019-12-18','pjprasaddeshmukh17@gmail,com','9TH','A',1,2,2,'prasad','123'),(3,'PRASHANT','JAIN',46,1,'Male','MH','PUNE','2019-12-05','pratikl17@gmail,com','10TH','A',1,2,3,'prashant','123'),(4,'PRATIK','LAVHANE',47,1,'Male','MH','PUNE','2019-11-29','PRATIK@gmail,com','8TH','A',1,3,4,'pratik1','123'),(5,'PRANAV','JOSHI',48,1,'Male','MH','PUNE','2019-12-10','pranav@gmail,com','10TH','A',1,1,5,'pranav','123'),(6,'SHRIPAD','JOSHI',49,1,'Female','MH','PUNE','2019-12-08','vaishnavi@gmail,com','10TH','A',1,1,6,'shripad','123'),(7,'AKASH','PATIL',50,1,'Male','MH','PUNE','2019-12-07','chaitali@gmail,com','10TH','A',1,1,7,'akash','123'),(8,'CHAITALI','POTODE',51,1,'Male','MH','PUNE','2019-12-15','CHAI@gmail,com','8TH','A',1,3,8,'chaitali','123'),(16,'Pradeep','Jagtap',1,1,'Male','MH','Mumbai','2019-12-14','pradeep@test.com','1','1',1,1,12,'pradeep','123'),(17,'Shradha','Kadavekar',23,1,'Female','MH','Pune','2019-12-13','shadha@gail.com','DMC','DMC',1,1,14,'shradha','123');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('pratik@gmail.com','pratik','123',1,0,'student'),('prasad@gmail.com','prasad','123',2,0,'student'),('prashant@gmail.com','prashant','123',3,0,'student'),('pratik.1@gmail.com','pratik1','123',4,0,'student'),('pranav@gmail.com','pranav','123',5,0,'student'),('shripad@gmail.com','shripad','123',6,0,'student'),('akash@gmail.com','akash','123',7,0,'student'),('chaitali@gmail.com','chaitali','123',8,0,'student'),('rahul@gmail.com','rahul','123',9,0,'faculty'),('manjush@gmail.com','manjusha','123',10,0,'faculty'),('rohan@gmail.com','rohan','123',11,0,'faculty'),('pradeep@test.com','pradeep','123',12,0,'student'),('undefined','undefined','undefined',13,0,''),('shadha@gail.com','shradha','123',14,0,'student');
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

-- Dump completed on 2019-12-04 22:39:26

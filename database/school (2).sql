-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 30, 2024 at 09:08 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `school`
--

-- --------------------------------------------------------

--
-- Table structure for table `classroom`
--

CREATE TABLE `classroom` (
  `building` varchar(100) NOT NULL,
  `room_number` varchar(50) NOT NULL,
  `capacity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `classroom`
--

INSERT INTO `classroom` (`building`, `room_number`, `capacity`) VALUES
('Business Building', 'B301', 45),
('Engineering Building', 'E101', 50),
('Engineering Building', 'E401', 55),
('Humanities Building', 'H201', 30),
('Life Sciences Building', 'L101', 70),
('Science Building', 'S201', 40),
('Science Building', 'S301', 60),
('Science Building', 'S401', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `course_id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `dept_name` varchar(100) DEFAULT NULL,
  `credits` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`course_id`, `title`, `dept_name`, `credits`) VALUES
(1, 'Introduction to Computer Science', 'Computer Science', 4),
(2, 'Calculus I', 'Mathematics', 4),
(3, 'General Physics', 'Physics', 4),
(4, 'Organic Chemistry', 'Chemistry', 4),
(5, 'Biology 101', 'Biology', 4),
(6, 'English Literature', 'English', 3),
(7, 'World History', 'History', 3),
(8, 'Microeconomics', 'Economics', 3),
(9, 'CalculasII', 'Mathematics', 3);

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `dept_name` varchar(100) NOT NULL,
  `building` varchar(100) DEFAULT NULL,
  `budget` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`dept_name`, `building`, `budget`) VALUES
('Biology', 'Life Sciences Building', 140000.00),
('Chemistry', 'Science Building', 110000.00),
('Computer Science', 'Engineering Building', 150000.00),
('Economics', 'Business Building', 125000.00),
('English', 'Humanities Building', 90000.00),
('History', 'Humanities Building', 95000.00),
('Mathematics', 'Science Building', 120000.00),
('Physics', 'Science Building', 130000.00);

-- --------------------------------------------------------

--
-- Table structure for table `section`
--

CREATE TABLE `section` (
  `course_id` int(11) NOT NULL,
  `sec_id` int(11) NOT NULL,
  `semester` varchar(50) NOT NULL,
  `year` int(11) NOT NULL,
  `building` varchar(100) DEFAULT NULL,
  `room_number` varchar(50) DEFAULT NULL,
  `time_slot_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `section`
--

INSERT INTO `section` (`course_id`, `sec_id`, `semester`, `year`, `building`, `room_number`, `time_slot_id`) VALUES
(1, 1, 'Spring', 2024, 'Engineering Building', 'E101', 1),
(2, 1, 'Fall', 2024, 'Science Building', 'S201', 2),
(3, 1, 'Spring', 2024, 'Science Building', 'S301', 3),
(4, 1, 'Fall', 2024, 'Science Building', 'S401', 4),
(5, 1, 'Spring', 2024, 'Life Sciences Building', 'L101', 5),
(6, 1, 'Fall', 2024, 'Humanities Building', 'H201', 6),
(7, 1, 'Spring', 2024, 'Business Building', 'B301', 7),
(8, 1, 'Fall', 2024, 'Engineering Building', 'E401', 8),
(9, 1, 'Spring', 2024, 'Engineering Building', 'E101', 7);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `ID` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `dept_name` varchar(100) DEFAULT NULL,
  `tot_credit` int(11) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`ID`, `name`, `dept_name`, `tot_credit`, `password`) VALUES
(1, 'Alice Johnson', 'Computer Science', 45, '123ab'),
(2, 'Bob Smith', 'Mathematics', 60, '12345a'),
(3, 'Charlie Brown', 'Physics', 30, '1234ab'),
(4, 'Diana Prince', 'Biology', 75, '1234ab'),
(5, 'Evan Taylor', 'History', 40, '1234ab'),
(6, 'Fiona Clark', 'English', 55, '1234ab'),
(7, 'George Harris', 'Economics', 65, '1234ab'),
(8, 'Hannah Lee', 'Chemistry', 50, '1234ab'),
(9, 'Tamim', 'Biology', 120, '1234ab');

-- --------------------------------------------------------

--
-- Table structure for table `takes`
--

CREATE TABLE `takes` (
  `ID` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `sec_id` int(11) NOT NULL,
  `semester` varchar(50) NOT NULL,
  `year` int(11) NOT NULL,
  `grade` char(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `takes`
--

INSERT INTO `takes` (`ID`, `course_id`, `sec_id`, `semester`, `year`, `grade`) VALUES
(1, 1, 1, 'Spring', 2024, 'A'),
(1, 2, 1, 'Fall', 2024, 'A'),
(2, 2, 1, 'Fall', 2024, 'B'),
(2, 3, 1, 'Spring', 2024, 'A'),
(3, 2, 1, 'Fall', 2024, 'A'),
(3, 3, 1, 'Spring', 2024, 'C'),
(3, 4, 1, 'Fall', 2024, 'A'),
(4, 2, 1, 'Fall', 2024, 'A'),
(4, 4, 1, 'Fall', 2024, 'B'),
(4, 5, 1, 'Spring', 2024, 'A'),
(5, 2, 1, 'Fall', 2024, 'A'),
(5, 5, 1, 'Spring', 2024, 'A'),
(5, 6, 1, 'Fall', 2024, 'A'),
(6, 2, 1, 'Fall', 2024, 'A'),
(6, 6, 1, 'Fall', 2024, 'A'),
(6, 7, 1, 'Spring', 2024, 'A'),
(7, 2, 1, 'Fall', 2024, 'A'),
(7, 7, 1, 'Spring', 2024, 'B'),
(7, 8, 1, 'Fall', 2024, 'A'),
(8, 2, 1, 'Fall', 2024, 'A'),
(8, 8, 1, 'Fall', 2024, 'C'),
(8, 9, 1, 'Spring', 2024, 'A');

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `ID` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `dept_name` varchar(100) DEFAULT NULL,
  `salary` decimal(10,2) DEFAULT NULL,
  `join_date` date DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`ID`, `name`, `dept_name`, `salary`, `join_date`, `password`) VALUES
(1, 'John Doe', 'Computer Science', 80000.00, '2001-12-29', '1234abc'),
(2, 'Jane Smith', 'Mathematics', 75000.00, '2001-12-12', '1234ab'),
(3, 'Albert Johnson', 'Physics', 82000.00, '2024-05-09', '1234ab'),
(4, 'Mary Williams', 'Chemistry', 78000.00, '2024-05-14', '1234ab'),
(5, 'Patricia Brown', 'Biology', 79000.00, '2014-05-02', '1234ab'),
(6, 'Linda Davis', 'English', 70000.00, '2015-05-01', '1234ab'),
(7, 'James Wilson', 'History', 72000.00, '2016-05-05', '1234ab'),
(8, 'Barbara Moore', 'Economics', 83000.00, '2018-05-03', '1234ab'),
(9, 'Tamim', 'Biology', 80000.00, '2024-05-17', '123ab'),
(12, 'Labib', 'Biology', 80000.00, '2024-05-21', '1234ab');

-- --------------------------------------------------------

--
-- Table structure for table `teaches`
--

CREATE TABLE `teaches` (
  `ID` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `sec_id` int(11) NOT NULL,
  `semester` varchar(50) NOT NULL,
  `year` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teaches`
--

INSERT INTO `teaches` (`ID`, `course_id`, `sec_id`, `semester`, `year`) VALUES
(1, 1, 1, 'Spring', 2024),
(2, 2, 1, 'Fall', 2024),
(3, 3, 1, 'Spring', 2024),
(4, 4, 1, 'Fall', 2024),
(5, 5, 1, 'Spring', 2024),
(6, 6, 1, 'Fall', 2024),
(7, 7, 1, 'Spring', 2024),
(8, 8, 1, 'Fall', 2024);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `fname` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `gender` enum('Male','Female','Other') DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `retype_password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `fname`, `lname`, `email`, `dob`, `gender`, `password`, `retype_password`) VALUES
(1, 'John', 'Doe', 'john@example.com', '1990-01-01', 'Male', '1234ab', '1234ab'),
(2, 'Jane', 'Smith', 'jane@example.com', '1992-05-15', 'Female', '123ab', '1234ab'),
(3, 'Alice', 'Johnson', 'alice@example.com', '1988-09-30', 'Female', '1234ab', '1234ab'),
(4, 'Bob', 'Williams', 'bob@example.com', '1995-03-20', 'Male', '1234ab', '1234ab'),
(10, 'Tamim', 'Haque', 'tamim@gmail.com', '2024-05-31', 'Male', '1234ab', NULL),
(11, 'Tamim', 'Haque', 'ta@gmail.com', '2024-05-08', 'Male', '123abc', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `classroom`
--
ALTER TABLE `classroom`
  ADD PRIMARY KEY (`building`,`room_number`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`course_id`),
  ADD KEY `dept_name` (`dept_name`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`dept_name`);

--
-- Indexes for table `section`
--
ALTER TABLE `section`
  ADD PRIMARY KEY (`course_id`,`sec_id`,`semester`,`year`),
  ADD KEY `building` (`building`,`room_number`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `dept_name` (`dept_name`);

--
-- Indexes for table `takes`
--
ALTER TABLE `takes`
  ADD PRIMARY KEY (`ID`,`course_id`,`sec_id`,`semester`,`year`),
  ADD KEY `course_id` (`course_id`,`sec_id`,`semester`,`year`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `dept_name` (`dept_name`);

--
-- Indexes for table `teaches`
--
ALTER TABLE `teaches`
  ADD PRIMARY KEY (`ID`,`course_id`,`sec_id`,`semester`,`year`),
  ADD KEY `course_id` (`course_id`,`sec_id`,`semester`,`year`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `course`
--
ALTER TABLE `course`
  ADD CONSTRAINT `course_ibfk_1` FOREIGN KEY (`dept_name`) REFERENCES `department` (`dept_name`);

--
-- Constraints for table `section`
--
ALTER TABLE `section`
  ADD CONSTRAINT `course_f` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `section_ibfk_1` FOREIGN KEY (`building`,`room_number`) REFERENCES `classroom` (`building`, `room_number`);

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`dept_name`) REFERENCES `department` (`dept_name`);

--
-- Constraints for table `takes`
--
ALTER TABLE `takes`
  ADD CONSTRAINT `takes_ibfk_1` FOREIGN KEY (`ID`) REFERENCES `student` (`ID`),
  ADD CONSTRAINT `takes_ibfk_2` FOREIGN KEY (`course_id`,`sec_id`,`semester`,`year`) REFERENCES `section` (`course_id`, `sec_id`, `semester`, `year`);

--
-- Constraints for table `teacher`
--
ALTER TABLE `teacher`
  ADD CONSTRAINT `teacher_ibfk_1` FOREIGN KEY (`dept_name`) REFERENCES `department` (`dept_name`);

--
-- Constraints for table `teaches`
--
ALTER TABLE `teaches`
  ADD CONSTRAINT `teaches_ibfk_1` FOREIGN KEY (`ID`) REFERENCES `teacher` (`ID`),
  ADD CONSTRAINT `teaches_ibfk_2` FOREIGN KEY (`course_id`,`sec_id`,`semester`,`year`) REFERENCES `section` (`course_id`, `sec_id`, `semester`, `year`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

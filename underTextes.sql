-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 25, 2022 at 11:22 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `graphs-d3`
--

-- --------------------------------------------------------

--
-- Table structure for table `graphs`
--

CREATE TABLE `graphs` (
  `id` int(11) NOT NULL,
  `name` varchar(60) COLLATE utf8_bin NOT NULL,
  `json` text COLLATE utf8_bin NOT NULL,
  `image` varchar(909) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `graphs`
--

INSERT INTO `graphs` (`id`, `name`, `json`, `image`) VALUES
(7, 'yair111', ' {\n\n\"name\": \"Sample graph\",\n\"nodes\": {\n\n\"node-A\": {\n\"name\": \"A\",\n\"inputs\": {\n\"B-size\": \"node-B -> metadata.size\"\n},\n\"metadata\": {\n\"age\": 3\n}\n},\n\"node-B\": {\n\"inputs\": {\n\"age-of-node-A\": \"node-A -> metadata.age\"\n},\n\"name\": \"B\",\n\"metadata\": {\n\"age\": 10,\n\"size\": \"90kb\"\n}\n}\n\n}\n\n} ', 'https://s3-us-west-2.amazonaws.com/courses-images/wp-content/uploads/sites/2043/2017/07/01214432/IMG_Econ_01_011.png'),
(8, 'yair1112222', ' {\n\n\"name\": \"Sample graph\",\n\"nodes\": {\n\n\"node-A\": {\n\"name\": \"A\",\n\"inputs\": {\n\"B-size\": \"node-B -> metadata.size\"\n},\n\"metadata\": {\n\"age\": 3\n}\n},\n\"node-B\": {\n\"inputs\": {\n\"age-of-node-A\": \"node-A -> metadata.age\"\n},\n\"name\": \"B\",\n\"metadata\": {\n\"age\": 777,\n\"size\": \"90kb\"\n}\n}\n,\n\"node-C\": {\n\"inputs\": {\n\"age-of-node-A\": \"node-B -> metadata.age\"\n},\n\"name\": \"C\",\n\"metadata\": {\n\"age\": 77,\n\"size\": \"77kb\"\n}\n}\n}\n\n}  \n', 'https://www.israelhayom.co.il/wp-content/uploads/2022/10/03/03/%D7%99%D7%95%D7%A1%D7%99-%D7%96%D7%9C%D7%99%D7%92%D7%A8-3.10-960x640.jpg'),
(9, 'yair13333', '{\n\n\"name\": \"Sample graph\",\n\"nodes\": {\n\n\"node-A\": {\n\"name\": \"A\",\n\"inputs\": {\n\"B-size\": \"node-B -> metadata.size\"\n},\n\"metadata\": {\n\"age\": 3,\n}\n},\n\"node-B\": {\n\"inputs\": {\n\"age-of-node-A\": \"node-A -> metadata.age\"\n},\n\"name\": \"B\",\n\"metadata\": {\n\"age\": 10,\n\"size\": \"90kb\"\n}\n}\n\n}\n\n}', 'https://www.israelhayom.co.il/wp-content/uploads/2022/10/03/03/%D7%99%D7%95%D7%A1%D7%99-%D7%96%D7%9C%D7%99%D7%92%D7%A8-3.10-960x640.jpg'),
(10, 'yair11155555', '  {\r\n\r\n\"name\": \"Sample graph\",\r\n\"nodes\": {\r\n\r\n\"node-A\": {\r\n\"name\": \"A\",\r\n\"inputs\": {\r\n\"B-size\": \"node-B -> metadata.size\"\r\n},\r\n\"metadata\": {\r\n\"age\": 3\r\n}\r\n},\r\n\"node-B\": {\r\n\"inputs\": {\r\n\"age-of-node-A\": \"node-A -> metadata.age\"\r\n},\r\n\"name\": \"B\",\r\n\"metadata\": {\r\n\"age\": 777,\r\n\"size\": \"90kb\"\r\n}\r\n}\r\n,\r\n\"node-C\": {\r\n\"inputs\": {\r\n\"age-of-node-A\": \"node-B -> metadata.age\"\r\n},\r\n\"name\": \"C\",\r\n\"metadata\": {\r\n\"age\": 77,\r\n\"size\": \"77kb\"\r\n}\r\n}\r\n}\r\n\r\n}  \r\n', 'https://sm.ign.com/t/ign_il/cover/s/star-wars-/star-wars-the-mandalorian_v6es.1280.jpg'),
(11, 'yair111', '  {\r\n\r\n\"name\": \"Sample graph\",\r\n\"nodes\": {\r\n\r\n\"node-A\": {\r\n\"name\": \"A\",\r\n\"inputs\": {\r\n\"B-size\": \"node-B -> metadata.size\"\r\n},\r\n\"metadata\": {\r\n\"age\": 3\r\n}\r\n},\r\n\"node-B\": {\r\n\"inputs\": {\r\n\"age-of-node-A\": \"node-A -> metadata.age\"\r\n},\r\n\"name\": \"B\",\r\n\"metadata\": {\r\n\"age\": 777,\r\n\"size\": \"90kb\"\r\n}\r\n}\r\n,\r\n\"node-C\": {\r\n\"inputs\": {\r\n\"age-of-node-A\": \"node-B -> metadata.age\"\r\n},\r\n\"name\": \"C\",\r\n\"metadata\": {\r\n\"age\": 77,\r\n\"size\": \"77kb\"\r\n}\r\n}\r\n}\r\n\r\n}  \r\n', 'https://www.israelhayom.co.il/wp-content/uploads/2022/10/03/03/%D7%99%D7%95%D7%A1%D7%99-%D7%96%D7%9C%D7%99%D7%92%D7%A8-3.10-960x640.jpg'),
(101, 'y', '  {\r\n\r\n\"name\": \"Sample graph\",\r\n\"nodes\": {\r\n\r\n\"node-A\": {\r\n\"name\": \"A\",\r\n\"inputs\": {\r\n\"B-size\": \"node-B -> metadata.size\"\r\n},\r\n\"metadata\": {\r\n\"age\": 3\r\n}\r\n},\r\n\"node-B\": {\r\n\"inputs\": {\r\n\"age-of-node-A\": \"node-A -> metadata.age\"\r\n},\r\n\"name\": \"B\",\r\n\"metadata\": {\r\n\"age\": 777,\r\n\"size\": \"90kb\"\r\n}\r\n}\r\n,\r\n\"node-C\": {\r\n\"inputs\": {\r\n\"age-of-node-A\": \"node-B -> metadata.age\"\r\n},\r\n\"name\": \"C\",\r\n\"metadata\": {\r\n\"age\": 77,\r\n\"size\": \"77kb\"\r\n}\r\n}\r\n}\r\n\r\n}  \r\n', 'https://www.israelhayom.co.il/xcvwp-content/uploads/2022/10/03/03/%D7%99%D7%95%D7%A1%D7%99-%D7%96%D7%9C%D7%99%D7%92%D7%A8-3.10-960x640.jpg'),
(102, 'yair111', '  {\r\n\r\n\"name\": \"Sample graph\",\r\n\"nodes\": {\r\n\r\n\"node-A\": {\r\n\"name\": \"A\",\r\n\"inputs\": {\r\n\"B-size\": \"node-B -> metadata.size\"\r\n},\r\n\"metadata\": {\r\n\"age\": 3\r\n}\r\n},\r\n\"node-B\": {\r\n\"inputs\": {\r\n\"age-of-node-A\": \"node-A -> metadata.age\"\r\n},\r\n\"name\": \"B\",\r\n\"metadata\": {\r\n\"age\": 777,\r\n\"size\": \"90kb\"\r\n}\r\n}\r\n,\r\n\"node-C\": {\r\n\"inputs\": {\r\n\"age-of-node-A\": \"node-B -> metadata.age\"\r\n},\r\n\"name\": \"C\",\r\n\"metadata\": {\r\n\"age\": 77,\r\n\"size\": \"77kb\"\r\n}\r\n}\r\n}\r\n\r\n}  \r\n', 'https://www.israelhayom.co.il/wp-content/uploads/2022/10/03/03/%D7%99%D7%95%D7%A1%D7%99-%D7%96%D7%9C%D7%99%D7%92%D7%A8-3.10-960x640.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `graphs`
--
ALTER TABLE `graphs`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

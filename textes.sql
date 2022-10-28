-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 28, 2022 at 11:39 AM
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
-- Database: `under-text`
--

-- --------------------------------------------------------

--
-- Table structure for table `textes`
--

CREATE TABLE `textes` (
  `id` int(255) NOT NULL,
  `original` varchar(255) NOT NULL,
  `translate` varchar(255) NOT NULL,
  `trans_en` varchar(255) NOT NULL,
  `name_tfila` varchar(255) NOT NULL COMMENT 'waharit',
  `name_abzac` varchar(255) NOT NULL COMMENT 'amida',
  `name_mikum` varchar(255) NOT NULL COMMENT 'yaale veayavo',
  `name_selected_date` varchar(255) NOT NULL COMMENT 'sukkot',
  `text_style` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '[json] {weight :bold}'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `textes`
--

INSERT INTO `textes` (`id`, `original`, `translate`, `trans_en`, `name_tfila`, `name_abzac`, `name_mikum`, `name_selected_date`, `text_style`) VALUES
(1, 'מודֶה', 'Благодарен', '', '', '', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `textes`
--
ALTER TABLE `textes`
  ADD UNIQUE KEY `id` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

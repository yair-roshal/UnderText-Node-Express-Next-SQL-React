-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 28, 2022 at 04:59 PM
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
-- Table structure for table `words`
--

CREATE TABLE `words` (
  `id` int(11) NOT NULL,
  `original` varchar(99) NOT NULL,
  `translate` varchar(99) NOT NULL,
  `description` text NOT NULL COMMENT 'description of word'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `words`
--

INSERT INTO `words` (`id`, `original`, `translate`, `description`) VALUES
(1, 'מודֶה', 'Благодарен', ''),
(2, 'אֲנִי', 'я', ''),
(3, 'מוֹדֶה', '', ''),
(4, 'אֲנִי', '', ''),
(5, 'לְפָנֶיךָ', '', ''),
(6, 'מֶלֶךְ', '', ''),
(7, 'חַי', '', ''),
(8, 'וְקַיָּם.', '', ''),
(9, 'שֶׁהֶחֱזַרְתָּ', '', ''),
(10, 'בִּי', '', ''),
(11, 'נִשְׁמָתִי', '', ''),
(12, 'בְּחֶמְלָה', '', ''),
(13, 'רַבָּה', '', ''),
(14, 'אֱמוּנָתֶךָ', '', ''),
(15, 'מוֹדֶה', '', ''),
(16, 'אֲנִי', '', ''),
(17, 'לְפָנֶיךָ', '', ''),
(18, 'מֶלֶךְ', '', ''),
(19, 'חַי', '', ''),
(20, 'וְקַיָּם.', '', ''),
(21, 'שֶׁהֶחֱזַרְתָּ', '', ''),
(22, 'בִּי', '', ''),
(23, 'נִשְׁמָתִי', '', ''),
(24, 'בְּחֶמְלָה', '', ''),
(25, 'רַבָּה', '', ''),
(26, 'אֱמוּנָתֶךָ', '', ''),
(27, 'מוֹדֶה', '', ''),
(28, 'אֲנִי', '', ''),
(29, 'לְפָנֶיךָ', '', ''),
(30, 'מֶלֶךְ', '', ''),
(31, 'חַי', '', ''),
(32, 'וְקַיָּם.', '', ''),
(33, 'שֶׁהֶחֱזַרְתָּ', '', ''),
(34, 'בִּי', '', ''),
(35, 'נִשְׁמָתִי', '', ''),
(36, 'בְּחֶמְלָה', '', ''),
(37, 'רַבָּה', '', ''),
(38, 'אֱמוּנָתֶךָ', '', ''),
(39, 'מוֹדֶה', '', ''),
(40, 'אֲנִי', '', ''),
(41, 'לְפָנֶיךָ', '', ''),
(42, 'מֶלֶךְ', '', ''),
(43, 'חַי', '', ''),
(44, 'וְקַיָּם.', '', ''),
(45, 'שֶׁהֶחֱזַרְתָּ', '', ''),
(46, 'בִּי', '', ''),
(47, 'נִשְׁמָתִי', '', ''),
(48, 'בְּחֶמְלָה', '', ''),
(49, 'רַבָּה', '', ''),
(50, 'אֱמוּנָתֶךָ', '', ''),
(51, 'מוֹדֶה', '', ''),
(52, 'אֲנִי', '', ''),
(53, 'לְפָנֶיךָ', '', ''),
(54, 'מֶלֶךְ', '', ''),
(55, 'חַי', '', ''),
(56, 'וְקַיָּם.', '', ''),
(57, 'שֶׁהֶחֱזַרְתָּ', '', ''),
(58, 'בִּי', '', ''),
(59, 'נִשְׁמָתִי', '', ''),
(60, 'בְּחֶמְלָה', '', ''),
(61, 'רַבָּה', '', ''),
(62, 'אֱמוּנָתֶךָ', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `words`
--
ALTER TABLE `words`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `words`
--
ALTER TABLE `words`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

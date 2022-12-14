-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Дек 18 2022 г., 17:56
-- Версия сервера: 10.4.24-MariaDB
-- Версия PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `under-text`
--

-- --------------------------------------------------------

--
-- Структура таблицы `maariv`
--

CREATE TABLE `maariv` (
  `id` int(11) NOT NULL,
  `original` varchar(99) NOT NULL,
  `translate` varchar(99) NOT NULL,
  `description` text NOT NULL COMMENT 'description of word'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `maariv`
--

INSERT INTO `maariv` (`id`, `original`, `translate`, `description`) VALUES
(298, 'אֲנִי', 'Я', ''),
(299, 'לְפָנֶיךָ', 'Перед вами', ''),
(300, 'מֶלֶךְ', 'Король', ''),
(301, 'חַי', 'Жизнь', ''),
(302, 'וְקַיָּם.', 'Существующий.', ''),
(303, 'שֶׁהֶחֱזַרְתָּ', 'Возвращение', ''),
(304, 'בִּי', 'Бей', ''),
(305, 'נִשְׁמָתִי', 'Душевный', ''),
(306, 'בְּחֶמְלָה', 'Сострадание', ''),
(307, 'רַבָּה', 'Raba', ''),
(308, 'אֱמוּנָתֶךָ\r\n', 'Твоя вера\r\n', ''),
(309, 'מוֹדֶה', 'Спасибо', ''),
(310, 'אֲנִי', 'Я', ''),
(311, 'לְפָנֶיךָ', 'Перед вами', ''),
(312, 'מֶלֶךְ', 'Король', ''),
(313, 'חַי', 'Жизнь', ''),
(314, 'וְקַיָּם.', 'Существующий.', ''),
(315, 'שֶׁהֶחֱזַרְתָּ', 'Возвращение', ''),
(316, 'בִּי', 'Бей', ''),
(317, 'נִשְׁמָתִי', 'Душевный', ''),
(318, 'בְּחֶמְלָה', 'Сострадание', ''),
(319, 'רַבָּה', 'Raba', ''),
(320, 'אֱמוּנָתֶךָ', 'Твоя вера', ''),
(321, 'מוֹדֶה', 'Спасибо', ''),
(322, 'אֲנִי', 'Я', ''),
(323, 'מוֹדֶה', 'Спасибо', ''),
(324, 'אֲנִי', 'Я', ''),
(325, 'מוֹדֶה', 'Спасибо', ''),
(326, 'אֲנִי', 'Я', ''),
(327, 'לְפָנֶיךָ', 'Перед вами', ''),
(328, 'מֶלֶךְ', 'Король', ''),
(329, 'חַי', 'Жизнь', ''),
(330, 'וְקַיָּם.', 'Существующий.', ''),
(331, 'שֶׁהֶחֱזַרְתָּ', 'Возвращение', ''),
(332, 'בִּי', 'Бей', ''),
(333, 'נִשְׁמָתִי', 'Душевный', ''),
(334, 'בְּחֶמְלָה', 'Сострадание', ''),
(335, 'רַבָּה', 'Raba', ''),
(336, 'אֱמוּנָתֶךָ', 'Твоя вера', '');

-- --------------------------------------------------------

--
-- Структура таблицы `minha`
--

CREATE TABLE `minha` (
  `id` int(11) NOT NULL,
  `original` varchar(99) NOT NULL,
  `translate` varchar(99) NOT NULL,
  `description` text NOT NULL COMMENT 'description of word'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `minha`
--

INSERT INTO `minha` (`id`, `original`, `translate`, `description`) VALUES
(2315, '555', 'xxxxxxxx', 'bold'),
(2316, '555', 'Сидячие', ''),
(2317, 'בֵיתֶֽךָ', 'Ваш дом', ''),
(2318, 'עוֹד', 'Все еще', ''),
(2319, 'יְהַלְלֽוּךָ', 'Аллах', ''),
(2320, 'סֶּֽלָה:', 'Это:', ''),
(2321, 'אַשְׁרֵי', 'Арийский', ''),
(2322, 'הָעָם', 'Люди', '');

-- --------------------------------------------------------

--
-- Структура таблицы `shaharit`
--

CREATE TABLE `shaharit` (
  `id` int(11) NOT NULL,
  `original` varchar(99) NOT NULL,
  `translate` varchar(99) NOT NULL,
  `description` text NOT NULL COMMENT 'description of word'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `shaharit`
--

INSERT INTO `shaharit` (`id`, `original`, `translate`, `description`) VALUES
(298, 'אֲנִי', 'Я', 'bold'),
(299, 'לְפָנֶיךָ', 'Перед вами', 'bold'),
(300, 'מֶלֶךְ', 'Король', ''),
(301, 'חַי', 'Жизнь', ''),
(302, 'וְקַיָּם.', 'Существующий.', ''),
(303, 'שֶׁהֶחֱזַרְתָּ', 'Возвращение', ''),
(304, 'בִּי', 'Бей', ''),
(305, 'נִשְׁמָתִי', 'Душевный', ''),
(306, 'בְּחֶמְלָה', 'Сострадание', ''),
(307, 'רַבָּה', 'Raba', ''),
(308, 'אֱמוּנָתֶךָ\r\n', 'Твоя вера\r\n', 'last'),
(309, 'מוֹדֶה', 'Спасибо', ''),
(310, 'אֲנִי', 'Я', ''),
(311, 'לְפָנֶיךָ', 'Перед вами', ''),
(312, 'מֶלֶךְ', 'Король', ''),
(313, 'חַי', 'Жизнь', ''),
(314, 'וְקַיָּם.', 'Существующий.', ''),
(315, 'שֶׁהֶחֱזַרְתָּ', 'Возвращение', ''),
(316, 'בִּי', 'Бей', ''),
(317, 'נִשְׁמָתִי', 'Душевный', ''),
(318, 'בְּחֶמְלָה', 'Сострадание', ''),
(319, 'רַבָּה', 'Raba', ''),
(320, 'אֱמוּנָתֶךָ', 'Твоя вера', 'last'),
(321, 'מוֹדֶה', 'Спасибо', ''),
(322, 'אֲנִי', 'Я', ''),
(323, 'מוֹדֶה', 'Спасибо', ''),
(324, 'אֲנִי', 'Я', ''),
(325, 'מוֹדֶה', 'Спасибо', ''),
(326, 'אֲנִי', 'Я', ''),
(327, 'לְפָנֶיךָ', 'Перед вами', ''),
(328, 'מֶלֶךְ', 'Король', ''),
(329, 'חַי', 'Жизнь', ''),
(330, 'וְקַיָּם.', 'Существующий.', ''),
(331, 'שֶׁהֶחֱזַרְתָּ', 'Возвращение', ''),
(332, 'בִּי', 'Бей', ''),
(333, 'נִשְׁמָתִי', 'Душевный', ''),
(334, 'בְּחֶמְלָה', 'Сострадание', ''),
(335, 'רַבָּה', 'Raba', ''),
(336, 'אֱמוּנָתֶךָ', 'Твоя вера', '');

-- --------------------------------------------------------

--
-- Структура таблицы `tehilim`
--

CREATE TABLE `tehilim` (
  `id` int(11) NOT NULL,
  `original` varchar(99) NOT NULL,
  `translate` varchar(99) NOT NULL,
  `description` text NOT NULL COMMENT 'description of word'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `tehilim`
--

INSERT INTO `tehilim` (`id`, `original`, `translate`, `description`) VALUES
(298, 'אֲנִי', 'Я', ''),
(299, 'לְפָנֶיךָ', 'Перед вами', ''),
(300, 'מֶלֶךְ', 'Король', ''),
(301, 'חַי', 'Жизнь', ''),
(302, 'וְקַיָּם.', 'Существующий.', ''),
(303, 'שֶׁהֶחֱזַרְתָּ', 'Возвращение', ''),
(304, 'בִּי', 'Бей', ''),
(305, 'נִשְׁמָתִי', 'Душевный', ''),
(306, 'בְּחֶמְלָה', 'Сострадание', ''),
(307, 'רַבָּה', 'Raba', ''),
(308, 'אֱמוּנָתֶךָ\r\n', 'Твоя вера\r\n', ''),
(309, 'מוֹדֶה', 'Спасибо', ''),
(310, 'אֲנִי', 'Я', ''),
(311, 'לְפָנֶיךָ', 'Перед вами', ''),
(312, 'מֶלֶךְ', 'Король', ''),
(313, 'חַי', 'Жизнь', ''),
(314, 'וְקַיָּם.', 'Существующий.', ''),
(315, 'שֶׁהֶחֱזַרְתָּ', 'Возвращение', ''),
(316, 'בִּי', 'Бей', ''),
(317, 'נִשְׁמָתִי', 'Душевный', ''),
(318, 'בְּחֶמְלָה', 'Сострадание', ''),
(319, 'רַבָּה', 'Raba', ''),
(320, 'אֱמוּנָתֶךָ', 'Твоя вера', ''),
(321, 'מוֹדֶה', 'Спасибо', ''),
(322, 'אֲנִי', 'Я', ''),
(323, 'מוֹדֶה', 'Спасибо', ''),
(324, 'אֲנִי', 'Я', ''),
(325, 'מוֹדֶה', 'Спасибо', ''),
(326, 'אֲנִי', 'Я', ''),
(327, 'לְפָנֶיךָ', 'Перед вами', ''),
(328, 'מֶלֶךְ', 'Король', ''),
(329, 'חַי', 'Жизнь', ''),
(330, 'וְקַיָּם.', 'Существующий.', ''),
(331, 'שֶׁהֶחֱזַרְתָּ', 'Возвращение', ''),
(332, 'בִּי', 'Бей', ''),
(333, 'נִשְׁמָתִי', 'Душевный', ''),
(334, 'בְּחֶמְלָה', 'Сострадание', ''),
(335, 'רַבָּה', 'Raba', ''),
(336, 'אֱמוּנָתֶךָ', 'Твоя вера', '');

-- --------------------------------------------------------

--
-- Структура таблицы `words`
--

CREATE TABLE `words` (
  `id` int(11) NOT NULL,
  `original` varchar(99) NOT NULL,
  `translate` varchar(99) NOT NULL,
  `description` text NOT NULL COMMENT 'description of word'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `maariv`
--
ALTER TABLE `maariv`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Индексы таблицы `minha`
--
ALTER TABLE `minha`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Индексы таблицы `shaharit`
--
ALTER TABLE `shaharit`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Индексы таблицы `tehilim`
--
ALTER TABLE `tehilim`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Индексы таблицы `words`
--
ALTER TABLE `words`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `maariv`
--
ALTER TABLE `maariv`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=337;

--
-- AUTO_INCREMENT для таблицы `minha`
--
ALTER TABLE `minha`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2323;

--
-- AUTO_INCREMENT для таблицы `shaharit`
--
ALTER TABLE `shaharit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=337;

--
-- AUTO_INCREMENT для таблицы `tehilim`
--
ALTER TABLE `tehilim`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=337;

--
-- AUTO_INCREMENT для таблицы `words`
--
ALTER TABLE `words`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=655;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

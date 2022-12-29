-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:8889
-- Время создания: Дек 29 2022 г., 18:42
-- Версия сервера: 5.7.34
-- Версия PHP: 7.4.21

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
(2559, 'אשרי', 'счастливы', 'title'),
(2560, 'אַשְׁרֵי', 'счастливы', 'bold'),
(2561, 'יוֹשְׁבֵי', 'сидячие', ''),
(2562, 'בֵיתֶֽךָ', 'в доме твоем', ''),
(2563, 'עוֹד', '(и) еще', ''),
(2564, 'יְהַלְלֽוּךָ', 'восхвалят тебя', ''),
(2565, ':סֶּֽלָה', '!', ''),
(2566, 'אַשְׁרֵי', 'счастлив', ''),
(2567, 'הָעָם', 'народ', ''),
(2568, 'שֶׁכָּֽכָה', 'что так', ''),
(2569, 'לּוֹ', 'ему(повезло)', ''),
(2570, 'אַשְׁרֵי', 'счастлив', ''),
(2571, 'הָעָם', 'народ', ''),
(2572, 'שֶׁיְיָ', 'что господь', ''),
(2573, ':אֱלֹהָיו', 'бог его', ''),
(2574, 'תְּהִלָּה', 'прославление', ''),
(2575, 'לְדָוִד', 'давида', ''),
(2576, 'אֲרוֹמִמְךָ', 'превознесу тебя', ''),
(2577, 'אֱלוֹהַי', 'бог мой', ''),
(2578, 'הַמֶּֽלֶךְ', 'владыка', ''),
(2579, 'וַאֲבָרְכָה', 'и буду благословлять', ''),
(2580, 'שִׁמְךָ', 'имя твое', ''),
(2581, 'לְעוֹלָם', 'во веки(лит)', ''),
(2582, ':וָעֶד', 'веков(лит)', ''),
(2583, 'בְּכָל־יוֹם', 'каждый день', ''),
(2584, 'אֲבָרְכֶֽךָּ', 'буду благословлять тебя', ''),
(2585, 'וַאֲהַלְלָה', 'и буду восславлять тебя', ''),
(2586, 'שִׁמְךָ', 'имя твое', ''),
(2587, 'לְעוֹלָם', 'во веки(лит)', ''),
(2588, ':וָעֶד', 'веков(лит)', ''),
(2589, 'גָּדוֹל', 'велик', ''),
(2590, 'יְיָ', 'господь', ''),
(2591, 'וּמְהֻלָּל', 'и прославляем', ''),
(2592, 'מְאֹד', 'очень', ''),
(2593, 'וְלִגְדֻלָּתוֹ', 'и величию его', ''),
(2594, 'אֵין', 'нет', ''),
(2595, ':חֵֽקֶר', 'исследования', ''),
(2596, 'דּוֹר', 'поколение', ''),
(2597, 'לְדוֹר', 'к поколению', ''),
(2598, 'יְשַׁבַּח', 'будет хвалить', ''),
(2599, 'מַעֲשֶׂיךָ', 'деяния твои', ''),
(2600, 'וּגְבוּרֹתֶֽיךָ', 'и (о) могуществе', ''),
(2601, ':יַגִּֽידוּ', 'расскажут ', ''),
(2602, 'הֲדַר', '(о) великолепии', ''),
(2603, 'כְּבוֹד', 'славы', ''),
(2604, 'הוֹדֶֽךָ', 'величия твоего ', ''),
(2605, 'וְדִבְרֵי', 'и (о) деяниях', ''),
(2606, 'נִפְלְאֹתֶֽיךָ', 'чудесных твоих', ''),
(2607, ':אָשִֽׂיחָה', 'я расскажу ', ''),
(2608, 'וֶעֱזוּז', 'и (о) мощи', ''),
(2609, 'נוֹרְאֹתֶֽיךָ', 'ужасающей твоей', ''),
(2610, 'יֹאמֵרוּ', 'говорят', ''),
(2611, 'וּגְדֻלָּתְךָ', 'и (о) величии твоем', ''),
(2612, ':אֲסַפְּרֶֽנָּה', 'я расскажу', ''),
(2613, 'זֶֽכֶר', 'память', ''),
(2614, 'רַב־טוּבְךָ', 'великой благости твоей', ''),
(2615, 'יַבִּֽיעוּ', 'передадут', ''),
(2616, 'וְצִדְקָתְךָ', 'и справедливость твою', ''),
(2617, ':יְרַנֵּֽנוּ', 'воспоют', ''),
(2618, 'חַנּוּן', 'милостлив', ''),
(2619, 'וְרַחוּם', 'и сострадателен', ''),
(2620, 'יְיָ', 'господь', ''),
(2621, 'אֶֽרֶךְ', 'долго', ''),
(2622, 'אַפַּֽיִם', 'терпив', ''),
(2623, ':וּגְדָל־חָֽסֶד', 'велик-милосердием', ''),
(2624, 'טוֹב־יְיָ', 'благ-господь', ''),
(2625, 'לַכֹּל', 'ко всем', ''),
(2626, 'וְרַחֲמָיו', 'и милосердие его', ''),
(2627, ':עַל־כָּל־מַעֲשָׂיו', 'на-все-создания его', ''),
(2628, 'יוֹדֽוּךָ', 'возблагодарит тебя', ''),
(2629, 'יְיָ', 'господь', ''),
(2630, 'כָּל־מַעֲשֶֽׂיךָ', 'все-создания твои', ''),
(2631, 'וַחֲסִידֶֽיךָ', 'и добродетели твои', ''),
(2632, ':יְבָרְכֽוּכָה', 'благословят', ''),
(2633, 'כְּבוֹד', '(о) славе', ''),
(2634, 'מַלְכוּתְךָ', 'царства твоего', ''),
(2635, 'יֹאמֵרוּ', 'говорят', ''),
(2636, 'וּגְבוּרָתְךָ', 'и (о) силе твоей', ''),
(2637, ':יְדַבֵּֽרוּ', 'говорят', ''),
(2638, 'לְהוֹדִֽיעַ', '(чтобы) сообщить', ''),
(2639, 'לִבְנֵי', 'сынам', ''),
(2640, 'הָאָדָם', 'человеческим', ''),
(2641, 'גְּבוּרֹתָיו', '(о) силе его', ''),
(2642, 'וּכְבוֹד', 'и (о) славе', ''),
(2643, 'הֲדַר', 'великолепия', ''),
(2644, ':מַלְכוּתוֹ', 'его царства', ''),
(2645, 'מַלְכוּתְךָ', 'царство твое', ''),
(2646, 'מַלְכוּת', 'царство', ''),
(2647, 'כָּל־עֹלָמִים', 'вечное', ''),
(2648, 'וּמֶמְשַׁלְתְּךָ', 'и правление твое', ''),
(2649, 'בְּכָל־דּוֹר', 'в каждом из поколения', ''),
(2650, ':וָדֹר', 'в поколение', ''),
(2651, 'סוֹמֵךְ', 'поддерживает', ''),
(2652, 'יְיָ', 'господь', ''),
(2653, 'לְכָל־הַנֹּפְלִים', 'всех-падающих', ''),
(2654, 'וְזוֹקֵף', 'и распрамляет', ''),
(2655, ':לְכָל־הַכְּפוּפִים', 'всех согбенных', ''),
(2656, 'עֵינֵי־כֹל', 'глаза всех', ''),
(2657, 'אֵלֶֽיךָ', 'на тебя', ''),
(2658, 'יְשַׂבֵּֽרוּ', 'устремленыны', ''),
(2659, 'וְאַתָּה', 'и ты', ''),
(2660, 'נוֹתֵן־לָהֶם', 'даешь-им', ''),
(2661, 'אֶת־אָכְלָם', 'эту пищу их', ''),
(2662, ':בְּעִתּוֹ', 'вовремя', ''),
(2663, 'פּוֹתֵֽחַ', 'открываешь', ''),
(2664, 'אֶת־יָדֶֽךָ', 'руку твою', ''),
(2665, 'וּמַשְׂבִּֽיעַ', 'и насыщаешь', ''),
(2666, 'לְכָל־חַי', 'все живое', ''),
(2667, ':רָצוֹן', 'щедро', ''),
(2668, 'צַדִּיק', 'справедлив', ''),
(2669, 'יְיָ', 'господь', ''),
(2670, 'בְּכָל־דְּרָכָיו', 'во всех путях его', ''),
(2671, 'וְחָסִיד', 'имилостив', ''),
(2672, ':בְּכָל־מַעֲשָׂיו', 'во всех деяниях его', ''),
(2673, 'קָרוֹב', 'близок', ''),
(2674, 'יְיָ', 'господь', ''),
(2675, 'לְכָל־קֹרְאָיו', 'ко всем взывающим к нему', ''),
(2676, 'לְכֹל', 'ко всякому', ''),
(2677, 'אֲשֶׁר', 'кто', ''),
(2678, 'יִקְרָאֻֽהוּ', 'взывает к нему', ''),
(2679, ':בֶאֱמֶת', 'искренне', ''),
(2680, 'רְצוֹן־יְרֵאָיו', 'желание боящихся его', ''),
(2681, 'יַעֲשֶׂה', 'исполнит', ''),
(2682, 'וְאֶת־שַׁוְעָתָם', 'и вопль их', ''),
(2683, 'יִשְׁמַע', 'услышит', ''),
(2684, ':וְיוֹשִׁיעֵם', 'и спасет их', ''),
(2685, 'שׁוֹמֵר', 'охраняет', ''),
(2686, 'יְיָ', 'господь', ''),
(2687, 'אֶת־כָּל־אֹהֲבָיו', 'всех любящих его', ''),
(2688, 'וְאֵת', 'и', ''),
(2689, 'כָּל־הָרְשָׁעִים', 'всех злодеев', ''),
(2690, ':יַשְׁמִיד', 'уничтожит', ''),
(2691, 'תְּהִלַּת', 'хвалу', ''),
(2692, 'יְיָ', 'господу', ''),
(2693, 'יְדַבֶּר', 'произнесут', ''),
(2694, 'פִּי', 'уста мои', ''),
(2695, 'וִיבָרֵךְ', 'и будет благословлять', ''),
(2696, 'כָּל־בָּשָׂר', 'все живое', ''),
(2697, 'שֵׁם', 'имя', ''),
(2698, 'קָדְשׁוֹ', 'святое его', ''),
(2699, 'לְעוֹלָם', ' во веки', ''),
(2700, ':וָעֶד', 'веков', ''),
(2701, 'וַאֲנַֽחְנוּ', 'и мы', ''),
(2702, 'נְבָרֵךְ', 'будем благословлять', ''),
(2703, 'יָהּ', 'бога', ''),
(2704, 'מֵעַתָּה', 'отныне', ''),
(2705, 'וְעַד־עוֹלָם', 'и вовек', ''),
(2706, ':הַלְלוּיָהּ', 'восхвалите бога ', 'last'),
(2708, 'עמידה', 'Стоя', 'title'),
(2709, 'אֲדֹנָי,', 'Сэр,', ''),
(2710, 'שְׂפָתַי', 'Мои губы', ''),
(2711, 'תִּפְתָּח,', 'Открыть,', ''),
(2712, 'וּפִי', 'Vapi', ''),
(2713, 'יַגִּיד', 'Сказать', ''),
(2714, 'תְּהִלָּתֶךָ:', 'Слава Тебе:', '');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `minha`
--
ALTER TABLE `minha`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `minha`
--
ALTER TABLE `minha`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2715;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
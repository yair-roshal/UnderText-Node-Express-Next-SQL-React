
CREATE TABLE `minha` (
  `id` int(11) NOT NULL,
  `original` varchar(99) NOT NULL,
  `translation` varchar(99) NOT NULL,
  `description` text NOT NULL COMMENT 'description of word',
  `periodStart` text,
  `periodEnd` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;





INSERT INTO `minha` (`id`, `original`, `translation`, `description`,`periodStart`,`periodEnd` ) VALUES
( null, 'אשרי', 'счастливы', 'title'),
( null, 'אַשְׁרֵי', 'счастливы', 'bold'),
( null, 'יוֹשְׁבֵי', 'сидячие', ''),
( null, 'בֵיתֶֽךָ', 'в доме твоем', ''),
( null, 'עוֹד', '(и) еще', ''),
( null, 'יְהַלְלֽוּךָ', 'восхвалят тебя', ''),
( null, ':סֶּֽלָה', '!', ''),
( null, 'אַשְׁרֵי', 'счастлив', ''),
( null, 'הָעָם', 'народ', ''),
( null, 'שֶׁכָּֽכָה', 'что так', ''),
( null, 'לּוֹ', 'ему(повезло)', ''),
( null, 'אַשְׁרֵי', 'счастлив', ''),
( null, 'הָעָם', 'народ', ''),
( null, 'שֶׁיְיָ', 'что господь', ''),
( null, ':אֱלֹהָיו', 'бог его', ''),
( null, 'תְּהִלָּה', 'прославление', ''),
( null, 'לְדָוִד', 'давида', ''),
( null, 'אֲרוֹמִמְךָ', 'превознесу тебя', ''),
( null, 'אֱלוֹהַי', 'бог мой', ''),
( null, 'הַמֶּֽלֶךְ', 'владыка', ''),
( null, 'וַאֲבָרְכָה', 'и буду благословлять', ''),
( null, 'שִׁמְךָ', 'имя твое', ''),
( null, 'לְעוֹלָם', 'во веки(лит)', ''),
( null, ':וָעֶד', 'веков(лит)', ''),
( null, 'בְּכָל־יוֹם', 'каждый день', ''),
( null, 'אֲבָרְכֶֽךָּ', 'буду благословлять тебя', ''),
( null, 'וַאֲהַלְלָה', 'и буду восславлять тебя', ''),
( null, 'שִׁמְךָ', 'имя твое', ''),
( null, 'לְעוֹלָם', 'во веки(лит)', ''),
( null, ':וָעֶד', 'веков(лит)', ''),
( null, 'גָּדוֹל', 'велик', ''),
( null, 'יְיָ', 'господь', ''),
( null, 'וּמְהֻלָּל', 'и прославляем', ''),
( null, 'מְאֹד', 'очень', ''),
( null, 'וְלִגְדֻלָּתוֹ', 'и величию его', ''),
( null, 'אֵין', 'нет', ''),
( null, ':חֵֽקֶר', 'исследования', ''),
( null, 'דּוֹר', 'поколение', ''),
( null, 'לְדוֹר', 'к поколению', ''),
( null, 'יְשַׁבַּח', 'будет хвалить', ''),
( null, 'מַעֲשֶׂיךָ', 'деяния твои', ''),
( null, 'וּגְבוּרֹתֶֽיךָ', 'и (о) могуществе', ''),
( null, ':יַגִּֽידוּ', 'расскажут ', ''),
( null, 'הֲדַר', '(о) великолепии', ''),
( null, 'כְּבוֹד', 'славы', ''),
( null, 'הוֹדֶֽךָ', 'величия твоего ', ''),
( null, 'וְדִבְרֵי', 'и (о) деяниях', ''),
( null, 'נִפְלְאֹתֶֽיךָ', 'чудесных твоих', ''),
( null, ':אָשִֽׂיחָה', 'я расскажу ', ''),
( null, 'וֶעֱזוּז', 'и (о) мощи', ''),
( null, 'נוֹרְאֹתֶֽיךָ', 'ужасающей твоей', ''),
( null, 'יֹאמֵרוּ', 'говорят', ''),
( null, 'וּגְדֻלָּתְךָ', 'и (о) величии твоем', ''),
( null, ':אֲסַפְּרֶֽנָּה', 'я расскажу', ''),
( null, 'זֶֽכֶר', 'память', ''),
( null, 'רַב־טוּבְךָ', 'великой благости твоей', ''),
( null, 'יַבִּֽיעוּ', 'передадут', ''),
( null, 'וְצִדְקָתְךָ', 'и справедливость твою', ''),
( null, ':יְרַנֵּֽנוּ', 'воспоют', ''),
( null, 'חַנּוּן', 'милостлив', ''),
( null, 'וְרַחוּם', 'и сострадателен', ''),
( null, 'יְיָ', 'господь', ''),
( null, 'אֶֽרֶךְ', 'долго', ''),
( null, 'אַפַּֽיִם', 'терпив', ''),
( null, ':וּגְדָל־חָֽסֶד', 'велик-милосердием', ''),
( null, 'טוֹב־יְיָ', 'благ-господь', ''),
( null, 'לַכֹּל', 'ко всем', ''),
( null, 'וְרַחֲמָיו', 'и милосердие его', ''),
( null, ':עַל־כָּל־מַעֲשָׂיו', 'на-все-создания его', ''),
( null, 'יוֹדֽוּךָ', 'возблагодарит тебя', ''),
( null, 'יְיָ', 'господь', ''),
( null, 'כָּל־מַעֲשֶֽׂיךָ', 'все-создания твои', ''),
( null, 'וַחֲסִידֶֽיךָ', 'и добродетели твои', ''),
( null, ':יְבָרְכֽוּכָה', 'благословят', ''),
( null, 'כְּבוֹד', '(о) славе', ''),
( null, 'מַלְכוּתְךָ', 'царства твоего', ''),
( null, 'יֹאמֵרוּ', 'говорят', ''),
( null, 'וּגְבוּרָתְךָ', 'и (о) силе твоей', ''),
( null, ':יְדַבֵּֽרוּ', 'говорят', ''),
( null, 'לְהוֹדִֽיעַ', '(чтобы) сообщить', ''),
( null, 'לִבְנֵי', 'сынам', ''),
( null, 'הָאָדָם', 'человеческим', ''),
( null, 'גְּבוּרֹתָיו', '(о) силе его', ''),
( null, 'וּכְבוֹד', 'и (о) славе', ''),
( null, 'הֲדַר', 'великолепия', ''),
( null, ':מַלְכוּתוֹ', 'его царства', ''),
( null, 'מַלְכוּתְךָ', 'царство твое', ''),
( null, 'מַלְכוּת', 'царство', ''),
( null, 'כָּל־עֹלָמִים', 'вечное', ''),
( null, 'וּמֶמְשַׁלְתְּךָ', 'и правление твое', ''),
( null, 'בְּכָל־דּוֹר', 'в каждом из поколения', ''),
( null, ':וָדֹר', 'в поколение', ''),
( null, 'סוֹמֵךְ', 'поддерживает', ''),
( null, 'יְיָ', 'господь', ''),
( null, 'לְכָל־הַנֹּפְלִים', 'всех-падающих', ''),
( null, 'וְזוֹקֵף', 'и распрамляет', ''),
( null, ':לְכָל־הַכְּפוּפִים', 'всех согбенных', ''),
( null, 'עֵינֵי־כֹל', 'глаза всех', ''),
( null, 'אֵלֶֽיךָ', 'на тебя', ''),
( null, 'יְשַׂבֵּֽרוּ', 'устремленыны', ''),
( null, 'וְאַתָּה', 'и ты', ''),
( null, 'נוֹתֵן־לָהֶם', 'даешь-им', ''),
( null, 'אֶת־אָכְלָם', 'эту пищу их', ''),
( null, ':בְּעִתּוֹ', 'вовремя', ''),
( null, 'פּוֹתֵֽחַ', 'открываешь', ''),
( null, 'אֶת־יָדֶֽךָ', 'руку твою', ''),
( null, 'וּמַשְׂבִּֽיעַ', 'и насыщаешь', ''),
( null, 'לְכָל־חַי', 'все живое', ''),
( null, ':רָצוֹן', 'щедро', ''),
( null, 'צַדִּיק', 'справедлив', ''),
( null, 'יְיָ', 'господь', ''),
( null, 'בְּכָל־דְּרָכָיו', 'во всех путях его', ''),
( null, 'וְחָסִיד', 'имилостив', ''),
( null, ':בְּכָל־מַעֲשָׂיו', 'во всех деяниях его', ''),
( null, 'קָרוֹב', 'близок', ''),
( null, 'יְיָ', 'господь', ''),
( null, 'לְכָל־קֹרְאָיו', 'ко всем взывающим к нему', ''),
( null, 'לְכֹל', 'ко всякому', ''),
( null, 'אֲשֶׁר', 'кто', ''),
( null, 'יִקְרָאֻֽהוּ', 'взывает к нему', ''),
( null, ':בֶאֱמֶת', 'искренне', ''),
( null, 'רְצוֹן־יְרֵאָיו', 'желание боящихся его', ''),
( null, 'יַעֲשֶׂה', 'исполнит', ''),
( null, 'וְאֶת־שַׁוְעָתָם', 'и вопль их', ''),
( null, 'יִשְׁמַע', 'услышит', ''),
( null, ':וְיוֹשִׁיעֵם', 'и спасет их', ''),
( null, 'שׁוֹמֵר', 'охраняет', ''),
( null, 'יְיָ', 'господь', ''),
( null, 'אֶת־כָּל־אֹהֲבָיו', 'всех любящих его', ''),
( null, 'וְאֵת', 'и', ''),
( null, 'כָּל־הָרְשָׁעִים', 'всех злодеев', ''),
( null, ':יַשְׁמִיד', 'уничтожит', ''),
( null, 'תְּהִלַּת', 'хвалу', ''),
( null, 'יְיָ', 'господу', ''),
( null, 'יְדַבֶּר', 'произнесут', ''),
( null, 'פִּי', 'уста мои', ''),
( null, 'וִיבָרֵךְ', 'и будет благословлять', ''),
( null, 'כָּל־בָּשָׂר', 'все живое', ''),
( null, 'שֵׁם', 'имя', ''),
( null, 'קָדְשׁוֹ', 'святое его', ''),
( null, 'לְעוֹלָם', ' во веки', ''),
( null, ':וָעֶד', 'веков', ''),
( null, 'וַאֲנַֽחְנוּ', 'и мы', ''),
( null, 'נְבָרֵךְ', 'будем благословлять', ''),
( null, 'יָהּ', 'бога', ''),
( null, 'מֵעַתָּה', 'отныне', ''),
( null, 'וְעַד־עוֹלָם', 'и вовек', ''),
( null, ':הַלְלוּיָהּ', 'восхвалите бога ', 'last'),
( null, 'עמידה', 'Стояние', 'title');
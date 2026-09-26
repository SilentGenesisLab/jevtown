// Every word of the interface, in Ukrainian and in English. The Worker reads it too, for the page
// head a messenger shows. Persona attributes (interests, jobs, cities) carry their own labels in
// shared/vocab.js; what Jev is asked is always English and lives in shared/presets.js.

const number = (locale) => (value) => Math.round(value).toLocaleString(locale);
const plural = (n, [one, few, many]) => (n % 10 === 1 && n % 100 !== 11 ? one : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? few : many);
/** How many people a town has: the 10,000 and whoever visitors moved in. */
const residentsUk = (people) => `${number('uk')(people)} ${plural(people, ['мешканець', 'мешканці', 'мешканців'])}`;
const residentsEn = (people) => `${number('en')(people)} residents`;

const uk = {
  lang: 'uk',
  langName: 'Українська',
  brand: 'Jevtown',
  n: number('uk'),
  and: (items) => (items.length > 1 ? `${items.slice(0, -1).join(', ')} і ${items.at(-1)}` : items[0]),
  title: 'Соцмережа, де пишуть люди, а читають 10 000 ШІ-персон',
  lead: 'Напишіть пост, оголошення, товар чи заголовок. За кілька секунд місто відреагує: більшість проскролить, хтось лайкне, зарепостить, заблокує, напише продавцю або купить.',
  headLine: (post) => `У місті побачили ${number('uk')(post.reach)} · зупинилися ${number('uk')(post.stopped)} · раді ${number('uk')(post.glad)} · незадоволені ${number('uk')(post.sorry)}. Кожну реакцію дала модель Jev.`,
  hero: { eyebrow: 'Зайде?', title: ['Тут пишуть люди,', 'а читають 10\u00a0000 ШІ-персон.'], write: 'Написати пост', demo: 'Як це працює' },
  show: {
    kicker: 'Збережений приклад · українські мешканці', title: 'Одне оголошення про iPhone, написане двома способами',
    variants: ['З деталями й оглядом', 'Тільки передоплата'], map: 'Кожна точка це одна персона з 10 000',
    loading: 'Завантажуємо приклад…', unavailable: 'Приклад не завантажився. Свій текст можна запостити нижче.',
    findings: [
      (c) => [`${number('uk')(c.byReaction.wrote)} ${plural(c.byReaction.wrote, ['персона написала', 'персони написали', 'персон написали'])} продавцю.`, `Оголошення пішло у другу хвилю й дісталося ${number('uk')(c.reach)} персон.`],
      (c) => ['Кожна третя персона запідозрила обман.', `Оголошення зупинилось після першої хвилі. Обман запідозрили ${number('uk')(c.byReaction.scam)} із ${number('uk')(c.reach)}.`],
    ],
  },
  verdict: {
    label: 'Підсумок',
    everyone: 'Зайшло всьому місту', everyoneAudience: 'Зайшло всій аудиторії', stopped: (wave) => `Не зайшло далі ${['першої', 'другої', 'третьої'][wave] ?? `${wave + 1}-ї`} хвилі`,
    reached: (reach, people) => `Текст побачили ${number('uk')(reach)} із ${number('uk')(people)} ${plural(people, ['мешканця', 'мешканців', 'мешканців'])}.`,
    reachedAudience: (reach, people) => `Текст побачили ${number('uk')(reach)} із ${number('uk')(people)} ${plural(people, ['людини', 'людей', 'людей'])} в аудиторії.`,
    balance: (glad, sorry) => `Раді: ${number('uk')(glad)}. Незадоволені: ${number('uk')(sorry)}.`,
    why: 'Текст іде далі, коли радих у хвилі більше, ніж незадоволених, щонайменше на 10% хвилі.',
    // What the town said when asked (shared/presets.js:ASKS): the answer given most often, the two or three about equal at the top, or none.
    asked: {
      passed: { one: (answer) => `Найчастіша причина проскролити: ${answer}.`, equal: (list) => `Ті, хто проскролив, приблизно однаково часто називали: ${list}.`, none: 'Серед тих, хто проскролив, жодна причина не виділяється.' },
      annoyed: { one: (answer) => `Найчастіша причина роздратування: ${answer}.`, equal: (list) => `Ті, кого роздратувало, приблизно однаково часто називали: ${list}.`, none: 'Серед тих, кого роздратувало, жодна причина не виділяється.' },
      hook: { one: (answer) => `Що найчастіше зупиняло тих, кому сподобалось: ${answer}.`, equal: (list) => `Що зупиняло тих, кому сподобалось, приблизно однаково часто: ${list}.`, none: 'Серед того, що зупиняло тих, кому сподобалось, нічого не виділяється.' },
    },
  },
  compare: { title: 'Порівняти тексти версій', previous: 'Попередня версія', current: 'Ця версія' },
  presets: {
    post: { name: 'Пост', hint: 'Пост для Telegram, X чи будь-якої стрічки', promise: 'побачите, хто лайкне, зарепостить або заблокує', placeholder: 'Місяць писав код тільки з ШІ-асистентом і порахував…' },
    listing: { name: 'Оголошення', hint: 'Оголошення про продаж, як на OLX', promise: 'побачите, хто напише продавцю і що спитає', placeholder: 'iPhone 13, 128 ГБ, синій. Акумулятор 86%, не ремонтувався. 14 000 грн, Львів…' },
    product: { name: 'Товар', hint: 'Товар або послуга з цінами', promise: 'побачите, хто купить і за скільки', placeholder: 'Шкарпетки з мериносової вовни для бігу, які не пахнуть після тижня тренувань…' },
    headline: { name: 'Заголовок', hint: 'Заголовок статті, листа чи лендингу', promise: 'побачите, хто клікне, а кого він роздратує', placeholder: 'Я замінив ранкову рутину однією звичкою на 4 хвилини. Ось що змінилося за місяць' },
  },
  mapKeys: 'Стрілки вибирають людину, Enter відкриває її сторінку',
  nav: { feed: 'Стрічка', crowd: 'Місто', me: 'Мешканець', write: 'Написати', back: 'Назад', about: 'Кожну реакцію дає Jev, модель, яка відповідає ймовірностями й не пише тексту.' },
  compose: {
    // The crowd is picked by the language of the text, so there is nothing to switch.
    readers: { uk: (people) => `Читатиме українське місто, ${residentsUk(people)}`, en: (people) => `Читатиме англомовне місто, ${residentsUk(people)}` },
    readersAudience: { uk: 'Читатимуть лише ті з українського міста, хто підходить під опис', en: 'Читатимуть лише ті з англомовного міста, хто підходить під опис' },
    audience: 'Аудиторія', audienceLabel: 'Для кого цей текст', audiencePlaceholder: 'Наприклад: айтівці, які цікавляться стартапами',
    audienceNote: 'Необов’язково. Текст прочитають лише ті мешканці, хто підходить під опис. Місто знає про кожного роботу, вік, захоплення, гроші й те, що людина хоче купити, тож з опису враховується лише це. Опис видно поруч із постом, а кожна нова версія піде до таких самих людей.',
    audienceRemove: 'Прибрати аудиторію', audienceKept: (text) => `Нову версію прочитає та сама аудиторія: ${text}`, withAudience: 'Перевірити на аудиторії',
    nickname: 'Ваше ім’я або нік', anonymous: 'анонім', listed: 'У спільну стрічку', unlisted: 'Лише за посиланням',
    text: 'Текст', kind: 'Що ви пишете', prices: 'Ціни', currency: 'Валюта',
    ladder: {
      title: ['Ціни в', '· назвіть кілька'],
      note: 'Кожного, хто зупиниться на товарі, спитаємо, за яку найбільшу з цих цін він купить. Побачите, скільки покупців дає кожна ціна і яка з них заробляє найбільше.',
      add: 'ще ціна', remove: 'Прибрати ціну', price: (index) => `Ціна ${index}`,
    },
    go: 'Запостити', busy: 'Місто читає…', again: 'Запостити нову версію', cancel: 'Скасувати', edit: 'Редагувати',
  },
  feed: { order: 'Порядок стрічки', latest: 'Нові', top: 'Найдалі зайшли', empty: 'Тут поки порожньо. Ваш текст буде першим.', totals: (posts, reach) => `${number('uk')(posts)} ${plural(posts, ['текст', 'тексти', 'текстів'])} · ${number('uk')(reach)} показів персонам`, versions: (count) => `${count} ${plural(count, ['версія', 'версії', 'версій'])}` },
  ago: (ms) => {
    const minutes = Math.floor(ms / 60000);
    if (minutes < 1) return 'щойно';
    if (minutes < 60) return `${minutes} хв`;
    if (minutes < 60 * 24) return `${Math.floor(minutes / 60)} год`;
    if (minutes < 60 * 24 * 30) return `${Math.floor(minutes / (60 * 24))} дн`;
    return new Date(Date.now() - ms).toLocaleDateString('uk', { day: 'numeric', month: 'short' });
  },
  rail: { title: 'Місто', size: residentsUk, waiting: 'Чекають на ваш текст', waitingNote: 'Ніхто в місті ще нічого не бачив. Спершу текст побачать 600 людей, яким він найближчий.', voices: 'Голоси міста' },
  voices: { title: 'Голоси міста', note: 'Випадкові люди з тих, хто відреагував. Натисніть на людину, щоб відкрити її сторінку.', noteSaid: 'Випадкові люди з тих, хто відреагував, і кілька тих, хто проскролив, із відповіддю, яку Jev дав за кожного. Натисніть на людину, щоб відкрити її сторінку.', more: 'Показати ще', count: (shown, all) => `${number('uk')(shown)} з ${number('uk')(all)}`, nobody: 'Тут поки нікого.', wouldAsk: ['спитали б', 'спитав би', 'спитала б'], details: 'питає про деталь, якої немає в тексті', nothing: 'бере без питань' },
  ladder: { none: 'не купить за жодну з цих цін', upTo: (cost) => `купить лише за ${cost} або дешевше`, at: (cost) => `купить за ${cost}, не дорожче`, even: (cost) => `купить навіть за ${cost}` },
  post: { back: 'Стрічка', replay: 'Показати ще раз', everyone: 'усі', asking: { listing: 'питання', product: 'ціни' }, filter: 'Натисніть на реакцію, щоб побачити цих людей на карті', picture: (totals) => `Карта міста, точка на кожного мешканця. Побачили ${number('uk')(totals.reach)}, зупинилися ${number('uk')(totals.stopped)}, раді ${number('uk')(totals.glad)}, незадоволені ${number('uk')(totals.sorry)}.` },
  crowd: {
    title: 'Місто', lead: '10 000 постійних мешканців і ті, кого заселили відвідувачі. Кожен має ім’я, роботу, захоплення, характер і гаманець. Сусіди на карті схожі: згори молодші, знизу старші, а кожне захоплення має свій район. Нові мешканці селяться під містом.',
    lenses: { interest: 'Захоплення', field: 'Робота', age: 'Вік', temper: 'Характер', budget: 'Гроші' },
    everyone: 'Усі', count: (count, everyone) => (everyone ? 'з усього міста' : `${number('uk')(count)} у цій групі`), people: 'Кілька з них', hint: 'Наведіть на точку, щоб побачити людину. Натисніть, щоб відкрити її сторінку.',
  },
  looks: { dark: 'не побачили', scrolled: 'проскролили', stopped: 'зупинилися', glad: 'раді', spreads: 'понесли далі', sorry: 'незадоволені', hollow: 'невідомо' },
  counters: { reach: 'побачили', stopped: 'зупинилися', glad: 'раді', sorry: 'незадоволені' },
  reactions: {
    scrolled_past: ['проскролили', 'проскролив', 'проскролила'], read: ['прочитали', 'прочитав', 'прочитала'], liked: ['лайкнули', 'лайкнув', 'лайкнула'],
    disliked: ['дизлайкнули', 'дизлайкнув', 'дизлайкнула'], reposted: ['зарепостили', 'зарепостив', 'зарепостила'], followed: ['підписалися', 'підписався', 'підписалася'],
    blocked: ['заблокували', 'заблокував', 'заблокувала'], cant_tell: ['невідомо', 'невідомо', 'невідомо'],
    opened: ['відкрили', 'відкрив', 'відкрила'], saved: ['зберегли', 'зберіг', 'зберегла'], wrote: ['написали продавцю', 'написав продавцю', 'написала продавцю'],
    scam: ['запідозрили обман', 'запідозрив обман', 'запідозрила обман'],
    looked: ['подивилися', 'подивився', 'подивилася'], cart: ['додали в кошик', 'додав у кошик', 'додала в кошик'], bought: ['купили', 'купив', 'купила'],
    glanced: ['зачепило, без кліку', 'зачепило, без кліку', 'зачепило, без кліку'], clicked: ['клікнули', 'клікнув', 'клікнула'], annoyed: ['роздратувалися', 'роздратувався', 'роздратувалася'],
  },
  run: {
    scoring: 'Jev вирішує, кому це показати…',
    wave: (index, total) => `Хвиля ${index + 1} · разом ${number('uk')(total)} ${plural(total, ['людина', 'людини', 'людей'])}`,
    went: 'пішло далі', stayed: 'зупинилось', moodNote: (mood) => `Настрій хвилі ${mood}: частка радих мінус частка незадоволених. Далі текст іде від +0.10.`,
    followup: (people) => `Розпитуємо тих, хто зупинився: ${number('uk')(people)}`,
    asking: 'Ставимо кільком із тих, хто побачив, ще кілька питань…',
    travels: 'місту зайшло, іде далі', stops: 'далі не пішло',
    watching: 'Місто саме читає цей текст…', failed: 'Сталася помилка, місто не дочитало. Оновіть сторінку, щоб продовжити.', stale: 'Місто не дочитало цей текст. Нижче реакції тих, хто встиг.',
    done: (waves, seconds, usd) => `${waves} ${plural(waves, ['хвиля', 'хвилі', 'хвиль'])} · ${seconds.toFixed(0)} с · $${usd.toFixed(3)}`,
  },
  blocks: {
    shownNote: 'За кого алгоритм стрічки прийняв цей текст. Оцінки Jev від 0 до 1.',
    tabs: { stopped: 'Зупинилися', glad: 'Сподобалось', sorry: 'Роздратувало', shown: 'Кому показали', described: 'Аудиторія' },
    titles: { stopped: 'Хто зупинився', glad: 'Кому сподобалось', sorry: 'Кого роздратувало', shown: 'Кому показали', described: 'Хто в аудиторії' },
    segmentNote: (what, share) => `Групи, де це зачепило найбільшу частку людей. Серед усього міста ${what}: ${share}.`,
    segmentNoteAudience: (what, share) => `Групи, де це зачепило найбільшу частку людей. Серед усієї аудиторії ${what}: ${share}.`,
    describedNote: (people) => `Як Jev прочитав опис: для кожної названої частини групи, які підходять, з оцінками від 0 до 1. Текст могли побачити лише ${number('uk')(people)} ${plural(people, ['людина, яка підходить', 'людини, які підходять', 'людей, які підходять'])} під усі частини, решта міста його не бачила.`,
    unlistedAudience: 'Цей пост не потрапив у спільну стрічку через опис аудиторії, сторінка доступна лише за посиланням.',
    alike: 'Текст зайшов усім приблизно однаково, жодна група не виділилась. Ось найбільші з них.',
    bestPrice: (cost, buyers, revenue) => `Найбільше заробляє ${cost}: ${number('uk')(buyers)} ${plural(buyers, ['покупець', 'покупці', 'покупців'])}, виторг ${revenue}.`,
    nobody: 'Ніхто не виділився.',
    questions: 'Що спитають покупці', questionsNote: (asked) => `Перше питання до продавця від ${number('uk')(asked)} тих, хто зупинився.`,
    demand: 'Скільки готові заплатити', demandNote: (asked) => `Найвища ціна, за яку купили б ${number('uk')(asked)} тих, хто зупинився.`,
    buyers: 'покупців', revenue: 'виторг', best: 'найбільший виторг',
    versionDelta: 'проти попередньої версії',
    unlisted: 'Цей текст не потрапив у спільну стрічку, сторінка доступна лише за посиланням.',
    hiddenByAuthor: 'Автор не показує це у спільній стрічці.',
    annoyedGroup: (group, sorry, reached) => `Найчастіше роздратувалися в групі «${group}»: ${number('uk')(sorry)} з ${number('uk')(reached)} тих, хто побачив.`,
  },
  said: {
    tabs: { scrolled: 'Чому пройшли повз', sorry: 'Чому роздратувало', hook: 'Що зупинило', comment: 'Коментували б' },
    titles: { scrolled: 'Чому проскролили', sorry: 'Чому роздратувалися', hook: 'Що зупинило тих, кому сподобалось', comment: 'Що написали б у коментарях' },
    // Each is followed by `order`.
    notes: {
      scrolled: (asked) => `Спитали ${number('uk')(asked)} з тих, хто проскролив`, sorry: (asked) => `Спитали ${number('uk')(asked)} з тих, кого роздратувало`, hook: (asked) => `Спитали ${number('uk')(asked)} з тих, кому сподобалось`,
      comment: (asked) => `Спитали ${number('uk')(asked)} з тих, хто зупинився`,
    },
    order: ', у порядку, в якому стрічка показувала їм текст, тож здебільшого тих, для кого цей текст.',
    commentNote: '«Не коментує» теж відповідь, а частки порахано серед тих, про кого Jev щось зміг сказати.',
    point: 'Наведіть на відповідь, щоб побачити цих людей на карті.',
    lead: 'Виділено відповідь, яку давали найчастіше, або дві чи три майже рівні нагорі.',
    flat: 'Жодна відповідь не виділяється: нагорі більше трьох майже рівних.',
    drain: (share) => `Для ${share} опитаних ніщо в людині не підказувало відповіді. На смугах їх немає.`,
    split: (text, readers) => `${text} цих відповідей про сам текст, ${readers} про те, хто читав.`,
    labels: {
      why: { not_for_them: 'не цікаво й не потрібно', weak_opening: 'початок не чіпляє', unclear: 'незрозуміло, що це', too_long: 'задовго читати', nothing_new: 'нічого нового', distrust: 'не викликає довіри', tone: 'відштовхує тон', disagree: 'не збігається з поглядами', price: 'задорого', missing: 'бракує важливого' },
      hook: {
        example: 'конкретна цифра чи приклад', story: 'особиста історія', useful: 'корисна порада', humour: 'гумор', opinion: 'згода з думкою автора', opening: 'перше речення', topic: 'сама тема',
        price: 'ціна', details: 'деталі', trust: 'довіра до продавця', terms: 'умови угоди', need: 'просто потрібна річ',
        benefit: 'розв’язує їхню проблему', claims: 'переконливі обіцянки', guarantee: 'гарантія чи легке повернення',
        curiosity: 'цікавість', promise: 'обіцянка', detail: 'конкретна цифра чи деталь', news: 'звучить як новина',
      },
      comment: { adds_own: 'погоджується й додає свій досвід', question: 'питає автора', argues: 'сперечається чи вказує на помилку', thanks: 'дякує чи хвалить кількома словами', joke: 'жартує', tags: 'позначає друга', none: 'не коментує' },
    },
  },
  checks: {
    title: 'Як Jev читає сам текст',
    note: 'Це відповіді Jev про сам текст, а не реакції міста. На те, хто його побачить, вони не впливають.',
    labels: {
      point_first: { listing: 'Перше речення каже, що продається' },
      ask: { post: 'Зрозуміло, чого автор хоче від читача', listing: 'Сказано, як відбудеться угода', product: 'Сказано, що робити далі' },
      concrete: 'Є конкретна цифра, назва чи приклад',
    },
    values: { yes: 'так', no: 'ні', unclear: 'неясно' },
  },
  segments: { interest: (label) => `цікавляться: ${label}`, field: (label) => label, age: (label) => `${label} років`, temper: (label) => label, budget: (label) => label, shopping: (label) => `шукають: ${label}`, city: (label) => label },
  fields: { it: 'айтівці', creative: 'творчі професії', education: 'освітяни', medicine: 'медики', trades: 'майстри й будівельники', retail: 'продаж і сервіс', office: 'офісні працівники', finance: 'фінансисти', business: 'бізнес і продажі', public: 'держслужба й силовики', agriculture: 'фермери', transport: 'водії й кур’єри', home: 'у декреті', student: 'студенти', retired: 'пенсіонери' },
  tempers: { lurker: 'мовчуни', skeptic: 'скептики', supporter: 'добрі душі', enthusiast: 'ентузіасти', bargain_hunter: 'мисливці за знижками', trend_chaser: 'ловці трендів', nitpicker: 'прискіпи', troll: 'тролі' },
  answers: {
    available: 'Ще актуально?', negotiable: 'Торг можливий?', quick_discount: 'Поступитеся, якщо заберу сьогодні?', condition: 'Який стан, є подряпини?', defects: 'Усе працює, був у ремонті?',
    how_old: 'Скільки йому років, як багато користувалися?', why_selling: 'Чому продаєте?', original: 'Це оригінал?', documents: 'Є чек, коробка, документи чи гарантія?', included: 'Що в комплекті?',
    details: 'Технічна деталь, якої немає в тексті (акумулятор, пробіг, розмір, матеріал)', photos: 'Можна ще фото або відео?', delivery: 'Відправляєте? Хто платить за доставку?', pickup: 'Де й коли можна забрати?',
    try_first: 'Можна перевірити перед оплатою?', safe_deal: 'Можна через безпечну угоду або накладеним платежем?', exchange: 'Обмін розглядаєте?', hold: 'Притримаєте на кілька днів?', bulk: 'Є ще такі? Яка ціна за кілька?', nothing: 'Нічого не питають, одразу беруть',
  },
  persona: { lives: 'Живе тут', history: 'Що робить зі свіжими текстами', noHistory: 'Свіжі тексти сюди не дійшли.', shopping: 'Шукає', nothing: 'нічого не шукає', neighbours: 'Підсвічені ті, хто має те саме головне захоплення. Сусіди на карті схожі: той самий вік і ті самі інтереси.', newStreet: 'Підсвічені ті, хто має те саме головне захоплення. Нові мешканці селяться під містом у порядку приїзду, тож сусіди тут бувають різні.', since: (date) => `У місті з ${date}`, write: 'Написати пост', next: 'Сусіди', years: (age) => `${age} ${plural(age, ['рік', 'роки', 'років'])}` },
  blocked: {
    text: (reasons) => `Не запощено${reasons.length ? `: у тексті ${reasons.join(', ')}` : ''}. Перепишіть і спробуйте ще раз.`,
    audience: (reasons) => `Не запощено${reasons.length ? `: в описі аудиторії ${reasons.join(', ')}` : ''}. Перепишіть і спробуйте ще раз.`,
    reasons: { hate: 'ворожнеча до людей', sexual: 'відвертий сексуальний зміст', violence: 'погрози', private_data: 'чужі особисті дані', illegal: 'продаж забороненого', insult: 'образи', gibberish: 'набір символів без змісту' },
  },
  me: {
    eyebrow: 'Новий мешканець', editEyebrow: 'Ваш мешканець', title: 'Заселіть мешканця в Jevtown',
    lead: 'Вигадайте людину, і вона оселиться в місті поруч із 10\u00a0000 інших. Вона читатиме нові пости й реагуватиме на них, як усі тут, а відповідатиме за неї Jev. Вона може бути схожа на вас, а може бути ким завгодно.',
    form: {
      name: 'Ім’я', gender: 'Хто це', genders: { female: 'вона', male: 'він' }, age: 'Вік', job: 'Чим займається', city: 'Місто',
      interests: 'Захоплення', interestsNote: 'Оберіть до трьох. Перше стане головним і визначить район на мапі.', main: 'головне', chosen: 'Обрано', drop: 'Прибрати',
      temper: 'Як поводиться у стрічці', budget: 'Гроші',
      about: 'Своїми словами', aboutNote: 'це прочитає лише Jev', aboutHint: 'Що чіпляє цю людину в стрічці, а що дратує. Наприклад: «Не терплю капсу й історій успіху, зате читаю все про собак».',
      shown: 'Ім’я, вік, заняття, місто й захоплення побачать усі в місті. Це вигаданий персонаж, тож справжніх прізвищ, адрес і телефонів не вписуйте.',
      create: 'Заселити', save: 'Зберегти', cancel: 'Скасувати',
    },
    years: (age) => `${age} ${plural(age, ['рік', 'роки', 'років'])}`,
    edit: 'Змінити', editTitle: 'Змінити мешканця', page: 'Сторінка в місті',
    moved: (date) => `У місті з ${date}. Читає нові пости разом з усіма.`,
    hello: { title: (name) => `${name} тепер у Jevtown`, note: (number) => `Будинок № ${number}. Нові пости доходитимуть сюди, як до всіх у місті.` },
    feed: 'Що робить зі свіжими постами',
    tune: {
      step: 'Крок 1', title: 'Покажіть, як ваш мешканець поводиться у стрічці',
      note: (cards) => `${cards} постів. Про кожен скажіть, що з ним зробить ваш мешканець. Якщо він схожий на вас, відповідайте за себе. Jev запам’ятає відповіді й звірятиметься з ними щоразу, коли відповідає за нього, і в стрічці теж.`,
      start: 'Почати', more: 'Ще коло', kept: (n) => `Jev пам’ятає ${n} ${plural(n, ['реакцію', 'реакції', 'реакцій'])}`,
    },
    test: {
      step: 'Крок 2', title: 'Чи відповість Jev так само, як ви?',
      note: (cards) => `${cards} нових постів. Спершу відповідаєте ви, потім Jev. Ваших відповідей на ці пости він не бачить.`,
      start: 'Спробувати', again: 'Ще спроба', locked: 'Спершу пройдіть крок 1.', busy: 'Jev відповідає за мешканця…', retry: 'Спробувати ще раз',
    },
    over: (cards) => `Ви відповіли на всі ${cards} постів.`,
    quiz: { ask: 'Що ваш мешканець зробить із цим постом?', progress: (index, total) => `${index} із ${total}`, back: 'Попередній пост', leave: 'Вийти' },
    // What the resident does with a post; Jev's guess is shown in the same words.
    do: { scrolled_past: 'Проскролить', read: 'Прочитає', liked: 'Лайкне', disliked: 'Дизлайкне', reposted: 'Зарепостить', followed: 'Підпишеться', blocked: 'Заблокує' },
    result: {
      title: 'Остання спроба', withAnswers: 'відповідей Jev збіглися з вашими', byDescription: 'збіглося б лише за описом, без кроку 1',
      rounds: 'Усі спроби', round: (index) => `Спроба ${index}`, of: (hit, asked) => `${hit} із ${asked}`, plainShort: (hit) => `за описом ${hit}`,
    },
    answers: { title: 'Що Jev знає про мешканця', note: 'Усі ваші відповіді. Коли Jev відповідає за мешканця, він бере шість найближчих до поста.', empty: 'Поки що лише опис.', you: 'Ви сказали', guessed: 'Jev сказав те саме', missed: (word) => `Jev сказав: «${word}»` },
    lives: 'Місце на карті', pick: 'Оберіть захоплення, і побачите його район.',
    nearest: 'Схожий мешканець міста',
    reset: 'Забути реакції', resetSure: 'Jev забуде всі реакції та спроби цього мешканця. Продовжити?',
    remove: 'Виселити мешканця', removeSure: 'Опис і всі реакції буде стерто, а в будинку оселиться хтось інший із міста. Продовжити?',
    errors: {
      bad_profile: 'Потрібні ім’я, вік, «вона» чи «він», хоча б одне захоплення і те, як мешканець поводиться у стрічці.',
      blocked: (reasons) => `Мешканця не заселено${reasons.length ? `: в описі ${reasons.join(', ')}` : ''}. Перепишіть і спробуйте ще раз.`,
      full: 'У місті поки немає вільних будинків.',
      limit: 'На сьогодні досить. Спробуйте завтра.', jev: 'Jev зараз не відповідає. Нічого не загубилося, спробуйте ще раз.',
    },
  },
  card: { open: 'Картка поста', saw: (people) => `із ${number('uk')(people)} ${plural(people, ['мешканця', 'мешканців', 'мешканців'])} побачили`, sawAudience: (people) => `із ${number('uk')(people)} ${plural(people, ['людини', 'людей', 'людей'])} аудиторії побачили`, share: 'Поділитися', download: 'Зберегти PNG', close: 'Закрити' },
  share: 'Скопіювати посилання', copied: 'Скопійовано', version: 'версія',
  // An audience in words (shared/feed.js:partsOf): the parts of a person the town knows, and how the page names them.
  audience: {
    line: (text) => `Аудиторія: ${text}`,
    size: (people) => `${number('uk')(people)} ${plural(people, ['мешканець підходить', 'мешканці підходять', 'мешканців підходять'])} під кожну частину опису`,
    part: { field: 'Робота', age: 'Вік', interest: 'Захоплення', budget: 'Гроші', shopping: 'Хоче купити' },
    partWord: { field: 'роботу', age: 'вік', interest: 'захоплення', budget: 'гроші', shopping: 'покупки' },
    open: (list) => `Опис не обмежує: ${list}.`,
    outside: 'поза аудиторією',
    picture: 'Решта міста поза аудиторією і лишається темною.',
    legend: { dark: 'поза аудиторією', waiting: 'в аудиторії, не побачили' },
  },
  errors: { limit: 'На сьогодні ліміт постів вичерпано. Приходьте завтра або запустіть свою копію з власним ключем.', empty: 'Напишіть текст, хоч один рядок.', bad_text: 'Текст має бути від 1 до 2000 символів.', bad_prices: 'Виправте позначені ціни: потрібні щонайменше дві різні, числами.', no_key: 'На сервері не задано ключ Jev.', not_yours: 'Нову версію може запостити лише автор, із того самого браузера.', bad_request: 'Запит не зрозуміло. Оновіть сторінку і спробуйте ще раз.', busy: 'Місто ще читає попередню версію. Зачекайте, поки дочитає.', not_found: 'Такої сторінки немає.', error: 'Щось пішло не так. Спробуйте ще раз.',
    no_fit: 'Місто не може розібрати, хто підходить під цей опис. Опишіть людей через роботу, вік, захоплення, гроші або те, що вони хочуть купити. Щоб читало все місто, залиште поле порожнім.',
    few_fit: (fits, least) => `Під кожну частину опису в місті підходять: ${number('uk')(fits)}. Для перевірки потрібно щонайменше ${least}. Назвіть менше або ширше.`,
    bad_audience: 'Опис аудиторії має бути не довшим за 200 символів.' },
};

const en = {
  lang: 'en',
  langName: 'English',
  brand: 'Jevtown',
  n: number('en'),
  and: (items) => (items.length > 1 ? `${items.slice(0, -1).join(', ')} and ${items.at(-1)}` : items[0]),
  title: 'A social network where people write and 10,000 AI personas read',
  lead: 'Post a text, a listing, a product or a headline. Within seconds the town reacts: most scroll past, some like, repost, block, write to the seller or buy.',
  headLine: (post) => `Seen by ${number('en')(post.reach)} in town · ${number('en')(post.stopped)} stopped · ${number('en')(post.glad)} glad · ${number('en')(post.sorry)} sorry. Every reaction comes from Jev.`,
  hero: { eyebrow: 'Will it land?', title: ['Here people write', 'and 10,000 AI personas read.'], write: 'Write a post', demo: 'See how it works' },
  show: {
    kicker: 'A saved example · the Ukrainian residents', title: 'One iPhone listing, written two ways',
    variants: ['Details, pay on inspection', 'Advance payment only'], map: 'Every dot is one persona out of 10,000',
    loading: 'Loading the example…', unavailable: 'The example did not load. You can post your own text below.',
    findings: [
      (c) => [`${number('en')(c.byReaction.wrote)} personas wrote to the seller.`, `The listing went into a second wave and reached ${number('en')(c.reach)} personas.`],
      (c) => ['One persona in three smelled a scam.', `The listing stopped after the first wave. ${number('en')(c.byReaction.scam)} of ${number('en')(c.reach)} smelled a scam.`],
    ],
  },
  verdict: {
    label: 'The result',
    everyone: 'It landed with the whole town', everyoneAudience: 'It landed with the whole audience', stopped: (wave) => `It did not get past the ${['first', 'second', 'third'][wave] ?? `${wave + 1}th`} wave`,
    reached: (reach, people) => `${number('en')(reach)} of ${number('en')(people)} residents saw it.`,
    reachedAudience: (reach, people) => `${number('en')(reach)} of the ${number('en')(people)} people in the audience saw it.`,
    balance: (glad, sorry) => `Glad: ${number('en')(glad)}. Sorry: ${number('en')(sorry)}.`,
    why: 'A text travels on when the glad outnumber the sorry by at least 10% of the wave.',
    // What the town said when asked (shared/presets.js:ASKS): the answer given most often, the two or three about equal at the top, or none.
    asked: {
      passed: { one: (answer) => `The reason given most often for scrolling past: ${answer}.`, equal: (list) => `Those who scrolled past gave these reasons about equally often: ${list}.`, none: 'No single reason stands out among those who scrolled past.' },
      annoyed: { one: (answer) => `The reason given most often for getting annoyed: ${answer}.`, equal: (list) => `Those who got annoyed gave these reasons about equally often: ${list}.`, none: 'No single reason stands out among those who got annoyed.' },
      hook: { one: (answer) => `What most often stopped the people who liked it: ${answer}.`, equal: (list) => `What stopped the people who liked it, about equally often: ${list}.`, none: 'Nothing stands out in what stopped the people who liked it.' },
    },
  },
  compare: { title: 'Compare the texts', previous: 'Previous version', current: 'This version' },
  presets: {
    post: { name: 'Post', hint: 'A post for Telegram, X or any feed', promise: 'you will see who likes, reposts or blocks it', placeholder: 'I wrote code with an AI assistant only for a month and counted…' },
    listing: { name: 'Listing', hint: 'A for-sale listing, as on Craigslist', promise: 'you will see who writes to the seller and what they ask', placeholder: 'iPhone 13, 128 GB, blue. Battery 86%, never repaired. $320, Austin…' },
    product: { name: 'Product', hint: 'A product or a service with its prices', promise: 'you will see who buys it and at what price', placeholder: 'Merino wool running socks that do not smell after a week of training…' },
    headline: { name: 'Headline', hint: 'The headline of an article, an email or a landing page', promise: 'you will see who clicks and whom it annoys', placeholder: 'I replaced my morning routine with one 4-minute habit. Here is what changed in 30 days' },
  },
  mapKeys: 'Arrows pick a person, Enter opens their page',
  nav: { feed: 'Feed', crowd: 'The town', me: 'Resident', write: 'Write', back: 'Back', about: 'Every reaction comes from Jev, a model that answers with probabilities and writes no text.' },
  compose: {
    readers: { uk: (people) => `The Ukrainian town will read it, ${residentsEn(people)}`, en: (people) => `The English-speaking town will read it, ${residentsEn(people)}` },
    readersAudience: { uk: 'Only the people of the Ukrainian town who fit the description will read it', en: 'Only the people of the English-speaking town who fit the description will read it' },
    audience: 'Audience', audienceLabel: 'Whom it is for', audiencePlaceholder: 'For example: people who work in IT and are into startups',
    audienceNote: 'Optional. Only the people in town who fit the description read the text. The town knows each person\'s work, age, interests, money and what they are looking to buy, so only these parts of the description count. It is shown with the post, and every new version goes to the same kind of people.',
    audienceRemove: 'Remove the audience', audienceKept: (text) => `The new version goes to the same audience: ${text}`, withAudience: 'Check it with an audience',
    nickname: 'Your name or nickname', anonymous: 'anonymous', listed: 'To the public feed', unlisted: 'By link only',
    text: 'Text', kind: 'What you are writing', prices: 'Prices', currency: 'Currency',
    ladder: {
      title: ['Prices in', '· name a few'],
      note: 'Everyone who stops at the product is asked for the highest of these prices they would pay. You will see how many buyers each price gets and which one earns the most.',
      add: 'another price', remove: 'Remove the price', price: (index) => `Price ${index}`,
    },
    go: 'Post', busy: 'The town is reading…', again: 'Post the new version', cancel: 'Cancel', edit: 'Edit',
  },
  feed: { order: 'Order of the feed', latest: 'Latest', top: 'Travelled furthest', empty: 'Nothing here yet. Your text will be the first.', totals: (posts, reach) => `${number('en')(posts)} text${posts === 1 ? '' : 's'} · seen ${number('en')(reach)} times`, versions: (count) => `${count} versions` },
  ago: (ms) => {
    const minutes = Math.floor(ms / 60000);
    if (minutes < 1) return 'now';
    if (minutes < 60) return `${minutes}m`;
    if (minutes < 60 * 24) return `${Math.floor(minutes / 60)}h`;
    if (minutes < 60 * 24 * 30) return `${Math.floor(minutes / (60 * 24))}d`;
    return new Date(Date.now() - ms).toLocaleDateString('en', { day: 'numeric', month: 'short' });
  },
  rail: { title: 'The town', size: residentsEn, waiting: 'Waiting for your text', waitingNote: 'Nobody in town has seen anything yet. A text is first shown to the 600 people it is closest to.', voices: 'Voices of the town' },
  voices: { title: 'Voices of the town', note: 'Random people out of those who reacted. Click a person to open their page.', noteSaid: 'Random people out of those who reacted, and some who scrolled past, with an answer Jev gave for each. Click a person to open their page.', more: 'Show more', count: (shown, all) => `${number('en')(shown)} of ${number('en')(all)}`, nobody: 'Nobody here yet.', wouldAsk: ['would ask', 'would ask', 'would ask'], details: 'asks about a detail the listing leaves out', nothing: 'takes it, no questions' },
  ladder: { none: 'would not buy at any of these prices', upTo: (cost) => `would buy only at ${cost} or less`, at: (cost) => `would buy at ${cost}, not above`, even: (cost) => `would buy even at ${cost}` },
  post: { back: 'Feed', replay: 'Replay', everyone: 'all', asking: { listing: 'questions', product: 'prices' }, filter: 'Click a reaction to see these people on the map', picture: (totals) => `A map of the town, a dot for every resident. ${number('en')(totals.reach)} saw it, ${number('en')(totals.stopped)} stopped, ${number('en')(totals.glad)} are glad, ${number('en')(totals.sorry)} are sorry.` },
  crowd: {
    title: 'The town', lead: '10,000 permanent residents and the people visitors moved in. Each has a name, a job, interests, a temper and a wallet. Neighbours on the map are alike: younger at the top, older at the bottom, and every interest has a district of its own. New residents settle under the town.',
    lenses: { interest: 'Interests', field: 'Work', age: 'Age', temper: 'Temper', budget: 'Money' },
    everyone: 'Everybody', count: (count, everyone) => (everyone ? 'out of the whole town' : `${number('en')(count)} in this group`), people: 'A few of them', hint: 'Hover a dot to see the person. Click to open their page.',
  },
  looks: { dark: 'not shown', scrolled: 'scrolled past', stopped: 'stopped', glad: 'glad', spreads: 'spread it', sorry: 'sorry', hollow: "can't tell" },
  counters: { reach: 'saw it', stopped: 'stopped', glad: 'glad', sorry: 'sorry' },
  reactions: Object.fromEntries(Object.entries({
    scrolled_past: 'scrolled past', read: 'read it', liked: 'liked it', disliked: 'disliked it', reposted: 'reposted it', followed: 'followed', blocked: 'blocked', cant_tell: "can't tell",
    opened: 'opened it', saved: 'saved it', wrote: 'wrote to the seller', scam: 'smelled a scam', looked: 'looked', cart: 'added to cart', bought: 'bought it',
    glanced: 'hooked, no click', clicked: 'clicked', annoyed: 'felt baited',
  }).map(([id, label]) => [id, [label, label, label]])),
  run: {
    scoring: 'Jev is deciding whom to show it to…',
    wave: (index, total) => `Wave ${index + 1} · ${number('en')(total)} people in total`,
    went: 'travelled on', stayed: 'stopped here', moodNote: (mood) => `Mood of the wave ${mood}: the share who were glad minus the share who were sorry. A text travels on from +0.10.`,
    followup: (people) => `Asking the ${number('en')(people)} who stopped`,
    asking: 'Asking some of those who saw it a few more questions…',
    travels: 'it landed, it travels further', stops: 'it stops here',
    watching: 'The town is reading this right now…', failed: 'Something failed and the town did not finish reading. Reload the page to go on.', stale: 'The town did not finish reading this text. Below are the reactions of those who did.',
    done: (waves, seconds, usd) => `${waves} wave${waves === 1 ? '' : 's'} · ${seconds.toFixed(0)} s · $${usd.toFixed(3)}`,
  },
  blocks: {
    shownNote: 'Whom the feed algorithm took this text for. Scores from Jev, 0 to 1.',
    tabs: { stopped: 'Stopped', glad: 'Liked it', sorry: 'Got annoyed', shown: 'Shown to', described: 'Audience' },
    titles: { stopped: 'Who stopped', glad: 'Who liked it', sorry: 'Who got annoyed', shown: 'Whom it was shown to', described: 'Who is in the audience' },
    segmentNote: (what, share) => `The groups where it caught the largest share of people. Across the whole town, ${what}: ${share}.`,
    segmentNoteAudience: (what, share) => `The groups where it caught the largest share of people. Across the audience, ${what}: ${share}.`,
    describedNote: (people) => `How Jev read the description: for each part it names, the groups that count, scored 0 to 1. Only the ${number('en')(people)} people who fit every part could see the text; the rest of the town did not.`,
    unlistedAudience: 'This post did not make it to the public feed because of its audience description; the page works by link only.',
    alike: 'It worked on everybody about alike, no group stood out. Here are the biggest ones.',
    bestPrice: (cost, buyers, revenue) => `${cost} earns the most: ${number('en')(buyers)} buyer${buyers === 1 ? '' : 's'}, revenue ${revenue}.`,
    nobody: 'Nobody stood out.',
    questions: 'What buyers would ask', questionsNote: (asked) => `The first question to the seller from the ${number('en')(asked)} who stopped.`,
    demand: 'What they would pay', demandNote: (asked) => `The highest price the ${number('en')(asked)} who stopped would buy at.`,
    buyers: 'buyers', revenue: 'revenue', best: 'earns the most',
    versionDelta: 'against the previous version',
    unlisted: 'This text did not make it to the public feed; the page works by link only.',
    hiddenByAuthor: 'The author keeps this out of the public feed.',
    annoyedGroup: (group, sorry, reached) => `The group most often annoyed among those who saw it: “${group}”, ${number('en')(sorry)} of ${number('en')(reached)}.`,
  },
  said: {
    tabs: { scrolled: 'Why they passed', sorry: 'Why annoyed', hook: 'What stopped them', comment: 'Would comment' },
    titles: { scrolled: 'Why they scrolled past', sorry: 'Why they got annoyed', hook: 'What stopped the people who liked it', comment: 'What they would write in the comments' },
    // Each is followed by `order`.
    notes: {
      scrolled: (asked) => `Asked of ${number('en')(asked)} people who scrolled past`, sorry: (asked) => `Asked of ${number('en')(asked)} people who got annoyed`, hook: (asked) => `Asked of ${number('en')(asked)} people who liked it`,
      comment: (asked) => `Asked of ${number('en')(asked)} people who stopped`,
    },
    order: ', in the order the feed showed them the text, so mostly those it was meant for.',
    commentNote: 'Not commenting is one of the answers, and the shares are among the people Jev could place.',
    point: 'Point at an answer to see these people on the map.',
    lead: 'Highlighted: the answer given most often, or the two or three at the top that are about equal.',
    flat: 'No answer stands out: more than three are about equal at the top.',
    drain: (share) => `For ${share} of those asked, nothing about the person hinted at an answer. The bars leave them out.`,
    split: (text, readers) => `${text} of these answers are about the text itself, ${readers} about who was reading it.`,
    labels: {
      why: { not_for_them: 'not for them', weak_opening: 'the opening does not hook', unclear: 'unclear what it is', too_long: 'too long to take in', nothing_new: 'nothing new', distrust: 'hard to believe', tone: 'off-putting tone', disagree: 'at odds with their views', price: 'too expensive', missing: 'something important is missing' },
      hook: {
        example: 'a concrete number or example', story: 'a personal story', useful: 'a tip they can use', humour: 'humour', opinion: 'an opinion they share', opening: 'the first sentence', topic: 'the topic itself',
        price: 'the price', details: 'the details', trust: 'trust in the seller', terms: 'the terms of the deal', need: 'simply needing it',
        benefit: 'it solves their problem', claims: 'believable claims', guarantee: 'a guarantee or an easy return',
        curiosity: 'curiosity', promise: 'the promise', detail: 'a concrete number or detail', news: 'it sounds new or important',
      },
      comment: { adds_own: 'agrees and adds their own experience', question: 'asks the author a question', argues: 'argues or points out a mistake', thanks: 'thanks or praises in a few words', joke: 'jokes', tags: 'tags a friend', none: 'would not comment' },
    },
  },
  checks: {
    title: 'How Jev reads the text',
    note: 'Jev’s answers about the text itself, not the town’s reactions. They do not change who sees it.',
    labels: {
      point_first: { listing: 'The first sentence says what is for sale' },
      ask: { post: 'Clear what readers should do', listing: 'Says how the deal is done', product: 'Says what to do next' },
      concrete: 'Has a concrete number, name or example',
    },
    values: { yes: 'yes', no: 'no', unclear: 'unclear' },
  },
  segments: { interest: (label) => `into ${label}`, field: (label) => label, age: (label) => `aged ${label}`, temper: (label) => label, budget: (label) => label, shopping: (label) => `looking for ${label}`, city: (label) => label },
  fields: { it: 'IT people', creative: 'creatives', education: 'teachers', medicine: 'medics', trades: 'tradespeople', retail: 'retail and service', office: 'office workers', finance: 'finance people', business: 'business and sales', public: 'public servants', agriculture: 'farmers', transport: 'drivers and couriers', home: 'stay-at-home parents', student: 'students', retired: 'pensioners' },
  tempers: { lurker: 'lurkers', skeptic: 'skeptics', supporter: 'supporters', enthusiast: 'enthusiasts', bargain_hunter: 'bargain hunters', trend_chaser: 'trend chasers', nitpicker: 'nitpickers', troll: 'trolls' },
  answers: null, // English answers are the ones Jev reads, from shared/presets.js
  persona: { lives: 'Lives here', history: 'What they do with fresh texts', noHistory: 'Fresh texts did not reach them.', shopping: 'Looking for', nothing: 'not looking for anything', neighbours: 'Lit up are the people with the same main interest. Neighbours on the map are alike: the same age and the same interests.', newStreet: 'Lit up are the people with the same main interest. New residents settle under the town in the order they came, so neighbours here can be anybody.', since: (date) => `In town since ${date}`, write: 'Write a post', next: 'Neighbours', years: (age) => `${age} years old` },
  blocked: {
    text: (reasons) => `Not posted${reasons.length ? `: the text has ${reasons.join(', ')}` : ''}. Rewrite it and try again.`,
    audience: (reasons) => `Not posted${reasons.length ? `: the audience description has ${reasons.join(', ')}` : ''}. Rewrite it and try again.`,
    reasons: { hate: 'hatred of people', sexual: 'explicit sexual content', violence: 'threats', private_data: "somebody's private data", illegal: 'an offer of something illegal', insult: 'insults', gibberish: 'no meaning, only characters' },
  },
  me: {
    eyebrow: 'A new resident', editEyebrow: 'Your resident', title: 'Move a resident into Jevtown',
    lead: 'Make up a person, and they settle in town next to the other 10,000. They will read new posts and react to them like everybody here, and Jev will answer for them. They may be a lot like you, or anybody at all.',
    form: {
      name: 'Name', gender: 'Who is it', genders: { female: 'she', male: 'he' }, age: 'Age', job: 'What they do', city: 'City',
      interests: 'Interests', interestsNote: 'Pick up to three. The first becomes the main one and decides the district on the map.', main: 'main', chosen: 'Chosen', drop: 'Remove',
      temper: 'How they behave in a feed', budget: 'Money',
      about: 'In their own words', aboutNote: 'only Jev reads this', aboutHint: 'What hooks this person in a feed and what annoys them. For example: “I can’t stand all caps and success stories, but I read anything about dogs.”',
      shown: 'Everybody in town sees the name, the age, the job, the city and the interests. This is a made-up character, so leave out real surnames, addresses and phone numbers.',
      create: 'Move in', save: 'Save', cancel: 'Cancel',
    },
    years: (age) => `${age} years old`,
    edit: 'Change', editTitle: 'Change the resident', page: 'Their page in town',
    moved: (date) => `In town since ${date}. Reads new posts along with everybody.`,
    hello: { title: (name) => `${name} lives in Jevtown now`, note: (number) => `House No. ${number}. New posts will come here the way they come to everybody in town.` },
    feed: 'What they do with fresh posts',
    tune: {
      step: 'Step 1', title: 'Show how your resident behaves in a feed',
      note: (cards) => `${cards} posts. Say what your resident does with each. If they are like you, answer for yourself. Jev keeps the answers and goes by them whenever it answers for the resident, in the feed too.`,
      start: 'Start', more: 'Another round', kept: (n) => `Jev remembers ${n} ${n === 1 ? 'reaction' : 'reactions'}`,
    },
    test: {
      step: 'Step 2', title: 'Will Jev answer the way you do?',
      note: (cards) => `${cards} new posts. You answer first, then Jev. It does not see your answers to these posts.`,
      start: 'Try it', again: 'Another try', locked: 'Do step 1 first.', busy: 'Jev is answering for the resident…', retry: 'Try again',
    },
    over: (cards) => `You have answered all ${cards} posts.`,
    quiz: { ask: 'What does your resident do with this post?', progress: (index, total) => `${index} of ${total}`, back: 'Previous post', leave: 'Leave' },
    do: { scrolled_past: 'Scrolls past', read: 'Reads it', liked: 'Likes it', disliked: 'Dislikes it', reposted: 'Reposts it', followed: 'Follows', blocked: 'Blocks' },
    result: {
      title: 'The latest try', withAnswers: 'of Jev’s answers matched yours', byDescription: 'would have matched from the description alone, without step 1',
      rounds: 'Every try', round: (index) => `Try ${index}`, of: (hit, asked) => `${hit} of ${asked}`, plainShort: (hit) => `description alone ${hit}`,
    },
    answers: { title: 'What Jev knows about the resident', note: 'All your answers. When Jev answers for the resident, it takes the six nearest to the post.', empty: 'Only the description so far.', you: 'You said', guessed: 'Jev said the same', missed: (word) => `Jev said: “${word}”` },
    lives: 'Their place on the map', pick: 'Pick an interest to see its district.',
    nearest: 'A resident much like them',
    reset: 'Forget the reactions', resetSure: 'Jev will forget all reactions and tries of this resident. Go on?',
    remove: 'Move the resident out', removeSure: 'The description and all reactions will be wiped, and somebody else from town will live in the house. Go on?',
    errors: {
      bad_profile: 'A name, an age, “she” or “he”, at least one interest and how the resident behaves in a feed are needed.',
      blocked: (reasons) => `The resident has not moved in${reasons.length ? `: the description has ${reasons.join(', ')}` : ''}. Rewrite it and try again.`,
      full: 'There are no free houses in town for now.',
      limit: 'That is enough for today. Try again tomorrow.', jev: 'Jev is not answering right now. Nothing is lost, try again.',
    },
  },
  card: { open: 'Post card', saw: (people) => `of ${number('en')(people)} residents saw it`, sawAudience: (people) => `of the ${number('en')(people)} in the audience saw it`, share: 'Share', download: 'Save the PNG', close: 'Close' },
  share: 'Copy the link', copied: 'Copied', version: 'version',
  audience: {
    line: (text) => `Audience: ${text}`,
    size: (people) => `${number('en')(people)} people in town fit every part of it`,
    part: { field: 'Work', age: 'Age', interest: 'Into', budget: 'Money', shopping: 'Looking to buy' },
    partWord: { field: 'work', age: 'age', interest: 'interests', budget: 'money', shopping: 'shopping' },
    open: (list) => `Left open by the description: ${list}.`,
    outside: 'not in the audience',
    picture: 'The rest of the town is outside the audience and stays dark.',
    legend: { dark: 'outside the audience', waiting: 'in the audience, not shown' },
  },
  errors: { limit: 'The daily limit of posts is used up. Come back tomorrow, or run your own copy with your own key.', empty: 'Write something first, a line is enough.', bad_text: 'The text must be 1 to 2000 characters.', bad_prices: 'Fix the marked prices: at least two different ones, as numbers.', no_key: 'No Jev key is set on the server.', not_yours: 'Only the author, from the same browser, can post a new version.', bad_request: 'The request was not understood. Reload the page and try again.', busy: 'The previous version is still running. Wait until it finishes.', not_found: 'There is no such page.', error: 'Something went wrong. Try again.',
    no_fit: 'The town cannot tell who fits this description. Describe people by their work, age, interests, money or what they are looking to buy. For the whole town, leave it empty.',
    few_fit: (fits, least) => `People in town who fit every part of the description: ${number('en')(fits)}. A check needs at least ${least}. Name fewer things, or broader ones.`,
    bad_audience: 'The audience description must be at most 200 characters.' },
};

/** 中文没有复数变化，量词固定用「位居民」。 */
const residentsZh = (people) => `${number('zh')(people)} 位居民`;

/**
 * 中文界面。
 *
 * 注意：镇上只有乌克兰人和英语使用者两拨人群（vocab.js 的 POOLS），
 * 所以中文界面下「被阅读」的仍然是英语小镇（app.js:homePool 把 zh 落到 en）。
 * 人名和城市名沿用英文原样 —— 都是专有名词，回退比硬翻更不容易出洋相。
 * 兴趣、职业、年龄、性格、消费等**类别标签**是翻译过的（vocab.js 里有 zh），
 * 所以界面读起来是完整的中文。
 */
const zh = {
  lang: 'zh',
  langName: '中文',
  brand: 'Jevtown',
  n: number('zh'),
  and: (items) => (items.length > 1 ? `${items.slice(0, -1).join('、')} 和 ${items.at(-1)}` : items[0]),
  title: '一个由人写作、一万个 AI 人格阅读的社交网络',
  lead: '发一段文字、一条转让、一个商品或者一个标题。几秒之内小镇就会做出反应：多数人划过去，有人点赞、转发、拉黑、给卖家留言，或者直接下单。',
  headLine: (post) => `镇上 ${number('zh')(post.reach)} 人看到 · ${number('zh')(post.stopped)} 人停下 · ${number('zh')(post.glad)} 人喜欢 · ${number('zh')(post.sorry)} 人反感。每一个反应都来自 Jev。`,
  hero: { eyebrow: '发出去有人看吗？', title: ['这里是人写作，', '一万个 AI 人格阅读。'], write: '写一条', demo: '看看它怎么运作' },
  show: {
    kicker: '一份存档示例 · 乌克兰居民', title: '同一台 iPhone 的两种写法',
    variants: ['写清楚细节，当面验货再付款', '只接受预付'], map: '每一个点都是一万个人格中的一个',
    loading: '正在载入示例…', unavailable: '示例没能载入。你可以在下面发自己的文字。',
    findings: [
      (c) => [`${number('zh')(c.byReaction.wrote)} 个人格给卖家留了言。`, `这条信息进入第二波，触达了 ${number('zh')(c.reach)} 个人格。`],
      (c) => ['每三个人格里就有一个闻出了骗局的味道。', `这条信息在第一波后就停住了。${number('zh')(c.byReaction.scam)} 人闻出了骗局，看到它的总共 ${number('zh')(c.reach)} 人。`],
    ],
  },
  verdict: {
    label: '结果',
    everyone: '全镇都看到了', everyoneAudience: '整个受众都看到了', stopped: (wave) => `没能越过第${['一', '二', '三'][wave] ?? (wave + 1)}波`,
    reached: (reach, people) => `${number('zh')(people)} 位居民里有 ${number('zh')(reach)} 位看到了。`,
    reachedAudience: (reach, people) => `受众里的 ${number('zh')(people)} 人中有 ${number('zh')(reach)} 人看到了。`,
    balance: (glad, sorry) => `喜欢 ${number('zh')(glad)} 人，反感 ${number('zh')(sorry)} 人。`,
    why: '当一波里喜欢的人比反感的人多出至少这一波的 10%，文字才会继续传播下去。',
    // 问镇子时得到的回答（shared/presets.js 的 ASKS）：最常见的那一项、并列的两三项、或者没有。
    asked: {
      passed: { one: (answer) => `划过去最常见的原因：${answer}。`, equal: (list) => `划过去的人提到这几种原因的频次差不多：${list}。`, none: '划过去的人里没有哪一种原因特别突出。' },
      annoyed: { one: (answer) => `反感最常见的原因：${answer}。`, equal: (list) => `反感的人提到这几种原因的频次差不多：${list}。`, none: '反感的人里没有哪一种原因特别突出。' },
      hook: { one: (answer) => `最常让喜欢它的人停下来的：${answer}。`, equal: (list) => `让喜欢它的人停下来的原因，频次差不多的是：${list}。`, none: '让喜欢它的人停下来的原因里，没有哪一项突出。' },
    },
  },
  compare: { title: '对比两个版本', previous: '上一版', current: '这一版' },
  presets: {
    post: { name: '帖子', hint: '发在 Telegram、X 或任何信息流里的帖子', promise: '你会看到谁点赞、转发或拉黑', placeholder: '我整整一个月只用 AI 助手写代码，然后把发生的事数了数…' },
    listing: { name: '转让信息', hint: '一条二手转让，像分类信息网站那样', promise: '你会看到谁给卖家留言、都问了什么', placeholder: 'iPhone 13，128G，蓝色。电池 86%，没修过。2000 元，同城面交…' },
    product: { name: '商品', hint: '一个商品或服务，连同价格', promise: '你会看到谁会买、在什么价位买', placeholder: '美利奴羊毛跑步袜，连着训练一周也不臭…' },
    headline: { name: '标题', hint: '一篇文章、一封邮件或一个落地页的标题', promise: '你会看到谁点进去、谁觉得烦', placeholder: '我用一个 4 分钟的习惯换掉了整套晨间流程。30 天后的变化如下' },
  },
  mapKeys: '方向键选人，回车打开他的页面',
  nav: { feed: '信息流', crowd: '小镇', me: '居民', write: '写一条', back: '返回', about: '每一个反应都来自 Jev —— 一个用概率作答、不写文字的模型。' },
  compose: {
    readers: { uk: (people) => `由乌克兰小镇阅读，共 ${residentsZh(people)}`, en: (people) => `由英语小镇阅读，共 ${residentsZh(people)}` },
    readersAudience: { uk: '只有乌克兰小镇里符合这段描述的人会读到它', en: '只有英语小镇里符合这段描述的人会读到它' },
    audience: '受众', audienceLabel: '写给谁看', audiencePlaceholder: '例如：在 IT 行业工作、关注创业的人',
    audienceNote: '可选。只有镇上符合这段描述的人会读到这段文字。小镇知道每个人的职业、年龄、兴趣、收入和想买的东西，所以描述里只有这几类信息算数。它会跟着帖子一起显示，之后每个新版本也发给同一批人。',
    audienceRemove: '去掉受众限定', audienceKept: (text) => `新版本发给同一批人：${text}`, withAudience: '带受众限定测一次',
    nickname: '你的名字或昵称', anonymous: '匿名', listed: '进入公开信息流', unlisted: '仅通过链接访问',
    text: '正文', kind: '你要写什么', prices: '价格', currency: '货币',
    ladder: {
      title: ['价格单位', '· 写几个价位'],
      note: '每个在商品前停下来的人，都会被问这些价位里他最高愿意付哪个。你会看到每个价位有多少买家，以及哪一个赚得最多。',
      add: '再加一个价位', remove: '删掉这个价位', price: (index) => `价位 ${index}`,
    },
    go: '发布', busy: '小镇正在阅读…', again: '发布新版本', cancel: '取消', edit: '编辑',
  },
  feed: { order: '信息流排序', latest: '最新', top: '传播最远', empty: '这里还没有内容。你的文字会是第一条。', totals: (posts, reach) => `${number('zh')(posts)} 条文字 · 被看过 ${number('zh')(reach)} 次`, versions: (count) => `${count} 个版本` },
  ago: (ms) => {
    const minutes = Math.floor(ms / 60000);
    if (minutes < 1) return '刚刚';
    if (minutes < 60) return `${minutes} 分钟前`;
    if (minutes < 60 * 24) return `${Math.floor(minutes / 60)} 小时前`;
    if (minutes < 60 * 24 * 30) return `${Math.floor(minutes / (60 * 24))} 天前`;
    return new Date(Date.now() - ms).toLocaleDateString('zh', { month: 'numeric', day: 'numeric' });
  },
  rail: { title: '小镇', size: residentsZh, waiting: '等待你的文字', waitingNote: '镇上还没有人看过任何东西。一段文字会先给离它最近的 600 个人看。', voices: '小镇的声音' },
  voices: { title: '小镇的声音', note: '从做出反应的人里随机抽取。点一个人可以打开他的页面。', noteSaid: '从做出反应的人里随机抽取，也包括一些划过去的人，每人附一条 Jev 给出的回答。点一个人可以打开他的页面。', more: '显示更多', count: (shown, all) => `${number('zh')(shown)} / ${number('zh')(all)}`, nobody: '这里还没有人。', wouldAsk: ['会问', '会问', '会问'], details: '会追问一个转让信息里没写清楚的细节', nothing: '直接要了，没问题' },
  ladder: { none: '这些价位里一个都不会买', upTo: (cost) => `只会在 ${cost} 或更低时买`, at: (cost) => `会在 ${cost} 买，再高就不买`, even: (cost) => `就算 ${cost} 也会买` },
  post: { back: '信息流', replay: '重播', everyone: '全部', asking: { listing: '个问题', product: '个价位' }, filter: '点一个反应，看这些人在地图上的位置', picture: (totals) => `一张小镇的地图，每个点是一位居民。${number('zh')(totals.reach)} 人看到，${number('zh')(totals.stopped)} 人停下，${number('zh')(totals.glad)} 人喜欢，${number('zh')(totals.sorry)} 人反感。` },
  crowd: {
    title: '小镇', lead: '一万名常住居民，加上访客搬进来的人。每个人都有一个名字、一份工作、几个兴趣、一种脾气和一个钱包。地图上挨着的人彼此相似：越靠上越年轻，越靠下越年长，每一种兴趣都有自己的街区。新居民会安置在镇子下方。',
    lenses: { interest: '兴趣', field: '职业', age: '年龄', temper: '脾气', budget: '收入' },
    everyone: '所有人', count: (count, everyone) => (everyone ? '在全镇范围内' : `这一组有 ${number('zh')(count)} 人`), people: '其中几位', hint: '鼠标悬停看这个人。点击打开他的页面。',
  },
  looks: { dark: '没被展示', scrolled: '划过去', stopped: '停下', glad: '喜欢', spreads: '转发了', sorry: '反感', hollow: '说不清' },
  counters: { reach: '看到', stopped: '停下', glad: '喜欢', sorry: '反感' },
  reactions: Object.fromEntries(Object.entries({
    scrolled_past: '划过去', read: '读了', liked: '点赞', disliked: '不喜欢', reposted: '转发', followed: '关注', blocked: '拉黑', cant_tell: '说不清',
    opened: '点开了', saved: '收藏', wrote: '给卖家留言', scam: '怀疑是骗局', looked: '看了看', cart: '加入购物车', bought: '下单了',
    glanced: '被吸引但没点', clicked: '点进去', annoyed: '觉得被标题党骗了',
  }).map(([id, label]) => [id, [label, label, label]])),
  run: {
    scoring: 'Jev 正在判断该给谁看…',
    wave: (index, total) => `第 ${index + 1} 波 · 累计 ${number('zh')(total)} 人`,
    went: '继续传播', stayed: '停在这里', moodNote: (mood) => `本波的情绪值 ${mood}：喜欢的人占比减去反感的人占比。超过 +0.10 就会继续传播。`,
    followup: (people) => `正在追问停下来的 ${number('zh')(people)} 个人`,
    asking: '正在向看过的人追问几个问题…',
    travels: '它站住了，继续往外传', stops: '它停在这里',
    watching: '小镇正在阅读…', failed: '中间出了点问题，小镇没能读完。刷新页面可以接着看。', stale: '小镇没能读完这段文字。下面是读到的人给出的反应。',
    done: (waves, seconds, usd) => `${waves} 波 · ${seconds.toFixed(0)} 秒 · $${usd.toFixed(3)}`,
  },
  blocks: {
    shownNote: '信息流算法认为这段文字是写给谁的。分数来自 Jev，0 到 1。',
    tabs: { stopped: '停下的人', glad: '喜欢的人', sorry: '反感的人', shown: '展示给了', described: '受众' },
    titles: { stopped: '谁停下来了', glad: '谁喜欢', sorry: '谁反感', shown: '展示给了谁', described: '受众里有谁' },
    segmentNote: (what, share) => `在哪些人群里抓到的比例最高。就全镇而言，${what}：${share}。`,
    segmentNoteAudience: (what, share) => `在哪些人群里抓到的比例最高。就受众而言，${what}：${share}。`,
    describedNote: (people) => `Jev 是怎么读这段描述的：它点名的每一部分、算数的人群，分数 0 到 1。只有符合全部条件的 ${number('zh')(people)} 个人能看到这段文字，镇上其余的人看不到。`,
    unlistedAudience: '因为受众描述的原因，这条帖子没能进入公开信息流；只能通过链接访问。',
    alike: '它在各类人身上的效果都差不多，没有哪一组特别突出。以下是最大的几组。',
    bestPrice: (cost, buyers, revenue) => `${cost} 赚得最多：${number('zh')(buyers)} 位买家，收入 ${revenue}。`,
    nobody: '没有谁特别突出。',
    questions: '买家会问什么', questionsNote: (asked) => `停下来的 ${number('zh')(asked)} 个人，最先会问卖家的那个问题。`,
    demand: '他们愿意付多少', demandNote: (asked) => `停下来的 ${number('zh')(asked)} 个人里，最高愿意出的价。`,
    buyers: '买家', revenue: '收入', best: '赚得最多',
    versionDelta: '对比上一版',
    unlisted: '这段文字没能进入公开信息流；只能通过链接访问。',
    hiddenByAuthor: '作者把它挡在了公开信息流之外。',
    annoyedGroup: (group, sorry, reached) => `看到的人里最容易反感的群体：「${group}」，${number('zh')(reached)} 人中有 ${number('zh')(sorry)} 人。`,
  },
  said: {
    tabs: { scrolled: '为什么划过去', sorry: '为什么反感', hook: '什么让他们停下', comment: '会怎么评论' },
    titles: { scrolled: '为什么划过去', sorry: '为什么反感', hook: '什么让喜欢它的人停下来', comment: '他们会在评论区写什么' },
    notes: {
      scrolled: (asked) => `问的是 ${number('zh')(asked)} 位划过去的人`, sorry: (asked) => `问的是 ${number('zh')(asked)} 位反感的人`, hook: (asked) => `问的是 ${number('zh')(asked)} 位喜欢它的人`,
      comment: (asked) => `问的是 ${number('zh')(asked)} 位停下来的人`,
    },
    order: '，按信息流给他们看这段文字的顺序，所以多数是它本来就想找的人。',
    commentNote: '「不评论」本身就是选项之一，而这里的占比是在 Jev 能定位的人当中算的。',
    point: '指向一个回答，就能在地图上看到这些人。',
    lead: '高亮的是：出现最多的那个回答，或者并列在最前面的两三个。',
    flat: '没有哪个回答突出：最前面并列的超过三个。',
    drain: (share) => `在 ${share} 的被问者身上，关于这个人没有任何线索能指向某个回答。柱子把这些人排除在外。`,
    split: (text, readers) => `这些回答里，${text} 是关于文字本身的，${readers} 是关于读它的人的。`,
    labels: {
      why: { not_for_them: '跟他们的生活无关', weak_opening: '开头没有勾住人', unclear: '看不出来是什么', too_long: '太长，读不进去', nothing_new: '没什么新鲜的', distrust: '不太可信', tone: '语气让人不舒服', disagree: '跟他们的看法相左', price: '太贵了', missing: '缺了重要的信息' },
      hook: {
        example: '一个具体的数字或例子', story: '一段个人经历', useful: '一条用得上的建议', humour: '好笑', opinion: '一个他们认同的观点', opening: '第一句话', topic: '就是话题本身',
        price: '价格', details: '细节', trust: '对卖家的信任', terms: '交易方式', need: '单纯是需要它',
        benefit: '它能解决自己的问题', claims: '说法可信', guarantee: '有质保或者退货容易',
        curiosity: '好奇', promise: '这个承诺', detail: '一个具体的数字或细节', news: '听起来很新、很重要',
      },
      comment: { adds_own: '表示认同，并补充自己的经历', question: '问作者一个问题', argues: '反驳，或者指出一个错误', thanks: '道谢或简单夸两句', joke: '讲个笑话', tags: '艾特一个朋友', none: '不会评论' },
    },
  },
  checks: {
    title: 'Jev 是怎么读这段文字的',
    note: '这是 Jev 对文字本身的回答，不是小镇的反应。它不会改变谁能看到这条内容。',
    labels: {
      point_first: { listing: '第一句话说了在卖什么' },
      ask: { post: '读者该做什么很清楚', listing: '说明了交易怎么进行', product: '说明了下一步做什么' },
      concrete: '有具体的数字、名字或例子',
    },
    values: { yes: '是', no: '否', unclear: '不清楚' },
  },
  segments: { interest: (label) => `喜欢${label}`, field: (label) => label, age: (label) => `${label}`, temper: (label) => label, budget: (label) => label, shopping: (label) => `想买${label}`, city: (label) => label },
  fields: { it: 'IT 从业者', creative: '创意工作者', education: '教师', medicine: '医护', trades: '技术工人', retail: '零售与服务', office: '办公室职员', finance: '金融从业者', business: '商业与销售', public: '公职人员', agriculture: '农民', transport: '司机与快递员', home: '全职家长', student: '学生', retired: '退休人员' },
  tempers: { lurker: '潜水党', skeptic: '怀疑派', supporter: '热心人', enthusiast: '爱转发的人', bargain_hunter: '比价达人', trend_chaser: '追热点的人', nitpicker: '挑刺的人', troll: '杠精' },
  answers: null, // 英文回答才是 Jev 真正读的那份，在 shared/presets.js 里
  persona: { lives: '住在这里', history: '他们如何对待新文字', noHistory: '新文字没有触达他们。', shopping: '想买', nothing: '没有特别想买的', neighbours: '亮起来的是主兴趣相同的人。地图上挨着的人彼此相似：年龄相同，兴趣也相同。', newStreet: '亮起来的是主兴趣相同的人。新居民按搬来的顺序安置在镇子下方，所以这里挨着的人可能什么样都有。', since: (date) => `入住于 ${date}`, write: '写一条', next: '邻居', years: (age) => `${age} 岁` },
  blocked: {
    text: (reasons) => `没有发布${reasons.length ? `：这段文字含有${reasons.join('、')}` : ''}。改写之后再试。`,
    audience: (reasons) => `没有发布${reasons.length ? `：受众描述含有${reasons.join('、')}` : ''}。改写之后再试。`,
    reasons: { hate: '针对人群的仇恨', sexual: '露骨的性内容', violence: '威胁', private_data: '他人的隐私信息', illegal: '违法的交易', insult: '侮辱', gibberish: '没有意义，只有乱码' },
  },
  me: {
    eyebrow: '一位新居民', editEyebrow: '你的居民', title: '把一位居民搬进 Jevtown',
    lead: '编一个人物，他会在镇上其他的 10000 人旁边安家。他会和别人一样阅读新帖子并做出反应，由 Jev 替他作答。他可以很像你，也可以完全是另一个人。',
    form: {
      name: '名字', gender: '是谁', genders: { female: '她', male: '他' }, age: '年龄', job: '做什么工作', city: '城市',
      interests: '兴趣', interestsNote: '最多选三个。第一个会成为主兴趣，决定他在地图上的街区。', main: '主兴趣', chosen: '已选', drop: '移除',
      temper: '在信息流里的行为方式', budget: '收入',
      about: '用他自己的话说', aboutNote: '只有 Jev 会读这段', aboutHint: '什么样的话题能勾住这个人、什么会让他烦。例如：「我最受不了全大写和成功学，但关于狗的内容我都看。」',
      shown: '镇上所有人都能看到名字、年龄、职业、城市和兴趣。这是虚构角色，请不要写真实姓名、住址和电话。',
      create: '搬进来', save: '保存', cancel: '取消',
    },
    years: (age) => `${age} 岁`,
    edit: '修改', editTitle: '修改这位居民', page: '他在镇上的页面',
    moved: (date) => `入住于 ${date}。会和所有人一起阅读新帖子。`,
    hello: { title: (name) => `${name} 现在住在 Jevtown 了`, note: (number) => `门牌号 ${number}。新帖子会像送到镇上每个人那里一样送到这里。` },
    feed: '他们如何对待新帖子',
    tune: {
      step: '第 1 步', title: '演示你的居民在信息流里怎么表现',
      note: (cards) => `${cards} 条帖子。说说你的居民会怎么处理每一条。如果他很像你，就按你自己的选择来。Jev 会记住这些回答，此后替这位居民作答时都会参考，信息流里也一样。`,
      start: '开始', more: '再来一轮', kept: (n) => `Jev 记住了 ${n} 个反应`,
    },
    test: {
      step: '第 2 步', title: 'Jev 会和你答得一样吗？',
      note: (cards) => `${cards} 条新帖子。你先答，然后 Jev 答。它看不到你对这些帖子的回答。`,
      start: '试试看', again: '再试一次', locked: '请先完成第 1 步。', busy: 'Jev 正在替这位居民作答…', retry: '再试一次',
    },
    over: (cards) => `你已经答完了全部 ${cards} 条帖子。`,
    quiz: { ask: '你的居民会怎么处理这条帖子？', progress: (index, total) => `${index} / ${total}`, back: '上一条', leave: '离开' },
    do: { scrolled_past: '划过去', read: '读了', liked: '点赞', disliked: '不喜欢', reposted: '转发', followed: '关注', blocked: '拉黑' },
    result: {
      title: '最近一次测试', withAnswers: '的 Jev 回答和你一致', byDescription: '仅凭描述、不做第 1 步就能答对的比例',
      rounds: '每一次测试', round: (index) => `第 ${index} 次`, of: (hit, asked) => `${hit} / ${asked}`, plainShort: (hit) => `仅凭描述 ${hit}`,
    },
    answers: { title: 'Jev 关于这位居民知道什么', note: '你所有的回答。Jev 替这位居民作答时，会取跟这条帖子最接近的六条。', empty: '目前只有描述。', you: '你说', guessed: 'Jev 答得一样', missed: (word) => `Jev 说：「${word}」` },
    lives: '他在地图上的位置', pick: '选一个兴趣看它的街区。',
    nearest: '一位和他很像的居民',
    reset: '忘掉这些反应', resetSure: 'Jev 会忘掉这位居民的所有反应和测试。继续吗？',
    remove: '把居民搬走', removeSure: '描述和所有反应都会被清空，另一个人会住进这间房子。继续吗？',
    errors: {
      bad_profile: '需要名字、年龄、「她」或「他」、至少一个兴趣，以及这位居民在信息流里的行为方式。',
      blocked: (reasons) => `居民没有搬进来${reasons.length ? `：描述含有${reasons.join('、')}` : ''}。改写之后再试。`,
      full: '镇上暂时没有空房子了。',
      limit: '今天到此为止，明天再试。', jev: 'Jev 暂时没有回应。什么都不会丢，再试一次。',
    },
  },
  card: { open: '帖子卡片', saw: (people) => `在 ${number('zh')(people)} 位居民中看到`, sawAudience: (people) => `在受众的 ${number('zh')(people)} 人中看到`, share: '分享', download: '保存为 PNG', close: '关闭' },
  share: '复制链接', copied: '已复制', version: '版本',
  audience: {
    line: (text) => `受众：${text}`,
    size: (people) => `镇上有 ${number('zh')(people)} 人符合它的每一项`,
    part: { field: '职业', age: '年龄', interest: '兴趣', budget: '收入', shopping: '想买' },
    partWord: { field: '职业', age: '年龄', interest: '兴趣', budget: '收入', shopping: '想买的东西' },
    open: (list) => `描述没有限定：${list}。`,
    outside: '不在受众里',
    picture: '镇上其余的人不在受众里，保持暗色。',
    legend: { dark: '不在受众里', waiting: '在受众里，尚未展示' },
  },
  errors: { limit: '今天的发布次数用完了。明天再来，或者用你自己的 key 跑一份。', empty: '先写点东西，一行就够。', bad_text: '正文长度需要在 1 到 2000 个字符之间。', bad_prices: '修正标出的价格：至少两个不同的数字。', no_key: '服务器上没有配置 Jev 的 key。', not_yours: '只有作者、并且是同一个浏览器，才能发布新版本。', bad_request: '这个请求没被理解。刷新页面再试。', busy: '上一个版本还在跑。等它结束。', not_found: '没有这个页面。', error: '出了点问题，再试一次。',
    no_fit: '小镇判断不出谁符合这段描述。请用职业、年龄、兴趣、收入或者想买的东西来描述，想要全镇就把这里留空。',
    few_fit: (fits, least) => `镇上符合描述每一项的人有 ${number('zh')(fits)} 位。一次检查至少需要 ${least} 位。少写几项，或者写得更宽泛一些。`,
    bad_audience: '受众描述最多 200 个字符。' },
};

export const DICTIONARIES = { uk, en, zh };

// Fixed vocabularies a persona is built from. Jev reads the English label, the interface shows
// the label of its language. Ids are stable: stored reactions and links depend on them.

/**
 * Interests, laid out as the persona grid sees them: 5 rows of 8, youngest row first. A persona's
 * main interest is the nearest cell, so people with the same interest and age sit next to each other.
 * `field` is the job field such people often work in, `shopping` what they are often looking to buy.
 */
export const INTEREST_COLUMNS = 8;
export const INTERESTS = [
  // 18–27
  { id: 'games', en: 'video games', uk: 'відеоігри', zh: '电子游戏', shopping: 'console' },
  { id: 'anime', en: 'anime', uk: 'аніме', zh: '动漫', shopping: 'books' },
  { id: 'memes', en: 'memes and internet culture', uk: 'меми та інтернет-культура', zh: '梗图与网络文化' },
  { id: 'pop_music', en: 'pop music', uk: 'попмузика', zh: '流行音乐', shopping: 'gift' },
  { id: 'fashion', en: 'fashion', uk: 'мода', zh: '时尚', field: 'retail', shopping: 'clothes' },
  { id: 'beauty', en: 'beauty and skincare', uk: 'краса та догляд', zh: '美容护肤', field: 'retail', shopping: 'beauty' },
  { id: 'student_life', en: 'student life', uk: 'студентське життя', zh: '校园生活', shopping: 'laptop' },
  { id: 'crypto', en: 'crypto', uk: 'криптовалюти', zh: '加密货币', field: 'finance' },
  // 24–36
  { id: 'programming', en: 'programming', uk: 'програмування', zh: '编程', field: 'it', shopping: 'laptop' },
  { id: 'ai_tools', en: 'AI tools', uk: 'ШІ-інструменти', zh: 'AI 工具', field: 'it', shopping: 'courses' },
  { id: 'startups', en: 'startups', uk: 'стартапи', zh: '创业', field: 'business' },
  { id: 'design', en: 'design', uk: 'дизайн', zh: '设计', field: 'creative', shopping: 'laptop' },
  { id: 'photography', en: 'photography', uk: 'фотографія', zh: '摄影', field: 'creative', shopping: 'phone' },
  { id: 'travel', en: 'travel', uk: 'подорожі', zh: '旅行', shopping: 'trip' },
  { id: 'fitness', en: 'gym and fitness', uk: 'спортзал і фітнес', zh: '健身', shopping: 'sports_gear' },
  { id: 'cycling', en: 'running and cycling', uk: 'біг і велосипед', zh: '跑步与骑行', shopping: 'bicycle' },
  // 33–46
  { id: 'parenting', en: 'parenting', uk: 'виховання дітей', zh: '育儿', field: 'home', shopping: 'kids' },
  { id: 'renovation', en: 'home renovation', uk: 'ремонт житла', zh: '房屋装修', field: 'trades', shopping: 'tools' },
  { id: 'cooking', en: 'cooking', uk: 'кулінарія', zh: '烹饪', shopping: 'appliances' },
  { id: 'cars', en: 'cars', uk: 'автомобілі', zh: '汽车', field: 'transport', shopping: 'car' },
  { id: 'investing', en: 'investing', uk: 'інвестиції', zh: '投资', field: 'finance' },
  { id: 'personal_finance', en: 'personal finance', uk: 'особисті фінанси', zh: '个人理财', field: 'finance' },
  { id: 'career', en: 'career growth', uk: 'кар’єра', zh: '职业发展', field: 'office', shopping: 'courses' },
  { id: 'psychology', en: 'psychology', uk: 'психологія', zh: '心理学', field: 'medicine', shopping: 'books' },
  // 43–58
  { id: 'politics', en: 'news and politics', uk: 'новини та політика', zh: '新闻与时政', field: 'public' },
  { id: 'small_business', en: 'small business', uk: 'малий бізнес', zh: '小生意', field: 'business' },
  { id: 'real_estate', en: 'real estate', uk: 'нерухомість', zh: '房地产', field: 'business', shopping: 'rent' },
  { id: 'football', en: 'football', uk: 'футбол', zh: '足球', shopping: 'sports_gear' },
  { id: 'fishing', en: 'fishing', uk: 'рибалка', zh: '钓鱼', field: 'trades', shopping: 'sports_gear' },
  { id: 'history', en: 'history', uk: 'історія', zh: '历史', field: 'education', shopping: 'books' },
  { id: 'books', en: 'books', uk: 'книжки', zh: '读书', field: 'education', shopping: 'books' },
  { id: 'tv_series', en: 'movies and TV series', uk: 'фільми та серіали', zh: '电影与剧集' },
  // 52–80
  { id: 'gardening', en: 'gardening', uk: 'садівництво', zh: '园艺', field: 'agriculture', shopping: 'garden' },
  { id: 'summer_house', en: 'their summer house', uk: 'дача', zh: '乡间别墅', shopping: 'garden' },
  { id: 'health', en: 'health', uk: 'здоров’я', zh: '健康', field: 'medicine' },
  { id: 'faith', en: 'faith', uk: 'віра', zh: '信仰', field: 'public' },
  { id: 'crafts', en: 'knitting and crafts', uk: 'в’язання та рукоділля', zh: '编织与手工', shopping: 'gift' },
  { id: 'pets', en: 'pets', uk: 'домашні тварини', zh: '宠物', shopping: 'pets' },
  { id: 'volunteering', en: 'volunteering', uk: 'волонтерство', zh: '志愿服务', field: 'public' },
  { id: 'folk_music', en: 'classical and folk music', uk: 'класична й народна музика', zh: '古典与民乐', field: 'creative' },
];

/** Job fields. `group` is how the feed algorithm names the people of a field; `income` shifts the budget. */
export const FIELDS = {
  it: { group: 'people who work in IT', income: 1.2 },
  creative: { group: 'designers, photographers, writers and musicians', income: 0.2 },
  education: { group: 'teachers and lecturers', income: -0.3 },
  medicine: { group: 'doctors, nurses and pharmacists', income: 0 },
  trades: { group: 'builders, electricians, mechanics and other tradespeople', income: 0 },
  retail: { group: 'people who work in shops, cafes and salons', income: -0.5 },
  office: { group: 'office workers: accountants, lawyers, HR, bank clerks', income: 0.2 },
  finance: { group: 'people who work in finance', income: 0.8 },
  business: { group: 'business owners, sales and marketing people', income: 0.8 },
  public: { group: 'civil servants, police, soldiers and social workers', income: -0.2 },
  agriculture: { group: 'farmers', income: -0.2 },
  transport: { group: 'drivers and couriers', income: -0.3 },
  home: { group: 'stay-at-home parents', income: -0.4 },
  student: { group: 'students', income: -1 },
  retired: { group: 'pensioners', income: -1 },
};

export const JOBS = [
  { id: 'developer', field: 'it', en: 'software developer', uk: 'розробник', zh: '软件工程师' },
  { id: 'qa', field: 'it', en: 'QA engineer', uk: 'тестувальник', zh: '测试工程师' },
  { id: 'product_manager', field: 'it', en: 'product manager', uk: 'продакт-менеджер', zh: '产品经理' },
  { id: 'data_analyst', field: 'it', en: 'data analyst', uk: 'аналітик даних', zh: '数据分析师' },
  { id: 'designer', field: 'creative', en: 'designer', uk: 'дизайнер', zh: '设计师' },
  { id: 'photographer', field: 'creative', en: 'photographer', uk: 'фотограф', zh: '摄影师' },
  { id: 'copywriter', field: 'creative', en: 'copywriter', uk: 'копірайтер', zh: '文案' },
  { id: 'musician', field: 'creative', en: 'musician', uk: 'музикант', zh: '音乐人' },
  { id: 'teacher', field: 'education', en: 'school teacher', uk: 'шкільний учитель', zh: '中小学教师' },
  { id: 'lecturer', field: 'education', en: 'university lecturer', uk: 'викладач університету', zh: '大学讲师' },
  { id: 'tutor', field: 'education', en: 'tutor', uk: 'репетитор', zh: '家教' },
  { id: 'doctor', field: 'medicine', en: 'doctor', uk: 'лікар', zh: '医生' },
  { id: 'nurse', field: 'medicine', en: 'nurse', uk: 'медсестра', zh: '护士' },
  { id: 'pharmacist', field: 'medicine', en: 'pharmacist', uk: 'фармацевт', zh: '药剂师' },
  { id: 'electrician', field: 'trades', en: 'electrician', uk: 'електрик', zh: '电工' },
  { id: 'builder', field: 'trades', en: 'builder', uk: 'будівельник', zh: '建筑工人' },
  { id: 'mechanic', field: 'trades', en: 'car mechanic', uk: 'автомеханік', zh: '汽修工' },
  { id: 'welder', field: 'trades', en: 'welder', uk: 'зварювальник', zh: '焊工' },
  { id: 'shop_assistant', field: 'retail', en: 'shop assistant', uk: 'продавець', zh: '店员' },
  { id: 'barista', field: 'retail', en: 'barista', uk: 'бариста', zh: '咖啡师' },
  { id: 'hairdresser', field: 'retail', en: 'hairdresser', uk: 'перукар', zh: '理发师' },
  { id: 'accountant', field: 'office', en: 'accountant', uk: 'бухгалтер', zh: '会计' },
  { id: 'lawyer', field: 'office', en: 'lawyer', uk: 'юрист', zh: '律师' },
  { id: 'hr', field: 'office', en: 'HR manager', uk: 'HR-менеджер', zh: 'HR 主管' },
  { id: 'bank_clerk', field: 'finance', en: 'bank clerk', uk: 'працівник банку', zh: '银行柜员' },
  { id: 'financial_analyst', field: 'finance', en: 'financial analyst', uk: 'фінансовий аналітик', zh: '金融分析师' },
  { id: 'business_owner', field: 'business', en: 'small business owner', uk: 'власник малого бізнесу', zh: '小企业主' },
  { id: 'sales_manager', field: 'business', en: 'sales manager', uk: 'менеджер з продажу', zh: '销售经理' },
  { id: 'marketer', field: 'business', en: 'marketer', uk: 'маркетолог', zh: '市场营销' },
  { id: 'realtor', field: 'business', en: 'real estate agent', uk: 'рієлтор', zh: '房产中介' },
  { id: 'civil_servant', field: 'public', en: 'civil servant', uk: 'держслужбовець', zh: '公务员' },
  { id: 'police', field: 'public', en: 'police officer', uk: 'поліцейський', zh: '警察' },
  { id: 'soldier', field: 'public', en: 'soldier', uk: 'військовий', zh: '军人' },
  { id: 'social_worker', field: 'public', en: 'social worker', uk: 'соціальний працівник', zh: '社工' },
  { id: 'farmer', field: 'agriculture', en: 'farmer', uk: 'фермер', zh: '农民' },
  { id: 'truck_driver', field: 'transport', en: 'truck driver', uk: 'далекобійник', zh: '卡车司机' },
  { id: 'taxi_driver', field: 'transport', en: 'taxi driver', uk: 'таксист', zh: '出租车司机' },
  { id: 'courier', field: 'transport', en: 'courier', uk: 'кур’єр', zh: '快递员' },
  { id: 'home_parent', field: 'home', en: 'stay-at-home parent', uk: 'у декреті', zh: '全职家长' },
  { id: 'student', field: 'student', en: 'student', uk: 'студент', zh: '学生' },
  { id: 'retired', field: 'retired', en: 'pensioner', uk: 'пенсіонер', zh: '退休人员' },
];

export const AGE_GROUPS = [
  { id: 'a18', from: 18, group: 'people aged 18 to 24', en: '18–24', uk: '18–24', zh: '18–24 岁' },
  { id: 'a25', from: 25, group: 'people aged 25 to 34', en: '25–34', uk: '25–34', zh: '25–34 岁' },
  { id: 'a35', from: 35, group: 'people aged 35 to 44', en: '35–44', uk: '35–44', zh: '35–44 岁' },
  { id: 'a45', from: 45, group: 'people aged 45 to 59', en: '45–59', uk: '45–59', zh: '45–59 岁' },
  { id: 'a60', from: 60, group: 'people aged 60 and older', en: '60+', uk: '60+', zh: '60 岁以上' },
];

/** How a persona behaves in a feed. `line` is what Jev reads. */
export const TEMPERS = [
  { id: 'lurker', weight: 30, line: 'quiet lurker, rarely reacts', en: 'lurker', uk: 'мовчун', zh: '潜水党' },
  { id: 'skeptic', weight: 18, line: 'skeptical, distrusts ads and big claims', en: 'skeptic', uk: 'скептик', zh: '怀疑派' },
  { id: 'supporter', weight: 12, line: 'supportive, encourages people', en: 'supporter', uk: 'добра душа', zh: '热心人' },
  { id: 'enthusiast', weight: 12, line: 'enthusiastic, likes and shares easily', en: 'enthusiast', uk: 'ентузіаст', zh: '爱转发的人' },
  { id: 'bargain_hunter', weight: 10, line: 'bargain hunter, always compares prices', en: 'bargain hunter', uk: 'мисливець за знижками', zh: '比价达人' },
  { id: 'trend_chaser', weight: 8, line: 'chases trends, follows whatever is new', en: 'trend chaser', uk: 'ловець трендів', zh: '追热点的人' },
  { id: 'nitpicker', weight: 6, line: 'nitpicker, spots every mistake', en: 'nitpicker', uk: 'прискіпа', zh: '挑刺的人' },
  { id: 'troll', weight: 4, line: 'troll, enjoys picking fights', en: 'troll', uk: 'троль', zh: '杠精' },
];

export const BUDGETS = [
  { id: 'tight', level: -1, line: 'tight budget', group: 'people on a tight budget', en: 'tight budget', uk: 'рахує кожну гривню', zh: '手头紧' },
  { id: 'average', level: 0, line: 'average income', group: 'people with an average income', en: 'average income', uk: 'середній дохід', zh: '收入中等' },
  { id: 'comfortable', level: 1, line: 'comfortable income', group: 'people with a comfortable income', en: 'comfortable income', uk: 'добрий дохід', zh: '收入宽裕' },
  { id: 'wealthy', level: 2, line: 'wealthy', group: 'wealthy people', en: 'wealthy', uk: 'великі статки', zh: '家境富裕' },
];

/** `line` is empty for the middle value: most people are neither, and the persona line stays shorter. */
export const SPENDING = [
  { id: 'careful', weight: 40, line: 'careful with money', en: 'careful with money', uk: 'обережно витрачає', zh: '花钱谨慎' },
  { id: 'neutral', weight: 40, line: '', en: '', uk: '', zh: '' },
  { id: 'impulsive', weight: 20, line: 'buys on impulse', en: 'buys on impulse', uk: 'купує імпульсивно', zh: '冲动消费' },
];

/** What a persona is looking to buy right now; only the Listing and Product presets show it to Jev. */
export const SHOPPING = [
  { id: 'nothing', en: 'nothing in particular', uk: 'нічого конкретного', zh: '没有特别想买的' },
  { id: 'phone', en: 'a phone', uk: 'телефон', zh: '手机' },
  { id: 'laptop', en: 'a laptop', uk: 'ноутбук', zh: '笔记本电脑' },
  { id: 'car', en: 'a car', uk: 'авто', zh: '汽车' },
  { id: 'rent', en: 'an apartment to rent', uk: 'квартиру в оренду', zh: '租房' },
  { id: 'furniture', en: 'furniture', uk: 'меблі', zh: '家具' },
  { id: 'kids', en: "kids' things", uk: 'дитячі речі', zh: '儿童用品' },
  { id: 'clothes', en: 'clothes and shoes', uk: 'одяг і взуття', zh: '衣服鞋子' },
  { id: 'bicycle', en: 'a bicycle', uk: 'велосипед', zh: '自行车' },
  { id: 'appliances', en: 'home appliances', uk: 'побутову техніку', zh: '家电' },
  { id: 'garden', en: 'plants and garden tools', uk: 'рослини й садовий інвентар', zh: '植物和园艺工具' },
  { id: 'sports_gear', en: 'sports gear', uk: 'спортивне спорядження', zh: '运动装备' },
  { id: 'gift', en: 'a gift', uk: 'подарунок', zh: '礼物' },
  { id: 'books', en: 'books', uk: 'книжки', zh: '书' },
  { id: 'console', en: 'a game console', uk: 'ігрову приставку', zh: '游戏机' },
  { id: 'beauty', en: 'beauty products', uk: 'косметику', zh: '美妆产品' },
  { id: 'pets', en: 'pet supplies', uk: 'товари для тварин', zh: '宠物用品' },
  { id: 'tools', en: 'tools', uk: 'інструменти', zh: '工具' },
  { id: 'courses', en: 'an online course', uk: 'онлайн-курс', zh: '网课' },
  { id: 'trip', en: 'a vacation trip', uk: 'відпустку', zh: '度假旅行' },
];

/** Names run from the ones young people carry to the ones their grandparents carry. */
export const POOLS = {
  uk: {
    female: [
      ['Solomiia', 'Соломія'], ['Daryna', 'Дарина'], ['Sofia', 'Софія'], ['Alina', 'Аліна'], ['Anastasia', 'Анастасія'], ['Viktoria', 'Вікторія'],
      ['Khrystyna', 'Христина'], ['Yulia', 'Юлія'], ['Kateryna', 'Катерина'], ['Anna', 'Анна'], ['Maria', 'Марія'], ['Iryna', 'Ірина'],
      ['Oksana', 'Оксана'], ['Olena', 'Олена'], ['Natalia', 'Наталія'], ['Tetiana', 'Тетяна'], ['Svitlana', 'Світлана'], ['Olha', 'Ольга'],
      ['Larysa', 'Лариса'], ['Nadiia', 'Надія'], ['Liudmyla', 'Людмила'], ['Halyna', 'Галина'], ['Valentyna', 'Валентина'], ['Hanna', 'Ганна'],
    ],
    male: [
      ['Nazar', 'Назар'], ['Artem', 'Артем'], ['Denys', 'Денис'], ['Maksym', 'Максим'], ['Bohdan', 'Богдан'], ['Yaroslav', 'Ярослав'],
      ['Dmytro', 'Дмитро'], ['Roman', 'Роман'], ['Taras', 'Тарас'], ['Andrii', 'Андрій'], ['Oleksandr', 'Олександр'], ['Pavlo', 'Павло'],
      ['Serhii', 'Сергій'], ['Oleh', 'Олег'], ['Ihor', 'Ігор'], ['Yurii', 'Юрій'], ['Volodymyr', 'Володимир'], ['Mykhailo', 'Михайло'],
      ['Viktor', 'Віктор'], ['Ivan', 'Іван'], ['Mykola', 'Микола'], ['Petro', 'Петро'], ['Vasyl', 'Василь'], ['Stepan', 'Степан'],
    ],
    cities: [
      ['Kyiv', 'Київ', 20], ['Kharkiv', 'Харків', 9], ['Odesa', 'Одеса', 8], ['Dnipro', 'Дніпро', 8], ['Lviv', 'Львів', 8],
      ['Zaporizhzhia', 'Запоріжжя', 5], ['Vinnytsia', 'Вінниця', 4], ['Poltava', 'Полтава', 3], ['Chernihiv', 'Чернігів', 3], ['Cherkasy', 'Черкаси', 3],
      ['Ivano-Frankivsk', 'Івано-Франківськ', 3], ['Ternopil', 'Тернопіль', 3], ['Lutsk', 'Луцьк', 3], ['Rivne', 'Рівне', 3], ['Uzhhorod', 'Ужгород', 2],
      ['Chernivtsi', 'Чернівці', 3], ['Zhytomyr', 'Житомир', 3], ['Sumy', 'Суми', 3], ['Mykolaiv', 'Миколаїв', 4], ['Khmelnytskyi', 'Хмельницький', 3],
      ['Bila Tserkva', 'Біла Церква', 2], ['a village in Poltava region', 'село на Полтавщині', 3], ['a village in Lviv region', 'село на Львівщині', 3],
    ],
  },
  en: {
    female: [
      ['Mia', 'Мія'], ['Chloe', 'Хлоя'], ['Zoe', 'Зої'], ['Emma', 'Емма'], ['Olivia', 'Олівія'], ['Hannah', 'Ганна'],
      ['Emily', 'Емілі'], ['Ashley', 'Ешлі'], ['Jessica', 'Джессіка'], ['Sarah', 'Сара'], ['Rachel', 'Рейчел'], ['Amanda', 'Аманда'],
      ['Jennifer', 'Дженніфер'], ['Michelle', 'Мішель'], ['Lisa', 'Ліса'], ['Karen', 'Карен'], ['Susan', 'Сьюзен'], ['Deborah', 'Дебора'],
      ['Linda', 'Лінда'], ['Patricia', 'Патриція'], ['Barbara', 'Барбара'], ['Carol', 'Керол'], ['Margaret', 'Маргарет'], ['Dorothy', 'Дороті'],
    ],
    male: [
      ['Liam', 'Ліам'], ['Noah', 'Ноа'], ['Ethan', 'Ітан'], ['Tyler', 'Тайлер'], ['Jake', 'Джейк'], ['Ryan', 'Раян'],
      ['Josh', 'Джош'], ['Daniel', 'Деніел'], ['Matt', 'Метт'], ['Chris', 'Кріс'], ['Andrew', 'Ендрю'], ['Jason', 'Джейсон'],
      ['Brian', 'Браян'], ['Kevin', 'Кевін'], ['Mark', 'Марк'], ['Scott', 'Скотт'], ['David', 'Девід'], ['Michael', 'Майкл'],
      ['Steve', 'Стів'], ['John', 'Джон'], ['Robert', 'Роберт'], ['Richard', 'Річард'], ['Gary', 'Гері'], ['Frank', 'Френк'],
    ],
    cities: [
      ['New York', 'Нью-Йорк', 8], ['Los Angeles', 'Лос-Анджелес', 6], ['Chicago', 'Чикаго', 5], ['Austin', 'Остін', 4], ['Seattle', 'Сіетл', 4],
      ['Denver', 'Денвер', 3], ['Atlanta', 'Атланта', 4], ['Boston', 'Бостон', 3], ['Miami', 'Маямі', 3], ['Portland', 'Портленд', 3],
      ['Nashville', 'Нешвілл', 3], ['Phoenix', 'Фінікс', 3], ['a small town in Ohio', 'містечко в Огайо', 4], ['a small town in Texas', 'містечко в Техасі', 4],
      ['London', 'Лондон', 8], ['Manchester', 'Манчестер', 4], ['Leeds', 'Лідс', 2], ['Bristol', 'Бристоль', 2], ['Glasgow', 'Глазго', 2],
      ['Dublin', 'Дублін', 3], ['Toronto', 'Торонто', 5], ['Vancouver', 'Ванкувер', 3], ['Sydney', 'Сідней', 4], ['Melbourne', 'Мельбурн', 3],
    ],
  },
};

const byId = (list) => Object.fromEntries(list.map((item) => [item.id, item]));
export const INTEREST = byId(INTERESTS);
export const JOB = byId(JOBS);
export const AGE_GROUP = byId(AGE_GROUPS);
export const TEMPER = byId(TEMPERS);
export const BUDGET = byId(BUDGETS);
export const SPEND = byId(SPENDING);
export const SHOP = byId(SHOPPING);

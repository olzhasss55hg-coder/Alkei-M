/* ==========================================================================
   SCRIPT.JS - Әлкей Марғұлан тарихи порталы
   ========================================================================== */

// 1. АУДАРМАЛАР СӨЗДІГІ (TRANSLATIONS DICTIONARY)
const translations = {
    kk: {
        logo: "Әлкей Марғұлан",
        nav_bio: "Өмірбаяны",
        nav_research: "Тарихи зерттеулері",
        nav_expeditions: "Экспедициялары",
        nav_role: "Ғылыми рөлі",
        
        hero_pretitle: "Тарихи тұлға",
        hero_title: "Әлкей Марғұлан",
        hero_subtitle: "Қазақстан археология ғылымының негізін қалаушы, көрнекті ғалым, академик, этнограф және филолог.",
        hero_btn_more: "Толығырақ танысу",
        hero_btn_exp: "Экспедициялар",
        
        bio_title: "Өмірбаяны",
        bio_years: "1904 - 1985",
        bio_birthplace: "Павлодар облысы, Баянауыл ауданы",
        bio_lead: "Әлкей Хақанұлы Марғұлан — қазақ мәдениеті мен тарихын зерттеуде өлшеусіз із қалдырған әмбебап ғұлама ғалым.",
        bio_p1: "Ол Баянауылдың баурайында дүниеге келіп, жастайынан халықтық фольклор мен дастан-жырларды бойына сіңіріп өсті. Семей педтехникумын бітірген соң, Ленинград мемлекеттік университетінің шығыстану факультетінде білімін шыңдап, Түркітану және өнертану салаларын терең зерттеді.",
        bio_p2: "Марғұлан ғылыми қызметін филология мен әдебиеттен бастап, кейіннен Қазақстанның бай тарихы мен археологиясына біржола бет бұрды. Оның жетекшілігімен өткен археологиялық қазба жұмыстары қазақ даласында орта ғасырлық және қола дәуіріндегі өркениеттердің гүлденгенін әлемге паш етті.",
        
        bio_m1_t: "1929 - 1938 жылдар",
        bio_m1_d: "Ленинградтағы оқу және ғылыми ізденістер, алғашқы фольклортану мақалалары.",
        bio_m2_t: "1946 жыл",
        bio_m2_d: "Орталық Қазақстан археологиялық экспедициясының негізін қалауы және ұзақ жылғы зерттеулерінің бастауы.",
        bio_m3_t: "1958 жыл",
        bio_m3_d: "Тарих ғылымдарының докторы, Қазақ КСР Ғылым академиясының академигі атағын алуы.",
        
        res_title: "Тарихи зерттеулері",
        res_c1_t: "Беғазы-Дәндібай мәдениеті",
        res_c1_d: "Қола дәуіріне жататын бірегей көшпенділер мәдениетін ашып, жан-жақты зерттеді. Бұл зерттеу қазақ жерінде ежелден кен өндіру мен металлургияның дамығанын дәлелдеді.",
        res_c2_t: "Фольклор мен Шоқан мұрасы",
        res_c2_d: "Шоқан Уәлихановтың ғылыми мұрасын жинақтап, академиялық басылымын шығарды. Қазақтың «Манас», «Қозы Көрпеш - Баян Сұлу» дастандарын тарихи-әдеби тұрғыдан талдады.",
        res_c3_t: "Этнография және қолөнер",
        res_c3_d: "Ежелгі көшпенділердің сәулет өнері, бейнелеу өнері мен қолөнер бұйымдарын зерттеді. Қазақ ою-өрнектерінің символикалық мәнін ашқан іргелі еңбектер жазды.",
        res_btn_read: "Зерттеуді көру",
        
        exp_title: "Археологиялық экспедициялары",
        exp_map_t: "Орталық Қазақстан экспедициясы",
        exp_map_d: "Әлкей Марғұлан жетекшілік еткен атақты Орталық Қазақстан археологиялық экспедициясы Сарыарқа даласындағы ежелгі өркениеттер ошақтарын жүйелі түрде зерттеді. Бұл қазба жұмыстары далалық мәдениеттің ежелгі дәуірін қайта жаңғыртты.",
        exp_p1: "Беғазы обалары мен кешендері",
        exp_p2: "Ұлытау маңындағы көне қалалар (Басқамыр, Аяққамыр)",
        exp_p3: "Тамғалы шатқалындағы петроглифтер мен суреттер",
        exp_gal_title: "Экспедициялар тарихы және Жәдігерлер",
        
        exp_g1_t: "Орталық Қазақстан қазбалары",
        exp_g1_d: "Қола және ерте темір дәуіріне жататын қоныстар мен обаларды кең көлемде зерттеу жұмыстары басталды.",
        exp_g2_t: "Ұлытау мен Сырдария өңірі",
        exp_g2_d: "Ортағасырлық Басқамыр және Аяққамыр қалашықтарының сәулеттік құрылымдары мен суару жүйелері анықталды.",
        exp_g3_t: "Беғазы мазарларының зерттелуі",
        exp_g3_d: "Далалық билеушілер мен қолбасшыларға арналған алып тас мазарлардың құрылысы мен жерлеу дәстүрлері сипатталды.",
        
        role_title: "Ғылыми рөлі",
        stat1_label: "Ғылыми мақалалар",
        stat1_desc: "Тарих, филология және өнертану салаларында жарық көрген еңбектер",
        stat2_label: "Экспедициялар",
        stat2_desc: "Қазақстанның әр өңірінде жүргізілген далалық археологиялық зерттеулер",
        stat3_label: "Археология мектебі",
        stat3_desc: "Қазақстандық кәсіби археологтар мен тарихшылардың тұтас буынын дайындады",
        stat4_label: "Монографии",
        stat4_desc: "Қазақ мәдениеті, ежелгі сәулет өнері және эпикалық жырлар бойынша басылымдар",
        
        time1_t: "Ғылым Академиясын құрушылардың бірі",
        time1_d: "Қазақ КСР Ғылым академиясын ашуға белсене қатысып, оның академик-хатшысы болып сайланды.",
        time2_t: "Мемлекеттік сыйлық лауреаты",
        time2_d: "«Орталық Қазақстанның ежелгі мәдениеті» атты іргелі еңбегі үшін мемлекеттік марапатқа ие болды.",
        time3_t: "Еңбек Ері және Мәңгілік мұра",
        time3_d: "Ғылыми қызметіндегі жоғары жетістіктері мен отандық ғылымды дамытудағы зор еңбегі үшін Социалистік Еңбек Ері атағы берілді.",
        footer_text: "© Әлкей Марғұлан тарихи сайты. Барлық құқықтар қорғалған."
    },
    ru: {
        logo: "Алькей Маргулан",
        nav_bio: "Биография",
        nav_research: "Исторические труды",
        nav_expeditions: "Экспедиции",
        nav_role: "Научная роль",
        
        hero_pretitle: "Историческая личность",
        hero_title: "Алькей Маргулан",
        hero_subtitle: "Основатель казахстанской школы археологии, выдающийся ученый, академик, этнограф и филолог.",
        hero_btn_more: "Подробнее",
        hero_btn_exp: "Экспедиции",
        
        bio_title: "Биография",
        bio_years: "1904 - 1985",
        bio_birthplace: "Павлодарская область, Баянаульский район",
        bio_lead: "Алькей Хаканович Маргулан — ученый-энциклопедист, оставивший неизгладимый след в изучении казахской культуры и истории.",
        bio_p1: "Родившись у подножия Баянаульских гор, он с детства впитывал народный фольклор и героические сказания. После окончания Семипалатинского педтехникума оттачивал знания на восточном факультете Ленинградского государственного университета, углубленно изучая тюркологию и искусствоведение.",
        bio_p2: "Начав научную деятельность с филологии и литературы, Маргулан позже полностью посвятил себя богатейшей истории и археологии Казахстана. Археологические раскопки под его руководством открыли миру процветающие цивилизации эпохи бронзы и средневековья в казахских степях.",
        
        bio_m1_t: "1929 - 1938 годы",
        bio_m1_d: "Учеба и научные поиски в Ленинграде, публикация первых статей по фольклористике.",
        bio_m2_t: "1946 год",
        bio_m2_d: "Основание легендарной Центрально-Казахстанской археологической экспедиции и начало многолетних исследований.",
        bio_m3_t: "1958 год",
        bio_m3_d: "Получение степени доктора исторических наук и звания академика Академии наук Казахской ССР.",
        
        res_title: "Исторические исследования",
        res_c1_t: "Бегазы-Дандыбаевская культура",
        res_c1_d: "Открыл и детально исследовал уникальную культуру кочевников эпохи бронзы. Эти труды доказали древнее развитие горного дела и металлургии на территории Казахстана.",
        res_c2_t: "Фольклор и наследие Чокана",
        res_c2_d: "Собрал и издал академическое собрание сочинений Чокана Валиханова. Провел глубокий историко-литературный анализ эпосов «Манас», «Козы Корпеш - Баян Сулу».",
        res_c3_t: "Этнография и ремесла",
        res_c3_d: "Исследовал древнее зодчество кочевников, изобразительное искусство и прикладные ремесла. Написал фундаментальные труды, раскрывающие символику казахских орнаментов.",
        res_btn_read: "Посмотреть труды",
        
        exp_title: "Археологические экспедиции",
        exp_map_t: "Центрально-Казахстанская экспедиция",
        exp_map_d: "Знаменитая Центрально-Казахстанская археологическая экспедиция под руководством Алькея Маргулана систематически исследовала очаги древних цивилизаций в Сарыарке. Раскопки воссоздали древнюю историю степной культуры.",
        exp_p1: "Курганы и комплексы Бегазы",
        exp_p2: "Древние города Улытау (Баскамыр, Аяккамыр)",
        exp_p3: "Петроглифы и рисунки ущелья Тамгалы",
        exp_gal_title: "История экспедиций и Артефакты",
        
        exp_g1_t: "Раскопки Центрального Казахстана",
        exp_g1_d: "Было положено начало масштабным раскопкам поселений и могильников эпохи бронзы и раннего железа.",
        exp_g2_t: "Регион Улытау и Сырдарьи",
        exp_g2_d: "Выявлены сложные оборонительные стены и ирригационные сети средневековых городищ Баскамыр и Аяккамыр.",
        exp_g3_t: "Мавзолеи Бегазы",
        exp_g3_d: "Описаны архитектурное устройство и погребальные традиции величественных каменных мавзолеев вождей древних племен.",
        
        role_title: "Научная роль",
        stat1_label: "Научные статьи",
        stat1_desc: "Труды, опубликованные в областях истории, филологии и искусствоведения",
        stat2_label: "Экспедиции",
        stat2_desc: "Полевые археологические исследования, проведенные в различных регионах Казахстана",
        stat3_label: "Школа археологии",
        stat3_desc: "Подготовил целое поколение казахстанских профессиональных археологов и историков",
        stat4_label: "Монографии",
        stat4_desc: "Книги по казахской культуре, древней архитектуре и эпическому фольклору",
        
        time1_t: "Один из основателей Академии наук",
        time1_d: "Активно участвовал в создании Академии наук Казахской ССР, был избран её академиком-секретарем.",
        time2_t: "Лауреат Государственной премии",
        time2_d: "Удостоен государственной награды за фундаментальный научный труд «Древняя культура Центрального Казахстана».",
        time3_t: "Герой Труда и вечное наследие",
        time3_d: "За выдающиеся достижения в науке и развитие отечественных исследований присвоено звание Героя Социалистического Труда.",
        footer_text: "© Исторический сайт Алькея Маргулана. Все права защищены."
    }
};

// 2. МОДАЛДЫҚ ТЕРЕЗЕ МӘЛІМЕТТЕРІ (MODAL GALLERY DATA)
const modalData = {
    kk: {
        exp1: {
            title: "Орталық Қазақстан қазбалары",
            date: "1946 жыл",
            text: "1946 жылы Әлкей Марғұланның жетекшілігімен Орталық Қазақстан археологиялық экспедициясы ұйымдастырылды. Бұл экспедиция Сарыарқа даласындағы қола дәуірі мен ерте темір дәуірінің жүздеген обалары мен ежелгі қоныстарын тапты. Қазба жұмыстары ежелгі тайпалардың өмірі, олардың тұрмысы мен әлемдік деңгейдегі металлургиялық өндірісі туралы тың деректер берді. Бұл зерттеу отандық ғылымның алтын қорына айналды.",
            img: "images/begazy_dandybai.png"
        },
        exp2: {
            title: "Ұлытау мен Сырдария өңірі",
            date: "1950-ші жылдар",
            text: "Ұлытау және Сырдария өңірлеріндегі зерттеулер барысында Әлкей Марғұлан ортағасырлық отырықшы мәдениеттің іздерін тапты. Басқамыр және Аяққамыр қалашықтарының сәулеттік құрылымы, бекініс қабырғалары мен сумен қамту жүйелері зерттелді. Бұл зерттеулер қазақ даласында тек қана көшпелі емес, сондай-ақ қуатты отырықшы және қалалық өркениеттің де қатар өмір сүргенін толық дәлелдеп берді.",
            img: "images/expedition_camp.png"
        },
        exp3: {
            title: "Беғазы мазарларының зерттелуі",
            date: "1960-1970 жылдар",
            text: "Беғазы және Дәндібай шатқалдарында орналасқан алып плиталардан тұрғызылған кесенелерді қазу жұмыстары Әлкей Марғұланның ең үлкен ғылыми ерлігі болып саналады. Бұл мазарлар қола дәуіріндегі көсемдер мен билеушілерге арналған зәулім сәулет өнерінің үлгісі болып табылады. Ол жерден табылған қыш ыдыстар, алтын мен қола әшекейлер ежелгі қазақ жеріндегі жоғары әлеуметтік құрылым мен мәдени деңгейді көрсетті.",
            img: "images/alkei_margulan.png"
        }
    },
    ru: {
        exp1: {
            title: "Раскопки в Центральном Казахстане",
            date: "1946 год",
            text: "В 1946 году под руководством Алькея Маргулана была организована Центрально-Казахстанская археологическая экспедиция. Эта экспедиция обнаружила сотни курганов и древних поселений эпохи бронзы и раннего железного века в Сарыарке. Раскопки предоставили уникальные данные о жизни древних племен, их быте и развитом металлургическом производстве мирового уровня. Это исследование стало золотым фондом отечественной науки.",
            img: "images/begazy_dandybai.png"
        },
        exp2: {
            title: "Регион Улытау и Сырдарьи",
            date: "1950-е годы",
            text: "В ходе исследований в Улытауском и Сырдарьинском регионах Алькей Маргулан обнаружил следы средневековой оседлой культуры. Были изучены архитектурные сооружения, крепостные стены и ирригационные системы городищ Баскамыр и Аяккамыр. Эти исследования полностью доказали, что в казахской степи наряду с кочевым образом жизни существовала и мощная оседло-городская цивилизация.",
            img: "images/expedition_camp.png"
        },
        exp3: {
            title: "Исследование мавзолеев Бегазы",
            date: "1960-1970 годы",
            text: "Раскопки монументальных мавзолеев из массивных гранитных плит в ущельях Бегазы и Дандыбай считаются величайшим научным достижением Алькея Маргулана. Эти мавзолеи являются примерами величественной архитектуры вождей и правителей эпохи бронзы. Обнаруженная там керамика, золотые и бронзовые украшения продемонстрировали сложную социальную структуру и высочайший культурный уровень древнего Казахстана.",
            img: "images/alkei_margulan.png"
        }
    }
};

// 3. ТІЛ МЕН ТЕМА КҮЙЛЕРІ (DOM REFERENCES AND STATE STATE)
let currentLang = localStorage.getItem('lang') || 'kk';
let currentTheme = localStorage.getItem('theme') || 'dark';

const langBtn = document.getElementById('lang-btn');
const themeBtn = document.getElementById('theme-btn');
const themeIcon = document.getElementById('theme-icon');
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Таңдалған тілді орнату функциясы (Apply Language Function)
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // Барлық data-i18n элементтерін жаңарту
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Тіл батырмасының мәтінін келесі тілге ауыстыру
    langBtn.textContent = lang === 'kk' ? 'РУС' : 'ҚАЗ';
    document.documentElement.lang = lang;
}

// Таңдалған тақырыпты орнату функциясы (Apply Theme Function)
function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

    if (theme === 'light') {
        // Күн белгісіне ауыстыру (Sun Icon SVG)
        themeIcon.innerHTML = `<path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0-5a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 15a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zM5.22 5.22a1 1 0 0 1 1.42 0l1.41 1.41a1 1 0 0 1-1.41 1.42L5.22 6.64a1 1 0 0 1 0-1.42zm10.73 10.73a1 1 0 0 1 1.42 0l1.41 1.41a1 1 0 0 1-1.41 1.42l-1.41-1.42a1 1 0 0 1 0-1.42zM2 12a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm15 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zM5.22 18.78a1 1 0 0 1 0-1.42l1.41-1.41a1 1 0 0 1 1.41 1.41l-1.41 1.42a1 1 0 0 1-1.42 0zM15.95 6.64a1 1 0 0 1 0-1.41l1.41-1.42a1 1 0 0 1 1.42 1.42l-1.42 1.41a1 1 0 0 1-1.41 0z"/>`;
    } else {
        // Ай белгісіне ауыстыру (Moon Icon SVG)
        themeIcon.innerHTML = `<path d="M12 3c.132 0 .263 0 .393.007a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"/>`;
    }
}

// 4. ТІЛ МЕН ТЕМА ОҚЫҒАЛАРЫ (EVENT LISTENERS)
langBtn.addEventListener('click', () => {
    const targetLang = currentLang === 'kk' ? 'ru' : 'kk';
    setLanguage(targetLang);
});

themeBtn.addEventListener('click', () => {
    const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(targetTheme);
});

// Мобильді мәзірді қосу/өшіру (Mobile Menu Logic)
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
});

// Мәзір сілтемесін басқанда мобильді терезені жабу
document.querySelectorAll('.nav-item a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        navMenu.classList.remove('open');
    });
});

// 5. SCROLL PROGRESS & BACK TO TOP & ACTIVE NAVIGATION INDICATOR
const scrollProgressBar = document.getElementById('scroll-progress');
const backToTopBtn = document.getElementById('back-to-top');
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // 1. Scroll Progress Bar
    const scrollPercentage = (scrollTop / docHeight) * 100;
    scrollProgressBar.style.width = scrollPercentage + '%';

    // 2. Back to Top Button visibility
    if (scrollTop > 400) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }

    // 3. Navigation Highlight based on active section in viewport
    let currentActiveSectionId = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120; // offset for fixed header
        const sectionHeight = section.offsetHeight;
        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
            currentActiveSectionId = section.getAttribute('id');
        }
    });

    if (currentActiveSectionId) {
        navItems.forEach(item => {
            item.classList.remove('active');
            const linkHref = item.querySelector('a').getAttribute('href');
            if (linkHref === `#${currentActiveSectionId}`) {
                item.classList.add('active');
            }
        });
    }
});

// Back to top click event
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 6. SCROLL FADE-IN ANIMATION USING INTERSECTION OBSERVER
const appearanceOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const appearanceObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target); // Trigger animation once
        }
    });
}, appearanceOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    appearanceObserver.observe(element);
});

// 7. INTERACTIVE GALLERY MODAL POPUP
const modal = document.getElementById('gallery-modal');
const modalImg = document.getElementById('modal-img');
const modalDate = document.getElementById('modal-date');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const modalClose = document.getElementById('modal-close');

// Карточкаларды басқанда модальды ашу
document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => {
        const modalKey = card.getAttribute('data-modal');
        const data = modalData[currentLang][modalKey];
        
        if (data) {
            modalImg.src = data.img;
            modalImg.alt = data.title;
            modalDate.textContent = data.date;
            modalTitle.textContent = data.title;
            modalText.textContent = data.text;
            
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Stop page scrolling background
        }
    });
});

// Жабу функциясы
function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Restore background scroll
}

modalClose.addEventListener('click', closeModal);

// Сыртқы фонды басқанда жабу
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// ESC пернесін басқанда жабу
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

// 8. INITIALIZATION ON PAGE LOAD
document.addEventListener('DOMContentLoaded', () => {
    // 1. Тілді орнату
    setLanguage(currentLang);
    
    // 2. Тақырыпты орнату
    setTheme(currentTheme);
});

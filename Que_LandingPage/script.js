/**
 * =============================================
 * QUE LANDING PAGE - JAVASCRIPT
 * =============================================
 * 
 * TABLE OF CONTENTS:
 * 1. DOM Utilities
 * 2. Language Selector
 * 3. Smooth Scroll
 * 4. Header Scroll Effect
 * 5. Scroll Animations
 * 6. Initialization
 * 
 * =============================================
 */

(function() {
    'use strict';

    /* =============================================
       1. DOM UTILITIES
       ============================================= */
    const $ = (selector, context = document) => context.querySelector(selector);
    const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

    /* =============================================
       2. LANGUAGE SELECTOR & i18n
       ============================================= */
    
    // Language packs
    const translations = {
        KOR: {
            // Header
            'nav.home': 'Home',
            'nav.designSystem': 'Design System',
            
            // Hero Section
            'hero.badge': 'AI 캘린더',
            'hero.subtitle': '내가 쓴 시간, 더 잘 쓰는 시간으로',
            'hero.description': '여러 앱과 종이 속에 방치된 기록을 모아,<br>당신의 시간을 가치 있게 만들어 드립니다.',
            'hero.appStore': 'App Store',
            
            // Feature 1: Input
            'feature1.label': 'Input',
            'feature1.title': '뭐든 찍어<br>추가해보세요',
            'feature1.subtitle': '"입력의 귀찮음을 없앴습니다."',
            'feature1.description': '손으로 쓴 메모, 캡처한 일정... 이제 옮겨 적느라 시간 쓰지 마세요. 무엇이든 그냥 던져주세요. AI가 이미지 속 텍스트와 맥락을 이해해 일정, 할 일, 습관으로 완벽하게 분류하고 정리해 둡니다.',
            
            // Feature 2: Priority
            'feature2.label': 'Priority',
            'feature2.title': '고민은 그만! \n먼저 파악해드려요',
            'feature2.subtitle': '“우선순위, 당신 대신 파악해드립니다”',
            'feature2.description': '\'뭐부터 해야 하지?\' 고민하는 에너지조차 아끼세요.당신의 과거 패턴과 중요도를 분석해, 지금 당장 해야 할 일을 순서대로 보여줍니다. 당신은 그저 실행만 하세요.',
            
            // Feature 3: Metacognition
            'feature3.label': 'Metacognition',
            'feature3.title': '나에 대한 뜻밖의 발견<br>소리로 들어보세요',
            'feature3.subtitle': '"“이건 몰랐지?<br>기록 속에 숨어있던 내 패턴의 발견”"',
            'feature3.description': '단순한 통계가 아닙니다. 무심코 넘겼던 기록 속에서 "비 오는 날엔 우울해하네요", "바쁜 주간 뒤엔 운동을 쉬네요" 같은 진짜 당신을 찾아냅니다. 메타인지를 높여 더 나은 선택을 하세요.',
            
            // About Section
            'about.heading': '우리는',
            'about.label.ready': '준비 완료',
            'about.label.stack': '쌓다 / 대기하다',
            'about.title.standby': 'Stand by Cue!',
            'about.title.queue': 'Queue',
                'about.description': '우리의 이름은 \'Queue(쌓다, 줄을 서다)\'에서 시작되었습니다.<br><strong>온라인과 오프라인에 흩어진 당신의 무수한 기록들</strong>.<br>우리는 그 복잡한 조각들을 차곡차곡 쌓아(Queue),<br>\'나\'라는 하나의 선명한 맥락을 만듭니다.<br>그리고 그 데이터 속에서,<br>당신에게 필요한 선택지들을 한발 먼저 추려냅니다.<br>복잡한 정리와 계산은 우리가 끝냈습니다.<br>이제 당신은 선명해진 우선순위를 보고, 당신만의 흐름을 설계하기만 하면 됩니다.<br>3...2...1...<br>Stand by Que!',
            'about.button': 'Brand Guide',
            
            // Footer Banner
            'footer.text': '내가 쓴 시간을, 더 잘 쓰는 시간으로 바꾸고싶다면,',
            'footer.standby': 'Stand by!',
        },
        JPN: {
            // Header
            'nav.home': 'Home',
            'nav.designSystem': 'Design System',
            
            // Hero Section
            'hero.badge': 'AIカレンダー',
            'hero.subtitle': '私が使った時間を、<br>より価値ある時間へ',
            'hero.description': '様々なアプリや紙に散らばった記録を集め、<br>あなたの時間を価値あるものにします。',
            'hero.appStore': 'App Store',
            
            // Feature 1: Input
            'feature1.label': 'Input',
            'feature1.title': '何でも撮影して、<br>追加してみてください',
            'feature1.subtitle': '"入力の煩わしさを解消しました"',
            'feature1.description': '手書きのメモや、キャプチャした予定……もう書き写すのに時間を費や<br>すのはやめましょう。何でもそのまま放り込んでください。AIが画像内<br>のテキストと文脈を理解し、スケジュール・タスク・習慣へと完璧に分<br>類して整理します。',
            
            // Feature 2: Priority
            'feature2.label': 'Priority',
            'feature2.title': '迷うのはもうやめて。<br>先に把握します',
            'feature2.subtitle': '"優先順位、あなたの代わりに把握します"',
            'feature2.description': '「何から始めよう？」と迷うエネルギーさえ節約しましょう。あなたの<br>過去のパターンと重要度を分析し、今すぐやるべきことを順番に表示し<br>ます。あなたはただ実行"する"だけ。',
            
            // Feature 3: Metacognition
            'feature3.label': 'Metacognition',
            'feature3.title': '思いがけない自分の発見を、<br>移動中に声で。',
            'feature3.subtitle': '"これは気づかなかったでしょ？　記録に隠れたパターンの発見です。"',
            'feature3.description': '移動中、「何をしてたっけ？」と気になる瞬間はありませんか？<br>Queはあなたの蓄積データを分析し、主要なパターン、持続時間、重要度<br>を音声で伝えます。運転中や歩いている最中でも、実行可能な洞察を<br>届けます。',
            
            // About Section
            'about.heading': '私たちは',
            'about.label.ready': '準備完了',
            'about.label.stack': '積み重ねる / 待機する',
            'about.title.standby': 'Stand by Cue!',
            'about.title.queue': 'Queue',
            'about.description': '私たちの名前は、「Queue（積み重ねる、列に並ぶ）」に<br>由来しています。<br><br><strong>オンラインとオフラインに散らばった、あなたの無数の記録たち。</strong><br>私たちはその複雑な断片を一つひとつ積み重ね（Queue）、<br>「私」という一つの鮮明な文脈を作り上げます。<br><br>そしてそのデータの中から、<br>あなたに必要な選択肢を一足先に選び出します。<br>複雑な整理と計算は、私たちが済ませておきました。<br>あとは、鮮明になった優先順位を見て、<br>あなただけの「流れ」を設計するだけです。<br><br>3...2...1...<br>Stand by!',
            'about.button': 'Brand Guide',
            
            // Footer Banner
            'footer.text': '消費した時間を、より価値ある時間へと変えたいなら、',
            'footer.standby': 'Stand by!'
        },
        ENG: {
            // Header
            'nav.home': 'Home',
            'nav.designSystem': 'Design System',
            
            // Hero Section
            'hero.badge': 'AI Calendar',
            'hero.subtitle': 'Transforming time spent into time well-spent',
            'hero.description': 'Consolidating scattered records from apps and paper<br>to give your time the value it deserves.',
            'hero.appStore': 'App Store',
            
            // Feature 1: Input
            'feature1.label': 'Input',
            'feature1.title': 'Capture anything,<br>add everything',
            'feature1.subtitle': '"We\'ve removed the friction of manual entry."',
            'feature1.description': 'Handwritten notes, screenshots of schedules... don\'t waste another second typing them out. Just toss them in. Our AI understands the text and context within your images to perfectly categorize them into schedules, tasks, and habits.',
            
            // Feature 2: Priority
            'feature2.label': 'Priority',
            'feature2.title': 'Stop overthinking.<br>We\'ll figure it out first.',
            'feature2.subtitle': '"Prioritization, handled on your behalf."',
            'feature2.description': 'Save your energy for what matters. We analyze your past patterns and task urgency to show you exactly what needs to be done right now. Your only job is to execute.',
            
            // Feature 3: Metacognition
            'feature3.label': 'Metacognition',
            'feature3.title': 'Discover your hidden self—<br>listen to your patterns.',
            'feature3.subtitle': '"Didn\'t see this coming?<br>Discovering the patterns hidden in your records."',
            'feature3.description': 'This isn\'t just about stats. We find the real "you" buried in your daily logs—insights like "You feel low on rainy days" or "You skip workouts after a busy week." Enhance your metacognition and make better choices.',
            
            // About Section
            'about.heading': 'Who We Are',
            'about.label.ready': 'Ready',
            'about.label.stack': 'Stack / Standby',
            'about.title.standby': 'Stand by Cue!',
            'about.title.queue': 'Queue',
            'about.description': 'Our name begins with "Queue"—the act of stacking and lining up.<br><strong>Countless records of yours, scattered across the digital and physical world.</strong><br>We stack those complex fragments (Queue) to build a clear context of who you are.<br>Then, from that data, we pre-select the choices you actually need.<br>We\'ve finished the complex organizing and calculating.<br>Now, all you have to do is look at the clear priorities and design your own flow.<br>3... 2... 1...<br>Stand by Que!',
            'about.button': 'Brand Guide',
            
            // Footer Banner
            'footer.text': 'Ready to turn your time spent into time well-spent?',
            'footer.standby': 'Stand by!',
        }
    };
    
    // Current language
    let currentLang = 'JPN'; // Default language
    
    // Translate function
    const translate = (key) => {
        return translations[currentLang][key] || key;
    };
    
    // Update page content
    const updateContent = () => {
        // Update all elements with data-i18n attribute
        $$('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = translate(key);
            
            // Handle HTML content (for <br> tags)
            if (translation.includes('<br>')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        });
        
        // Update document language
        document.documentElement.lang = currentLang === 'KOR' ? 'ko' : currentLang === 'JPN' ? 'ja' : 'en';
        
        // Update body class for language-specific fonts
        document.body.className = document.body.className.replace(/lang-\w+/g, '');
        document.body.classList.add(`lang-${currentLang.toLowerCase()}`);
        
        // Save to localStorage
        localStorage.setItem('preferredLanguage', currentLang);
    };
    
    // Detect country by IP and set language
    const detectCountryAndSetLanguage = async () => {
        try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            const countryCode = data.country_code;
            
            // Map country code to language
            let detectedLang = 'ENG'; // Default to English
            
            if (countryCode === 'KR') {
                detectedLang = 'KOR';
            } else if (countryCode === 'JP') {
                detectedLang = 'JPN';
            }
            
            return detectedLang;
        } catch (error) {
            console.log('Could not detect country, using default language');
            return 'JPN'; // Fallback to Japanese
        }
    };
    
    // Initialize language selector
    const initLanguageSelector = async () => {
        const langButtons = $$('.header__lang-btn');
        const mobileLangButtons = $$('.header__mobile-lang-btn');
        const overlayLangButtons = $$('.mobile-menu-overlay__lang-btn');
        const allLangButtons = [...langButtons, ...mobileLangButtons, ...overlayLangButtons];
        
        // Check for saved language preference first
        const savedLang = localStorage.getItem('preferredLanguage');
        
        if (savedLang && translations[savedLang]) {
            // Use saved preference
            currentLang = savedLang;
            updateContent();
            
            // Update active button
            allLangButtons.forEach(btn => {
                if (btn.dataset.lang === savedLang) {
                    btn.classList.add('header__lang-btn--active', 'header__mobile-lang-btn--active', 'mobile-menu-overlay__lang-btn--active');
                } else {
                    btn.classList.remove('header__lang-btn--active', 'header__mobile-lang-btn--active', 'mobile-menu-overlay__lang-btn--active');
                }
            });
        } else {
            // No saved preference - detect by IP
            const detectedLang = await detectCountryAndSetLanguage();
            currentLang = detectedLang;
            updateContent();
            
            // Update active button
            allLangButtons.forEach(btn => {
                if (btn.dataset.lang === detectedLang) {
                    btn.classList.add('header__lang-btn--active', 'header__mobile-lang-btn--active', 'mobile-menu-overlay__lang-btn--active');
                } else {
                    btn.classList.remove('header__lang-btn--active', 'header__mobile-lang-btn--active', 'mobile-menu-overlay__lang-btn--active');
                }
            });
        }
        
        // Add click handlers
        allLangButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                allLangButtons.forEach(b => {
                    b.classList.remove('header__lang-btn--active', 'header__mobile-lang-btn--active', 'mobile-menu-overlay__lang-btn--active');
                });
                
                // Add active class to clicked button and matching buttons
                const selectedLang = this.dataset.lang;
                allLangButtons.forEach(b => {
                    if (b.dataset.lang === selectedLang) {
                        b.classList.add('header__lang-btn--active', 'header__mobile-lang-btn--active', 'mobile-menu-overlay__lang-btn--active');
                    }
                });
                
                // Get selected language
                currentLang = selectedLang;
                
                // Update content
                updateContent();
                
                // Close mobile overlay if open
                const mobileOverlay = $('#mobileMenuOverlay');
                const menuBtn = $('.header__menu-btn');
                if (mobileOverlay && menuBtn) {
                    mobileOverlay.classList.remove('active');
                    menuBtn.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
    };

    /* =============================================
       3. SMOOTH SCROLL
       ============================================= */
    const initSmoothScroll = () => {
        const anchors = $$('a[href^="#"]');
        
        anchors.forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Skip if it's just "#"
                if (href === '#') return;
                
                const target = $(href);
                
                if (target) {
                    e.preventDefault();
                    
                    const headerHeight = parseInt(
                        getComputedStyle(document.documentElement)
                            .getPropertyValue('--header-height')
                    ) || 140;
                    
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    /* =============================================
       4. HEADER SCROLL EFFECT
       ============================================= */
    const initHeaderScroll = () => {
        // Header scroll effect disabled
        // const header = $('.header');
        // Shadow effect removed as per design requirements
    };

    /* =============================================
       5. SCROLL ANIMATIONS
       ============================================= */
    const initScrollAnimations = () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        // General vertical fade-in elements
        const animatedElements = $$('.feature, .about');
        
        // Set initial state for general elements
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        });

        // Design System Image Animation (Horizontal Slide)
        const dsImage = $('.design-system__image');
        if (dsImage) {
            dsImage.style.opacity = '1'; // Always visible
            dsImage.style.transform = 'translateX(-150px)'; // Start from left
            dsImage.style.transition = 'transform 1.2s ease-out';
        }
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // General animation
                    if (entry.target.classList.contains('feature') || 
                        entry.target.classList.contains('about')) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                    // Design System Image animation
                    else if (entry.target.classList.contains('design-system__image')) {
                        entry.target.style.transform = 'translateX(0)';
                    }
                }
            });
        }, observerOptions);
        
        animatedElements.forEach(el => observer.observe(el));
        if (dsImage) observer.observe(dsImage);
    };
    
    /* =============================================
       5-0. HORIZONTAL SCROLL ANIMATION
       ============================================= */
    const initHorizontalScrollAnimation = () => {
        // Feature moving section은 고정
        return;
    };
    
    /* =============================================
       5-1. CALENDAR SCROLL ANIMATION
       ============================================= */
    const initCalendarAnimation = () => {
        const card = document.querySelector('.calendar__card');
        const section = document.querySelector('.calendar');
        if (!card || !section) return;

        const handleScroll = () => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // 화면 크기에 따른 속도 조절 (multiplier가 클수록 빠름)
            // 데스크톱 1(기본), 태블릿 1.5(빠름), 모바일 2(가장 빠름)
            let screenSizeMultiplier = 1; // 데스크톱 기본 속도
            if (window.innerWidth <= 768) {
                screenSizeMultiplier = 2; // 모바일 가장 빠르게
            } else if (window.innerWidth <= 1024) {
                screenSizeMultiplier = 1.5; // 태블릿 빠르게
            }
            
            // calendar 섹션이 화면에 있을 때만 동작
            if (rect.bottom < 0 || rect.top > windowHeight) {
                return;
            }
            
            // 섹션이 뷰포트에 진입한 정도를 계산
            const sectionTop = rect.top;
            const sectionHeight = rect.height;
            
            // 섹션이 화면에 나타나기 시작할 때부터 완전히 지나갈 때까지의 진행도
            const startPoint = windowHeight;
            const endPoint = -sectionHeight;
            const totalDistance = (startPoint - endPoint) / screenSizeMultiplier;
            const currentDistance = startPoint - sectionTop;
            
            // 0에서 1 사이의 값으로 정규화
            let progress = currentDistance / totalDistance;
            progress = Math.max(0, Math.min(1, progress));
            
            // translateX 적용 (50% -> 0%, 중간에서 좌측으로)
            card.style.transform = `translateX(${50 - progress * 50}%)`;
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll(); // 초기 위치 계산
    };

    /* =============================================
       5-2. BANNER VIDEO IMMERSIVE EFFECT
       ============================================= */
    const initBannerImmersive = () => {
        // Video is now full-width by default, no dynamic effects needed
    };

    /* =============================================
       6. PLAY BUTTON HANDLER
       ============================================= */
    const initPlayButton = () => {
        const playBtn = $('.feature__play-btn');
        
        if (playBtn) {
            playBtn.addEventListener('click', function() {
                console.log('Play video');
                // Here you can add video playback logic
                // e.g., open modal with video, play embedded video, etc.
            });
        }
    };

    /* =============================================
       7. HAMBURGER MENU HANDLER
       ============================================= */
    const initHamburgerMenu = () => {
        const menuBtn = $('.header__menu-btn');
        const mobileOverlay = $('#mobileMenuOverlay');
        const closeBtn = $('.mobile-menu-overlay__close');
        const overlayLinks = $$('.mobile-menu-overlay__link');
        const overlayLangBtns = $$('.mobile-menu-overlay__lang-btn');
        
        if (menuBtn && mobileOverlay) {
            // Toggle menu on hamburger button click
            menuBtn.addEventListener('click', () => {
                const isOpening = !mobileOverlay.classList.contains('active');
                
                if (isOpening) {
                    // Opening: set display first, then trigger animation
                    mobileOverlay.style.display = 'block';
                    // Force reflow to ensure display is applied before adding active class
                    mobileOverlay.offsetHeight;
                    requestAnimationFrame(() => {
                        menuBtn.classList.add('active');
                        mobileOverlay.classList.add('active');
                        document.body.style.overflow = 'hidden';
                    });
                } else {
                    // Closing: remove active class, then hide after animation
                    menuBtn.classList.remove('active');
                    mobileOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                    // Wait for animation to complete before hiding
                    setTimeout(() => {
                        if (!mobileOverlay.classList.contains('active')) {
                            mobileOverlay.style.display = 'none';
                        }
                    }, 500);
                }
            });
            
            // Close menu on close button click
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    menuBtn.classList.remove('active');
                    mobileOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                    setTimeout(() => {
                        if (!mobileOverlay.classList.contains('active')) {
                            mobileOverlay.style.display = 'none';
                        }
                    }, 500);
                });
            }
            
            // Close menu when clicking on a link
            overlayLinks.forEach(link => {
                link.addEventListener('click', () => {
                    menuBtn.classList.remove('active');
                    mobileOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                    setTimeout(() => {
                        if (!mobileOverlay.classList.contains('active')) {
                            mobileOverlay.style.display = 'none';
                        }
                    }, 500);
                });
            });
            
            // Handle language buttons in overlay
            overlayLangBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const lang = this.getAttribute('data-lang');
                    
                    // Update all language buttons (header + overlay)
                    const allLangButtons = $$('.header__lang-btn, .mobile-menu-overlay__lang-btn');
                    allLangButtons.forEach(b => {
                        if (b.getAttribute('data-lang') === lang) {
                            b.classList.add('header__lang-btn--active', 'mobile-menu-overlay__lang-btn--active');
                        } else {
                            b.classList.remove('header__lang-btn--active', 'mobile-menu-overlay__lang-btn--active');
                        }
                    });
                    
                    // Trigger language change
                    const event = new CustomEvent('languageChanged', { detail: { lang } });
                    document.dispatchEvent(event);
                });
            });
            
            // Close menu on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && mobileOverlay.classList.contains('active')) {
                    menuBtn.classList.remove('active');
                    mobileOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                    setTimeout(() => {
                        if (!mobileOverlay.classList.contains('active')) {
                            mobileOverlay.style.display = 'none';
                        }
                    }, 500);
                }
            });
        }
    };

    /* =============================================
       8. INITIALIZATION
       ============================================= */
    const init = () => {
        initLanguageSelector();
        initSmoothScroll();
        initHeaderScroll();
        initScrollAnimations();
        initHorizontalScrollAnimation();
        initCalendarAnimation();
        initBannerImmersive();
        initPlayButton();
        initHamburgerMenu();
        
        console.log('Que Landing Page initialized');
    };

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
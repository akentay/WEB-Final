// Данные для сайта
const courses = [
    {
        id: 1,
        title: "Веб-разработка с нуля",
        description: "Научитесь создавать современные веб-сайты и приложения с использованием HTML, CSS, JavaScript и React.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        instructor: "Алексей Петров",
        duration: "40 часов",
        level: "Начальный",
        students: 1250,
        price: 14990,
        category: "programming",
        enrolled: true,
        progress: 65
    },
    {
        id: 2,
        title: "UI/UX дизайн",
        description: "Освойте принципы пользовательского интерфейса и опыта для создания интуитивных и красивых приложений.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
        instructor: "Мария Иванова",
        duration: "30 часов",
        level: "Средний",
        students: 890,
        price: 12990,
        category: "design",
        enrolled: false,
        progress: 0
    },
    {
        id: 3,
        title: "Digital маркетинг",
        description: "Изучите стратегии продвижения в интернете, включая SEO, SMM, контекстную рекламу и email-маркетинг.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
        instructor: "Дмитрий Смирнов",
        duration: "35 часов",
        level: "Начальный",
        students: 1100,
        price: 11990,
        category: "marketing",
        enrolled: false,
        progress: 0
    },
    {
        id: 4,
        title: "Python для анализа данных",
        description: "Научитесь использовать Python и библиотеки Pandas, NumPy, Matplotlib для анализа и визуализации данных.",
        image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        instructor: "Елена Козлова",
        duration: "45 часов",
        level: "Средний",
        students: 750,
        price: 15990,
        category: "programming",
        enrolled: true,
        progress: 30
    },
    {
        id: 5,
        title: "Основы бизнеса",
        description: "Поймите ключевые аспекты ведения бизнеса: финансы, маркетинг, управление и стратегическое планирование.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        instructor: "Анна Сидорова",
        duration: "25 часов",
        level: "Начальный",
        students: 950,
        price: 9990,
        category: "business",
        enrolled: false,
        progress: 0
    },
    {
        id: 6,
        title: "Личностный рост",
        description: "Развивайте навыки тайм-менеджмента, постановки целей, коммуникации и эмоционального интеллекта.",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        instructor: "Олег Васильев",
        duration: "20 часов",
        level: "Начальный",
        students: 1300,
        price: 8990,
        category: "personal",
        enrolled: false,
        progress: 0
    }
];

const blogPosts = [
    {
        id: 1,
        title: "Топ-10 навыков для IT-специалиста в 2023 году",
        excerpt: "Какие технологии и навыки будут наиболее востребованы в IT-индустрии в ближайшие годы.",
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        date: "15 мая 2023",
        author: "Алексей Петров",
        category: "programming",
        content: "Полное содержание статьи..."
    },
    {
        id: 2,
        title: "Как эффективно учиться онлайн: 7 советов",
        excerpt: "Практические рекомендации по организации учебного процесса при дистанционном обучении.",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        date: "10 мая 2023",
        author: "Мария Иванова",
        category: "education",
        content: "Полное содержание статьи..."
    },
    {
        id: 3,
        title: "Тренды в дизайне интерфейсов 2023",
        excerpt: "Обзор новых подходов и тенденций в проектировании пользовательских интерфейсов.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
        date: "5 мая 2023",
        author: "Мария Иванова",
        category: "design",
        content: "Полное содержание статьи..."
    }
];

// Инициализация приложения
$(document).ready(function() {
    // Загрузка данных из Local Storage
    loadUserData();
    loadCart();
    loadFavorites();
    loadTheme();

    // Обработчики событий
    $('#themeToggle').click(toggleTheme);
    $('#loginForm').submit(handleLogin);
    $('#registerForm').submit(handleRegister);

    // Инициализация корзины
    updateCartCount();
});

// Функции для работы с Local Storage
function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Загрузка данных пользователя
function loadUserData() {
    const userData = getFromLocalStorage('userData');
    if (userData) {
        $('.user-avatar').text(userData.name.charAt(0).toUpperCase());
        $('.user-dropdown .dropdown-menu').html(`
            <li><a class="dropdown-item" href="profile.html">Профиль</a></li>
            <li><a class="dropdown-item" href="#" id="logoutBtn">Выйти</a></li>
        `);
        $('#logoutBtn').click(logout);
    }
}

// Загрузка корзины
function loadCart() {
    window.cart = getFromLocalStorage('cart') || [];
}

// Сохранение корзины
function saveCart() {
    saveToLocalStorage('cart', window.cart);
    updateCartCount();
}

// Обновление счетчика корзины
function updateCartCount() {
    $('#cartCount').text(window.cart.length);
}

// Загрузка избранного
function loadFavorites() {
    window.favorites = getFromLocalStorage('favorites') || [];
}

// Сохранение избранного
function saveFavorites() {
    saveToLocalStorage('favorites', window.favorites);
}

// Загрузка темы
function loadTheme() {
    const theme = getFromLocalStorage('theme') || 'light';
    setTheme(theme);
}

// Установка темы
function setTheme(theme) {
    $('body').attr('data-theme', theme);
    if (theme === 'dark') {
        $('#themeToggle i').removeClass('fa-moon').addClass('fa-sun');
    } else {
        $('#themeToggle i').removeClass('fa-sun').addClass('fa-moon');
    }
    saveToLocalStorage('theme', theme);
}

// Переключение темы
function toggleTheme() {
    const currentTheme = $('body').attr('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// Обработка входа
function handleLogin(e) {
    e.preventDefault();
    const email = $('#loginEmail').val();
    const password = $('#loginPassword').val();

    // Простая валидация
    if (!email || !password) {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    // В реальном приложении здесь был бы запрос к API
    const userData = {
        name: email.split('@')[0],
        email: email
    };

    saveToLocalStorage('userData', userData);
    $('#loginModal').modal('hide');
    loadUserData();
    alert('Вы успешно вошли в систему!');
}

// Обработка регистрации
function handleRegister(e) {
    e.preventDefault();
    const name = $('#registerName').val();
    const email = $('#registerEmail').val();
    const password = $('#registerPassword').val();
    const confirmPassword = $('#registerConfirmPassword').val();

    // Валидация
    if (!name || !email || !password || !confirmPassword) {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    if (password !== confirmPassword) {
        alert('Пароли не совпадают');
        return;
    }

    if (password.length < 6) {
        alert('Пароль должен содержать не менее 6 символов');
        return;
    }

    // В реальном приложении здесь был бы запрос к API
    const userData = {
        name: name,
        email: email
    };

    saveToLocalStorage('userData', userData);
    $('#registerModal').modal('hide');
    loadUserData();
    alert('Регистрация прошла успешно!');
}

// Выход из системы
function logout() {
    localStorage.removeItem('userData');
    window.location.reload();
}

// Добавление в корзину
function addToCart(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (course && !window.cart.find(item => item.id === courseId)) {
        window.cart.push(course);
        saveCart();
        alert('Курс добавлен в корзину!');
    } else {
        alert('Этот курс уже в корзине');
    }
}

// Добавление в избранное
function toggleFavorite(courseId) {
    const index = window.favorites.indexOf(courseId);
    if (index > -1) {
        window.favorites.splice(index, 1);
    } else {
        window.favorites.push(courseId);
    }
    saveFavorites();
    return index === -1; // Возвращает true, если курс был добавлен в избранное
}

// Загрузка популярных курсов на главной
function loadFeaturedCourses() {
    $('#featuredCourses').html(renderCourses(courses.slice(0, 3)));
    initCourseHandlers();
}

// Загрузка всех курсов
function loadAllCourses() {
    $('#coursesList').html(renderCourses(courses));
    initCourseHandlers();
    
    // Обработчики для фильтрации
    $('#courseSearch').on('input', filterCourses);
    $('#categoryFilter').change(filterCourses);
}

// Рендер курсов
function renderCourses(coursesList) {
    return coursesList.map(course => `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card course-card">
                <div class="position-relative">
                    <img src="${course.image}" class="card-img-top course-image" alt="${course.title}">
                    ${course.enrolled ? '<span class="enrolled-badge"><i class="fas fa-check-circle me-1"></i>Зачислен</span>' : ''}
                    <button class="favorite-btn ${window.favorites.includes(course.id) ? 'active' : ''}" data-id="${course.id}">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${course.title}</h5>
                    <p class="card-text flex-grow-1">${course.description}</p>
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <small class="text-muted"><i class="fas fa-user me-1"></i>${course.instructor}</small>
                        <small class="text-muted"><i class="fas fa-clock me-1"></i>${course.duration}</small>
                    </div>
                    ${course.enrolled ? `
                        <div class="progress-container">
                            <div class="d-flex justify-content-between mb-1">
                                <small>Прогресс:</small>
                                <small>${course.progress}%</small>
                            </div>
                            <div class="course-progress">
                                <div class="course-progress-bar" style="width: ${course.progress}%"></div>
                            </div>
                        </div>
                    ` : ''}
                    <div class="d-flex justify-content-between align-items-center mt-auto">
                        <h5 class="text-primary mb-0">${course.price.toLocaleString()} ₸</h5>
                        <div>
                            <button class="btn btn-sm btn-outline-primary view-course" data-id="${course.id}">Подробнее</button>
                            ${!course.enrolled ? `<button class="btn btn-sm btn-primary add-to-cart-btn" data-id="${course.id}">В корзину</button>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Инициализация обработчиков событий для курсов
function initCourseHandlers() {
    // Просмотр деталей курса
    $('.view-course').click(function() {
        const courseId = parseInt($(this).data('id'));
        const course = courses.find(c => c.id === courseId);
        
        if (course) {
            $('#courseModalTitle').text(course.title);
            $('#courseModalImage').attr('src', course.image);
            $('#courseModalDescription').text(course.description);
            $('#courseModalInstructor').text(course.instructor);
            $('#courseModalDuration').text(course.duration);
            $('#courseModalLevel').text(course.level);
            $('#courseModalStudents').text(course.students.toLocaleString());
            $('#courseModalPrice').text(course.price.toLocaleString() + ' ₸');
            
            // Обновление состояния кнопки избранного
            const isFavorite = window.favorites.includes(courseId);
            $('#addToFavoritesBtn').html(`<i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i> ${isFavorite ? 'В избранном' : 'В избранное'}`);
            
            // Обработчики для модального окна
            $('#addToFavoritesBtn').off('click').click(function() {
                const added = toggleFavorite(courseId);
                $(this).html(`<i class="${added ? 'fas' : 'far'} fa-heart"></i> ${added ? 'В избранном' : 'В избранное'}`);
                // Обновляем кнопку на карточке курса
                $(`.favorite-btn[data-id="${courseId}"]`).toggleClass('active', added);
            });
            
            $('#addToCartBtn').off('click').click(function() {
                addToCart(courseId);
                $('#courseModal').modal('hide');
            });
            
            $('#courseModal').modal('show');
        }
    });

    // Добавление в корзину
    $('.add-to-cart-btn').click(function() {
        const courseId = parseInt($(this).data('id'));
        addToCart(courseId);
    });

    // Добавление в избранное с карточки
    $('.favorite-btn').click(function() {
        const courseId = parseInt($(this).data('id'));
        const added = toggleFavorite(courseId);
        $(this).toggleClass('active', added);
        $(this).html(`<i class="${added ? 'fas' : 'far'} fa-heart"></i>`);
    });
}

// Фильтрация курсов
function filterCourses() {
    const searchTerm = $('#courseSearch').val().toLowerCase();
    const category = $('#categoryFilter').val();
    
    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm) || 
                             course.description.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || course.category === category;
        
        return matchesSearch && matchesCategory;
    });
    
    $('#coursesList').html(renderCourses(filteredCourses));
    initCourseHandlers();
}

// Загрузка страницы блога
function loadBlogPage() {
    $('#blogPosts').html(renderBlogPosts(blogPosts));
}

// Рендер постов блога
function renderBlogPosts(posts) {
    return posts.map(post => `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card blog-card">
                <img src="${post.image}" class="card-img-top blog-image" alt="${post.title}">
                <div class="card-body d-flex flex-column">
                    <span class="badge bg-primary mb-2 align-self-start">${post.category}</span>
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text flex-grow-1">${post.excerpt}</p>
                    <div class="d-flex justify-content-between align-items-center mt-auto">
                        <small class="text-muted">${post.date}</small>
                        <small class="text-muted">${post.author}</small>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Загрузка страницы корзины
function loadCartPage() {
    if (window.cart.length > 0) {
        $('#cartItems').html(renderCartItems());
        updateCartTotals();
        
        // Обработчик кнопки оформления заказа
        $('#checkoutBtn').click(function() {
            alert('Заказ успешно оформлен! Спасибо за покупку.');
            window.cart = [];
            saveCart();
            window.location.href = 'index.html';
        });

        // Обработчики удаления из корзины
        $('.remove-from-cart').click(function() {
            const courseId = parseInt($(this).data('id'));
            removeFromCart(courseId);
        });
    } else {
        $('#cartContent').html(`
            <div class="card text-center py-5">
                <div class="card-body">
                    <i class="fas fa-shopping-cart fa-4x text-muted mb-3"></i>
                    <h4>Ваша корзина пуста</h4>
                    <p class="text-muted">Добавьте курсы, чтобы начать обучение</p>
                    <a href="courses.html" class="btn btn-primary">Перейти к курсам</a>
                </div>
            </div>
        `);
    }
}

// Рендер элементов корзины
function renderCartItems() {
    return window.cart.map(item => `
        <div class="row mb-3 pb-3 border-bottom cart-item" data-id="${item.id}">
            <div class="col-md-2">
                <img src="${item.image}" alt="${item.title}" class="img-fluid rounded">
            </div>
            <div class="col-md-6">
                <h5>${item.title}</h5>
                <p class="text-muted mb-1">${item.instructor}</p>
                <p class="text-muted mb-0">${item.duration} • ${item.level}</p>
            </div>
            <div class="col-md-2 text-end">
                <h5>${item.price.toLocaleString()} ₸</h5>
            </div>
            <div class="col-md-2 text-end">
                <button class="btn btn-sm btn-outline-danger remove-from-cart" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Удаление из корзины
function removeFromCart(courseId) {
    window.cart = window.cart.filter(item => item.id !== courseId);
    saveCart();
    loadCartPage();
}

// Обновление итогов корзины
function updateCartTotals() {
    const subtotal = window.cart.reduce((sum, item) => sum + item.price, 0);
    const discount = subtotal > 50000 ? subtotal * 0.1 : 0; // 10% скидка при заказе от 50,000 ₸
    const total = subtotal - discount;
    
    $('#subtotal').text(subtotal.toLocaleString() + ' ₸');
    $('#discount').text('-' + discount.toLocaleString() + ' ₸');
    $('#total').text(total.toLocaleString() + ' ₸');
}

// API Integration - получение случайной цитаты для мотивации
function fetchMotivationalQuote() {
    // В реальном приложении здесь был бы запрос к API
    // Для демонстрации используем случайную цитату из массива
    const quotes = [
        "Образование - это самое мощное оружие, которое можно использовать, чтобы изменить мир. - Нельсон Мандела",
        "Учитесь так, как будто вы будете жить вечно; живите так, как будто вы умрете завтра. - Махатма Ганди",
        "Инвестиции в знания всегда дают наибольшую прибыль. - Бенджамин Франклин",
        "Единственное, что мешает мне учиться, - это полученное образование. - Альберт Эйнштейн",
        "Образование - это пропуск в будущее, ибо завтра принадлежит тем, кто готовится к нему сегодня. - Малкольм Икс"
    ];
    
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    // Добавляем цитату на главную страницу, если она существует
    if ($('#motivationalQuote').length) {
        $('#motivationalQuote').text(randomQuote);
    }
}
// Загрузка страницы блога
function loadBlogPage() {
    $('#blogPosts').html(renderBlogPosts(blogPosts));
}

// Загрузка страницы корзины
function loadCartPage() {
    if (window.cart.length > 0) {
        $('#cartContent').html(`
            <div class="card">
                <div class="card-body">
                    <div id="cartItems">
                        ${renderCartItems()}
                    </div>
                </div>
            </div>
        `);
        updateCartTotals();
        
        // Обработчик кнопки оформления заказа
        $('#checkoutBtn').click(function() {
            alert('Заказ успешно оформлен! Спасибо за покупку.');
            window.cart = [];
            saveCart();
            window.location.href = 'index.html';
        });

        // Обработчики удаления из корзины
        $('.remove-from-cart').click(function() {
            const courseId = parseInt($(this).data('id'));
            removeFromCart(courseId);
        });
    } else {
        $('#cartContent').html(`
            <div class="card text-center py-5">
                <div class="card-body">
                    <i class="fas fa-shopping-cart fa-4x text-muted mb-3"></i>
                    <h4>Ваша корзина пуста</h4>
                    <p class="text-muted">Добавьте курсы, чтобы начать обучение</p>
                    <a href="courses.html" class="btn btn-primary">Перейти к курсам</a>
                </div>
            </div>
        `);
    }
}
// Learnify v2 — app.js
// Hash routing, LocalStorage (tasks, cart, fav), Blog posts, Checkout modal (simulated payment), Auth (local).

// Elements
const app = document.getElementById('app');
const yearEl = document.getElementById('year');
const loginBtn = document.getElementById('loginBtn');

// Modals
const authModal = new bootstrap.Modal(document.getElementById('authModal'));
const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));

// Init
yearEl.textContent = new Date().getFullYear();

// -------------------- Storage helpers --------------------
function save(key, val){ localStorage.setItem(key, JSON.stringify(val)); }
function load(key, def){ try { return JSON.parse(localStorage.getItem(key)) ?? def; } catch { return def; } }

// -------------------- Auth --------------------
function currentUser(){ return load('learnify_user', null); }

function updateAuthUI(){
  const user = currentUser();
  if(user){
    loginBtn.textContent = user.email.split('@')[0];
    loginBtn.classList.remove('btn-light');
    loginBtn.classList.add('btn-outline-light');
  } else {
    loginBtn.textContent = 'Вход';
    loginBtn.classList.remove('btn-outline-light');
    loginBtn.classList.add('btn-light');
  }
}
updateAuthUI();

document.getElementById('authForm').addEventListener('submit', e=>{
  e.preventDefault();
  const email = document.getElementById('authEmail').value.trim();
  const pass = document.getElementById('authPass').value;
  if(!email.includes('@')) return alert('Введите корректный email');
  if(pass.length < 6) return alert('Пароль минимум 6 символов');
  save('learnify_user', { email });
  if(document.getElementById('rememberMe').checked) save('learnify_remember', true);
  authModal.hide();
  updateAuthUI();
  renderRoute(location.hash || '#/');
});

loginBtn.addEventListener('click', ()=>{
  if(currentUser()){
    // logout
    localStorage.removeItem('learnify_user');
    updateAuthUI();
    renderRoute(location.hash || '#/');
  } else {
    authModal.show();
  }
});

// -------------------- Demo course data --------------------
const COURSES = [
  {id:1, title:'JavaScript для начинающих', price:29, level:'Начальный', img:'https://picsum.photos/seed/js/600/400'},
  {id:2, title:'Веб-разработка: HTML & CSS', price:19, level:'Начальный', img:'https://picsum.photos/seed/html/600/400'},
  {id:3, title:'React: Продвинутый курс', price:49, level:'Продвинутый', img:'https://picsum.photos/seed/react/600/400'},
  {id:4, title:'Python для Data Science', price:39, level:'Средний', img:'https://picsum.photos/seed/py/600/400'},
  {id:5, title:'UI/UX дизайн', price:24, level:'Средний', img:'https://picsum.photos/seed/design/600/400'},
];

// -------------------- Blog posts data --------------------
const BLOG = [
  {id:1, title:'5 советов, как учиться эффективнее', date:'2025-03-12', tags:['study','tips'], img:'https://picsum.photos/seed/blog1/800/450', content:`<p>Учиться эффективно — значит учиться с умом. Разделяй материал, делай заметки, применяй на практике.</p><p>Совет 1: планируй короткие интервалы обучения. Совет 2: практикуйся на проектах...</p>`},
  {id:2, title:'Как построить портфолио для работодателя', date:'2025-04-01', tags:['career','portfolio'], img:'https://picsum.photos/seed/blog2/800/450', content:`<p>Покажи реальные проекты, объясни задачу и своё решение. Используй читабельный дизайн и краткие кейсы.</p>`},
  {id:3, title:'Технологии, которые стоит знать в 2025', date:'2025-05-20', tags:['tech','trends'], img:'https://picsum.photos/seed/blog3/800/450', content:`<p>JavaScript и экосистема, основы ML, владение Git и навыки коммуникации — всё это важно.</p>`},
];

// -------------------- Routing --------------------
const routes = {
  '/': renderHome,
  '/courses': renderCourses,
  '/blog': renderBlog,
  '/about': renderAbout,
  '/profile': renderProfile,
  // dynamic blog post handled separately by hash parsing /blog/:id
};

function parseHash(hash){
  // returns path and param if /blog/1 etc.
  const path = (hash || location.hash || '#/').replace('#','');
  const parts = path.split('/').filter(Boolean); // e.g. ['blog','1']
  return { raw: path || '/', parts };
}

function renderRoute(hash){
  const { raw, parts } = parseHash(hash);
  if(parts[0] === 'blog' && parts[1]){
    renderBlogPost(Number(parts[1]));
    return;
  }
  const route = routes[raw] || renderNotFound;
  route();
}

window.addEventListener('hashchange', ()=> renderRoute(location.hash));
window.addEventListener('load', ()=> renderRoute(location.hash || '#/'));

// -------------------- Tasks widget (Home) --------------------
function getTasks(){ return load('learnify_tasks', []); }
function setTasks(tasks){ save('learnify_tasks', tasks); }

function addTask(text){
  const tasks = getTasks();
  tasks.unshift({ id: Date.now(), text, done:false });
  setTasks(tasks);
  renderTasks();
}

function toggleTask(id){
  const tasks = getTasks();
  const t = tasks.find(x=>x.id===id);
  if(t) t.done = !t.done;
  setTasks(tasks);
  renderTasks();
}

function removeTask(id){
  let tasks = getTasks();
  tasks = tasks.filter(x=>x.id!==id);
  setTasks(tasks);
  renderTasks();
}

function renderTasks(){
  const tasks = getTasks();
  const list = document.getElementById('tasksList');
  if(!list) return;
  list.innerHTML = '';
  if(tasks.length===0){
    list.innerHTML = `<li class="text-muted">Задач пока нет — добавь первую!</li>`;
    return;
  }
  tasks.forEach(t=>{
    const li = document.createElement('li');
    li.className = `d-flex justify-content-between align-items-center p-2 mb-2 rounded ${t.done ? 'done' : ''}`;
    li.innerHTML = `
      <div class="d-flex align-items-center gap-2">
        <input type="checkbox" ${t.done ? 'checked' : ''} class="form-check-input me-2">
        <div>${escapeHtml(t.text)}</div>
      </div>
      <div class="d-flex gap-2">
        <button class="btn btn-sm btn-outline-danger" data-id="${t.id}"><i class="bi bi-trash"></i></button>
      </div>
    `;
    // events
    li.querySelector('input[type=checkbox]').addEventListener('change', ()=> toggleTask(t.id));
    li.querySelector('button').addEventListener('click', ()=> removeTask(t.id));
    list.appendChild(li);
  });
}

// -------------------- Pages --------------------

function renderHome(){
  app.innerHTML = `
    <div class="row g-4">
      <div class="col-lg-7">
        <h1 class="mb-3">Добро пожаловать в Learnify</h1>
        <p class="lead text-muted">Лучшее место для обучения веб-разработке и цифровым навыкам. Смотри курсы, веди задачи и учись по плану.</p>

        <div class="mt-4 mb-3">
          <h5>Популярные курсы</h5>
        </div>

        <div class="row popular-row g-3" id="popularRow">
          ${COURSES.slice(0,3).map(c => `
            <div class="col-md-4">
              <div class="card course-card h-100">
                <img src="${c.img}" class="card-img-top" alt="${escapeHtml(c.title)}">
                <div class="card-body d-flex flex-column">
                  <h6 class="card-title mb-1">${escapeHtml(c.title)}</h6>
                  <p class="text-muted small mb-2">Уровень: ${c.level}</p>
                  <div class="mt-auto d-flex justify-content-between align-items-center">
                    <strong class="text-primary">$${c.price}</strong>
                    <div>
                      <button class="btn btn-sm btn-outline-primary me-1" onclick="viewCourse(${c.id})">Подробнее</button>
                      <button class="btn btn-sm btn-outline-success" onclick="toggleFav(${c.id}, this)">В избранное</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>`).join('')}
        </div>

      </div>

      <div class="col-lg-5">
        <div class="tasks-card">
          <div class="d-flex align-items-center justify-content-between mb-2">
            <h5 class="mb-0">Мои задачи</h5>
            <small class="text-muted">Сохраняются локально</small>
          </div>

          <form id="taskForm" class="mb-3 d-flex gap-2">
            <input id="taskInput" class="form-control" placeholder="Добавить задачу (например: просмотреть лекцию 3)" required>
            <button class="btn btn-primary">Добавить</button>
          </form>

          <ul id="tasksList" class="tasks-list"></ul>
        </div>

        <div class="card mt-4 p-3">
          <h6>Почему Learnify?</h6>
          <p class="small text-muted mb-0">Короткие курсы, практические задания и живое сообщество. Подготовлено специально для демонстрации навыков фронтенда.</p>
        </div>
      </div>
    </div>
  `;

  // attach task handlers
  document.getElementById('taskForm').addEventListener('submit', e=>{
    e.preventDefault();
    const input = document.getElementById('taskInput');
    const text = input.value.trim();
    if(text) addTask(text);
    input.value = '';
  });

  renderTasks();
}

function renderCourses(){
  app.innerHTML = `
    <h1>Курсы</h1>
    <p class="text-muted">Фильтр и поиск по курсам.</p>

    <div class="mb-3 d-flex gap-2 flex-wrap">
      <select id="levelFilter" class="form-select w-auto">
        <option value="all">Все уровни</option>
        <option value="Начальный">Начальный</option>
        <option value="Средний">Средний</option>
        <option value="Продвинутый">Продвинутый</option>
      </select>
      <input id="searchInput" class="form-control" placeholder="Поиск по названию">
    </div>

    <div id="coursesGrid" class="row g-3"></div>
  `;

  const grid = document.getElementById('coursesGrid');

  function renderGrid(){
    const q = document.getElementById('searchInput').value.toLowerCase();
    const lvl = document.getElementById('levelFilter').value;
    grid.innerHTML = '';
    COURSES.filter(c => (lvl==='all' || c.level===lvl) && c.title.toLowerCase().includes(q))
      .forEach(c => {
        const col = document.createElement('div');
        col.className = 'col-md-4';
        col.innerHTML = `
          <div class="card course-card h-100">
            <img src="${c.img}" class="card-img-top" alt="${escapeHtml(c.title)}">
            <div class="card-body d-flex flex-column">
              <h6 class="card-title">${escapeHtml(c.title)}</h6>
              <p class="text-muted small mb-2">Уровень: ${c.level}</p>
              <div class="mt-auto d-flex justify-content-between align-items-center">
                <strong class="text-primary">$${c.price}</strong>
                <div>
                  <button class="btn btn-sm btn-outline-primary me-1" onclick="viewCourse(${c.id})">Подробнее</button>
                  <button class="btn btn-sm btn-outline-success" onclick="toggleFav(${c.id}, this)">В избранное</button>
                </div>
              </div>
            </div>
          </div>
        `;
        grid.appendChild(col);
      });
  }

  document.getElementById('searchInput').addEventListener('input', renderGrid);
  document.getElementById('levelFilter').addEventListener('change', renderGrid);
  renderGrid();
}

function renderBlog(){
  app.innerHTML = `
    <h1>Блог</h1>
    <p class="text-muted">Статьи, советы и тренды.</p>

    <div class="row g-4 mt-2">
      <div class="col-lg-8">
        <div id="postsList" class="row g-3"></div>
      </div>
      <div class="col-lg-4">
        <div class="card p-3">
          <h6>Популярные теги</h6>
          <div class="mt-2">
            ${[...new Set(BLOG.flatMap(b => b.tags))].map(tag => `<button class="btn btn-sm btn-outline-secondary me-1 mb-1" data-tag="${tag}">${tag}</button>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  const postsList = document.getElementById('postsList');
  function renderPosts(filterTag){
    postsList.innerHTML = BLOG.map(b => `
      <div class="col-md-12">
        <div class="card blog-card p-3">
          <div class="row g-0 align-items-center">
            <div class="col-md-4">
              <img src="${b.img}" alt="" class="img-fluid rounded">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5>${escapeHtml(b.title)}</h5>
                <small class="text-muted">${b.date} • ${b.tags.join(', ')}</small>
                <p class="mt-2 text-muted small">${stripHtml(b.content).slice(0,150)}...</p>
                <div class="mt-2">
                  <a class="btn btn-sm btn-outline-primary" href="#/blog/${b.id}">Читать</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    if(filterTag){
      postsList.innerHTML = BLOG.filter(b => b.tags.includes(filterTag)).map(b => `
        <div class="col-md-12">
          <div class="card blog-card p-3">
            <div class="row g-0 align-items-center">
              <div class="col-md-4">
                <img src="${b.img}" alt="" class="img-fluid rounded">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5>${escapeHtml(b.title)}</h5>
                  <small class="text-muted">${b.date} • ${b.tags.join(', ')}</small>
                  <p class="mt-2 text-muted small">${stripHtml(b.content).slice(0,150)}...</p>
                  <div class="mt-2">
                    <a class="btn btn-sm btn-outline-primary" href="#/blog/${b.id}">Читать</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  renderPosts();

  // tag buttons
  document.querySelectorAll('[data-tag]').forEach(btn=>{
    btn.addEventListener('click', ()=> renderPosts(btn.getAttribute('data-tag')));
  });
}

function renderBlogPost(id){
  const post = BLOG.find(p => p.id === id);
  if(!post) { app.innerHTML = `<h1>Пост не найден</h1><a href="#/blog">Назад</a>`; return; }
  app.innerHTML = `
    <div class="row g-4">
      <div class="col-lg-8">
        <h1>${escapeHtml(post.title)}</h1>
        <small class="text-muted">${post.date} • ${post.tags.join(', ')}</small>
        <img src="${post.img}" class="img-fluid rounded my-3" alt="">
        <div class="article-content">${post.content}</div>
        <div class="mt-4">
          <a class="btn btn-outline-secondary" href="#/blog">← Назад к блогу</a>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card p-3">
          <h6>Похожие посты</h6>
          <ul class="list-unstyled mb-0">
            ${BLOG.filter(b => b.id !== post.id).slice(0,3).map(b => `<li><a href="#/blog/${b.id}">${escapeHtml(b.title)}</a></li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
}

function renderAbout(){
  app.innerHTML = `
    <h1>О Learnify</h1>
    <p class="text-muted">Вымышленная история проекта и демонстрация навыков фронтенд-разработки.</p>

    <div class="row g-4 mt-3">
      <div class="col-lg-6">
        <img src="https://avatars.mds.yandex.net/i?id=43e5dd441f39966bcd9137b4be75841f_l-8231149-images-thumbs&n=13" alt="story" class="story-illustration">
      </div>

      <div class="col-lg-6">
        <h4>Наша история</h4>
        <p>Learnify студенческий стартап, родившийся в общежитии: трое студентов решили объединить знания и создать удобную платформу, где можно учиться по кратким практическим курсам. Мы добавляем задания, следим за прогрессом и помогаем собирать портфолио.</p>

        <h6>Наша миссия</h6>
        <p class="text-muted small">Помогать студентам быстро получать практические навыки и уверенность в реальных задачах.</p>

        <h6 class="mt-3">Our Team</h6>
        <div class="d-flex gap-2 flex-wrap">
          <div class="card p-2" style="width:140px">
            <img src="https://i.pinimg.com/originals/b2/37/27/b237274c0f96fbc2e7daa4a4ed2b9870.jpg" alt="" class="img-fluid rounded mb-2">
            <strong>Alisa</strong>
            <div class="small text-muted">Frontend Lead</div>
          </div>
          <div class="card p-2" style="width:140px">
            <img src="https://i.pinimg.com/736x/df/6d/86/df6d86c9c074c6c9278156579938f0bc.jpg" alt="" class="img-fluid rounded mb-2">
            <strong>Beka</strong>
            <div class="small text-muted">Backend (демо)</div>
          </div>
          <div class="card p-2" style="width:140px">
            <img src="https://i.pinimg.com/originals/cb/b8/82/cbb8828b3a8feff6ebb69ab43977dc08.jpg" alt="" class="img-fluid rounded mb-2">
            <strong>Jeck</strong>
            <div class="small text-muted">Founder</div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <h5>Видео о проекте</h5>
      <video class="w-100 rounded" controls>
        <source src="video.mp4.mp4" type="video/mp4">
      </video>
    </div>
  `;
}

function renderProfile(){
  const user = currentUser();
  const fav = load('learnify_fav', []);
  const cart = load('learnify_cart', []);
  app.innerHTML = `
    <h1>Профиль</h1>
    ${user ? `<p>Вы вошли как <strong>${escapeHtml(user.email)}</strong></p>` : `<p class="text-muted">Вы не вошли. Войдите, чтобы оформить покупку.</p>`}

    <div class="row g-3 mt-3">
      <div class="col-md-6">
        <h5>Избранное</h5>
        <div id="favList" class="row g-2"></div>
      </div>
      <div class="col-md-6">
        <h5>Корзина</h5>
        <div id="cartArea"></div>
      </div>
    </div>
  `;

  const favList = document.getElementById('favList');
  if(fav.length === 0) favList.innerHTML = '<p class="text-muted">Пока пусто</p>';
  else fav.forEach(id => {
    const c = COURSES.find(x => x.id === id);
    if(c) {
      const col = document.createElement('div');
      col.className = 'col-12';
      col.innerHTML = `<div class="card p-2 d-flex"><div class="d-flex justify-content-between align-items-center"><div><strong>${escapeHtml(c.title)}</strong><div class="text-muted small">Уровень: ${c.level}</div></div><div><button class="btn btn-sm btn-outline-danger" onclick="removeFromFav(${c.id})">Удалить</button></div></div></div>`;
      favList.appendChild(col);
    }
  });

  const cartArea = document.getElementById('cartArea');
  if(cart.length === 0) cartArea.innerHTML = '<p class="text-muted">Корзина пуста</p>';
  else {
    let total = 0;
    const ul = document.createElement('ul');
    ul.className = 'list-group mb-2';
    cart.forEach(id => {
      const c = COURSES.find(x => x.id === id);
      if(c) {
        total += c.price;
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `${escapeHtml(c.title)} <strong>$${c.price}</strong> <button class="btn btn-sm btn-outline-danger ms-3" onclick="removeFromCart(${c.id})">Удалить</button>`;
        ul.appendChild(li);
      }
    });
    cartArea.appendChild(ul);
    const checkoutBtn = document.createElement('button');
    checkoutBtn.className = 'btn btn-success';
    checkoutBtn.textContent = `Оформить (${cart.length}) — $${total}`;
    checkoutBtn.addEventListener('click', ()=> {
      // open checkout modal
      checkoutModal.show();
    });
    cartArea.appendChild(checkoutBtn);
  }
}

// -------------------- Helpers & Actions --------------------

function renderNotFound(){
  app.innerHTML = `<h1>404 — Страница не найдена</h1><p><a href="#/">Вернуться на главную</a></p>`;
}

function cardHTML(c){
  return `
    <div class="card course-card h-100">
      <img src="${c.img}" class="card-img-top" alt="${escapeHtml(c.title)}">
      <div class="card-body d-flex flex-column">
        <h6 class="card-title">${escapeHtml(c.title)}</h6>
        <p class="text-muted small mb-2">Уровень: ${c.level}</p>
        <div class="mt-auto d-flex justify-content-between align-items-center">
          <strong class="text-primary">$${c.price}</strong>
          <div>
            <button class="btn btn-sm btn-outline-primary me-1" onclick="viewCourse(${c.id})">Подробнее</button>
            <button class="btn btn-sm btn-outline-success" onclick="toggleFav(${c.id}, this)">В избранное</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

window.viewCourse = function(id){
  const c = COURSES.find(x=>x.id===id);
  if(!c) return alert('Курс не найден');
  app.innerHTML = `
    <h1>${escapeHtml(c.title)}</h1>
    <div class="row g-3">
      <div class="col-md-6"><img src="${c.img}" class="img-fluid rounded" alt=""></div>
      <div class="col-md-6">
        <h4>$${c.price}</h4>
        <p class="text-muted">Уровень: ${c.level}</p>
        <p>Подробное описание курса: видео-лекции, практические задания, домашние работы и финальный проект.</p>
        <div class="d-flex gap-2 mt-3">
          <button id="enrollBtn" class="btn btn-primary">Записаться</button>
          <a class="btn btn-outline-secondary" href="#/courses">Назад</a>
        </div>
      </div>
    </div>
  `;

  document.getElementById('enrollBtn').addEventListener('click', ()=>{
    const user = currentUser();
    if(!user) return alert('Войдите чтобы записаться на курс');
    const cart = load('learnify_cart', []);
    if(!cart.includes(id)) cart.push(id);
    save('learnify_cart', cart);
    alert('Курс добавлен в корзину');
  });
};

window.toggleFav = function(id, btn){
  const fav = load('learnify_fav', []);
  const idx = fav.indexOf(id);
  if(idx !== -1){
    fav.splice(idx,1);
    if(btn) btn.textContent = 'В избранное';
  } else {
    fav.push(id);
    if(btn) btn.textContent = 'В избранном';
  }
  save('learnify_fav', fav);
};

window.removeFromFav = function(id){
  const fav = load('learnify_fav', []);
  save('learnify_fav', fav.filter(x=>x!==id));
  renderProfile();
};

window.removeFromCart = function(id){
  const cart = load('learnify_cart', []);
  save('learnify_cart', cart.filter(x=>x!==id));
  renderProfile();
};

// -------------------- Checkout (simulated) --------------------
document.getElementById('checkoutForm').addEventListener('submit', e=>{
  e.preventDefault();
  const name = document.getElementById('orderName').value.trim();
  const email = document.getElementById('orderEmail').value.trim();
  const card = document.getElementById('cardNumber').value.replaceAll(' ','').trim();
  const exp = document.getElementById('cardExp').value.trim();
  const cvv = document.getElementById('cardCvv').value.trim();

  if(name.length < 2) return alert('Введите имя.');
  if(!email.includes('@')) return alert('Введите корректный email.');
  if(!/^[0-9]{13,19}$/.test(card)) return alert('Номер карты должен содержать 13–19 цифр (симуляция).');
  if(!/^\d{2}\/\d{2}$/.test(exp)) return alert('Срок в формате MM/YY.');
  if(!/^\d{3,4}$/.test(cvv)) return alert('CVV 3–4 цифры.');

  // simulate processing
  checkoutModal.hide();
  save('learnify_cart', []); // clear cart
  alert('Платёж успешно обработан (симуляция). Спасибо за покупку!');
  renderProfile();
});

// -------------------- Utility helpers --------------------
function escapeHtml(s=''){ return String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;'); }
function stripHtml(html=''){ return html.replace(/<[^>]*>?/gm, ''); }

// -------------------- Init console --------------------
console.info('Learnify v2 loaded — ready.');

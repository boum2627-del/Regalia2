// Init Icons
lucide.createIcons();

// --- DATA ---
const carData = [
    { id: 1, brand: 'Lamborghini', model: 'Aventador Ultimae "Ombra"', img: 'https://images.unsplash.com/photo-1759066591048-ead4c2eeac6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGxhbWJvcmdoaW5pJTIwd2lkZWJvZHklMjBuaWdodHxlbnwxfHx8fDE3NzEyNjgxNDN8MA&ixlib=rb-4.1.0&q=80&w=800' },
    { id: 2, brand: 'BMW', model: 'M4 CSL "Phantom"', img: 'https://images.unsplash.com/photo-1552305360-e592ec7fc092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGJtdyUyMG00JTIwbW9kaWZpZWQlMjBkYXJrfGVufDF8fHx8MTc3MTI2ODE0NHww&ixlib=rb-4.1.0&q=80&w=800' },
    { id: 3, brand: 'Ferrari', model: 'SF90 "Cavallo Nero"', img: 'https://images.unsplash.com/photo-1686440706452-56b603b4af99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGZlcnJhcmklMjB3aWRlYm9keSUyMGRhcmt8ZW58MXx8fHwxNzcxMjY4MTQ0fDA&ixlib=rb-4.1.0&q=80&w=800' },
    { id: 4, brand: 'Lamborghini', model: 'Huracan STO "Venom"', img: 'https://images.unsplash.com/photo-1770172505610-9976b11cfe3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGxhbWJvcmdoaW5pJTIwYXZlbnRhZG9yJTIwc2lkZSUyMHZpZXd8ZW58MXx8fHwxNzcxMjc3MzM5fDA&ixlib=rb-4.1.0&q=80&w=800' },
    { id: 5, brand: 'Ferrari', model: '488 Pista "Carbon"', img: 'https://images.unsplash.com/photo-1703679462958-7ba16df96055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGZlcnJhcmklMjA0ODglMjBwaXN0YSUyMG1vZGlmaWVkfGVufDF8fHx8MTc3MTI3NzMzOXww&ixlib=rb-4.1.0&q=80&w=800' },
    { id: 6, brand: 'BMW', model: 'M8 Gran Coupe "Stealth"', img: 'https://images.unsplash.com/photo-1769673459570-95a6a20a9dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGJtdyUyMG00JTIwbW9kaWZpZWQlMjBsdXh1cnl8ZW58MXx8fHwxNzcxMjc3MzI5fDA&ixlib=rb-4.1.0&q=80&w=800' }
];

const rimsData = [
    { name: 'Regalia Forged Gold', img: 'https://images.unsplash.com/photo-1770571613947-4b050f910a8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwY2FyJTIwcmltcyUyMGx1eHVyeXxlbnwxfHx8fDE3NzEyNzczMjl8MA&ixlib=rb-4.1.0&q=80&w=600' },
    { name: 'Carbon Blade', img: 'https://images.unsplash.com/photo-1760466871156-37559e72b70c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJib24lMjBmaWJlciUyMGRldGFpbCUyMGNhcnxlbnwxfHx8fDE3NzEyNzczMjl8MA&ixlib=rb-4.1.0&q=80&w=600' },
    { name: 'Monoblock Stealth', img: 'https://images.unsplash.com/photo-1760510509489-5b6b2f83e7b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwY2FyJTIwd2hlZWwlMjByaW0lMjBsdXh1cnl8ZW58MXx8fHwxNzcxMjY4MTQ0fDA&ixlib=rb-4.1.0&q=80&w=600' },
];

// --- INTRO ---
window.addEventListener('load', () => {
    const logo = document.getElementById('intro-logo');
    const line = document.getElementById('intro-line');
    const sub = document.getElementById('intro-sub');
    const screen = document.getElementById('intro-screen');

    if(logo) setTimeout(() => { logo.style.opacity = 1; logo.style.transform = 'scale(1)'; }, 300);
    if(line) setTimeout(() => { line.style.width = '60%'; }, 1500);
    if(sub) setTimeout(() => { sub.style.opacity = 1; }, 2500);

    setTimeout(() => {
        if(screen) screen.classList.add('intro-hidden');
    }, 4000);
    
    // Render initial data
    renderCars('All');
    renderRims();
});

// --- NAVBAR & SCROLL ---
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if(nav) {
        if(window.scrollY > 50) {
            nav.classList.add('bg-black/90', 'backdrop-blur-md', 'py-4', 'border-b', 'border-[#222]');
            nav.classList.remove('bg-transparent', 'py-6');
        } else {
            nav.classList.remove('bg-black/90', 'backdrop-blur-md', 'py-4', 'border-b', 'border-[#222]');
            nav.classList.add('bg-transparent', 'py-6');
        }
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if(mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// --- HERO SLIDER ---
const slidesData = [
    { title: 'Shadow of the Bull', sub: 'Lamborghini Aventador Ultimae "Ombra"' },
    { title: 'Italian Venom', sub: 'Ferrari SF90 "Cavallo Nero"' },
    { title: 'Bavarian Ghost', sub: 'BMW M4 CSL "Phantom"' }
];

const sliderEl = document.getElementById('hero-slider');
if(sliderEl) {
    let currentSlide = 0;
    const slides = sliderEl.children;
    const titleEl = document.getElementById('hero-title');
    const subEl = document.getElementById('hero-subtitle');
    const dotsContainer = document.getElementById('slider-dots');
    let dots = dotsContainer ? dotsContainer.children : [];

    setInterval(() => {
        // Update Slides
        if(slides[currentSlide]) slides[currentSlide].style.opacity = 0;
        if(dots[currentSlide]) {
            dots[currentSlide].classList.remove('bg-gold');
            dots[currentSlide].classList.add('bg-gray-700');
        }
        
        currentSlide = (currentSlide + 1) % slides.length;
        
        if(slides[currentSlide]) slides[currentSlide].style.opacity = 1;
        if(dots[currentSlide]) {
            dots[currentSlide].classList.remove('bg-gray-700');
            dots[currentSlide].classList.add('bg-gold');
        }

        // Update Text
        if(titleEl && subEl) {
            titleEl.style.opacity = 0;
            subEl.style.opacity = 0;
            setTimeout(() => {
                if(slidesData[currentSlide]) {
                    titleEl.textContent = slidesData[currentSlide].title;
                    subEl.textContent = slidesData[currentSlide].sub;
                    titleEl.style.opacity = 1;
                    subEl.style.opacity = 1;
                }
            }, 500);
        }
    }, 5000);
}

// --- CAR FILTER & RENDER ---
const brandSelect = document.getElementById('brand-select');
const searchBtn = document.getElementById('search-btn');
const carGrid = document.getElementById('car-grid');

function renderCars(filterBrand) {
    if(!carGrid) return;
    
    carGrid.innerHTML = ''; // Clear
    
    const filtered = carData.filter(car => filterBrand === 'All' || car.brand === filterBrand);
    
    if(filtered.length === 0) {
        carGrid.innerHTML = '<p class="text-center text-gray-500 col-span-3">No models found for this selection.</p>';
        return;
    }

    filtered.forEach(car => {
        const div = document.createElement('div');
        div.className = 'group relative cursor-pointer fade-in visible';
        div.onclick = () => openModal(car.brand, car.model, car.img); // Click Action
        
        div.innerHTML = `
            <div class="aspect-[4/3] overflow-hidden bg-zinc-900 border border-zinc-800 group-hover:border-gold/50 transition-all duration-500 relative">
                <div class="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span class="text-gold font-serif font-bold tracking-widest text-xs border border-gold px-2 py-1">REGALIA</span>
                </div>
                <img src="${car.img}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div class="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 class="text-gold text-xs tracking-[0.2em] uppercase mb-1">${car.brand}</h4>
                    <h3 class="text-2xl font-serif text-white">${car.model}</h3>
                </div>
            </div>
        `;
        carGrid.appendChild(div);
    });
}

// Search Logic
if(searchBtn && brandSelect) {
    searchBtn.addEventListener('click', () => {
        const selected = brandSelect.value;
        // Scroll to grid
        document.getElementById('models').scrollIntoView({ behavior: 'smooth' });
        // Simulate loading
        carGrid.style.opacity = 0.5;
        setTimeout(() => {
            renderCars(selected);
            carGrid.style.opacity = 1;
        }, 500);
    });
}

// --- RIMS RENDER ---
const rimsGrid = document.getElementById('rims-grid');
function renderRims() {
    if(!rimsGrid) return;
    
    rimsData.forEach(rim => {
        const div = document.createElement('div');
        div.className = 'group relative cursor-pointer fade-in visible';
        div.onclick = () => openModal('Exclusive Rim', rim.name, rim.img);
        
        div.innerHTML = `
            <div class="overflow-hidden aspect-square border border-[#222] relative">
                <img src="${rim.img}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
                    <p class="text-gold font-serif text-xl border-b border-gold pb-2">${rim.name}</p>
                </div>
            </div>
        `;
        rimsGrid.appendChild(div);
    });
}


// --- MODAL LOGIC ---
const modal = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalSub = document.getElementById('modal-sub');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('modal-close');

function openModal(sub, title, img) {
    if(!modal) return;
    modalTitle.textContent = title;
    modalSub.textContent = sub;
    modalImg.src = img;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent scroll
}

if(closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('open');
        document.body.style.overflow = 'auto';
    });
}

// Close on overlay click
if(modal) {
    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            modal.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    });
}

// --- CONTACT FORM ---
const contactForm = document.getElementById('contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = 'Sending...';
        btn.classList.add('opacity-70');
        
        setTimeout(() => {
            btn.innerHTML = 'Message Sent ✓';
            btn.classList.remove('bg-gold', 'text-black');
            btn.classList.add('bg-green-600', 'text-white');
            contactForm.reset();
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.classList.add('bg-gold', 'text-black');
                btn.classList.remove('bg-green-600', 'text-white', 'opacity-70');
            }, 3000);
        }, 1500);
    });
}

// --- SCROLL ANIMATIONS ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

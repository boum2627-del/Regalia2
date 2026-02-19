// ===== VEHICLE DATA =====
const vehicles = {
    bmw: [
        {
            id: 'bmw-m8',
            brand: 'BMW',
            model: 'M8',
            name: 'M8 Competition Black Edition',
            description: 'Ultimate widebody transformation with carbon fiber elements, forged gold wheels, and aggressive stance.',
            specs: [
                'Widebody Carbon Kit',
                'Forged 21" Gold Wheels',
                'Lowered Sport Suspension',
                'Custom LED Lighting',
                'Diamond Stitched Interior',
                'Gold Accent Package'
            ],
            images: {
                front: 'https://images.unsplash.com/photo-1771396095734-5c79bd6672d5?w=1920',
                side: 'https://images.unsplash.com/photo-1637610742058-4f773a6d36d8?w=1920',
                rear: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920',
                gallery: 'https://images.unsplash.com/photo-1637610742058-4f773a6d36d8?w=1080'
            }
        },
        {
            id: 'bmw-x6m',
            brand: 'BMW',
            model: 'X6M',
            name: 'X6M Prestige Edition',
            description: 'Luxury SUV transformed into a commanding presence with exclusive widebody and gold accents.',
            specs: [
                'Widebody Aero Kit',
                'Forged 22" Gold Wheels',
                'Air Suspension System',
                'Premium LED Package',
                'Alcantara Interior',
                'Gold Trim Details'
            ],
            images: {
                front: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1920',
                side: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1920',
                rear: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1920',
                gallery: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1080'
            }
        },
        {
            id: 'bmw-m4',
            brand: 'BMW',
            model: 'M4',
            name: 'M4 Competition Carbon',
            description: 'Track-focused widebody masterpiece with extensive carbon fiber and performance upgrades.',
            specs: [
                'Carbon Widebody Kit',
                'Forged 20" Gold Wheels',
                'Coilover Suspension',
                'Custom Exhaust System',
                'Race Seats with Gold Stitching',
                'Carbon Interior Trim'
            ],
            images: {
                front: 'https://images.unsplash.com/photo-1617654112368-307921291f42?w=1920',
                side: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920',
                rear: 'https://images.unsplash.com/photo-1621135802920-1928658a3fbe?w=1920',
                gallery: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1080'
            }
        }
    ],
    ferrari: [
        {
            id: 'ferrari-812',
            brand: 'Ferrari',
            model: '812',
            name: '812 Superfast Regalia',
            description: 'Italian excellence elevated with custom widebody, carbon elements, and gold accents.',
            specs: [
                'Carbon Widebody Kit',
                'Forged 21" Gold Wheels',
                'Performance Exhaust',
                'Lowered Suspension',
                'Custom Leather Interior',
                'Gold Badge Package'
            ],
            images: {
                front: 'https://images.unsplash.com/photo-1546480352-b36b6f5627e4?w=1920',
                side: 'https://images.unsplash.com/photo-1633011243707-73a692173289?w=1920',
                rear: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=1920',
                gallery: 'https://images.unsplash.com/photo-1633011243707-73a692173289?w=1080'
            }
        },
        {
            id: 'ferrari-sf90',
            brand: 'Ferrari',
            model: 'SF90',
            name: 'SF90 Stradale Elite',
            description: 'Hybrid hypercar transformed with exclusive aerodynamic enhancements and luxury details.',
            specs: [
                'Aero Carbon Package',
                'Forged 20" Gold Wheels',
                'Active Suspension',
                'Custom LED System',
                'Alcantara & Leather Interior',
                'Gold Caliper Package'
            ],
            images: {
                front: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1920',
                side: 'https://images.unsplash.com/photo-1592853625597-7d17be820d0c?w=1920',
                rear: 'https://images.unsplash.com/photo-1610411497190-7594cd8a0b7f?w=1920',
                gallery: 'https://images.unsplash.com/photo-1592853625597-7d17be820d0c?w=1080'
            }
        },
        {
            id: 'ferrari-f8',
            brand: 'Ferrari',
            model: 'F8',
            name: 'F8 Tributo Black Gold',
            description: 'Mid-engine masterpiece enhanced with carbon widebody and premium gold detailing.',
            specs: [
                'Widebody Carbon Kit',
                'Forged 20" Gold Wheels',
                'Sport Suspension',
                'Titanium Exhaust',
                'Custom Interior Trim',
                'Gold Accent Package'
            ],
            images: {
                front: 'https://images.unsplash.com/photo-1575317138194-942d61f7dc16?w=1920',
                side: 'https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?w=1920',
                rear: 'https://images.unsplash.com/photo-1617531653520-bd4f8c5a9b1d?w=1920',
                gallery: 'https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?w=1080'
            }
        }
    ],
    lamborghini: [
        {
            id: 'lamborghini-aventador',
            brand: 'Lamborghini',
            model: 'Aventador',
            name: 'Aventador SVJ Regalia',
            description: 'The ultimate V12 beast with extreme widebody, carbon fiber, and gold forged wheels.',
            specs: [
                'Extreme Widebody Kit',
                'Forged 21" Gold Wheels',
                'Adjustable Suspension',
                'Custom Exhaust System',
                'Diamond Stitched Interior',
                'Full Carbon Package'
            ],
            images: {
                front: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1920',
                side: 'https://images.unsplash.com/photo-1765607754439-e62fa2009e66?w=1920',
                rear: 'https://images.unsplash.com/photo-1616788494672-ec68383b3fac?w=1920',
                gallery: 'https://images.unsplash.com/photo-1765607754439-e62fa2009e66?w=1080'
            }
        },
        {
            id: 'lamborghini-huracan',
            brand: 'Lamborghini',
            model: 'Huracan',
            name: 'Huracan EVO Prestige',
            description: 'V10 perfection with aggressive widebody transformation and luxury gold accents.',
            specs: [
                'Widebody Aero Kit',
                'Forged 20" Gold Wheels',
                'Coilover Suspension',
                'Performance Exhaust',
                'Alcantara Interior',
                'Gold Detail Package'
            ],
            images: {
                front: 'https://images.unsplash.com/photo-1614378122606-e05079543792?w=1920',
                side: 'https://images.unsplash.com/photo-1621135802920-1928658a3fbe?w=1920',
                rear: 'https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=1920',
                gallery: 'https://images.unsplash.com/photo-1614378122606-e05079543792?w=1080'
            }
        },
        {
            id: 'lamborghini-urus',
            brand: 'Lamborghini',
            model: 'Urus',
            name: 'Urus Performante Elite',
            description: 'Super SUV transformed with widebody kit, carbon elements, and exclusive gold wheels.',
            specs: [
                'Widebody Carbon Kit',
                'Forged 23" Gold Wheels',
                'Air Suspension System',
                'Custom LED Lighting',
                'Premium Leather Interior',
                'Gold Trim Package'
            ],
            images: {
                front: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1920',
                side: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1920',
                rear: 'https://images.unsplash.com/photo-1600006604077-c27d4d9ed929?w=1920',
                gallery: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1080'
            }
        }
    ]
};

// ===== GLOBAL STATE =====
let currentPage = 'home';
let currentBrand = '';
let currentVehicle = null;

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
    initSplashScreen();
    initNavigation();
    initSlider();
    initFindModel();
    initMobileMenu();
});

// ===== SPLASH SCREEN =====
function initSplashScreen() {
    const splashScreen = document.getElementById('splash-screen');
    const header = document.getElementById('header');
    
    setTimeout(() => {
        splashScreen.classList.remove('active');
        header.style.opacity = '1';
    }, 3500);
}

// ===== NAVIGATION =====
function initNavigation() {
    // Desktop navigation
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            const brand = link.getAttribute('data-brand');
            
            if (brand) {
                navigateTo(page, brand);
            } else {
                navigateTo(page);
            }
            
            // Close mobile menu if open
            const mobileMenu = document.getElementById('nav-mobile');
            const mobileBtn = document.getElementById('mobile-menu-btn');
            mobileMenu.classList.remove('active');
            mobileBtn.classList.remove('active');
        });
    });

    // Back button
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            navigateTo('models', currentBrand);
        });
    }
}

function navigateTo(page, brand = '') {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Show selected page
    const selectedPage = document.getElementById(`page-${page}`);
    if (selectedPage) {
        selectedPage.classList.add('active');
        currentPage = page;
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Load page specific content
        if (page === 'models' && brand) {
            currentBrand = brand;
            loadModelsPage(brand);
        }
    }
}

// ===== MODELS PAGE =====
function loadModelsPage(brand) {
    const brandTitle = document.getElementById('models-brand-title');
    const brandDescription = document.getElementById('models-description');
    const modelsGrid = document.getElementById('models-grid');
    
    brandTitle.textContent = brand.toUpperCase();
    brandDescription.textContent = `Discover our exclusive ${brand.toUpperCase()} transformations`;
    
    const brandVehicles = vehicles[brand.toLowerCase()];
    modelsGrid.innerHTML = '';
    
    brandVehicles.forEach(vehicle => {
        const card = document.createElement('div');
        card.className = 'model-card';
        card.innerHTML = `
            <div class="model-image">
                <img src="${vehicle.images.gallery}" alt="${vehicle.name}">
                <div class="model-overlay"></div>
                <div class="model-image-border"></div>
            </div>
            <p class="model-model">${vehicle.model}</p>
            <h3 class="model-name">${vehicle.name}</h3>
            <p class="model-desc">${vehicle.description}</p>
        `;
        
        card.addEventListener('click', () => {
            loadModelDetail(vehicle);
        });
        
        modelsGrid.appendChild(card);
    });
}

// ===== MODEL DETAIL PAGE =====
function loadModelDetail(vehicle) {
    currentVehicle = vehicle;
    
    document.getElementById('detail-brand').textContent = `${vehicle.brand} ${vehicle.model}`;
    document.getElementById('detail-title').textContent = vehicle.name;
    document.getElementById('detail-description').textContent = vehicle.description;
    
    // Set main image
    const mainImg = document.getElementById('detail-img');
    mainImg.src = vehicle.images.front;
    mainImg.alt = vehicle.name;
    
    // Set view thumbnails
    const views = document.querySelectorAll('.view-thumb');
    views[0].querySelector('img').src = vehicle.images.front;
    views[1].querySelector('img').src = vehicle.images.side;
    views[2].querySelector('img').src = vehicle.images.rear;
    
    // View thumbnail click handlers
    views.forEach(view => {
        view.addEventListener('click', () => {
            views.forEach(v => v.classList.remove('active'));
            view.classList.add('active');
            
            const viewType = view.getAttribute('data-view');
            mainImg.src = vehicle.images[viewType];
        });
    });
    
    // Set specs
    const specsList = document.getElementById('specs-list');
    specsList.innerHTML = '';
    
    vehicle.specs.forEach(spec => {
        const specItem = document.createElement('div');
        specItem.className = 'spec-item';
        specItem.innerHTML = `
            <div class="spec-icon">✓</div>
            <p>${spec}</p>
        `;
        specsList.appendChild(specItem);
    });
    
    navigateTo('model-detail');
}

// ===== SLIDER =====
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentSlide = 0;
    let slideInterval;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    function stopAutoSlide() {
        clearInterval(slideInterval);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });
    
    prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            stopAutoSlide();
            currentSlide = index;
            showSlide(currentSlide);
            startAutoSlide();
        });
    });
    
    startAutoSlide();
}

// ===== FIND MODEL =====
function initFindModel() {
    const selectBrand = document.getElementById('select-brand');
    const selectModel = document.getElementById('select-model');
    const searchBtn = document.getElementById('search-btn');
    
    selectBrand.addEventListener('change', () => {
        const brand = selectBrand.value;
        
        if (brand) {
            selectModel.disabled = false;
            selectModel.innerHTML = '<option value="">Select Model</option>';
            
            const brandVehicles = vehicles[brand];
            brandVehicles.forEach(vehicle => {
                const option = document.createElement('option');
                option.value = vehicle.id;
                option.textContent = vehicle.model;
                selectModel.appendChild(option);
            });
        } else {
            selectModel.disabled = true;
            selectModel.innerHTML = '<option value="">Select Model</option>';
            searchBtn.disabled = true;
        }
    });
    
    selectModel.addEventListener('change', () => {
        if (selectModel.value) {
            searchBtn.disabled = false;
        } else {
            searchBtn.disabled = true;
        }
    });
    
    searchBtn.addEventListener('click', () => {
        const brand = selectBrand.value;
        const vehicleId = selectModel.value;
        
        if (brand && vehicleId) {
            const vehicle = vehicles[brand].find(v => v.id === vehicleId);
            if (vehicle) {
                loadModelDetail(vehicle);
            }
        }
    });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('nav-mobile');
    const dropdownToggle = document.querySelector('.dropdown-toggle-mobile');
    const dropdownMenu = document.querySelector('.dropdown-menu-mobile');
    
    mobileBtn.addEventListener('click', () => {
        mobileBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', () => {
            dropdownMenu.classList.toggle('active');
        });
    }
}

// ===== NEWS CARDS CLICK =====
document.addEventListener('DOMContentLoaded', () => {
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach(card => {
        card.addEventListener('click', () => {
            const vehicleId = card.getAttribute('data-vehicle');
            const [brand, model] = vehicleId.split('-');
            
            let vehicle;
            if (brand === 'bmw') {
                vehicle = vehicles.bmw.find(v => v.id === vehicleId);
            } else if (brand === 'ferrari') {
                vehicle = vehicles.ferrari.find(v => v.id === vehicleId);
            } else if (brand === 'lamborghini') {
                vehicle = vehicles.lamborghini.find(v => v.id === vehicleId);
            }
            
            if (vehicle) {
                loadModelDetail(vehicle);
            }
        });
    });
});

// ===== CONTACT FORM =====
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            console.log('Form submitted:', data);
            
            alert('Thank you for your message! We will contact you soon.');
            contactForm.reset();
        });
    }
});

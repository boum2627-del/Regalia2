// Car Data
const cars = [
    {
        id: 1,
        brand: 'lamborghini',
        model: 'Aventador SVJ',
        image: 'https://images.unsplash.com/photo-1623575398807-ff30453553a9?q=80&w=800&auto=format&fit=crop',
        desc: 'Carbon Fiber Edition'
    },
    {
        id: 2,
        brand: 'ferrari',
        model: 'SF90 Stradale',
        image: 'https://images.unsplash.com/photo-1610013336193-8367d7606e7d?q=80&w=800&auto=format&fit=crop',
        desc: 'Nero Daytona'
    },
    {
        id: 3,
        brand: 'bmw',
        model: 'M8 Competition',
        image: 'https://images.unsplash.com/photo-1549344087-bce31daded07?q=80&w=800&auto=format&fit=crop',
        desc: 'Gold Dust Finish'
    },
    {
        id: 4,
        brand: 'lamborghini',
        model: 'Urus Performante',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop',
        desc: 'Stealth Black'
    },
    {
        id: 5,
        brand: 'ferrari',
        model: '812 Superfast',
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop',
        desc: 'Onyx Widebody'
    },
    {
        id: 6,
        brand: 'bmw',
        model: 'X6 M',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop',
        desc: 'Forged Carbon Kit'
    }
];

// Slider Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-image');
const totalSlides = slides.length;
const sliderInterval = 5000;

function rotateSlide() {
    slides.forEach(slide => slide.style.opacity = '0');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].style.opacity = '1';
    updateIndicators();
}

function setSlide(index) {
    currentSlide = index;
    slides.forEach(slide => slide.style.opacity = '0');
    slides[currentSlide].style.opacity = '1';
    updateIndicators();
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.slider-controls button');
    // Implementation left simple for now
}

setInterval(rotateSlide, sliderInterval);

// Navigation Logic (SPA Routing)
function navigateTo(sectionId) {
    // Hide all sections
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active-section');
        setTimeout(() => {
            if(!section.classList.contains('active-section')) {
               section.style.display = 'none'; 
            }
        }, 500); // Wait for fade out
    });

    // Show target section
    const target = document.getElementById(sectionId);
    if (target) {
        // Reset display to allow fade in
        target.style.display = (sectionId === 'home' || sectionId === 'contact') ? 'flex' : 'block';
        
        // Small delay to allow display change to register before opacity transition
        setTimeout(() => {
            target.classList.add('active-section');
        }, 50);
        
        window.scrollTo(0, 0);
    }

    // Update Nav State
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if(link.textContent.trim().toLowerCase() === sectionId) {
            link.classList.add('active'); // Simple check, might need mapping
        }
    });

    // Close mobile menu if open
    document.getElementById('mobile-menu').classList.add('hidden');
}

let currentBrand = 'all';

// Car Filter Logic
function filterCars(brand) {
    if (brand) currentBrand = brand;
    
    const searchText = document.getElementById('model-search').value.toLowerCase();
    const grid = document.getElementById('car-grid');
    grid.innerHTML = ''; // Clear current

    const filtered = cars.filter(car => {
        const matchesBrand = currentBrand === 'all' || car.brand === currentBrand;
        const matchesModel = car.model.toLowerCase().includes(searchText);
        return matchesBrand && matchesModel;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '<p class="text-center text-gray-500 font-montserrat col-span-full">No models found matching your criteria.</p>';
        return;
    }

    filtered.forEach(car => {
        const card = document.createElement('div');
        card.className = 'car-card group relative bg-gray-900 border border-gray-800 hover:border-gold overflow-hidden';
        card.innerHTML = `
            <div class="relative overflow-hidden h-64">
                <img src="${car.image}" alt="${car.model}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                <div class="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300"></div>
                <div class="absolute top-4 right-4 bg-black/80 text-gold px-3 py-1 font-montserrat text-xs tracking-widest border border-gold/30">
                    REGALIA
                </div>
            </div>
            <div class="p-6">
                <h3 class="font-cinzel text-xl text-white mb-2 group-hover:text-gold transition-colors">${car.model}</h3>
                <p class="font-montserrat text-sm text-gray-400 mb-4 uppercase tracking-wider">${car.desc}</p>
                <div class="flex justify-between items-center border-t border-gray-800 pt-4 mt-4">
                    <span class="text-xs text-gray-500 font-montserrat uppercase">${car.brand}</span>
                    <button class="text-gold text-sm hover:text-white transition-colors uppercase tracking-widest font-bold">Details &rarr;</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-gold', 'text-black', 'border-gold');
        btn.classList.add('text-gray-400', 'border-white/20');
        // Simple check for button text matching brand
        const btnText = btn.textContent.toLowerCase();
        if (btnText.includes(currentBrand) || (currentBrand === 'all' && btnText.includes('all'))) {
             btn.classList.add('active', 'bg-gold', 'text-black', 'border-gold');
             btn.classList.remove('text-gray-400', 'border-white/20');
        }
    });
    
    // Re-initialize icons for new elements if necessary (though simple img tags don't use lucide)
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    filterCars('all');
    
    // Highlight Home initially
    const homeBtn = document.querySelector('button[onclick="navigateTo(\'home\')"]');
    if(homeBtn) homeBtn.classList.add('active');
    
    lucide.createIcons();
});

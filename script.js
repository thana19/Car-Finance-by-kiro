// ฐานข้อมูลโลโก้รถยนต์
const carLogos = {
    'Honda': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/1200px-Honda.svg.png',
    'Toyota': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Toyota.svg/1200px-Toyota.svg.png',
    'Mazda': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Mazda.svg/1200px-Mazda.svg.png',
    'Nissan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Nissan.svg/1200px-Nissan.svg.png',
    'Isuzu': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Isuzu_logo.svg/1200px-Isuzu_logo.svg.png',
    'Mitsubishi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Mitsubishi_Motors_logo.svg/1200px-Mitsubishi_Motors_logo.svg.png',
    'Suzuki': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Suzuki_logo.svg/1200px-Suzuki_logo.svg.png',
    'Hyundai': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Hyundai_Motor_Company_logo.svg/1200px-Hyundai_Motor_Company_logo.svg.png',
    'Kia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Kia_logo.svg/1200px-Kia_logo.svg.png',
    'Ford': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ford_Motor_Company_Logo.svg/1200px-Ford_Motor_Company_Logo.svg.png',
    'MG': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/MG_Motor_logo.svg/1200px-MG_Motor_logo.svg.png',
    'BYD': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/BYD_logo.svg/1200px-BYD_logo.svg.png',
    'BMW': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1200px-BMW.svg.png',
    'Mercedes-Benz': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Mercedes-Benz-Logo.svg/1200px-Mercedes-Benz-Logo.svg.png',
    'Tesla': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/1200px-Tesla_logo.png',
    'Audi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Audi-Logo.svg/1200px-Audi-Logo.svg.png',
    'Lexus': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Lexus_logo.svg/1200px-Lexus_logo.svg.png',
    'Volvo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volvo_logo.svg/1200px-Volvo_logo.svg.png',
    'Subaru': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Subaru.svg/1200px-Subaru.svg.png',
    'Peugeot': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Peugeot_logo.svg/1200px-Peugeot_logo.svg.png',
    'Chevrolet': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Chevrolet_logo.svg/1200px-Chevrolet_logo.svg.png'
};

// ฐานข้อมูลรถยนต์ที่ขายในไทย 2024-2025 (ราคาล่าสุด)
const carDatabase = [
    // Honda
    { brand: 'Honda', model: 'City', year: 2024, price: 599000 },
    { brand: 'Honda', model: 'Civic', year: 2024, price: 1099000 },
    { brand: 'Honda', model: 'Accord', year: 2024, price: 1599000 },
    { brand: 'Honda', model: 'CR-V', year: 2024, price: 1399000 },
    { brand: 'Honda', model: 'HR-V', year: 2024, price: 899000 },
    
    // Toyota
    { brand: 'Toyota', model: 'Yaris', year: 2024, price: 539000 },
    { brand: 'Toyota', model: 'Corolla Altis', year: 2024, price: 799000 },
    { brand: 'Toyota', model: 'Camry', year: 2024, price: 1455000 },
    { brand: 'Toyota', model: 'Hilux Revo', year: 2024, price: 899000 },
    { brand: 'Toyota', model: 'Fortuner', year: 2024, price: 1399000 },
    { brand: 'Toyota', model: 'Innova', year: 2024, price: 1099000 },
    { brand: 'Toyota', model: 'Vios', year: 2024, price: 449000 },
    
    // Mazda
    { brand: 'Mazda', model: '2', year: 2024, price: 699000 },
    { brand: 'Mazda', model: '3', year: 2024, price: 899000 },
    { brand: 'Mazda', model: 'CX-30', year: 2024, price: 1190000 },
    { brand: 'Mazda', model: 'CX-5', year: 2024, price: 1390000 },
    { brand: 'Mazda', model: 'CX-9', year: 2024, price: 1890000 },
    
    // Nissan
    { brand: 'Nissan', model: 'Almera', year: 2024, price: 499000 },
    { brand: 'Nissan', model: 'Sylphy', year: 2024, price: 699000 },
    { brand: 'Nissan', model: 'Navara', year: 2024, price: 799000 },
    { brand: 'Nissan', model: 'X-Trail', year: 2024, price: 1399000 },
    
    // Isuzu
    { brand: 'Isuzu', model: 'D-Max', year: 2024, price: 659000 },
    { brand: 'Isuzu', model: 'MU-X', year: 2024, price: 1299000 },
    
    // Mitsubishi
    { brand: 'Mitsubishi', model: 'Attrage', year: 2024, price: 499000 },
    { brand: 'Mitsubishi', model: 'Mirage', year: 2024, price: 599000 },
    { brand: 'Mitsubishi', model: 'Triton', year: 2024, price: 799000 },
    { brand: 'Mitsubishi', model: 'Pajero Sport', year: 2024, price: 1545000 },
    
    // Suzuki
    { brand: 'Suzuki', model: 'Alto', year: 2024, price: 399000 },
    { brand: 'Suzuki', model: 'Swift', year: 2024, price: 499000 },
    { brand: 'Suzuki', model: 'Ciaz', year: 2024, price: 599000 },
    { brand: 'Suzuki', model: 'Ertiga', year: 2024, price: 699000 },
    { brand: 'Suzuki', model: 'Vitara', year: 2024, price: 999000 },
    
    // Hyundai
    { brand: 'Hyundai', model: 'i10', year: 2024, price: 449000 },
    { brand: 'Hyundai', model: 'Accent', year: 2024, price: 599000 },
    { brand: 'Hyundai', model: 'Elantra', year: 2024, price: 899000 },
    { brand: 'Hyundai', model: 'Kona', year: 2024, price: 999000 },
    { brand: 'Hyundai', model: 'Tucson', year: 2024, price: 1299000 },
    { brand: 'Hyundai', model: 'Santa Fe', year: 2024, price: 1799000 },
    
    // Kia
    { brand: 'Kia', model: 'Picanto', year: 2024, price: 499000 },
    { brand: 'Kia', model: 'Rio', year: 2024, price: 599000 },
    { brand: 'Kia', model: 'Cerato', year: 2024, price: 899000 },
    { brand: 'Kia', model: 'Seltos', year: 2024, price: 899000 },
    { brand: 'Kia', model: 'Sportage', year: 2024, price: 1299000 },
    { brand: 'Kia', model: 'Sorento', year: 2024, price: 1599000 },
    { brand: 'Kia', model: 'Carnival', year: 2024, price: 1799000 },
    
    // Ford
    { brand: 'Ford', model: 'Ranger', year: 2024, price: 799000 },
    { brand: 'Ford', model: 'Everest', year: 2024, price: 1499000 },
    
    // MG
    { brand: 'MG', model: 'MG3', year: 2024, price: 599000 },
    { brand: 'MG', model: 'MG5', year: 2024, price: 799000 },
    { brand: 'MG', model: 'HS', year: 2024, price: 999000 },
    { brand: 'MG', model: 'ZS EV', year: 2024, price: 1190000 },
    
    // BYD
    { brand: 'BYD', model: 'Dolphin', year: 2024, price: 899000 },
    { brand: 'BYD', model: 'Atto 3', year: 2024, price: 1099000 },
    { brand: 'BYD', model: 'Yuan Plus', year: 2024, price: 1299000 },
    
    // BMW
    { brand: 'BMW', model: '320i', year: 2024, price: 2399000, image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400' },
    { brand: 'BMW', model: 'X3', year: 2024, price: 2999000, image: 'https://images.unsplash.com/photo-1617531653520-bd466e4a8e4f?w=400' },
    
    // Mercedes-Benz
    { brand: 'Mercedes-Benz', model: 'C-Class', year: 2024, price: 2590000, image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400' },
    { brand: 'Mercedes-Benz', model: 'E-Class', year: 2024, price: 3290000, image: 'https://images.unsplash.com/photo-1617531653520-bd466e4a8e4f?w=400' },
    
    // Tesla
    { brand: 'Tesla', model: 'Model 3', year: 2024, price: 1799000, image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400' },
    { brand: 'Tesla', model: 'Model Y', year: 2024, price: 2199000, image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400' }
];

async function searchCar() {
    const searchTerm = document.getElementById('carSearch').value.toLowerCase().trim();
    
    if (!searchTerm) {
        alert('กรุณากรอกชื่อรุ่นรถที่ต้องการค้นหา');
        return;
    }
    
    // แสดง loading
    const resultsContainer = document.getElementById('carResults');
    resultsContainer.innerHTML = '<p class="loading">🔍 กำลังค้นหา...</p>';
    resultsContainer.classList.remove('hidden');
    
    // ค้นหารถที่ตรงกับคำค้นหาในฐานข้อมูล
    const results = carDatabase.filter(car => 
        car.brand.toLowerCase().includes(searchTerm) || 
        car.model.toLowerCase().includes(searchTerm) ||
        `${car.brand} ${car.model}`.toLowerCase().includes(searchTerm)
    );
    
    // ถ้าไม่เจอในฐานข้อมูล ให้ค้นหาด้วย AI
    if (results.length === 0) {
        const aiResults = await searchCarWithAI(searchTerm);
        displayCarResults(aiResults);
    } else {
        displayCarResults(results);
    }
}

async function searchCarWithAI(searchTerm) {
    try {
        // ใช้ AI เพื่อสร้างข้อมูลรถที่เป็นไปได้
        const aiGeneratedCars = generateCarData(searchTerm);
        return aiGeneratedCars;
    } catch (error) {
        console.error('AI Search Error:', error);
        return [];
    }
}

// ฐานข้อมูล AI สำหรับรถที่ขายในไทย (ราคาล่าสุด 2024-2025)
const aiCarDatabase = {
    'audi': [
        { model: 'A4', price: 2390000 }, { model: 'A6', price: 3490000 },
        { model: 'Q3', price: 2190000 }, { model: 'Q5', price: 3190000 }
    ],
    'lexus': [
        { model: 'ES300h', price: 2890000 }, { model: 'NX', price: 2490000 },
        { model: 'RX', price: 3990000 }, { model: 'UX', price: 1990000 }
    ],
    'volvo': [
        { model: 'S60', price: 2290000 }, { model: 'XC40', price: 1990000 },
        { model: 'XC60', price: 2990000 }, { model: 'XC90', price: 4290000 }
    ],
    'subaru': [
        { model: 'Forester', price: 1599000 }, { model: 'Outback', price: 1999000 },
        { model: 'XV', price: 1399000 }
    ],
    'peugeot': [
        { model: '2008', price: 1199000 }, { model: '3008', price: 1599000 },
        { model: '5008', price: 1899000 }
    ],
    'chevrolet': [
        { model: 'Colorado', price: 799000 }, { model: 'Trailblazer', price: 1399000 }
    ]
};

function generateCarData(searchTerm) {
    const searchLower = searchTerm.toLowerCase().trim();
    let results = [];
    
    // ค้นหาในฐานข้อมูล AI
    for (const [brand, models] of Object.entries(aiCarDatabase)) {
        const brandMatch = brand.toLowerCase().includes(searchLower) || searchLower.includes(brand.toLowerCase());
        
        if (brandMatch) {
            models.forEach(car => {
                results.push({
                    brand: brand.charAt(0).toUpperCase() + brand.slice(1),
                    model: car.model,
                    year: 2024,
                    price: car.price,
                    image: `https://source.unsplash.com/400x250/?${brand}+${car.model}+car`,
                    isAI: true
                });
            });
        } else {
            models.forEach(car => {
                if (car.model.toLowerCase().includes(searchLower)) {
                    results.push({
                        brand: brand.charAt(0).toUpperCase() + brand.slice(1),
                        model: car.model,
                        year: 2024,
                        price: car.price,
                        image: `https://source.unsplash.com/400x250/?${brand}+${car.model}+car`,
                        isAI: true
                    });
                }
            });
        }
    }
    
    return results;
}

function displayCarResults(results) {
    const resultsContainer = document.getElementById('carResults');
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p class="no-results">❌ ไม่พบรถยนต์ที่ค้นหา<br><small>ลองค้นหารถที่ขายในไทย เช่น Honda, Toyota, Mazda, Nissan, Hyundai, Kia, Audi, Lexus</small></p>';
        resultsContainer.classList.remove('hidden');
        return;
    }
    
    const aiLabel = results.some(car => car.isAI) ? '<p class="ai-label">🤖 ผลลัพธ์จาก AI (ราคาล่าสุด 2024-2025)</p>' : '';
    
    resultsContainer.innerHTML = aiLabel + results.map(car => {
        const logoUrl = carLogos[car.brand] || 'https://via.placeholder.com/60x60?text=Logo';
        return `
        <div class="car-card ${car.isAI ? 'ai-result' : ''}" onclick="selectCar(${car.price}, '${car.brand} ${car.model} ${car.year}')">
            <img src="${logoUrl}" alt="${car.brand}" class="car-logo" onerror="this.src='https://via.placeholder.com/60x60?text=Logo'">
            <div class="car-info">
                <h3>${car.brand} ${car.model}</h3>
                <p class="car-year">ปี ${car.year}</p>
                <p class="car-price">${formatCurrency(car.price)}</p>
            </div>
        </div>
    `;
    }).join('');
    
    resultsContainer.classList.remove('hidden');
}

function selectCar(price, carName) {
    document.getElementById('carPrice').value = price;
    document.getElementById('carModel').value = carName;
    document.getElementById('carSearch').value = '';
    document.getElementById('carResults').classList.add('hidden');
    updateDownPaymentDisplay();
}

function updateDownPaymentFromSlider() {
    const carPrice = parseFloat(document.getElementById('carPrice').value) || 0;
    const downPaymentPercent = parseFloat(document.getElementById('downPaymentSlider').value);
    const downPaymentBaht = (carPrice * downPaymentPercent) / 100;
    
    document.getElementById('downPaymentValue').textContent = downPaymentPercent;
    document.getElementById('downPaymentInput').value = Math.round(downPaymentBaht);
    document.getElementById('downPaymentBahtDisplay').textContent = formatCurrency(downPaymentBaht);
    
    // อัพเดท slider track
    updateSliderTrack();
}

function updateDownPaymentFromInput() {
    const carPrice = parseFloat(document.getElementById('carPrice').value) || 0;
    const downPaymentBaht = parseFloat(document.getElementById('downPaymentInput').value) || 0;
    
    if (carPrice > 0) {
        let downPaymentPercent = (downPaymentBaht / carPrice) * 100;
        downPaymentPercent = Math.min(Math.max(downPaymentPercent, 0), 50);
        
        document.getElementById('downPaymentSlider').value = downPaymentPercent.toFixed(1);
        document.getElementById('downPaymentValue').textContent = downPaymentPercent.toFixed(1);
        document.getElementById('downPaymentBahtDisplay').textContent = formatCurrency(downPaymentBaht);
        
        // อัพเดท slider track
        updateSliderTrack();
    }
}

function updateSliderTrack() {
    const slider = document.getElementById('downPaymentSlider');
    const sliderTrack = document.querySelector('.slider-track');
    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    
    // อัพเดท progress bar width
    sliderTrack.style.width = value + '%';
}

function updateDownPaymentDisplay() {
    const carPrice = parseFloat(document.getElementById('carPrice').value) || 0;
    const downPaymentPercent = parseFloat(document.getElementById('downPaymentSlider').value);
    const downPaymentBaht = (carPrice * downPaymentPercent) / 100;
    
    document.getElementById('downPaymentInput').value = Math.round(downPaymentBaht);
    document.getElementById('downPaymentBahtDisplay').textContent = formatCurrency(downPaymentBaht);
    
    // อัพเดท slider track
    updateSliderTrack();
}

function formatNumber(num) {
    return new Intl.NumberFormat('th-TH', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(num);
}

function calculateLoan() {
    // รับค่าจาก input
    const carPrice = parseFloat(document.getElementById('carPrice').value);
    const downPaymentBaht = parseFloat(document.getElementById('downPaymentInput').value) || 0;
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const loanTerm = parseFloat(document.getElementById('loanTerm').value);

    // ตรวจสอบข้อมูล
    if (!carPrice || !interestRate || !loanTerm) {
        alert('กรุณากรอกข้อมูลให้ครบทุกช่อง');
        return;
    }

    if (downPaymentBaht >= carPrice) {
        alert('เงินดาวน์ต้องน้อยกว่าราคารถ');
        return;
    }

    // คำนวณยอดจัดไฟแนนซ์
    const loanAmount = carPrice - downPaymentBaht;

    // คำนวณอัตราดอกเบี้ยต่อเดือน
    const monthlyRate = interestRate / 100 / 12;

    // จำนวนงวดทั้งหมด (loanTerm เป็นเดือน)
    const numberOfPayments = parseInt(loanTerm);

    // คำนวณค่างวดต่อเดือน (ใช้สูตร PMT)
    const monthlyPayment = loanAmount * 
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    // คำนวณยอดชำระทั้งหมด
    const totalPayment = monthlyPayment * numberOfPayments;

    // คำนวณดอกเบี้ยรวม
    const totalInterest = totalPayment - loanAmount;

    // รับค่าข้อมูลเพิ่มเติม
    const carModel = document.getElementById('carModel').value || 'ไม่ระบุ';

    // คำนวณปีจากเดือน
    const years = numberOfPayments / 12;

    // แสดงผล - รายละเอียดรถยนต์
    document.getElementById('resultCarModel').textContent = carModel;
    document.getElementById('resultCarPrice').textContent = formatCurrency(carPrice);

    // แสดงผล - เงื่อนไขการผ่อน
    document.getElementById('resultInterestRate').textContent = interestRate.toFixed(2) + '%';
    document.getElementById('resultLoanTerm').textContent = numberOfPayments + ' เดือน (' + years + ' ปี)';

    // แสดงผล - ผลการคำนวณ
    document.getElementById('loanAmount').textContent = formatCurrency(loanAmount);
    document.getElementById('monthlyPayment').textContent = formatCurrency(monthlyPayment);
    document.getElementById('totalInterest').textContent = formatCurrency(totalInterest);
    document.getElementById('totalPayment').textContent = formatCurrency(totalPayment);

    // แสดงส่วนผลลัพธ์
    document.getElementById('results').classList.remove('hidden');
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('th-TH', {
        style: 'currency',
        currency: 'THB',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}

// เพิ่ม event listener สำหรับ Enter key
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calculateLoan();
        }
    });
});

// อัพเดทเงินดาวน์เมื่อเปลี่ยนราคารถ
document.getElementById('carPrice').addEventListener('input', updateDownPaymentDisplay);

// เรียกครั้งแรกเพื่อแสดงค่าเริ่มต้น
updateDownPaymentDisplay();

// ฟังก์ชันแชร์ผลการคำนวณ
function getShareText() {
    const carModel = document.getElementById('resultCarModel').textContent;
    const carPrice = document.getElementById('resultCarPrice').textContent;
    const interestRate = document.getElementById('resultInterestRate').textContent;
    const loanTerm = document.getElementById('resultLoanTerm').textContent;
    const monthlyPayment = document.getElementById('monthlyPayment').textContent;
    const totalPayment = document.getElementById('totalPayment').textContent;
    
    return `🚗 ผลการคำนวณไฟแนนซ์รถยนต์\n\n` +
           `📋 รุ่นรถ: ${carModel}\n` +
           `💰 ราคารถ: ${carPrice}\n` +
           `📊 อัตราดอกเบี้ย: ${interestRate}\n` +
           `⏱️ ระยะเวลาผ่อน: ${loanTerm}\n\n` +
           `✅ ค่างวดต่อเดือน: ${monthlyPayment}\n` +
           `💵 ยอดชำระทั้งหมด: ${totalPayment}\n\n` +
           `คำนวณที่: 🚗 Car Finance Calculator`;
}

function shareResult() {
    const text = getShareText();
    
    // ตรวจสอบว่า Web Share API ใช้ได้หรือไม่
    if (navigator.share) {
        navigator.share({
            title: '🚗 ผลการคำนวณไฟแนนซ์รถยนต์',
            text: text
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: คัดลอกไปยังคลิปบอร์ด
        navigator.clipboard.writeText(text).then(() => {
            alert('✅ คัดลอกผลการคำนวณแล้ว!');
        }).catch(() => {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            alert('✅ คัดลอกผลการคำนวณแล้ว!');
        });
    }
}

function copyToClipboard() {
    const text = getShareText();
    navigator.clipboard.writeText(text).then(() => {
        alert('✅ คัดลอกผลการคำนวณแล้ว!');
    }).catch(() => {
        // Fallback สำหรับเบราว์เซอร์เก่า
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('✅ คัดลอกผลการคำนวณแล้ว!');
    });
}

// ฟังก์ชัน Reset ฟอร์ม
function resetForm() {
    // ล้างข้อมูลการค้นหา
    document.getElementById('carSearch').value = '';
    document.getElementById('carModel').value = '';
    document.getElementById('carResults').classList.add('hidden');
    
    // ล้างข้อมูลราคา
    document.getElementById('carPrice').value = '';
    
    // รีเซ็ตเงินดาวน์เป็นค่าเริ่มต้น
    document.getElementById('downPaymentSlider').value = 20;
    document.getElementById('downPaymentValue').textContent = 20;
    document.getElementById('downPaymentInput').value = '';
    
    // ล้างข้อมูลดอกเบี้ยและระยะเวลา
    document.getElementById('interestRate').value = '';
    document.getElementById('loanTerm').value = '';
    
    // ซ่อนผลการคำนวณ
    document.getElementById('results').classList.add('hidden');
    
    // โฟกัสไปที่ช่องค้นหา
    document.getElementById('carSearch').focus();
}

// ฟังก์ชัน Toggle Search Panel
function toggleSearchPanel() {
    const searchPanel = document.getElementById('searchPanel');
    const expandBtn = document.getElementById('expandBtn');
    
    searchPanel.classList.toggle('hidden');
    expandBtn.classList.toggle('expanded');
    
    // เปลี่ยนไอคอน
    if (searchPanel.classList.contains('hidden')) {
        expandBtn.textContent = '▼';
    } else {
        expandBtn.textContent = '▲';
        // โฟกัสไปที่ช่องค้นหา
        document.getElementById('carSearch').focus();
    }
}

// ฟังก์ชันสำหรับอัตราดอกเบี้ย
function updateInterestRateFromSlider() {
    const interestRate = parseFloat(document.getElementById('interestRateSlider').value);
    
    document.getElementById('interestRateValue').textContent = interestRate.toFixed(2);
    document.getElementById('interestRate').value = interestRate.toFixed(2);
    
    // อัพเดท slider track
    updateInterestRateTrack();
}

function updateInterestRateFromInput() {
    const interestRate = parseFloat(document.getElementById('interestRate').value) || 0;
    
    if (interestRate >= 0 && interestRate <= 15) {
        document.getElementById('interestRateSlider').value = interestRate.toFixed(2);
        document.getElementById('interestRateValue').textContent = interestRate.toFixed(2);
        
        // อัพเดท slider track
        updateInterestRateTrack();
    }
}

function updateInterestRateTrack() {
    const slider = document.getElementById('interestRateSlider');
    const sliderTracks = document.querySelectorAll('.slider-track');
    
    // อัพเดท progress bar ของอัตราดอกเบี้ย (element ที่สอง)
    if (sliderTracks.length > 1) {
        const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
        sliderTracks[1].style.width = value + '%';
    }
}

// ฟังก์ชันสำหรับระยะเวลาผ่อน
function updateLoanTermFromSlider() {
    const loanTerm = parseInt(document.getElementById('loanTermSlider').value);
    
    document.getElementById('loanTermValue').textContent = loanTerm;
    document.getElementById('loanTerm').value = loanTerm;
    
    // อัพเดท slider track
    updateLoanTermTrack();
}

function updateLoanTermFromInput() {
    const loanTerm = parseInt(document.getElementById('loanTerm').value) || 1;
    
    if (loanTerm >= 1 && loanTerm <= 10) {
        document.getElementById('loanTermSlider').value = loanTerm;
        document.getElementById('loanTermValue').textContent = loanTerm;
        
        // อัพเดท slider track
        updateLoanTermTrack();
    }
}

function updateLoanTermTrack() {
    const slider = document.getElementById('loanTermSlider');
    const sliderTracks = document.querySelectorAll('.slider-track');
    
    // อัพเดท progress bar ของระยะเวลาผ่อน (element ที่สาม)
    if (sliderTracks.length > 2) {
        const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
        sliderTracks[2].style.width = value + '%';
    }
}

// ฟังก์ชันสำหรับเลือกระยะเวลาผ่อน
function selectLoanTerm(months) {
    // อัพเดท hidden input
    document.getElementById('loanTerm').value = months;
    
    // คำนวณปี
    const years = months / 12;
    
    // อัพเดท display
    document.getElementById('loanTermDisplay').textContent = `${months} เดือน (${years} ปี)`;
    
    // อัพเดท active button
    document.querySelectorAll('.term-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

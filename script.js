
// Data produk dengan properti images (array) untuk semua produk
const products = [
  {
    title: "Modem WiFi Advan",
    desc: "ADVAN CPE ROUTER V6 dapat dihubungkan hingga 64 pengguna. Mendukung frekuensi 2.4GHz dan 5GHz. Chipset UNISOC SL8563, LTE CAT6 (300 Mbps DL / 50 Mbps UL), dilengkapi tombol Wi-Fi, WPS, dan Reset. Baterai 3000mAh dengan waktu siaga hingga 300 jam. Cocok untuk kebutuhan internet di rumah atau kantor. didalam paket pembelian sudah termasuk: 1) Modem, 2) Kabel USB, 3) Adaptor, 4) Manual Book. jika ingin menggunakan modem ini sebagai router, pastikan untuk menghubungkannya ke sumber internet melalui kabel Ethernet dan mengkonfigurasi pengaturan jaringan sesuai kebutuhan Anda.",
    price: "Rp 850.000",
    images: [
      "images/modem1.jpg",
      "images/modem2.jpg",
      "images/modem3.jpg"
    ]   // array walaupun 1 gambar
  },
  {
    title: "CCTV EZVIZ",
    desc: "EZVIZ 2MP Smart WiFi Camera dengan night vision hingga 30 meter (infrared). Fitur two-way audio, motion detection, dan penyimpanan microSD.",
    price: "Rp 450.000",
    images: [
      "images/cctv1.jpg",
      "images/cctv2.jpg",
      "images/cctv3.jpg"
    ]
  },
  {
    title: "Switch 8 Port",
    desc: "MERCUSYS MS108G 8-Port Gigabit 10/100/1000Mbps. Switch tidak terkelola, desktop form factor. Mendukung MDI/MDIX otomatis. switch ini cocok untuk memperluas jaringan kabel di rumah atau kantor kecil dengan kecepatan tinggi dan stabil. dalam paket pembelian sudah termasuk: 1) Switch, 2) Adaptor, 3) Manual Book.",
    price: "Rp 320.000",
    images: [
      "images/switch1.jpg",
      "images/switch2.jpg",
      "images/switch3.jpg"
    ]
  },
  {
    title: "PC Gaming",
    desc: "PC Gaming RTX 4060. CPU Intel Core i5 12400F / Ryzen 5 5600, RAM 16GB DDR4/DDR5, SSD NVMe 512GB, PSU 550W 80+ Bronze. Cocok untuk gaming berat.pc ini dilengkapi dengan kartu grafis NVIDIA GeForce RTX 4060 yang mampu memberikan performa gaming yang luar biasa. Dengan CPU Intel Core i5 12400F atau Ryzen 5 5600, RAM 16GB DDR4/DDR5, dan SSD NVMe 512GB, PC ini siap menangani game-game terbaru dengan lancar. PSU 550W 80+ Bronze memastikan pasokan daya yang stabil untuk komponen-komponen berkinerja tinggi. Dalam paket pembelian sudah termasuk: 1) PC Gaming, 2) Monitor, 3) Keyboard, 4) Mouse, 5) Speaker.pc ini siap untuk memberikan pengalaman gaming yang luar biasa dengan performa tinggi dan grafis yang memukau. dalam paket pembelian sudah termasuk: 1) PC Gaming, 2) Monitor, 3) Keyboard, 4) Mouse, 5) Speaker.",
    price: "Rp 12.500.000",
    images: [
      "images/pc1.jpg",
      "images/pc2.jpg",
      "images/pc3.jpg"
    ]
  },
  {
    title: "Charger HP Fast Charging",
    desc: "Charger fast charging 20W/33W, kompatibel Android & iPhone. Aman dan stabil untuk pengisian cepat. carger ini mendukung teknologi fast charging dengan output 20W atau 33W, memungkinkan pengisian baterai yang lebih cepat untuk berbagai perangkat, termasuk smartphone Android dan iPhone. Dengan desain yang aman dan stabil, charger ini dilengkapi dengan proteksi terhadap arus lebih, tegangan lebih, dan suhu tinggi, sehingga memberikan perlindungan optimal untuk perangkat Anda selama proses pengisian. Dalam paket pembelian sudah termasuk: 1) Charger, 2) Kabel USB-C ke USB-A (1 meter), 3) Manual Book.",
    price: "Rp 85.000",
    images: [
      "images/charger1.jpg",
      "images/charger2.jpg",
      "images/charger3.jpg"

    ]
      
  },
  {
    title: "Kabel LAN (per meter)",
    desc: "Kabel LAN Cat6 kecepatan tinggi hingga 1Gbps. Cocok untuk internet stabil dan gaming. kabel LAN Cat6 ini dirancang untuk memberikan kecepatan tinggi hingga 1Gbps, ideal untuk kebutuhan internet yang stabil dan gaming online. Dengan kualitas kabel yang baik, kabel ini mampu mengurangi interferensi dan memastikan koneksi yang handal. Cocok untuk digunakan di rumah atau kantor untuk menghubungkan perangkat seperti komputer, router, switch, dan perangkat jaringan lainnya. Dalam paket pembelian sudah termasuk: 1) Kabel LAN per meter (Anda dapat memilih panjang sesuai kebutuhan).",
    price: "Rp6.000",
    images: [
      "images/kabel1.jpg",
      "images/kabel2.jpg",
      "images/kabel3.jpg"
    ]
  },
  {
    title: "Keyboard USB Gaming",
    desc: "Keyboard USB dengan lampu LED RGB. Nyaman untuk kerja dan gaming. dilengkapi dengan lampu LED RGB yang dapat disesuaikan, keyboard ini memberikan pengalaman visual yang menarik saat digunakan untuk bekerja atau bermain game. Desain ergonomis dan tombol responsif membuatnya nyaman digunakan dalam jangka waktu lama. Cocok untuk gamer maupun pengguna yang membutuhkan keyboard berkualitas untuk aktivitas sehari-hari.keyboard ini memiliki suara ketikan yang sangat enak didengar. Dalam paket pembelian sudah termasuk: 1) Keyboard USB Gaming, 2) Manual Book.",
    price: "Rp 200.000",
    images: [
      "images/keyboard1.jpg",
      "images/keyboard2.jpg",
      "images/keyboard3.jpg"
    ]
  },
  {
    title: "Smart Switch BARDI",
    desc: "DALAM PAKET PEMBELIAN: 1) BOX SAKLAR, 2) UNIT SAKLAR, 3) BAUT SAKLAR, 4) BUKU PANDUAN. BARDI Smart Wall Switch adalah saklar lampu pintar yang bisa dimatikan atau dinyalakan melalui aplikasi atau sentuhan. Kompatibel dengan Alexa dan Google Assistant. Desain minimalis modern, dilengkapi proteksi arus lebih dan perlindungan lonjakan listrik. Sertifikasi CE dan RoHS. Anda dapat mengontrol lampu dengan suara.",
    price: "Rp 170.000",
    images: [
      "images/bardi1.jpg",
      "images/bardi2.jpg",
      "images/bardi3.jpg"
    ]
  }
];

// Variabel global untuk slider
let currentProductIndex = 0;
let currentImageIndex = 0;
let currentImages = [];

// Fungsi untuk menampilkan modal
function showDetail(index) {
  currentProductIndex = index;
  currentImages = products[index].images || [];
  currentImageIndex = 0;
  
  document.getElementById('detailTitle').innerText = products[index].title;
  document.getElementById('detailDesc').innerHTML = `${products[index].desc}<br><br><strong>Harga: ${products[index].price}</strong>`;
  
  updateImageAndIndicators();
  
  document.getElementById('productDetail').classList.remove('hidden');
  document.getElementById('productDetail').classList.add('flex');
}

// Update gambar dan indikator dot
function updateImageAndIndicators() {
  const imgElement = document.getElementById('detailImage');
  if (currentImages.length > 0) {
    imgElement.src = currentImages[currentImageIndex];
    imgElement.alt = products[currentProductIndex].title;
  } else {
    imgElement.src = "";
    imgElement.alt = "Tidak ada gambar";
  }
  
  // Generate indikator dot
  const indicatorsDiv = document.getElementById('imageIndicators');
  if (indicatorsDiv) {
    indicatorsDiv.innerHTML = '';
    for (let i = 0; i < currentImages.length; i++) {
      const dot = document.createElement('span');
      dot.className = `w-2 h-2 rounded-full mx-1 cursor-pointer ${i === currentImageIndex ? 'bg-neon' : 'bg-gray-500'}`;
      dot.addEventListener('click', () => {
        currentImageIndex = i;
        updateImageAndIndicators();
      });
      indicatorsDiv.appendChild(dot);
    }
  }
  
  // Sembunyikan atau tampilkan tombol navigasi jika hanya 1 gambar
  const prevBtn = document.getElementById('prevImage');
  const nextBtn = document.getElementById('nextImage');
  if (prevBtn && nextBtn) {
    if (currentImages.length <= 1) {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    } else {
      prevBtn.style.display = 'block';
      nextBtn.style.display = 'block';
    }
  }
}

// Navigasi gambar
function nextImage() {
  if (currentImages.length === 0) return;
  currentImageIndex = (currentImageIndex + 1) % currentImages.length;
  updateImageAndIndicators();
}

function prevImage() {
  if (currentImages.length === 0) return;
  currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
  updateImageAndIndicators();
}

// Tutup modal
function closeDetail() {
  document.getElementById('productDetail').classList.add('hidden');
  document.getElementById('productDetail').classList.remove('flex');
}

// Event listener saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
  // Pasang event klik pada card produk
  const cards = document.querySelectorAll('#produk .grid > div');
  cards.forEach((card, idx) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' && e.target.classList.contains('beli-btn')) return;
      showDetail(idx);
    });
  });
  
  // Tombol navigasi slider
  const prevBtn = document.getElementById('prevImage');
  const nextBtn = document.getElementById('nextImage');
  if (prevBtn) prevBtn.addEventListener('click', prevImage);
  if (nextBtn) nextBtn.addEventListener('click', nextImage);
});

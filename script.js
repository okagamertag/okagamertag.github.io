// Data produk (lengkapi semua properti image)
const products = [
  {
    title: "Modem WiFi Advan",
    desc: "ADVAN CPE ROUTER V6 dapat dihubungkan hingga 64 pengguna. Mendukung frekuensi 2.4GHz dan 5GHz. Chipset UNISOC SL8563, LTE CAT6 (300 Mbps DL / 50 Mbps UL), dilengkapi tombol Wi-Fi, WPS, dan Reset.",
    price: "Rp 850.000",
    image: "images/modem-advan.jpg"   // pastikan file ada
  },
  {
    title: "CCTV EZVIZ",
    desc: "EZVIZ 2MP Smart WiFi Camera dengan night vision hingga 30 meter (infrared). Fitur two-way audio, motion detection, dan penyimpanan microSD.",
    price: "Rp 450.000",
    image: "images/cctv-ezviz.jpg"     // tambahkan
  },
  {
    title: "Switch 8 Port",
    desc: "MERCUSYS MS108G 8-Port Gigabit 10/100/1000Mbps. Switch tidak terkelola, desktop form factor. Mendukung MDI/MDIX otomatis.",
    price: "Rp 320.000",
    image: "images/switch-8port.jpg"   // tambahkan
  },
  {
    title: "PC Gaming",
    desc: "PC Gaming RTX 4060. CPU Intel Core i5 12400F / Ryzen 5 5600, RAM 16GB DDR4/DDR5, SSD NVMe 512GB, PSU 550W 80+ Bronze. Cocok untuk gaming berat.",
    price: "Rp 12.500.000",
    image: "images/pc-gaming.jpg"      // tambahkan
  },
  {
    title: "Charger HP Fast Charging",
    desc: "Charger fast charging 20W/33W, kompatibel Android & iPhone. Aman dan stabil untuk pengisian cepat.",
    price: "Rp 85.000",
    image: "images/charger.jpg"        // tambahkan
  },
  {
    title: "Kabel LAN (per meter)",
    desc: "Kabel LAN Cat6 kecepatan tinggi hingga 1Gbps. Cocok untuk internet stabil dan gaming.",
    price: "Rp6.000",
    image: "images/kabel-lan.jpg"      // tambahkan
  },
  {
    title: "Keyboard USB Gaming",
    desc: "Keyboard USB dengan lampu LED RGB. Nyaman untuk kerja dan gaming.",
    price: "Rp 200.000",
    image: "images/keyboard.jpg"       // tambahkan
  },
  {
    title: "Smart Switch BARDI",
    desc:"DALAM PAKET PEMBELIAN 1).BOX SAKLAR 2).UNIT SAKLAR 3).BAUT SAKLAR 4).BUKU PANDUAN.   BARDI Smart Wall Switcht adalah saklar lampu pintar yang bisa dimatikan atau dinyalakan melalui aplikasi atau melalui sentuhan. Saklar ini kompatibel dengan Alexa dan Google Assistant, memungkinkan Anda mengontrol lampu dengan suara. Desainnya yang minimalis dan modern cocok untuk berbagai dekorasi rumah BARDI Smart Wall Switch EU 2 Gang adalah saklar lampu pintar yang bisa dimatikan atau dinyalakan melalui aplikasi atau melalui sentuhan. Terdapat berbagai macam tipe saklar yang bisa dipilih sesuai kebutuhan, seperti saklar 1 gang, 2 gang, dan 3 gang. Saklar ini kompatibel dengan Alexa dan Google Assistant, memungkinkan Anda mengontrol lampu dengan suara. Desainnya yang minimalis dan modern cocok untuk berbagai dekorasi rumah. serta dilengkapi dengan fitur keamanan seperti proteksi arus lebih dan perlindungan terhadap lonjakan listrik, memastikan penggunaan yang aman dan nyaman di rumah Anda.sertifikasi CE dan RoHS, memastikan produk ini aman digunakan di rumah Anda. anda dapat mengontrol lampu dengan suara. Desainnya yang minimalis dan modern cocok untuk berbagai dekorasi rumah. serta dilengkapi dengan fitur keamanan seperti proteksi arus lebih dan perlindungan terhadap lonjakan listrik, memastikan penggunaan yang aman dan nyaman di rumah Anda.sertifikasi CE dan RoHS, memastikan produk ini aman digunakan di rumah Anda. anda dapat mengontrol lampu dengan suara. Desainnya yang minimalis dan modern cocok untuk berbagai dekorasi rumah. serta dilengkapi dengan fitur keamanan seperti proteksi arus lebih dan perlindungan terhadap lonjakan listrik, memastikan penggunaan yang aman dan nyaman di rumah Anda.sertifikasi CE dan RoHS, memastikan produk ini aman digunakan di rumah Anda.anda juga dapatmengontrol degan perintah suara melalui alexa dan gogle asistent.",
    price: "Rp 170.000",
    image: "images/smart-switch.jpg"

    
  }
];

// Fungsi untuk menampilkan modal
function showDetail(index) {
  const product = products[index];
  document.getElementById('detailTitle').innerText = product.title;
  document.getElementById('detailDesc').innerHTML = `${product.desc}<br><br><strong>Harga: ${product.price}</strong>`;
  
  // Set gambar
  const imgElement = document.getElementById('detailImage');
  if (imgElement) {
    imgElement.src = product.image || '';  // gunakan string kosong jika tidak ada
    imgElement.alt = product.title;
  }
  
  document.getElementById('productDetail').classList.remove('hidden');
  document.getElementById('productDetail').classList.add('flex');
}

// Fungsi untuk menutup modal
function closeDetail() {
  document.getElementById('productDetail').classList.add('hidden');
  document.getElementById('productDetail').classList.remove('flex');
}

// Pasang event klik pada setiap card produk
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('#produk .grid > div');
  cards.forEach((card, idx) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      // Cegah modal terbuka jika tombol Beli diklik
      if (e.target.tagName === 'A' && e.target.classList.contains('beli-btn')) {
        return;
      }
      showDetail(idx);
    });
  });
});

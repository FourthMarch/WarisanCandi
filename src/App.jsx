import React, { useState, useEffect } from 'react';
import LoadingScreen from './Components/LoadingScreen';
import Navbar from './Components/Navbar';
import CandiInfoModal from './Components/CandiModal'; // Import modal pertama
import ARImageTargetModal from './Components/ARModal';

// --- Data Candi ---
const candiData = {
  Jawi: {
    nama: "Candi Jawi",
    deskripsi: `Candi Jawi adalah sebuah candi peninggalan Kerajaan Singasari yang terletak di Desa Candi Wates, Kecamatan Prigen, Pasuruan, Jawa Timur, di kaki Gunung Welirang. Candi ini memiliki nilai sejarah, arsitektur, dan keagamaan yang tinggi, serta menyimpan banyak cerita dari masa lampau.`,
    sejarah : 'Candi Jawi diperkirakan dibangun sekitar abad ke-13, pada masa pemerintahan Raja Kertanegara, raja terakhir Kerajaan Singasari, yang wafat pada tahun 1292 Masehi. Pembangunannya disebutkan dalam Kitab Negarakertagama oleh Mpu Prapanca. Candi ini diduga kuat berfungsi sebagai pedharmaan atau tempat penyimpanan abu jenazah Raja Kertanegara, yang didharmakan sebagai Siwa-Buddha, mencerminkan sinkretisme antara Hindu dan Buddha yang dianut pada masa itu. Selain itu, ada juga pandangan bahwa candi ini juga digunakan sebagai tempat pemujaan terhadap dewa-dewa. Konon, Raja Hayam Wuruk dari Kerajaan Majapahit bahkan pernah mengunjungi Candi Jawi pada tahun 1359 untuk menghormati leluhurnya, Kertanegara.',
    arsitektur: [
      "Candi Jawi menempati lahan seluas sekitar 40 x 60 meter persegi, dikelilingi oleh pagar bata setinggi 2 meter dan parit yang dihiasi bunga teratai. Bangunan candi sendiri memiliki ketinggian sekitar 24,5 meter, dengan panjang 14,2 meter dan lebar 9,5 meter.",
      "Perpaduan Hindu-Buddha: Candi Jawi menunjukkan perpaduan arsitektur Hindu dan Buddha yang kental. Bagian bawah candi (kaki) terbuat dari batu berwarna gelap (diduga batu hitam), sementara bagian atas (tubuh dan atap) terbuat dari batu putih. Atapnya berbentuk ramping seperti Candi Prambanan, namun puncaknya merupakan paduan antara stupa (ciri khas Buddha) dan kubus bersusun yang meruncing. Ini mencerminkan konsep Siwa-Buddha yang dianut Kertanegara.",
      "Candi ini dibangun dengan tiga bagian utama yang melambangkan kosmologi Hindu-Buddha. Bagian pertama adalah Kaki Candi, atau disebut juga Bhurloka/Kamaloka, yang melambangkan alam bawah atau nafsu keduniawian. Di atasnya terdapat Badan Candi, yang dikenal sebagai Bhuwarloka/Rupaloka, melambangkan alam manusia yang sudah disucikan. Terakhir, bagian paling atas adalah Atap Candi, atau Swarloka, yang melambangkan dunia atas, tempat para dewa, atau kehidupan yang telah mencapai kesempurnaan.",
      "Posisi Menghadap Timur: Candi Jawi menghadap ke timur, membelakangi Gunung Penanggungan yang dianggap suci. Beberapa ahli berpendapat bahwa posisi ini tidak menunjukkan fungsi sebagai tempat pemujaan (karena tempat pemujaan biasanya menghadap ke gunung), namun ada juga yang meyakini bahwa ini adalah pengaruh ajaran Buddha.",
      "Relief: Candi Jawi memiliki relief yang dipahatkan pada dinding kakinya. Sayangnya, relief ini belum dapat dibaca secara pasti maknanya. Beberapa penelitian awal mengaitkannya dengan cerita dalam naskah Sutasoma. Kondisi relief yang tipis dan kurangnya informasi pendukung (seperti prasasti) menjadi tantangan dalam memahaminya. Saat ini, ada upaya untuk menduplikasi relief-relief ini karena kondisinya mulai menipis.",
      "Ornamen: Ornamen pada badan candi sangat bervariasi, dan di atas ambang pintu masuk terdapat pahatan kalamakara lengkap dengan taring, rahang bawah, dan hiasan rambut. Di kiri dan kanan pintu terdapat relung kecil yang dulunya mungkin tempat meletakkan arca."
    ],
    kondisi : 'Candi Jawi telah mengalami beberapa kali pemugaran. Pemugaran pertama dilakukan pada masa pemerintahan Hindia Belanda (1938-1941) namun belum selesai. Kemudian diperbaiki kembali antara tahun 1975-1980 dan diresmikan pada tahun 1982. Meskipun bentuk bangunannya utuh, beberapa arca aslinya sudah tidak berada di tempat. Arca Durga kini disimpan di Museum Empu Tantular, Surabaya, sementara yang lainnya disimpan di Museum Trowulan untuk pengamanan.',
    lokasi : 'Candi Jawi terletak di Desa Candi Wates, Kecamatan Prigen, Kabupaten Pasuruan, Jawa Timur. Lokasinya cukup strategis di pinggir jalan utama antara Pandaan dan Prigen, sekitar 3 km dari pusat kota Pandaan, atau sekitar 31 km sebelah barat Kota Pasuruan, dan 41 km sebelah selatan Surabaya. Akses menuju candi ini cukup mudah, baik dengan kendaraan pribadi maupun transportasi umum.',
    gambarGaleri: [
      './src/assets/CandiJawi.jpg',
      './src/assets/CandiJawi2.jpg',
    ],
    gambarAR: './src/assets/CandiJawiMarker.jpg'
  },
  Pari: {
    nama: "Candi Pari",
    deskripsi: `Candi Pari adalah sebuah candi peninggalan masa Kerajaan Majapahit yang terletak di Desa Candipari, Kecamatan Porong, Kabupaten Sidoarjo, Jawa Timur. Candi ini memiliki keunikan tersendiri, terutama karena lokasinya yang dekat dengan area terdampak lumpur Lapindo, serta misteri seputar pembangunan dan fungsinya.`,
    sejarah : 'Candi Pari diperkirakan dibangun pada tahun 1371 Masehi, sesuai dengan angka tahun "1293 Saka" yang terukir pada ambang pintunya. Ini menempatkan pembangunannya pada masa pemerintahan Raja Hayam Wuruk dari Kerajaan Majapahit. Ada beberapa cerita rakyat yang melingkupi asal-usul candi ini. Salah satu legenda populer menyebutkan bahwa candi ini didirikan oleh seorang putri bernama Dewi Sri dari Negeri Campa (kini Vietnam), sebagai wujud cinta dan kesetiaannya kepada kekasihnya, Raden Jaka Sangkrip. Versi lain mengisahkan bahwa seorang pangeran dari Campa, yang merupakan kerabat Raja Majapahit, diizinkan membangun candi ini sebagai tempat pemujaan dan persinggahan. Tak hanya itu, ada pula cerita yang mengaitkan pembangunan Candi Pari sebagai simbol persahabatan antara Raja Hayam Wuruk dengan seorang bangsawan dari Campa. Secara arkeologis, Candi Pari kemungkinan besar berfungsi sebagai tempat pemujaan atau pedharmaan untuk tokoh penting pada masanya, atau bahkan sebagai tempat singgah bagi para pedagang atau pengelana yang melewati jalur sungai. Bukti dari arca dan relief yang ditemukan di lokasi juga mendukung fungsi keagamaan ini.',
    arsitektur: [
      "Bahan Bangunan: Candi ini seluruhnya dibangun menggunakan batu bata merah, yang merupakan ciri khas candi-candi di Jawa Timur pada masa Majapahit. Penggunaan batu bata merah ini memberikan kesan yang hangat dan berbeda dari candi-candi batu andesit.",
      "Orientasi: Candi Pari menghadap ke arah barat laut, yang tidak lazim untuk candi-candi Hindu di Jawa yang umumnya menghadap ke timur.",
      "Bentuk dan Ukuran: Candi ini berbentuk persegi empat dengan ukuran sekitar 13,65 × 13,40 meter dan tinggi sekitar 13 meter. Bangunannya terkesan kokoh dan sederhana.",
      "Pintu dan Relung: Pintu masuk candi berada di sisi barat laut, diapit oleh dua relung kecil di kedua sisinya. Di atas ambang pintu terdapat pahatan relief yang menyerupai kala makara, namun lebih sederhana.",
      "Pada Candi Pari, relief dan ornamen yang menghiasi bangunannya. Di ambang pintu masuk, terdapat pahatan relief kala yang khas candi Jawa Timur, lengkap dengan taring, rahang bawah, dan hiasan permata, memberikan kesan penjaga yang kuat. Selain itu, pada dinding candi, terutama di sisi barat laut, terpahat relief figuratif yang menggambarkan sosok manusia, kemungkinan adalah dewa-dewa atau tokoh-tokoh penting dari masa lalu, meskipun beberapa di antaranya telah aus akibat erosi. Untuk melengkapi keindahan arsitektur, candi ini juga dihiasi dengan ornamen tumbuhan seperti sulur-suluran dan bunga teratai, yang memberikan sentuhan keanggunan pada batu bata merah candi.",
      "Atap: Bagian atap candi berbentuk limas bersusun yang meruncing ke atas, dengan beberapa tingkat undakan"
    ],
    kondisi : 'Candi Pari pertama kali ditemukan dalam keadaan runtuh pada abad ke-19, dan upaya pemugaran besar-besaran dimulai pada tahun 1904 oleh pemerintah kolonial Belanda, yang kemudian dilanjutkan oleh pemerintah Indonesia. Saat ini, candi ini berdiri tegak dan relatif terawat, meskipun beberapa bagian reliefnya sudah mulai aus dan detailnya sulit dikenali. Berlokasi di dekat area terdampak lumpur Lapindo, Candi Pari sempat menjadi perhatian terkait potensi dampak lingkungan, meskipun secara langsung tidak terdampak. Sebagai objek wisata sejarah di Sidoarjo, Candi Pari banyak dikunjungi dan juga menjadi fokus penelitian bagi para arkeolog dan sejarawan yang ingin mengungkap lebih banyak misteri tentang masa lalu Majapahit.',
    lokasi : 'Candi Pari terletak di Desa Candipari, Kecamatan Porong, Kabupaten Sidoarjo, Jawa Timur. Letaknya cukup strategis karena berada di dekat jalur utama yang menghubungkan Sidoarjo dengan kota-kota di sekitarnya. Meskipun kini dikenal karena kedekatannya dengan area terdampak lumpur Lapindo, candi ini tetap menjadi salah satu situs sejarah penting dan mudah dijangkau bagi pengunjung yang ingin mengetahui lebih banyak tentang peninggalan Kerajaan Majapahit di wilayah Jawa Timur.',
    gambarGaleri: [
      './src/assets/Candi_Pari_1.jpg',
      './src/assets/Candi_Pari_2.jpg',
    ],
    gambarAR: './src/assets/CandiPariMarker.jpg'
  },
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isCandiInfoModalOpen, setIsCandiInfoModalOpen] = useState(false);
  const [isARModalOpen, setIsARModalOpen] = useState(false); // State untuk modal AR
  
  const [selectedCandi, setSelectedCandi] = useState(null);
  const [arImageTarget, setArImageTarget] = useState({ url: '', title: '' }); // State untuk gambar AR

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      if (currentProgress > 100) {
        clearInterval(interval);
        setIsLoading(false);
      }
      setProgress(currentProgress);
    }, 300); // Update progres setiap 300ms

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  // Fungsi untuk membuka Candi Info Modal
  const openCandiInfoModal = (candiKey) => {
    if (candiData[candiKey]) {
      setSelectedCandi(candiData[candiKey]);
      setIsCandiInfoModalOpen(true);
    }
  };

  // Fungsi untuk menutup Candi Info Modal (juga menutup AR Modal)
  const closeCandiInfoModal = () => {
    setIsCandiInfoModalOpen(false);
    setIsARModalOpen(false); // Pastikan AR modal juga tertutup
    setSelectedCandi(null);
    setArImageTarget({ url: '', title: '' });
  };

  // Fungsi untuk membuka AR Image Target Modal
  const openARImageTargetModal = (imageUrl, candiName) => {
    setArImageTarget({ url: imageUrl, title: `Target AR: ${candiName}` });
    setIsARModalOpen(true);
  };

  // Fungsi untuk menutup AR Image Target Modal
  const closeARImageTargetModal = () => {
    setIsARModalOpen(false);
    setArImageTarget({ url: '', title: '' });
  };

  return (
    <div className="App">
      {isLoading && <LoadingScreen progress={progress} />}

      {!isLoading && (
        <div>
          <Navbar />
      {/* Tambahkan padding-top di sini */}
      <main className="pt-28 container mx-auto p-8"> {/* Sesuaikan pt-16 jika tinggi navbar Anda berbeda */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Sistem Informasi Candi</h1>
        <p className="text-gray-600 mb-8">
          Website Percobaan Sistem Informasi dengan dipadukan dengan Aplikasi Augmented Reality.
        </p>

        {/* Contoh konten agar halaman bisa di-scroll */}
        <div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl m-2">
          <div class="md:flex">
            <div class="md:shrink-0">
              <img
                class="h-48 w-full object-cover md:h-full md:w-48"
                src='./src/assets/CandiJawi.jpg'
                alt="Modern building architecture"
              />
            </div>
            <div class="p-8">
              <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Candi Jawi</div>
              <a href="#" class="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
                Candi yang Berasal dari Pasuruan
              </a>
              <p class="mt-2 text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure optio expedita suscipit autem unde aut delectus pariatur assumenda excepturi?
              </p>
              <button
                className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-green-700 transition duration-300 transform hover:scale-105"
                onClick={() => openCandiInfoModal('Jawi')}
              >
                Detail
              </button>
            </div>
          </div>
        </div>
        <div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
          <div class="md:flex">
            <div class="md:shrink-0">
              <img
                class="h-48 w-full object-cover md:h-full md:w-48"
                src='./src/assets/Candi_Pari_1.jpg'
                alt="Modern building architecture"
              />
            </div>
            <div class="p-8">
              <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Candi Pari</div>
              <a href="#" class="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
                Salah Satu Candi yang ada di Sidoarjo
              </a>
              <p class="mt-2 text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, molestiae.
              </p>
              <button
                className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-purple-700 transition duration-300 transform hover:scale-105"
                onClick={() => openCandiInfoModal('Pari')}
              >
                Detail
              </button>
            </div>
          </div>
        </div>
        <div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl m-2">
          <div class="md:flex">
            <div class="md:shrink-0">
              <img
                class="h-48 w-full object-cover md:h-full md:w-48"
                src='./src/assets/CandiJawi.jpg'
                alt="Modern building architecture"
              />
            </div>
            <div class="p-8">
              <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Candi Jawi</div>
              <a href="#" class="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
                Candi yang Berasal dari Pasuruan
              </a>
              <p class="mt-2 text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure optio expedita suscipit autem unde aut delectus pariatur assumenda excepturi?
              </p>
              <button
                className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-green-700 transition duration-300 transform hover:scale-105"
                onClick={() => openCandiInfoModal('Jawi')}
              >
                Detail
              </button>
            </div>
          </div>
        </div>
        <div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
          <div class="md:flex">
            <div class="md:shrink-0">
              <img
                class="h-48 w-full object-cover md:h-full md:w-48"
                src='./src/assets/Candi_Pari_1.jpg'
                alt="Modern building architecture"
              />
            </div>
            <div class="p-8">
              <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Company retreats</div>
              <a href="#" class="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
                Incredible accommodation for your team
              </a>
              <p class="mt-2 text-gray-500">
                Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
                places to do just that.
              </p>
              <button
                className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-purple-700 transition duration-300 transform hover:scale-105"
                onClick={() => openCandiInfoModal('Pari')}
              >
                Detail
              </button>
            </div>
          </div>
        </div>
        {/* Candi Info Modal (Full Layar dengan Carousel & Deskripsi Scrollable) */}
        <CandiInfoModal
          isOpen={isCandiInfoModalOpen}
          onClose={closeCandiInfoModal}
          candi={selectedCandi}
          onOpenARModal={openARImageTargetModal} // Teruskan fungsi untuk membuka modal AR
        />

        {/* AR Image Target Modal (Tengah Layar) */}
        <ARImageTargetModal
          isOpen={isARModalOpen}
          onClose={closeARImageTargetModal}
          imageUrl={arImageTarget.url}
          title={arImageTarget.title}
        />
      </main>
        </div>
      )}
    </div>
  );
}

export default App;
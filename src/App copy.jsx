import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import CandiInfoModal from './Components/CandiModal'; // Import modal pertama
import ARImageTargetModal from './Components/ARModal';

// Data Candi
const candiData = {
  borobudur: {
    nama: "Candi Borobudur",
    deskripsi: `Candi Borobudur adalah sebuah candi Buddha yang terletak di Magelang, Jawa Tengah, Indonesia. Candi ini merupakan salah satu monumen Buddha terbesar di dunia dan telah ditetapkan sebagai Situs Warisan Dunia UNESCO. Dibangun pada abad ke-8 dan ke-9 Masehi pada masa pemerintahan Wangsa Syailendra, Borobudur didesain dalam gaya Buddha Jawa, yang memadukan kepercayaan asli Indonesia dengan konsep nirwana Buddha. Arsitektur candi ini sangat megah dengan relief-relief yang menceritakan kisah-kisah Buddha, seperti kisah Jataka dan Lalitavistara, yang terukir di dinding-dindingnya. Kompleks candi ini terdiri dari sembilan teras berundak, enam berbentuk persegi dan tiga berbentuk lingkaran, dengan stupa utama di puncaknya. Dari puncak Borobudur, pengunjung bisa menikmati pemandangan matahari terbit yang spektakuler dengan latar belakang gunung-gunung berapi. Proses restorasi besar-besaran telah dilakukan pada tahun 1970-an dan 1980-an untuk melestarikan keajaiban arsitektur ini bagi generasi mendatang.`,
    gambarGaleri: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Candi_Borobudur_1.jpg/1280px-Candi_Borobudur_1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Borobudur_temple%2C_Java_Indonesia%2C_1975.jpg/1280px-Borobudur_temple%2C_Java_Indonesia%2C_1975.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Candi_Borobudur_pada_pagi_hari.jpg/1280px-Candi_Borobudur_pada_pagi_hari.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Borobudur_Stupa_Candi.jpg/1280px-Borobudur_Stupa_Candi.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Borobudur_Relief.jpg/1280px-Borobudur_Relief.jpg'
    ],
    gambarAR: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Candi_Borobudur%2C_Magelang_-_Indonesia.jpg/1280px-Candi_Borobudur%2C_Magelang_-_Indonesia.jpg',
    poinPenting: [
      "Monumen Buddha terbesar di dunia.",
      "Situs Warisan Dunia UNESCO.",
      "Dibangun abad ke-8/9 Masehi oleh Wangsa Syailendra.",
      "Dikenal dengan relief-relief Buddha yang mendetail.",
      "Terkenal dengan pemandangan matahari terbit."
    ]
  },
  prambanan: {
    nama: "Candi Prambanan",
    deskripsi: `Candi Prambanan adalah kompleks candi Hindu terbesar di Indonesia yang dibangun pada abad ke-9 Masehi. Candi ini dipersembahkan untuk Trimurti, tiga dewa utama Hindu yaitu Brahma sebagai dewa pencipta, Wisnu sebagai dewa pemelihara, dan Siwa sebagai dewa pemusnah. Arsitektur candi ini berbentuk tinggi dan ramping, sesuai dengan arsitektur candi Hindu pada umumnya. Prambanan juga merupakan Situs Warisan Dunia UNESCO dan terkenal dengan legenda Roro Jonggrang yang menceritakan asal-usulnya. Kompleks ini memiliki banyak candi kecil di sekeliling tiga candi utama yang megah, yaitu Candi Siwa, Candi Wisnu, dan Candi Brahma. Candi-candi ini dihiasi dengan relief-relief yang menggambarkan epos Ramayana dan Krisnayana. Setiap tahun, pertunjukan sendratari Ramayana sering diadakan di panggung terbuka dengan latar belakang Candi Prambanan yang megah.`,
    gambarGaleri: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Prambanan_from_distance.jpg/1280px-Prambanan_from_distance.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Candi_Prambanan_di_sore_hari_-_panoramio.jpg/1280px-Candi_Prambanan_di_sore_hari_-_panoramio.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Candi_Prambanan%2C_Yogyakarta.jpg/1280px-Candi_Prambanan%2C_Yogyakarta.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Prambanan_temple_complex%2C_Yogyakarta%2C_Indonesia.jpg/1280px-Prambanan_temple_complex%2C_Yogyakarta%2C_Indonesia.jpg'
    ],
    gambarAR: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Prambanan_Main_Temple.jpg/1280px-Prambanan_Main_Temple.jpg',
    poinPenting: [
      "Kompleks candi Hindu terbesar di Indonesia.",
      "Dipersembahkan untuk Trimurti (Brahma, Wisnu, Siwa).",
      "Situs Warisan Dunia UNESCO.",
      "Terkenal dengan legenda Roro Jonggrang.",
      "Relief menggambarkan epos Ramayana."
    ]
  },
  mendut: {
    nama: "Candi Mendut",
    deskripsi: `Candi Mendut adalah sebuah candi Buddha yang terletak tidak jauh dari Candi Borobudur, di Magelang, Jawa Tengah. Candi ini lebih tua dari Borobudur dan dibangun pada masa Dinasti Syailendra sekitar abad ke-8 Masehi. Di dalam candi ini terdapat arca Buddha Sakyamuni setinggi tiga meter yang diapit oleh arca Bodhisattwa Avalokitesvara dan Bodhisattwa Vajrapani. Arca-arca ini diukir dari batu utuh dan menunjukkan tingkat keahlian seni yang tinggi. Candi Mendut sering menjadi tempat ritual penting bagi umat Buddha, terutama selama perayaan Waisak, di mana para biarawan melakukan prosesi dari Candi Mendut, melewati Candi Pawon, menuju Candi Borobudur. Lingkungan di sekitar candi ini juga asri dan tenang, cocok untuk meditasi dan refleksi.`,
    gambarGaleri: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Candi_Mendut.jpg/1280px-Candi_Mendut.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Statue_of_Buddha_in_Candi_Mendut%2C_Magelang.jpg/1280px-Statue_of_Buddha_in_Candi_Mendut%2C_Magelang.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Triptych_statue_at_Candi_Mendut.jpg/1280px-Triptych_statue_at_Candi_Mendut.jpg'
    ],
    gambarAR: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Candi_Mendut_1.jpg/1280px-Candi_Mendut_1.jpg',
    poinPenting: [
      "Candi Buddha tertua di sekitar Borobudur.",
      "Dikenal dengan arca Buddha Sakyamuni setinggi 3 meter.",
      "Dibangun abad ke-8 Masehi oleh Dinasti Syailendra.",
      "Bagian dari rangkaian prosesi Waisak.",
      "Lingkungan yang tenang untuk meditasi."
    ]
  }
};

function App() {
  const [isCandiInfoModalOpen, setIsCandiInfoModalOpen] = useState(false);
  const [isARModalOpen, setIsARModalOpen] = useState(false); // State untuk modal AR

  const [selectedCandi, setSelectedCandi] = useState(null);
  const [arImageTarget, setArImageTarget] = useState({ url: '', title: '' }); // State untuk gambar AR


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
      <Navbar />

      <main className="pt-28 container mx-auto p-8 min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Sistem Informasi Candi Indonesia
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {/* Tombol untuk Candi Borobudur */}
          <button
            className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-red-700 transition duration-300 transform hover:scale-105"
            onClick={() => openCandiInfoModal('borobudur')}
          >
            Info Candi Borobudur
          </button>

          {/* Tombol untuk Candi Prambanan */}
          <button
            className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-green-700 transition duration-300 transform hover:scale-105"
            onClick={() => openCandiInfoModal('prambanan')}
          >
            Info Candi Prambanan
          </button>

          {/* Tombol untuk Candi Mendut */}
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            onClick={() => openCandiInfoModal('mendut')}
          >
            Info Candi Mendut
          </button>
        </div>

        <p className="mt-12 text-gray-500 text-center">
          Klik tombol candi untuk melihat penjelasan lengkap dengan carousel gambar. Di dalam modal tersebut, Anda dapat membuka gambar AR untuk dipindai.
        </p>

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

        {/* Konten halaman utama lainnya agar bisa di-scroll */}
        <div className="h-[400px] bg-gray-200 w-full max-w-lg mt-8 rounded-lg flex items-center justify-center">
          <p className="text-gray-600">Jelajahi keindahan warisan budaya Indonesia</p>
        </div>
        <div className="h-[400px] bg-gray-200 w-full max-w-lg mt-8 rounded-lg flex items-center justify-center">
          <p className="text-gray-600">Setiap candi menyimpan cerita sejarahnya sendiri</p>
        </div>
      </main>
    </div>
  );
}

export default App;
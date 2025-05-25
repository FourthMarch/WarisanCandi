import React, { useState, useEffect } from 'react';

const CandiInfoModal = ({ isOpen, onClose, candi, onOpenARModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen, candi]);

  if (!isOpen || !candi) return null;

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % candi.gambarGaleri.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? candi.gambarGaleri.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed inset-0 z-[9000] flex items-center justify-center bg-black bg-opacity-75 overflow-y-auto">
      <div className="relative w-full h-full flex flex-col bg-gray-900 text-white p-6 md:p-12">
        {/* Header Modal */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-700">
          <h2 className="text-3xl md:text-4xl font-extrabold">{candi.nama}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200 text-5xl font-light leading-none focus:outline-none"
            aria-label="Tutup Informasi Candi"
          >
            &times;
          </button>
        </div>

        {/* Body Modal - Bisa Di-scroll */}
        <div className="flex-grow overflow-y-auto pt-6 pb-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bagian Kiri: Carousel Gambar dan Tombol AR */}
            <div className="flex flex-col">
              <div className="relative flex items-center justify-center w-full bg-gray-800 rounded-lg overflow-hidden shadow-xl min-h-[300px] mb-6">
                {candi.gambarGaleri && candi.gambarGaleri.length > 0 ? (
                  <>
                    <img
                      src={candi.gambarGaleri[currentImageIndex]}
                      alt={`${candi.nama} - Gambar ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain transition-opacity duration-300"
                    />
                    <button
                      onClick={goToPrevImage}
                      className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-r-lg z-10 focus:outline-none"
                      aria-label="Gambar Sebelumnya"
                    >
                      &#10094;
                    </button>
                    <button
                      onClick={goToNextImage}
                      className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-l-lg z-10 focus:outline-none"
                      aria-label="Gambar Selanjutnya"
                    >
                      &#10095;
                    </button>
                    <div className="absolute bottom-4 flex space-x-2">
                      {candi.gambarGaleri.map((_, index) => (
                        <span
                          key={index}
                          className={`block w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                            index === currentImageIndex ? 'bg-white' : 'bg-gray-400 hover:bg-gray-200'
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        ></span>
                      ))}
                    </div>
                  </>
                ) : (
                  <p className="text-gray-400">Tidak ada gambar yang tersedia untuk carousel.</p>
                )}
              </div>

              {candi.gambarAR && (
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => onOpenARModal(candi.gambarAR, candi.nama)}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-green-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  >
                    Gunakan sebagai AR Target Candi Ini
                  </button>
                </div>
              )}
            </div>

            {/* Bagian Kanan: Deskripsi Candi dan Poin Penting */}
            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-3">Deskripsi Candi</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {candi.deskripsi}
              </p>
              <h3 className="text-xl font-bold mb-3">Sejarah Candi</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {candi.sejarah}
              </p>
              {/* Poin Penting */}
              {candi.arsitektur && candi.arsitektur.length > 0 && (
                <div className="bg-gray-800 p-4 rounded-lg shadow-inner mt-4">
                  <h3 className="text-xl font-bold text-teal-400 mb-3">Arsitektur dan Keunikan</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {candi.arsitektur.map((point, index) => (
                      <li key={index} className="text-base">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <h3 className="text-xl font-bold mb-3">Kondisi Candi</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {candi.kondisi}
              </p>
              <h3 className="text-xl font-bold mb-3">Lokasi Candi</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {candi.lokasi}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Modal */}
        <div className="pt-4 border-t border-gray-700 flex justify-end">
          <button
            onClick={onClose}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Tutup Informasi Candi
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandiInfoModal;
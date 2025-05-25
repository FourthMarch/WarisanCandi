import React from 'react';

const ARImageTargetModal = ({ isOpen, onClose, imageUrl, title }) => {
  if (!isOpen || !imageUrl) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div
        className="fixed inset-0 bg-black opacity-75"
        onClick={onClose}
      ></div>

      {/* Konten Modal AR Target */}
      <div className="relative w-auto max-w-lg mx-auto my-6 z-[10000]"> {/* Ukuran default/tengah layar */}
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          {/* Header Modal */}
          <div className="flex items-start justify-between p-4 border-b border-solid border-gray-300 rounded-t">
            <h3 className="text-xl font-semibold">
              {title}
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
              aria-label="Tutup AR Target"
            >
              <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>

          {/* Body Modal - Gambar AR Target dan Instruksi */}
          <div className="relative p-6 flex-auto text-center">
            <p className="text-gray-700 text-lg mb-4 font-semibold">
              Scan gambar di bawah ini dengan aplikasi AR Anda:
            </p>
            <div className="w-full h-auto flex items-center justify-center">
              <img
                src={imageUrl}
                alt={title || "AR Image Target"}
                className="max-w-full max-h-[400px] object-contain rounded-md shadow-lg border-2 border-dashed border-blue-400 p-2"
              />
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Pastikan pencahayaan cukup dan gambar terlihat jelas oleh kamera Anda.
            </p>
            {/* Anda bisa menambahkan elemen QR code di sini juga jika diperlukan */}
            {/* <div className="mt-6">
                <img src="URL_QR_CODE" alt="QR Code" className="mx-auto w-32 h-32"/>
                <p className="text-gray-500 text-sm mt-2">Atau scan QR Code untuk memulai.</p>
            </div> */}
          </div>

          {/* Footer Modal */}
          <div className="flex items-center justify-end p-4 border-t border-solid border-gray-300 rounded-b">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold uppercase px-6 py-2 text-sm rounded shadow hover:shadow-lg outline-none focus:outline-none transition-all duration-150"
              type="button"
              onClick={onClose}
            >
              Oke, Mengerti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ARImageTargetModal;
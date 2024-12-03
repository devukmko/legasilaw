import React from 'react'

const AboutUs = () => {
    return (
        <section className="relative bg-neutral text-white">
  {/* Top Section */}
  <div className="relative z-10 pt-10 pb-20">
    <div className="container mx-auto px-6 md:px-12 lg:px-20">
      <h2 className="text-3xl md:text-5xl font-bold">Apapun masalah properti Anda</h2>
      <p className="mt-4 text-lg">Konsultasikan dengan Kami</p>
      <a
        href="#"
        className="btn btn-success mt-6 px-6 py-3 text-lg rounded-md shadow-md"
      >
        Mulai Konsultasi
      </a>
    </div>
  </div>

  {/* Decorative Elements */}
  <div className="absolute top-0 left-0 w-40 h-40 md:w-60 md:h-60 bg-gradient-to-tr from-orange-400 to-red-500 rounded-full blur-3xl opacity-50"></div>
  <div className="absolute bottom-0 right-0 w-40 h-40 md:w-60 md:h-60 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full blur-3xl opacity-50"></div>

  {/* Middle Section */}
  <div className="relative z-10 py-10 bg-neutral-content text-neutral-content">
    <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold">Puja Jannatun&lsquo;im, S.H.</h3>
        <p>Abadikan dan tuntaskan hukum properti.</p>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold">Marthinus Nelson Rabin</h3>
        <p>Konsultasikan kebutuhan hukum properti Anda.</p>
      </div>
    </div>
  </div>

  {/* Contact Section */}
  <div className="relative z-10 bg-white py-10">
    <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Form */}
      <form className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Nama</label>
          <input type="text" className="w-full px-4 py-2 border rounded-md" placeholder="Cth. Samantha" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Nomor Handphone</label>
          <input type="text" className="w-full px-4 py-2 border rounded-md" placeholder="Cth. 0812-3456-7890" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Email</label>
          <input type="email" className="w-full px-4 py-2 border rounded-md" placeholder="Cth. samantha@email.com" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Pesan</label>
          <textarea className="w-full px-4 py-2 border rounded-md" placeholder="Tulis pesan di sini..."></textarea>
        </div>
        <button type="submit" className="btn btn-success w-full">Kirim Pesan</button>
      </form>

      {/* Contact Info */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Hubungi Kami</h3>
        <p className="mb-2">📧 info@legasilawfirm.com</p>
        <p className="mb-2">📞 +62 812-3456-7890</p>
        <p>🏢 Tower Avilium Lt. 09, Jakarta, Indonesia</p>
      </div>
    </div>
  </div>

  {/* Bottom Curve */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg
      className="relative block w-full h-16 md:h-24"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M321.39 56.17C261.74 66.89 201.84 88.08 146.35 95.74c-37.21 5.32-74.75-1.48-108.92-17.89-49.78-24.58-95.62-73.4-132.39-95.74H1200V0H0v120z"
        className="fill-neutral"
      />
    </svg>
  </div>
</section>
    )
}

export default AboutUs
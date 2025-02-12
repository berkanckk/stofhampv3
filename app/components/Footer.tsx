import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-8 relative">
      {/* Animasyonlu arka plan deseni */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-green-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Logo ve Açıklama */}
        <div className="max-w-2xl mx-auto text-center mb-4">
          <h3 className="text-2xl font-bold mb-2 hover:text-green-400 transition-colors duration-300">
            Stofhamp
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed text-sm hover:text-gray-300 transition-colors duration-300">
            Stok Fazlası Ham Madde Pazarı ile kaynaklarınızı verimli değerlendirin. Sürdürülebilir bir gelecek için atık yönetimi ve kaynak verimliliği.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          {/* Hızlı Bağlantılar */}
          <div className="space-y-2 text-center md:text-left transform hover:-translate-y-1 transition-transform duration-300">
            <h4 className="text-base font-semibold mb-1 text-green-400">Hızlı Bağlantılar</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/listings" className="text-gray-400 hover:text-green-400 transition-colors duration-300 block text-sm">
                  İlanlar
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-green-400 transition-colors duration-300 block text-sm">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-green-400 transition-colors duration-300 block text-sm">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Kategoriler */}
          <div className="space-y-2 text-center md:text-left transform hover:-translate-y-1 transition-transform duration-300">
            <h4 className="text-base font-semibold mb-1 text-green-400">Kategoriler</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/listings?category=metal" className="text-gray-400 hover:text-green-400 transition-colors duration-300 block text-sm">
                  Metal
                </Link>
              </li>
              <li>
                <Link href="/listings?category=plastic" className="text-gray-400 hover:text-green-400 transition-colors duration-300 block text-sm">
                  Plastik
                </Link>
              </li>
              <li>
                <Link href="/listings?category=wood" className="text-gray-400 hover:text-green-400 transition-colors duration-300 block text-sm">
                  Ahşap
                </Link>
              </li>
              <li>
                <Link href="/listings?category=textile" className="text-gray-400 hover:text-green-400 transition-colors duration-300 block text-sm">
                  Tekstil
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div className="space-y-2 text-center md:text-left transform hover:-translate-y-1 transition-transform duration-300">
            <h4 className="text-base font-semibold mb-1 text-green-400">İletişim</h4>
            <ul className="space-y-1">
              <li className="flex items-center justify-center md:justify-start space-x-1.5 text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>Bursa / İnegöl</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-1.5 text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>stofhamp@gmail.com</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-1.5 text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span>(543) 816-2412</span>
              </li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div className="space-y-2 text-center md:text-left transform hover:-translate-y-1 transition-transform duration-300">
            <h4 className="text-base font-semibold mb-1 text-green-400">Sosyal Medya</h4>
            <div className="flex justify-center md:justify-start space-x-2">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.016 18.6h-2.472v-3.9c0-.918-.018-2.1-1.278-2.1-1.28 0-1.476 1.002-1.476 2.04v3.96H9.318V9.6h2.376v1.08h.036c.33-.624 1.134-1.284 2.334-1.284 2.496 0 2.952 1.644 2.952 3.78v5.424zM7.2 8.52c-.792 0-1.44-.648-1.44-1.44 0-.792.648-1.44 1.44-1.44.792 0 1.44.648 1.44 1.44 0 .792-.648 1.44-1.44 1.44zM8.436 18.6H5.964V9.6h2.472v9z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0-.795-.646-1.44-1.44-1.44-.795 0-1.44.646-1.44 1.44 0 .795.646 1.44 1.44 1.44.793-.001 1.44-.646 1.44-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="border-t border-gray-800 pt-3 mt-3 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Stofhamp. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
} 
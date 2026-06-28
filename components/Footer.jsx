
function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-orange-500">Hungry</h3>
              <p className="text-gray-300">
                Delicious food delivered fresh to your door. Experience the taste of authentic cuisine.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <span className="sr-only">Facebook</span>
                  📘
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <span className="sr-only">Twitter</span>
                  🐦
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <span className="sr-only">Instagram</span>
                  📷
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-orange-500 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-orange-500 transition-colors">About</a></li>
                <li><a href="#menu" className="text-gray-300 hover:text-orange-500 transition-colors">Menu</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-orange-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>📍 123 Culinary Ave, New York, NY 10001, USA</p>
                <p>📞 +1 (555) 123-4567 </p>
                <p>✉️ hello@hungry.com</p>
                <p>🕒 Mon-Sun: 9AM - 11PM</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Shohorab H Shawon. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
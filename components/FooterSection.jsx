export default function FooterSection() {
  return (
    <footer data-nav-theme="dark" className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / Nome Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Beauty Center</h2>
          <p className="text-gray-400 text-sm">
            Creiamo esperienze digitali uniche per far crescere il tuo brand.
          </p>
        </div>

        {/* Link utili */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Link Utili</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Servizi
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Chi siamo
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contatti
              </a>
            </li>
          </ul>
        </div>

        {/* Contatti */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contatti</h3>
          <p className="text-gray-400 text-sm">Email: beautycenter@gmail.com</p>
          <p className="text-gray-400 text-sm">Telefono: +39 333 222 4444</p>
          <p className="text-gray-400 text-sm">Italia, Milano</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Beauty Center. Tutti i diritti riservati.
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">FashionPro</h3>
          <p>Luxury fashion for everyone. Latest trends and collections.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Links</h3>
          <ul>
            <li><a href="#" className="hover:text-pink-600">Home</a></li>
            <li><a href="#" className="hover:text-pink-600">Shop</a></li>
            <li><a href="#" className="hover:text-pink-600">About</a></li>
            <li><a href="#" className="hover:text-pink-600">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p>Email: support@fashionpro.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <p className="text-center text-gray-400 mt-8">&copy; 2025 FashionPro. All rights reserved.</p>
    </footer>
  );
}

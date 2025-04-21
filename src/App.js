import logo from './logo.png';
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-green-600 text-white p-4 shadow-md">
       <div className="flex items-center gap-4">
  <img src={logo} alt="Himalayas General Store Logo" className="h-16 w-16 rounded-full" />
  <div>
    <h1 className="text-3xl font-bold">Himalayas General Store</h1>
    <p className="text-sm">Your Local Nepali & Indian Grocery Store in the U.S.</p>
  </div>
</div>

      </header>

      <section className="bg-yellow-50 p-6 text-center">
        <h2 className="text-2xl font-semibold mb-2">Fresh. Authentic. Affordable.</h2>
        <p className="mb-4">Get the best of South Asian groceries, spices, and essentials right in your neighborhood.</p>
        <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700">Shop Now</button>
      </section>

      <section className="p-6">
        <h3 className="text-xl font-bold mb-4">Popular Categories</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {['Spices & Masalas', 'Rice & Pulses', 'Snacks & Sweets', 'Frozen Food', 'Fresh Vegetables', 'Puja Essentials'].map((category) => (
            <div key={category} className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition-all">
              <h4 className="text-lg font-semibold">{category}</h4>
              <p className="text-sm text-gray-600">Explore our wide range of {category.toLowerCase()}.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-green-50 p-6">
        <h3 className="text-xl font-bold mb-4">Community Love</h3>
        <p className="mb-4">We’re proud to be part of the local Nepali and Indian communities. Join our WhatsApp group, visit us during festivals, and enjoy the taste of home.</p>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Join Our WhatsApp Group</button>
      </section>

      <footer className="bg-gray-900 text-white p-4 mt-6 text-sm">
        <p>&copy; {new Date().getFullYear()} Himalayas General Store. All rights reserved.</p>
        <p>Located in [City, State] | Open Daily: 9 AM - 9 PM</p>
      </footer>
    </div>
  );
}

export default App;

export default function LivestockHealthTips() {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Navigation */}
      <nav className="bg-green-600 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="#">FarmerHub</a>
          </div>
          {/* Menu */}
          <div className="flex space-x-6 items-center">
            <a href="#" className="hover:text-gray-200">Home</a>
            {/* Dropdown (static, no behavior) */}
            <div className="relative">
              <button className="hover:text-gray-200">Livestock ▼</button>
              <div className="absolute hidden bg-green-700 text-white rounded-md shadow-lg mt-2">
                <a href="#" className="block px-4 py-2 hover:bg-green-800">Cows</a>
                <a href="#" className="block px-4 py-2 hover:bg-green-800">Chickens</a>
                <a href="#" className="block px-4 py-2 hover:bg-green-800">Sheep</a>
              </div>
            </div>
            <a href="#" className="hover:text-gray-200">Contact</a>
            <a href="#" className="hover:text-gray-200">About Us</a>
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="p-2 rounded-md text-gray-800 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {/* Livestock Section */}
        <section id="livestock" className="mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Livestock Health Tips</h2>
          <p className="mb-4">
            Click an animal from the Livestock dropdown menu to view health tips, vaccinations, by-product uses, and alerts.
          </p>

          {/* Cows */}
          <div id="cows-details">
            <h3 className="text-2xl font-bold text-green-700 mb-6">Cows</h3>
            <img
              src="https://images.unsplash.com/photo-1500595046743-ddf4d4d31597"
              alt="Cows"
              className="animal-image rounded-lg mb-6"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h4 className="text-xl font-semibold mb-2">Health Tips</h4>
                <p>Ensure regular hoof trimming ... balanced diet with sufficient roughage.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h4 className="text-xl font-semibold mb-2">Vaccinations & Care</h4>
                <p>Administer vaccines for bovine respiratory disease ... tailored vaccination schedule.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h4 className="text-xl font-semibold mb-2">By-product Uses</h4>
                <p>Cow milk can be processed into cheese, yogurt, or butter ... enhancing soil fertility.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h4 className="text-xl font-semibold mb-2">Alerts & Reminders</h4>
                <p>Set reminders for annual vaccinations ... vet check-ups every 6 months.</p>
              </div>
            </div>
          </div>

          {/* Chickens */}
          <div id="chickens-details" className="mt-12">
            <h3 className="text-2xl font-bold text-green-700 mb-6">Chickens</h3>
            <img
              src="https://images.unsplash.com/photo-1585704032915-c281c0913357"
              alt="Chickens"
              className="animal-image rounded-lg mb-6"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h4 className="text-xl font-semibold mb-2">Health Tips</h4>
                <p>Maintain clean coops ... Watch for signs of feather pecking or lethargy.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h4 className="text-xl font-semibold mb-2">Vaccinations & Care</h4>
                <p>Vaccinate against Newcastle disease ... prevent bacterial infections like coccidiosis.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h4 className="text-xl font-semibold mb-2">By-product Uses</h4>
                <p>Eggs can be sold fresh or used in baking ... composted for garden fertilizer.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h4 className="text-xl font-semibold mb-2">Alerts & Reminders</h4>
                <p>Schedule vaccinations every 6 months ... Replace bedding monthly to maintain hygiene.</p>
              </div>
            </div>
          </div>

          {/* Sheep */}
          <div id="sheep-details" className="mt-12">
            <h3 className="text-2xl font-bold text-green-700 mb-6">Sheep</h3>
            <img
              src="https://images.unsplash.com/photo-1524024973431-2ad916746881"
              alt="Sheep"
              className="animal-image rounded-lg mb-6"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h4 className="text-xl font-semibold mb-2">Health Tips</h4>
                <p>Check for foot rot regularly ... Shear annually to prevent overheating.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h4 className="text-xl font-semibold mb-2">Vaccinations & Care</h4>
                <p>Vaccinate against clostridial diseases ... Consult a vet for tailored care plans.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h4 className="text-xl font-semibold mb-2">By-product Uses</h4>
                <p>Wool can be spun into yarn ... Lanolin from wool is valuable for cosmetics.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h4 className="text-xl font-semibold mb-2">Alerts & Reminders</h4>
                <p>Schedule shearing in spring ... Set reminders for booster shots and annual health checks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Farmer Success Stories</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <h3 className="text-xl font-semibold mb-2">John's Dairy Triumph</h3>
              <p>John, a third-generation dairy farmer, transformed his small herd ... now sold in regional markets.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <h3 className="text-xl font-semibold mb-2">Maria's Egg Empire</h3>
              <p>Maria started with just 50 chickens ... doubling her farm's income.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <h3 className="text-xl font-semibold mb-2">Ahmed's Wool Venture</h3>
              <p>Ahmed revived his family’s sheep farm by focusing on wool quality ... funded farm expansion.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

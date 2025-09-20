import { useState, useEffect } from 'react';

export default function LivestockHealthTips() {
  const [selectedAnimal, setSelectedAnimal] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [alerts, setAlerts] = useState([]);
  const [showAlertModal, setShowAlertModal] = useState(false);

  const animals = {
    cows: {
      name: 'Cows',
      image: 'https://images.unsplash.com/photo-1500595046743-ddf4d4d31597',
      healthTips: 'Ensure regular hoof trimming every 6-8 weeks. Provide a balanced diet with sufficient roughage (50-60% of diet). Monitor for signs of mastitis, lameness, and digestive issues. Maintain clean water access at all times.',
      vaccinations: 'Administer vaccines for bovine respiratory disease, blackleg, and IBR annually. Schedule deworming every 3-4 months. Maintain tailored vaccination schedule based on local disease prevalence.',
      byproducts: 'Cow milk can be processed into cheese, yogurt, or butter for additional income. Manure serves as excellent organic fertilizer, enhancing soil fertility. Hide can be processed into leather products.',
      alerts: 'Set reminders for annual vaccinations and booster shots. Schedule vet check-ups every 6 months. Monitor breeding cycles and calving dates.'
    },
    chickens: {
      name: 'Chickens',
      image: 'https://images.unsplash.com/photo-1585704032915-c281c0913357',
      healthTips: 'Maintain clean coops with proper ventilation and dry bedding. Provide balanced feed with adequate protein (16-18% for layers). Watch for signs of feather pecking, lethargy, or respiratory issues.',
      vaccinations: 'Vaccinate against Newcastle disease, infectious bronchitis, and Marek\'s disease. Use antibiotics judiciously to prevent bacterial infections like coccidiosis. Follow vaccination schedule from day-old chicks.',
      byproducts: 'Eggs can be sold fresh or used in baking and cooking. Chicken manure makes excellent compost when properly aged. Feathers can be composted for garden fertilizer.',
      alerts: 'Schedule vaccinations every 6 months for adult birds. Replace bedding monthly to maintain hygiene. Monitor egg production rates and quality daily.'
    },
    sheep: {
      name: 'Sheep',
      image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881',
      healthTips: 'Check for foot rot regularly, especially in wet conditions. Provide adequate shelter and proper nutrition. Shear annually to prevent overheating and maintain wool quality.',
      vaccinations: 'Vaccinate against clostridial diseases (5-in-1 or 7-in-1 vaccines). Administer annual boosters and follow pregnancy vaccination protocols. Consult a vet for tailored care plans.',
      byproducts: 'Wool can be spun into yarn for textiles or sold to processors. Sheep milk produces high-quality cheese. Lanolin from wool is valuable for cosmetics and skincare products.',
      alerts: 'Schedule shearing in spring before hot weather. Set reminders for booster shots and annual health checks. Monitor flock for parasites monthly.'
    }
  };

  const upcomingTasks = [
    { id: 1, animal: 'cows', task: 'Vaccination due', date: '2025-09-15', priority: 'high' },
    { id: 2, animal: 'chickens', task: 'Bedding replacement', date: '2025-09-10', priority: 'medium' },
    { id: 3, animal: 'sheep', task: 'Hoof trimming', date: '2025-09-20', priority: 'high' },
    { id: 4, animal: 'cows', task: 'Vet checkup', date: '2025-09-25', priority: 'medium' }
  ];

  useEffect(() => {
    const today = new Date();
    const urgentTasks = upcomingTasks.filter(task => {
      const taskDate = new Date(task.date);
      const diffDays = Math.ceil((taskDate - today) / (1000 * 60 * 60 * 24));
      return diffDays <= 7 && task.priority === 'high';
    });
    setAlerts(urgentTasks);
  }, []);

  const filteredAnimals = () => {
    if (selectedAnimal === 'all') {
      return Object.entries(animals).filter(([key, animal]) =>
        animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        animal.healthTips.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return [[selectedAnimal, animals[selectedAnimal]]].filter(([key, animal]) =>
      animal && (animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      animal.healthTips.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  const handleAnimalSelect = (animalKey) => {
    setSelectedAnimal(animalKey);
    setDropdownOpen(false);
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-green-600 bg-green-50';
    }
  };

  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      {/* Alerts Banner */}
      {alerts.length > 0 && (
        <div className="bg-red-100 border-l-4 border-red-500 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <div className="ml-3">
                <p className="text-sm text-red-700">
                  <strong>Urgent Tasks:</strong> You have {alerts.length} high-priority task(s) due within a week.
                </p>
              </div>
            </div>
            <button 
              onClick={() => setShowAlertModal(true)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm"
            >
              View Details
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="bg-green-600 text-white p-4 sticky top-0 z-10 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <a href="#" className="hover:text-green-200">🚜 FarmerHub</a>
          </div>
          <div className="flex space-x-6 items-center">
            <a href="#" className="hover:text-gray-200 transition-colors">Home</a>
            
            {/* Working Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:text-gray-200 transition-colors flex items-center"
              >
                Livestock 
                <span className={`ml-1 transform transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {dropdownOpen && (
                <div className="absolute bg-green-700 text-white rounded-md shadow-lg mt-2 min-w-40 z-20">
                  <button 
                    onClick={() => handleAnimalSelect('all')}
                    className="block w-full text-left px-4 py-2 hover:bg-green-800 transition-colors"
                  >
                    All Animals
                  </button>
                  <button 
                    onClick={() => handleAnimalSelect('cows')}
                    className="block w-full text-left px-4 py-2 hover:bg-green-800 transition-colors"
                  >
                    🐄 Cows
                  </button>
                  <button 
                    onClick={() => handleAnimalSelect('chickens')}
                    className="block w-full text-left px-4 py-2 hover:bg-green-800 transition-colors"
                  >
                    🐔 Chickens
                  </button>
                  <button 
                    onClick={() => handleAnimalSelect('sheep')}
                    className="block w-full text-left px-4 py-2 hover:bg-green-800 transition-colors"
                  >
                    🐑 Sheep
                  </button>
                </div>
              )}
            </div>
            
            <a href="#" className="hover:text-gray-200 transition-colors">Contact</a>
            <a href="#" className="hover:text-gray-200 transition-colors">About Us</a>
            
            {/* Working Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search animals, tips..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-2 pl-8 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300 transition-all"
              />
              <span className="absolute left-2 top-2.5 text-gray-500">🔍</span>
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2 top-2.5 text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Close dropdown when clicking outside */}
      {dropdownOpen && (
        <div 
          className="fixed inset-0 z-10" 
          onClick={() => setDropdownOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {/* Filter Info */}
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-green-700 mb-2">Livestock Health Management</h1>
            <p className="text-gray-600">
              {selectedAnimal === 'all' 
                ? `Showing all animals ${searchTerm ? `matching "${searchTerm}"` : ''}`
                : `Showing ${animals[selectedAnimal]?.name || 'Unknown'} ${searchTerm ? `matching "${searchTerm}"` : ''}`
              }
            </p>
          </div>
          <div className="text-sm text-gray-500">
            {filteredAnimals().length} result(s) found
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-green-600">{Object.keys(animals).length}</h3>
            <p className="text-gray-600">Animal Types</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-blue-600">{upcomingTasks.length}</h3>
            <p className="text-gray-600">Upcoming Tasks</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-orange-600">{alerts.length}</h3>
            <p className="text-gray-600">Urgent Alerts</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-purple-600">24/7</h3>
            <p className="text-gray-600">Support Available</p>
          </div>
        </div>

        {/* Animal Details */}
        <section className="mb-12">
          {filteredAnimals().length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No results found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filters.</p>
              <button 
                onClick={() => {setSearchTerm(''); setSelectedAnimal('all');}}
                className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            filteredAnimals().map(([key, animal]) => (
              <div key={key} className="mb-12">
                <div className="flex items-center mb-6">
                  <h2 className="text-3xl font-bold text-green-700">{animal.name}</h2>
                  <div className="ml-4 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    Active Management
                  </div>
                </div>
                
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-64 object-cover rounded-lg mb-6 shadow-lg"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-lg border-l-4 border-blue-500">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-2">🏥</span>
                      <h4 className="text-xl font-semibold text-blue-700">Health Tips</h4>
                    </div>
                    <p className="text-gray-700">{animal.healthTips}</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-lg border-l-4 border-green-500">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-2">💉</span>
                      <h4 className="text-xl font-semibold text-green-700">Vaccinations & Care</h4>
                    </div>
                    <p className="text-gray-700">{animal.vaccinations}</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-lg border-l-4 border-purple-500">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-2">📦</span>
                      <h4 className="text-xl font-semibold text-purple-700">By-product Uses</h4>
                    </div>
                    <p className="text-gray-700">{animal.byproducts}</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-lg border-l-4 border-red-500">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-2">⏰</span>
                      <h4 className="text-xl font-semibold text-red-700">Alerts & Reminders</h4>
                    </div>
                    <p className="text-gray-700">{animal.alerts}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </section>

        {/* Task Schedule */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Upcoming Tasks</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Animal</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {upcomingTasks.map((task) => (
                    <tr key={task.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-gray-900 capitalize">
                            {animals[task.animal]?.name || task.animal}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{task.task}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{task.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button className="text-green-600 hover:text-green-900 font-medium">
                          Mark Complete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Farmer Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">🥛</span>
                <h3 className="text-xl font-semibold">John's Dairy Triumph</h3>
              </div>
              <p className="text-gray-700">John, a third-generation dairy farmer, transformed his small herd of 20 cows into a 100-cow operation using modern health monitoring. His milk is now sold in regional markets with 30% higher profit margins.</p>
              <div className="mt-4 text-sm text-green-600 font-medium">↗ 400% herd increase</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">🥚</span>
                <h3 className="text-xl font-semibold">Maria's Egg Empire</h3>
              </div>
              <p className="text-gray-700">Maria started with just 50 chickens in her backyard. Through proper health management and vaccination schedules, she now manages 2,000 free-range hens, doubling her farm's income.</p>
              <div className="mt-4 text-sm text-green-600 font-medium">↗ 200% income increase</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">🧶</span>
                <h3 className="text-xl font-semibold">Ahmed's Wool Venture</h3>
              </div>
              <p className="text-gray-700">Ahmed revived his family's sheep farm by focusing on wool quality through proper nutrition and health care. His premium wool now commands top prices, funding significant farm expansion.</p>
              <div className="mt-4 text-sm text-green-600 font-medium">↗ Premium pricing achieved</div>
            </div>
          </div>
        </section>
      </main>

      {/* Alert Modal */}
      {showAlertModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4 max-h-96 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-red-700">Urgent Tasks</h3>
              <button 
                onClick={() => setShowAlertModal(false)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ✕
              </button>
            </div>
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div key={alert.id} className="p-3 bg-red-50 border border-red-200 rounded">
                  <div className="font-medium text-red-800">{alert.task}</div>
                  <div className="text-sm text-red-600">
                    {animals[alert.animal]?.name} - Due: {alert.date}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-right">
              <button 
                onClick={() => setShowAlertModal(false)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-green-800 text-white p-6 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 FarmerHub. Empowering farmers with better livestock management.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-green-200">Privacy Policy</a>
            <a href="#" className="hover:text-green-200">Terms of Service</a>
            <a href="#" className="hover:text-green-200">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
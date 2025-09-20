import { useState, useEffect, useMemo, useCallback } from 'react';

export default function LivestockPage() {
  const [selectedAnimal, setSelectedAnimal] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [alerts, setAlerts] = useState([]);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [completedTasks, setCompletedTasks] = useState(new Set());
  const [sortBy, setSortBy] = useState('date');

  const animals = {
    cows: {
      name: 'Cattle',
      icon: '🐄',
      image: 'https://images.unsplash.com/photo-1500595046743-ddf4d4d31597?w=800&h=400&fit=crop',
      healthTips: 'Monitor body condition score regularly. Ensure access to clean, fresh water (30-50 gallons per day). Provide proper shelter and ventilation.',
      vaccinations: 'Core vaccines include IBR, BVD, PI3, BRSV annually. Clostridial vaccines every 6 months for young stock.',
      byproducts: 'Milk processing: cheese, yogurt, butter. Manure composting for organic fertilizer. Leather production.',
      commonIssues: ['Mastitis', 'Lameness', 'Ketosis', 'Milk fever', 'Respiratory disease']
    },
    chickens: {
      name: 'Poultry',
      icon: '🐔',
      image: 'https://images.unsplash.com/photo-1585704032915-c281c0913357?w=800&h=400&fit=crop',
      healthTips: 'Maintain coop temperature 55-75°F with proper ventilation. Provide 2-4 square feet per bird in coop.',
      vaccinations: 'Marek disease (day 1), Newcastle disease (2-3 weeks), fowl pox (8-12 weeks). Boosters every 6 months.',
      byproducts: 'Fresh egg sales, value-added products. Composted manure for garden fertilizer. Feathers for crafts.',
      commonIssues: ['Mites and lice', 'Egg binding', 'Coccidiosis', 'Respiratory infections', 'Feather pecking']
    },
    sheep: {
      name: 'Sheep',
      icon: '🐑',
      image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?w=800&h=400&fit=crop',
      healthTips: 'Inspect hooves monthly for rot. Maintain body condition score of 2.5-4. Provide mineral supplements.',
      vaccinations: 'Clostridial vaccines annually with booster before lambing. Rabies vaccination where required.',
      byproducts: 'Wool marketing to textile manufacturers. Sheep milk for artisan cheese. Lanolin extraction.',
      commonIssues: ['Parasitic worms', 'Foot rot', 'Pregnancy toxemia', 'Fly strike', 'Bloat']
    },
    goats: {
      name: 'Goats',
      icon: '🐐',
      image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&h=400&fit=crop',
      healthTips: 'Provide browse and roughage as primary diet. Monitor for copper deficiency signs. Maintain proper fencing.',
      vaccinations: 'CDT vaccine annually, booster before kidding. Consider Caseous Lymphadenitis vaccine.',
      byproducts: 'Goat milk for cheese, soap, cosmetics. Mohair or cashmere fiber. Meat production.',
      commonIssues: ['Parasitic worms', 'Caprine arthritis encephalitis', 'Caseous lymphadenitis', 'Ketosis']
    }
  };

  // Mock/Dummy data - will be replaced with database calls later
  const mockData = {
    tasks: [
      { id: 1, animal: 'cows', task: 'Vaccination due - IBR/BVD', date: '2025-09-15', priority: 'high' },
      { id: 2, animal: 'chickens', task: 'Coop bedding replacement', date: '2025-09-10', priority: 'medium' },
      { id: 3, animal: 'sheep', task: 'Hoof trimming scheduled', date: '2025-09-20', priority: 'high' },
      { id: 4, animal: 'cows', task: 'Veterinary checkup', date: '2025-09-25', priority: 'medium' },
      { id: 5, animal: 'goats', task: 'Parasite testing', date: '2025-09-12', priority: 'high' }
    ],
    
    successStories: [
      {
        id: 1,
        farmerName: 'John Motsumi',
        location: 'Limpopo Province',
        animalType: 'cows',
        story: 'Started with 5 cows and grew to 50 head through proper health management and breeding programs.',
        achievement: '900% herd growth',
        timeframe: '3 years',
        keySuccess: 'Regular vaccinations and nutrition monitoring',
        income: 'Monthly income increased from R2,000 to R18,000'
      },
      {
        id: 2,
        farmerName: 'Maria Ndlovu',
        location: 'KwaZulu-Natal',
        animalType: 'chickens',
        story: 'Transformed backyard chicken keeping into a thriving egg business serving local communities.',
        achievement: '500% production increase',
        timeframe: '18 months',
        keySuccess: 'Proper coop management and disease prevention',
        income: 'Weekly egg sales grew from R150 to R800'
      },
      {
        id: 3,
        farmerName: 'Ahmed Hassan',
        location: 'Western Cape',
        animalType: 'sheep',
        story: 'Revived family wool farm using modern health practices and selective breeding techniques.',
        achievement: 'Premium wool certification',
        timeframe: '2 years',
        keySuccess: 'Parasite control and nutrition supplementation',
        income: 'Wool prices improved by 200% with quality certification'
      },
      {
        id: 4,
        farmerName: 'Nomsa Mthembu',
        location: 'Eastern Cape',
        animalType: 'goats',
        story: 'Established successful goat milk cooperative supplying artisan cheese makers in Cape Town.',
        achievement: 'Cooperative leadership',
        timeframe: '4 years',
        keySuccess: 'Community organization and quality milk production',
        income: 'Cooperative generates R45,000 monthly for 15 families'
      }
    ],

    tips: [
      { id: 1, category: 'general', tip: 'Keep detailed health records for each animal', priority: 'high' },
      { id: 2, category: 'nutrition', tip: 'Provide clean, fresh water daily - it\'s the most important nutrient', priority: 'high' },
      { id: 3, category: 'prevention', tip: 'Prevention is always cheaper than treatment', priority: 'medium' },
      { id: 4, category: 'community', tip: 'Join local farmer groups to share knowledge and resources', priority: 'medium' }
    ]
  };

  const [upcomingTasks, setUpcomingTasks] = useState(mockData.tasks);

  useEffect(() => {
    const today = new Date();
    const urgentTasks = upcomingTasks.filter(task => {
      if (completedTasks.has(task.id)) return false;
      const taskDate = new Date(task.date);
      const diffDays = Math.ceil((taskDate - today) / (1000 * 60 * 60 * 24));
      return diffDays <= 7 && task.priority === 'high';
    });
    setAlerts(urgentTasks);
  }, [upcomingTasks, completedTasks]);

  const filteredAnimals = useMemo(() => {
    const searchLower = searchTerm.toLowerCase();
    if (selectedAnimal === 'all') {
      return Object.entries(animals).filter(([key, animal]) =>
        animal.name.toLowerCase().includes(searchLower) ||
        animal.healthTips.toLowerCase().includes(searchLower) ||
        animal.commonIssues.some(issue => issue.toLowerCase().includes(searchLower))
      );
    }
    return [[selectedAnimal, animals[selectedAnimal]]].filter(([key, animal]) =>
      animal && (
        animal.name.toLowerCase().includes(searchLower) ||
        animal.healthTips.toLowerCase().includes(searchLower) ||
        animal.commonIssues.some(issue => issue.toLowerCase().includes(searchLower))
      )
    );
  }, [selectedAnimal, searchTerm]);

  const sortedTasks = useMemo(() => {
    return [...upcomingTasks].sort((a, b) => {
      switch (sortBy) {
        case 'date': return new Date(a.date) - new Date(b.date);
        case 'priority':
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        case 'animal': return a.animal.localeCompare(b.animal);
        default: return 0;
      }
    });
  }, [upcomingTasks, sortBy]);

  const handleAnimalSelect = useCallback((animalKey) => {
    setSelectedAnimal(animalKey);
    setDropdownOpen(false);
  }, []);

  const handleTaskComplete = useCallback((taskId) => {
    setCompletedTasks(prev => new Set([...prev, taskId]));
  }, []);

  const addNewTask = useCallback(() => {
    const newTask = {
      id: Date.now(),
      animal: selectedAnimal === 'all' ? 'cows' : selectedAnimal,
      task: 'New task',
      date: new Date().toISOString().split('T')[0],
      priority: 'medium'
    };
    setUpcomingTasks(prev => [...prev, newTask]);
  }, [selectedAnimal]);

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-green-600 bg-green-50 border-green-200';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Alert Banner */}
      {alerts.length > 0 && (
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg">
          <div className="container mx-auto p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white bg-opacity-20 p-2 rounded-full">⚠️</div>
                <div>
                  <h4 className="font-semibold">Urgent Tasks Alert</h4>
                  <p className="text-sm opacity-90">{alerts.length} high-priority tasks due within 7 days</p>
                </div>
              </div>
              <button 
                onClick={() => setShowAlertModal(true)}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-all text-sm font-medium"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-green-700">
              🚜 FarmPro
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'overview' ? 'bg-green-100 text-green-800' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveTab('animals')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'animals' ? 'bg-green-100 text-green-800' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Animals
              </button>
              <button 
                onClick={() => setActiveTab('tasks')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'tasks' ? 'bg-green-100 text-green-800' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Tasks
              </button>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search animals, tips..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
                <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
              </div>

              {/* Animal Filter */}
              <div className="relative">
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <span className="mr-2">
                    {selectedAnimal === 'all' ? '🏠' : animals[selectedAnimal]?.icon}
                  </span>
                  {selectedAnimal === 'all' ? 'All Animals' : animals[selectedAnimal]?.name}
                  <span className={`ml-2 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
                
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                    <button 
                      onClick={() => handleAnimalSelect('all')}
                      className="block w-full text-left px-4 py-3 hover:bg-gray-50 border-b"
                    >
                      🏠 All Animals
                    </button>
                    {Object.entries(animals).map(([key, animal]) => (
                      <button 
                        key={key}
                        onClick={() => handleAnimalSelect(key)}
                        className="block w-full text-left px-4 py-3 hover:bg-gray-50 last:border-b-0 border-b"
                      >
                        {animal.icon} {animal.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Dropdown overlay */}
      {dropdownOpen && <div className="fixed inset-0 z-30" onClick={() => setDropdownOpen(false)} />}

      <main className="container mx-auto px-4 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white">
                <div className="text-3xl font-bold">{Object.keys(animals).length}</div>
                <div className="text-blue-100">Animal Types</div>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl text-white">
                <div className="text-3xl font-bold">{upcomingTasks.filter(t => !completedTasks.has(t.id)).length}</div>
                <div className="text-green-100">Pending Tasks</div>
              </div>
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 rounded-xl text-white">
                <div className="text-3xl font-bold">{alerts.length}</div>
                <div className="text-red-100">Urgent Alerts</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-xl text-white">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-purple-100">Support</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button 
                  onClick={addNewTask}
                  className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-400 hover:bg-green-50"
                >
                  <span className="text-2xl mr-3">➕</span>Add New Task
                </button>
                <button 
                  onClick={() => setActiveTab('animals')}
                  className="flex items-center justify-center p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100"
                >
                  <span className="text-2xl mr-3">🐄</span>View Animals
                </button>
                <button 
                  onClick={() => setActiveTab('tasks')}
                  className="flex items-center justify-center p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100"
                >
                  <span className="text-2xl mr-3">📋</span>Manage Tasks
                </button>
              </div>
            </div>

            {/* Upcoming Tasks */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-xl font-semibold mb-4">Upcoming Tasks</h3>
              <div className="space-y-4">
                {sortedTasks.slice(0, 5).map((task) => (
                  <div key={task.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{animals[task.animal]?.icon}</span>
                      <div>
                        <p className="font-medium">{task.task}</p>
                        <p className="text-sm text-gray-500">{animals[task.animal]?.name} • Due {task.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                      {!completedTasks.has(task.id) && (
                        <button 
                          onClick={() => handleTaskComplete(task.id)}
                          className="text-green-600 hover:text-green-700 text-sm font-medium"
                        >
                          Complete
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Farmer Success Stories */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-xl font-semibold mb-4">Farmer Success Stories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockData.successStories.map((story) => (
                  <div key={story.id} className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{animals[story.animalType]?.icon}</span>
                        <div>
                          <h4 className="font-semibold text-lg text-gray-900">{story.farmerName}</h4>
                          <p className="text-sm text-gray-600">{story.location}</p>
                        </div>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        {story.timeframe}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">{story.story}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Achievement:</span>
                        <span className="font-medium text-green-700">{story.achievement}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Key Success:</span>
                        <span className="font-medium text-blue-700 text-right text-sm">{story.keySuccess}</span>
                      </div>
                      <div className="pt-2 border-t border-gray-200">
                        <p className="text-sm font-medium text-green-800">{story.income}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Share Your Success Story
                </button>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-xl shadow-sm p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Daily Farming Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockData.tips.map((tip) => (
                  <div key={tip.id} className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-start space-x-3">
                      <span className="text-yellow-300 text-xl">💡</span>
                      <div>
                        <p className="text-sm font-medium opacity-90 uppercase tracking-wide">{tip.category}</p>
                        <p className="mt-1">{tip.tip}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Animals Tab */}
        {activeTab === 'animals' && (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold">Livestock Management</h1>
              <p className="text-gray-600 mt-1">
                Showing {selectedAnimal === 'all' ? 'all animals' : animals[selectedAnimal]?.name}
                {searchTerm && ` matching "${searchTerm}"`} ({filteredAnimals.length} results)
              </p>
            </div>

            {filteredAnimals.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">No animals found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search terms.</p>
                <button 
                  onClick={() => {setSearchTerm(''); setSelectedAnimal('all');}}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              filteredAnimals.map(([key, animal]) => (
                <div key={key} className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <div className="relative h-48">
                    <img src={animal.image} alt={animal.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-6xl mb-2">{animal.icon}</div>
                        <h2 className="text-3xl font-bold">{animal.name}</h2>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-blue-800 mb-2">🏥 Health Tips</h4>
                        <p className="text-blue-700">{animal.healthTips}</p>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-green-800 mb-2">💉 Vaccinations</h4>
                        <p className="text-green-700">{animal.vaccinations}</p>
                      </div>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-purple-800 mb-2">📦 By-products</h4>
                        <p className="text-purple-700">{animal.byproducts}</p>
                      </div>
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-orange-800 mb-2">⚠️ Common Issues</h4>
                        <div className="flex flex-wrap gap-2">
                          {animal.commonIssues.map((issue, idx) => (
                            <span key={idx} className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">
                              {issue}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Tasks Tab */}
        {activeTab === 'tasks' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Task Management</h1>
              <div className="flex items-center space-x-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border rounded-lg px-3 py-2"
                >
                  <option value="date">Sort by Date</option>
                  <option value="priority">Sort by Priority</option>
                  <option value="animal">Sort by Animal</option>
                </select>
                <button 
                  onClick={addNewTask}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                  Add Task
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Animal</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Task</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sortedTasks.map((task) => (
                    <tr key={task.id} className={completedTasks.has(task.id) ? 'opacity-50' : ''}>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="mr-2">{animals[task.animal]?.icon}</span>
                          {animals[task.animal]?.name}
                        </div>
                      </td>
                      <td className="px-6 py-4">{task.task}</td>
                      <td className="px-6 py-4">{task.date}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {!completedTasks.has(task.id) && (
                          <button 
                            onClick={() => handleTaskComplete(task.id)}
                            className="text-green-600 hover:text-green-900 font-medium"
                          >
                            Mark Complete
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {/* Alert Modal */}
      {showAlertModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-red-700">Urgent Tasks</h3>
              <button 
                onClick={() => setShowAlertModal(false)}
                className="text-gray-500 hover:text-gray-700"
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
          <p>&copy; 2025 FarmHub. Empowering farmers with better livestock management.</p>
        </div>
      </footer>
    </div>
  );
}
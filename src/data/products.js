// src/data/products.js
import SmartIrrigationSystem from '../assets/SmartIrrigationSystem.webp';
import CropAnalyticsDashboard from '../assets/CropAnalyticsDashboard.webp';
import DripIrrigationSystem from '../assets/DripIrrigationSystem.webp';
import OrganicFertilizerPack from '../assets/OrganicFertilizerPack.webp';
import PestControlSolution from '../assets/PestControlSolution.webp';
import SmartGreenhouseController from '../assets/SmartGreenhouseController.webp';
import SoilHealthMonitor from '../assets/SoilHealthMonitor.webp';
import WeatherStationPro from '../assets/WeatherStationPro.webp';
export const products = [
  {
    id: 1,
    name: 'Smart Irrigation System',
    price: 15999,
    category: 'IoT',
    image: SmartIrrigationSystem,
    description: 'Automated water management system for optimal crop growth with real-time monitoring',
    features: [
      'Automated scheduling based on weather',
      'Mobile app control',
      'Water usage analytics',
      'Multi-zone support',
      '2-year warranty'
    ]
  },
  {
    id: 2,
    name: 'Soil Health Monitor',
    price: 8999,
    category: 'Sensors',
    image: SoilHealthMonitor,
    description: 'Real-time soil nutrient and pH monitoring with cloud connectivity',
    features: [
      'NPK level detection',
      'pH and moisture sensors',
      'Cloud data storage',
      'Mobile alerts',
      '1-year warranty'
    ]
  },
  {
    id: 3,
    name: 'Organic Fertilizer Pack',
    price: 1299,
    category: 'Supplies',
    image: OrganicFertilizerPack,
    description: 'Premium organic nutrients for sustainable farming - 50kg pack',
    features: [
      '100% organic certified',
      'Slow-release formula',
      'Suitable for all crops',
      'Eco-friendly packaging',
      'No harmful chemicals'
    ]
  },
  {
    id: 4,
    name: 'Weather Station Pro',
    price: 12999,
    category: 'IoT',
    image: WeatherStationPro,
    description: 'Precision weather forecasting for your farm with AI predictions',
    features: [
      'Temperature & humidity sensors',
      'Wind speed monitoring',
      'Rainfall measurement',
      '7-day forecasts',
      'Solar powered'
    ]
  },
  {
    id: 5,
    name: 'Pest Control Solution',
    price: 2499,
    category: 'Supplies',
    image: PestControlSolution,
    description: 'Eco-friendly pest management system - Safe for crops and environment',
    features: [
      'Organic ingredients',
      'Broad spectrum protection',
      'Safe for beneficial insects',
      'Easy application',
      'Biodegradable'
    ]
  },
  {
    id: 6,
    name: 'Crop Analytics Dashboard',
    price: 24999,
    category: 'Software',
    image: CropAnalyticsDashboard,
    description: 'AI-powered crop yield prediction and farm management software',
    features: [
      'Yield prediction AI',
      'Crop health monitoring',
      'Financial analytics',
      'Market price insights',
      'Annual subscription'
    ]
  },
  {
    id: 7,
    name: 'Drip Irrigation Kit',
    price: 5999,
    category: 'Equipment',
    image: DripIrrigationSystem,
    description: 'Complete drip irrigation system for 1 acre farm',
    features: [
      'Water-efficient design',
      'Easy installation',
      'Durable materials',
      'Pressure regulators included',
      'UV resistant pipes'
    ]
  },
  {
    id: 8,
    name: 'Smart Greenhouse Controller',
    price: 18999,
    category: 'IoT',
    image: SmartGreenhouseController,
    description: 'Automated climate control for greenhouse farming',
    features: [
      'Temperature control',
      'Humidity management',
      'Automated ventilation',
      'Remote monitoring',
      'Energy efficient'
    ]
  }
];

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getProductsByCategory = (category) => {
  if (category === 'All') return products;
  return products.filter(product => product.category === category);
};

export const categories = ['All', 'IoT', 'Sensors', 'Supplies', 'Software', 'Equipment'];
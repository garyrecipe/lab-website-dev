import Layout from '../components/Layout';
import { EQUIPMENT_LIST } from '../data/equipment';

const Equipment = () => {
  return (
    <Layout title="實驗設備">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EQUIPMENT_LIST.map((equipment, index) => (
            <div 
              key={index}
              className="bg-white/90 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={equipment.image}
                  alt={equipment.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {equipment.name}
                </h3>
                <div className="bg-indigo-50 rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-medium text-indigo-900 mb-2">
                    主要用途
                  </h4>
                  <p className="text-gray-700 mb-4">
                    {equipment.purpose}
                  </p>
                  <h4 className="text-sm font-medium text-indigo-900 mb-2">
                    規格
                  </h4>
                  <p className="text-gray-700">
                    {equipment.spec}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-indigo-900">
                    設備特點
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {equipment.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Equipment; 
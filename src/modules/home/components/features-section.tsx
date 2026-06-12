import { Target, Rocket, Gem } from "lucide-react";
import { featuresData as features } from "@/data/features-data";
import { FEATURES_CONSTANTS } from "@/constants/features-constants";

export default function FeaturesSection() {

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          {FEATURES_CONSTANTS.TITLE}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-shadow bg-white text-left flex flex-col items-start group">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 ${feature.iconBg} ${feature.iconColor}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6 flex-1 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

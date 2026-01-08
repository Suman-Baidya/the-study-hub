import { Shield, Zap, Globe } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      title: "Secure",
      description: "Your data is protected with enterprise-grade security and encryption.",
    },
    {
      icon: <Zap className="w-10 h-10 text-blue-600" />,
      title: "Fast",
      description: "Optimized performance ensures lightning-fast load times and smooth experience.",
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-600" />,
      title: "Global",
      description: "Access from anywhere in the world with reliable infrastructure.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Features</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              {feature.icon}
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
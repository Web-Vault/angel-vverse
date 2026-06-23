import siteData from '../data/siteData.json';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-green-50 -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span>✨</span>
            <span>Transform your digital presence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Elevate Your <span className="bg-gradient-to-r from-yellow-500 to-green-600 bg-clip-text text-transparent">Brand</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            {siteData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="bg-gradient-to-r from-yellow-400 to-green-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all">
              Explore Services
            </a>
            <a href="#contact" className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

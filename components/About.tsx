export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Angel Vverse</h2>
            <p className="text-lg text-gray-600 mb-6">
              We are a passionate team of digital marketing experts dedicated to helping businesses thrive in the online world. With years of experience and a creative mindset, we craft unique strategies that drive real results.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-10">
              <div className="text-center p-6 bg-white rounded-2xl shadow-md">
                <div className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-green-600 bg-clip-text text-transparent">500+</div>
                <p className="text-gray-600 mt-2">Happy Clients</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-md">
                <div className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-green-600 bg-clip-text text-transparent">1000+</div>
                <p className="text-gray-600 mt-2">Projects Done</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-yellow-300 to-green-400 rounded-3xl flex items-center justify-center">
              <div className="text-9xl">🎨</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

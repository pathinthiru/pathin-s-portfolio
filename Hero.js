function Hero() {
  return (
    <section
      className="relative pt-20 py-16 px-6 text-center overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-gray-100"
      id="home"
    >
      {/* Floating Blur Effects */}
      <div className="absolute top-[-50px] left-[-80px] w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-[-60px] right-[-90px] w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-sm text-gray-600 uppercase tracking-wide">Hi, I’m</h2>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">
          Pathin Thirumudiyan
        </h1>

        <p className="mt-4 text-lg text-gray-700 font-medium">
          MCA Graduate &nbsp;|&nbsp; Full Stack Developer  &nbsp;|&nbsp; Freelancer  &nbsp;|  Video Editor  &nbsp;|&nbsp; eBook Author
        
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="https://drive.google.com/file/d/1z5nv0XXVOerlVufWD85t3tTR776CQGdM/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-lg font-medium transition"
          >
            📄 View Resume
          </a>
          <a
            href="mailto:pathinpathin7@gmail.com"
            className="border border-black px-5 py-2 rounded-lg font-medium hover:bg-black hover:text-white transition"
          >
            📬 Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

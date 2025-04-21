function Skills() {
  const techSkills = [
    "HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB",
    "Python", "C", "C++", "Java", "Git & GitHub", "SQL", "Tailwind CSS"
  ];

  const creativeSkills = [
    "Unity", "C# (for Game Dev)", "CapCut", "Filmora", "Canva", "Amazon KDP",
    "Video Editing", "eBook Writing"
  ];

  return (
    <section className="relative bg-gray-50 py-16 px-6 overflow-hidden" id="skills">
      
      {/* 🚀 Zigzag Flying Rocket */}
      <div className="absolute top-4 left-0 w-full pointer-events-none">
        <div className="text-5xl animate-fly-zigzag inline-block">🚀</div>
      </div>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-600 mb-4">💻 Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {techSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Creative Skills */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-600 mb-4">🎨 Creative & Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {creativeSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

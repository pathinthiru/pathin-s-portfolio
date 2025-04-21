import { useState } from 'react';
import ProjectModal from './ProjectModal';

function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Self-Published eBooks – Thrive Series",
      description:
        'Authored and published self-help eBooks on Amazon Kindle. One of the major works, "Thrive: The Ultimate Blueprint For Personal Development", covers mindfulness, productivity, and personal growth. Books written in English with more than 30,000+ words.',
      tech: "Platform: Amazon Kindle | Tools: Canva, Google Docs",
      image: "",
      video: "",
      link:"https://amzn.in/d/c7yoMon"
    },
   
    {
        title: "Rhyno EV – Product Website",
        description:
          "Website for showcasing electric scooters with product comparison, booking and rentals.",
        tech: "Tech: React.js, HTML, CSS, JavaScript",
        image: "", // leave empty or use placeholder
        video: "",
        link: "https://drive.google.com/drive/folders/1mSGkJiUYMUlSySACY9TC-MrSHKNt3YR_?usp=sharing"
      },
   
    {
      title: "Unity Game Projects",
      description:
        "Created 2D and 3D interactive games using Unity and C#. Developed game mechanics, player movement, collision detection, and object animations. Built basic UI elements like health bars and scoring systems. Hands-on experience in game loop logic and scene transitions.",
      tech: "Tools: Unity, C#, Visual Studio",
      image: "",
      video: "",
      link:"https://drive.google.com/drive/folders/1FmoYsNBMvOkA6EjQ7mw_T8WctXhsuUfQ?usp=sharing"
    },
    {
      title: "Video Editing – Madan Gowri Style",
      description:
        "Edited a YouTube-style video inspired by Madan Gowri’s format. Added voiceover, clips, transitions, on-screen text, and background music. Practiced storytelling with visuals and edited using CapCut and Filmora to match popular content creator standards.",
      tech: "Tools: CapCut, Filmora, Canva",
      image: "",
      video: "",
      link:"https://drive.google.com/file/d/1dEV7X5N1tRUqUoZE_DaQQ48IH3IBsqvx/view?usp=sharing"
    },
    {
      title: "Talent Tree – Skill & Collaboration App",
      description:
        "A web platform where users can showcase their talent, connect with others in similar fields, and form groups to collaborate on creative and professional projects. Users can post about their skills, find related posts, and join communities that offer opportunities based on mutual interests.",
      tech: "Tech: React.js, Node.js, MongoDB, Express.js",
      image: "",
      video: "",
      link:"https://drive.google.com/drive/folders/1pnAbdgpgs_-MgrkaUrVtJcesUE6hoKYV?usp=sharing"
    },
    {
      title: "Freelance Client Projects",
      description:
        "Developed business websites, portfolios, and landing pages for local clients.",
      tech: "Tech: React, HTML, Firebase, GitHub",
      image: "",
      video: "",
      link:"https://drive.google.com/file/d/16JMTvOzmaGco6OgCR0-M_LtP20WvEGqA/view?usp=sharing"
    },
   
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="bg-white py-16 px-6" id="projects">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">My Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => openModal(project)}
            >
              <h3 className="text-xl font-semibold text-yellow-600">{project.title}</h3>
              <p className="mt-2 text-gray-700">{project.description}</p>
              <p className="text-sm mt-2 text-gray-500">{project.tech}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal component */}
      {isOpen && selectedProject && (
        <ProjectModal
        isOpen={isOpen}
        project={selectedProject}
        onClose={closeModal}
      />
      
      )}
    </section>
  );
}

export default Projects;

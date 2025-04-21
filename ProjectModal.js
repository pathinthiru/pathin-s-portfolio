import React, { useEffect } from 'react';

const ProjectModal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target.id === 'modal-backdrop') {
      onClose();
    }
  };

  if (!isOpen || !project) return null;

  return (
    <div
      id="modal-backdrop"
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-lg p-6 max-h-[90vh] w-full max-w-2xl overflow-y-auto relative shadow-lg">
        <button
          className="absolute top-2 right-3 text-2xl text-gray-600 hover:text-black"
          onClick={onClose}
        >
          &times;
        </button>

        <h3 className="text-xl font-semibold text-yellow-600 mb-4">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>

        {/* Show Image only if it's local or external image */}
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto rounded mb-4"
          />
        )}

        {/* Show Video if available */}
        {project.video && (
          <video controls className="w-full rounded mb-4">
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* If there's a Drive link or any external link */}
        {project.link && (
          <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 hover:bg-black hover:text-white text-black font-medium px-5 py-2 rounded-full transition duration-300"
        >
          View Full Project
        </a>
        
        )}
      </div>
    </div>
  );
};

export default ProjectModal;

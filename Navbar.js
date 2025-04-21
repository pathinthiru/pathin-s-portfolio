// src/components/Navbar.js
function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white px-6 py-4 shadow-md flex justify-between items-center">

        <h1 className="text-2xl font-bold text-yellow-400">Pathin'Resume</h1>
        <ul className="flex gap-6">
          <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400">About</a></li>
          <li><a href="#projects" className="hover:text-yellow-400">Projects</a></li>
          <li><a href="#skills" className="hover:text-yellow-400">Skills</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
        </ul>
      </nav>
      
    );
  }
  
  export default Navbar;
  
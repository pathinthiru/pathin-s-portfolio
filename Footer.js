function Footer() {
    const year = new Date().getFullYear();
  
    return (
      <footer className="bg-black text-white py-6 px-4 mt-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-3 text-sm text-gray-400">
            Designed & Developed by <span className="text-yellow-400 font-medium">Pathin Thirumudiyan</span>
          </p>
          <div className="flex justify-center gap-6 mb-3">
            <a
              href="https://www.linkedin.com/in/pathin-thiru-b05b2625a/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 transition"
            >
              🔗 LinkedIn
            </a>
            <a
              href="mailto:pathinpathin7@gmail.com"
              className="hover:text-yellow-400 transition"
            >
              📧 Email
            </a>
           
          </div>
          <p className="text-xs text-gray-500">&copy; {year} Pathin Portfolio. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  
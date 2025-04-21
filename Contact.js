function Contact() {
    return (
      <section className="bg-gray-100 py-16 px-6" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Me</h2>
          <p className="text-lg text-gray-700 mb-8">
            I’m open to freelance work, internships, or any creative collaborations. Let’s connect!
          </p>
  
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:pathinpathin7@gmail.com"
              className="bg-black text-white px-5 py-3 rounded-md font-medium hover:bg-yellow-400 hover:text-black transition"
            >
              📧 Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/pathin-thiru-b05b2625a/"
              target="_blank"
              rel="noreferrer"
              className="bg-yellow-400 text-black px-5 py-3 rounded-md font-medium hover:bg-black hover:text-white transition"
            >
              🔗 LinkedIn
            </a>
           
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;
  
function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      <nav className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-bold text-xl text-cyan-400">
            Githika Srinivasan
          </h1>

          <div className="flex gap-6 text-gray-300">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#prompts">Prompts</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6">

        <p className="text-cyan-400 tracking-[0.3em] uppercase mb-6">
          Prompt Engineer Portfolio
        </p>

        <h1 className="text-6xl md:text-8xl font-bold leading-tight max-w-6xl">
          Building
          <span className="text-cyan-400"> Intelligent </span>
          AI Experiences
        </h1>

        <p className="text-gray-400 text-xl max-w-3xl mt-8">
          M.Tech Computer Science (Data Science) student focused on
          Generative AI, Large Language Models, Prompt Engineering,
          NLP, AI Automation and Intelligent Systems.
        </p>

        <div className="flex gap-4 mt-10">

          <a
            href="#projects"
            className="bg-cyan-500 text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl hover:bg-cyan-500 hover:text-black transition"
          >
            Contact Me
          </a>

        </div>

      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 text-purple-400">
          About Me
        </h2>

        <p className="text-gray-300">
          Passionate about building AI-powered solutions using ChatGPT,
          Claude, Gemini, Machine Learning and Prompt Engineering.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 text-purple-400">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Python",
            "Prompt Engineering",
            "ChatGPT",
            "Claude",
            "Gemini",
            "NLP",
            "Machine Learning",
            "React",
            "Flask",
            "GitHub",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-purple-700 px-4 py-2 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="prompts" className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 text-purple-400">
          Prompt Engineering
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="font-bold mb-2">Zero-Shot Prompting</h3>
            <p className="text-gray-400">
              Generate a beginner-friendly explanation of DBMS normalization, covering 1NF, 2NF, and 3NF with simple examples and practical use cases.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="font-bold mb-2">Role-Based Prompting</h3>
            <p className="text-gray-400">
              Act as a Technical Recruiter hiring fresh graduates for AI and Software Engineering roles. Assess the candidate's projects, skills, certifications, and resume quality. Provide a hiring recommendation, highlight improvement areas, and suggest suitable job roles.
            </p>
          </div>

        </div>
      </section>
      
      {/* Prompt Engineering Showcase */}

      <section id="prompts" className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold mb-10 text-cyan-400">
          Prompt Engineering Showcase
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
        <h3 className="text-xl font-bold mb-3 text-cyan-400">
          Zero-Shot Prompting
        </h3>

        <p className="text-gray-400">
          Explain DBMS normalization in simple terms for a beginner.
        </p>
      </div>

      <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
        <h3 className="text-xl font-bold mb-3 text-cyan-400">
          Few-Shot Prompting
        </h3>

        <p className="text-gray-400">
          Given examples of ATS resume reviews, evaluate a new resume and provide recommendations.
        </p>
      </div>

      <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
        <h3 className="text-xl font-bold mb-3 text-cyan-400">
          Chain-of-Thought Prompting
        </h3>

        <p className="text-gray-400">
          Analyze candidate skills step-by-step and determine job-role compatibility.
        </p>
      </div>

      <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
        <h3 className="text-xl font-bold mb-3 text-cyan-400">
          Role-Based Prompting
        </h3>

        <p className="text-gray-400">
          Act as a Senior Technical Recruiter and evaluate this candidate profile.
        </p>
      </div>

        </div>

      </section>

      {/* Projects */}

      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold mb-10 text-cyan-400">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

      {/* Project 1 */}
      <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

        <h3 className="text-2xl font-bold mb-4">
          AI Interview Intelligence System
        </h3>

        <p className="text-gray-400 mb-4">
          AI-powered mock interview platform that generates interview questions,
          evaluates candidate responses, provides personalized feedback, and
          helps users improve technical and communication skills.
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          <span className="bg-cyan-900 px-3 py-1 rounded">React</span>
          <span className="bg-cyan-900 px-3 py-1 rounded">Next.js</span>
          <span className="bg-cyan-900 px-3 py-1 rounded">LLM</span>
          <span className="bg-cyan-900 px-3 py-1 rounded">Prompt Engineering</span>
        </div>

        <a
          href="https://github.com/githika123/AI-Interview-Intelligence-System"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cyan-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400"
        >
          View Project
        </a>

      </div>

      {/* Project 2 */}
      <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

        <h3 className="text-2xl font-bold mb-4">
          AI Resume Analyzer
        </h3>

        <p className="text-gray-400 mb-4">
          NLP-powered resume analyzer that extracts skills, calculates ATS scores,
          matches job roles, identifies skill gaps, and provides resume improvement
          recommendations using Machine Learning and NLP techniques.
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          <span className="bg-cyan-900 px-3 py-1 rounded">Python</span>
          <span className="bg-cyan-900 px-3 py-1 rounded">Flask</span>
          <span className="bg-cyan-900 px-3 py-1 rounded">spaCy</span>
          <span className="bg-cyan-900 px-3 py-1 rounded">NLP</span>
        </div>

        <a
          href="https://github.com/githika123/NLP_Project---Resume_Analyzer"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cyan-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400"
        >
          View Project
        </a>

      </div>

      {/* Project 3 */}
      <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

        <h3 className="text-2xl font-bold mb-4">
          AI Career Assistant
        </h3>

        <p className="text-gray-400 mb-4">
          AI-powered career guidance assistant using LLMs and Prompt Engineering
          for interview preparation and career recommendations.
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          <span className="bg-cyan-900 px-3 py-1 rounded">Python</span>
          <span className="bg-cyan-900 px-3 py-1 rounded">LLM</span>
          <span className="bg-cyan-900 px-3 py-1 rounded">Prompt Engineering</span>
          <span className="bg-cyan-900 px-3 py-1 rounded">Generative AI</span>
        </div>

        <button className="bg-cyan-500 text-black px-4 py-2 rounded-lg font-semibold">
          View Project
        </button>

      </div>

        </div>

      </section>

      

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-cyan-400">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-gray-900 p-6 rounded-xl">
            Microsoft Azure Fundamentals (AZ-900)
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            Architecting with Google Kubernetes Engine
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            Secure & Scalable Cloud Infrastructure
          </div>

        </div>
      </section>
      {/* AI Journey */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold mb-10 text-cyan-400">
          AI Journey
        </h2>

        <div className="space-y-6">

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-cyan-400 font-bold">
              2024
            </h3>
            <p className="text-gray-300">
              Started learning Machine Learning, Python and Data Science fundamentals.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-cyan-400 font-bold">
              2025
            </h3>
            <p className="text-gray-300">
              Built AI Resume Analyzer using NLP, Flask and Machine Learning.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-cyan-400 font-bold">
              2025
            </h3>
            <p className="text-gray-300">
              Developed AI Mock Interview System with LLM-powered evaluation.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-cyan-400 font-bold">
              2026
            </h3>
            <p className="text-gray-300">
              Focused on Generative AI, Prompt Engineering, LLM Applications and AI Automation.
            </p>
          </div>

        </div>

      </section>
      {/* Contact */}

      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
          Connect With Me
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
      <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
        <h3 className="font-bold text-cyan-400 mb-2">Email</h3>
        <p className="text-gray-400 text-sm">
          githikasrinivasan63@gmail.com
        </p>
      </div>

      <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
        <h3 className="font-bold text-cyan-400 mb-2">GitHub</h3>

        <a
          href="https://github.com/githika123"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline text-sm"
        >
          View GitHub Profile
        </a>
      </div>

      <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
        <h3 className="font-bold text-cyan-400 mb-2">LinkedIn</h3>

        <a
          href="https://www.linkedin.com/in/githika-srinivasan-7479b3342/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline text-sm"
        >
          View LinkedIn Profile
        </a>
      </div>

      <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
        <h3 className="font-bold text-cyan-400 mb-2">Resume</h3>

        <a
          href="https://drive.google.com/file/d/1vPrKj32Z89yVYK2yxKMIIvMUldH6pygi/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-500 text-black px-4 py-2 rounded-lg font-semibold"
        >
          Download Resume
        </a>
      </div>

        </div>

      </section>
      <footer className="border-t border-gray-800 py-8 mt-10">
      <div className="max-w-6xl mx-auto text-center text-gray-500">
        <p>© 2026 Githika Srinivasan</p>
        <p className="mt-2">
          Built with React, Tailwind CSS & Generative AI
        </p>
      </div>
    </footer>

    </div>
  );
}

export default App;
import Section from "./Section";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full mb-32">
      <p className="text-lg px-8 sm:px-12">
        I'm currently looking for a new opportunity, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center mt-8">
        <a href="mailto:mrivera1991@gmail.com" className="text-lg font-bold bg-clip-text text-transparent text-gradient mr-4" target="_blank">
          Mrivera1991@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/mrivera1991/" className="text-lg font-bold bg-clip-text text-transparent text-gradient" target="_blank">
          LinkedIn
        </a>
      </div>
    </div>
  )
}

const ContactSection = () => {
  return (
    <Section title="Contact Me" number="04" children={<Contact />} id="contact" />
  )
}

export default ContactSection
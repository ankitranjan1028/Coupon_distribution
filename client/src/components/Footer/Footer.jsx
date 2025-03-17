import linkedinLogo from "../../assets/icons8-linkedin.svg";
import emailLogo from "../../assets/icons8-mail-50.png";

function Footer() {
  return (
    <footer className="footer bg-[#323232] text-[#D9D9D9] py-8 px-[8vw] flex flex-col items-center gap-5 sm:gap-8">
      <div className="footer-content w-full grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20">
        {/* Left Section */}
        <div className="footer-content-left flex flex-col items-start gap-4">
          <h2 className="text-white text-lg font-semibold">About Me</h2>
          <p className="text-sm opacity-80">
            Passionate Software Developer skilled in MERN stack with a strong foundation in algorithms & problem-solving.
          </p>
          <div className="footer-social-icons flex gap-4">
            <a href="https://www.linkedin.com/in/ankit-ranjan-a73b9a228/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" className="w-10 hover:opacity-80 transition-all" />
            </a>
            <a href="mailto:aankitrn17@gmail.com">
              <img src={emailLogo} alt="Email" className="w-10 hover:opacity-80 transition-all" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-content-right flex flex-col items-start gap-4">
          <h2 className="text-white text-lg font-semibold">GET IN TOUCH</h2>
          <ul className="space-y-2">
            <li>Mobile: <a href="mailto:aankitrn17@gmail.com" className="hover:text-white transition-all">+917568047623</a></li>
            <li>Location: Ranchi</li>
          </ul>
        </div>
      </div>

      <hr className="w-full border-gray-500" />

      {/* Copyright Section */}
      <div className="footer-copyright text-sm opacity-80 text-center">
        &copy; {new Date().getFullYear()} Made with ❤️ by Ankit Ranjan
      </div>
    </footer>
  );
}

export default Footer;

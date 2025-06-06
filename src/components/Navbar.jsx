import React from "react";
import { Link } from "react-router-dom";
import { Code, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-100 backdrop-blur-lg text-black px-2 py-2 rounded-full shadow-2xl flex gap-2 items-center w-max animate-float transition-all duration-500 hover:scale-x-110">
      {/* Home Link */}
      <NavItem icon={<HomeIcon />} tooltip="Home" link="/" />

      {/* Projects Link */}
      <NavItem icon={<Code size={15} />} tooltip="Projects" link="/projects" />

      {/* Music Link */}
      <NavItem icon={<MusicIcon />} tooltip="Music" link="/music" />

      {/* Blog Link */}
      <NavItem icon={<DocsIcon />} tooltip="Blog" link="/blog" />

      {/* Vertical Line */}
      <div className="shrink-0 bg-gray-400 w-[1px] h-6 mx-2"></div>

      {/* GitHub Link */}
      <NavItem 
        icon={<img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/github.png" alt="GitHub" />} 
        tooltip="GitHub" 
        externalLink="https://github.com/subhashish2803" 
      />

      {/* Mail Link → opens ContactMe route */}
<NavItem icon={<Mail size={18} />} tooltip="ContactMe" link="/contactme" />


      {/* Instagram Link */}
      <NavItem 
        icon={<img width="20" height="20" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="Instagram" />} 
        tooltip="Instagram" 
        externalLink="https://www.instagram.com/_.a.s.h.u.0.3._" 
      />

      {/* Download Resume Link */}
      <NavItem icon={<DownloadIcon />} tooltip="Resume" externalLink="/companylogo/Resume-Ashu.pdf" download="Resume-Dubai.pdf" />
    </nav>
  );
};

const NavItem = ({ icon, tooltip, link, externalLink, download }) => {
  return externalLink ? (
    <a 
      href={externalLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      download={download} 
      className="relative flex flex-col items-center group"
    >
      <IconWrapper>{icon}</IconWrapper>
      <Tooltip text={tooltip} />
    </a>
  ) : (
    <Link to={link || "#"} className="relative flex flex-col items-center group">
      <IconWrapper>{icon}</IconWrapper>
      <Tooltip text={tooltip} />
    </Link>
  );
};

const IconWrapper = ({ children }) => (
  <div className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F4F5F8] hover:text-accent-foreground rounded-full size-9 hover:scale-110">
    {children}
  </div>
);

const Tooltip = ({ text }) => (
  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black font-sans text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    {text}
  </span>
);

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home size-4">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const MusicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music size-4">
    <path d="M9 18V5l12-2v13"></path>
    <circle cx="6" cy="18" r="3"></circle>
    <circle cx="18" cy="16" r="3"></circle>
  </svg>
);

const DocsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notebook size-4">
    <path d="M2 6h4"></path>
    <path d="M2 10h4"></path>
    <path d="M2 14h4"></path>
    <path d="M2 18h4"></path>
    <rect width="16" height="20" x="4" y="2" rx="2"></rect>
    <path d="M16 2v20"></path>
  </svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-down size-4"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg>
);

export default Navbar;

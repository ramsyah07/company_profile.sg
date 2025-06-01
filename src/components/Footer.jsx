import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";

import LogoSG from "@/assets/Logo.svg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gray-900 py-12 text-gray-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        
        {/* Logo & Tagline */}
        <motion.div custom={0.1} variants={fadeInUp}>
          <img src={LogoSG} alt="SG Group Logo" className="h-12 mb-4 filter brightness-125" />
          <p className="text-gray-400">Creating Excellence, Every Step</p>
        </motion.div>

        {/* Quick Links - SINGLE POWERFUL MOTION */}
<motion.div custom={0.2} variants={fadeInUp}>
  <h4 className="font-semibold text-white mb-4">Quick Links</h4>
  <ul className="space-y-2">
    {[
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Products", href: "/products" },
      { label: "Partnerships", href: "/partnerships" },
      { label: "Activities", href: "/activities" },
      { label: "Support", href: "/support" },
    ].map(({ label, href }, index) => (
      <motion.li
        key={href}
        initial={{ opacity: 0, x: -50, rotateY: -20 }}
        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
        transition={{ 
          delay: index * 0.1, 
          duration: 0.8, 
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{
          x: 12,
          scale: 1.05,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        className="group w-fit"
      >
        <a
          href={href}
          className="relative text-gray-300 group-hover:text-white transition-colors duration-300"
        >
          {label}
          <motion.span
            className="pointer-events-none absolute left-0 -bottom-0.5 h-[2px] bg-white origin-left"
            initial={{ width: 0 }}
            whileHover={{ 
              width: "100%",
              transition: { duration: 0.4, ease: "easeOut" }
            }}
          />
        </a>
      </motion.li>
    ))}
  </ul>
</motion.div>


        {/* Contact & Social Media - UPGRADED MOTION */}
<motion.div custom={0.3} variants={fadeInUp}>
  <motion.h4 
    className="font-semibold text-white mb-4"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    Information
  </motion.h4>
  
  {/* Email with Enhanced Motion */}
  <motion.p 
    className="mb-2 flex items-center gap-2 text-gray-400 cursor-pointer"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
    whileHover={{
      x: 8,
      scale: 1.02,
      color: "#ffffff",
      transition: { duration: 0.3 }
    }}
    onClick={() => window.open('mailto:sggroup.hc@gmail.com')}
  >
    <motion.span
      animate={{ 
        rotate: [0, 10, -10, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      📧
    </motion.span> 
    sggroup.hc@gmail.com
  </motion.p>
  
  {/* Address with Maps Integration */}
  <motion.p 
    className="mb-6 flex items-center gap-2 text-gray-400 cursor-pointer group"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
    whileHover={{
      x: 8,
      scale: 1.02,
      color: "#ffffff",
      transition: { duration: 0.3 }
    }}
    onClick={() => window.open('https://www.google.com/maps/search/Bogor,+Indonesia', '_blank')}
  >
    <motion.span
      animate={{ 
        y: [0, -3, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{ 
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      📍
    </motion.span> 
    Bogor, Indonesia
    
    {/* Maps Icon Indicator */}
    <motion.span
      className="text-xs opacity-0 group-hover:opacity-100 ml-2"
      initial={{ opacity: 0, scale: 0 }}
      whileHover={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      🗺️
    </motion.span>
  </motion.p>

  <motion.h4 
    className="font-semibold text-white mb-3"
    initial={{ opacity: 0, y: -15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
  >
    Social Media
  </motion.h4>
  
  {/* Enhanced Social Media Icons */}
  <motion.div 
    className="flex gap-4 text-2xl"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
  >
    {[
      { icon: faInstagram, color: "#e1306c", href: "https://instagram.com" },
      { icon: faYoutube, color: "#ff0000", href: "https://youtube.com" },
      { icon: faLinkedin, color: "#0e76a8", href: "https://linkedin.com" },
    ].map(({ icon, color, href }, i) => (
      <motion.a
        key={i}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
        whileInView={{ 
          opacity: 1, 
          scale: 1, 
          rotate: 0,
          transition: { 
            delay: i * 0.1 + 0.6,
            duration: 0.6,
            ease: "easeOut",
            type: "spring",
            stiffness: 200,
          }
        }}
        whileHover={{ 
          scale: 1.4,
          rotate: [0, -15, 15, 0],
          y: -8,
          color: color,
          transition: { 
            duration: 0.5,
            ease: "easeOut",
          }
        }}
        whileTap={{ 
          scale: 1.2,
          transition: { duration: 0.1 }
        }}
        className="transition-colors duration-300"
      >
        <FontAwesomeIcon icon={icon} />
      </motion.a>
    ))}
  </motion.div>
</motion.div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        className="text-center text-xs text-gray-500 mt-12 border-t border-gray-700 pt-4"
        custom={0.4}
        variants={fadeInUp}
      >
        <p>
          © {new Date().getFullYear()} PT Salam Generasi Group. All rights reserved.
          <br />
          <a href="#" className="hover:text-white underline underline-offset-2 mx-1">Privacy Policy</a> ·
          <a href="#" className="hover:text-white underline underline-offset-2 mx-1">Terms & Conditions</a>
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;

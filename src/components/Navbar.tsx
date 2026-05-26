import { type MouseEvent as ReactMouseEvent, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiMenu } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const dropdownVisible = menuOpen || isHovering;

  const scrollToTop = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setMenuOpen(false);
    setIsHovering(false);

    if (smoother) {
      smoother.scrollTo(0, true);
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const links = document.querySelectorAll("[data-href]");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const target = e.currentTarget as HTMLAnchorElement;
          const section = target.getAttribute("data-href");
          if (section) {
            smoother.scrollTo(section, true, "top top");
            setMenuOpen(false);
            setIsHovering(false);
          }
        }
      });
    });

    const handleResize = () => {
      ScrollSmoother.refresh(true);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
        setIsHovering(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="header">
        <a
          href="/#"
          className="navbar-title"
          data-cursor="disable"
          onClick={scrollToTop}
        >
          editwithrizz.com
        </a>

        <div className="nav-actions" ref={menuRef}>
          <div
            className="nav-menu"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <button
              type="button"
              className={`nav-menu-toggle ${dropdownVisible ? "open" : ""}`}
              onClick={() => setMenuOpen((prev) => !prev)}
              data-cursor="disable"
              aria-label="Toggle navigation menu"
            >
              <FiMenu size={18} />
            </button>
            <div className={`nav-dropdown ${dropdownVisible ? "open" : ""}`}>
              <ul>
                <li>
                  <a data-href="#about" href="#about">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a data-href="#work" href="#work">
                    WORK
                  </a>
                </li>
                <li>
                  <a data-href="#contact" href="#contact">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <a href="/" className="navbar-connect" data-cursor="disable">
            Portfolio
          </a> */}
        </div>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;

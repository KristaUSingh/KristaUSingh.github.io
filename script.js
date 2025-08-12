/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */

window.addEventListener('load', () => {
    const avatar = document.querySelector('.content .avatar');
    if (avatar) avatar.classList.add('is-visible');
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }

  document.addEventListener("DOMContentLoaded", () => {
    // Fade-in effect when scrolling
    const sections = document.querySelectorAll("section");

    const revealSection = () => {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealSection);
    revealSection(); // Run on load in case some sections are already visible

    // Button hover animation
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
            button.style.transition = "transform 0.3s ease-in-out";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });

    // Typing effect for intro text
    const introText = document.querySelector(".content h1");
    if (introText) {
        const text = introText.innerText;
        introText.innerText = ""; // Clear text initially
        let i = 0;

        function typeEffect() {
          if (i < text.length) {
            if (text[i] === " ") {
                introText.innerHTML += "&nbsp;"; // Add extra spacing for words
            } else {
                introText.innerHTML += text[i]; // Add letter normally
            }
            i++;
            setTimeout(typeEffect, 100); // Adjust speed if needed
          }
        }
        typeEffect();
    }

    let button = document.getElementById("discoverButton");

    // Add a click event listener
    button.addEventListener("click", function () {
      // Select the target section
      let targetSection = document.querySelector(".DiscoverMore");

      // Scroll smoothly to the section
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });


    const subText = document.querySelector(".content h2");
    if (subText) {
        subText.style.opacity = "0";
        subText.style.transform = "translateY(-20px)"; // Start slightly above

        setTimeout(() => {
            subText.style.transition = "opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)";
            subText.style.opacity = "1";
            subText.style.transform = "translateY(0)";
        }, 900);
    }

    const discoverBtn = document.querySelector(".content button");
    if (discoverBtn) {
        discoverBtn.style.opacity = "0"; // Start hidden
        discoverBtn.style.transform = "translateY(20px)"; // Start slightly below

        setTimeout(() => {
            discoverBtn.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
            discoverBtn.style.opacity = "1";
            discoverBtn.style.transform = "translateY(0)";
        }, 1800); // Delay so it appears after the bounce-in text
    }

    
    const discoverSection = document.querySelector(".DiscoverMore");
    const discoverTextBlocks = discoverSection.querySelectorAll(".Info, .About_Me p"); // Select text elements

    if (discoverSection) {
        discoverSection.style.opacity = "0";
        discoverSection.style.transform = "translateY(50px)"; // Start lower

        const discoverObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        discoverSection.style.opacity = "1";
                        discoverSection.style.transform = "translateY(0)";
                        discoverSection.style.transition = "opacity 1s ease-out, transform 1s ease-out";

                        // Staggered fade-in for text elements
                        discoverTextBlocks.forEach((block, index) => {
                            setTimeout(() => {
                                block.style.opacity = "1";
                                block.style.transform = "translateY(0)";
                                block.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
                            }, index * 200); // Delays each text element slightly
                        });

                        observer.unobserve(discoverSection); // Stop observing after animation
                    }
                });
            },
            { threshold: 0.3 } // Trigger when 30% of the section is visible
        );

        discoverObserver.observe(discoverSection);

        // Ensure text blocks start hidden
        discoverTextBlocks.forEach((block) => {
            block.style.opacity = "0";
            block.style.transform = "translateY(20px)"; // Slight downward start
        });
    }


    const experienceItems = document.querySelectorAll(".MyExperience > ul > div"); // Select all experience sections
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    entry.target.style.transition = "opacity 1s ease-out, transform 1s ease-out";
                    observer.unobserve(entry.target); // Stop observing once it's visible
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the element is in view
    );

    experienceItems.forEach((item) => {
        item.style.opacity = "0"; // Start hidden
        item.style.transform = "translateY(30px)"; // Start slightly lower
        observer.observe(item);
    });


    const projects = document.querySelectorAll(".MyProjects > div"); // Select each project card
    const projectObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in"); // Apply fade-in effect
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        },
        { threshold: 0.3 } // Trigger when 30% of the project is visible
    );

    projects.forEach((project) => {
        project.classList.add("fade-out"); // Start with hidden effect
        projectObserver.observe(project);
    });

    
    const skillCategories = document.querySelectorAll(".MySkills > div"); // Select skill categories

    // Observer for skill bars (fills progress bars when scrolled into view

    const skillBars = document.querySelectorAll(".skillbar span, .keyBar span"); // Select all skill bars including key

    const skillBarObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const skillBar = entry.target;
                    const width = skillBar.getAttribute("data-width"); // Get percentage from data-width

                    skillBar.style.width = width + "%"; // Fill bar smoothly
                    skillBar.style.transition = "width 1.5s ease-in-out";

                    observer.unobserve(skillBar); // Stop observing after animation
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the skill is visible
    );

    skillBars.forEach((bar) => {
        bar.style.width = "0%"; // Start empty
        skillBarObserver.observe(bar);
    });

    // Observer for skill categories (Fade-in upward effect)
    const categoryObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    entry.target.style.transition = "opacity 1s ease-out, transform 1s ease-out";

                    observer.unobserve(entry.target); // Stop observing after animation
                }
            });
        },
        { threshold: 0.3 } // Trigger when 30% is visible
    );

    skillCategories.forEach((category) => {
        category.style.opacity = "0";
        category.style.transform = "translateY(30px)";
        categoryObserver.observe(category);
    });


    const footer = document.querySelector(".Footer");
    if (footer) {
        footer.style.opacity = "0"; // Ensure it starts hidden
        footer.style.transform = "translateY(50px)"; // Start slightly below

        const footerObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        footer.style.opacity = "1";
                        footer.style.transform = "translateY(0)";
                        footer.style.transition = "opacity 1.5s ease-out, transform 1.5s ease-out, box-shadow 0.5s ease-in-out";
                        footer.style.boxShadow = "0px -5px 20px rgba(0, 255, 255, 0.6)"; // Add glow effect
                        observer.unobserve(footer); // Stop observing once animated
                    }
                });
            },
            { threshold: 0.3 } // Trigger when 30% of the footer is visible
        );

        footerObserver.observe(footer);
    }

    const sectionHeaders = document.querySelectorAll("section h3"); // Select all headers in sections

    const headerObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    entry.target.style.transition = "opacity 1s ease-out, transform 1s ease-out";
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        },
        { threshold: 0.3 } // Trigger when 30% of the header is visible
    );

    sectionHeaders.forEach((header) => {
        header.style.opacity = "0"; // Start invisible
        header.style.transform = "translateY(20px)"; // Start slightly lower
        headerObserver.observe(header);
    });
});


  

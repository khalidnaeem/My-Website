// Technical Writing Website JavaScript

// Portfolio and Blog Data
const portfolioData = {
  "api-docs-console": {
    title: "API Documentation Console",
    category: "API Documentation",
    role: "Lead Technical Writer",
    technologies: ["OpenAPI", "Swagger UI", "Markdown", "JavaScript", "REST API"],
    image: "https://pplx-res.cloudinary.com/image/upload/v1754837475/pplx_project_search_images/e9e410a18de2d30dc7d71423f9939a1672f50a11.png",
    description: "This comprehensive project involved creating an interactive API documentation console for the Google Drive API. The objective was to make the documentation not only informative but also hands-on, allowing developers to test endpoints directly within the docs. I wrote detailed endpoint references, authentication guides, usage examples, and troubleshooting sections. The project required close collaboration with the development team to ensure accuracy and real-time testing capabilities.",
    challenges: ["Making complex auth flows easy to follow", "Keeping examples in sync with API revisions", "Balancing comprehensive coverage with usability"],
    solutions: ["Added visual step-by-step auth diagrams", "Implemented automated testing for code samples", "Created progressive disclosure for advanced features"],
    results: ["Reduced support tickets by 35%", "Increased docs engagement by 50%", "Developer onboarding time reduced by 40%"]
  },
  "forklift-manual": {
    title: "ForkLift 3 User Manual",
    category: "User Guides",
    role: "Senior Technical Writer",
    technologies: ["Markdown", "ScreenFlow", "Snagit", "Adobe Acrobat"],
    image: "https://pplx-res.cloudinary.com/image/upload/v1754731339/pplx_project_search_images/b512b78b8d495aab89f3d6fdb23a62ad937ba776.png",
    description: "I authored the complete user manual for ForkLift 3, a dual-pane file manager for macOS. The manual covers everything from basic installation to advanced file transfer workflows and troubleshooting. My approach focused on task-based organization, allowing users to quickly find solutions to their specific needs. The documentation includes over 120 screenshots, animated GIFs for complex procedures, and a comprehensive troubleshooting section.",
    challenges: ["Explaining advanced sync features clearly", "Maintaining visual consistency across 120+ screenshots", "Organizing complex workflows logically"],
    solutions: ["Created animated GIFs for multi-step processes", "Established comprehensive screenshot style guide", "Implemented user-centered information architecture"],
    results: ["Help center satisfaction score: 4.8/5", "Average session time increased by 42%", "User completion rate improved by 28%"]
  },
  "blog-content-strategy": {
    title: "Technical Blog Content Strategy",
    category: "Content Strategy",
    role: "Content Strategist & Writer",
    technologies: ["Content Strategy", "SEO", "WordPress", "Google Analytics", "Ahrefs"],
    image: "https://pplx-res.cloudinary.com/image/upload/v1754684135/pplx_project_search_images/88bfffdc1955f66dd2a38b6cf1260d620bb421bb.png",
    description: "Developed and executed a comprehensive content strategy for a technical blog focused on software development best practices. This involved researching trending topics, creating editorial calendars, writing in-depth technical tutorials, and optimizing content for search engines. The blog covered topics ranging from API design principles to developer workflow optimization, targeting both junior and senior developers.",
    challenges: ["Balancing technical depth with accessibility", "Maintaining consistent publishing schedule", "Growing organic search traffic"],
    solutions: ["Developed content templates for different article types", "Created batch writing and editing workflows", "Implemented comprehensive keyword research process"],
    results: ["Grew monthly readership from 5k to 50k+", "Achieved 75% organic traffic growth", "Published 200+ technical articles with 4.2 average rating"]
  }
};

const blogData = {
  "api-docs-best-practices": {
    title: "5 Essential Tips for Writing Clear API Documentation",
    category: "Technical Writing Tips",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed71",
    content: "<h2>1. Lead with Quickstart Examples</h2><p>Developers want to see a working call first, then understand the details. Start your documentation with a simple, complete example that works out of the box. Include authentication, a basic request, and the expected response.</p><h2>2. Keep Authentication Simple</h2><p>Provide copy-paste tokens in a sandbox environment. Show exactly where to get API keys and how to include them in requests. Use real examples, not placeholder text.</p><h2>3. Document Error Messages Thoroughly</h2><p>Explain not just the error code but why it happens and how to fix it. Include common scenarios that trigger each error and provide clear resolution steps.</p><h2>4. Use Interactive Examples</h2><p>Tools like Swagger UI or Postman collections allow developers to test your API directly from the documentation. This reduces friction and builds confidence.</p><h2>5. Keep It Updated</h2><p>Outdated documentation is worse than no documentation. Establish a process to update docs automatically when your API changes, and test examples regularly.</p>"
  },
  "ux-content-structure": {
    title: "How to Structure Technical Content for Better UX",
    category: "Documentation Best Practices",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    content: "<h2>Start with User Goals, Not System Features</h2><p>Users come to your documentation with specific tasks in mind. Organize your content around what users want to accomplish, not how your system is architected.</p><h2>Use Progressive Disclosure</h2><p>Don't overwhelm users with every detail upfront. Start with the most common use cases and provide paths to more advanced information when needed.</p><h2>Create Clear Information Hierarchy</h2><p>Use headings, subheadings, and visual cues to help users scan and find relevant information quickly. A good table of contents can make or break the user experience.</p><h2>Include Visual Aids Strategically</h2><p>Screenshots, diagrams, and flowcharts can clarify complex concepts, but use them purposefully. Every image should add value and be kept up to date.</p>"
  },
  "simplifying-technical-concepts": {
    title: "The Art of Simplifying Complex Technical Concepts",
    category: "Content Strategy",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    content: "<h2>Know Your Audience Deeply</h2><p>Understanding your readers' technical background, goals, and constraints is crucial for effective simplification. Create detailed user personas and validate them with real user research.</p><h2>Use Analogies and Metaphors</h2><p>Relate complex technical concepts to familiar experiences. A database table is like a spreadsheet, APIs are like restaurant menus, and authentication is like showing ID at a club.</p><h2>Break Down Complex Processes</h2><p>Divide complicated workflows into smaller, manageable steps. Each step should build on the previous one and move the user closer to their goal.</p><h2>Define Technical Terms Clearly</h2><p>When you must use jargon, define it immediately. Consider maintaining a glossary for frequently used terms.</p>"
  }
};

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Smooth scrolling function
    function smoothScrollTo(targetId) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const offsetTop = targetSection.offsetTop - navbarHeight - 10;
            
            window.scrollTo({
                top: Math.max(0, offsetTop),
                behavior: 'smooth'
            });
        }
    }

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId && targetId.startsWith('#')) {
                smoothScrollTo(targetId);
            }
        });
    });

    // Hero button click handlers
    const heroButtons = document.querySelectorAll('.hero-buttons a');
    heroButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                smoothScrollTo(targetId);
            }
        });
    });

    // Active navigation highlighting on scroll
    function updateActiveNav() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 150; // Offset for header

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingNavLink = document.querySelector(`a[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                // Remove active class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));
                // Add active class to current section's nav link
                if (correspondingNavLink) {
                    correspondingNavLink.classList.add('active');
                }
            }
        });
    }

    // Update active nav on scroll with throttling
    let ticking = false;
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateActiveNav();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', onScroll);

    // Project Modal Functionality
    const projectModal = document.getElementById('projectModal');
    const projectCards = document.querySelectorAll('.work-card');
    const closeModal = document.getElementById('closeModal');

    function openProjectModal(projectId) {
        const project = portfolioData[projectId];
        if (!project) {
            console.error('Project not found:', projectId);
            return;
        }

        document.getElementById('modalTitle').textContent = project.title;
        
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <div class="project-details">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-meta">
                    <div class="meta-item">
                        <h4>Category</h4>
                        <p>${project.category}</p>
                    </div>
                    <div class="meta-item">
                        <h4>Role</h4>
                        <p>${project.role}</p>
                    </div>
                    <div class="meta-item">
                        <h4>Technologies</h4>
                        <ul>
                            ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="meta-item">
                        <h4>Key Results</h4>
                        <ul>
                            ${project.results.map(result => `<li>${result}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="project-description">
                    <h3>Project Overview</h3>
                    <p>${project.description}</p>
                    
                    <h3>Challenges</h3>
                    <ul>
                        ${project.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
                    </ul>
                    
                    <h3>Solutions</h3>
                    <ul>
                        ${project.solutions.map(solution => `<li>${solution}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;

        projectModal.classList.remove('hidden');
        setTimeout(() => {
            projectModal.classList.add('show');
        }, 10);
        document.body.style.overflow = 'hidden';
    }

    function closeProjectModal() {
        projectModal.classList.remove('show');
        setTimeout(() => {
            projectModal.classList.add('hidden');
        }, 300);
        document.body.style.overflow = '';
    }

    // Add event listeners to project cards
    projectCards.forEach(card => {
        const button = card.querySelector('button');
        const projectId = card.dataset.project;
        
        // Click handler for entire card
        card.addEventListener('click', function(e) {
            // Prevent triggering when button is clicked
            if (e.target.tagName === 'BUTTON') return;
            if (projectId) {
                openProjectModal(projectId);
            }
        });
        
        // Click handler for button
        if (button) {
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                if (projectId) {
                    openProjectModal(projectId);
                }
            });
        }
    });

    if (closeModal) {
        closeModal.addEventListener('click', closeProjectModal);
    }

    if (projectModal) {
        projectModal.addEventListener('click', function(e) {
            if (e.target === projectModal) {
                closeProjectModal();
            }
        });
    }

    // Blog Modal Functionality
    const blogModal = document.getElementById('blogModal');
    const blogCards = document.querySelectorAll('.blog-card');
    const closeBlogModal = document.getElementById('closeBlogModal');

    function openBlogModal(blogId) {
        const blog = blogData[blogId];
        if (!blog) {
            console.error('Blog not found:', blogId);
            return;
        }

        document.getElementById('blogModalTitle').textContent = blog.title;
        
        const blogModalBody = document.getElementById('blogModalBody');
        blogModalBody.innerHTML = `
            <div class="blog-post-content">
                ${blog.content}
            </div>
        `;

        blogModal.classList.remove('hidden');
        setTimeout(() => {
            blogModal.classList.add('show');
        }, 10);
        document.body.style.overflow = 'hidden';
    }

    function closeBlogModalFunc() {
        blogModal.classList.remove('show');
        setTimeout(() => {
            blogModal.classList.add('hidden');
        }, 300);
        document.body.style.overflow = '';
    }

    // Add event listeners to blog cards
    blogCards.forEach(card => {
        const button = card.querySelector('button');
        const blogId = card.dataset.blog;
        
        // Click handler for entire card
        card.addEventListener('click', function(e) {
            // Prevent triggering when button is clicked
            if (e.target.tagName === 'BUTTON') return;
            if (blogId) {
                openBlogModal(blogId);
            }
        });
        
        // Click handler for button
        if (button) {
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                if (blogId) {
                    openBlogModal(blogId);
                }
            });
        }
    });

    if (closeBlogModal) {
        closeBlogModal.addEventListener('click', closeBlogModalFunc);
    }

    if (blogModal) {
        blogModal.addEventListener('click', function(e) {
            if (e.target === blogModal) {
                closeBlogModalFunc();
            }
        });
    }

    // Close modals with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProjectModal();
            closeBlogModalFunc();
        }
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    // Form validation functions
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showError(fieldId, message) {
        const errorElement = document.getElementById(fieldId + 'Error');
        const inputElement = document.getElementById(fieldId);
        
        if (errorElement && inputElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
            inputElement.style.borderColor = '#f87171';
        }
    }

    function clearError(fieldId) {
        const errorElement = document.getElementById(fieldId + 'Error');
        const inputElement = document.getElementById(fieldId);
        
        if (errorElement && inputElement) {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
            inputElement.style.borderColor = '';
        }
    }

    function clearAllErrors() {
        const fields = ['name', 'email', 'subject', 'message'];
        fields.forEach(field => clearError(field));
    }

    function validateForm() {
        clearAllErrors();
        let isValid = true;

        // Get form values
        const nameField = document.getElementById('name');
        const emailField = document.getElementById('email');
        const subjectField = document.getElementById('subject');
        const messageField = document.getElementById('message');

        if (!nameField || !emailField || !subjectField || !messageField) {
            return false;
        }

        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const subject = subjectField.value.trim();
        const message = messageField.value.trim();

        // Validate name
        if (!name) {
            showError('name', 'Name is required');
            isValid = false;
        } else if (name.length < 2) {
            showError('name', 'Name must be at least 2 characters long');
            isValid = false;
        }

        // Validate email
        if (!email) {
            showError('email', 'Email is required');
            isValid = false;
        } else if (!validateEmail(email)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }

        // Validate subject
        if (!subject) {
            showError('subject', 'Subject is required');
            isValid = false;
        } else if (subject.length < 3) {
            showError('subject', 'Subject must be at least 3 characters long');
            isValid = false;
        }

        // Validate message
        if (!message) {
            showError('message', 'Message is required');
            isValid = false;
        } else if (message.length < 10) {
            showError('message', 'Message must be at least 10 characters long');
            isValid = false;
        }

        return isValid;
    }

    // Form submission handler
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted');
            
            if (validateForm()) {
                // Simulate form submission
                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalButtonText = submitButton.textContent;
                
                // Show loading state
                submitButton.textContent = 'Sending to hello@techwriter.com...';
                submitButton.disabled = true;
                
                // Simulate API call delay
                setTimeout(() => {
                    // Hide form and show success message
                    contactForm.style.display = 'none';
                    if (successMessage) {
                        successMessage.classList.remove('hidden');
                        
                        // Scroll to success message
                        successMessage.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'center' 
                        });
                    }
                    
                    // Reset form
                    contactForm.reset();
                    clearAllErrors();
                    
                    // Reset button
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                    
                    // Auto-hide success message and show form again after 8 seconds
                    setTimeout(() => {
                        if (successMessage) {
                            successMessage.classList.add('hidden');
                        }
                        contactForm.style.display = 'block';
                    }, 8000);
                    
                }, 1500);
            } else {
                console.log('Form validation failed');
            }
        });
    }

    // Real-time validation on input focus
    const formFields = ['name', 'email', 'subject', 'message'];
    formFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            // Clear error on focus
            field.addEventListener('focus', function() {
                clearError(fieldId);
            });
        }
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add shadow when scrolled
            if (scrollTop > 50) {
                navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            } else {
                navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)';
            }
        });
    }

    // Initialize active nav on page load
    updateActiveNav();

    // Add click-to-dismiss functionality for success message
    if (successMessage) {
        successMessage.addEventListener('click', function() {
            successMessage.classList.add('hidden');
            contactForm.style.display = 'block';
        });
    }

    console.log('Website initialized successfully');
});
// components/ContactSection.jsx
import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-12 px-4 md:px-6 text-center">
      <div className="grid items-center justify-center gap-4">
        <div
          className="space-y-3"
          style={{
            opacity: 1,
            filter: "blur(0px)",
            transform: "translateY(-6px)",
          }}
        >
          <div className="inline-block bg-black text-white rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            Contact
          </div>
          <h2 className="text-3xl font-medium tracking-tighter sm:text-5xl">
            Get in Touch
          </h2>
        </div>

        <div
          className="grid w-full auto-rows-[22rem] grid-cols-3 gap-4 lg:grid-rows-2 mt-4"
          style={{
            opacity: 1,
            filter: "blur(0px)",
            transform: "translateY(-6px)",
          }}
        >
          

          {/* LinkedIn Card */}
          <div className="group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 bg-white">
            <div className="absolute -right-20 -top-20 opacity-60" />
            <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 origin-center transform-gpu text-neutral-900 dark:text-neutral-100 transition-all duration-300 ease-in-out group-hover:scale-75" viewBox="0 0 48 48">
                <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z" />
                <path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z" />
              </svg>
              <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">LinkedIn</h3>
              <p className="max-w-lg text-neutral-400">Expand your network and find opportunities.</p>
            </div>
            <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <a
                href="https://www.linkedin.com/in/subhashish-nayak-422775310"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs pointer-events-auto"
              >
                Connect Now
                <svg className="ms-2 h-4 w-4 rtl:rotate-180" viewBox="0 0 15 15" fill="none">
                  <path d="M8.146 3.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8H2.5a.5.5 0 0 1 0-1h8.793L8.146 3.854a.5.5 0 0 1 0-.708z" fill="currentColor" />
                </svg>
              </a>
            </div>
            <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
          </div>

          {/* Mail Card */}
          <div className="sm:mb-12 bg-white group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] lg:col-start-2 lg:col-end-2 lg:row-start-2 lg:row-end-3">
            <div className="absolute -right-20 -top-20 opacity-60" />
            <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 origin-center transform-gpu text-neutral-900 dark:text-neutral-100 transition-all duration-300 ease-in-out group-hover:scale-75" viewBox="0 0 48 48">
                <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z" />
                <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z" />
                <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17" />
                <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z" />
                <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0C43.076,8,45,9.924,45,12.298z" />
              </svg>
              <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">Mail</h3>
              <p className="max-w-lg text-neutral-400">Let's chat! Drop me a message.</p>
            </div>
            <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nayaksubhashish456@gmail.com&su=Let's Connect!&body=Hello Subhashish,%0A%0AI just went through your portfolio, and I have to say—it’s really impressive! I’d love to chat about your work, experiences, and the cool things you’ve built.%0A%0ALet’s connect and have a conversation!%0A%0ABest regards,%0A[Your Name]"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs pointer-events-auto"
              >
                Send Email
                <svg className="ms-2 h-4 w-4 rtl:rotate-180" viewBox="0 0 15 15" fill="none">
                  <path d="M8.146 3.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8H2.5a.5.5 0 0 1 0-1h8.793L8.146 3.854a.5.5 0 0 1 0-.708z" fill="currentColor" />
                </svg>
              </a>
            </div>
            <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

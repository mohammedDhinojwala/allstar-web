import React from 'react'
import { useState , useRef, useEffect } from 'react'
import { motion, AnimatePresence} from 'framer-motion';
import SplitType from "split-type";
import Footer from "../Footer"
import heroImg from '../../assets/images/hero-page-photo.jpg'; // Make sure this path is correct
import discoveryImg from '../../assets/images/discovery.jpg'; // Make sure this path is correct
import designNDevImg from '../../assets/images/disign-&-developmeny.jpg'; // Make sure this path is correct
import fullCycleTestingImg from '../../assets/images/full-cycle-testing.jpg'; // Make sure this path is correct 
import implementationImg from '../../assets/images/Future Workshop.jpeg'; // Make sure this path is correct 
import maintainaceImg from '../../assets/images/maintainance.jpg'; // Make sure this path is correct  
import ideaToLaunchImg from '../../assets/images/idea-to-launch.png'; // Make sure this path is correct 
import accountsImg from '../../assets/images/account-managemnet.png'; // Make sure this path is correct 
import monitoringImg from '../../assets/images/24-hours.png'; // Make sure this path is correct 
import globalDeliveryImg from '../../assets/images/global-delivery.png'; // Make sure this path is correct 
import timeToMarketImg from '../../assets/images/time-to-market.png'; // Make sure this path is correct  
import fullStackImg from '../../assets/images/proven-fullstack.png'; // Make sure this path is correct  
import whiteLabelImg from '../../assets/images/white-lable.png'; // Make sure this path is correct  
import qualityAssuranceImg from '../../assets/images/quality-assurrance.png'; // Make sure this path is correct  
import competativePricingImg from '../../assets/images/hero-page-photo.jpg'; // Make sure this path is correct
import requirenment1Img from '../../assets/images/share-reqirnment.jpeg'; // Make sure this path is correct  
import requirenment2Img from '../../assets/images/share-requirenment-1.jpeg'; // Make sure this path is correct  
import requirenment3Img from '../../assets/images/share-requirenment-2.jpeg'; // Make sure this path is correct  




import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



 function TempaFlorida() {

  // this is a why choose us animation for the text its going to be word by word animation

  const heading = "why choose us?";
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consectetur atque ea doloremque molestiae, ut praesentium exercitationem nisi.";

  useEffect(() => {
    // Animate heading words
    gsap.from(".whoChooseUs-subHeading span", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.1, // each word comes after the previous
      scrollTrigger: {
        trigger: ".whoChooseUs-heading-wrapper",
        start: "top 80%",
      },
    });

    // Animate description words
    gsap.from(".whoChooseUs-description span", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".whoChooseUs-heading-wrapper",
        start: "top 80%",
      },
    });
  }, []);


// our process page animation photo animation 

  useEffect(() => {
    gsap.to(".ourProcessImgAnimation", {
      x: "100%", // move green div to right
      ease: "power3.in", // ease power.in
      duration: 1.5,
      stagger: 0.3, // each slide animates slightly after the other
      scrollTrigger: {
        trigger: ".ourProcess-heading",
        start: "top 80%", // adjust where animation triggers
      },
    });
  }, []);

  // this is the servicepage headers code for the animation from the bottom
  
   const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    // Save original text so we can restore on unmount
    const originalText = el.textContent || "";

    // Split into words and rebuild DOM using inline-block spans + normal spaces
    const words = originalText.trim().split(/\s+/);
    el.textContent = ""; // clear
    words.forEach((w, i) => {
      const span = document.createElement("span");
      span.textContent = w;
      // inline-block so transforms don't break layout/wrapping
      span.style.display = "inline-block";
      el.appendChild(span);
      if (i < words.length - 1) {
        el.appendChild(document.createTextNode(" ")); // normal space -> preserves wrap
      }
    });

    const wordEls = el.querySelectorAll("span");

    // Page-load animation (runs once)
    const tl = gsap.timeline();
    tl.from(wordEls, {
      opacity: 0,
      y: 50,              // starts lower (from bottom)
      duration: 0.7,
      ease: "power3.out", // smooth (fast middle, slow end)
      stagger: 0.12,      // word-by-word
    });

    // Cleanup: restore original DOM and kill gsap tweens
    return () => {
      gsap.killTweensOf(wordEls);
      el.textContent = originalText;
    };
  }, []);
  



      // gsap text onload animation

   const headingRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Function to animate text
    const animateText = (ref, delay = 0) => {
      if (!ref.current) return;
      const split = new SplitType(ref.current, { types: "words, chars" });
      gsap.from(split.chars, {
        opacity: 0,
        y: 30,
        stagger: 0.02, // faster than heading
        delay,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    // Animate heading first
    animateText(headingRef, 0);

    // Animate side texts
    animateText(leftTextRef, 0.5);
    animateText(rightTextRef, 0.5);

    // Animate description
    animateText(descRef, 0.1);

    // Animate button
    animateText(buttonRef, 1.2);
  }, []);


  const overlayRef = useRef(null);

  useEffect(() => {
    gsap.to(overlayRef.current, {
      x: "100%", // move fully to the right
      duration: 1, // speed of animation
      delay: 0.5, // wait 0.5s before starting
      ease: "expo.in", // smooth ease in and out
    });
  }, []);


  
    // our vision 👇

    
    
     const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0); // Start with first div text visible

const leftPositions = [20, 25.5, 30.5, 35.5, 40.5, 45.5, 50.5];
const letters = ["A", "L", "L", "S", "T", "A", "R"];
const offsetIn = "20px";
    
const colors = [
  "#ffadad", // light red
  "#ffd6a5", // light orange
  "#ffadad", // light yellow
  "#ffd6a5", // light green
  "#ffadad", // light blue
  "#ffd6a5", // soft blue
  "#ffadad"  // light purple
];

const visions = [
  { id: 1, title: "Adaptive Excellence", v_discrip: "We adapt fast to change, refining strategies, processes, and performance to stay ahead. By embracing innovation and data-driven insights, we deliver consistent, measurable results." },
  { id: 2, title: "Long-Term Impact", v_discrip: "We focus on sustainable growth, building solutions that scale with the business. Every decision prioritizes durability, value creation, and compounding returns over time." },
  { id: 3, title: "Laser-Focused on Value", v_discrip: "We concentrate on outcomes that matter most—revenue, retention, and user satisfaction. Clarity of goals and precision execution drive meaningful business impact." },
  { id: 4, title: "Seamless Collaboration", v_discrip: "We work as one team with clients and partners, integrating workflows and communication. This alignment accelerates delivery, elevates quality, and strengthens trust." },
  { id: 5, title: "Trust Through Transparency", v_discrip: "We earn trust with clear plans, honest reporting, and predictable delivery. Open communication and shared accountability lead to stronger partnerships and better results." },
  { id: 6, title: "Accessible by Design", v_discrip: "We champion inclusive experiences with accessibility, performance, and usability at the core. Every product is crafted to be fast, secure, and easy for all users to engage with." },
  { id: 7, title: "Relentless Zest for Growth", v_discrip: "We are always growing—improving ourselves, our results, projects, and relationships. Like in a game, we keep unlocking new milestones through learning, iteration, and ambition." },
];

useEffect(() => {
  const boxes = gsap.utils.toArray(".vision-box");

  // initial off-screen setup
  gsap.set(boxes, { x: "100vw", opacity: 0 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".ourVision-tempaFlorida",
      start: "top top",
      end: () => "+=" + (boxes.length * 300),
      scrub: true,
      pin: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalBoxes = boxes.length;
        
        // Simple calculation: which div has reached its final position
        const currentIndex = Math.floor(progress * totalBoxes);
        const clampedIndex = Math.min(currentIndex, totalBoxes - 1);
        
        setCurrentVisibleIndex(clampedIndex);
      },
    },
  });

  // stagger in animation
  tl.to(boxes, {
    x: 0,
    opacity: 1,
    ease: "power3.out",
    stagger: 0.18,
  });

  return () => {
    ScrollTrigger.getAll().forEach((s) => s.kill());
    gsap.killTweensOf(boxes);
  };
}, []);


    // our process 👇


  const [activeIndex, setActiveIndex] = useState(0);
    
  const trackRef = useRef(null);

  // Drag state
  const pos = useRef({ startX: 0, currentX: 0, dragging: false, translateX: 0 });

  const processes = [0, 1, 2, 3]; // index placeholders for process containers

  const startDrag = (e) => {
    pos.current.dragging = true;
    pos.current.startX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
  };

  const duringDrag = (e) => {
    if (!pos.current.dragging) return;
    const x = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    const delta = x - pos.current.startX;
    trackRef.current.style.transform = `translateX(calc(-${activeIndex * 100}% + ${delta}px))`;
    pos.current.currentX = x;
  };

  const endDrag = () => {
    if (!pos.current.dragging) return;
    pos.current.dragging = false;
    const delta = pos.current.currentX - pos.current.startX;

    if (delta < -50 && activeIndex < processes.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (delta > 50 && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      trackRef.current.style.transform = `translateX(-${activeIndex * 100}%)`;
    }
  };


    // our service 👇

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    { id: 1, title: "Web Development ", color: "bg-pink-100" },
    { id: 2, title: "UX/UI Design", color: "bg-pink-200" },
    { id: 3, title: "Logo & Brand Identity", color: "bg-pink-100" },
    { id: 4, title: "SEO & Content Writting", color: "bg-pink-200" },
  
    

  ];

  // permanent tilt (degrees)
  const TILT_DEG = -15; // rotateX degrees (increase to tilt more forward)
  // lift value on hover (vh)
  const LIFT_VH = 35;
  const TEXT_TILT_DEG = 0; // inner counter-tilt so text stays flat (should be -TILT_DEG)



    // FAQ 👇
    const [activeQuestion, setActiveQuestion] = useState(null);

    const questions = [
        {
            id : 1,
            question : "what id i want refund",
            answer : "The cost of a custom website in Florida can range from $5,000 for a basic informational site to over $50,000 for a complex e-commerce platform or web application. Key factors influencing the price include the scope of work, complexity of design, number of pages, and any special features like e-commerce functionality or third-party integrations. We provide a detailed, transparent quote after an initial discovery call to understand your specific business needs and goals",
        },

        {
            id : 2,
            question : "How long does it take to build a custom web application?",
            answer : "A typical web application project takes between 12 to 16 weeks from the initial discovery phase to final deployment. This timeline can be shorter for simpler projects or longer for more complex applications requiring extensive custom features. Our agile development process, which includes two-week sprints, allows for regular feedback and adjustments, ensuring we stay on track and deliver your project efficiently.",
        },

        {
            
            id : 3,
            question : "Will my new website be SEO-friendly?",
            answer : "Absolutely. We build every website with a strong SEO foundation from the ground up. This includes a mobile-first responsive design, fast loading speeds, clean and crawlable code, and a logical site structure. We also conduct keyword research to inform your site's content and meta tags, ensuring you're well-positioned to rank for the terms that matter most to your business.",
        },

        {

        
            id : 4,
            question : "Do you offer support and maintenance after the website is launched?",
            answer : "Yes, we offer a range of ongoing support and maintenance packages to keep your website secure, updated, and performing at its best. Our services include regular software updates, security monitoring, performance optimization, and content updates. We see ourselves as a long-term partner in your success, not just a one-time service provider."
        },
    ]

  return (
    <div className='tempaFloridaBody m-0 p-0 box-border'>
        
       <div className="heroPage-tempaFlorida">
      <div className="h1-hero-heading w-[100vw] h-[25vh] !mt-5 flex justify-center items-center text-center">
        <h1 ref={headingRef}>
          The Best Website Development Company In Tampa, Florida
        </h1>
      </div>

      <div className="hero-photo-text flex justify-around items-center !mt-5">
        <div
          className="hero-left-text h-[5vh] w-[25vw] !ml-18 flex items-center justify-between"
          ref={leftTextRef}
        >
          <p>Web development</p>
          <p>Web design</p>
        </div>

        <div className="hero-main-photo h-[29vh] w-[32vw] bg-[#620505] relative overflow-hidden">
      <img src={heroImg} alt="hero" className="w-full h-full object-cover" />
      <div
        ref={overlayRef}
        className="hero-main-photo-animation h-[29vh] w-[32vw] bg-green-500 absolute top-0 left-0"
      ></div>
    </div>

        <div
          className="hero-right-text h-[5vh] w-[25vw] !mr-18 flex items-center justify-between"
          ref={rightTextRef}
        >
          <p>Search engine Optimize</p>
          <p>Brand identity</p>
        </div>
      </div>

      <div className="hero-description w-[100vw] !mt-7 " >
        <p className="hero-desc !px-40 text-center text-[1.2rem]" ref={descRef}>
          Looking for the best web design, website development, and SEO agency in tempa, florida? we help local businesses grow online with stunning, responsive websites and data-driven SEO strategies that drive real results. From concept to launch, our expert team delivers modern, mobile-friendly website built to attract customer, increase visibility, and boost revenue. whether you're a small business or an established brand,  we provide custom solutions tailored to your goals, combining creativity, technology, and proven marketing strategies. With our Tempa-based web development & SEO service, you'll not only get a website that looks amazing but one that rank higher on google and converts visitor into customers.
        </p>
      </div>

      <div className="hero-button flex justify-center !mt-7">
        <button
          className="hero-button-get-in-touch !px-12 !py-1 rounded-full flex justify-center items-center !bg-[#183109] !text-white"
          ref={buttonRef}
        >
          GET IN TOUCH
        </button>
      </div>
    </div>


        <div className="servicePage-tempaFlorida h-[210vh] w-[100vw]  relative flex flex-col items-center !mt-10"
      style={{
        perspective: "1000px",
        perspectiveOrigin: "50% 50%",
      }}
    >
      {/* HEADER */}
    <div className="servicePage-header h-[80vh] w-[100vw] flex flex-col justify-start items-center !pt-32">
      <h1 ref={headerRef} className="!text-[7rem] text-center !font-semibold">
        Find the service you need
      </h1>

      {/* Paragraph: NO animation — left untouched */}
      <p className="text-md w-[35%] justify-self-end !pt-15">
       It doesn't matter whether you know where to start or not, we will always point you in the right direction.
      </p>
    </div>

      {/* SERVICES */}
      {services.map((service, index) => {
        const topVh = 70 + index * 20; // base top positions
        const shouldLift = hoveredIndex !== null && index <= hoveredIndex;

        // Parent transform: lift (if needed) + permanent tilt
        const parentTransform = `${
          shouldLift ? `translateY(-${LIFT_VH}vh)` : `translateY(0)`
        } rotateX(${TILT_DEG}deg)`;

        // Child counter-rotation: cancels parent's rotateX so contents stay upright
        const childTransform = `rotateX(${TEXT_TILT_DEG}deg)`;

        return (
          <div
            key={service.id}
            className={`h-[70vh] w-[99.9vw] ${service.color} flex flex-col justify-start items-center absolute transition-all duration-500`}
            style={{
              top: `${topVh}vh`,
              transform: parentTransform,
              transformOrigin: "top center",
              // slanted trapezoid shape for the card
              clipPath: "polygon(3% 0, 97% 0, 100% 100%, 0% 100%)",
              boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* inner wrapper: counter-rotate so text remains flat */}
            <div
              className="w-full h-full flex flex-col items-center px-8"
              style={{
                transform: childTransform,
                transformOrigin: "top center",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                willChange: "transform",
                // tiny translateZ can prevent z-fighting on some browsers:
                // transform: `${childTransform} translateZ(0.1px)`,
              }}
            >
              <h1 className="!text-[10rem] text-center !font-semibold select-none mt-6">
                {service.title}
              </h1>

              <p className="text-md w-[35%] justify-self-end !pt-10">
               
              </p>

              <div className="mt-auto mb-6 w-full flex justify-end pr-12">
                <button className="underline">More Information ↪</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
         
          <div className="ourProcessPage-tempaFlorida w-[100vw] h-[100vh] !mt-10 !pt-10">
  {/* Heading */}
  <div className="ourProcess-heading w-[100vw] h-[20vh] text-6xl font-semibold !pl-23">
 your journey to <br />
"Peak Performance"
</div>

  {/* Navbar */}
  <div className="ourProcess-navbar w-[100vw] h-[12vh] !pl-23 flex items-center ">
    <div className="process-nav w-[60vw] h-[6vh] rounded-4xl border-2 flex justify-around items-center">
      {["Discovery", "Design & dev", "Full Cycle Testing", "Implementation","Maintanace"].map((name, idx) => (
        <div
          key={idx}
          className={`text-lg !px-6 !py-1 rounded-full cursor-pointer ${
            activeIndex === idx ? "bg-indigo-600 text-white" : ""
          }`}
          onClick={() => setActiveIndex(idx)}
        >
          {name}
        </div>
      ))}
    </div>
  </div>

  {/* Main Slider */}
  <div
    className="ourProcess-mainBox h-[60vh] flex items-center !pl-23 overflow-hidden"
    onMouseDown={startDrag}
    onMouseMove={duringDrag}
    onMouseUp={endDrag}
    onMouseLeave={endDrag}
    onTouchStart={startDrag}
    onTouchMove={duringDrag}
    onTouchEnd={endDrag}
  >
    <div
      ref={trackRef}
      className="flex gap-[32px] transition-transform duration-[1200ms] ease-[cubic-bezier(0.77,0,0.175,1)]"
      style={{
        transform: `translateX(-${activeIndex * (50 + 2.2)}%)`,
        width: "400%",
      }}
    >
      {/* Slide 1 */}
      <div className="flex-shrink-0 w-[50%] h-[50vh] border-2 rounded-3xl flex justify-between !p-1">
        <div className="w-[55%] flex flex-col justify-end !pl-5 !pb-5 gap-3">
          <div className="text-md">Discovery</div>
          <div className="text-4xl w-full uppercase">
            In-depth research to understand your goals, audience, and market.
          </div>
        </div>
        <div className="!w-[45%] !h-[100%]  !bg-blue-900 rounded-3xl relative overflow-hidden">
          <img src={discoveryImg} alt="" />
          <div className="ourProcessImgAnimation h-[100%] w-[100%] bg-green-500 absolute" >
            
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="flex-shrink-0 w-[50%] h-[50vh] border-2 rounded-3xl flex justify-between !p-1">
        <div className="w-[55%] flex flex-col justify-end !pl-5 !pb-5 gap-3">
          <div className="text-md">Design & Development</div>
          <div className="text-4xl w-full uppercase">
            Creating modern, responsive, and user-friendly websites.
          </div>
        </div>
        <div className="!w-[45%] !h-[100%]  !bg-blue-900 rounded-3xl relative overflow-hidden">
          <img src={designNDevImg} alt="" />
          <div className="ourProcessImgAnimation h-[100%] w-[100%] bg-green-500 absolute" >
            
          </div>
        </div>
      </div>

      {/* Slide 3 */}
     <div className="flex-shrink-0 w-[50%] h-[50vh] border-2 rounded-3xl flex justify-between !p-1">
        <div className="w-[55%] flex flex-col justify-end !pl-5 !pb-5 gap-3">
          <div className="text-md">Full cycle testing</div>
          <div className="text-4xl w-full uppercase">
            Ensuring flawless performance, security, and usability.
          </div>
        </div>
        <div className="!w-[45%] !h-[100%]  !bg-blue-900 rounded-3xl relative overflow-hidden">
          <img src={fullCycleTestingImg} alt="" />
          <div className="ourProcessImgAnimation h-[100%] w-[100%] bg-green-500 absolute" >
            
          </div>
        </div>
      </div>

      {/* Slide 4 */}
     <div className="flex-shrink-0 w-[50%] h-[50vh] border-2 rounded-3xl flex justify-between !p-1">
        <div className="w-[55%] flex flex-col justify-end !pl-5 !pb-5 gap-3">
          <div className="text-md">Implementation</div>
          <div className="text-4xl w-full uppercase">
            Seamless launch with optimized setup and integrations.
          </div>
        </div>
        <div className="!w-[45%] !h-[100%]  !bg-blue-900 rounded-3xl relative overflow-hidden">
          <img src={implementationImg} alt=""  className='' />
          <div className="ourProcessImgAnimation h-[100%] w-[100%] bg-green-500 absolute" >
            
          </div>
        </div>
      </div>

      {/* Slide 5 */}
     <div className="flex-shrink-0 w-[50%] h-[50vh] border-2 rounded-3xl flex justify-between !p-1">
        <div className="w-[55%] flex flex-col justify-end !pl-5 !pb-5 gap-3">
          <div className="text-md">Maintanace</div>
          <div className="text-4xl w-full uppercase">
            Continuous updates, support, and performance monitoring.
          </div>
        </div>
        <div className="!w-[45%] !h-[100%]  !bg-blue-900 rounded-3xl relative overflow-hidden">
          <img className='' src={maintainaceImg} alt="" />
          <div className="ourProcessImgAnimation h-[100%] w-[100%] bg-green-500 absolute" >
            
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

        <div className="whoChooseUs-tempaFlorida w-[100vw] h-[130vh] !mt-10 !pt-10  ">
           <div className="whoChooseUs-heading w-[100vw] h-[20vh] flex flex-col justify-center items-center gap-5">
  <div className="whoChooseUs-subHeading text-5xl">
   why choose ALLSTARS?"
  </div>
  <div className="whoChooseUs-heading text-center w-[80vw] text-xl">
   As Your Trusted Website Development Company in Florida?
  </div>
</div>

            <div className="whyChooseUs-grid  grid grid-cols-3 gap-y-10 !ml-23 !mt-5 ">
    <div className="whyChooseUs-container1 bg-red-100  border-1  w-[28vw] h-[30vh] rounded-lg flex flex-col  !pt-5 !pl-4">

            <div className="whyChooseUs-innercontainer-logo w-[10%] h-[10%]">
              <img src={ideaToLaunchImg} alt="" />
            </div>
            <div className="whyChooseUs-innercontainer-heading text-xl !mt-5">
                <h1>Seamless Transition from Idea to Launch</h1>
            </div>

            <div className="whyChooseUs-innercontainer-discription text-sm  !mt-1">
                <p>From discovery to deployment, we run a frictionless process using agile sprints, CI/CD pipelines, and automated QA to deliver faster with fewer risks. This saves time, reduces rework, and keeps projects on schedule without compromising quality.</p>
            </div>


    </div>
    
    <div className="whyChooseUs-container2 bg-red-100 border-1   w-[28vw] h-[30vh] rounded-lg flex flex-col  !pt-5 !pl-4">

            <div className="whyChooseUs-innercontainer-logo w-[10%] h-[10%]">
              <img src={accountsImg} alt="" />
            </div>
            <div className="whyChooseUs-innercontainer-heading text-xl !mt-5">
                <h1>Dedicated Account Management</h1>
            </div>

            <div className="whyChooseUs-innercontainer-discription text-sm  !mt-1">
                <p>Every project is led by a dedicated account manager and a senior strategist. Expect proactive communication, transparent timelines, and weekly progress updates. We align deliverables to business objectives, not just design trends.</p>
            </div>


    </div>
    {/* wcu-conatiner3 */}
    <div className="whyChooseUs-container3 bg-red-100 border-1   w-[28vw] h-[30vh] rounded-lg flex flex-col  !pt-5 !pl-4">

            <div className="whyChooseUs-innercontainer-logo w-[10%] h-[10%]">
              <img src={monitoringImg} alt="" />
            </div>
            <div className="whyChooseUs-innercontainer-heading text-xl !mt-5">
                <h1>24×7 Monitoring and Maximum Uptime</h1>
            </div>

            <div className="whyChooseUs-innercontainer-discription text-sm  !mt-1">
                <p>We don’t just ship and disappear. Our sites are backed by 24×7 monitoring, proactive alerts, and rapid incident response to ensure uninterrupted performance, optimal speed, and year-round reliability.</p>
            </div>


    </div>
    {/* container - 4 */}
    <div className="whyChooseUs-container4 bg-red-100 border-1   w-[28vw] h-[30vh] rounded-lg flex flex-col  !pt-5 !pl-4">

            <div className="whyChooseUs-innercontainer-logo w-[10%] h-[10%]">
              <img src={globalDeliveryImg} alt="" />
            </div>
            <div className="whyChooseUs-innercontainer-heading text-xl !mt-5">
                <h1>Global Delivery with Local Insight</h1>
            </div>

            <div className="whyChooseUs-innercontainer-discription text-sm  !mt-1">
                <p>We operate a global delivery model for efficiency and scale while tailoring messaging and UX for your local market. Whether targeting Florida, California, Tampa Bay, Virginia, or national audiences, we optimize for user intent, regional SERPs, and buying behavior.</p>
            </div>


    </div>
    {/* container-5 */}
    <div className="whyChooseUs-container5 bg-red-100 border-1   w-[28vw] h-[30vh] rounded-lg flex flex-col  !pt-5 !pl-4">

            <div className="whyChooseUs-innercontainer-logo w-[10%] h-[10%]">
              <img src={timeToMarketImg} alt="" />
            </div>
            <div className="whyChooseUs-innercontainer-heading text-xl !mt-5">
                <h1>Accelerated Time-to-Market</h1>
            </div>

            <div className="whyChooseUs-innercontainer-discription text-sm  !mt-1">
                <p>Rapid prototyping, design systems, and modular development help us ship MVPs quickly, validate fast, and iterate based on real user data. You get to market faster—and improve faster than your competitors.</p>
            </div>


    </div>
    {/* container- 6 */}
    <div className="whyChooseUs-container6 bg-red-100 border-1   w-[28vw] h-[30vh] rounded-lg flex flex-col  !pt-5 !pl-4">

            <div className="whyChooseUs-innercontainer-logo w-[10%] h-[10%]">
              <img src={fullStackImg} alt="" />
            </div>
            <div className="whyChooseUs-innercontainer-heading text-xl !mt-5">
                <h1>Proven Full‑Stack Expertise</h1>
            </div>

            <div className="whyChooseUs-innercontainer-discription text-sm  !mt-1">
                <p>Our team builds scalable, secure, high-performance websites and apps using React, Next.js, Node.js, PHP/Laravel, Python/Django, and WordPress VIP. We engineer for Core Web Vitals, accessibility (WCAG), and enterprise-grade security.</p>
            </div>


    </div>
    
    <div className="whyChooseUs-container7 bg-red-100 border-1   w-[28vw] h-[30vh] rounded-lg flex flex-col  !pt-5 !pl-4">

            <div className="whyChooseUs-innercontainer-logo w-[10%] h-[10%]">
              <img src={whiteLabelImg} alt="" />
            </div>
            <div className="whyChooseUs-innercontainer-heading text-xl !mt-5">
                <h1>Custom, White‑Labeled Solutions</h1>
            </div>

            <div className="whyChooseUs-innercontainer-discription text-sm  !mt-1">
                <p>We don’t force templates. Through deep discovery and stakeholder workshops, we craft custom, white-labeled solutions that reflect your brand, integrate with your tools, and are built for your growth targets.</p>
            </div>


    </div>
    {/* container -8  */}
    <div className="whyChooseUs-container8 bg-red-100 border-1   w-[28vw] h-[30vh] rounded-lg flex flex-col  !pt-5 !pl-4">

            <div className="whyChooseUs-innercontainer-logo w-[10%] h-[10%]">
              <img src={qualityAssuranceImg} alt="" />
            </div>
            <div className="whyChooseUs-innercontainer-heading text-xl !mt-5">
                <h1>Quality Assurance Built In</h1>
            </div>

            <div className="whyChooseUs-innercontainer-discription text-sm  !mt-1">
                <p>From unit and integration testing to regression and UAT, we bake quality into every stage. Performance audits, SEO audits, accessibility checks, and cross‑device testing ensure launch‑ready excellence.</p>
            </div>


    </div>
    {/* container - 9 */}
    <div className="whyChooseUs-container9 bg-red-100 border-1   w-[28vw] h-[30vh] rounded-lg flex flex-col  !pt-5 !pl-4">

            <div className="whyChooseUs-innercontainer-logo w-[10%] h-[10%]">
              <img src={monitoringImg} alt="" />
            </div>
            <div className="whyChooseUs-innercontainer-heading text-xl !mt-5">
                <h1> Transparent, Competitive Pricing</h1>
            </div>

            <div className="whyChooseUs-innercontainer-discription text-sm  !mt-1">
                <p>No surprises. Our proposals include clear scopes, milestones, and all-inclusive pricing. Partnerships, proven frameworks, and select open‑source components reduce costs and speed delivery without sacrificing quality.

</p>
            </div>


    </div>
    
    
  </div>

        </div>

        <div className="shareYourRequirenment-tempaFlorida w-[100vw] h-[120vh]  flex justify-center items-center">

                <div className="requirenment-main w-[70%] h-[70%] bg-blue-100 rounded-3xl !p-2 flex justify-between items-center border-2">
                    <div className="requirenment-writeups  w-[54%] h-[100%] rounded-3xl !pl-20 !pt-10 !pr-5 ">
                        <div className="requirenment-writeups-topBox  rounded-3xl w-[70%] h-[30%] text-5xl">
                                   <p>Share Your Requirenment and See The Magic </p>
                        </div>

                        <div className="requirenment-photo-bottomBox  rounded-3xl w-[100%] h-[70%] flex justify-end !p-2  ">
                                    <div className="requirenment-img bg-blue-500 rounded-3xl w-[70%] h-[100%] flex justify-center items-center overflow-hidden !pt-30">
                                      <img src={requirenment3Img} alt="" />
                                      </div>
                        </div>

                    </div>
                    <div className="requirenment-form  w-[45%] h-[100%] rounded-3xl !p-2">
                        <form action="" className='requirenment-form-main relative border-2 bg-amber-50 w-[100%] h-[100%] rounded-3xl flex flex-col gap-2 !pt-10 !p-2 '>

                             <input
        type="text" 
        placeholder="Your name"
        className="requirenment-form-name border-2 !px-5 h-[12%]  !rounded-3xl"
    />
      <input
        type="email"
        placeholder="Your e-mail"
        className="requirenment-form-email border-2 !px-5 h-[12%]  !rounded-3xl"
    />
      <textarea
        placeholder="Message"
        className="requirenment-form-message border-2 !px-5 h-[80%] !pt-5 !rounded-3xl"
      />
      <button type="submit" className="requirenment-form-button absolute right-4 bottom-4 border !bg-amber-400 !py-2 !px-7 !rounded-3xl">
        Submit
      </button>

                        </form>
                    </div>
                </div>

        </div>

          <div className="ourVision-tempaFlorida w-[100vw] h-[100vh] flex justify-center items-center">
  <div className="ourVision-container w-[98%] h-[98%] flex items-center">
    <div className="ourVision-heading w-[30%] h-full flex justify-center items-center text-[8rem]">
      <h1 className="w-[80%]">
        Our Vision
      </h1>
    </div>
    <div className="ourVision-mainWriteUps w-[70%] h-full relative">
      {leftPositions.map((val, i) => (
        <div
          key={i}
          className={`vision-box absolute ourVision-visionBox${letters[i]} w-[58%] h-[55%] flex flex-col justify-center gap-y-5 pl-7`}
          style={{
            left: `${val}%`,
            transform: "translateY(-50%)",
            top: "50%",
            backgroundColor: colors[i],
          }}
        >
          <div className="visionBox-letterBox bg-amber-50 w-[10%] h-[15%] flex justify-center items-center absolute top-0 left-0 text-4xl z-10">
            {letters[i]}
          </div>
          <div 
            className="visionBox-heading text-5xl transition-opacity duration-500"
            style={{ opacity: currentVisibleIndex === i ? 1 : 0 }}
          >
            <h1>{visions[i].title}</h1>
          </div>
          <div 
            className="visionBox-discription text-xl w-[90%] transition-opacity duration-500"
            style={{ opacity: currentVisibleIndex === i ? 1 : 0 }}
          >
            <p>
              {visions[i].v_discrip}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

        <div className="FAQS-tempaFlorida w-[100vw] h-[100vh] !mt-10 !pt-10">
                <div className="FAQS-heading w-[100%] h-[20%]  !pl-23">
                        <h6 className="h6 text-lg !ml-2 ">FAQ</h6>
                        <h1 className='h1 !text-7xl  '>Quick Answers for Creators</h1>
                </div>

                <div className="FAQS-main  w-[100%] h-[75%] flex justify-center items-start">
  <div className=" w-[100%] !p-10 !pl-23">
    {questions.map((q) => (
      <div
        key={q.id}
        className="FAQS-questionBox w-[100%] border-b  border-gray-400 !py-2 !mt-2 "
      >
        {/* Question Row */}
        <div
          className="flex  justify-between items-center cursor-pointer !px-10  "
          onClick={() =>
            setActiveQuestion(activeQuestion === q.id ? null : q.id)
          }
        >
            
          <h3 className=" w-[70%] flex justify-start  gap-10 items-center font-semibold text-start !text-2xl"> <p className='!text-sm ' >{q.id}</p> {q.question}</h3>
          <img
            src={activeQuestion === q.id ? "/cross.png" : "/plus.png"}
            alt="toggle icon"
            className="w-5 h-5"
          />
        </div>

        {/* Answer */}
        <div    
          className={`transition-all duration-300 overflow-hidden ${
            activeQuestion === q.id ? "max-h-40 mt-2" : "max-h-0"
          }`}
        >
          <p className="text-black text-lg  !px-13">{q.answer}</p>
        </div>
      </div>
    ))}
  </div>
</div>  

                <div className="FAQS-if-more-reachOut">

                </div>

        </div>

      <Footer />
        
      
            
    
    </div>
  )
}

export default TempaFlorida

import {React , useState} from 'react'
import { Link } from 'react-router-dom';
import blog1heroPagePhoto from '../../assets/images/heropageportfolio.png';
import blog2heroPagePhoto from '../../assets/images/upcoming-blog2.jpeg';
import blog3heroPagePhoto from '../../assets/images/upcoming-blog3.jpeg';



function BlogMain() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

   const blogs = [
    { id: 1, link:"/how-to-create-your-personal-website-before-college-apps", color: "bg-gray-100", top: "top-[38%]", title: "How to create Your personal website before college apps", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet maxime officia, earum quod in consequuntur incidunt voluptatum eaque consequatur nihil minima. Earum beatae omnis, eaque cum vero eum corporis blanditiis obcaecati adipisci impedit eligendi asperiores laudantium recusandae sint maiores itaque possimus alias esse porro, iusto quibusdam id. Quis, dignissimos eveniet.", pills: ["web", "portfolio", "job"], image: blog1heroPagePhoto },
    { id: 2, link:"/web-growth", color: "bg-gray-50", top: "top-[42%]", title: "How to create Your personal website before college apps", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet maxime officia, earum quod in consequuntur incidunt voluptatum eaque consequatur nihil minima. Earum beatae omnis, eaque cum vero eum corporis blanditiis obcaecati adipisci impedit eligendi asperiores laudantium recusandae sint maiores itaque possimus alias esse porro, iusto quibusdam id. Quis, dignissimos eveniet.", pills: ["web", "portfolio", "job"], image: blog2heroPagePhoto },
    { id: 3, link:"/how-to-create-your-personal-website-before-college-apps", color: "bg-gray-100", top: "top-[46%]", title: "How to create Your personal website before college apps", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet maxime officia, earum quod in consequuntur incidunt voluptatum eaque consequatur nihil minima. Earum beatae omnis, eaque cum vero eum corporis blanditiis obcaecati adipisci impedit eligendi asperiores laudantium recusandae sint maiores itaque possimus alias esse porro, iusto quibusdam id. Quis, dignissimos eveniet.", pills: ["web", "portfolio", "job"], image: blog3heroPagePhoto },
    { id: 4, link:"/how-to-create-your-personal-website-before-college-apps", color: "bg-gray-50", top: "top-[50%]", title: "How to create Your personal website before college apps", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet maxime officia, earum quod in consequuntur incidunt voluptatum eaque consequatur nihil minima. Earum beatae omnis, eaque cum vero eum corporis blanditiis obcaecati adipisci impedit eligendi asperiores laudantium recusandae sint maiores itaque possimus alias esse porro, iusto quibusdam id. Quis, dignissimos eveniet.", pills: ["web", "portfolio", "job"], image: blog1heroPagePhoto },
    // { id: 2, color: "bg-amber-200", top: "top-[35%]" },
    // { id: 3, color: "bg-amber-400", top: "top-[40%]" },
    // { id: 4, color: "bg-amber-500", top: "top-[45%]" },
  ];


  return (
    <div>
      <div className="body w-[100vw] h-[200vh] ">

<div className="blogMain-main-mobile w-[100vw] h-[100vh] 
md:hidden">

        <div className="blogMain-header w-[100%] h-[12%]  flex justify-center items-center text-[1.7rem]">
            <h1>EXPLORE BLOGS</h1>
        </div>

        <div className="blog w-[100%] h-[88%]  !px-1 !py-2 ">
          <div className="blog1 w-[100%] h-[72%] bg-black rounded-2xl overflow-hidden !p-[2px]">

            <div className="blog-photo w-[100%] h-[70%] bg-emerald-700 rounded-t-2xl overflow-hidden flex justify-center items-center">
              <img src={blog1heroPagePhoto} alt="" />

            </div>

            <div className="blog-desc  w-[100%] h-[25%]  !py-1 !pl-3 text-white">
              <h1 className='blog-title text-[1.5rem] ' >How to create Your personal....</h1>
              <p className='blog-description text-[0.8rem]  !mt-0'>Explain how it demonstrates initiative, showcases skills....</p>

              <Link to="/how-to-create-your-personal-website-before-college-apps">
  <button className='border-[1.5px] !py-[2.5px] !px-6 !text-white !rounded-2xl text-[0.7rem] !mt-3'>
    Read More
  </button>
</Link>
            </div>


            <div className="blog-logo-seo  w-[100%] h-[5%] text-[0.7rem]  text-white rounded-b-xl flex justify-between items-center !px-4">
              <div className="blog-logo ">
                allstar
              </div>

              <div className="blog-seo ">
                <ul className='flex gap-2'>
                  <li>web</li>
                  <li>portfolio</li>
                  <li>job</li>
                </ul>
              </div>
            </div>



          </div>


           <div className="blog2 w-[100%] h-[72%] bg-black rounded-2xl overflow-hidden !p-[5px] !mt-7">

            <div className="blog-photo w-[100%] h-[70%] bg-emerald-700 rounded-t-2xl">
              <img className='rounded-2xl' src={blog2heroPagePhoto} alt="" />

            </div>

            <div className="blog-desc  w-[100%] h-[25%]  !py-1 !pl-3 text-white">
              <h1 className='blog-title text-[1.5rem] ' >coming soon....</h1>
              <p className='blog-description text-[0.8rem]  !mt-0'>It's not who I am underneath, but what I do that defines me.</p>

              <button className=' border-[1.5px]  !py-[2.5px] !px-6 !text-white !rounded-2xl text-[0.7rem] !mt-3'>Read More</button>
            </div>


            <div className="blog-logo-seo  w-[100%] h-[5%] text-[0.7rem]  text-white rounded-b-xl flex justify-between items-center !px-4">
              <div className="blog-logo ">
                allstar
              </div>

              <div className="blog-seo ">
                <ul className='flex gap-2'>
                  <li>Bruce</li>
                  <li>Wayne</li>
                  <li>Batman</li>
                </ul>
              </div>
            </div>



          </div>

           <div className="blog3 w-[100%] h-[72%] bg-black rounded-2xl overflow-hidden !p-[5px]  !mt-7 o">

            <div className="blog-photo w-[100%] h-[70%] bg-emerald-700 rounded-t-2xl">
              <img className='rounded-2xl' src={blog3heroPagePhoto} alt="" />

            </div>

            <div className="blog-desc  w-[100%] h-[25%]  !py-1 !pl-3 text-white">
              <h1 className='blog-title text-[1.5rem] ' >comming soon....</h1>
              <p className='blog-description text-[0.8rem]  !mt-0'>Dreams save us. Dreams lift us up and transform us</p>

              <button className=' border-[1.5px]  !py-[2.5px] !px-6 !text-white !rounded-2xl text-[0.7rem] !mt-3'>Read More</button>
            </div>


            <div className="blog-logo-seo  w-[100%] h-[5%] text-[0.7rem]  text-white rounded-b-xl flex justify-between items-center !px-4">
              <div className="blog-logo ">
                allstar
              </div>

              <div className="blog-seo ">
                <ul className='flex gap-2 text-black'>
                  <li>Clark </li>
                  <li>Kent</li>
                  <li>Superman</li>
                </ul>
              </div>
            </div>



          </div>

        </div>
   
    </div>

    <div className="blog-desktop  h-[90%] w-full relative">
  <div className="blogMain-header w-full h-[9%]  flex justify-center items-center text-[5rem]">
    <h1>EXPLORE BLOGS</h1>
  </div>

  <p className=' blog-desktop-intro  !mt-10 !px-20 text-center text-[1.8rem]'>Level up your web game without the fluff. Dive into bite-sized, battle-tested guides on SEO, web growth, Core Web Vitals, and content clusters. Skim smart checklists, copy frameworks, and 90‑day roadmaps that turn clicks into compounding wins. Explore featured pillars, filter by topic, or search for exactly what’s needed. Faster pages, cleaner structure, stronger rankings—served with clarity, momentum, and just enough flair to keep learning fun. Let’s build something that scales.</p>

  {blogs.map((blog, index) => (

    <Link to={blog.link} key={blog.id}>

        <div
      key={blog.id}
      className={`w-full h-[30%] ${blog.color} absolute ${blog.top}
      flex justify-between items-center           !p-1       text-white
                 transition-transform duration-300
                 before:content-[''] before:absolute before:-top-5
                 before:left-10 before:w-32 before:h-8
                 before:rounded-t-lg before:${blog.color}
                 `}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      style={{
        transform:
          hoveredIndex !== null && index <= hoveredIndex
            ? `translateY(-87%)`
            : "translateY(0)",
      }}
    >
      <div Link={blog.link} className="blog-desktop-leftBox w-[55%] h-[100%]  flex flex-col gap-8 justify-start !pt-3 cursor-pointer">
        <div className="blog-desktop-number text-black text-[0.7rem] !pl-10"><p>blog{blog.id}</p></div>
        <div className="blog-desktop-title  text-black text-[1.8rem] !pl-10 w-[50%] font-bold"><h1>{blog.title}</h1></div>
        <div className="blog-desktop-discription  text-black text-[0.9rem] !px-10 w-[90%]">{blog.description}</div>

        <div className="blod-desktop-pills text-black text-[0.8rem] !pl-10 flex gap-5 !mt-4">
          <span className=' !px-4 !py-[1px] rounded-2xl border-[0.8px]'>{blog.pills[0]}</span>
          <span className=' !px-4 !py-[1px] rounded-2xl border-[0.8px]'>{blog.pills[1]}</span>
          <span className=' !px-4 !py-[1px] rounded-2xl border-[0.8px]'>{blog.pills[2]}</span>
        </div>
      </div>
      <div className="blog-desktop-rightBox w-[45%] h-[100%]  flex justify-center items-center ">
        <div className="blog-desktop-imgBox w-[95%]  h-[98%] bg-amber-100 flex justify-center items-center overflow-hidden rounded-2xl  ">
          <img src={blog.image} alt="" />
        </div>
      </div>
    </div>

    </Link>
  
  ))}
</div>
  

      </div>
    
    </div>
  )
}

export default BlogMain

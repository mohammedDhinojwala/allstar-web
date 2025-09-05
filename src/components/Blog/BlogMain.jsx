import React from 'react'
import { Link } from 'react-router-dom';
import blog1heroPagePhoto from '../../assets/images/heropageportfolio.png';
import blog2heroPagePhoto from '../../assets/images/upcoming-blog2.jpeg';
import blog3heroPagePhoto from '../../assets/images/upcoming-blog3.jpeg';



function BlogMain() {
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

    <div className="blogMain-main-desktop w-[100vw] h-[100vh] hidden
    md:!flex md:!flex-col">
      
      <div className="blogMain-header bg-red-200 h-[10%] ">
        <h1 className='text-[4rem] !pl-2'>EXPLORE BLOGS</h1>
      </div>

      <div className="blog-desktop bg-green-900 h-[90%] w-[100%]">
    
      

        </div>

      

    </div>

      </div>
    
    </div>
  )
}

export default BlogMain

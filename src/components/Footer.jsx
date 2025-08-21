import React from 'react';
import { Link } from 'react-router-dom';
// Remove this import - you don't need to import the component in Footer
// import TempaFlorida from './locations/TempaFlorida';

function Footer() {
  return (
   <div className="footerMain w-[100vw] h-[110vh] flex justify-center items-end z-[20]">
      <div className="footer flex flex-col justify-center items-center w-[100vw] h-[95vh]">
        <div className="letswork w-[100%] h-[50%] md:!h-[40%] flex flex-col justify-center items-center">
          <p className="letswork1">(*)</p>
          <p className="letswork2">Got Project In Mind?</p>
          <p className="letswork3">Lets Make It Happen</p>
        </div>
        <hr className='mb-[10%] md:!mb-20 w-[95%] flex justify-center' />
        <div className="linksToWork w-[100%] h-[50%]">
          <div className="linkTopBox w-[100%] h-[55%] flex flex-row flex-wrap md:flex-nowrap justify-around">
            <div className="emailBox w-[45%] h-[35%] flex flex-col">
              <h1 className='foothead'>new projects/enquires</h1>
              <p className='iamemail !mt-2'>mohammeddhinojwala2005@gmail.com</p>
              <p className='iampno'>+91 7021676609</p>
            </div>
            <div className="onlineLinks w-[45%] h-[35%] flex flex-col items-end md:!items-start md:flex md:flex-col">
              <h1 className='foothead'>online</h1>
              <p className='iaminsta !mt-2'>instagram</p>
              <p className='ia!mlinked'>linkedin</p>
            </div>

            <div className="locations w-[15%] h-[55%] flex flex-col !ml-80 !pr-1 md:!mr-85 md:!mt-5 items-end md:items-start relative overflow-visible">
              <h1 className="foothead mb-4 text-lg font-bold">Location</h1>
              
              {/* America */}
              <div className="location-item group relative cursor-pointer mb-3">
                <p className="iamAmerica rounded-md transition-all duration-300 hover:-translate-x-1">
                  America
                </p>
                <div className="subLocationAmerica absolute left-full top-0 !ml-3 bg-gradient-to-r rounded-lg p-4 shadow-xl min-w-[160px] z-20 
                                opacity-0 invisible translate-x-6 group-hover:opacity-100 group-hover:visible group-hover:translate-x-2 
                                transition-all duration-500 ease-out">
                  {/* CORRECTED: Use string path instead of component */}
                  <Link 
                    to="/tempa-florida"
                    className="!py-2 !px-3 rounded-md transition-all duration-200 !ml hover:translate-x-1 font-medium cursor-pointer block hover:bg-white/20"
                  >
                    Tempa
                  </Link>
                  <p className="!py-2 !px-3 rounded-md transition-all duration-200 !ml hover:translate-x-1 font-medium cursor-pointer">Los Angeles</p>
                  <p className="!py-2 !px-3 rounded-md transition-all duration-200 !ml hover:translate-x-1 font-medium cursor-pointer">Texas</p>
                </div>
              </div>

              {/* India */}
              <div className="location-item group relative cursor-pointer mb-3">
                <p className="iamIndia rounded-md transition-all duration-300 hover:-translate-x-1">
                  India
                </p>
                <div className="subLocationIndia absolute left-full top-0 !ml-3 bg-gradient-to-r rounded-lg p-4 shadow-xl min-w-[160px] z-20 
                                opacity-0 invisible translate-x-6 group-hover:opacity-100 group-hover:visible group-hover:translate-x-2 
                                transition-all duration-500 ease-out">
                  <p className="!py-2 !px-3 rounded-md transition-all duration-200 !ml hover:translate-x-1 font-medium cursor-pointer">Mumbai</p>
                  <p className="!py-2 !px-3 rounded-md transition-all duration-200 !ml hover:translate-x-1 font-medium cursor-pointer">Bangalore</p>
                  <p className="!py-2 !px-3 rounded-md transition-all duration-200 !ml hover:translate-x-1 font-medium cursor-pointer">Delhi</p>
                </div>
              </div>

              {/* UK */}
              <div className="location-item group relative cursor-pointer mb-3">
                <p className="iamUk rounded-md transition-all duration-300 hover:-translate-x-1">
                  UK
                </p>
                <div className="subLocationUk absolute left-full top-0 !ml-3 bg-gradient-to-r rounded-lg p-4 shadow-xl min-w-[160px] z-20 
                                opacity-0 invisible translate-x-6 group-hover:opacity-100 group-hover:visible group-hover:translate-x-2 
                                transition-all duration-500 ease-out">
                  <p className="!py-2 !px-3 rounded-md transition-all duration-200 !ml hover:translate-x-1 font-medium cursor-pointer">Birmingham</p>
                  <p className="!py-2 !px-3 rounded-md transition-all duration-200 !ml hover:translate-x-1 font-medium cursor-pointer">Manchester</p>
                  <p className="!py-2 !px-3 rounded-md transition-all duration-200 !ml hover:translate-x-1 font-medium cursor-pointer">London</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="linkBottomBox w-[100%] h-[45%] flex flex-row items-end justify-around">
            <div className="watermark w-[40%] h-[30%] flex !p-1">allstar</div>
            <div className="legal w-[40%] h-[30%] flex md:justify-center md:!pl-30 !p-1">legal</div>
            <div className="y2025 w-[40%] h-[30%] flex justify-end !p-1">@2025</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

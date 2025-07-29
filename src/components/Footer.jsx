import React from 'react';

function Footer() {
  return (
   <div className="footerMain w-[100vw] h-[110vh]  flex justify-center items-end z-[20]">
      <div className="footer flex flex-col justify-center items-center w-[100vw] h-[95vh] ">
        <div className="letswork w-[100%] h-[50%] md:!h-[40%] flex flex-col justify-center items-center">
          <p className="letswork1">(*)</p>
          <p className="letswork2">Got Project In Mind?</p>
          <p className="letswork3">Lets Make It Happen</p>
        </div>
        <hr className='mb-[10%] md:!mb-20 w-[95%] flex justify-center ' />
        <div className="linksToWork w-[100%] h-[50%] ">
          <div className="linkTopBox w-[100%] h-[50%]  flex flex-row justify-around">
            <div className="emailBox w-[45%] h-[35%] flex flex-col">
              <h1 className='foothead'>new projects/enquires</h1>
              <p className='iamemail !mt-2 '>mohammeddhinojwala2005@gmail.com</p>
              <p className='iampno'>+91 7021676609</p>
            </div>
            <div className="onlineLinks w-[45%] h-[35%] flex flex-col !pr-2 items-end md:!items-start md:flex md:flex-col ">
              <h1 className='foothead'>online</h1>
              <p className='iaminsta !mt-2'>instagram</p>
              <p className='iamlinked'>linkedin</p>
            </div>
          </div>
          <div className="linkBottomBox w-[100%] h-[50%] flex flex-row items-end justify-around">
            <div className="watermark w-[40%] h-[30%]  flex  !p-1">allstar</div>
            <div className="legal w-[40%] h-[30%]  flex md:justify-center md:!pl-30  !p-1">legal</div>
            <div className="y2025 w-[40%] h-[30%]  flex justify-end !p-1">@2025</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

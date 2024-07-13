import React, { useEffect, useState } from 'react';
import '../header.css';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { MdClose, MdMenu } from 'react-icons/md';
import { menuItems } from '../utils/constants';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMainMenu, setActiveMainMenu] = useState(null);
  const [activeSubMobMenu, setActiveSubMobMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(1);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMainMenuClick = (index) => {
    setActiveSubMenu(1);
    setActiveMainMenu(activeMainMenu === index ? null : index);
  };

  const handleSubMenuClick = (index) => {
    setActiveSubMobMenu(activeSubMobMenu === index ? null : index);
  };

  const handleSubMenuHover = (index) => {
    if (index !== undefined) setActiveSubMenu(index);
  };

  const handleClickOutside = (e) => {
    if (e.target.closest('.main-menu-item') === null) {
      setActiveMainMenu(null);
      setActiveSubMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex lg:items-center  sticky top-0 z-[1000]">
      {/* Desktop Navbar */}
      <nav className="flex justify-between items-center bg-[#200b50] w-full px-3">
        <a href="#" className='text-white'>CodingLab</a>
        <div className="flex items-center">
          <ul className="hidden lg:flex items-center text-gray-500">
            {menuItems.map((menu, index) => (
              <li
                key={index}
                className={`px-3 py-5 cursor-pointer relative main-menu-item`}
                onClick={() => handleMainMenuClick(menu.showSubMenu && index + 1)}
              >
                <div className="flex items-center text-white whitespace-nowrap">
                  <span className='text-sm font-medium'>{menu.title}</span>
                  {menu.showSubMenu && <FaChevronRight className="ml-1 rotate-90" />}
                </div>
                {menu.showSubMenu && activeMainMenu - 1 === index && (
                  <div className={`absolute shadow-md top-[100%] dropdown-${index + 1} block`} onClick={(e) => e.stopPropagation()}>
                    <div className="p-4 bg-gray-100 rounded-md">
                      <div className="h-[450px] flex">
                        <div className="leftsection flex flex-col mr-3">
                          {menu.subMenuItems.map((submenu, subIndex) => (
                            <button
                              key={subIndex}
                              className={`flex items-center justify-between mb-1 py-5 pr-4 pl-4 w-[18rem] rounded-md ${submenu.showSubMenu && activeSubMenu - 1 === subIndex ? 'bg-white' : 'bg-inherit'}`}
                              onMouseEnter={() => handleSubMenuHover(submenu.showSubMenu && subIndex + 1)}
                            >
                              <span>{submenu.title}</span>
                              {submenu.showSubMenu && <FaChevronRight />}
                            </button>
                          ))}
                        </div>
                        {menu.subMenuItems.map((submenu, subIndex) => (
                          submenu.showSubMenu && activeSubMenu - 1 === subIndex && (
                            <div
                              key={subIndex}
                              className="rightsection flex flex-col justify-between rounded-md bg-[white]"
                            >
                              <div className="overflow-auto overflow-x-hidden flex py-4 pl-8 pr-4">
                                <div className='mr-[80px]'>
                                  <div className="min-w-[260px] mb-0">
                                    <p className={`pb-2 font-semibold border-b text-[#333] `}>
                                      {submenu.title}
                                    </p>
                                    <div className="pt-5">
                                      {submenu.subMenuItems.map((subSubItem, subSubIndex) => (
                                        <a href='#' key={subSubIndex} className="mb-3 text-sm inline-block">{subSubItem.title}</a>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <button className='px-[10px] py-[5px] text-white border border-gray-100 rounded-md'>Login</button>
          <div className="menu-bar block lg:hidden">
            {isSidebarOpen ? <MdClose id="sidebar-close" size={25} onClick={handleSidebarToggle} color="#fff" />
              : <MdMenu id="sidebar-close" size={25} onClick={handleSidebarToggle} color="#fff" />}
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className={`mobileDropdownWrapper max-h-[auto] flex flex-col justify-between bg-white w-full fixed left-0 right-0 top-[55px] bottom-0 overflow-hidden transition-all duration-[0.4s] ${isSidebarOpen ? 'h-[calc(100vh_-55px)] pt-8' : 'h-0 p-0'} lg:hidden`}>

        {/* Outer */}
        <div className="mobileDropdownMenus h-full px-2 sm:px-5 pb-12 w-full">
            
          {
            menuItems.map((mainMenu, index) => (
              <div className="burgerItemWrapperStyle left-0 p-[16px] cursor-pointer hover:bg-gray-50 rounded-md" key={index} onClick={() => handleSubMenuClick(mainMenu.showSubMenu && index + 1)}>
                <div className="burgerItemContainerStyle flex items-center justify-between">
                  <span className="burgerItemStyle">{mainMenu.title}</span>
                  {mainMenu.showSubMenu && <FaChevronRight className='mr-3' />}
                </div>
              </div>
            ))
          }


        </div>

        {/* Inner */}
        {menuItems.map((menuItem, index) => (
          menuItem.showSubMenu && (
            <div className={`serviceListWrapper  ${activeSubMobMenu - 1 === index ? 'right-0' : '-right-full'} absolute top-0 p-4 bg-white flex flex-col w-full h-full transition-all duration-[0.4s] ease-in-out`} key={index} >
              <p className="mobileTabGroupNameContainerStyle p-[16px] mb-5 flex gap-2 items-center bg-gray-100 rounded-md cursor-pointer" onClick={() => setActiveSubMobMenu(null)}>
                <FaChevronLeft />
                {menuItem.title}
              </p>

              {
                menuItem.showSubMenu && (
                  <div className='overflow-y-auto overflow-x-hidden px-[8px] sm:px-[16px] inner-scrollbar'>

                    {menuItem.subMenuItems && menuItem.subMenuItems.map((subItem, subIndex) => (
                      <div className="groupStyle min-w-[210px]" key={subIndex}>
                        {subItem.showSubMenu ? (
                          <>
                            <p className="groupNameStyle sm:px-4 py-2 font-medium">{subItem.title}</p>
                            <div className="linksPaddingStyle sm:px-4 py-2">
                              {
                                subItem.subMenuItems.map((item, index) => (

                                  <p key={index} className='mb-2 text-sm cursor-pointer'>
                                    <a href={subItem.link}>{item.title}</a>
                                  </p>

                                ))
                              }
                            </div>
                          </>
                        ) : (
                          <p className="linkStyle mb-2 text-sm cursor-pointer">
                            <a href={subItem.link}>
                              {subItem.title}
                            </a>
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )
              }
            </div>
          )
        ))
        }


      </div>
    </div>
  );
};

export default Header;



/**
 *  {/* <li className="item">
              <div className="submenu-item" onClick={() => handleSubMenuClick(1)}>
                <span>Business Setup</span>
                <FaChevronRight />
              </div>
              <ul className={`menu-items submenu ${activeSubMenu === 1 ? 'show-submenu' : ''}`}>
                <div className="menu-title" onClick={handleSubMenuTitleClick}>
                  <FaChevronLeft /> Your submenu title
                </div>
                <li className="item">
                  <a href="#">Tax & Compliance</a>
                </li>
                <li className="item">
                  <a href="#">Trademark & IP</a>
                </li>
                <li className="item">
                  <a href="#">Documentation</a>
                </li>
              </ul>
            </li> 


             // <header className='flex justify-between items-center border-b border-borderColor bg-[white] dark:bg-[#1A202C] dark:text-[white] h-[56px] px-3'>
    //     <h1>Weather App</h1>
    //     <nav className='items-center hidden lg:flex'>
    //       <ul className='flex items-center'>
    //         <li className='px-2 cursor-pointer'>Consult an Expert</li>
    //         <li className='px-2 cursor-pointer'>Business Setup</li>
    //         <li className='px-2 cursor-pointer'>Tax & Compliance</li>
    //         <li className='px-2 cursor-pointer'>Trademark & IP</li>
    //         <li className='px-2 cursor-pointer'>Documentation</li>
    //         <li className='px-2 cursor-pointer'>Others</li>
    //         <li className='px-2 cursor-pointer'>More</li>
    //       </ul>
    //       <button className='px-2 py-1 mx-3 font-medium border'>Login</button>
    //       <div className='cursor-pointer'>
    //         <MdMenu size={25}/>
    //       </div>
    //     </nav>
    //     <div className='flex lg:hidden flex-col justify-between overflow-hidden h-[calc(100vh_-_56px)] bg-[white] dark:text-[white] absolute top-15 right-0 left-0 bottom-0'>
    //         <div className='h-full px-5 text-[#333]'>
    //            <div className='flex items-center justify-between cursor-pointer border-b py-4'>
    //                 <div className='flex items-center'>
    //                   <FaUserTie className='mr-3'/>
    //                    <p>Consult an Expert</p>
    //                 </div>
    //                 <MdOutlineArrowForwardIos size={20}/>
    //            </div>
    //            <div className='flex items-center justify-between cursor-pointer border-b py-4'>
    //                 <div className='flex items-center'>
    //                   <FaUserTie className='mr-3'/>
    //                    <p>Consult an Expert</p>
    //                 </div>
    //                 <MdOutlineArrowForwardIos size={20}/>
    //            </div>
    //            <div className='flex items-center justify-between cursor-pointer border-b py-4'>
    //                 <div className='flex items-center'>
    //                   <FaUserTie className='mr-3'/>
    //                    <p>Consult an Expert</p>
    //                 </div>
    //                 <MdOutlineArrowForwardIos size={20}/>
    //            </div>
    //            <div className='flex items-center justify-between cursor-pointer border-b py-4'>
    //                 <div className='flex items-center'>
    //                   <FaUserTie className='mr-3'/>
    //                    <p>Consult an Expert</p>
    //                 </div>
    //                 <MdOutlineArrowForwardIos size={20}/>
    //            </div>
    //            <div className='flex items-center justify-between cursor-pointer border-b py-4'>
    //                 <div className='flex items-center'>
    //                   <FaUserTie className='mr-3'/>
    //                    <p>Consult an Expert</p>
    //                 </div>
    //                 <MdOutlineArrowForwardIos size={20}/>
    //            </div>
    //            <div className='flex items-center justify-between cursor-pointer border-b py-4'>
    //                 <div className='flex items-center'>
    //                   <FaUserTie className='mr-3'/>
    //                    <p>Consult an Expert</p>
    //                 </div>
    //                 <MdOutlineArrowForwardIos size={20}/>
    //            </div>
    //            <div className='flex items-center justify-between cursor-pointer border-b py-4'>
    //                 <div className='flex items-center'>
    //                   <FaUserTie className='mr-3'/>
    //                    <p>Consult an Expert</p>
    //                 </div>
    //                 <MdOutlineArrowForwardIos size={20}/>
    //            </div>
    //         </div>
    //     </div>

    // </header>
 */




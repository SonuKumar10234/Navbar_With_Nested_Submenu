import React, { useState } from 'react';
import '../header.css'
import { MdArrowRight, MdMenu, MdOutlineArrowForwardIos } from 'react-icons/md';
import { FaUserTie } from "react-icons/fa6";
// import provisionLogo from '../assets/logo.jpg';
import { FaBars, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const menuItems = [
  {
    title: 'Consult an Expert',
    showSubMenu: true,
    subMenuItems: [
      { title: 'Talk to a Lawyer 1', link: '#' },
      { title: 'Talk to a Chartered Accountant', link: '#' },
      { title: 'Talk to a Company Secretary', link: '#' },
      { title: 'Talk to a IP/Trademark Lawyer', link: '#' },
    ],
  },
  {
    title: 'Business Setup',
    showSubMenu: true,
    subMenuItems: [
      {
        title: 'Business Registration',
        showSubMenu: true,
        subMenuItems: [
          { title: 'Private Limited Company', link: '#' },
          { title: 'Limited Liability Partnership', link: '#' },
          { title: 'One Person Company', link: '#' },
          { title: 'Sole Proprietorship', link: '#' },
          { title: 'Nidhi Company', link: '#' },
          { title: 'Producer Partnership', link: '#' },
          { title: 'Partnership Firm', link: '#' },
          { title: 'Startup India Registration', link: '#' },
        ],
      },
      {
        title: 'International Business Setup',
        showSubMenu: true,
        subMenuItems: [
          { title: 'US Incorporation', link: '#' },
          { title: 'Singapore Incorporation', link: '#' },
          { title: 'UK Incorporation', link: '#' },
          { title: 'Netherlands Incorporation', link: '#' },
          { title: 'Hong Kong Company Incorporation', link: '#' },
          { title: 'Dubai Company Incorporation', link: '#' },
        ],
      },
      {
        title: 'Company Name Search',
        showSubMenu: true,
        subMenuItems: [
          { title: 'Company Name Search', link: '#' },
          { title: 'Change Company Name', link: '#' },
        ],
      },
      {
        title: 'Licenses & Registrations',
        showSubMenu: true,
        subMenuItems: [
          { title: 'Digital Signature Certificate', link: '#' },
          { title: 'Udyam Registration', link: '#' },
          { title: 'MSME Registration', link: '#' },
          { title: 'ISO Certification', link: '#' },
          { title: 'FSSAI [Food License]', link: '#' },
          { title: 'IEC [Import/Export Code]', link: '#' },
          { title: 'Apeda RCMC', link: '#' },
          { title: 'Spice Board Registration', link: '#' },
        ],
      },
      {
        title: 'Web Development',
        showSubMenu: true,
        subMenuItems: [
          { title: 'Web/E-Commerce Website Development', link: '#' },
        ],
      },
    ],
  },
  {
    title: 'Tax & Compliance',
    showSubMenu: true,
    subMenuItems: [
      {
        title: 'GST and Other Indirect Tax',
        showSubMenu: true,
        subMenuItems: [
          { title: 'GST Registration', link: '#' },
          { title: 'GST Filing', link: '#' },
          { title: 'GST Login Portal', link: '#' },
          { title: 'HSN Code Finder', link: '#' },
          { title: 'GST Cancellation and Revocation', link: '#' },
          { title: 'Indirect Tax', link: '#' },
        ],
      },
    ],

  },
  {
    title: 'Trademark & IP',
    showSubMenu: true,
    subMenuItems: [
      {
        title: 'Trademark',
        showSubMenu: true,
        subMenuItems: [
          { title: 'Trademark Registration', link: '#' },
          { title: 'Trademark Search', link: '#' },
          { title: 'Trademark Renewal', link: '#' },
          { title: 'Trademark Assignment', link: '#' },
          { title: 'Trademark Class Finder', link: '#' },
          { title: 'International Trademark', link: '#' },
        ],
      },
      {
        title: 'Copyright',
        showSubMenu: true,
        subMenuItems: [
          { title: 'Copyright Registration', link: '#' },
          { title: 'Copyright Music', link: '#' },
        ],
      },
    ],
  },
  {
    title: 'Documentation',
    showSubMenu: false,
  },
  {
    title: 'Others',
    showSubMenu: false,
  },
  {
    title: 'More',
    showSubMenu: false,
  },
];

const renderSubMenu = (subMenuItems) => {
  return (
    <div className="overflow-auto px-[16px]">
      {subMenuItems.map((item, index) => (
        <div className="groupStyle min-w-[210px]" key={index}>
          {item.showSubMenu ? (
            <>
              <p className="groupNameStyle px-4 py-2 font-medium">{item.title}</p>
              <div className="linksPaddingStyle px-4">{renderSubMenu(item.subMenuItems)}</div>
            </>
          ) : (
            <p className="linkStyle mb-3">
              <a rel="noopener noreferrer" href={item.link}>
                {item.title}
              </a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

const LetTemp = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [subMenuShowIndex, setSubMenuShowIndex] = useState(1);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSubMenuClick = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  const handleSubMenuTitleClick = () => {
    setActiveSubMenu(null);
  };


  return (


    <div className="flex lg:items-center lg:justify-between w-full">
      {/* desktop navbar */}
      <nav className='flex justify-between items-center bg-[#200b50] text-white w-full px-3'>
        <a>
          CodingLab
        </a>
        <div className='flex items-center justify-between'>
          <ul className='hidden lg:flex items-center'>
            {
              menuItems.map((menu, index) => (
                <li key={index} className='px-3 py-5 cursor-pointer relative' onClick={() => handleSubMenuClick(menu.showSubMenu && index + 1)}>
                  <div className='flex items-center'>
                    <span>{menu.title}</span>
                    {menu.showSubMenu && <FaChevronRight className='rotate-90' />}
                  </div>

                  {
                    <div className='absolute shadow-md top-[110%] -left-[1.5rem] hidden'>
                      <div className='p-4 bg-[white]'>
                        <div className='h-[550px] flex'>

                          <div className='leftsection flex flex-col mr-3'>
                            <button className='flex items-center justify-between mb-1 py-4 pr-4 pl-2 w-[18rem]'>
                              <span>Business Registration</span>
                              <FaChevronRight />
                            </button>
                          </div>

                          <div className='rightsection flex flex-col justify-between rounded-md bg-[white]'>
                            <div className='overflow-auto overflow-x-hidden flex py-4 pl-8 pr-4'>
                              <div className='min-w-[210px] mb-0'>
                                <p className='pb-2 font-semibold border-b text-[#333]'>Heading</p>
                                <div className='py-5'>
                                  <p className='mb-3'></p>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  }
                  {/* <div className={`${activeSubMenu - 1 === index ? 'block' : 'hidden'} bg-[#aedaec] absolute top-12 p-4 w-full hidden`}>
                  {
                    menu.showSubMenu && menu.subMenuItems.map((submenu, index) => (
                     <div key={index} className='flex'>
                       <a href={submenu.link} className='font-semibold' onMouseEnter={()=> setSubMenuShowIndex(index+1)} onMouseLeave={()=>setSubMenuShowIndex(1)}>{submenu.title}</a>
                       
                       <div className={` flex-col ${subMenuShowIndex - 1 === index ? 'flex' : 'hidden'} w-full absolute top-0 left-40 bg-[#aedaec]`}>
                       {submenu.subMenuItems && submenu.subMenuItems.map((subSubItem, subSubIndex) => (
                          <div key={subSubIndex} className="">
                            <a href={subSubItem.link}>{subSubItem.title}</a>
                          </div>
                        ))}
                        </div>
                     </div>
                    )) 
                  }
                  </div> */}
                </li>
              ))
            }
          </ul>
          <div className="menu-bar block lg:hidden">
            <MdMenu id="sidebar-close" size={25} onClick={handleSidebarToggle} color='#fff' />
          </div>
        </div>
      </nav>

      {/* mobile navbar */}
      <nav className={`sidebar-2 hidden ${isSidebarOpen ? '' : ''}`}>
        <a href="#" className="logo">CodingLab</a>
        <div className={`menu-content  ${activeSubMenu ? 'submenu-active' : ''}`}>
          <ul className="menu-items">
            {/* <div className="menu-title">Your menu title</div> */}


            {menuItems.map((item, index) => (
              <li key={index} className="item"  >
                <div className="submenu-item" onClick={() => handleSubMenuClick(item.showSubMenu && index + 1)}>
                  <span>{item.title}</span>
                  {item.showSubMenu && <FaChevronRight />}
                </div>
                {item.showSubMenu && (
                  <div className={`menu-items submenu ${activeSubMenu - 1 === index ? 'show-submenu' : ''}`}>
                    <div className="menu-title" onClick={handleSubMenuTitleClick}>
                      <FaChevronLeft /> {item.title}
                    </div>
                    {item.subMenuItems && item.subMenuItems.map((subItem, subIndex) => (
                      <div key={subIndex} className="item">
                        <a href={subItem.link} className='font-semibold'>{subItem.title}</a>
                        {subItem.subMenuItems && subItem.subMenuItems.map((subSubItem, subSubIndex) => (
                          <div key={subSubIndex} className="sub-item">
                            <a href={subSubItem.link}>{subSubItem.title}</a>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}

          </ul>
        </div>

      </nav>

      <div className={`mobileDropdownWrapper max-h-[auto] flex flex-col justify-between bg-red-200 w-full fixed left-0 right-0 top-[55px] bottom-0 overflow-hidden transition-all duration-[0.4s] ${isSidebarOpen ? 'h-[calc(100vh_-55px)] pt-8' : 'h-0 p-0'}`}>

        {/* Outer */}
        <div className="mobileDropdownMenus h-full px-5 pb-12 w-full">

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

        {/* inner */}
        {menuItems.map((menuItem, index) => (
          menuItem.showSubMenu && (
            <div className={`serviceListWrapper  ${activeSubMenu - 1 === index ? 'right-0' : '-right-full'} absolute top-0 p-4 bg-white flex flex-col w-full h-full transition-all duration-[0.4s] ease-in-out`} key={index} >
              <p className="mobileTabGroupNameContainerStyle p-[16px] mb-5 flex gap-2 items-center border-b border-gray-200 cursor-pointer" onClick={handleSubMenuTitleClick}>
                <FaChevronLeft />
                {menuItem.title}
              </p>

              {
                menuItem.showSubMenu && (
                  <div className='overflow-y-auto overflow-x-hidden px-[16px]'>

                    {menuItem.subMenuItems && menuItem.subMenuItems.map((subItem, subIndex) => (
                      <div className="groupStyle min-w-[210px]" key={subIndex}>
                        {subItem.showSubMenu ? (
                          <>
                            <p className="groupNameStyle px-4 py-2 font-medium">{subItem.title}</p>
                            <div className="linksPaddingStyle px-4 py-2">
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
  )
}

export default LetTemp;

/**
 * {
                menuItem.showSubMenu && (
                  <div className='overflow-y-auto overflow-x-hidden px-[16px]'>
                    
                    {menuItem.subMenuItems && menuItem.subMenuItems.map((subItem, subIndex) => (
                      <div className="groupStyle min-w-[210px]" key={subIndex}>
                         <p className={`groupNameStyle px-4 py-2 ${subItem.showSubMenu ? 'font-medium' : ''} `}>{subItem.title}</p>
                        {subItem.subMenuItems && subItem.subMenuItems.map((subSubItem, subSubIndex) => (
                          <div key={subSubIndex} className="px-4 mb-2">
                            <a href={subSubItem.link}>{subSubItem.title}</a>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )
              } 
 * 
 * {/* <li className="item">
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


    <nav className={`sidebar ${isSidebarOpen ? 'w-full h-[calc(100vh_-_52px)]' : 'h-0 p-0'} left-0 right-0 bottom-0`}>
        <div className={`menu-content ${activeSubMobMenu ? 'submenu-active' : ''}`}>
          <ul className="menu-items">
            {menuItems.map((item, index) => (
              <li key={index} className="item">
                <div className="submenu-item" onClick={() => handleSubMenuClick(item.showSubMenu && index + 1)}>
                  <span>{item.title}</span>
                  {item.showSubMenu && <FaChevronRight />}
                </div>
                {item.showSubMenu && (
                  <div className={`menu-items submenu ${activeSubMobMenu - 1 === index ? 'show-submenu' : ''}`}>
                    <div className="menu-title" onClick={() => setActiveSubMobMenu(null)}>
                      <FaChevronLeft /> {item.title}
                    </div>
                    <div className='overflow-y-auto'>
                    {item.subMenuItems && item.subMenuItems.map((subItem, subIndex) => (
                      <div key={subIndex} className="item">
                        <a href={subItem.link} className='font-semibold'>{subItem.title}</a>
                        {subItem.subMenuItems && subItem.subMenuItems.map((subSubItem, subSubIndex) => (
                          <div key={subSubIndex} className="sub-item">
                            <a href={subSubItem.link}>{subSubItem.title}</a>
                          </div>
                        ))}
                      </div>
                    ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
 */




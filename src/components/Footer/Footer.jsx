import logo from '../../assets/EquiSports.webp'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-neutral text-white relative md:bottom-0 -bottom-1'>
            <div className="footer pt-10 py-5 mxw justify-between">
                <aside>
                    <img className='w-[150px] rounded-lg object-contain' src={logo} alt="" />
                    <p className="text-3xl font-bold italic"><span className="text-accent">E</span>qui<span className="text-accent">S</span>ports</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <div className="flex items-center space-x-4">
                            <a href="https://github.com/abdullah107189" target="_blank" rel="noopener noreferrer" className="text-white duration-200 hover:text-[#00cdb7]">
                                <FaGithub className="text-2xl" />
                            </a>
                            <a href="https://www.linkedin.com/in/abdullah107189/" target="_blank" rel="noopener noreferrer" className="text-white duration-200 hover:text-[#00cdb7]">
                                <FaLinkedin className="text-2xl" />
                            </a>
                            <a href="https://www.facebook.com/abdullah.shamem.5" target="_blank" rel="noopener noreferrer" className="text-white duration-200 hover:text-[#00cdb7]">
                                <FaFacebook className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="footer footer-center p-5">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Abdullah107189</p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;
import { Link } from 'react-router-dom';
import pageNotFount from '../../assets/page-404.svg'
const PageNotFound = () => {
    return (
        <div className='min-h-screen relative'>
            <img src={pageNotFount} className='w-full object-contain' alt="" />
            <Link to={'/'}><button className='absolute btn btn-accent top-4 left-4'>Home</button></Link>
        </div>
    );
};

export default PageNotFound;
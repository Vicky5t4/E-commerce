import logo from '../assest/logo_site.png';
import './style.css';

const Logo = ({ w,h }) => {
  return (
    <>
    <div className='site-logo' >
      <img src={logo} alt="Logo" width={w} height={h} />  
    </div>
    </>
  );
};



export default Logo;

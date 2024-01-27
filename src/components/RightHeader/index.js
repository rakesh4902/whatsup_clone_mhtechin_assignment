
import './index.css'
import { IoVideocam } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

import './index.css'

const RightHeader=()=>{
    return(
    <div className='rightHeader-container'>
        <div className='profile-container'>
        <img src="https://i.pinimg.com/736x/6b/08/76/6b087603862a127ea290e0a47ed932bf.jpg" className='profile-logo' alt='userProfileUrl' />
        <p>Rakesh</p>
        </div>
        <div className='search-menu-call-container'>
            <IoVideocam size={25} className='icons'/>
            <IoMdSearch size={25} className='icons'/>
            <IoMdMenu size={25} className='icons'/>
        </div>  
    </div>
    )
}
export default RightHeader
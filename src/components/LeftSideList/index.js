import { Link } from "react-router-dom";
import './index.css'

const LeftSideList = (props) => {
  const { eachContact } = props;
  const { id, userProfileUrl, name, time } = eachContact;

  return (
    <li>
      <Link to={`/chat/${id}`} className="link-chat"> 
        <div className='list-profiles'>
          <div className='name-container'>
            <img src={userProfileUrl} className='userProfileUrl' alt='userProfileUrl'/>
            <p className='name'>{name}</p>
          </div>
          <p className='time'>{time}</p>
        </div>
        <hr className="hr-line"/>
      </Link>
    </li>
  );
};

export default LeftSideList;

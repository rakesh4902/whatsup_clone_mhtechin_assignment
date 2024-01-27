
import LeftSideContacts from '../LeftSideContacts';
import RightHeader from '../RightHeader';
import RightFooter from '../RightFooter';

import './index.css'

const ChatComponent = () => {
  return (
    <div className="chat-left-side">
    <LeftSideContacts />
    <div className="chat-right-side">
    <RightHeader />
    <div className="chat-view">   
    </div>
    <RightFooter />
    </div>
    </div>
  );
};

export default ChatComponent;

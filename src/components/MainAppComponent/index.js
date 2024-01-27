import LeftSideContacts from '../LeftSideContacts'
import RightSideChat from '../RightSideChat'

import './index.css';


const MainAppComponent=()=>(
  <>
    <div className='app-container'>
    <LeftSideContacts/>
    <RightSideChat />
    </div>
  </>
)

export default MainAppComponent;
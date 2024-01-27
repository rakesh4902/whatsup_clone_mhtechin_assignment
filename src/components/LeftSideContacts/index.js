import {Component} from 'react'
import { IoSearch } from "react-icons/io5";


import LeftSideList from '../LeftSideList';
import Header from '../Header'
import './index.css'

const contactList = [
    {
      id: 1,
      name: 'Alice',
      userProfileUrl: 'https://bit.ly/4b9b3jb',
      time: '12:00'
    },
    {
      id: 2,
      name: 'Bob',
      userProfileUrl: 'https://bit.ly/3Hz5P2x',
      time: '12:23'
    },
    {
      id: 3,
      name: 'Charlie',
      userProfileUrl: 'https://th.bing.com/th/id/OIP.lA8zhfFpcUqEqM1UpbKojQHaHG?rs=1&pid=ImgDetMain',
      time: '11:50'
    },
    {
      id: 4,
      name: 'David',
      userProfileUrl: 'https://th.bing.com/th/id/OIP.f9WDNDM6y23SF1ngEC7tJAHaGB?&rs=1&pid=ImgDetMain',
      time: '01:38'
    },
    {
      id: 5,
      name: 'Eva',
      userProfileUrl: 'https://bit.ly/4b9b3jb',
      time: '12:00'
    },
    {
      id: 6,
      name: 'Frank',
      userProfileUrl: 'https://bit.ly/3Hz5P2x',
      time: '12:23'
    },
    {
      id: 7,
      name: 'Grace',
      userProfileUrl: 'https://th.bing.com/th/id/OIP.lA8zhfFpcUqEqM1UpbKojQHaHG?rs=1&pid=ImgDetMain',
      time: '11:50'
    },
    {
      id: 8,
      name: 'Henry',
      userProfileUrl: 'https://th.bing.com/th/id/OIP.f9WDNDM6y23SF1ngEC7tJAHaGB?&rs=1&pid=ImgDetMain',
      time: '01:38'
    },
    {
      id: 9,
      name: 'Ivy',
      userProfileUrl: 'https://bit.ly/4b9b3jb',
      time: '12:00'
    },
    {
      id: 10,
      name: 'Jack',
      userProfileUrl: 'https://bit.ly/3Hz5P2x',
      time: '12:23'
    },
    {
      id: 11,
      name: 'Kelly',
      userProfileUrl: 'https://th.bing.com/th/id/OIP.lA8zhfFpcUqEqM1UpbKojQHaHG?rs=1&pid=ImgDetMain',
      time: '11:50'
    },
    {
      id: 12,
      name: 'Liam',
      userProfileUrl: 'https://th.bing.com/th/id/OIP.f9WDNDM6y23SF1ngEC7tJAHaGB?&rs=1&pid=ImgDetMain',
      time: '01:38'
    }
  ];
  

  

class LeftSideContacts extends Component{

    state={
        searchInput:'',
    }
    
    onChangeSearch=(event)=>{
        this.setState({searchInput:event.target.value})
    }
    render(){
        const {searchInput}=this.state
    return(
        <div className='left-side-container'>
            <Header/>
            <div className='search-container'>
                <IoSearch size='20'/>
            <input type='search' className='search-input' placeholder='search or start new start' onChange={this.onChangeSearch} value={searchInput}/>
            </div>
            <hr className="line"/>
            <div className="contacts-profiles-list">
                <ul  type='none'  >
                {contactList.map(eachDetails=>(
                    <LeftSideList key={eachDetails.id} eachContact={eachDetails}/>
                    ))}
                </ul>
            </div>
        </div>
        )
    }
}

export default LeftSideContacts
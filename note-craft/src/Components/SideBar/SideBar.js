import {React,useState} from 'react'
import plusIcon from '../../assets/32360.png'
import './SideBar.css'
function SideBar(props) {
  const color = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];
  const [listOpen, setListOpen] = useState(false);

  return (
    <div className='sidebar'>
      <img src={plusIcon} alt='Add' onClick={()=>setListOpen(!listOpen)}/>
      <ul className={`sidebar_list ${listOpen?"sidebar_list_active":""}`}>

        {
          color.map((item, index) => <li key={index} className='sidebar_list_item' style={{ backgroundColor: item }} onClick={()=> props.addNote(item)} />)
        }
      </ul>
    </div>
  )
}

export default SideBar

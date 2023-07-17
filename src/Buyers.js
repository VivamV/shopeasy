import {React} from 'react'
import {useState} from 'react'
import "./buyer.css"
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth,db,storage } from "./firebase";
import P17 from './p17.png'
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
function Buyers() {
    const history=useHistory();
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid lightgrey',
        borderRadius:'8px',
        boxShadow: 24,
        p: 4,
      };
    const [{ basket, user }, dispatch] = useStateValue();
    const [deccription, setdeccription] = useState('')
    const [price, setprice] = useState('');
    const [openn, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [image,setimage]=useState(null);
    const addproduct=()=>{
    const imgref= storage.ref(`images/${image.name}`).put(image);
    imgref.on(

"state_changed",(snapshot)=>{

},
(error)=>{
    console.log(error.message);
},
()=>{
storage.
ref('images')
.child(image.name)
.getDownloadURL().then(url=>{
    db
        .collection('users')
        .doc(user?.uid)
        .collection('products')
        .add({
           des:deccription,
           price:price,
           image:url,
        }).then(

           alert('success')
        );


})
}

        )
        
        
setprice(0);
setdeccription('');
history.push('/buyers');


    }
    const handleAuthenticaton = () => {             
      if (user) {
        auth.signOut();
      }
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClosee = () => {
        setAnchorEl(null);
      };
      const handleOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
  
  return (<div className="header">
  <Link to="/">
    <img
      className="header__logo"
      src={P17}
    />
  </Link>


  <div className="header__nav">
    <Link id="lin" to={!user && '/login'}>
      <div onClick={handleAuthenticaton} className="header__option">
        <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email }</span>
        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
      </div>
    </Link>

    
      <div className="header__option">
        <span className="header__optionLineOne addp" onClick={handleOpen}>Add a Product</span>
        
      </div>
   
    {/*
    product add:-
    image
    price
    des
    rating--- to user dega 
    */}

    <Link to= "/" className="header__option">
      <HomeIcon/>
    </Link>

          <Modal
       open={openn}
       onClose={handleClose}
       aria-labelledby="parent-modal-title"
       aria-describedby="parent-modal-description"
     >
       <Box sx={{ ...style, width: 400 }}>
      <div className="form">

 
        <label className='addp_label'>Enter description</label>
        <input className='addp_input' placeholder='Enter Desc of the product' onChange={(e)=>{setdeccription(e.target.value)}}/>
        <label className='addp_label'>Enter price</label>
        <input className='addp_input' placeholder='Enter Price ' onChange={(e)=>{setprice(e.target.value)}}/>
        <input className='addp_input'  type='file' onChange={(e)=>{setimage(e.target.files[0])}}/>
         
        <button  className='btn' onClick={addproduct}  >ADD</button>

      </div>
       </Box>
     </Modal>
    
 
  </div>
</div>
  )
}

export default Buyers
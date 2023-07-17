import React from 'react'
import logo from './prime2.jpg';
import Icon from '@mui/material/Icon'; 
import "./home.css";
import Product from './Product';
import P1 from './p1.png'
import { auth,db,storage } from "./firebase";
import p4 from './p4.jpg'
import p5 from './p5.jpg'
import P6 from './p6.jpg'
import P7 from './p7.jpg'
import P8 from './p8.jpg'
import P10 from './p10.jpg'
import P15 from './p15.jpg'
import { useStateValue } from "./StateProvider";
import {useState,useEffect} from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Imgslide from "./imgslide";
function Home() {
  const [products, setproducts] = useState([])
  const [{ basket, user }, dispatch] = useStateValue();
  useEffect(() => {
  if(user){
    db
    .collection('users')
    .doc(user?.uid)
    .collection('products')
    .orderBy('price', 'desc')
    .onSnapshot(snapshot => (
        setproducts(snapshot.docs.map(doc => ({
            pid: doc.id,
            data: doc.data()
        })))
    ))
      }

  }, [])


    return (
    <div className='home'>
     <div className='homecointainer'>
     <Imgslide/>
           
     
        </div>
        <div>
            <div className='homerow1'>
             { products.map((pro)=> (
            
                <Product 
                id={12321341}
                title={pro.data.des}
                price={pro.data.price}
                image={pro.data.image}
                rating={4}/>
              ))}
                 <Product
                 id="12321349"
                 title="The Complete C++ reference"
                 price={299}
                 image={P1}
                 rating={4}
                 />
                 <Product
                 id="12321342"
                  title="boAt Wave Call Smart Watch, Smart Talk with Advanced Dedicated Bluetooth Calling Chip, 1.69” HD Display with 550 NITS"
                  price={4999}
                  image={p4}
                  rating={5}
                 />
                <Product
                id="12321343"
                 title="U.S. Polo ASSN. Men's Regular Shirt"
                 price={1399}
                 image={p5}
                 rating={3}
                />
                 <Product
                 id="12321344"
                 title="Rectangular sunglasses for Women"
                 price={1099}
                 image={P8}
                 rating={3}
                />    
            </div>
            <div className='homerow1'>
            <Product
            id="12321345"
                 title="iphone 13"
                 price={74999}
                 image={P6}
                 rating={3}
                />
                 <Product
                 id="12321346"
                 title="samsung 125cm(50inches) ultra smart HD tv"
                 price={43999}
                 image={P7}
                 rating={3}
                />
                <Product
                id="12321347"
                 title="mi high performance hanpicked laptop"
                 price={49999}
                 image={P10}
                 rating={4}
                />
            </div>
            <div className='homerow1'>

           

            </div>
        </div>
        
    </div>
  )
}

export default Home   
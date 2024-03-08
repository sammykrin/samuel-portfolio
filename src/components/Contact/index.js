import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
      const t = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      return () => {
        clearTimeout(t);}
    },[],);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_fhqrta5',
                'template_btnq9t8',
                refForm.current,
                'xCF8_9Il8kQRZ-nCg'
            )
            .then(
                () => {
                    alert('Message Successfully Sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message, please try again')
                }
            )
    }
    
    return(
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                     letterClass={letterClass}
                     strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e' ]}
                     idx={15}
                    />
                </h1>
                <p>
                    I am interested in freelance opportunites - especially large projects.
                    However, if you have other request or question about Autos or Gadget's
                    don't hesitate to contact me using below form either. 
                </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                              <li className='half'>
                                <input type="text" name="name_id" placeholder="Name" required />
                              </li>  
                              <li className='half'>
                                <input type="email" name="email_id" placeholder="Email" required />
                              </li>  
                              <li>
                                <input placeholder="Subject" type="text" name="subject_id" required />
                              </li>  
                              <li>
                                  <textarea placeholder="Message" name="message" required></textarea>
                              </li>
                              <li>
                                  <input type="submit" className='flat-button' value="SEND"/>
                              </li>
                            </ul>    
                        </form>    
                    </div>
            </div>
            <div className='info-map'>
                Samuel Olamilehin,
                <br />
                Nigeria,
                <br />
                Peace Villa House, 210262 <br />
                <span>olamilehinsamuelolamide@gmail.com</span>
            </div>
            <div className ='map-wrap'>
                <MapContainer center={[8.1442896, 4.2296280]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[8.1442896, 4.2296280]}>
                    <Popup>Samuel lives here, come over for a cup of coffee :)</Popup>

                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="pacman" />
    </>
    )
}

export default Contact
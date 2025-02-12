// import React from 'react'
// import './Maps.css'

// export default function Maps() {
//   return (
//     <div>
//       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15244.92659488263!2d80.81581016234617!3d17.207548085710187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a36826584cf6427%3A0xdbc9d386f6fc9fb6!2sSathupally%2C%20Telangana%20507303!5e0!3m2!1sen!2sin!4v1731490306719!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

//     </div>
//   )
// }
import React from "react";
import './Maps.css'
const DynamicMap = ({mapUrl}) => {
  // Predefined full URLs for each location
 
  return (
    <div className="mapheight">
      <iframe className="mapfit"
        src={mapUrl}
        width="600"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default DynamicMap;
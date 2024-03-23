import { useEffect, useState } from "react";
import axios from "axios";

const UserInfo = () => {
    const [userIp,setUserIp]=useState("");
    const [latitude,setLatitude]=useState("");
    const[longitude,setLongitude]=useState("")
    const[userCity,setUserCity]=useState("");
    const [userCountry,setUserCountry]=useState("");
    const [userCountryCode,setUserCountryCode]=useState("");
    const [region,setRegion]=useState("");
    const[timeZone,setTimeZone]=useState("");
    



    useEffect(() => {
      const fetchIp = async () => {
        try {
          const res = await axios.get('https://api.seeip.org/geoip');
          setUserIp(res.data.ip);
          setUserCity(res.data.city);
          setUserCountry(res.data.country);
          setUserCountryCode(res.data.country_code);
          setLatitude(res.data.latitude);
          setLongitude(res.data.longitude);
          setRegion(res.data.region);
          setTimeZone(res.data.timezone);
        } catch (error) {
          console.error('Error fetching IP:', error);
        }
      };

      fetchIp();
    }, []);
    
      if(!localStorage.getItem("userId")){
       
        const generateUserId = () => { 
          const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          let userId = '';
    
          for (let i = 0; i < 20; i++) {
            userId += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
          }


          if ( userId && userIp && latitude && longitude && userCity && userCountry  && region && timeZone) {
            console.log("User Data:", { userId, userIp, latitude, longitude, userCity, userCountry, region, timeZone });
          }


          setTimeout(() => {
            localStorage.setItem('userId', userId);
            console.log("cpmp")
          }, 3000); 
         
          return userId;
         
        };
        generateUserId();
       
      }
      else{
      

      }
      const userId = localStorage.getItem('userId') 

    return {
      userId,
       userIp,
      latitude,
      longitude,
      userCity,
      userCountry,
      userCountryCode,
      region,
      timeZone
    };
}

export default UserInfo;

import React, { useEffect, useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {

  const [formData, setFormData] = useState({
    contact_name: '',
    contact_email: '',
    contact_message: '',
  });

  const [isMessageSent, setIsMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/contact', formData)
      .then(response => {
        // Handle the success response here
        console.log(response.data);
        setIsMessageSent(true);
        setErrorMessage('');
        setFormData({
          contact_name: '',
          contact_email: '',
          contact_message: '',
        });
      })
      .catch(error => {
        // Handle any error that occurs during the request
        console.error(error);
        setIsMessageSent(false);
        setErrorMessage('Error: Failed to send message.');
      });
  };


  const [settingData, setSettingData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/setting'); // Replace with your API endpoint
      setSettingData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (settingData.length === 0) {
    return <div>Loading...</div>;
  }

  const data = settingData[0];

  return (
    <div className='h-full w-full' id='Contact'>
      <div className='w-[90%] mx-auto h-full flex flex-col gap-20'>
        <div>
          <p className='text-5xl font-bold text-center mt-10'>CONTACT US</p>
        </div>
        <div className='grid lg:grid-cols-2 gap-10'>
          <div className='left map flex'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5274715208275!2d38.78711680000001!3d9.015552499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8521d873d4b7%3A0x4da6e1c76b44dabd!2zQXlhdCBSZWFsIEVzdGF0ZSB8IOGKoOGLq-GJtSDhiKrhiI0g4Yql4Yi14Ym04Ym1!5e0!3m2!1sen!2set!4v1694037264460!5m2!1sen!2set"
           className='flex-shrink-0'
           width="100%" 
           height="660" 
           style={{border:0}} 
           allowfullscreen="" 
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade">
          </iframe>     
          </div>
          <div className='right bg-gray-100 flex flex-col'>
            <div className='right-top flex flex-col p-5'>

            {isMessageSent && <p className='text-green-500'>Message sent successfully!</p>}

              <form onClick={handleSubmit} action="" className='flex flex-col font-semibold text-xl gap-2'>
                <label htmlFor="name">Name</label>
                <input placeholder='Menase Debel' className='font-normal outline-none' type="text" name='contact_name' value={formData.contact} onChange={handleChange}/>
                <label htmlFor="email">Email</label>
                <input placeholder='menasedebel7@gmail.com' className='font-normal outline-none' type="email" name='contact_email' value={formData.contact_email} onChange={handleChange}/>
                <label htmlFor="message">Message</label>
                <textarea className='outline-none' name="contact_message" id="" cols="30" rows="4" value={formData.contact_message} onChange={handleChange}></textarea>
                <div className='btn cursor-pointer text-white h-10 w-60 mt-2 bg-[#FF7A00] text-center py-1 rounded-lg'>
                  <input type="submit" value='Send Message' />
                </div>
              </form>
            </div>
            <div className='right-buttom flex justify-around p-5 text-center'>
              <div className='bg-white rounded-2xl h-[200px] w-40 flex flex-col text-2xl flex-wrap justify-center items-center'>
                <div className='flex gap-3 justify-center'>
                 <p className='font-bold'>Phone</p>
                 <FaPhone className='text-[#FF7A00]' />
                </div>
                <p>{data.Company_phone}</p>
              </div>

              <div className='bg-white rounded-2xl h-[200px] w-40 flex flex-col text-2xl flex-wrap justify-center items-center'>
                <div className='flex gap-3 justify-center'>
                 <p className='font-bold'>Email</p>
                 <FaEnvelope className='text-[#FF7A00]' />
                </div>
                <p>{data.Company_email}</p>
              </div>

              <div className='bg-white rounded-2xl h-[200px] w-40 flex flex-col text-2xl flex-wrap justify-center items-center'>
                <div className='flex gap-3 justify-center'>
                 <p className='font-bold'>Address</p>
                 <FaMapMarker className='text-[#FF7A00]' />
                </div>
                <p>{data.Company_address}</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

import React from 'react'

//
import CV from '../../assets/Professional Minimalist CV Resume (6).pdf'
//นำเข้า ไฟล์เพื่อนำมาโหลด
const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'> Dowload CV </a>
        <a href="#contact" className='btn btn-primary'> Let's talk CV </a>
        
    </div>
  )
}

export default CTA
import React from 'react'
import {Link} from 'react-router-dom';
export default function NotFound() {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Təəsüfki daxil etdiyiniz məlumata uyğun nəticə tapılmadı,zəhmət olmasa kodun düz olduğundan əmin olub <Link to="/">yenidən daxil edin</Link></h1>
    </div>
  )
}

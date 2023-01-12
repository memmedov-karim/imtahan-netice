import React from 'react';
import './result.css';
import {FaCheck,FaCircle,FaPlus,FaSpinner} from 'react-icons/fa';
import { useParams } from 'react-router-dom';
export default function Student(props) {
    const id  = useParams().id
    const StudentResult = props.result?.find(obj=>obj["UTİS kodu"] === id)
    const User = {
        "Ad":StudentResult===undefined?<FaSpinner />:StudentResult["Ad"],
        "Soyad":StudentResult===undefined?<FaSpinner />:StudentResult["Soyad"],
        "Ata adı":StudentResult===undefined?<FaSpinner />:StudentResult["Ata adı"],
        "Rayon Kodu":StudentResult===undefined?<FaSpinner />:StudentResult["Rayon Kodu"],
        "Məktəb Kodu":StudentResult===undefined?<FaSpinner />:StudentResult["Məktəb Kodu"],
        "Sinif":StudentResult===undefined?<FaSpinner />:StudentResult.Sinif,
        "Bölmə":StudentResult===undefined?<FaSpinner />:StudentResult.Bölmə,
        "Cins":StudentResult===undefined?<FaSpinner />:StudentResult.Cins,
        "Tədris dili Cavabınız":StudentResult===undefined?<FaSpinner />:StudentResult["Tədris dili Cavabınız"],
        "Tədris dili Doğru cavablar":StudentResult===undefined?<FaSpinner />:StudentResult["Tədris dili Doğru cavablar"],
        "Tədris dili Status":StudentResult===undefined?<FaSpinner />:StudentResult["Tədris dili Status"],
        "Tədris dili Sual sayı":StudentResult===undefined?<FaSpinner />:StudentResult["Tədris dili Sual sayı"],
        "Tədris dili Doğru sayı":StudentResult===undefined?<FaSpinner />:StudentResult["Tədris dili Doğru sayı"],
        "Tədris dili Səhv sayı":StudentResult===undefined?<FaSpinner />:StudentResult["Tədris dili Səhv sayı"],
        "Tədris dili Xalis sayı":StudentResult===undefined?<FaSpinner />:StudentResult["Tədris dili Xalis sayı"],
        "Tədris dili Xalis faizi":StudentResult===undefined?<FaSpinner />:StudentResult["Tədris dili Xalis faizi"],
        "Tədris dili Nisbi bal":StudentResult===undefined?<FaSpinner />:StudentResult["Tədris dili Nisbi bal"],
        "Riyaziyyat Cavabınız":StudentResult===undefined?<FaSpinner />:StudentResult["Riyaziyyat Cavabınız"],
        "Riyaziyyat Doğru cavablar":StudentResult===undefined?<FaSpinner />:StudentResult["Riyaziyyat Doğru cavablar"],
        "Riyaziyyat Status":StudentResult===undefined?<FaSpinner />:StudentResult["Riyaziyyat Status"],
        "Riyaziyyat Sual sayı":StudentResult===undefined?<FaSpinner />:StudentResult["Riyaziyyat Sual sayı"],
        "Riyaziyyat Doğru sayı":StudentResult===undefined?<FaSpinner />:StudentResult["Riyaziyyat Doğru sayı"],
        "Riyaziyyat Səhv sayı":StudentResult===undefined?<FaSpinner />:StudentResult["Riyaziyyat Səhv sayı"],
        "Riyaziyyat Xalis sayı":StudentResult===undefined?<FaSpinner />:StudentResult["Riyaziyyat Xalis sayı"],
        "Riyaziyyat Xalis faizi":StudentResult===undefined?<FaSpinner />:StudentResult["Riyaziyyat Xalis faizi"],
        "Riyaziyyat Nisbi bal":StudentResult===undefined?<FaSpinner />:StudentResult["Riyaziyyat Nisbi bal"],
        "CƏMİ SUAL SAYI":StudentResult===undefined?<FaSpinner />:StudentResult["CƏMİ SUAL SAYI"],
        "CƏMİ DOĞRU":StudentResult===undefined?<FaSpinner />:StudentResult["CƏMİ DOĞRU"],
        "CƏMİ SƏHV":StudentResult===undefined?<FaSpinner />:StudentResult["CƏMİ SƏHV"],
        "CƏMİ XALİS":StudentResult===undefined?<FaSpinner />:StudentResult["CƏMİ XALİS"],
        "CƏMİ XALİS faizi":StudentResult===undefined?<FaSpinner />:StudentResult["CƏMİ XALİS faizi"],
        "BAL":StudentResult===undefined?<FaSpinner />:StudentResult["BAL"],
    }
  return (
    <div id="testId" className='conten_of_result'>
        <h1 className='head head_of_result'>Liseylərə Qəbul Sınağı Nəticə Vərəqi </h1>
        <div className='all_info'>
            <div className='box private_info'>
                <h1 className='head head_of_info'>Şəxsi məlumatlar</h1>
                <ul className='private_info_list'>
                    <li><strong>Ad: </strong>{User.Ad}</li>
                    <li><strong>Soyad: </strong>{User.Soyad}</li>
                    <li><strong>Ata adı: </strong>{User["Ata adı"]}</li>
                </ul>
            </div>
            <div className='box public_info'>
                <h1 className='head head_of_public'>Məlumat</h1>
                <ul className='private_info_list'>
                    <li><strong>Rayon: </strong>{User['Rayon Kodu']}</li>
                    <li><strong>Sinif: </strong>{User.Sinif}</li>
                    <li><strong>Cins: </strong>{User.Cins}</li>
                </ul>
                
            </div>
            <div className='box mark_info'>
                <h1 className='head head_of_resultt'>Nəticə</h1>
                
                <h2>Xalis% - <i>{User["CƏMİ XALİS faizi"]}</i></h2>
                <hr/>
                
                
            </div>
        </div>

        <h1 className='head head_of_result_plus_minus'>Düz,Səhv və Boş</h1>

        <div className='result_with_plus_minsu'>

            <div className='az_box'>
                <div className='head_of_az'><strong>Azərbaycan dili</strong></div>
                <div className="results_box">
                  <pre><strong><FaCheck /></strong>{User["Tədris dili Doğru cavablar"]}</pre>
                  <pre><strong><FaCircle /></strong>{User["Tədris dili Cavabınız"]}</pre>
                  <pre><strong><FaPlus /></strong>{User["Tədris dili Status"]}</pre>
                </div>
            </div>
            <hr />
            <div className='math_box'>
                <div className='head_of_az'><strong>Riyaziyyat</strong></div>
                <div className="results_box">
                  <pre><strong><FaCheck /></strong>{User["Riyaziyyat Doğru cavablar"]}</pre>
                  <pre><strong><FaCircle /></strong>{User["Riyaziyyat Cavabınız"]}</pre>
                  <pre><strong><FaPlus /></strong>{User["Riyaziyyat Status"]}</pre>
                </div>
            </div>
        </div>
        <table id='tableId' class="table table-bordered">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Azərbaycan</th>
      <th scope="col">Riyaziyyat</th>
      <th scope="col">Cəm</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Sual Sayı</th>
      <td>{User["Tədris dili Sual sayı"]}</td>
      <td>{User["Tədris dili Sual sayı"]}</td>
      <td>{User["CƏMİ SUAL SAYI"]}</td>
    </tr>
    <tr>
      <th scope="row">Doğru</th>
      <td>{User["Tədris dili Doğru sayı"]}</td>
      <td>{User["Riyaziyyat Doğru sayı"]}</td>
      <td>{User["CƏMİ DOĞRU"]}</td>
    </tr>
    <tr>
      <th scope="row">Səhv</th>
      <td >{User["Tədris dili Səhv sayı"]}</td>
      <td>{User["Riyaziyyat Səhv sayı"]}</td>
      <td>{User["CƏMİ SƏHV"]}</td>
    </tr>
    <tr>
      <th scope="row">Xalis%</th>
      <td >{User["Tədris dili Xalis sayı"]}</td>
      <td>{User["Riyaziyyat Xalis sayı"]}</td>
      <td>{User["CƏMİ XALİS"]}</td>
    </tr>
    <tr>
      <th scope="row">Bal</th>
      <td style={{textAlign:"center"}} colSpan="3" >{User["BAL"]}</td>
      
    </tr>
  </tbody>
</table>
        
    </div>
  )
}

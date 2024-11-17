import React from 'react'
import Path from '../../component/path'

export default function Projects() {
  return (
    <div class="container size-full">
      <br/>
      <div class="grid mobile:grid-cols-1 gap-2  laptop:grid-cols-4 gap-4 flex">
        <p class="mobile:text-xl tablet:text-2xl laptop:text-3xl">
          Online Payment App
        </p>
        <ul class="list-inside list-none col-span-2">
          <li class="text-left">
           Developed a secure online payment service similar to PhonePe using Node.js and MySQL, 
           implementing robust authentication and encryption protocols to ensure transaction safety and 
           protect sensitive user data. {" "}
          </li>
          <br></br>
          <li class="text-left">
           Engineered a scalable backend architecture that efficiently handles high transaction volumes, utilizing 
           RESTful APIs for seamless integration with frontend applications and optimizing database queries in 
           MySQL to enhance performance and response times. 
          </li>
          <br></br>
        </ul>
        <a class="mobile:text-xl tablet:text-2xl laptop:text-3xl text-[#2865AC] underline underline-offset-2" href="https://github.com/abhayrsr/pagaar">Github</a>
      </div>
        <br></br>
        <div class="grid mobile:grid-cols-1 gap-2  laptop:grid-cols-4 gap-4 flex">
          <p class="mobile:text-xl tablet:text-2xl laptop:text-3xl">Food Delivery App</p>
          <ul class="list-inside list-none col-span-2">
            <li class="text-left">
            Developed a feature-rich food delivery application akin to Zomato using React, JavaScript, and 
            Bootstrap, implementing intuitive user interfaces that facilitate seamless browsing, ordering, and 
            payment processes, enhancing the overall user experience. 
            </li>
            <br />
            <li class="text-left">
            Integrated RESTful APIs to connect with backend services for real-time order tracking, restaurant 
            listings, and user reviews, while utilizing responsive design principles to ensure optimal functionality 
            across various devices and screen sizes.
            </li>
          </ul>
          <a class="mobile:text-xl tablet:text-2xl laptop:text-3xl text-[#2865AC] underline underline-offset-2" href="https://github.com/abhayrsr/haste2taste">Github</a>
          <br />
        </div>
        <br />
        <Path />
      </div>
  )
}

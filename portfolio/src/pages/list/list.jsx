import React from "react"
import Path from "../../component/path"

export default function List(){

    return(
        <div class="absolute md:container md:mx-auto size-full">
         <p class="grid grid-cols-4 gap-4 flex">
          <span class="mr-8">experience.txt </span>
          <span class="mr-8">skills.txt </span>
          <span class="mr-8">projects.txt </span>
          <span class="mr-8">contact.txt </span>
         </p>
         <br />
         <Path />
        </div>
    )
}
import React from "react"
import Path from "../../component/path"

export default function List(){

    return(
        <div class="absolute container size-full">
         <p class="absolute left 0 inline-grid grid-cols-4">
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
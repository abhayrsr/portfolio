import React from "react"
import Path from "../../component/path"

export default function List(){

    return(
        <div class="absolute md:container md:mx-auto size-full">
         <div class="inline-grid mobile:grid-cols-2 gap-2 laptop:grid-cols-4 gap-4">
          <p class="mr-8">experience.txt </p>
          <p class="mr-8">skills.txt </p>
          <p class="mr-8">projects.txt </p>
          <p class="mr-8">contact.txt </p>
         </div>
         <br />
         <Path />
        </div>
    )
}
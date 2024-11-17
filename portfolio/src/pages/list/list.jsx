import React from "react"
import Path from "../../component/path"

export default function List(){

    return(
        <div class="md:container md:mx-auto size-full">
         <div class="absolute left 0 grid mobile:absolute left 0 grid-cols-4 gap-4 laptop:grid-cols-4 gap-4">
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
import React from "react"
import Path from "../../component/path"

export default function List(){

    return(
        <div class="md:container md:mx-auto size-full">
         <div class="absolute left 0 grid mobile:grid-cols-6 gap-2 laptop:grid-cols-4 gap-4">
          <p>experience.txt </p>
          <p>skills.txt </p>
          <p>projects.txt </p>
          <p>contact.txt </p>
         </div>
         <br />
         <Path />
        </div>
    )
}
import React from "react";
import Path from "../../component/path";

export default function Experience() {
  return (
    <div class="container size-full">
      <br />
      <div class="grid mobile:grid-cols-1 gap-2  laptop:grid-cols-4 gap-4 flex">
        <p class="mobile:text-xl tablet:text-2xl laptop:text-3xl">
          System Engineer, <br></br>Infosys <br></br>{" "}
        </p>
        <ul class="list-inside list-none col-span-2 mobile:text-center">
          <li class="mobile:text-center laptop:text-left">
            Engineered and deployed a responsive support portal for Daimler’s
            team using React and Node.js, enhancing user experience and
            resulting in a 25% improvement in issue resolution time.{" "}
          </li>
          <br></br>
          <li class="mobile:text-center laptop:text-left">
            Designed and implemented RESTful APIs with Node.js, leading to a 30%
            increase in data processing efficiency between the frontend and
            backend.
          </li>
          <br></br>
          <li class="mobile:text-center laptop:text-left">
            Integrated Azure services, optimizing cloud resource utilization and
            achieving a 20% reduction in application latency
          </li>
          <br></br>
          <li class="mobile:text-center laptop:text-left">
            Led the migration of a legacy system to a modern architecture using
            MySQL, reducing data retrieval times by 35% and improving overall
            system performance.
          </li>
          <br></br>
          <li class="mobile:text-center laptop:text-left">
            Adopted Test-Driven Development (TDD) practices to ensure the
            delivery of robust JavaScript code, resulting in a 20% decrease in
            post-deployment defects.
          </li>
          <br></br>
        </ul>
        <p class="mobile:text-xl tablet:text-2xl laptop:text-3xl">Jan 2021 – May 2022</p>
      </div>
        <br></br>
        <div class="grid mobile:grid-cols-1 gap-2  laptop:grid-cols-4 gap-4 flex">
          <p class="mobile:text-xl tablet:text-2xl laptop:text-3xl">Copywriter & Personal Development,  <br></br> Freelancer</p>
          <ul class="list-inside list-none col-span-2 mobile:text-center">
            <li class="mobile:text-center laptop:text-left">
              Successfully crafted high-conversion landing and product pages for
              clients, achieving over a 40% increase in user sign-ups and sales,
              while also engaging in defense exam preparation that instilled
              values of persistence and resilience, and enrolling in a web
              development BootCamp to refresh and enhance my coding skills.
            </li>
          </ul>
          <p class="mobile:text-xl tablet:text-2xl laptop:text-3xl">Jun 2022 - present</p>
        </div>
        <br/>
        <Path />
      </div>
  );
}

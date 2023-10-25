import React from "react"
import { Heading } from "../common/Heading"
import { experience } from "../data/dummydata"

export const Experience = () => {
  return (
    <>
      <section className='experience'>
        <div className='container'>
          <Heading title='Experience' />
          <div className='content grid3'>
            {experience.map((item) => (
              <div className='box' data-aos='flip-left'>
                <i>{item.icon}</i>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

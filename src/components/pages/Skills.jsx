import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import React, { useState } from "react"
import { Heading } from "../common/Heading"
import { skills } from "../data/dummydata"

const allCategory = ["Berikut", ...new Set(skills.map((item) => item.category))]
export const Skills = () => {
  const [list, setLists] = useState(skills)
  const [category, setCategory] = useState(allCategory)
  console.log(setCategory)

  const filterItems = (category) => {
    const newItems = skills.filter((item) => item.category === category)
    setLists(newItems)
    if (category === "Berikut") {
      setLists(skills)
      return
    }
  }

  return (
    <>
      <article>
        <div className='container'>
          <Heading title='Skills' />
          <div className='catButton'>
            {category.map((category) => (
              <button className='primaryBtn' onClick={() => filterItems(category)} data-aos='zoom-out-down'>
                {category}
              </button>
            ))}
          </div>
          <div className='content grid3'>
            {list.map((item) => (
              <div className='box' data-aos='fade-up'>
                <div className='img'>
                  <img src={item.cover} alt='' />
                </div>
                <div className='overlay'>
                  <h3>{item.title}</h3>
                  <span>{item.name}</span>
                  <VisibilityOutlinedIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  )
}

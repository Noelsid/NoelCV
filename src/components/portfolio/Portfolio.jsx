import React from 'react'
import "./portfolio.css"
import Img1 from '../../assets/Img1.jpg'
import Img2 from '../../assets/Img2.jpg'
import Img3 from '../../assets/Img3.jpg'
import Img4 from '../../assets/Img4.jpg'


const data = [
  {
    id: 1,
    image: Img1,
    title: 'Barista Website Demo',
    github: 'https://github.com/Noelsid/Coffee-Web-Demo',
    demo: 'https://noelsid.github.io/Coffee-Web-Demo/',
  },
  {
    id: 2,
    image: Img2,
    title: 'Grocery Website Demo',
    github: 'https://github.com/Noelsid/Grocery-Web',
    demo: 'https://noelsid.github.io/Grocery-Web/',
  },
  {
    id: 3,
    image: Img3,
    title: 'Travel Booking Website Demo',
    github: 'https://github.com/Noelsid/Coffee-Web-Demo',
    demo: 'https://noelsid.github.io/Coffee-Web-Demo/',
  },
  {
    id: 4,
    image: Img4,
    title: 'Website Demo',
    github: 'https://github.com/Noelsid/Coffee-Web-Demo',
    demo: 'https://noelsid.github.io/Coffee-Web-Demo/',
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio
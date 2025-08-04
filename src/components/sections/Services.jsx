import React from 'react'
import styles from './service.module.css';
const Services = () => {
  return (
    <main>
      <ul id={styles.cards}>
        <li className={styles.card} id={styles.card1}>
          <div className={`${styles.cardContent} bg-white dark:bg-black`}>
            <div className='px-4 md:px-8'>
              <h2 className='text-2xl md:text-4xl text-black dark:text-white'>Streamline Order Management</h2>
              <p className='text-lg md:text-xl mt-4 text-neutral-700 dark:text-neutral-400'>Never lose track of an order again. All your customer orders—from dine-in to takeout—are organized and easily accessible in one place. Speed up service and keep your kitchen running smoothly.</p>
            </div>
            <figure>
              <img src="/assets/service1.png" className='rounded-xl w-full h-auto object-cover' alt="card-one"/>
            </figure>
          </div>
        </li>

        <li className={styles.card} id={styles.card2}>
            <div className={`${styles.cardContent} bg-white dark:bg-black`}>
            <figure>
              <img src="/assets/service2.png" className='rounded-xl w-full h-auto object-cover' alt="card two"/>
            </figure>
            <div className='px-4 md:px-8'>
              <h2 className='text-2xl md:text-4xl text-black dark:text-white'>Optimize Table Reservations</h2>
              <p className='text-lg md:text-xl mt-4 text-neutral-700 dark:text-neutral-400'>Maximize seating efficiency with real-time table tracking and reservations. Reduce wait times and ensure no table sits empty during peak hours, improving customer experience and turnover.</p>
            </div>
          </div>
        </li>

        <li className={styles.card} id={styles.card3}>
   <div className={`${styles.cardContent} bg-white dark:bg-black`}>
            <div className='px-4 md:px-8'>
              <h2 className='text-2xl md:text-4xl text-black dark:text-white'>Effortless Menu Management</h2>
              <p className='text-lg md:text-xl mt-4 text-neutral-700 dark:text-neutral-400'>Easily add, edit, or remove items from your menu on the go. Highlight specials, update prices, and keep everything in sync across all platforms, so your staff and customers always see the latest offerings.</p>
            </div>
            <figure>
              <img src="/assets/service3.png" className='rounded-xl w-full h-auto object-cover' alt="card three"/>
            </figure>
          </div>
        </li>
      </ul>
    </main>
  )
}

export default Services

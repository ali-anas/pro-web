import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Laptop.module.css';

export default function Laptop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(()=> {
      setShow(true);
    }, 1000);
  }, [])

  return (
    <div className='relative -top-12 mt-6 h-32 w-48 flex flex-col flex-nowrap'>
      {show && <>
        <div className={clsx("relative flex justify-center flex-nowrap items-center h-28 w-full bg-slate-400 rounded-lg", styles.openCloseMac)}>
          <div className="relative h-8 w-8 rounded-full bg-white"></div>
        </div>
        <div className={clsx("relative h-2 mt-1 w-full bg-slate-400 rounded-lg", styles.laptop)}></div>
      </>}
    </div>
    // : <div className='relative -top-6 md:-top-12 h-32 w-48 md:h-64 md:w-96 bg-transparent'></div>
  )
}
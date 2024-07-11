"use client";

import style from './page.module.css';
import Image from 'next/image';
import { checkout } from '@/checkout';

const Page = () => {
  const handleCheckout = () => {
    checkout({
      lineItems: [{ price: "price_1PbGyfG65rFYH6qRzmAwa6qa", quantity: 1 }]
    });
  };

  return (
    <main className={style.main}>
      <div>
        <Image src="/vercel.svg" alt="vercel" width={300} height={200} />
      </div>
      <button className={style.button} onClick={handleCheckout}>
        Buy Vercel Company 
        logo
      </button>
    </main>
  );
};

export default Page;

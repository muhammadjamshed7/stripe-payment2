"use client";

import style from './page.module.css';
import Image from 'next/image';
import { checkout } from '@/checkout';

const Page = () => {
  const handleCheckout = () => {
    checkout({
      lineItems: [{ price: "price_1PbN4LG65rFYH6qRDOSzIGKl", quantity: 1 }]
    });
  };

  return (
    <main className={style.main}>
      <div>
        <Image src="/vercel.svg" alt="vercel" width={300} height={200} />
      </div>
      <button className={style.button} onClick={handleCheckout}>
        Buy Vercel Company 
       Logo From Jamshed
      </button>
    </main>
  );
};

export default Page;

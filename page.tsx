import Link from 'next/link';
import React from 'react';


const Page = () => {
  return (
    <div className='text-center'>
      Hello
      <Link href="/link"><button className='mt-4 p-2 bg-blue-500 text-white rounded' >Click Me</button></Link>
    </div>
  );
}

export default Page;

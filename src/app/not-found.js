// app/not-found.js
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='text-black' style={{ textAlign: 'center', marginTop: '200px' }}>
      <h1 className='text-4xl font-bold mb-3'>404 - Page Not Found</h1>
      <p className='mb-10'>Sorry, the page you are looking for does not exist.</p>
      <Link className='text-amber-950 underline' href="/">
        Go to the homepage
      </Link>
    </div>
  );
}

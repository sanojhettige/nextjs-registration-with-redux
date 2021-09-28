import Head from 'next/head'
import BaseLayout from '../components/Layout/Base';

export default function Home() {
  return (
    <BaseLayout>
      <p className="mt-3 text-2xl">
        NextJs React Authentication App using Redux and Tailwindcss

      </p>
    </BaseLayout>
  )
}

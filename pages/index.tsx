import React from 'react'
import { GetServerSideProps } from 'next'

type Props = {
	data: {
		book: {
			title: string;
			author: string;
		}
	}
}

function Home({ data }: Props) {
	console.log(data);
	return (<div>Hello Next with TypeScript! by { data.book.title }</div>);
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/hello`)
	const data = await res.json()
	console.log('@result is: ', data);

  // Pass data to the page via props
  return { props: { data } }
}

export default Home;
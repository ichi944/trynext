import React from 'react'
import useSWR from 'swr'

const getUser = async (id: string) =>
  (await fetch('http://localhost:3000/api/hello2')).json()

const Raki: React.FC = () => {
  const { data } = useSWR('mykey', getUser)
  console.log('@raki', data)
  return data ? (
    <>
      <div>Loaded!!!</div>
    </>
  ) : (
    <div>Loading...</div>
  )
}

export default Raki;


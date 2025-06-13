type Time = {
  now: string
}

async function getTime() {
  const res = await fetch("http://localhost:3001/api/time/no")
  const data: Time = await res.json()
  return data
}

async function getTimeRevalidate() {
  const res = await fetch("http://localhost:3001/api/time/no-revalidate-5", {
    next: {
      revalidate: 5,
    },
  })
  const data: Time = await res.json()
  return data
}

export default async function Test() {
  const [data, data2] = await Promise.all([getTime(), getTimeRevalidate()])

  console.log(data)
  return (
    <div>
      <h1>Time</h1>

      <h2>getTime()</h2>
      <p>{data.now}</p>

      <h2>getTimeRevalidate()</h2>
      <p>{data2.now}</p>
    </div>
  )
}

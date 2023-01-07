const getResource = async (url) => {
  const res = await fetch(url)

  //для отлова ошибок не статусов 200
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
  }
  const body = await res.json()
  return body
}

getResource('https://swapi.dev/api/people/1/')
  .then((body) => {
    console.log(body)
  })
  // для отлова сетевой ошибки, когда нет нета например
  .catch((err) => {
    console.error('Not fetch network not vailable', err)
  })

//аналогичный запрос fetch
// fetch('https://swapi.dev/api/people/1/')
//   .then((res) => {
//     console.log(res)
//     return res.json()
//   })
//   .then((body) => {
//     console.log(body)
//   })

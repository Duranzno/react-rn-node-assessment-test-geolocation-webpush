import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'
import Swal from 'sweetalert2'
import { SosafeData } from 'models/data.model'
import { strings } from 'constant'
// import { Button } from 'components/Common'

// const schema = yup.object().shape({
//   name: yup.string().required(),
//   filters: yup.array().required(),
//   scores: yup.array().required(),
//   location: yup.object().required(),
// })
// enum Steps {
//   FILTER = 0,
//   LINKERT,
//   MAP,
// }

export const Form = () => {
  // const { register, handleSubmit, errors, setValue } = useForm<SosafeData>({
  //   resolver: yupResolver(schema),
  // })
  // const [page, setPage] = useState(Steps.FILTER)

  // const onPrevious = () => {
  //   setPage(page - 1)
  // }
  // const onNext = () => {
  //   setPage(page + 1)
  // }

  const onSubmit = async (values: SosafeData) => {
    try {
      console.log(':TODO SEND PUSHER values', values)
      Swal.fire({
        title: 'Good job!',
        text: 'You clicked the button!',
        icon: 'success',
      })
    } catch (e) {
      console.log(e)
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool',
      })
    }
  }
  // const shouldSubmit = page === Steps.MAP
  return (
    <div>
      <h2>{strings.title}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <Content page={page} setValue={setValue} /> */}
      </form>
    </div>
  )
}
// const Content: React.FC<{
//   page: number
//   setValue: Function
// }> = ({ page setValue }) => {
//   switch (page) {
//     default:
//       return <></>
//   }
// }

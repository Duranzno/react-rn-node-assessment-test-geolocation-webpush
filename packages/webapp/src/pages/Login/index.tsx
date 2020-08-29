import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'
import Button from 'components/Button'
import Swal from 'sweetalert2'

type FormData = {
  email: string
  password: string
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

const LoginPage = () => {
  const history = useHistory()
  const { register, handleSubmit, errors } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onLogin = async (values: FormData) => {
    try {
      if (values.email === 'ak@yopmail.com' && values.password === '1234') {
        Swal.fire({
          title: 'Good job!',
          text: 'You clicked the button!',
          icon: 'success',
        })
        history.push('/')
      } else {
        throw new Error('Email or password is incorrect')
      }
    } catch (e) {
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool',
      })
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onLogin)}>
        <label>Email</label>
        <input name="email" ref={register} />
        <p>{errors.email?.message}</p>

        <label>Password</label>
        <input name="password" ref={register} />
        <p>{errors.password?.message}</p>

        <Button type="submit" title="Login" />
      </form>
    </div>
  )
}

export default LoginPage

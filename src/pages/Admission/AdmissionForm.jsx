/* eslint-disable react/prop-types */
import axios from 'axios'
import { useForm } from 'react-hook-form'

const AdmissionForm = ({ college }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    console.log(college)
    console.log(data)

    axios
      .post('https://end-game-server-two.vercel.app/submisson', data)
      .then(data => {
        if (data.data.insertedId) {
          console.log(data)
          reset()
        }
      })
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='grid items-center justify-center grid-cols-2 gap-4 p-4 mt-20 border border-red-500 shadow-2xl card'
      >
        <input
          type='text'
          name='name'
          {...register('name', { required: true })}
          className=' input input-bordered join-item'
          placeholder='Name'
        />
        {errors.name && <span className='text-red-600'>Name is required</span>}

        <input
          type='text'
          name='subject'
          {...register('subject', { required: true })}
          className=' input input-bordered join-item'
          placeholder='Subject'
        />
        {errors.subject && (
          <span className='text-red-600'>Subject is required</span>
        )}

        <input
          type='email'
          name='email'
          {...register('email', { required: true })}
          className=' input input-bordered join-item'
          placeholder='Email'
        />
        {errors.email && (
          <span className='text-red-600'>Email is required</span>
        )}
        <input
          type='text'
          name='phone'
          {...register('phone', { required: true })}
          className=' input input-bordered join-item'
          placeholder='Phone'
        />
        {errors.phone && (
          <span className='text-red-600'>Phone is required</span>
        )}
        <input
          type='text'
          name='address'
          {...register('address', { required: true })}
          className=' input input-bordered join-item'
          placeholder='Address'
        />
        {errors.address && (
          <span className='text-red-600'>Address is required</span>
        )}
        <input
          type='text'
          name='image'
          {...register('image', { required: true })}
          className=' input input-bordered join-item'
          placeholder='Image Url'
        />
        {errors.image && (
          <span className='text-red-600'>Image Url is required</span>
        )}
        <div>
          <label htmlFor='date'>Pick Your Date of Birth</label>
          <input
            type='date'
            name='date'
            {...register('date', { required: true })}
            className=' input input-bordered join-item'
            placeholder='Date of Birth'
          />
          {errors.date && (
            <span className='text-red-600'>Date is required</span>
          )}
        </div>
        <input type='submit' className='btn btn-primary' value='Submit' />
      </form>
    </div>
  )
}

export default AdmissionForm

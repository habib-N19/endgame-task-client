import { useForm } from 'react-hook-form'

const UpdateProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    // console.log(college)
    console.log(data)
    // TODO:how to structure the data to send to server
    // axios.post('http://localhost:5000/classes', data).then(data => {
    //   if (data.data.insertedId) {
    //     reset()
    //     // Swal.fire({
    //     //   position: 'top-end',
    //     //   icon: 'success',
    //     //   title: 'Class added for review',
    //     //   showConfirmButton: false,
    //     //   timer: 1500
    //     // })
    //   }
    // })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='grid items-center justify-center grid-cols-2 gap-4 p-4 mt-6 card'
    >
      <input
        type='text'
        name='name'
        {...register('name', { required: true })}
        className=' input input-bordered join-item'
        placeholder='Name'
      />
      <input
        type='email'
        name='email'
        {...register('email', { required: true })}
        className=' input input-bordered join-item'
        placeholder='Email'
      />
      {errors.email && <span className='text-red-600'>Email is required</span>}

      <input
        type='text'
        name='university'
        {...register('subject', { required: false })}
        className=' input input-bordered join-item'
        placeholder='University Name'
      />

      <input
        type='text'
        name='address'
        {...register('address', { required: false })}
        className=' input input-bordered join-item'
        placeholder='Address'
      />
      <input
        type='submit'
        className='col-span-2 text-white btn btn-primary'
        value='Save'
      />
    </form>
  )
}

export default UpdateProfile

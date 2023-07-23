// import CustomScroll from 'react-custom-scroll'
const Research = () => {
  const researchPapers = [
    { _id: 1, title: 'Research Paper 1', link: 'https://example.com/paper1' },
    { _id: 1, title: 'Research Paper 1', link: 'https://example.com/paper1' },
    { _id: 2, title: 'Research Paper 2', link: 'https://example.com/paper2' },
    { _id: 1, title: 'Research Paper 1', link: 'https://example.com/paper1' },
    { _id: 1, title: 'Research Paper 1', link: 'https://example.com/paper1' },
    { _id: 2, title: 'Research Paper 2', link: 'https://example.com/paper2' },
    { _id: 1, title: 'Research Paper 1', link: 'https://example.com/paper1' },
    { _id: 1, title: 'Research Paper 1', link: 'https://example.com/paper1' },
    { _id: 2, title: 'Research Paper 2', link: 'https://example.com/paper2' },
    { _id: 1, title: 'Research Paper 1', link: 'https://example.com/paper1' },
    { _id: 1, title: 'Research Paper 1', link: 'https://example.com/paper1' },
    { _id: 2, title: 'Research Paper 2', link: 'https://example.com/paper2' },
    { _id: 3, title: 'Research Paper 3', link: 'https://example.com/paper3' }
    // Add more research papers as needed
  ]
  return (
    <section className='w-9/12 h-screen mx-auto mt-12'>
      <h2 className='my-4 text-3xl font-bold text-center'>
        Some Research Paper From Colleges
      </h2>

      <div className='overflow-x-auto border-4 h-96'>
        <table className='table table-pin-rows'>
          <tbody>
            {researchPapers.map(rp => (
              <tr key={rp._id}>
                <td>{rp._id}</td>
                <td>{rp.title}</td>
                <td>{rp.link}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Research

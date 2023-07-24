import CardTemplate from '../../components/CardTemplate'
import useColleges from '../../hooks/useColleges'

const Colleges = () => {
  const [colleges] = useColleges()
  return (
    <div className='grid grid-cols-1 p-4 antialiased text-gray-900 bg-gray-400 md:gap-6 md:grid-cols-3 wrapper'>
      {colleges.map(college => (
        <CardTemplate key={college._id} college={college}></CardTemplate>
      ))}
    </div>
  )
}

export default Colleges

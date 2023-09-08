import './Title.css'

const Title = ({title, eventColor}) => {
  return (
    <div>
        <h1 className='title' style={{color: eventColor}}>{title}</h1>
    </div>
  )
}

export default Title
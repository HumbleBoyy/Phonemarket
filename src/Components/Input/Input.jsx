const Input = ({type, className, placeholder, name}) => {
  return (
    <>
      <input type={type} placeholder={placeholder} name={name} className={className}/>
    </>
  )
}

export default Input

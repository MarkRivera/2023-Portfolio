
const Section = ({ number, title, children }: {
  number: string,
  title: string,
  children: React.ReactNode
}) => {
  return (
    <>
      <header>
        <h2 className="text-3xl font-semibold ml-16">
          <span className='text-lg text-secondary mr-2'>{number}.</span>
          {title}
        </h2>
      </header>

      {children}
    </>
  )
}

export default Section
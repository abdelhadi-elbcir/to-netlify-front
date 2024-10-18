

const AnnoucementDescription = ({ description }) => {

  return (<div className="md:w-2/3">
    <span className="m-2">
      <h3 className='text-3xl font-bold text-primary mb-8'>Description</h3>
    </span>
    <p>
      {description}
    </p>
  </div>)
}

export default AnnoucementDescription;
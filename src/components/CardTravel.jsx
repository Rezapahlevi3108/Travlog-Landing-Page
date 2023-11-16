
function CardTravel({number, title}) {
    return (
      <div className="p-8 border rounded-[32px]">
          <h1 className="text-4xl font-bold text-[#FF5722] text-center">{number}</h1>
          <p className="text-lg text-[#222831] text-center">{title}</p>
      </div>
    )
  }
  
  export default CardTravel
  
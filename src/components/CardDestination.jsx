
function CardDestination({destinationImg, title, price, city, rating}) {
    return (
      <div className="bg-white rounded-[32px] drop-shadow-2xl w-full">
          <div><img src={destinationImg} className="w-full" /></div>
          <div className="p-8">
              <div className="flex flex-col lg:flex-row items-start gap-2">
                  <h1 className="text-2xl font-bold text-[#222831] leading-tight order-2 lg:order-1">{title}</h1>
                  <span className="text-2xl font-bold text-[#F85E9F] order-1 lg:order-2">{price}</span>
              </div>
              <p className="text-lg text-[#222831] mt-4">{city}</p>
              <div className="flex items-center mt-8">
                  <span className="text-2xl font-bold text-[#FF5722] font-circular">{rating}</span>
                  <img src="/src/assets/img/star.svg" className="ms-2 mb-1" />
              </div>
          </div>
      </div>
    )
  }
  
  export default CardDestination
  
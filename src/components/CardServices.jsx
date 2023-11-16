
function CardServices({servicesImg, title, text}) {
  return (
    <div className="flex justify-center gap-16 flex-col items-center sm:w-[350px] w-full rounded-[32px] border lg:p-16 p-10 bg-white drop-shadow-xl-shadow">
        <div><img src={servicesImg} /></div>
        <div className="flex flex-col gap-8">
            <h2 className="font-bold text-[#222831] text-lg text-center">{title}</h2>
            <p className="font-inter text-lg leading-relaxed text-[#222831] opacity-50 text-center">{text}</p>
        </div>
    </div>
  )
}

export default CardServices

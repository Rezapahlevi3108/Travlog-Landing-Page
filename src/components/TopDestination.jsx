import CardDestination from "./CardDestination"

function TopDestination() {
  return (
      <div className="container mx-auto mt-24 px-4">
          <div className="flex flex-col gap-4">
              <span className="text-[#F85E9F] font-bold leading-tight text-center lg:text-start text-base sm:text-2xl">TOP DESTINATION</span>
              <h1 className="font-bold sm:text-5xl text-3xl leading-tight text-[#222831] text-center lg:text-start">Explore top destination</h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 w-auto mt-16">
              <CardDestination destinationImg="/src/assets/img/img-destination-1.png" title="Paradise Beach, Bantayan Island" price="$550.16" city="Rome, Italy" rating="4.8" />
              <CardDestination destinationImg="/src/assets/img/img-destination-2.png" title="Ocean with full of Colors" price="$20.99" city="Maldives" rating="4.5" />
              <CardDestination destinationImg="/src/assets/img/img-destination-3.png" title="Mountain View, Above the cloud" price="$150.99" city="United Arab Emeries" rating="5.0" />
          </div>
      </div>
  )
}

export default TopDestination

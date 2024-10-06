import ClientNav from './ClientNav';
import SetDataClient from '../SetDataClient';

function ClientHeader() {

  return (
    <div className='relative flex flex-col gap-y-3 bg-image w-full h-[500px] px-6 py-0 rounded-b-lg' style={{
        backgroundImage: `url(/images/Burundi-Sustainable-Travel-Guide.jpg)`
      }}>
        <ClientNav />
        <p className="text-start w-[500px] text-card/75 text-xl">
        Découvrez le Burundi, un joyau caché d&apos;Afrique de l&apos;Est. Entre ses paysages époustouflants, ses plages au bord du lac Tanganyika, et sa riche culture, le Burundi offre une expérience authentique et inoubliable. Réservez dès maintenant pour explorer des trésors naturels et vivre des aventures uniques!
        </p>
        <SetDataClient className='absolute w-[80%] right-[50%] left-[50%] translate-x-[-50%] bottom-0 rounded-b-none'/>
    </div>
  )
}

export default ClientHeader

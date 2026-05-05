import protocolImage from 'figma:asset/35db89be5aa9630b93b6539a139d6fccfbe95de2.png';

export function ProtocolSection() {
  return (
    <section className="py-10 sm:py-12 md:py-16 px-3 sm:px-4 bg-[#09141F]">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center">
          <img 
            src={protocolImage} 
            alt="Protocolo Abdômen de Ferro - Método avançado e exclusivo para definição abdominal"
            className="w-full max-w-3xl rounded-md sm:rounded-lg shadow-xl sm:shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
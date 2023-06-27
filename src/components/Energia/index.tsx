export const Energia = () => {
  return (
    <section
      className="flex flex-row-reverse bg-energia"
      style={{ backgroundColor: "#ededed", overflowX: "hidden" }}
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="bg-animado px-3 lg:px-3"></div>
      <div className="p-6 lg:p-20 2xl:px-52 2xl:py-20 flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="flex flex-col p-6 gap-5 lg:items-center lg:text-center bg-teste lg:p-5 lg:gap-5 xl:p-10 2xl:gap-10 shadow-lg">
          <h1 className="text-4xl xl:text-5xl 2xl:text-6xl texto-animado 2xl:h-20 capitalize">
            Cogeração Energia
          </h1>
          <p className="text-lg 2xl:text-xl text-white 2xl:w-8/12">
            A cogeração de energia encontra-se implantada na unidade de Itaúna,
            com capacidade de 3 MW, permitindo a autossuficiência energética da
            unidade. A cogeração produz eletricidade a partir da queima da
            biomassa (cavaco de eucalipto) por um sistema de turbinas e
            geradores. O excedente gerado é disponibilizado pela Patense para o
            SIN (Sistema Interligado Nacional).
          </p>
        </div>
      </div>
    </section>
  );
};

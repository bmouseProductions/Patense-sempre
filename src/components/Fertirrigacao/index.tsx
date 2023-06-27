import Irrigation from "../../assets/img/irrigation-system.webp";

export const Fertirrigacao = () => {
  return (
    <section
      className="flex flex-row-reverse lg:flex-row"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <div className="bg-animado px-3 lg:px-3"></div>
      <div className="p-6 flex flex-col items-center lg:flex-row lg:p-20 2xl:px-52 2xl:py-20 lg:justify-between lg:gap-5 xl:gap-10">
        <div className="flex flex-col flex-1 lg:gap-5 2xl:gap-10">
          <h1 className="text-4xl xl:text-5xl 2xl:text-6xl 2xl:h-20 texto-animado">
            Fertirrigação
          </h1>
          <p className="text-lg 2xl:text-xl text-white ">
            A fertirrigação aproveita integral e racionalmente o efluente
            tratado proveniente do sistema produtivo e das áreas de apoio das
            unidades da Patense localizadas em Patos de Minas, Itaúna, Tanguá e
            Paranacity.
          </p>
          <p className="text-lg 2xl:text-xl text-white">
            Através de um manejo adequado e devidamente monitorado, o efluente
            tratado, rico em nutrientes necessários para o solo, é aspergido em
            área de pastagem, promovendo a absorção dos nutrientes pelo capim
            vaqueiro e a disponibilidade de pasto para o gado durante todo o
            ano.
          </p>
        </div>
        <div className="flex-1 md:p-10 lg:p-0">
          <img src={Irrigation} alt="" className="rounded-xl shadow-2xl "></img>
        </div>
      </div>
    </section>
  );
};

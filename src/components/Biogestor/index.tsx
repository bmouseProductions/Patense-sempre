export const Biogestor = () => {
  return (
    <section
      className="flex flex-row-reverse bg-biogestor"
      style={{ backgroundColor: "#ededed", width: "100%", overflowX: "hidden" }}
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="bg-animado px-3 lg:px-3"></div>
      <div className="p-6 lg:p-20 2xl:px-52 2xl:py-20 flex flex-row-reverse justify-between">
        <div className="flex flex-col p-5 gap-5 lg:text-center lg:items-center lg:gap-5 2xl:gap-10 bg-teste lg:p-5 xl:p-10">
          <h1 className="text-4xl xl:text-6xl  texto-animado xl:h-20 capitalize">
            Biogestor{" "}
          </h1>
          <p className="text-lg 2xl:text-xl text-white 2xl:w-8/12">
            Para o tratamento do efluente líquido, ou seja, o esgoto gerado em
            seu processo produtivo, na descarga dos caminhões e na lavagem de
            veículos, a Patense utiliza nas unidades de Patos de Minas, Tanguá e
            Adamantina (em fase de implantação) biodigestores. Esse sistema de
            tratamento promove a degradação biológica da matéria orgânica,
            gerando ao final do processo dois produtos: o biofertilizante e o
            biogás. O biofertilizante segue para lagoas aeradas para a remoção
            de nutrientes presentes no efluente e posteriormente é reutilizado
            em áreas de fertirrigação. O biogás está em fase de viabilidade para
            diversos usos nas unidades.
          </p>
        </div>
      </div>
    </section>
  );
};

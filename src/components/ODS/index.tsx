import seteods from "../../assets/img/7ods.png";
import oitoods from "../../assets/img/8ods.png";
import noveods from "../../assets/img/9ods.png";
import dozeods from "../../assets/img/12ods.png";
import trezeods from "../../assets/img/13ods.png";
import quatorzeods from "../../assets/img/14ods.png";
import quinzeods from "../../assets/img/15ods.png";

export const ODS = () => {
  return (
    <section
      className="flex flex-row-reverse  bg-agricultura "
      data-aos="fade-up"
      data-aos-duration="2000"
      /* style={{ backgroundColor: "#EDEDED" }} */
    >
      <div className="bg-animado "></div>
      <div className="px-6 py-6 gap-10 lg:gap-0  lg:p-20 2xl:px-52 2xl:py-20 flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between ">
        <div className=" bg-patense flex flex-col gap-10 lg:flex-row-reverse p-3 md:p-5  xl:p-10 lg:gap-0">
          <div className="flex lg:items-end flex-col lg:text-right gap-3 lg:ms-6 2xl:ms-0">
            <h1 className="text-4xl lg:text-4xl 2xl:text-6xl texto-animado">
              <strong>A Patense atende aos ODS da ONU</strong>
            </h1>
            <p className="2xl:text-xl text-white 2xl:w-10/12">
              Com o lançamento da Agenda 2030 pela ONU em 2015, foi elaborado um
              plano de ação para tornar o planeta e as atividades nele
              desenvolvidas mais sustentáveis para a sociedade e para o meio
              ambiente. Foram definidos 17 objetivos e 169 metas.
              <br /> A Patense desenvolve suas atividades, processos e gestão
              utilizando esses objetivos como norteadores. Confira abaixo os ODS
              mais alinhados ao nosso negócio:
            </p>
            <p className="2xl:text-xl text-white 2xl:w-8/12">
              Nossas ações que estão alinhadas com os objetivos ocorrem em todo
              o negócio, desde a coleta dos resíduos utilizados como matéria
              prima (subprodutos provenientes do abate animal), produção de
              produtos essenciais para outras indústrias, implantação de
              mecanismos de produção mais limpa, tratamento de efluentes através
              de processos biológicos com a geração de fertilizantes e biogás,
              cogeração de energia, utilização de energia fotovoltaica, reuso do
              efluente tratado em área de fertirrigação, utilização de
              combustível renovável (cavaco de eucalipto) até o modelo de
              governança corporativa.
            </p>
            <span className="text-white text-lg 2xl:text-xl font-bold">
              {" "}
              Para saber mais sobre cada uma das ODS da ONU,{" "}
              <a
                href="https://odsbrasil.gov.br/"
                className="text-white underline-offset-1"
              >
                clique aqui.
              </a>
            </span>
          </div>
          <div className="lg:me-3 grid grid-cols-2 md:grid-cols-3 md:items-center lg:grid-cols-2  2xl:grid-cols-2 gap-3">
            <img
              src={seteods}
              alt=""
              className="w-[200px] md:w-[200px] lg:w-[600px] rounded-lg"
            ></img>
            <img
              src={oitoods}
              alt=""
              className="w-[200px] md:w-[200px] rounded-lg lg:w-[600px]"
            ></img>
            <img
              src={noveods}
              alt=""
              className="w-[200px] md:w-[200px] rounded-lg lg:w-[600px]"
            ></img>
            <img
              src={dozeods}
              alt=""
              className="w-[200px] md:w-[200px] rounded-lg lg:w-[600px]"
            ></img>
            <img
              src={trezeods}
              alt=""
              className="w-[200px] md:w-[200px] rounded-lg lg:w-[600px]"
            ></img>
            <img
              src={quatorzeods}
              alt=""
              className="w-[200px] md:w-[200px] rounded-lg lg:w-[600px]"
            ></img>
            <img
              src={quinzeods}
              alt=""
              className="w-[200px] md:w-[200px] rounded-lg lg:w-[600px]"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

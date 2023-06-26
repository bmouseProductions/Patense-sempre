import Selo from "../../assets/img/01a-Selo-Verde-Divulgacao-208x300.png";

export const PorQue = () => {
  return (
    <section
      className="flex flex-col items-center gap-14 justify-between "
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <div className="bg-animado w-full py-5"></div>
      <div className="flex flex-col px-6 lg:flex-row items-center justify-center lg:justify-between lg:px-52 lg:py-20">
        <div className="flex gap-4 flex-1 flex-col">
          <h1 className="text-4xl lg:text-6xl texto-animado">
            Por que a Patense é uma empresa com
            <strong className="ms-2 texto-animado">
              Selo Verde de Sustentabilidade?
            </strong>
          </h1>
          <p className="text-xl text-white lg:w-8/12">
            A reciclagem é inerente ao rendering. Como líder no setor, a Patense
            garante destinação sustentável a toneladas de produtos de origem
            animal a cada dia.
          </p>
          <p className="text-xl  text-white lg:w-8/12">
            E vamos além na questão ambiental, nossas ações incluem desde
            estações de tratamento e reflorestamento até conscientização a
            colaboradores e comunidades.
          </p>
          <p className="text-xl  text-white lg:w-8/12">
            Sustentabilidade é mais que compromisso para nós: é a essência desta
            atividade e nossa grande inspiração.
          </p>
        </div>
        <div className="">
          <img src={Selo} alt="" width={240}></img>
        </div>
      </div>
    </section>
  );
};

import Logo from "../../assets/img/Logo-Biofiltro.png";

export const Odores = () => {
  return (
    <section
      className=" flex flex-row-reverse lg:flex-row bg-odores"
      data-aos="fade-right"
      data-aos-duration="2000"
      /* style={{ backgroundColor: "#EDEDED" }} */
    >
      {/*       <div className="bg-animado px-3 lg:px-3"></div> */}
      <div>
        <div className="p-6 lg:px-80 lg:py-20 flex flex-col lg:flex-row items-center lg:justify-between gap-10">
          <div className="flex flex-col gap-5 flex-1 lg:gap-10 z-10">
            <h1
              className="text-4xl lg:text-6xl texto-animado"
              style={{ color: "#F95909" }}
            >
              Controle de <strong>Odores</strong>
            </h1>
            <p
              className="text-xl p-2"
              style={{ color: "#106037", backgroundColor: "#ededed" }}
            >
              A atividade desenvolvida pela Patense possui um odor
              característico. No entanto, todos os gases gerados pela atividade
              são tratados através de aerocondensadores. Esse equipamento
              realiza a condensação dos gases, sendo o efluente gerado destinado
              para a estação de tratamento de efluentes. Já os gases
              incondensáveis são destinados para um sistema composto por
              lavadores de gases e biofiltro, que permitem a redução dos gases
              odoríferos na atmosfera.
            </p>
          </div>
          <div className="flex-1">
            <img src={Logo} alt="" className=""></img>
          </div>
        </div>
      </div>
    </section>
  );
};

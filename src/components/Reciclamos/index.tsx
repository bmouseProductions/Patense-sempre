import Fish from "../../assets/img/FISH-1024x284.webp";
import Chicken from "../../assets/img/CHICKEN-1024x284.webp";
import Pig from "../../assets/img/PIG-1024x284.webp";
import Bovine from "../../assets/img/bovine-1-1024x284.webp";

export const Reciclamos = () => {
  return (
    <section
      className="flex flex-row-reverse lg:flex-row"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <div className="bg-animado px-3 lg:px-3"></div>
      <div className="p-6 lg:p-20 2xl:px-52 2xl:py-20 flex flex-col gap-10 lg:flex-row items-center justify-between ">
        <div className="flex flex-1 flex-col gap-5 xl:gap-10">
          <h1 className="text-4xl xl:text-5xl  2xl:text-6xl texto-animado">
            Reciclamos resíduos de{" "}
            <strong>bovinos, suínos, aves e pescados.</strong>
          </h1>
          <p className="text-lg 2xl:text-xl text-white">
            Coletamos subprodutos animais que antes eram destinados de forma
            incorreta ao meio ambiente e transformamos eles em matérias-primas
            para diversos setores da economia nacional.
          </p>
          <p className="text-lg 2xl:text-xl text-white">
            Reciclamos resíduos de bovinos, suínos, aves e pescados. Coletamos
            subprodutos animais que antes eram destinados de forma incorreta ao
            meio ambiente e transformamos eles em matérias-primas para diversos
            setores da economia nacional. Produzimos farinhas, óleos e gorduras.
            As farinhas, ricas em proteína, cálcio e fósforo, são ingredientes
            indispensáveis na fabricação de rações para a nutrição de animais
            domésticos. Já os óleos e gorduras são insumos nas indústrias de
            higiene, limpeza, cosmética, farmacêutica, de biocombustível e de
            alimentação animal.
          </p>
        </div>
        <div className="grid grid-rows-4 gap-4 justify-end flex-1 ">
          <img
            src={Bovine}
            alt="heart"
            width={500}
            className="shadow-2xl"
          ></img>
          <img src={Pig} alt="heart" width={500} className="shadow-2xl"></img>
          <img
            src={Chicken}
            alt="heart"
            width={500}
            className="shadow-2xl"
          ></img>
          <img src={Fish} alt="heart" width={500} className="shadow-2xl"></img>
        </div>
      </div>
    </section>
  );
};

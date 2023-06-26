import Instagram from "../../assets/img/instagram.svg";
import Youtube from "../../assets/img/youtube.svg";
import Facebook from "../../assets/img/facebook.svg";
import Linkedin from "../../assets/img/linkedin(1).svg";

export const Empresa = () => {
  return (
    <section
      className="flex "
      style={{ backgroundColor: "#ededed" }}
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <div className="flex flex-col px-10 py-7 gap-5 items-center justify-center lg:px-80 lg:py-14 lg:gap-10">
        <h1 className="text-4xl lg:text-5xl gradient-text text-center">
          Selo Verde de Sustentabilidade. Conheça mais essa empresa com{" "}
          <strong className="">Selo Verde de Sustentabilidade.</strong>
        </h1>
        <button className="bg-animado p-5 lg:px-10 lg:py-5 rounded-xl text-white font-bold shadow-2xl">
          VISITE O NOSSO SITE
        </button>
        <div className="flex flex-col items-center justify-center gap-5 lg:gap-10">
          <h1 className="text-2xl lg:text-4xl capitalize font-semibold text-green-600">
            Nossa redes sociais
          </h1>
          <ul className="flex gap-6 items-center justify-center">
            <li className="flex items-center justify-center">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="" width={40}></img>
              </a>
            </li>
            <li className="flex items-center justify-center">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={Facebook} alt="" width={40}></img>
              </a>
            </li>
            <li className="flex items-center justify-center m-auto text-center">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center m-auto text-center"
              >
                <img src={Youtube} alt="" width={50} className="mt-4"></img>
              </a>
            </li>
            <li className="">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <img src={Linkedin} alt="" width={40} className=""></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

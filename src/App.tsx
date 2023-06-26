import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Banner } from "../src/components/Banner";
import { ODS } from "../src/components/ODS";
import { PorQue } from "../src/components/PorQue";
import { Reciclamos } from "../src/components/Reciclamos";
import { Energia } from "../src/components/Energia";
import { Fertirrigacao } from "../src/components/Fertirrigacao";
import { Odores } from "../src/components/Odores";
import { Biogestor } from "../src/components/Biogestor";
import { Empresa } from "../src/components/Empresa";
import { Footer } from "../src/components/Footer";
import { ButtonUp } from "../src/components/ButtonUp";

export default function Home() {
  useEffect(() => {
    AOS.init({ easing: "ease-out-cubic", once: true, offset: 50 });
  }, []);

  return (
    <div>
      <Banner />
      <PorQue />
      <ODS />
      <Reciclamos />
      <Biogestor />
      <Fertirrigacao />
      <Energia />
      <Odores />
      <Empresa />
      <ButtonUp />
      <Footer />
    </div>
  );
}

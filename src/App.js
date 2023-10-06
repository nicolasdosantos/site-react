import './App.css';
import Header from "./site/Header";
import Banner from "./site/Banner";
import Card from "./site/Card"
import style from "./site/Card.module.css";


function App() {
  return (
      <div className="App container-fluid">
          <Header></Header>
          <Banner></Banner>

          <div className="row">
              <div className="col">
                  <h1>Personagens da historia</h1>
                  <div className="row g-3 py-5">
                      <Card img="/Knight.webp" nome="Knight" desc="O Cavaleiro é o protagonista de Hollow Knight. Um viajante silencioso e de expressão vazia, ele se encontra na entrada de Hallownest sem um objetivo aparente, apenas mais um entre milhares de aventureiros fadados ao fracasso e morte nas ruínas do grande reino."></Card>
                      <Card img="/Hornet.webp" nome="Hornet" desc="Hornet é filha do Rei Pálido e Herrah a Besta, a rainha do Ninho Profundo. Seu nascimento foi fruto de uma barganha para que sua mãe se tornasse uma Sonhadora, e como tal, ela passou pouco tempo com Herrah. Seu pai compartilhado com o Cavaleiro e o resto dos Receptáculos os torna irmãos."></Card>
                      <Card img="/Hollow_Knight.webp" nome="Hollow Knight" desc="O Cavaleiro Vazio é um Receptáculo escolhido pelo Rei Pálido para selar a Radiância e salvar Hallownest da Infecção. Como seus irmãos, ele era um filho do Rei e da Rainha de Hallownest, nascido no Abismo e preenchido com o poder do Vazio."></Card>
                      <Card img="/Radiance.webp" nome="Radiance" desc="Radiance é o verdadeiro boss final de Hollow Knight, sendo inacessível até conseguir algumas coisas: Awoken Dream Nail, passar pelo White Palace e abrir o caminho para o Birth Place, onde encontrará Void Heart."></Card>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;

import Image from "next/image";
import "./page.css"

export default function Home() {
  return (
    <>
      <header>
        <div className="logo"></div>

        <nav>
          <ul>
            <li>Home</li>
            <li>Receitas</li>
            <li>Pesquisar</li>
          </ul>
        </nav>


      </header>
      <main>
        <div className="containerHome">
          <div className="containerTitle">
            <h1 className="titleHome">Receitas na palma <span>da sua mão.</span></h1>
            <button className="buttonHome">Pesquisar agora</button>
          </div>

          <div className="containerPhoto">
            <img
              className="photoMain"
              src="./images/photomain.jpg"
              alt="imagem de temperos"
            />
          </div>
        </div>

        <div className="containerSearch">
          <div className="search">

            <h2>Procure por receitas</h2>
            <p className="subtitle">do jeitinho que você quiser.</p>


            <div className="containerInput">
              <p>Use apenas os filtros que desejar.</p>
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />

              <button className="buttonSearch">Pesquisar por receitas</button>
            </div>

          </div>

          <div className="gallery">

            <div className="item1"></div>
            <div className="item2"></div>
            <div className="item3"></div>

          </div>


        </div>


      </main>
    </>
  );
}

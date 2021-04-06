
class PageHome extends React.Component {
	render() {
	  return ( 
      <main>
        <section class="header_home">
          <div class="header_home_content">
            <div class="container_logo">
              <img class="logo" src="./icones/logo.png" />
            </div>
            <h1>SINDICATO DOS MOTORISTAS</h1>
            <h2>
              Força na luta pelos Direitos da Classe.
              <br />Qualidade de vida aos nossos associados.
            </h2>
          </div>
        </section>
    
        <section class="section_centralized">
          <div class="div_title_subtitle_text">
            <h1>NOSSA HISTÓRIA</h1>
            <h2>Sindicato dos Condutores de São José do Rio Preto</h2>
            <video class="home_video" preload="none" controls="controls" poster="./img/videoThumb.jpg"><source src="./video.mp4" type="video/mp4" /></video>
            <div class="div_title_subtitle_text_text">
            <p>Em 1941 nasceu o Sindicato dos Condutores Rodoviários de São José do Rio Preto, era modesto, sem muita atuação, possuía 121 filiados.</p>
            <p>Foi através de muita luta e trabalho honesto que a diretoria elevou o Sindicato dos Motoristas de São José do Rio Preto para o topo do Movimento Sindical Brasileiro, ou seja, saímos do último lugar para o 3º maior em estrutura e o 1º em organização, ação e conquistas á família rodoviária.</p>
            <p>Hoje, o Sindicato dos Motoristas de São José do Rio Preto é consagrado pela sua ação sindical, política e é reconhecido internacionalmente em congressos em vários países, entre eles; Venezuela, Cuba, Colômbia, Portugal e Espanha. A entidade também se destaca por fazer um sindicalismo diferente no estado de São Paulo. Por isso a denominação de SINDICALISMO DE SOLUÇÃO.</p>
            <p>Hoje nosso Sindicato oferece vários Benefícios a seus mais de 12.380 filiados e familiares na Sede em São José do Rio Preto, como nas sub sedes em Monte Aprazível e Catanduva e cidades adjacentes onde é abrangida nossa base territorial.</p>
            <p>Médicos de várias especialidades, dentistas, convênios com laboratórios e clínicas, clube de campo, pousada, além dos convênios com clube de Catanduva e Praia Grande, caminhão para mudanças, Sistema de Saúde, Sede Recreativa com piscina, quadra poli esportiva e muito mais,...</p>
            <p>Venha filiar-se e participar de todos os benefícios oferecidos pelo nosso Sindicato.</p>
            </div>
        </div>
        </section>
      </main>
	  )
	}
}
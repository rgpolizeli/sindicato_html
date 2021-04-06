import './css/Navbar.css'
class NavBar extends React.Component {

  constructor(props){
    super(props)
    this.state = {navClass: ""}
  }

  render() {
    return (
      <div>
        <nav class={this.state.navClass} onScroll={this.onDomScroll}>
          <div id="nav_toggle" class="nav_toggle" onclick="openNav()">
            <svg id="nav_toggle_icon" class="nav_toggle_icon">
              <rect y="0" width="20" height="1"></rect>
              <rect y="8" width="20" height="1"></rect>
              <rect y="17" width="20" height="1"></rect>
          </svg>
          </div>
          <ul>
            <li>
            <a href="./">INÍCIO</a>
            </li>
            <li>
            <a href="./beneficios.html">BENEFÍCIOS</a>
            </li>
            <li>
            <a href="./juridico.html">JURÍDICO</a>
            </li>
            <li>
            <a href="./servicos.html">SERVIÇOS</a>
            </li>
            <li>
            <a href="./contatos.html">CONTATOS</a>
            </li>
            <li>
            <a class="button_filiate" href="./filiacao.html">AFILIE-SE</a>
            </li>
          </ul>
        </nav>
    
        <div id="sidenav" class="sidenav">
          <a class="sidenav_a sidenav_closebtn" href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
          <a class="sidenav_a" href="./">INÍCIO</a>
          <a class="sidenav_a" href="./beneficios.html">BENEFÍCIOS</a>
          <a class="sidenav_a" href="./juridico.html">JURÍDICO</a>
          <a class="sidenav_a" href="./servicos.html">SERVIÇOS</a>
          <a class="sidenav_a" href="./contatos.html">CONTATOS</a>
          <a class="sidenav_a" href="./filiacao.html">AFILIE-SE</a>
        </div>
    </div>
      )
  }

  onDomScroll = ev => {
    let scrollY = window.scrollY === undefined ? window.pageYOffset : window.scrollY

    if (scrollY > 0 && this.navClass !== "nav_scrolled") {
      this.setState({navClass: "nav_scrolled"})
    } else{
      if (scrollY === 0 && this.navClass === "nav_scrolled"){
        this.setState({navClass: ""})
      }
    }
  }

}
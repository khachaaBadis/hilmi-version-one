import React from 'react'
import { Link } from 'react-router-dom'

export default function Accueil() {
  return (
      <React.Fragment>
    <div class="navbar-area">
      <div class="main-responsive-nav">
        <div class="container">
          <div class="mobile-nav">
            <Link to="/home" class="logo ">
              <img src="assets/images/logo-3.png" alt="logo" />
            </Link>
            <ul class="menu-sidebar menu-small-device">
              <li>
                <Link to="/Login" >
                  <i class="fas fa-sign-out-alt"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="main-nav">
        <div class="container">
          <nav class="navbar navbar-expand-md navbar-light">
            <Link to="/Login"  class="navbar-brand">
              <img src="assets/images/logo-3.png" alt="logo" />
            </Link>
            <div class="collapse navbar-collapse  mean-menu" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li class="nav-item ">
                  <Link to="*" class="nav-link active">Demos</Link>
                </li>
                <li class="nav-item">
                  <Link to="*" class="nav-link  ">A propos</Link>
                </li>
                <li class="nav-item">
                  <Link to="/rdv_particulier" class="nav-link  ">Contact</Link>
                </li>
              </ul>
              <div class="menu-sidebar">
                <Link to="/login">
                 Se connecter
                </Link>
                <Link to="/register">
                <button class="btn btn-primary btn-sec btn-sec-3">S'inscrire</button>
                </Link>

              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <section className='header-area pt-160'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="header-content-left">
              <h3>Gérez vos RDV facilement !</h3>
              <p>Si vous recherchez ou proposez un service.<br/> Inscrivez-vous et prenez rendez-vous facilement !</p>
              <Link to="/#">
                <button class="btn btn-primary btn-sec btn-sec-4">Commencez ! <i className='fa fa-arrow-right'/></button>
              </Link>
              <div className='box-content-header pt-160'>
                <div className='box-imgs'>
                  <img src="assets/images/team/Images.png" alt="team" />
                </div>
                <div className="statics">
                  <h3>2,291</h3>
                  <p>Clients satisfaits</p>
                </div>
                <div className="statics">
                  <h3>4.8/5</h3>
                  <p><img src="assets/images/team/Stars.png" alt="team" /> Note</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-lg-6">
            <div className='header-content-right'>
              <img className='img-user' src="assets/images/team/Group 101.png" alt="team" />
            </div>

          </div>
        </div>
      </div>
    </section>
    <section className='info-area pb-70'>
      <div className="container">
          <div class="row align-items-center">
            <div class="page-content-top page-content-top-2 pb-45">
                <h4>Laissez- vous guider lors de votre inscription</h4>
            </div>

          </div>
          <div class="Info-container-5  d-flex justify-content-between align-items-center mt-45">
          <div class="Info-container-content-2">
            <img src="assets/images/team/Frame.png" alt="" />
            <div class="content-inner-2">
              <h4>S’inscrire</h4>
              <h5>Choisissez votre type de compte : <br/> <span>particulier</span></h5>
            </div>
          </div>
          <div class="Info-container-content-2">
            <img src="assets/images/team/Frame-2.png" alt="" />
            <div class="content-inner-2">
              <h4>S’inscrire</h4>
              <h5>Complétez votre compte pour optimiser <br/>la mise en relation</h5>
            </div>
          </div>
          <div class="Info-container-content-2">
            <img src="assets/images/team/Frame-3.png" alt="" />
            <div class="content-inner-2">
              <h4>Profitez !</h4>
              <h5>Complétez votre compte pour optimiser <br/>la mise en relation</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='service-area'>
      <div className='container'>
        <div className="row justify-content-center">
        <div className="col-lg-4 text-start">
        <img src="assets/images/team/Group-2.png" alt="" />
        </div>
      <div className="col-lg-6">
            <div className="header-content-left">
              <h3>Besoin d’un service à domicile ?</h3>
              <p>Choisissez parmi les professionnes aux alentours et prenez rendez-vous facilement !</p>

              <div class="Info-container-5  d-flex justify-content-between align-items-center mt-45">
              <div class="Info-container-content-2">
                <div className="round">
                <h2>1</h2>
                </div>
                <div class="content-inner-2">
                  <h4>S’inscrire</h4>
                  <h5>Choisissez votre type de compte : <br/> <span>particulier</span></h5>
                </div>
              </div>
              <div class="Info-container-content-2">
              <div className="round">
                <h2>2</h2>
                </div>
                <div class="content-inner-2">
                  <h4>S’inscrire</h4>
                  <h5>Choisissez votre type de compte : <br/> <span>particulier</span></h5>
                </div>
              </div>
              </div>
              <div class="Info-container-5  d-flex justify-content-between align-items-center mt-45">
              <div class="Info-container-content-2">
              <div className="round">
                <h2>3</h2>
                </div>                
                <div class="content-inner-2">
                  <h4>S’inscrire</h4>
                  <h5>Choisissez votre type de compte : <br/> <span>particulier</span></h5>
                </div>
              </div>
              <div class="Info-container-content-2">
              <div className="round">
                <h2>4</h2>
                </div>                <div class="content-inner-2">
                  <h4>S’inscrire</h4>
                  <h5>Choisissez votre type de compte : <br/> <span>particulier</span></h5>
                </div>
              </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
    <section className='service-area pb-70'>
      <div className='container'>
        <div className="row justify-content-center">
        <div className="col-lg-6">
            <div className="header-content-left">
              <h3>Besoin d’un service à domicile ?</h3>
              <p>Choisissez parmi les professionnes aux alentours et prenez rendez-vous facilement !</p>

              <div class="Info-container-5  d-flex justify-content-between align-items-center mt-45">
              <div class="Info-container-content-2">
                <div className="round">
                <h2>1</h2>
                </div>
                <div class="content-inner-2">
                  <h4>S’inscrire</h4>
                  <h5>Choisissez votre type de compte : <br/> <span>particulier</span></h5>
                </div>
              </div>
              <div class="Info-container-content-2">
              <div className="round">
                <h2>2</h2>
                </div>
                <div class="content-inner-2">
                  <h4>S’inscrire</h4>
                  <h5>Choisissez votre type de compte : <br/> <span>particulier</span></h5>
                </div>
              </div>
              </div>
              <div class="Info-container-5  d-flex justify-content-between align-items-center mt-45">
              <div class="Info-container-content-2">
              <div className="round">
                <h2>3</h2>
                </div>                
                <div class="content-inner-2">
                  <h4>S’inscrire</h4>
                  <h5>Choisissez votre type de compte : <br/> <span>particulier</span></h5>
                </div>
              </div>
              <div class="Info-container-content-2">
              <div className="round">
                <h2>4</h2>
                </div>                <div class="content-inner-2">
                  <h4>S’inscrire</h4>
                  <h5>Choisissez votre type de compte : <br/> <span>particulier</span></h5>
                </div>
              </div>
              </div>

            </div>
          </div>
          <div className="col-lg-6 text-end">
          <img src="assets/images/team/Group-3.png" alt="" />
          </div>
        </div>
      </div>
      

    </section>

    <section className='bg-rdv '>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-start">
          <img src="assets/images/team/phone.png" alt="" />
          </div>
          <div className="col-lg-6 text-start">
            <div className='cont-right'>
            <h3>Accédez facilement à l’historique de vos RDV</h3>
            <p>Gtâce à cela, vous pourrez facilement chatter avec vos </p>

            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer-area mt-45 bg-footer">
      <div class="container">
        <div class="row">
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="#">Mentions légales</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Politique de confidentialité</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Qui sommes-nous ?</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
      </React.Fragment>
  )
}



import Link from 'next/link';
import React from 'react';

const FooterOne = () => {
  return (
    <>
      <div className="footer section-padding"
        style={{ backgroundImage: `url(assets/img/bg/section-2.jpg)`, backgroundSize: "cover", backgroundPosition: "center center" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_footer">
                <Link href="/"><img src="assets/img/logo3.png" alt="image-here" /></Link>
                <p>Quando a SK trabalha a expansão da sua consciência, sua essência volta a brilhar de dentro para fora, iluminando a escuridão do seu inconsciente.</p>
                <div className="social_profile">
                  <ul>
                    <li><a href="#" className="f_facebook"><i className="ti-facebook" title="Facebook"></i></a></li>
                    <li><a href="#" className="f_instagram"><i className="ti-instagram" title="Instagram"></i></a></li>
                    <li><a href="#" className="f_linkedin"><i className="ti-linkedin" title="LinkedIn"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 col-xs-12">

            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_footer">
                <h4>Nossos serviços</h4>
                <ul>
                  <li><a href="#">Texto</a></li>
                  <li><a href="#">Texto</a></li>
                  <li><a href="#">Texto</a></li>
                  <li><a href="#">Texto</a></li>
                  <li><a href="#">Texto</a></li>
                  <li><a href="#">Texto</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_footer">
              <h4>Contato Suporte</h4>
                <ul>
                  <li>Telefone/Whatsapp:<a href="#"> (16) 9993404-4241</a></li>
                  <li>Email: <a href="mailto:julialauriesilva@gmail.com">julialauriesilva@gmail.com</a></li>
   
                </ul>
              </div>
            </div>
          </div>
          <div className="row fc">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="footer_copyright">
                <p>&copy; {new Date().getFullYear()}. Todos os direitos reservados.</p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="footer_menu">
              <ul>
                  <li><a href="#">Termos de uso</a></li>
                  <li><a href="#">Politica de Privacidade</a></li>
                  <li><a href="#">Cookie Politica de cookie</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterOne;
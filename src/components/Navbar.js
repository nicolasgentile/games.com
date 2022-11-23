import { AiOutlineShoppingCart } from "react-icons/ai";
import CartWidget from './CartWidget'


const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbarOrigin">

                <CartWidget />

{/*                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

              <div className="collapse navbar-collapse categories" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto list">
                      <li className="nav-item active">
                          <a className="nav-link" href="">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="">PS5</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="">PS4</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="">Xbox</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="">Wii</a>
                      </li>
                  </ul>
              </div>

              <div className="navbar-right">
                <spam className="logoShoppingCard"><AiOutlineShoppingCart /></spam>
                <div id="cardCounter">0</div>
              </div>

          </nav>
        </header>
    )
};

export default Navbar;
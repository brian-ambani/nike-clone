import { SiNike } from "react-icons/si";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";

export default function Nav() {
  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <SiNike />
        </div>
        <ul>
          <li>
            <a href="#new">New & Features</a>
          </li>
          <li>
            <a href="#men">Men</a>
          </li>
          <li>
            <a href="#women">Women</a>
          </li>
          <li>
            <a href="#kids">Kids</a>
          </li>
        </ul>
        <div className="menu-left">
          <div className="search">
            <BiSearch />
            <input type="text" placeholder="Search" className="search" />
          </div>
          <div className="favourites">
            <CiHeart />
          </div>
          <div className="cart">
            <IoBagOutline />
          </div>
        </div>
      </nav>
    </div>
  );
}

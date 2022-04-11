import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const Colophon = () => {
  return (
    <div id="colophon" className="container-fluid pt-3 pb-3">
      <a href="#">
        <FontAwesomeIcon className="colophon--logo-icon mr-1" icon={faReact} />
        React Storefront
      </a>
      <span className="sep"> | </span>A Simple Practice Site
      <span className="sep"> | </span>
      <a href="https://elliotgriffiss.co.uk/" target="_blank">
        &copy;Elliot Griffiss
      </a>
    </div>
  );
};

export default Colophon;

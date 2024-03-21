import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto text-gray-500 bg-gray-200">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-6 px-8">
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <p>&copy; 2024 Accunox. All rights reserved.</p>
        </div>
        <div className="w-full md:w-auto">
          <ul className="flex items-center justify-center md:justify-end space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-800">
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-gray-800">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-gray-800">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import useAuthStore from "../utils/store";

const Header = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    window.location.reload();
  };
  return (
    <header className="bg-gradient-to-r from-blue-800 to-indigo-400">
      <nav className="flex items-center justify-between gap-4 text-white px-8 py-6">
        <div className="text-4xl pr-12 bold font-serif">
          <Link to="/">Accuknox</Link>
        </div>

        <div>
          {user ? (
            <>
              <span className="text-xl text-gray-200 font-bold mr-4">Hi, {user.username || user.email}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="pr-4 px-4 mr-2 py-2 bg-blue-600 hover:bg-blue-700 rounded"
              >
                Sign in
              </Link>
              <Link
                className="px-4 py-2 bg-blue bg-blue-600 hover:bg-blue-700 rounded"
                to="signup"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

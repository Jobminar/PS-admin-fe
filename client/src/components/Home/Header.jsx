
import { Link } from "react-router-dom";
import appLogo from "../../assets/images/politicalsaradi.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center py-4 border-b-2 border-gray-200">
      {/* // Define the logo of the component */}
      <div className="flex items-center space-x-2">
        <img src={appLogo} alt="Logo" className="h-20 w-20" />
        <h1 className="text-xl font-bold text-primary-500">
          Political Saradhi
        </h1>
      </div>
      {/* // Define the navigation of the component */}
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-gray-600 hover:text-gray-800">
          Home
        </Link>
        <Link to="/voters" className="text-gray-600 hover:text-gray-800">
          Voters
        </Link>
        <Link to="/karyakartha" className="text-gray-600 hover:text-gray-800">
          My Karyakarthas
        </Link>
        <Link
          to="/reportedvoters"
          className="text-gray-600 hover:text-gray-800"
        >
          Reported Voters
        </Link>
        <Link
          to="/reportedincidents"
          className="text-gray-600 hover:text-gray-800"
        >
          Reported Incedents
        </Link>
        <Link to="/notifications" className="text-gray-600 hover:text-gray-800">
          Notifications
        </Link>
      </div>
    </div>
  );
};

export default Header;

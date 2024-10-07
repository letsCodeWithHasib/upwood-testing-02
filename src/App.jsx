import { Routes, Route, Navigate } from "react-router-dom"; // Importing routing components from React Router

// Importing pages for authentication
import LoginPage from "./pages/Login";
import UserPage from "./pages/User";

// Importing authentication components
import LoginComponent from "./components/login/Login";
import MailSentComponent from "./components/login/MailSent";
import RegisterComponent from "./components/login/Register";
import ForgotPasswordComponent from "./components/login/ForgotPassword";
import VerifyComponent from "./components/login/Verify";

// Importing user components for user-related functionalities
import ActiveProjects from "./components/user/active-projects/ActiveProjects";
import ContractList from "./components/user/contracts/ContractList";
import FundedProjects from "./components/user/funded-projects/FundedProjects";
import InvestmentPortfolio from "./components/user/Investment-portfolio/InvestmentPortfolio";
import NewsAndUpdates from "./components/user/new-and-update/NewsAndUpdates";
import Settings from "./components/user/settings/Settings";
import Support from "./components/user/support/Support";
import WalletManagement from "./components/user/wallet-management/WalletManagement";
import SingleContract from "./components/user/contracts/SingleContract";
import ViewActiveDetails from "./components/user/active-projects/ViewActiveDetails";
import Popup from "./components/user/common/Popup";
import ViewFundedProject from "./components/user/funded-projects/ViewFundedProject";
import ViewPortfolioProject from "./components/user/Investment-portfolio/ViewPortfolioProject";

import AuthRouteWrapper from "./routes/AuthRouteWrapper";
import UserRouteWrapper from "./routes/UserRouteWrapper";
import Activate from "./components/login/Activate";

/**
 * App Component
 * The main application component that defines the routing structure for the application.
 * It includes routes for both authentication and user-related functionalities.
 *
 * @returns {JSX.Element} - The rendered application with routing.
 */
const App = () => {
  return (
    <div>
      <Routes>
        {/* Authentication routes */}
        <Route
          path="auth"
          element={
            <AuthRouteWrapper>
              <LoginPage />
            </AuthRouteWrapper>
          }
        >
          <Route index element={<LoginComponent />} />
          {/* Default login component */}
          <Route path="forgot-password" element={<ForgotPasswordComponent />} />
          {/* Route for password recovery */}
          <Route path="mail-sent" element={<MailSentComponent />} />{" "}
          {/* Route for mail sent confirmation */}
          <Route path="register" element={<RegisterComponent />} />{" "}
          {/* Route for user registration */}
          <Route path="verification" element={<VerifyComponent />} />{" "}
          <Route path="activate" element={<Activate />} />{" "}
          {/* Route for email verification */}
        </Route>

        {/* User routes */}
        <Route
          path="user"
          element={
            <UserRouteWrapper>
              <UserPage />
            </UserRouteWrapper>
          }
        >
          <Route index element={<ActiveProjects />} />
          <Route path="active-project/:id" element={<ViewActiveDetails />} />
          <Route
            path="testing"
            element={<h1 className="bg-orange-300">Helo</h1>}
          />
          {/* Default user dashboard component */}
          <Route path="funded-projects" element={<FundedProjects />} />
          <Route path="funded-projects/:id" element={<ViewFundedProject />} />
          {/* Route for funded projects */}
          <Route
            path="investment-portfolio"
            element={<InvestmentPortfolio />}
          />{" "}
          <Route
            path="investment-portfolio/:id"
            element={<ViewPortfolioProject />}
          />
          {/* Route for investment portfolio */}
          <Route path="contracts" element={<ContractList />} />
          <Route path="contracts/:id" element={<SingleContract />} />
          {/* Route for user contracts */}
          <Route path="wallet-management" element={<WalletManagement />} />
          {/* Route for wallet management */}
          <Route path="settings" element={<Settings />} />
          {/* Route for user settings */}
          <Route path="news" element={<NewsAndUpdates />} />
          {/* Route for news and updates */}
          <Route path="support" element={<Support />} />
          {/* Route for user support */}
        </Route>
        <Route path="/" element={<Navigate to="/auth" />} />
      </Routes>
    </div>
  );
};

export default App; // Exporting the App component for use in other parts of the application

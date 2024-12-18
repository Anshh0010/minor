import PrivateComponent from "../components/PrivateComponent";
import About from "../pages/About";
import AdminPage from "../pages/admin/AdminPage";
import ManageCollegesPage from "../pages/admin/ManageCollegesPage";
import ManageUsersPage from "../pages/admin/ManageUsersPage";
import Arts from "../pages/arts/Arts";
import FineArts from "../pages/arts/FineArts";
import HistoryCulture from "../pages/arts/HistoryCulture";
import Journalism from "../pages/arts/Journalism";
import Literature from "../pages/arts/Literature";
import PerformingArts from "../pages/arts/PerformingArts";
import Accounting from "../pages/commerce/Accounting";
import BusinessManagement from "../pages/commerce/BusinessManagement";
import Commerce from "../pages/commerce/Commerce";
import Economics from "../pages/commerce/Economics";
import Finance from "../pages/commerce/Finance";
import Marketing from "../pages/commerce/Marketing";
import Design from "../pages/design/Design";
import FashionDesign from "../pages/design/FashionDesign";
import GraphicDesign from "../pages/design/GraphicDesign";
import IndustrialDesign from "../pages/design/IndustrialDesign";
import InteriorDesign from "../pages/design/InteriorDesign";
import UIUXDesign from "../pages/design/UIUXDesign";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Biotechnology from "../pages/science/Biotechnology";
import Engineering from "../pages/science/Engineering";
import EnvironmentalScience from "../pages/science/EnvironmentalScience";
import Medicine from "../pages/science/Medicine";
import ResearchScience from "../pages/science/ResearchScience";
import Science from "../pages/science/Science";
import SearchPage from "../pages/SearchPage";
import ArtificialIntelligence from "../pages/technology/ArtificialIntelligence";
import CloudComputing from "../pages/technology/CloudComputing";
import CyberSecurity from "../pages/technology/CyberSecurity";
import DataScience from "../pages/technology/DataScience";
import SoftwareDevolopment from "../pages/technology/SoftwareDevolopment";
import Technology from "../pages/technology/Technology";
import PathConstants from "./PathConstants";

const routes = [{ path: PathConstants.ABOUT, element: <About /> }];

export const adminRoutes = [
  {
    path: PathConstants.ADMIN,
    element: <PrivateComponent Component={<AdminPage />} />,
  },
  {
    path: PathConstants.MANAGEUSERS,
    element: <PrivateComponent Component={<ManageUsersPage />} />,
  },
  {
    path: PathConstants.MANAGECOLLEGES,
    element: <PrivateComponent Component={<ManageCollegesPage />} />,
  },
];

export const userRoutes = [
  {
    path: PathConstants.HOME,
    element: <PrivateComponent Component={<Home />} />,
  },
  {
    path: PathConstants.COMMERCE,
    element: <PrivateComponent Component={<Commerce />} />,
  },
  {
    path: PathConstants.SCIENCE,
    element: <PrivateComponent Component={<Science />} />,
  },
  {
    path: PathConstants.TECHNOLOGY,
    element: <PrivateComponent Component={<Technology />} />,
  },
  {
    path: PathConstants.DESIGN,
    element: <PrivateComponent Component={<Design />} />,
  },
  {
    path: PathConstants.ARTS,
    element: <PrivateComponent Component={<Arts />} />,
  },

  {
    path: PathConstants.PROFILE,
    element: <PrivateComponent Component={<Profile />} />,
  },
  {
    path: PathConstants.SEARCH,
    element: <PrivateComponent Component={<SearchPage />} />,
  },
  {
    path: PathConstants.MEDICINE,
    element: <PrivateComponent Component={<Medicine />} />,
  },
  {
    path: PathConstants.ENGINEERING,
    element: <PrivateComponent Component={<Engineering />} />,
  },
  {
    path: PathConstants.BIOTECHNOLOGY,
    element: <PrivateComponent Component={<Biotechnology />} />,
  },
  {
    path: PathConstants.EVS,
    element: <PrivateComponent Component={<EnvironmentalScience />} />,
  },
  {
    path: PathConstants.RESEARCH,
    element: <PrivateComponent Component={<ResearchScience />} />,
  },
  {
    path: PathConstants.ACCOUNTING,
    element: <PrivateComponent Component={<Accounting />} />,
  },
  {
    path: PathConstants.MARKETING,
    element: <PrivateComponent Component={<Marketing />} />,
  },
  {
    path: PathConstants.FINANCE,
    element: <PrivateComponent Component={<Finance />} />,
  },
  {
    path: PathConstants.BUSINESS,
    element: <PrivateComponent Component={<BusinessManagement />} />,
  },
  {
    path: PathConstants.ECONOMICS,
    element: <PrivateComponent Component={<Economics />} />,
  },
  {
    path: PathConstants.SOFTWAREDEV,
    element: <PrivateComponent Component={<SoftwareDevolopment />} />,
  },
  {
    path: PathConstants.CYBERSECURITY,
    element: <PrivateComponent Component={<CyberSecurity />} />,
  },
  {
    path: PathConstants.DATASCIENCE,
    element: <PrivateComponent Component={<DataScience />} />,
  },
  {
    path: PathConstants.AI,
    element: <PrivateComponent Component={<ArtificialIntelligence />} />,
  },
  {
    path: PathConstants.CLOUD,
    element: <PrivateComponent Component={<CloudComputing />} />,
  },
  {
    path: PathConstants.FINEARTS,
    element: <PrivateComponent Component={<FineArts />} />,
  },
  {
    path: PathConstants.LITERATURE,
    element: <PrivateComponent Component={<Literature />} />,
  },
  {
    path: PathConstants.PERFORMINGARTS,
    element: <PrivateComponent Component={<PerformingArts />} />,
  },
  {
    path: PathConstants.HISTORYANDCULTURE,
    element: <PrivateComponent Component={<HistoryCulture />} />,
  },
  {
    path: PathConstants.JOURNALISM,
    element: <PrivateComponent Component={<Journalism />} />,
  },
  {
    path: PathConstants.GRAPHICDESIGN,
    element: <PrivateComponent Component={<GraphicDesign />} />,
  },
  {
    path: PathConstants.INTERIORDESIGN,
    element: <PrivateComponent Component={<InteriorDesign />} />,
  },
  {
    path: PathConstants.INDUSTRYDESIGN,
    element: <PrivateComponent Component={<IndustrialDesign />} />,
  },
  {
    path: PathConstants.UIUX,
    element: <PrivateComponent Component={<UIUXDesign />} />,
  },
  {
    path: PathConstants.FASHION,
    element: <PrivateComponent Component={<FashionDesign />} />,
  },
  // {
  //   path: PathConstants.SEARCH,
  //   element: (
  //     <PrivateRoute>
  //       <SearchPage />
  //     </PrivateRoute>
  //   ),
  // },
  // {
  //   path: PathConstants.SEARCH,
  //   element: (
  //     <PrivateRoute>
  //       <SearchPage />
  //     </PrivateRoute>
  //   ),
  // },
  // {
  //   path: PathConstants.SEARCH,
  //   element: (
  //     <PrivateRoute>
  //       <SearchPage />
  //     </PrivateRoute>
  //   ),
  // },
  // {
  //   path: PathConstants.SEARCH,
  //   element: (
  //     <PrivateRoute>
  //       <SearchPage />
  //     </PrivateRoute>
  //   ),
  // },
];

export default routes;

// Importing images for articles and projects
import firstArticleImage from "./first-article.png"; // Image for the first article
import secondArticleImage from "./second-article.png"; // Image for the second article

import FirstActiveProject from "./first-active-image.png"; // Image for the first active project
import SecondActiveProject from "./second-active-image.png"; // Image for the second active project
import thirdActiveProject from "./third-active-image.png"; // Image for the third active project
import emptyProjectImage from "./empty-project-image.png"; // Placeholder image for projects not yet announced

import activeProjectWhite from "./active-project-white.png";
import activeProjectNormal from "./active-project-normal.png";
import fundedProjectNormal from "./funded-projects-normal.png";
import fundedProjectWhite from "./funded-projects-white.png";
import investmentNormal from "./investment-normal.png";
import investmentWhite from "./investment-white.png";
import contractsNormal from "./contracts-normal.png";
import contractsWhite from "./contracts-white.png";
import walletNormal from "./wallet-normal.png";
import walletWhite from "./wallet-white.png";
import settingsNormal from "./settings-normal.png";
import settingsWhite from "./settings-white.png";
import newsNormal from "./news-normal.png";
import newsWhite from "./news-white.png";
import supportNormal from "./support-normal.png";
import supportWhite from "./support-white.png";

// Exporting an array of platform updates with version number and update name
export const platformUpdates = [
  {
    updateNum: 12.3, // Version number of the update
    updateName: "Brokers module update", // Brief description of the update
  },
  // The following entries appear to be duplicates, check if they should represent different updates
  {
    updateNum: 12.3,
    updateName: "Brokers module update",
  },
  {
    updateNum: 12.3,
    updateName: "Brokers module update",
  },
];

// Exporting an array of articles with image, heading, title, and description
export const articles = [
  {
    image: firstArticleImage, // Article image
    heading: "ABOUT UPWOOD", // Section heading
    title: "Upwood signs agreement with Airflygreen", // Article title
    description:
      "AirFlyGreen joins investor community with commitment to compensate 6000 tons CO2 of flight emissions from London to Dubai. On 27th June, Upwood announced official partnership si...", // Article description with some information truncated
  },
  {
    image: secondArticleImage, // Article image
    heading: "LETTER FROM CEO", // Section heading
    title: "Forest market experiences positive dynamics", // Article title
    description:
      "Following recent changes in reduction of Euribor % by European Central Bank, the construction industry experiences upward trends which leads to increased demand for timber. Current trajectory...", // Article description truncated
  },
];

// Exporting an array of active projects with their details
export const activeProjects = [
  {
    heading: "Grow",
    title: "Latgale forest portfolio", // Title of the project
    description: "Portfolio of 7 forest plantations in Latgale region.", // Brief description
    area: 30.4, // Area in hectares
    roi: 63, // Return on investment in percentage
    carbonCredits: 3509, // Carbon credits associated with the project
    image: FirstActiveProject, // Image for the project
    id: 0,
    reserved: 20,
    available: 200,
    price: 108,
  },
  {
    heading: "Preserve",
    title: "Valkas novads forest portfolio",
    description: "Portfolio of 3 forest plantations in Valkas county.",
    area: 6.3,
    roi: 61,
    carbonCredits: 509,
    image: SecondActiveProject,
    id: 1,
    reserved: 20,
    available: 200,
    price: 108,
  },
  {
    heading: "Preserve",
    title: "Kuldigas novads forest",
    description: "7 years old growing forest in Kurzeme region.",
    area: 5.1,
    roi: 56,
    carbonCredits: 455,
    image: thirdActiveProject,
    id: 2,
    reserved: 20,
    available: 200,
    price: 108,
  },
  {
    heading: "TBA",
    title: "To be announced", // Placeholder for future projects
    description: "TBA",
    area: "TBA",
    roi: "TBA",
    carbonCredits: "TBA",
    image: emptyProjectImage,
    id: "TBA",
    reserved: "TBA",
    available: "TBA",
    price: "TBA",
  },
];

// Exporting an array of funded projects
export const fundedProjects = [
  {
    heading: "Grow",
    title: "Latgale forest portfolio",
    description: "Portfolio of 7 forest plantations in Latgale region.",
    area: 30.4,
    roi: 63,
    carbonCredits: 3509,
    image: FirstActiveProject,
    id: 0,
    reserved: 20,
    available: 200,
    price: 108,
  },
  {
    heading: "Preserve",
    title: "Valkas novads forest portfolio",
    description: "Portfolio of 3 forest plantations in Valkas county.",
    area: 6.3,
    roi: 61,
    carbonCredits: 509,
    image: SecondActiveProject,
    id: 1,
    reserved: 20,
    available: 200,
    price: 108,
  },
  {
    heading: "TBA",
    title: "To be announced", // Placeholder for future projects
    description: "TBA",
    area: "TBA",
    roi: "TBA",
    carbonCredits: "TBA",
    image: emptyProjectImage,
    id: 2,
    reserved: 20,
    available: 200,
    price: 108,
  },
  {
    heading: "TBA",
    title: "To be announced", // Another placeholder
    description: "TBA",
    area: "TBA",
    roi: "TBA",
    carbonCredits: "TBA",
    image: emptyProjectImage,
    id: 3,
    reserved: "TBA",
    available: "TBA",
    price: "TBA",
  },
];

// Exporting user wallet information
export const wallet = {
  walletId: "wdbshb473y43uhf23fdsd", // Unique identifier for the wallet
  entity: "SIA UPWOOD", // Entity associated with the wallet
  carbonCredits: "15 CO2 TONS = 750€", // Total carbon credits and their monetary value
  dividend: "150 EURO", // Dividend amount
  eTree: 1500, // Count of electronic trees
};

// Exporting token portfolio list with details for each token
export const tokenPortfolioList = [
  {
    symbol: "UPW1", // Token symbol
    assetName: "Oak tree house forest plantation", // Name of the asset
    smartContractAddress: "tdgsbha37326dnsajkjd8", // Smart contract address
    shareAmount: 5, // Amount of shares held
    shareValue: "500€", // Total value of shares
    carbonCredits: "3", // Associated carbon credits
    dividentEarned: "150 €", // Total dividends earned
  },
  // The following entries appear to be duplicates; ensure they represent unique assets
  {
    symbol: "UPW1",
    assetName: "Oak tree house forest plantation",
    smartContractAddress: "tdgsbha37326dnsajkjd8",
    shareAmount: 5,
    shareValue: "500€",
    carbonCredits: "3",
    dividentEarned: "150 €",
  },
  {
    symbol: "UPW1",
    assetName: "Oak tree house forest plantation",
    smartContractAddress: "tdgsbha37326dnsajkjd8",
    shareAmount: 5,
    shareValue: "500€",
    carbonCredits: "3",
    dividentEarned: "150 €",
  },
  {
    symbol: "UPW1",
    assetName: "Oak tree house forest plantation",
    smartContractAddress: "tdgsbha37326dnsajkjd8",
    shareAmount: 5,
    shareValue: "500€",
    carbonCredits: "3",
    dividentEarned: "150 €",
  },
];

// Exporting an array of user portfolio items
export const usersPortfolio = [
  {
    heading: "Grow",
    title: "Latgale forest portfolio",
    description: "Portfolio of 7 forest plantations in Latgale region.",
    area: 30.44,
    roi: 63,
    carbonCredits: 3509,
    image: FirstActiveProject,
    id: 0,
    price: 108,
    available: 200,
  },
  {
    heading: "Preserve",
    title: "Valkas novads forest portfolio",
    description: "Portfolio of 3 forest plantations in Valkas county.",
    area: 6.3,
    roi: 61,
    carbonCredits: 509,
    image: SecondActiveProject,
    id: 1,
    price: 108,
    available: 200,
  },
];

export const contractsList = [
  {
    contractName: "Nīcgale",
    tokens: 132,
    signedDate: "29.06.2024",
    nr: "487637827292",
    id: 0,
  },
  {
    contractName: "Nīcgale",
    tokens: 132,
    signedDate: "29.06.2024",
    nr: "487637827292",
    id: 1,
  },
  {
    contractName: "Nīcgale",
    tokens: 132,
    signedDate: "29.06.2024",
    nr: "487637827292",
    id: 2,
  },
  {
    contractName: "Nīcgale",
    tokens: 132,
    signedDate: "29.06.2024",
    nr: "487637827292",
    id: 3,
  },
];

export const investmentPortfolio = {
  portfolioValue: "13 000 €",
  yearlyProfit: "+1000€",
  roi: "8.4%",
  carbonTonsoffset: "5t",
};

export const sidebarItems = [
  {
    title: "Active Project",
    white: activeProjectWhite,
    normal: activeProjectNormal,
    path: ".",
  },
  {
    title: "Funded Project",
    white: fundedProjectWhite,
    normal: fundedProjectNormal,
    path: "funded-projects",
  },
  {
    title: "Investment Portfolio",
    white: investmentWhite,
    normal: investmentNormal,
    path: "investment-portfolio",
  },
  {
    title: "Contracts",
    white: contractsWhite,
    normal: contractsNormal,
    path: "contracts",
  },
  {
    title: "Wallet Management",
    white: walletWhite,
    normal: walletNormal,
    path: "wallet-management",
  },
  {
    title: "News & Updates",
    white: newsWhite,
    normal: newsNormal,
    path: "news",
  },
  {
    title: "Support",
    white: supportWhite,
    normal: supportNormal,
    path: "support",
  },
  {
    title: "Settings",
    white: settingsWhite,
    normal: settingsNormal,
    path: "settings",
  },
];

export const userCredentials = {
  email: "mohdhasib",
  password: "12345",
  username: "Mohd Hasib",
};

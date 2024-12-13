import ShareplateMockup from "./shareplate.jpeg";
import BolMockup from "./bol.png";
import KwilUi from "./kwilui.jpeg";
import ShareplateUI from "./shareplateui.jpeg";
import PostgresqlLogo from "./postgresql.png";
import NodeTypescriptLogo from "./nodetypescript.png";

export const workCardsContent = [
  {
    title: "Shareplate",
    description: "Social media for foodies",
    backgroundImage: `url(${ShareplateMockup})`,
  },
  {
    title: "bol",
    description: "Bowling progress analytics app",
    backgroundImage: `url(${BolMockup})`,
    color: "black",
  },
  {
    title: "Block Explorer UI",
    description: "Blockchain explorer UI",
    backgroundImage: `url(${KwilUi})`,
  },
  {
    title: "Shareplate UI",
    description: "Food social media UI",
    backgroundImage: `url(${ShareplateUI})`,
  },
  {
    title: "Set up PostgreSQL",
    description: "Set up PostgreSQL via Docker article",
    backgroundImage: `url(${PostgresqlLogo})`,
  },
  {
    title: "Typescript Server",
    description: "Set up Node server with Typescript article",
    backgroundImage: `url(${NodeTypescriptLogo})`,
    color: "black",
  },
];

export const groupedCards = [];
for (let i = 0; i < workCardsContent.length; i += 2) {
  groupedCards.push(workCardsContent.slice(i, i + 2));
}

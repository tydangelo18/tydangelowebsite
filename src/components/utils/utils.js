import ShareplateMockup from "../assets/shareplate.jpeg";
import BolMockup from "../assets/bol.png";
import KwilUi from "../assets/kwilui.jpeg";
import ShareplateUI from "../assets/shareplateui.jpeg";
import PostgresqlLogo from "../assets/postgresql.png";
import NodeTypescriptLogo from "../assets/nodetypescript.png";

export const workCardsContent = [
  {
    title: "Shareplate",
    description: "Social media for foodies",
    backgroundImage: `url(${ShareplateMockup})`,
    hoverColor: "#27A599",
    externalLink: "https://github.com/tydangelo18/shareplate-api-server",
  },
  {
    title: "bol",
    description: "Bowling progress analytics app",
    backgroundImage: `url(${BolMockup})`,
    color: "black",
    hoverColor: "yellow",
    externalLink: "https://github.com/tydangelo18/bol",
  },
  {
    title: "Block Explorer UI",
    description: "Blockchain explorer UI",
    backgroundImage: `url(${KwilUi})`,
    hoverColor: "#118EA0",
    externalLink:
      "https://www.figma.com/design/Jc75IuJ3tvPps9YekkayQ7/Block-Explorer?node-id=0-1&t=blA3VINwzcYyBpoV-1",
  },
  {
    title: "Shareplate UI",
    description: "Food social media UI",
    backgroundImage: `url(${ShareplateUI})`,
    hoverColor: "white",
    externalLink:
      "https://www.figma.com/design/hxKklz94cKNruozfwYHkc4/SharePlate?node-id=0-1&t=e1ZLsoYmEqS3I62E-1",
  },
  {
    title: "Set up PostgreSQL",
    description: "Set up PostgreSQL via Docker article",
    backgroundImage: `url(${PostgresqlLogo})`,
    hoverColor: "#0091FF",
    externalLink: "https://www.google.com",
  },
  {
    title: "Typescript Server",
    description: "Set up Node server with Typescript article",
    backgroundImage: `url(${NodeTypescriptLogo})`,
    color: "black",
    hoverColor: "#D4D8DA",
    externalLink: "https://www.google.com",
  },
];

export const groupedCards = [];
for (let i = 0; i < workCardsContent.length; i += 2) {
  groupedCards.push(workCardsContent.slice(i, i + 2));
}

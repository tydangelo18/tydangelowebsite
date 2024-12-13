import ShareplateMockup from "./shareplate.jpeg"
import KwilUi from "./kwilui.jpeg"

export const workCardsContent = [
  { title: "Shareplate", description: "Social media for foodies", backgroundImage: `url(${ShareplateMockup})` },
  { title: "bol", description: "Bowling progress analytics app" },
  { title: "Kwil Block Explorer", description: "Blockchain explorer UI", backgroundImage: `url(${KwilUi})` },
  { title: "Shareplate UI", description: "Food social media UI" },
  {
    title: "Set up PostgreSQL",
    description: "Set up PostgreSQL via Docker article",
  },
  {
    title: "Typescript Server",
    description: "Set up Node server with Typescript article",
  },
];

export const groupedCards = [];
for (let i = 0; i < workCardsContent.length; i += 2) {
  groupedCards.push(workCardsContent.slice(i, i + 2));
}

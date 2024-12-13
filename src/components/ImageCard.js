import React from "react";
import ContentCard from "./ContentCard";
import Pic from "./IMG_5451.jpg";

export default function ImageCard() {
  return <ContentCard bgImage={`url(${Pic})`} />;
}

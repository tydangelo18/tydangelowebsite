import React from "react";
import ContentCard from "./ContentCard";
import Pic from "../assets/IMG_5451.jpg";

export default function ImageCard() {
  return <ContentCard bgImage={`url(${Pic})`} />;
}

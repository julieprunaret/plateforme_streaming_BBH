import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
//import YouTube from "react-youtube";
//amélioration : utiliser react-youtube
interface CardVideoProps {
  youtubeID: string;
  subtitle?: string;
  title: string;
  smallText: string;
}

export default function CardVideo({
  youtubeID,
  subtitle,
  title,
  smallText,
}: CardVideoProps) {
  return (
    <Card className="py-4 bg-transparent w-fit m-0 shadow-none">
      <CardBody className="overflow-visible pb-2 p-0">
        <iframe
          width={304}
          height={168}
          className="video"
          title="Youtube player"
          sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
          src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}
        ></iframe>
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{subtitle}</p>
        <small className="text-default-500">{title}</small>
        <h4 className="font-bold text-large">{smallText}</h4>
      </CardHeader>
    </Card>
  );
}

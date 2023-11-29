import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
//import YouTube from "react-youtube";
//amélioration : utiliser react-youtube
interface CardVideoProps {
  youtubeID: string;
  subtitle?: string;
  title: string;
  smallText: string;
  isLarge?: boolean;
  views?: boolean;
  viewsNumber?: number;
}

export default function CardVideo({
  youtubeID,
  subtitle,
  title,
  smallText,
  isLarge = false,
  views = false,
  viewsNumber,
}: CardVideoProps) {
  return (
    <Card className="py-4 bg-transparent w-fit m-0 shadow-none">
      <CardBody className="overflow-visible pb-2 p-0">
        {views && (
          <div className="h-16 bg-gradient-to-t from-[#ff11ac5e] ...">
            <span className="shadow font-bold text-fill-white text-5xl mb-2 ml-2">
              {viewsNumber}K
            </span>
          </div>
        )}
        <iframe
          width={isLarge ? 467 : 304}
          height={isLarge ? 462 : 168}
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

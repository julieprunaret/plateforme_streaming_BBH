"use client";

import CardVideo from "@/app/ui/components/CardVideo";
import useFetch from "./lib/Hooks/useFetch";
import Image from "next/image";

interface Video {
  id: number;
  title: string;
  youtube_id: string;
}

interface Videos {}

export default function Home() {
  const { data, isLoading, error } = useFetch({
    url: "https://api.brest.life/items/video",
  });

  if (error) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h2>Derniers replays</h2>
        <div className="flex gap-2 overflow-auto">
          {isLoading ? (
            <p>chargement</p>
          ) : (
            data &&
            data.data &&
            data.data
              .slice(0, 7)
              .map((video: Video) => (
                <CardVideo
                  youtubeID={video.youtube_id}
                  subtitle={
                    video.title.length > 40
                      ? video.title.substring(0, 40) + "..."
                      : video.title
                  }
                  title="SAGA EHF | ÉPISODE 1"
                  smallText="Il y a 15 minutes"
                  key={video.id}
                />
              ))
          )}
        </div>
      </div>

      <div>
        <div className="flex items-center">
          <h2>Les plus regardés </h2>
          <Image
            src="/logo_stylise.png"
            width={24}
            height={24}
            alt="logo BBH"
            className="ml-2"
          />
        </div>
        <div className="flex gap-2 overflow-auto">
          {isLoading ? (
            <p>chargement</p>
          ) : (
            data &&
            data.data &&
            data.data
              .slice(0, 7)
              .map((video: Video) => (
                <CardVideo
                  youtubeID={video.youtube_id}
                  subtitle={
                    video.title.length > 40
                      ? video.title.substring(0, 40) + "..."
                      : video.title
                  }
                  title="SAGA EHF | ÉPISODE 1"
                  smallText="Il y a 15 minutes"
                  key={video.id}
                  isLarge={true}
                />
              ))
          )}
        </div>
      </div>

      <div>
        <h2>Les plus regardés </h2>
        <div className="flex gap-2 overflow-auto">
          {isLoading ? (
            <p>chargement</p>
          ) : (
            data &&
            data.data &&
            data.data
              .slice(0, 7)
              .map((video: Video) => (
                <CardVideo
                  youtubeID={video.youtube_id}
                  subtitle={
                    video.title.length > 40
                      ? video.title.substring(0, 40) + "..."
                      : video.title
                  }
                  title="SAGA EHF | ÉPISODE 1"
                  smallText="Il y a 15 minutes"
                  key={video.id}
                  views={true}
                  viewsNumber={40}
                />
              ))
          )}
        </div>
      </div>
    </div>
  );
}

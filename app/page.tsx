import CardVideo from "@/app/ui/components/CardVideo";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <CardVideo
        youtubeID="PLKu0kLKg7TkBrovFQTuPU3FblMtxHmkcm"
        subtitle="Nom playlist"
        title="SAGA EHF | ÉPISODE 1"
        smallText="Il y a 15 minutes"
      />
      <CardVideo
        youtubeID="PLKu0kLKg7TkBrovFQTuPU3FblMtxHmkcm"
        subtitle="Nom playlist"
        title="SAGA EHF | ÉPISODE 1"
        smallText="Il y a 15 minutes"
        views={true}
        viewsNumber={43}
      />
      <CardVideo
        youtubeID="PLKu0kLKg7TkBrovFQTuPU3FblMtxHmkcm"
        subtitle="Nom playlist"
        title="SAGA EHF | ÉPISODE 1"
        smallText="Il y a 15 minutes"
        isLarge={true}
      />
    </div>
  );
}

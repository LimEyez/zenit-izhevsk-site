import LatestNews from "@/Components/LatestNews/LatestNews";
import MainVideoLinks from "@/Components/MainVideoLinks/MainVideoLinks";
import NearestMatches from "@/Components/NearestMatches/NearestMatches";
import NewsCarousel from "@/Components/NewsCarousel/NewsCarousel";
import TournamentTables from "@/Components/TournamentTables/TournamentTables";

export default function Home() {
  return (
    <>
      <NewsCarousel />
      <span className="block h-[40px]" />
      {/* <div className="container mx-auto"> */}
        <NearestMatches />
        <LatestNews />
        <div className=" relative w-auto h-auto bg-cover bg-center bg-[url(/images/Backgroud-image-tournament-table-main-page.png)]">
          <TournamentTables />
        </div>
      {/* </div> */}
      {/* <MainVideoLinks /> */}
    </>
  );
}

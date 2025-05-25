import LatestNews from "@/Components/LatestNews/LatestNews";
import MainVideoLinks from "@/Components/MainVideoLinks/MainVideoLinks";
import NearestMatches from "@/Components/NearestMatches/NearestMatches";
import NewsCarousel from "@/Components/NewsCarousel/NewsCarousel";
import TournamentTables from "@/Components/TournamentTables/TournamentTables";
import Image from "next/image";
import BackgroundImageTournamentTableMainPage from '@/public/images/Backgroud-image-tournament-table-main-page.png'

export default function Home() {
  return (
    <main>
      <NewsCarousel />
      <span className="block h-[40px]" />
      <NearestMatches />
      <LatestNews />
      <div className=" relative w-auto h-auto">
        <Image
          src={BackgroundImageTournamentTableMainPage}
          alt="Фон турнирных таблиц главной страницы"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
        <TournamentTables />
      </div>
      <MainVideoLinks />
    </main>
  );
}

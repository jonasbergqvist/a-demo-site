import Image from "next/image";
import { Inter } from "next/font/google";
import { Ranking, useArtistSearchQuery } from "./../generated"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const result = useArtistSearchQuery({ variables: { searchPhrase: "Metallica", relevance: Ranking.Semantic } });

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <ul>
      { result.data?.Artist?.facets?.Genre?.map(x => {
        return (
            <li>{ x?.name } ({x?.count})</li>
        )
      })}
      </ul>
      <div>
      { result.data?.Artist?.items?.map(x => {
        return (
          <div>
            <div>{ x?.Artist_Name }</div>
            <div>{ x?.Genre }</div>
            <div>{ x?.Biggest_Hits }</div>
            <div>{ x?.Teaser_Text }</div>
          </div>
        )
      })}
      </div>
    </main>
  );
}

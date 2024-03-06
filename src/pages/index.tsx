import Image from "next/image";
import { Inter } from "next/font/google";
import { useTotalItemsQuery } from "./../generated"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const totalItemsResult = useTotalItemsQuery();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      Total { totalItemsResult.data?.Data?.total }
    </main>
  );
}

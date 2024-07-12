import Banner from "@/components/Banner/Banner";
import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl px-5 mx-auto">
      <section>
        <Banner/>
      </section>
    </main>
  );
}

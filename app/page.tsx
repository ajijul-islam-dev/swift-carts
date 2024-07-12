import Banner from "@/components/Banner/Banner";
import Categories from "@/components/Categories/Categories";
import ThisMonth from "@/components/ThisMonth/ThisMonth";
import TodaysSell from "@/components/TodaysSell/TodaysSell";


export default function Home() {
  return (
    <main className="max-w-7xl px-5 mx-auto">
      <section>
        <Banner/>
      </section>
      <section>
        <TodaysSell/>
      </section>
      <section>
        <Categories/>
      </section>
      <section>
        <ThisMonth/>
      </section>
    </main>
  );
}

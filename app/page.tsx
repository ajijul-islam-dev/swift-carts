import AllProducts from "@/components/AllProducts/AllProducts";
import Banner from "@/components/Banner/Banner";
import Categories from "@/components/Categories/Categories";
import Featured from "@/components/Featured/Featured";
import ThisMonth from "@/components/ThisMonth/ThisMonth";
import TodaysSell from "@/components/TodaysSell/TodaysSell";


export default function Home() {
  return (
    <main className="max-w-7xl px-5 mx-auto mt-24">
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
      <section>
        <AllProducts/>
      </section>
      <section>
        <Featured/>
      </section>
    </main>
  );
}

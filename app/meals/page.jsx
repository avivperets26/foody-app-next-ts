import Link from "next/link";
import styledClasses from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

const MealsPage = () => {
  return (
    <>
      <header className={styledClasses.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styledClasses.highlight}>by you</span>
        </h1>
        <p>
          Choose your fevorite recipe and cook it yourself. It is easy and fun
        </p>
        <p className={styledClasses.cta}>
          <Link href="/meals/share">Share Your Fevorite Recipe</Link>
        </p>
      </header>
      <main className={styledClasses.main}>
        <Suspense
          fallback={<p className={styledClasses.loading}>Fetching Meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;

import Image from "next/image";
import styledClasses from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

const MealDetailsPage = ({ params }) => {
  const meal = getMeal(params.mealSlug);
  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
  return (
    <>
      <header className={styledClasses.header}>
        <div className={styledClasses.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={styledClasses.headerText}>
          <h1>{meal?.title}</h1>
          <p className={styledClasses.creator}>
            {" "}
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styledClasses.summery}>{meal.summery}</p>
        </div>
      </header>
      <main>
        <p
          className={styledClasses.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default MealDetailsPage;

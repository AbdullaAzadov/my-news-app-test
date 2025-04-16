import React from "react";

export const dynamic = "force-dynamic";

async function getNews() {
  const res = await fetch("http://localhost:3000/api/news");
  const data = await res.json();
  return data.articles;
}

export default async function HomePage() {
  const articles = await getNews();

  console.log(articles);

  return (
    <main>
      <h1>Последние новости</h1>
    </main>
  );
}

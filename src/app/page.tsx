import React from "react";

async function getNews() {
  const res = await fetch("http://localhost:3000/api/news");
  const data = await res.json();
  return data.articles;
}

export default async function HomePage() {
  const articles = await getNews();

  return (
    <main>
      <h1>Последние новости</h1>
      <ul>
        {articles.map((article: any, index: number) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}

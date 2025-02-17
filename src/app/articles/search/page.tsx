import Link from "next/link";
type Article = {
  id: number;
  userid: number;
  title: string;
  body: string;
};
const Searchpage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles: Article[] = await response.json();

  return (
    <section className="container m-auto px-5">
      {articles.map((item) => (
        <div className="p-5 rounded-lg shadow-lg b">
          <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
          <p>{item.body}</p>
          <Link href={"./articles/${item.id}"}>Read More</Link>
        </div>
      ))}
    </section>
  );
};

export default Searchpage;

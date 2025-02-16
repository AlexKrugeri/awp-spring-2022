import { Link, useLoaderData } from "remix";
import LinkButton from "~/components/LinkButton.jsx";
import PageHeader from "~/components/PageHeader";

export async function loader() {
  return await fetch("http://localhost:3000/api/music");
}

export default function MusicItems() {
  const products = useLoaderData();

  return (
    <div>
      <PageHeader title="Music" subtitle="Curated by Alex & Jesper">
        <LinkButton to="new">New track</LinkButton>
      </PageHeader>
      <ul className="grid gap-4 grid-cols-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="rounded border border-gray-200 bg-gray-50 p-5"
          >
            <Link to={product.id} className="font-semibold">
              <img className="object-fill" src={product.img} />
              <h3>{product.artist}</h3>
              <h3 className="text-xl font-bold">{product.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

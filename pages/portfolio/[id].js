import { useRouter } from 'next/router';

export default function PortfolioProjectPage() {
  const router = useRouter();

  // /portfolio/[id]
  console.log(router.pathname);

  // object {id: "something"} keyname in the query: id
  // url value: "something"
  console.log(router.query);

  // send a request t some backend server
  // to fetch the piece of data with an id of router.query.id

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}

import { useRouter } from 'next/router';

export default function ClientProjectPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHander() {
    // load data...
    router.push('/clients/nnamdi/ProjectA');
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHander}>Load Project A</button>
    </div>
  );
}

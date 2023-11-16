import dynamic from "next/dynamic";
import Link from "next/link";

type TProps = {
  params: {
    id: string;
  }
}

export default async function Page({ params }: TProps) {
  const id = params.id;

  console.log(id)

  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await response.json();

  const DynamicComponent = dynamic<{ id: string, data: any }>(() => import(`@/component/dynamic/test${id}`));

  return <div>
    <Link href="/1" style={{ marginRight: "10px" }}>1</Link>
    <Link href="/2">2</Link>
    <br />
    <DynamicComponent id={id} data={data} />
  </div>
}
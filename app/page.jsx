import { getPage } from "../helpers/getPage";
import BlockRenderer from "../components/BlockRenderer";
import Oops from "../components/Oops";

export default async function Home() {
  const { data } = await getPage("home");
  if (!data || data.length === 0) return <Oops />;

  const blocks = data[0].attributes.Blocks;

  return (
    <div>
      <BlockRenderer blocks={blocks} />
    </div>
  );
}

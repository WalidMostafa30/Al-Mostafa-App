import { adeya } from "@/src/assets/data/Adeya";
import AdeyaPage from "@/src/components/AdeyaPage/AdeyaPage";

export default function adeyaID({ params }: { params: { adeyaID: string } }) {
  return (
    <section>
      <AdeyaPage Data={adeya} ID={params.adeyaID} />
    </section>
  );
}

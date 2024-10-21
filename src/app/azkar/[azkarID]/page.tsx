import { azkar } from "@/src/assets/data/Azkar";
import AdeyaPage from "@/src/components/AdeyaPage/AdeyaPage";

export default function azkarID({ params }: { params: { azkarID: string } }) {
  return (
    <section>
      <AdeyaPage Data={azkar} ID={params.azkarID} />
    </section>
  );
}

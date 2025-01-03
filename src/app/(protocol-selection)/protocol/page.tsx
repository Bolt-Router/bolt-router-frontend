import { InlineCircularLoader } from "@/components/loaders";
import { PageReRouter } from "@/components/router";

export default function ProtocolPageRerouter() {
  return (
    <div className="flex w-full items-center justify-center">
      <PageReRouter redirectPath="/protocol/stable">
        <InlineCircularLoader />
      </PageReRouter>
    </div>
  );
}

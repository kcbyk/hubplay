import "../stream.css";

import { listProviders } from "@/lib/stream/registry";
import DemoBrowser from "./DemoBrowser";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "HubPlay · Stream Resolver",
};

export default function DemoPage() {
  return <DemoBrowser providers={listProviders()} />;
}

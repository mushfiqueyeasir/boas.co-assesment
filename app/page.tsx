
import { Metadata } from "next";
import { SeoContent } from "@/SeoContent/SeoContent";
import { generateMetadata } from "@/utility/generateMetadata";

export const metadata = generateMetadata(SeoContent.baseSeo);

export default function HomePage() {
    return <></>;
}

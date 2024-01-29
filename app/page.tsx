import { Metadata } from "next";
import { SeoContent } from "@/SeoContent/SeoContent";
import { generateMetadata } from "@/utility/generateMetadata";
import Banner from "@/components/Banner/Banner";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import { getData } from "@/utility/getData";
import NewJeans from "@/components/MarketingUI/NewJeans";
import Explore from "@/components/MarketingUI/Explore";
import APP from "@/components/MarketingUI/APP";
import News from "@/components/MarketingUI/News";
import LevisJeans from "@/components/MarketingUI/LevisJeans";
import Profits from "@/components/MarketingUI/Profits";

export const metadata = generateMetadata(SeoContent.baseSeo);

export default async function HomePage() {
    const brands = await getData({ endPoint: "brands" });
    const products = await getData({ endPoint: "products" });

    return (
        <>
            <Banner />
            <ProductSlider title="Popular brands" data={brands.data} bg />
            <NewJeans/>
            <News/>
            <ProductSlider title="Shop by fit" data={products.data} />
            <Explore/>
            <LevisJeans/>
            <APP/>
            <Profits/>
        </>
    );
}

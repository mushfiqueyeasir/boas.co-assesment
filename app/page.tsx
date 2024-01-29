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
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Collection from "@/components/Collection/Collection";
import SaveJeans from "@/components/MarketingUI/SaveJeans";
import Saves from "@/components/MarketingUI/Saves";
import Featured from "@/components/Featured/Featured";
import Blogs from "@/components/Blogs/Blogs";

export const metadata = generateMetadata(SeoContent.baseSeo);

export default async function HomePage() {
    const brands = await getData({ endPoint: "brands" });
    const products = await getData({ endPoint: "products" });
    const featured = await getData({ endPoint: "featureds" });
    const blogs = await getData({ endPoint: "blogs" });

    return (
        <>
            <Banner />
            <ProductSlider title="Popular brands" data={brands.data} bg />
            <NewJeans/>
            <HowItWorks/>
            <News/>
            <ProductSlider title="Shop by fit" data={products.data} />
            <Explore/>
            <Collection/>
            <APP/>
            <LevisJeans/> 
            <SaveJeans/>
            <Saves/>           
            <Profits/>
            <Featured data={featured.data}/>
            <Blogs  data={blogs.data}/>
        </>
    );
}

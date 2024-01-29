import { Metadata } from "next";
import { SeoContent } from "@/SeoContent/SeoContent";
import { generateMetadata } from "@/utility/generateMetadata";
import Banner from "@/components/Banner/Banner";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import { getData } from "@/utility/getData";

export const metadata = generateMetadata(SeoContent.baseSeo);

export default async function HomePage() {
    const brands = await getData({ endPoint: "brands" });
    const products = await getData({ endPoint: "products" });

    return (
        <>
            <Banner />
            <ProductSlider title="Popular brands" data={brands.data} bg />
            <ProductSlider title="Shop by fit" data={products.data} />
        </>
    );
}

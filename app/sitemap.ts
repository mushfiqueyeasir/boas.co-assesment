import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoute: any[] = [
        {
            url: `https://boas-co.vercel.app/`,
            lastModified: new Date("2023-08-01"),
            changeFrequency: "yearly",
            priority: 1
        }
    ];

    return [...staticRoute];
}

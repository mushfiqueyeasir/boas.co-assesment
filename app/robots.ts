import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/"
        },
        sitemap: `https://boas.co/sitemap.xml`,
        host: `https://boas.co/`
    };
}

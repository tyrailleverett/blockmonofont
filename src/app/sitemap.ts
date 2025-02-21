import type { MetadataRoute } from "next";

export const dynamic = "force-static";


export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://blockmonofonts.com",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: "https://blockmonofonts.com/download",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.7,
		},
		{
			url: "https://blockmonofonts.com/license",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.3,
		},
		{
			url: "https://blockmonofonts.com/privacy",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.3,
		},
	];
}

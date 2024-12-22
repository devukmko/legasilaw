import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.legasilaw.com/",
      lastModified: new Date("2024-12-22T10:21:04+00:00"),
      priority: 1.0,
    },
    {
      url: "https://www.legasilaw.com/about-us",
      lastModified: new Date("2024-12-22T10:21:04+00:00"),
      priority: 0.8,
    },
    {
      url: "https://www.legasilaw.com/service/perizinan",
      lastModified: new Date("2024-12-22T10:21:04+00:00"),
      priority: 0.8,
    },
    {
      url: "https://www.legasilaw.com/service/advokasi",
      lastModified: new Date("2024-12-22T10:21:04+00:00"),
      priority: 0.8,
    },
    {
      url: "https://www.legasilaw.com/service/pengelolaan-kawasan",
      lastModified: new Date("2024-12-22T10:21:04+00:00"),
      priority: 0.8,
    },
  ];
}

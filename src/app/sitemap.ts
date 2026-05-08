import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thealxlabs.ca'
  const lastModified = new Date('2026-05-07')

  return [
    { url: `${baseUrl}`, lastModified },
    { url: `${baseUrl}/projects`, lastModified },
    { url: `${baseUrl}/about`, lastModified },
    { url: `${baseUrl}/contact`, lastModified },
    { url: `${baseUrl}/products`, lastModified },
    { url: `${baseUrl}/products/dirac`, lastModified },
    { url: `${baseUrl}/products/conductor`, lastModified },
    { url: `${baseUrl}/products/localcode`, lastModified },
    { url: `${baseUrl}/privacy`, lastModified },
    { url: `${baseUrl}/terms`, lastModified },
  ]
}

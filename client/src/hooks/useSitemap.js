// utils/fetchSitemap.js

import axios from 'axios';
import fs from 'fs';

const fetchSitemap = async () => {
    const sitemapUrl = 'https://bizdptqtvsjekgsblenm.supabase.co/storage/v1/object/public/blog/sitemap/sitemap.txt';
    const localFilePath = '/public/sitemap.txt';

    try {
        const response = await axios.get(sitemapUrl);
        if (!response.ok) {
            throw new Error('Sitemap indirme işlemi başarısız oldu.');
        }

        const sitemapContent = await response.text();
        fs.writeFileSync(localFilePath, sitemapContent);

        console.log('Sitemap başarıyla güncellendi.');
        return sitemapContent;
    } catch (error) {
        console.error('Sitemap güncelleme hatası:', error.message);
        return null;
    }
};

export default fetchSitemap;

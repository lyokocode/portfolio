import { createClient } from '@supabase/supabase-js';
import { StorageClient } from '@supabase/storage-js'

export const supabase = createClient(process.env.SUPABASE_STORAGE, process.env.SUPABASE_KEY);

export const storageClient = new StorageClient(process.env.SUPABASE_STORAGE, {
    apikey: process.env.SUPABASE_SERVICE_KEY,
    Authorization: `Bearer ${process.env.SUPABASE_SERVICE_KEY}`
})
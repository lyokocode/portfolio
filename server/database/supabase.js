import { createClient } from '@supabase/supabase-js';
import { StorageClient } from '@supabase/storage-js'

const supabaseUrl = "https://bizdptqtvsjekgsblenm.supabase.co/storage/v1/"; // Supabase proje URL'nizi buraya ekleyin
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpemRwdHF0dnNqZWtnc2JsZW5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY2OTg4NTYsImV4cCI6MjAxMjI3NDg1Nn0.e_am5shD6Lk4DWb3f3x-zPJ-pHExK51XfKMiGnPHQ4Q";
const serviceKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpemRwdHF0dnNqZWtnc2JsZW5tIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NjY5ODg1NiwiZXhwIjoyMDEyMjc0ODU2fQ.0V9VisbBJLmGNBW3bKjmw9FXKA-8Uz8shF-gxzNUVII";
const jwtSecret = "chXdi/OISKlKYa8PR6bJ+DH8rMSx0RkjqCDVrX4W0NpWCVEObA+bbI33LMQTFxR54xXea6FE2gpRw9eJ7hLETw==";

export const supabase = createClient(supabaseUrl, supabaseKey);

export const storageClient = new StorageClient(supabaseUrl, {
    apikey: serviceKey,
    Authorization: `Bearer ${serviceKey}`
})
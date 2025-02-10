import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mjkmfhdnvdrqpbfbrexc.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qa21maGRudmRycXBiZmJyZXhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4NDQ5NzYsImV4cCI6MjA1NDQyMDk3Nn0.a5L3PKo24upQ9R2Q5EdfBomRj8pszDd7C0zqm3HqEXQ'

const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase }

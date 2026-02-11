-- Mobilker CMS tables
-- Run this in Supabase SQL Editor

-- 1. Content key-value store
CREATE TABLE IF NOT EXISTS mobilker_content (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Images registry
CREATE TABLE IF NOT EXISTS mobilker_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  url TEXT NOT NULL,
  filename TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE mobilker_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE mobilker_images ENABLE ROW LEVEL SECURITY;

-- Public read access for content (needed for public pages)
CREATE POLICY "Public read access" ON mobilker_content
  FOR SELECT USING (true);

-- Service role full access for content
CREATE POLICY "Service role full access" ON mobilker_content
  FOR ALL USING (auth.role() = 'service_role');

-- Public read access for images
CREATE POLICY "Public read access" ON mobilker_images
  FOR SELECT USING (true);

-- Service role full access for images
CREATE POLICY "Service role full access" ON mobilker_images
  FOR ALL USING (auth.role() = 'service_role');

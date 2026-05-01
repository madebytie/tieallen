import { handleSave } from 'next-inline-editor/api/save';
import { type NextRequest } from 'next/server';

const ALLOWED_FILES = new Set([
  'content/home.json',
  'content/about.json',
]);

export async function POST(request: NextRequest) {
  return handleSave(request, ALLOWED_FILES);
}

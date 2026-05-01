import { handleUpload } from 'next-inline-editor/api/upload';

export async function POST(request: Request) {
  return handleUpload(request);
}

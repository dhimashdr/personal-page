// app/api/draft/route.ts
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get('key');

  if (key !== process.env.DRAFT_MODE_KEY) {
    return new Response('Invalid key', { status: 401 });
  }

  const draft = await draftMode();
  draft.enable();

  redirect('/');
}
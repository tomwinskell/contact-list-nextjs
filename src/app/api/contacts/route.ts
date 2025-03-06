import { ContactSchema } from '@/app/lib/contactSchema';
import { NextResponse } from 'next/server';
import sql from '@/app/api/db';
import { keysToLowerCase } from '@/app/lib/helpers';

export async function POST(request: Request) {
  const body = await request.json();
  const result = ContactSchema.safeParse(body);
  if (result.success) {
    const contact = keysToLowerCase(body);
    const response = await sql`
      insert into contacts
      ${sql(
        contact,
        'firstname',
        'lastname',
        'email',
        'phone',
        'contactimage'
      )}
      returning *
    `;
    return NextResponse.json({ success: true, contacts: response });
  }
  const serverErrors = Object.fromEntries(
    result.error?.issues?.map((issue) => [issue.path[0], issue.message]) || []
  );
  return NextResponse.json({ errors: serverErrors });
}

export async function GET() {
  const response = await sql`
  select * from contacts
  order by firstname asc
  `
  return NextResponse.json({ contacts: response })
}

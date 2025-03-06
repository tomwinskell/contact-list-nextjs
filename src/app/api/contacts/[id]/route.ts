export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id= params.id  // 312
   return Response.json({ data : id })
}
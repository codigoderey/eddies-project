export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import { sendEmail } from '@/utils/sendEmail';

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the request body

    const htmlBody = `
      <h1>You have requested a quote with the following information.</h1>
      <p><strong>Name:</strong> ${body.First} ${body.Last}</p>
      <p><strong>Email: </strong>${body.Email}</p>
      <p><strong>Phone: </strong>${body.Phone}</p>
      <p><strong>Address: </strong>${body.Street} ${body.City} ${body.State} ${body.Zip}</p>
      <p><strong>Service: </strong>${body.ProjectType}</p>
      <p><strong>You want the quote done: </strong>${body.ProjectEstimateTimeframe}</p>
      <p><strong>You want the job done: </strong>${body.ProjectWorkDoneTimeframe}</p>
      <p><strong>Comments: </strong>${body.Comments}</p>
      <hr />
      <p>We will contact you according to the information above.</p>
      <p>You can also visit our website at <a href="https://4zimprov.com/">https://4zimprov.com/</a>.</p>
    `;

    // Send an email to the user
    await sendEmail(
      [body.Email, 'rnavedojr@gmail.com', 'ewsv03@gmail.com'],
      'Thank you for your interest in 4zImprov services.',
      htmlBody
    );

    return NextResponse.json(body);
  } catch (error) {
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    console.error('Error response:', error.response ? error.response.data : 'No response data');

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: 'GET leads' });
}

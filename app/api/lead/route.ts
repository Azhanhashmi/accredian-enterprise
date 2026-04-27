import { NextRequest, NextResponse } from 'next/server';

type LeadData = {
  fullName: string;
  workEmail: string;
  companyName: string;
  teamSize: string;
  message?: string;
};

// In-memory store (resets on server restart — swap for DB in production)
const leads: (LeadData & { submittedAt: string })[] = [];

export async function POST(req: NextRequest) {
  try {
    const body: LeadData = await req.json();

    // Basic validation
    if (!body.fullName || !body.workEmail || !body.companyName || !body.teamSize) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.workEmail)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Store lead
    const lead = { ...body, submittedAt: new Date().toISOString() };
    leads.push(lead);

    console.log(`✅ New lead captured: ${body.fullName} from ${body.companyName}`);
    console.log(`   Total leads so far: ${leads.length}`);

    return NextResponse.json({
      success: true,
      message: 'Thank you! Our team will reach out within 24 hours.',
      leadId: `LEAD-${Date.now()}`,
    });
  } catch (err) {
    console.error('Lead API error:', err);
    return NextResponse.json(
      { success: false, message: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
}

// GET to view leads (useful during development)
export async function GET() {
  return NextResponse.json({
    total: leads.length,
    leads: leads,
  });
}

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { message, email } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.SLACK_WEBHOOK_URL;

    if (webhookUrl) {
      const payload = {
        text: "🔔 *새로운 문의가 도착했습니다!*",
        blocks: [
          {
            type: "header",
            text: {
              type: "plain_text",
              text: "🔔 새로운 문의 도착",
              emoji: true,
            },
          },
          {
            type: "section",
            fields: [
              {
                type: "mrkdwn",
                text: `*이메일:*\n${email || "입력되지 않음"}`,
              },
              {
                type: "mrkdwn",
                text: `*내용:*\n${message}`,
              },
            ],
          },
          {
            type: "divider",
          },
        ],
      };

      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } else {
      console.warn("SLACK_WEBHOOK_URL is not defined. Message not sent to Slack.");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

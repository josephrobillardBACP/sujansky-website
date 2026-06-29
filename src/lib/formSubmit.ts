type SubmissionPayload = Record<string, string>;

const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '8909fd25-ae7a-4964-a69a-191d9e02e093';

const SITE_NAME = 'Sujansky MD';

export async function submitWebsiteForm(payload: SubmissionPayload) {
  const taggedSubject = payload.subject
    ? `[${SITE_NAME}] ${payload.subject}`
    : `[${SITE_NAME}] New website inquiry`;

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      ...payload,
      subject: taggedSubject,
      submitted_from: SITE_NAME,
    }),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok || !result?.success) {
    throw new Error(result?.message || 'submission-failed');
  }

  return result;
}

/** General inbox for website inquiries (production / company). */
export const COMPANY_GENERAL_EMAIL = 'admin@gepnetwork.com'

export type ContactFormPayload = {
  name: string
  email: string
  company?: string
  message: string
  subjectPrefix?: string
}

export function buildGeneralInquiryMailto(payload: ContactFormPayload): string {
  const { name, email, company, message, subjectPrefix = 'GEP Network website inquiry' } = payload
  const subject = `${subjectPrefix} — ${name}`
  const bodyLines = [
    `Name: ${name}`,
    `Email: ${email}`,
    ...(company?.trim() ? [`Company / Tour: ${company.trim()}`] : []),
    '',
    message,
  ]
  const query = new URLSearchParams({
    subject,
    body: bodyLines.join('\n'),
  })
  return `mailto:${COMPANY_GENERAL_EMAIL}?${query.toString()}`
}

/** Opens the visitor's email app with a draft to the general company inbox. */
export function sendGeneralInquiry(payload: ContactFormPayload): void {
  window.location.href = buildGeneralInquiryMailto(payload)
}

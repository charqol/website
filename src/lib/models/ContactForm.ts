export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneCode: string;
  phone: string;
  company: string;
  position: string;
  message: string;
  service: string;
  submittedAt: Date;
  ipAddress?: string;
  userAgent?: string | null;
}

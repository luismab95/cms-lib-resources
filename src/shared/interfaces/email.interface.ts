export interface EmailI {
  to: string;
  from: string;
  subject: string;
  templateName: string;
  context: any;
}

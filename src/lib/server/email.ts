import nodemailer from 'nodemailer';
import { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } from '$env/static/private';
import type { ContactFormData } from '$lib/models/ContactForm';
import { readFileSync } from 'fs';
import { join } from 'path';
import * as path from 'path';
import * as fs from 'fs';
import { getBasicInfo } from '$lib/data/email';

////////////////////////////////////////////////////////////////////

// Check if email is configured
const isEmailConfigured = SMTP_HOST && SMTP_USER && SMTP_PASS;

if (!isEmailConfigured) {
    console.warn('Email configuration is missing. Please check your environment variables.');
}

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465, // true for 465, false for other ports
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
    },
});

// Basic email validation with regex
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Function to load and parse an email template
function loadTemplate(templateName: string, data: Record<string, any>): string {
    try {
        // Resolve the path to the template file
        const templatePath = join(process.cwd(), 'src', 'lib', 'email.templates', `${templateName}.html`);

        // Read the template file
        let template = readFileSync(templatePath, 'utf8');

        // Replace placeholders with actual data
        Object.entries(data).forEach(([key, value]) => {
            const placeholder = new RegExp(`{{${key}}}`, 'g');
            template = template.replace(placeholder, value?.toString() || '');
        });

        return template;
    } catch (error) {
        console.error(`Error loading template ${templateName}:`, error);
        return '';
    }
}

// Send notification email to admin
export async function sendAdminNotification(formData: ContactFormData): Promise<boolean> {
    try {

        const baseData = getBasicInfo();

        // Format data for display
        const templateData = {
            ...formData,
            ...baseData,
            currentYear: new Date().getFullYear(),
            submittedAt: formData.submittedAt.toLocaleString()
        };

        // Load and fill the template
        const htmlContent = loadTemplate('admin.notification', templateData);

        if (!htmlContent) {
            throw new Error('Failed to load admin notification template');
        }

        const mailOptions = {
            from: 'contact@inflectionzone.com',
            to: 'sales@inflectionzone.com',
            subject: 'New Contact Form Submission',
            html: htmlContent
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Admin notification sent:', info.messageId);
        return true;
    } catch (error) {
        console.error('Error sending admin notification:', error);
        return false;
    }
}

// Send confirmation email to the user
export async function sendUserConfirmation(formData: ContactFormData): Promise<boolean> {
    try {

        const baseData = getBasicInfo();

        // Format data for display
        const templateData = {
            ...formData,
            ...baseData,
            currentYear: new Date().getFullYear(),
            submittedAt: formData.submittedAt.toLocaleString()
        };

        // Load and fill the template
        const htmlContent = loadTemplate('user.confirmation', templateData);

        if (!htmlContent) {
            throw new Error('Failed to load user confirmation template');
        }

        const mailOptions = {
            from: 'contact@inflectionzone.com',
            to: formData.email,
            subject: 'Thank You for Contacting Inflection Zone',
            html: htmlContent
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('User confirmation sent:', info.messageId);
        return true;
    } catch (error) {
        console.error('Error sending user confirmation:', error);
        return false;
    }
}

// Advanced email verification with DNS MX record check
// Note: This requires additional packages like 'dns' and works only on Node.js
export async function verifyEmailDomain(email: string): Promise<boolean> {
    if (!isValidEmail(email)) return false;

    try {
        const domain = email.split('@')[1];
        return new Promise((resolve) => {
            import('dns').then(dns => {
                dns.resolveMx(domain, (err, addresses) => {
                    if (err || !addresses || addresses.length === 0) {
                        resolve(false);
                    } else {
                        resolve(true);
                    }
                });
            }).catch(() => resolve(false));
        });
    } catch (error) {
        console.error('Error verifying email domain:', error);
        return false;
    }
}


// Function to load and parse an email template
// function loadTemplate(templateName: string, data: Record<string, any>): string {
//     try {
//         // Resolve the path to the template file
//         const templatePath = join(process.cwd(), 'src', 'lib', 'email.templates', `${templateName}.html`);
//         const baseTemplatePath = path.join(process.cwd(), 'src', 'lib', 'email.templates', `base.template.html`);

//         // Read the template file
//         let templateText = readFileSync(templatePath, 'utf8');
//         if (!templateText) {
//             throw new Error(`Template ${templateName} not found`);
//         }

//         // Read the base template file
//         let baseTemplateText = readFileSync(baseTemplatePath, 'utf8');
//         if (!baseTemplateText) {
//             throw new Error(`Base template not found`);
//         }

//         templateText = baseTemplateText.replace('{{EmailContent}}', templateText);
//         if (!templateText) {
//             throw new Error(`Base template not found`);
//         }

//         // Replace placeholders with actual data
//         Object.entries(data).forEach(([key, value]) => {
//             const placeholder = new RegExp(`{{${key}}}`, 'g');
//             templateText = templateText.replace(placeholder, value?.toString() || '');
//         });

//         return templateText;
//     } catch (error) {
//         console.error(`Error loading template ${templateName}:`, error);
//         return '';
//     }
// }


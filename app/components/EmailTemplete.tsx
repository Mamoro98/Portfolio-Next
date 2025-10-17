import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ color: '#8B5CF6', borderBottom: '2px solid #8B5CF6', paddingBottom: '10px' }}>
        New Contact Form Message
      </h2>
      
      <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
        <p style={{ margin: '0 0 15px 0' }}>
          <strong>From:</strong> {name}
        </p>
        <p style={{ margin: '0 0 15px 0' }}>
          <strong>Email:</strong> {email}
        </p>
        <p style={{ margin: '0 0 15px 0' }}>
          <strong>Subject:</strong> {subject}
        </p>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <h3 style={{ color: '#4F46E5' }}>Message:</h3>
        <div style={{ backgroundColor: '#ffffff', padding: '15px', border: '1px solid #e5e7eb', borderRadius: '5px', whiteSpace: 'pre-wrap' }}>
          {message}
        </div>
      </div>
      
      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f3f4f6', borderRadius: '5px', fontSize: '14px', color: '#6b7280' }}>
        <p style={{ margin: '0' }}>
          This message was sent from your portfolio contact form at morosama.vercel.app
        </p>
        <p style={{ margin: '5px 0 0 0' }}>
          Sent on: {new Date().toLocaleString()}
        </p>
      </div>
    </div>
  </div>
);

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/sonner';
import { submitWebsiteForm } from '@/lib/formSubmit';

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitWebsiteForm({
        subject: formData.subject,
        from_name: `${formData.first_name} ${formData.last_name}`.trim(),
        email: formData.email,
        replyto: formData.email,
        phone: formData.phone,
        first_name: formData.first_name,
        last_name: formData.last_name,
        message: formData.message,
      });

      setHasSubmitted(true);
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (hasSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-md border border-gray-200 bg-gray-100 px-6 py-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-navy" aria-hidden="true" />
        <h3 className="text-[1.4rem] font-semibold text-navy">Thank you for reaching out</h3>
        <p className="max-w-md text-[1rem] leading-relaxed text-navy/80">
          Your response has been submitted. The front office team will be reaching out to you within the next 48 hours to discuss further.
        </p>
        <button
          type="button"
          onClick={() => setHasSubmitted(false)}
          className="mt-2 text-sm font-medium text-navy/60 underline-offset-4 transition-colors hover:text-navy hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="first_name" className="text-navy font-medium">
            First Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="first_name"
            name="first_name"
            type="text"
            value={formData.first_name}
            onChange={handleChange}
            required
            className="mt-1 bg-white text-gray-900 border-gray-300"
          />
        </div>
        <div>
          <Label htmlFor="last_name" className="text-navy font-medium">
            Last Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="last_name"
            name="last_name"
            type="text"
            value={formData.last_name}
            onChange={handleChange}
            required
            className="mt-1 bg-white text-gray-900 border-gray-300"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email" className="text-navy font-medium">
          Email Address <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 bg-white text-gray-900 border-gray-300"
        />
      </div>

      <div>
        <Label htmlFor="phone" className="text-navy font-medium">
          Phone Number <span className="text-destructive">*</span>
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          className="mt-1 bg-white text-gray-900 border-gray-300"
        />
      </div>

      <div>
        <Label htmlFor="subject" className="text-navy font-medium">
          Subject <span className="text-destructive">*</span>
        </Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          required
          className="mt-1 bg-white text-gray-900 border-gray-300"
        />
      </div>

      <div>
        <Label htmlFor="message" className="text-navy font-medium">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="mt-1 bg-white text-gray-900 border-gray-300"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-navy text-white hover:bg-navy/90 transition-colors duration-200 active:scale-[0.98] uppercase font-medium disabled:opacity-70"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  );
}

export default ContactForm;

import { useState, type FormEvent } from "react";
import { CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";

const categories = [
  "Operator",
  "Supplier",
  "Regulator",
  "Researcher",
  "Compliance Expert",
  "Payment Provider",
  "Advertising Platform",
  "Technology Partner",
  "Other",
];

export function GetInvolvedForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="rounded-xl border border-egg-blue/30 bg-egg-blue/5 p-10 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-egg-blue/15 text-egg-blue mb-5">
          <CheckCircle2 size={22} aria-hidden />
        </div>
        <h3 className="font-display text-2xl font-semibold text-off-white">Thank you for reaching out.</h3>
        <p className="mt-3 text-sm text-cool-gray max-w-md mx-auto">
          Your enquiry has been noted. As preparations progress, the EGG team will reach out to relevant stakeholders directly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-[color:var(--border)] bg-charcoal p-8 md:p-10 space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
      noValidate={false}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Name" name="name" placeholder="Your full name" required autoComplete="name" />
        <Field
          label="Organization"
          name="organization"
          placeholder="Company / body / institution"
          required
          autoComplete="organization"
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-xs uppercase tracking-wide text-cool-gray mb-2">
          Stakeholder category
        </label>
        <div className="relative">
          <select
            id="category"
            name="category"
            required
            defaultValue=""
            className="egg-select w-full appearance-none rounded-md border border-[color:var(--border)] bg-base px-4 py-3 pr-11 text-sm text-off-white focus:border-egg-blue focus:outline-none focus:ring-1 focus:ring-egg-blue transition-colors"
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-egg-blue"
            aria-hidden
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-wide text-cool-gray mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="How would you like to contribute or collaborate?"
          className="w-full rounded-md border border-[color:var(--border)] bg-base px-4 py-3 text-sm text-off-white placeholder:text-cool-gray/60 focus:border-egg-blue focus:outline-none focus:ring-1 focus:ring-egg-blue resize-none transition-colors"
        />
      </div>

      <button type="submit" className="egg-btn-primary inline-flex w-full md:w-auto items-center justify-center gap-2">
        Submit enquiry <ArrowRight size={16} aria-hidden />
      </button>

      <p className="text-xs text-cool-gray/80">
        By submitting, you agree that EGG may contact you regarding your interest in the platform.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-wide text-cool-gray mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-md border border-[color:var(--border)] bg-base px-4 py-3 text-sm text-off-white placeholder:text-cool-gray/60 focus:border-egg-blue focus:outline-none focus:ring-1 focus:ring-egg-blue transition-colors"
      />
    </div>
  );
}

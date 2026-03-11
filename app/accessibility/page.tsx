export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-neutral-100 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl md:text-5xl font-heading font-bold mb-4">
          Accessibility
        </h1>
        <p className="text-neutral-600 mb-4">
          ClubConnect follows WCAG guidelines for color contrast and semantic
          markup. This is a placeholder accessibility statement — update with
          your institution's accessibility contact and processes.
        </p>
        <ul className="list-disc pl-6 text-neutral-600">
          <li>Contrast checks for text and UI components</li>
          <li>Keyboard navigable menus and forms</li>
          <li>Alt text on images where applicable</li>
        </ul>
      </div>
    </div>
  );
}

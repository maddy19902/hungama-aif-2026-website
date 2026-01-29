'use client';

import React, { useState } from 'react';

interface SubmitEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SubmitEntryModal({ isOpen, onClose }: SubmitEntryModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState<string>('');
  const [guidelinesAccepted, setGuidelinesAccepted] = useState(false);
  const [distributionRightsAccepted, setDistributionRightsAccepted] = useState(false);

  const [formData, setFormData] = useState({
    projectTitle: '',
    category: '',
    description: '',
    year: new Date().getFullYear().toString(),
    name: '',
    email: '',
    phone: '',
    linksUrls: '',
  });

  const generateSubmissionId = () => {
    const timestamp = Date.now().toString().slice(-4);
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `AIF-2026-SUB-${random}${timestamp}`;
  };

  const handleNextStep = () => {
    if (currentStep === 1 && !guidelinesAccepted) return;
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!distributionRightsAccepted) return;

    setIsLoading(true);

    setTimeout(() => {
      const id = generateSubmissionId();
      setSubmissionId(id);
      setIsLoading(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setSubmissionId('');
        setCurrentStep(1);
        setGuidelinesAccepted(false);
        setDistributionRightsAccepted(false);
        setFormData({
          projectTitle: '',
          category: '',
          description: '',
          year: new Date().getFullYear().toString(),
          name: '',
          email: '',
          phone: '',
          linksUrls: '',
        });
        onClose();
      }, 3000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-zinc-900 border border-zinc-800 rounded-lg w-full max-w-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto">
        {!isSubmitted ? (
          <>
            {/* Step Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-light text-white">Submit Your Entry</h3>
                <button onClick={onClose} className="text-zinc-400 hover:text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Progress Bar */}
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`flex-1 h-1 rounded-full transition-all ${
                      step <= currentStep ? 'bg-blue-500' : 'bg-zinc-700'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-zinc-400 mt-3">
                Step {currentStep} of 4
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Guidelines */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-light text-white mb-4">Submission Guidelines</h4>
                    <div className="bg-black/50 border border-zinc-800 rounded-lg p-4 space-y-3 text-sm text-zinc-300 mb-6">
                      <p>• Project must be original and unpublished</p>
                      <p>• Maximum project duration: 15 minutes</p>
                      <p>• Format: MP4, MOV, or streaming link (YouTube/Vimeo)</p>
                      <p>• AI-assisted work must be clearly disclosed</p>
                      <p>• All submissions are confidential</p>
                    </div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={guidelinesAccepted}
                        onChange={(e) => setGuidelinesAccepted(e.target.checked)}
                        className="mt-1 w-4 h-4 accent-blue-500"
                      />
                      <span className="text-sm text-zinc-400">
                        I have read and agree to the submission guidelines
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-light text-white mb-4">Project Details</h4>

                  <div>
                    <label className="block text-sm font-light text-zinc-300 mb-2">
                      Project Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.projectTitle}
                      onChange={(e) =>
                        setFormData({ ...formData, projectTitle: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-black border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="Your project title"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-light text-zinc-300 mb-2">
                      Category *
                    </label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-black border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="">Select a category</option>
                      <option value="direction">Direction</option>
                      <option value="cinematography">Cinematography</option>
                      <option value="sound">Sound Design</option>
                      <option value="screenplay">Screenplay</option>
                      <option value="post-production">Post-Production</option>
                      <option value="ai-innovation">AI Innovation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-light text-zinc-300 mb-2">
                      Project Description
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-black border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500 resize-none"
                      placeholder="Brief description of your project"
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-light text-zinc-300 mb-2">
                      Production Year *
                    </label>
                    <input
                      type="number"
                      required
                      value={formData.year}
                      onChange={(e) =>
                        setFormData({ ...formData, year: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-black border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Links & Uploads */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-light text-white mb-4">Links & Uploads</h4>

                  <div>
                    <label className="block text-sm font-light text-zinc-300 mb-2">
                      Project Link (YouTube/Vimeo/Direct Link) *
                    </label>
                    <input
                      type="url"
                      required
                      value={formData.linksUrls}
                      onChange={(e) =>
                        setFormData({ ...formData, linksUrls: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-black border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="https://..."
                    />
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <p className="text-sm text-zinc-300">
                      Ensure the link is accessible and will remain available for the duration of the judging period.
                    </p>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Details */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-light text-white mb-4">Contact Details</h4>

                  <div>
                    <label className="block text-sm font-light text-zinc-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 bg-black border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-light text-zinc-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-black border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-light text-zinc-300 mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 bg-black border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="Your phone number"
                    />
                  </div>

                  {/* Distribution Rights Checkbox */}
                  <label className="flex items-start gap-3 cursor-pointer mt-6 pt-6 border-t border-zinc-800">
                    <input
                      type="checkbox"
                      checked={distributionRightsAccepted}
                      onChange={(e) =>
                        setDistributionRightsAccepted(e.target.checked)
                      }
                      className="mt-1 w-4 h-4 accent-blue-500"
                    />
                    <span className="text-sm text-zinc-400">
                      I confirm that I have all necessary rights to submit this project and agree to the terms of the AI Festival 2026
                    </span>
                  </label>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8 pt-8 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  disabled={currentStep === 1}
                  className="flex-1 px-4 py-3 border border-zinc-700 text-white rounded-lg hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Back
                </button>

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    disabled={currentStep === 1 && !guidelinesAccepted}
                    className="flex-1 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-light"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isLoading || !distributionRightsAccepted}
                    className="flex-1 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-light flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="w-4 h-4 animate-spin"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            opacity="0.3"
                          />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      'Submit'
                    )}
                  </button>
                )}
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="mb-4 flex justify-center animate-bounce">
              <svg
                className="w-12 h-12 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-light text-white mb-3">
              Submission Successful!
            </h3>
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4 mb-4">
              <p className="text-xs text-zinc-400 mb-1">Submission ID</p>
              <p className="text-lg font-mono font-semibold text-blue-400">
                {submissionId}
              </p>
            </div>
            <p className="text-sm font-light text-zinc-400">
              Thank you for your entry. We'll be in touch soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
        onClose();
      }, 2500);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-zinc-900 border border-zinc-800 rounded-lg w-full max-w-md p-6 md:p-8">
        {!isSubmitted ? (
          <>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-light text-white">Get in Touch</h3>
              <button
                onClick={onClose}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-light text-zinc-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-black border border-zinc-700 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-light text-zinc-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-black border border-zinc-700 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-light text-zinc-300 mb-2">
                  Message
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-black border border-zinc-700 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Your message"
                  rows={4}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-blue-500 text-white font-light rounded-lg hover:bg-blue-600 disabled:opacity-50 transition-colors mt-6 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="w-4 h-4 animate-spin"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.3"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="mb-4 flex justify-center animate-bounce">
              <svg
                className="w-12 h-12 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-light text-white mb-2">Message Sent!</h3>
            <p className="text-sm font-light text-zinc-400">
              Thanks for reaching out. We'll get back to you soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

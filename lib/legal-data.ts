export interface LegalPage {
  slug: string;
  title: string;
  category: 'Legal' | 'Privacy' | 'Terms' | 'Policy';
  date: string;
  lastUpdated: string;
  content: string;
}

export const legalPages: LegalPage[] = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    category: 'Privacy',
    date: '2024-01-01',
    lastUpdated: '2026-05-19',
    content: `
      <div class="absolute inset-0 pattern-squares opacity-[0.05] pointer-events-none"></div>

      <section class="relative border-b border-white/10 pb-10">
        <p class="mb-4 text-xs font-black uppercase tracking-[0.25em] text-lightning-blue flex items-center gap-2">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" stroke-linecap="round"/>
            <circle cx="12" cy="12" r="3" stroke="currentColor"/>
          </svg>
          PRIVACY POLICY
        </p>

        <h2 class="max-w-4xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
          Privacy Policy
        </h2>

        <div class="mt-6 max-w-4xl space-y-5">
          <p class="text-base leading-8 text-slate-300 sm:text-lg">
            At <strong class="text-lightning-blue">Roblox Rivals Hub</strong>, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <div class="tip-box">
            <div class="flex items-center gap-2 mb-2">
              <svg class="w-5 h-5 text-lightning-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 8v4l3 3" stroke="currentColor" stroke-linecap="round"/>
                <circle cx="12" cy="12" r="10" stroke="currentColor"/>
              </svg>
              <strong class="text-lightning-blue">Last Updated:</strong>
            </div>
            <p class="text-slate-300 text-sm leading-7">May 19, 2026</p>
          </div>
        </div>
      </section>

      <section class="relative mb-10 border-t border-white/10 pt-8">
        <h2 class="text-3xl font-black text-white flex items-center gap-3">
          <svg class="w-7 h-7 text-lightning-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" stroke="currentColor"/>
            <path d="M12 8v4l3 3" stroke="currentColor" stroke-linecap="round"/>
          </svg>
          1. Information We Collect
        </h2>

        <div class="mt-5 max-w-4xl space-y-5">
          <p class="text-base leading-8 text-slate-300 sm:text-lg">
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
        </div>

        <h3 class="mt-8 text-2xl font-black text-lightning-blue">Personal Data</h3>
        <p class="mt-4 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            While using our website, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:
        </p>
        <ul class="mt-4 max-w-4xl list-disc space-y-2 pl-6 text-slate-300">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Usage Data</li>
        </ul>

        <h3 class="mt-8 text-2xl font-black text-lightning-blue">Usage Data</h3>
        <p class="mt-4 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            We may also collect information on how the website is accessed and used. This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our website that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
        </p>
      </section>

      <section class="relative mb-10 border-t border-white/10 pt-8">
        <h2 class="text-3xl font-black text-white flex items-center gap-3">
          <svg class="w-7 h-7 text-dark-pink" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor"/>
            <path d="M8 7v2M12 7v2M16 7v2M8 15v2M12 15v2M16 15v2" stroke="currentColor" stroke-linecap="round"/>
          </svg>
          2. Use of Your Information
        </h2>

        <p class="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            We use the collected data for various purposes:
        </p>
        <ul class="mt-4 max-w-4xl list-disc space-y-2 pl-6 text-slate-300">
          <li>To provide and maintain our website</li>
          <li>To notify you about changes to our website</li>
          <li>To allow you to participate in interactive features of our website when you choose to do so</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so that we can improve our website</li>
          <li>To monitor the usage of our website</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>
      </section>

      <section class="relative mb-10 border-t border-white/10 pt-8">
        <h2 class="text-3xl font-black text-white flex items-center gap-3">
          <svg class="w-7 h-7 text-lightning-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4v16h16M4 12h16" stroke="currentColor" stroke-linecap="round"/>
            <path d="M8 8v8M12 8v4M16 8v2" stroke="currentColor" stroke-linecap="round"/>
          </svg>
          3. Cookies and Tracking Technologies
        </h2>

        <p class="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            We use cookies and similar tracking technologies to track the activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
        </p>
      </section>

      <section class="relative mb-10 border-t border-white/10 pt-8">
        <h2 class="text-3xl font-black text-white flex items-center gap-3">
          <svg class="w-7 h-7 text-dark-pink" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 8v4l3 3" stroke="currentColor" stroke-linecap="round"/>
            <circle cx="12" cy="12" r="10" stroke="currentColor"/>
          </svg>
          4. Third-Party Services
        </h2>

        <p class="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            Our website may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
        </p>
      </section>

      <section class="relative mb-10 border-t border-white/10 pt-8">
        <h2 class="text-3xl font-black text-white flex items-center gap-3">
          <svg class="w-7 h-7 text-lightning-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 4L12 14.01l-3-3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          5. Children's Privacy
        </h2>

        <p class="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            Our website does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us. If we become aware that we have collected personal data from children without verification of parental consent, we take steps to remove that information from our servers.
        </p>
      </section>

      <section class="relative border-t border-white/10 pt-8">
        <h2 class="text-3xl font-black text-white">6. Contact Us</h2>
        <p class="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            If you have any questions about this Privacy Policy, please contact us at <strong class="text-lightning-blue">privacy@rbxrivals.com</strong>
        </p>
      </section>
    `
  },
  {
    slug: 'terms-of-service',
    title: 'Terms of Service',
    category: 'Terms',
    date: '2024-01-01',
    lastUpdated: '2026-05-19',
    content: `
      <div class="absolute inset-0 pattern-squares opacity-[0.05] pointer-events-none"></div>

      <section class="relative border-b border-white/10 pb-10">
        <p class="mb-4 text-xs font-black uppercase tracking-[0.25em] text-lightning-blue flex items-center gap-2">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 12h6m-6 4h6m2-12H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2z" stroke="currentColor" stroke-linecap="round"/>
          </svg>
          TERMS OF SERVICE
        </p>

        <h2 class="max-w-4xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
          Terms of Service
        </h2>

        <div class="mt-6 max-w-4xl space-y-5">
          <p class="text-base leading-8 text-slate-300 sm:text-lg">
            By accessing and using <strong class="text-lightning-blue">Roblox Rivals Hub</strong>, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our website.
          </p>

          <div class="tip-box">
            <div class="flex items-center gap-2 mb-2">
              <svg class="w-5 h-5 text-lightning-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 8v4l3 3" stroke="currentColor" stroke-linecap="round"/>
                <circle cx="12" cy="12" r="10" stroke="currentColor"/>
              </svg>
              <strong class="text-lightning-blue">Last Updated:</strong>
            </div>
            <p class="text-slate-300 text-sm leading-7">May 19, 2026</p>
          </div>
        </div>
      </section>

      <section class="relative mb-10 border-t border-white/10 pt-8">
        <h2 class="text-3xl font-black text-white flex items-center gap-3">
          <svg class="w-7 h-7 text-lightning-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" stroke="currentColor"/>
            <path d="M12 8v4l3 3" stroke="currentColor" stroke-linecap="round"/>
          </svg>
          1. Use of Website
        </h2>

        <p class="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            Our website provides information, guides, and tools related to Roblox Rivals. You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.
        </p>

        <div class="warning-box mt-5">
          <div class="flex items-center gap-2 mb-2">
            <svg class="w-5 h-5 text-dark-pink" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 9v4M12 17h.01" stroke="currentColor" stroke-linecap="round"/>
              <circle cx="12" cy="12" r="10" stroke="currentColor"/>
            </svg>
            <strong class="text-dark-pink">Prohibited Activities:</strong>
          </div>
          <ul class="list-disc pl-5 text-slate-300 text-sm space-y-1">
            <li>Using our website in any way that violates any applicable laws or regulations</li>
            <li>Attempting to interfere with the proper working of our website</li>
            <li>Using any automated system to access our website</li>
            <li>Attempting to reverse engineer any portion of our website</li>
          </ul>
        </div>
      </section>

      <section class="relative mb-10 border-t border-white/10 pt-8">
        <h2 class="text-3xl font-black text-white flex items-center gap-3">
          <svg class="w-7 h-7 text-dark-pink" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor"/>
            <path d="M8 7v2M12 7v2M16 7v2M8 15v2M12 15v2M16 15v2" stroke="currentColor" stroke-linecap="round"/>
          </svg>
          2. Intellectual Property
        </h2>

        <p class="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            The content, organization, graphics, design, compilation, and other matters related to our website are protected under applicable copyrights, trademarks, and other proprietary rights. You may not copy, redistribute, use, or publish any part of our website without explicit permission.
        </p>
      </section>

      <section class="relative mb-10 border-t border-white/10 pt-8">
        <h2 class="text-3xl font-black text-white flex items-center gap-3">
          <svg class="w-7 h-7 text-lightning-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4v16h16M4 12h16" stroke="currentColor" stroke-linecap="round"/>
            <path d="M8 8v8M12 8v4M16 8v2" stroke="currentColor" stroke-linecap="round"/>
          </svg>
          3. Disclaimer of Warranties
        </h2>

        <p class="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            Our website is provided on an "AS IS" and "AS AVAILABLE" basis. We make no representations or warranties of any kind, express or implied, regarding the operation or availability of our website, or the information, content, and materials included on our website.
        </p>
      </section>

      <section class="relative mb-10 border-t border-white/10 pt-8">
        <h2 class="text-3xl font-black text-white flex items-center gap-3">
          <svg class="w-7 h-7 text-dark-pink" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 8v4l3 3" stroke="currentColor" stroke-linecap="round"/>
            <circle cx="12" cy="12" r="10" stroke="currentColor"/>
          </svg>
          4. Limitation of Liability
        </h2>

        <p class="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            In no event shall Roblox Rivals Hub be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use our website.
        </p>
      </section>

      <section class="relative mb-10 border-t border-white/10 pt-8">
        <h2 class="text-3xl font-black text-white flex items-center gap-3">
          <svg class="w-7 h-7 text-lightning-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 4L12 14.01l-3-3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          5. Governing Law
        </h2>

        <p class="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            These Terms shall be governed and construed in accordance with the laws of your jurisdiction, without regard to its conflict of law provisions.
        </p>
      </section>

      <section class="relative border-t border-white/10 pt-8">
        <h2 class="text-3xl font-black text-white">6. Changes to Terms</h2>
        <p class="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. By continuing to access or use our website after those revisions become effective, you agree to be bound by the revised terms.
        </p>
        <p class="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            If you have any questions about these Terms, please contact us at <strong class="text-lightning-blue">legal@rbxrivals.com</strong>
        </p>
      </section>
    `
  },
  {
    slug: 'cookie-policy',
    title: 'Cookie Policy',
    category: 'Policy',
    date: '2024-01-01',
    lastUpdated: '2026-05-19',
    content: `
      <div class="absolute inset-0 pattern-squares opacity-[0.05] pointer-events-none"></div>

      <section class="relative border-b border-white/10 pb-10">
        <p class="mb-4 text-xs font-black uppercase tracking-[0.25em] text-lightning-blue flex items-center gap-2">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" stroke-linecap="round"/>
            <circle cx="12" cy="12" r="3" stroke="currentColor"/>
          </svg>
          COOKIE POLICY
        </p>

        <h2 class="max-w-4xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
          Cookie Policy
        </h2>

        <div class="mt-6 max-w-4xl space-y-5">
          <p class="text-base leading-8 text-slate-300 sm:text-lg">
            This Cookie Policy explains what cookies are and how we use them on <strong class="text-lightning-blue">Roblox Rivals Hub</strong>.
          </p>

          <div class="tip-box">
            <div class="flex items-center gap-2 mb-2">
              <svg class="w-5 h-5 text-lightning-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 8v4l3 3" stroke="currentColor" stroke-linecap="round"/>
                <circle cx="12" cy="12" r="10" stroke="currentColor"/>
              </svg>
              <strong class="text-lightning-blue">Last Updated:</strong>
            </div>
            <p class="text-slate-300 text-sm leading-7">May 19, 2026</p>
          </div>
        </div>
      </section>

      <section class="relative mb-10 border-t border-white/10 pt-8">
        <h2 class="text-3xl font-black text-white flex items-center gap-3">
          <svg class="w-7 h-7 text-lightning-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" stroke="currentColor"/>
            <path d="M12 8v4l3 3" stroke="currentColor" stroke-linecap="round"/>
          </svg>
          What Are Cookies?
        </h2>

        <p class="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            Cookies are small text files that are placed on your computer, smartphone, or other device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.
        </p>
      </section>

      <section class="relative mb-10 border-t border-white/10 pt-8">
        <h2 class="text-3xl font-black text-white flex items-center gap-3">
          <svg class="w-7 h-7 text-dark-pink" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor"/>
            <path d="M8 7v2M12 7v2M16 7v2M8 15v2M12 15v2M16 15v2" stroke="currentColor" stroke-linecap="round"/>
          </svg>
          How We Use Cookies
        </h2>

        <p class="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            We use cookies for the following purposes:
        </p>
        <ul class="mt-4 max-w-4xl list-disc space-y-2 pl-6 text-slate-300">
          <li><strong class="text-white">Essential Cookies:</strong> These cookies are necessary for the website to function properly.</li>
          <li><strong class="text-white">Preference Cookies:</strong> These cookies allow our website to remember choices you make.</li>
          <li><strong class="text-white">Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website.</li>
        </ul>
      </section>

      <section class="relative mb-10 border-t border-white/10 pt-8">
        <h2 class="text-3xl font-black text-white flex items-center gap-3">
          <svg class="w-7 h-7 text-lightning-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4v16h16M4 12h16" stroke="currentColor" stroke-linecap="round"/>
            <path d="M8 8v8M12 8v4M16 8v2" stroke="currentColor" stroke-linecap="round"/>
          </svg>
          Managing Cookies
        </h2>

        <p class="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience and/or lose access to certain features of our website.
        </p>

        <div class="responsive-table card-view mt-5">
          <table>
            <thead>
              <tr>
                <th>Browser</th>
                <th>How to Manage Cookies</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Browser">Google Chrome<td data-label="How to Manage Cookies">Settings > Privacy and Security > Cookies and other site data</td>
              </tr>
              <tr>
                <td data-label="Browser">Mozilla Firefox</td><td data-label="How to Manage Cookies">Options > Privacy & Security > Cookies and Site Data</td>
              </tr>
              <tr>
                <td data-label="Browser">Safari</td><td data-label="How to Manage Cookies">Preferences > Privacy > Cookies and website data</td>
              </tr>
              <tr>
                <td data-label="Browser">Microsoft Edge</td><td data-label="How to Manage Cookies">Settings > Site permissions > Cookies and site data</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="relative border-t border-white/10 pt-8">
        <h2 class="text-3xl font-black text-white">Contact Us</h2>
        <p class="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            If you have any questions about our Cookie Policy, please contact us at <strong class="text-lightning-blue">privacy@rbxrivals.com</strong>
        </p>
      </section>
    `
  },
  {
    slug: 'dmca',
    title: 'DMCA Notice',
    category: 'Legal',
    date: '2024-01-01',
    lastUpdated: '2026-05-19',
    content: `
      <div class="absolute inset-0 pattern-squares opacity-[0.05] pointer-events-none"></div>

      <section class="relative border-b border-white/10 pb-10">
        <p class="mb-4 text-xs font-black uppercase tracking-[0.25em] text-lightning-blue flex items-center gap-2">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 8v4l3 3" stroke="currentColor" stroke-linecap="round"/>
            <circle cx="12" cy="12" r="10" stroke="currentColor"/>
          </svg>
          DMCA NOTICE
        </p>

        <h2 class="max-w-4xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
          DMCA Copyright Notice
        </h2>

        <div class="mt-6 max-w-4xl space-y-5">
          <p class="text-base leading-8 text-slate-300 sm:text-lg">
            <strong class="text-lightning-blue">Roblox Rivals Hub</strong> respects the intellectual property rights of others and expects its users to do the same.
          </p>

          <div class="tip-box">
            <div class="flex items-center gap-2 mb-2">
              <svg class="w-5 h-5 text-lightning-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 8v4l3 3" stroke="currentColor" stroke-linecap="round"/>
                <circle cx="12" cy="12" r="10" stroke="currentColor"/>
              </svg>
              <strong class="text-lightning-blue">Last Updated:</strong>
            </div>
            <p class="text-slate-300 text-sm leading-7">May 19, 2026</p>
          </div>
        </div>
      </section>

      <section class="relative mb-10 border-t border-white/10 pt-8">
        <h2 class="text-3xl font-black text-white flex items-center gap-3">
          <svg class="w-7 h-7 text-lightning-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" stroke="currentColor"/>
            <path d="M12 8v4l3 3" stroke="currentColor" stroke-linecap="round"/>
          </svg>
          Reporting Copyright Infringement
        </h2>

        <p class="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            If you believe that any material available on or through our website infringes upon any copyright you own or control, please immediately notify our Designated Copyright Agent using the contact information provided below.
        </p>

        <div class="success-box mt-5">
          <div class="flex items-center gap-2 mb-2">
            <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 4L12 14.01l-3-3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <strong class="text-green-400">Your DMCA Notice Must Include:</strong>
          </div>
          <ul class="list-disc pl-5 text-slate-300 text-sm space-y-1 mt-2">
            <li>Identification of the copyrighted work you claim has been infringed</li>
            <li>Identification of the material that is claimed to be infringing</li>
            <li>Your contact information (address, telephone number, and email address)</li>
            <li>A statement that you have a good faith belief that use of the material is not authorized</li>
            <li>A statement that the information in the notice is accurate, under penalty of perjury</li>
            <li>Your physical or electronic signature</li>
          </ul>
        </div>
      </section>

      <section class="relative border-t border-white/10 pt-8">
        <h2 class="text-3xl font-black text-white">Designated Copyright Agent</h2>
        <p class="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            Please send DMCA notices to:
        </p>
        <div class="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
          <p class="text-slate-300"><strong class="text-white">Email:</strong> dmca@rbxrivals.com</p>
          <p class="text-slate-300 mt-2"><strong class="text-white">Address:</strong> DMCA Agent, Roblox Rivals Hub</p>
        </div>
      </section>
    `
  }
];
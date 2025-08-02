<script lang="ts">
    import Seo from '$components/common/Seo.svelte';
    import {
        PUBLIC_COMPANY_FULL_NAME,
        PUBLIC_CONTACT_EMAIL,
        PUBLIC_CONTACT_PHONE,
    } from '$env/static/public';
    import type { PageProps } from '../$types';

    const { data }: PageProps = $props();
    const seo = data?.seo;

    // Format current date for "Last Updated"
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    const compnayName = PUBLIC_COMPANY_FULL_NAME;
    const contactEmail = PUBLIC_CONTACT_EMAIL;
    const contactPhone = PUBLIC_CONTACT_PHONE;
    const jurisdiction = 'Maharashtra, India';

</script>

<Seo
    pageTitle={seo?.title}
    pageDescription={seo?.description}
    pageImage={seo?.image}
    pageUrl={seo?.url}
    pageKeywords={seo?.keywords}
    pageCardImage={seo?.cardImage}
    googleAnalyticsId={seo?.googleAnalyticsId}
    companyName={seo?.companyName}
    logo={seo?.logo}
    sameAs={seo?.sameAs}
    contactPoint={seo?.contactPoint}
/>

<!-- Page Header -->
<section class="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-900 py-16 md:py-20">
    <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-500 mb-4">Terms of Use</h1>
            <p class="text-base md:text-lg text-gray-600 dark:text-gray-300">Last Updated: {formattedDate}</p>
        </div>
    </div>
</section>

<section class="py-12 bg-white dark:bg-gray-800">
    <div class="container mx-auto px-4 max-w-5xl">
        <div class="prose dark:prose-invert prose-lg max-w-none">
            <h2 class="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
                Welcome to <span class="text-primary-600 dark:text-primary-200">{compnayName}</span>.<br/>
                These Terms of Use govern your use of our website and services. By accessing or using our website or services, you agree to be bound by these Terms.
                Please read these Terms carefully before using our services. If you do not agree with any part of these Terms, you must not use our website or services.
            </p>

            <h2 class="text-2xl font-semibold mt-8 mb-4">Definitions</h2>
            <ul>
                <li><strong>"Services"</strong> refers to the software development and related services provided by <span class="text-primary-600 dark:text-primary-200">{compnayName}</span>.</li>
                <li><strong>"Website"</strong> refers to the website operated by <span class="text-primary-600 dark:text-primary-200">{compnayName}</span>, including all content, pages, and functionality available at or through the website.</li>
                <li><strong>"User," "You," and "Your"</strong> refer to the individual or entity accessing or using the Services or Website.</li>
                <li><strong>"We," "Us," and "Our"</strong> refer to <span class="text-primary-600 dark:text-primary-200">{compnayName}</span>.</li>
            </ul>

            <h2 class="text-2xl font-semibold mt-8 mb-4">Use of Our Services</h2>
            <p>
                Our Services are intended for use by individuals or businesses seeking software development and related technology services. By using our Services, you represent and warrant that you have the legal capacity and authority to agree to these Terms.
            </p>
            <p>
                You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to use our Services:
            </p>
            <ul>
                <li>- In any way that violates any applicable federal, state, local, or international law or regulation.</li>
                <li>- To transmit any material that is defamatory, obscene, or offensive.</li>
                <li>- To impersonate or attempt to impersonate our company, an employee, another user, or any other person or entity.</li>
                <li>- To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Services.</li>
            </ul>

            <h2 class="text-2xl font-semibold mt-8 mb-4">Intellectual Property Rights</h2>
            <p>
                The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof), are owned by our company, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p>
                Unless explicitly stated otherwise, entering into a service agreement with us does not transfer any intellectual property rights from us to you, except for the limited license to use the deliverables as specified in the service agreement.
            </p>

            <h2 class="text-2xl font-semibold mt-8 mb-4">Client Materials and Licenses</h2>
            <p>
                You retain all ownership rights to any content, data, or materials you provide to us for the purpose of providing the Services ("Client Materials"). You grant us a non-exclusive license to use, reproduce, and modify the Client Materials solely for the purpose of providing the Services to you.
            </p>
            <p>
                You represent and warrant that you own or have the necessary licenses, rights, consents, and permissions to grant us the license to the Client Materials as described above.
            </p>

            <h2 class="text-2xl font-semibold mt-8 mb-4">Confidentiality</h2>
            <p>
                We respect the confidentiality of your information. We will not disclose your confidential information to any third party without your prior consent, except as required by law or as necessary to provide the Services. Confidential information includes any non-public information that you provide to us in connection with the Services.
            </p>

            <h2 class="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
            <p>
                To the fullest extent permitted by applicable law, in no event will we or our directors, officers, employees, agents, partners, suppliers, or licensors be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul>
                <li>- Your access to or use of or inability to access or use the Services.</li>
                <li>- Any conduct or content of any third party on the Services.</li>
                <li>- Any content obtained from the Services.</li>
                <li>- Unauthorized access, use, or alteration of your transmissions or content.</li>
            </ul>

            <h2 class="text-2xl font-semibold mt-8 mb-4">Disclaimer of Warranties</h2>
            <p>
                Your use of our Website and Services is at your sole risk. The Website and Services are provided on an "AS IS" and "AS AVAILABLE" basis. We expressly disclaim all warranties of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>

            <h2 class="text-2xl font-semibold mt-8 mb-4">Governing Law</h2>
            <p>
                These Terms shall be governed by and construed in accordance with the laws of {jurisdiction}, without regard to its conflict of law principles.
            </p>

            <h2 class="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
            <p>
                We reserve the right to modify these Terms at any time. When we make changes, we will update the "Last Updated" date at the top of these Terms. Your continued use of our Services after any changes to these Terms constitutes your acceptance of the new Terms.
            </p>

            <h2 class="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>
                If you have any questions about these Terms, please contact us:
            </p>
            <ul>
                <li>By email: <a href="mailto:{contactEmail}" class="text-primary-600 dark:text-primary-400 hover:underline">{contactEmail}</a></li>
                <li>By visiting the contact page on our website</li>
            </ul>
        </div>
    </div>
</section>

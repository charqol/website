<script lang="ts">
    // Format current date for "Last Updated"
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
    const compnayName = 'Inflection Zone Lab Private Limited';
    const contactEmail = 'contact@inflectionzone.com';
</script>

<!-- Page Header -->
<section class="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-900 py-16 md:py-20">
    <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-500 mb-4">Privacy Policy</h1>
            <p class="text-base md:text-lg text-gray-600 dark:text-gray-300">Last Updated: {formattedDate}</p>
        </div>
    </div>
</section>

<section class="py-12 bg-white dark:bg-gray-800">
    <div class="container mx-auto px-4 max-w-4xl">
        <div class="prose dark:prose-invert prose-lg max-w-none">
            <h2 class="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
                At <span class="text-primary-600 dark:text-primary-200">{compnayName}</span>, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, process, and store your information when you visit our website or use our services.
            </p>
            <p>
                Please read this Privacy Policy carefully to understand our practices regarding your personal data.
            </p>

            <h2 class="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
                <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when filling out forms on our website or contacting us.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, pages visited, time spent on pages, and other diagnostic data.</li>
                <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</li>
            </ul>

            <h2 class="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including:</p>
            <ul>
                <li>- Providing and maintaining our services</li>
                <li>- Notifying you about changes to our services</li>
                <li>- Providing customer support</li>
                <li>- Gathering analysis or valuable information to improve our services</li>
                <li>- Monitoring the usage of our services</li>
                <li>- Detecting, preventing, and addressing technical issues</li>
                <li>- Sending you marketing and promotional communications (only with your consent)</li>
            </ul>

            <h2 class="text-2xl font-semibold mt-8 mb-4">Data Retention</h2>
            <p>
                We will retain your personal data only for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>

            <h2 class="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
            <p>
                We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
            </p>

            <h2 class="text-2xl font-semibold mt-8 mb-4">Your Data Protection Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul>
                <li><strong>Access:</strong> The right to request copies of your personal data.</li>
                <li><strong>Rectification:</strong> The right to request that we correct any inaccurate information about you.</li>
                <li><strong>Erasure:</strong> The right to request that we delete your personal data in certain circumstances.</li>
                <li><strong>Restrict Processing:</strong> The right to request that we restrict the processing of your personal data.</li>
                <li><strong>Data Portability:</strong> The right to request that we transfer the data we have collected to another organization or directly to you.</li>
                <li><strong>Object to Processing:</strong> The right to object to our processing of your personal data.</li>
            </ul>

            <h2 class="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
            <p>
                We may employ third-party companies and individuals to facilitate our services, provide services on our behalf, perform service-related tasks, or assist us in analyzing how our services are used. These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>

            <h2 class="text-2xl font-semibold mt-8 mb-4">Children's Privacy</h2>
            <p>
                Our services are not intended for use by children under the age of 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.
            </p>

            <h2 class="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2 class="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>
                If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul>
                <li>By email: <a href="mailto:{contactEmail}" class="text-primary-600 dark:text-primary-400 hover:underline">{contactEmail}</a></li>
                <li>By visiting the contact page on our website</li>
            </ul>
        </div>
    </div>
</section>

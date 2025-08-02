<script lang="ts">
    export let technologies: string[] = [];
    const techstackLogo = 'h-10 w-10 mb-2 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]';
</script>

<div class="mt-6">
    <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technology Stack</h4>
    <div class="flex flex-wrap gap-3 bg-gradient-to-b from-gray-20 to-gray-200 dark:from-gray-600 dark:to-gray-700 rounded-xl p-8">
        {#each technologies as tech}
            <div class="p-2 flex flex-col items-center justify-center" title={tech}>
                {#if tech.includes('Svelte')}
                    <img src="/images/techstack/svelte.svg" alt="Svelte" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">Svelte</span>
                {:else if tech.includes('Node')}
                    <img src="/images/techstack/nodejs.svg" alt="Node.js" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">Node.js</span>
                {:else if tech.includes('Python')}
                    <img src="/images/techstack/python.svg" alt="Python" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">Python</span>
                {:else if tech.includes('Express')}
                    <img src="/images/techstack/express.svg" alt="Express" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">Express</span>
                {:else if tech.includes('PostgreSQL')}
                    <img src="/images/techstack/postgresql.svg" alt="PostgreSQL" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">PostgreSQL</span>
                {:else if tech.includes('MySQL')}
                    <img src="/images/techstack/mysql-2.svg" alt="MySQL" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">MySQL</span>
                {:else if tech.includes('Redis')}
                    <img src="/images/techstack/redis.svg" alt="Redis" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">Redis</span>
                {:else if tech.includes('RabbitMQ')}
                    <img src="/images/techstack/rabbitmq.svg" alt="RabbitMQ" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">RabbitMQ</span>
                {:else if tech.includes('Docker')}
                    <img src="/images/techstack/docker.svg" alt="Docker" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">Docker</span>
                {:else if tech.includes('AWS')}
                    <img src="/images/techstack/aws.svg" alt="AWS" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">AWS</span>
                {:else if tech.includes('Azure')}
                    <img src="/images/techstack/azure.svg" alt="Azure" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">Azure</span>
                {:else if tech.includes('GCP')}
                    <img src="/images/techstack/gcp.svg" alt="GCP" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">GCP</span>
                {:else if tech.includes('Kubernetes')}
                    <img src="/images/techstack/kubernetes.svg" alt="Kubernetes" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">Kubernetes</span>
                {:else if tech.includes('.NET')}
                    <img src="/images/techstack/dotnet.svg" alt=".NET" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">.NET</span>
                {:else if tech.includes('Stripe')}
                    <img src="/images/techstack/stripe-2.svg" alt="Stripe" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">Stripe</span>
                {:else if tech.includes('Plaid')}
                    <img src="/images/techstack/plaid.png" alt="Plaid" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">Plaid</span>
                {:else if tech.includes('Binance')}
                    <img src="/images/techstack/binance.svg" alt="Binance" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">Binance</span>
                {:else if tech.includes('Coingecko')}
                    <img src="/images/techstack/coingecko.png" alt="Coingecko" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">Coingecko</span>
                {:else if tech.includes('React')}
                    <img src="/images/techstack/react.svg" alt="React" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">React</span>
                {:else if tech.includes('Vue')}
                    <img src="/images/techstack/vue.svg" alt="Vue" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">Vue</span>
                {:else if tech.includes('Angular')}
                    <img src="/images/techstack/angular.svg" alt="Angular" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">Angular</span>
                {:else if tech.includes('Next')}
                    <img src="/images/techstack/nextjs.svg" alt="Next.js" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">Next.js</span>
                {:else if tech.includes('WebRTC')}
                    <img src="/images/techstack/webrtc.svg" alt="WebRTC" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">WebRTC</span>
                {:else if tech.includes('HL7 FHIR')}
                    <img src="/images/techstack/hl7-fhir.svg" alt="HL7 FHIR" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">HL7 FHIR</span>
                {:else if tech.includes('MongoDB')}
                    <img src="/images/techstack/mongodb.svg" alt="MongoDB" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">MongoDB</span>
                {:else if tech.includes('Firebase')}
                    <img src="/images/techstack/firebase.svg" alt="Firebase" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">Firebase</span>
                {:else if tech.includes('Flutter')}
                    <img src="/images/techstack/flutter.svg" alt="Flutter" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">Flutter</span>
                {:else if tech.includes('WhatsApp')}
                    <img src="/images/techstack/whatsapp.svg" alt="WhatsApp" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">WhatsApp</span>
                {:else if tech.includes('Telegram')}
                    <img src="/images/techstack/telegram.svg" alt="Telegram" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">Telegram</span>
                {:else if tech.includes('Elasticsearch')}
                    <img src="/images/techstack/elasticsearch.svg" alt="Elasticsearch" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">Elasticsearch</span>
                {:else if tech.includes('EdgeX Foundry')}
                    <img src="/images/techstack/edgex-foundry.webp" alt="EdgeX Foundry" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">EdgeX Foundry</span>
                {:else if tech.includes('Next.js')}
                    <img src="/images/techstack/nextjs.svg" alt="Next.js" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">Next.js</span>
                {:else if tech.includes('GraphQL')}
                    <img src="/images/techstack/graphql.svg" alt="GraphQL" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">GraphQL</span>
                {:else if tech.includes('Tailwind CSS')}
                    <img src="/images/techstack/tailwindcss.svg" alt="Tailwind CSS" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">Tailwind CSS</span>
                {:else if tech.includes('CloudFlare')}
                    <img src="/images/techstack/cloudflare.svg" alt="Cloudflare" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">Cloudflare</span>
                {:else if tech.includes('Razorpay')}
                    <img src="/images/techstack/razorpay.png" alt="Razorpay" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">Razorpay</span>
                {:else if tech.includes('IoT')}
                    <img src="/images/techstack/iot.svg" alt="IoT" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">IoT</span>
                {:else if tech.includes('TensorFlow')}
                    <img src="/images/techstack/tensorflow.svg" alt="TensorFlow" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">TensorFlow</span>
                {:else if tech.includes('PyTorch')}
                    <img src="/images/techstack/pytorch.svg" alt="PyTorch" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">PyTorch</span>
                {:else if tech.includes('CSharp')}
                    <img src="/images/techstack/csharp.svg" alt="CSharp" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">CSharp</span>
                {:else if tech.includes('FastAPI')}
                    <img src="/images/techstack/fastapi.svg" alt="FastAPI" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">FastAPI</span>
                {:else if tech.includes('Cpp')}
                    <img src="/images/techstack/cpp3.svg" alt="C++" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">C++</span>
                {:else if tech.includes('OpenCV')}
                    <img src="/images/techstack/opencv.svg" alt="OpenCV" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">OpenCV</span>
                {:else if tech.includes('Java')}
                    <img src="/images/techstack/java.svg" alt="Java" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">Java</span>
                {:else if tech.includes('NumPy')}
                    <img src="/images/techstack/numpy.svg" alt="NumPy" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">NumPy</span>
                {:else if tech.includes('Pandas')}
                    <img src="/images/techstack/pandas.svg" alt="Pandas" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">Pandas</span>
                {:else if tech.includes('Three.js')}
                    <img src="/images/techstack/threejs.svg" alt="Three.js" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">Three.js</span>
                {:else if tech.includes('WebGL')}
                    <img src="/images/techstack/webgl.svg" alt="WebGL" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">WebGL</span>
                {:else if tech.includes('SendGrid')}
                    <img src="/images/techstack/sendgrid.png" alt="SendGrid" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">SendGrid</span>
                {:else if tech.includes('Socket.io')}
                    <img src="/images/techstack/socketio.svg" alt="Socket.io" class="{techstackLogo}" />
                    <span class="text-xs text-gray-600 dark:text-gray-300">Socket.io</span>
                {:else}
                    <span class="text-sm text-gray-600 dark:text-gray-300">{tech}</span>
                {/if}
            </div>
        {/each}
    </div>
</div>

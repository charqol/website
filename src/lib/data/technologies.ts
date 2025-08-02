import type { TechnologyCategory } from '$lib/types/technology';

// Placeholder icons used. Replace with actual paths to your SVG/image files.
export const technologyCategories: TechnologyCategory[] = [
    {
        name: 'Backend Development',
        technologies: [
            { name: 'Node.js', icon: '/images/techstack/nodejs.svg', link: 'https://nodejs.org/' },
            { name: 'Python', icon: '/images/techstack/python.svg', link: 'https://www.python.org/' },
            { name: 'Java', icon: '/images/techstack/java.svg', link: 'https://www.java.com/' },
            { name: 'Go', icon: '/images/techstack/go.svg', link: 'https://golang.org/' },
            { name: '.NET Core', icon: '/images/techstack/dotnet.svg', link: 'https://dotnet.microsoft.com/' },
            { name: 'C++', icon: '/images/techstack/cpp3.svg', link: 'https://isocpp.org/' },
            { name: 'Express.js', icon: '/images/techstack/express.svg', link: 'https://expressjs.com/' },
            { name: 'Fastify', icon: '/images/techstack/fastify.svg', link: 'https://www.fastify.io/' },
            { name: 'NestJS', icon: '/images/techstack/nestjs.svg', link: 'https://nestjs.com/' },
            { name: 'Spring Boot', icon: '/images/techstack/spring.svg', link: 'https://spring.io/projects/spring-boot' },
            { name: 'FastAPI', icon: '/images/techstack/fastapi.svg', link: 'https://fastapi.tiangolo.com/' },
            { name: 'Gin', icon: '/images/techstack/gin.svg', link: 'https://gin-gonic.com/' },
            { name: 'Postman', icon: '/images/techstack/postman.svg', link: 'https://www.postman.com/' },
            { name: 'Bruno', icon: '/images/techstack/bruno.png', link: 'https://www.usebruno.com/' },
            { name: 'Swagger', icon: '/images/techstack/swagger.svg', link: 'https://swagger.io/' },
            { name: 'OpenAPI', icon: '/images/techstack/openapi.png', link: 'https://www.openapis.org/' },
            { name: 'Async API', icon: '/images/techstack/asyncapi.png', link: 'https://www.asyncapi.com/' },
            { name: 'REST APIs', icon: '/images/techstack/rest.svg' }, // No single official link
            { name: 'GraphQL', icon: '/images/techstack/graphql.svg', link: 'https://graphql.org/' },
            { name: 'gRPC', icon: '/images/techstack/grpc.png', link: 'https://grpc.io/' },
        ]
    },
    {
        name: 'Mobile Applications',
        technologies: [
            { name: 'Flutter', icon: '/images/techstack/flutter.svg', link: 'https://flutter.dev/' },
            { name: '.NET MAUI', icon: '/images/techstack/dotnet.svg', link: 'https://learn.microsoft.com/en-us/dotnet/maui/' },
        ]
    },
    {
        name: 'Web Applications',
        technologies: [
            { name: 'Svelte & SvelteKit', icon: '/images/techstack/svelte.svg', link: 'https://svelte.dev/' },
            { name: 'React & Next.js', icon: '/images/techstack/react.svg', link: 'https://react.dev/' },
            { name: 'Vue & Nuxt.js', icon: '/images/techstack/vue.svg', link: 'https://vuejs.org/' },
            { name: 'TypeScript', icon: '/images/techstack/typescript.svg', link: 'https://www.typescriptlang.org/' },
            { name: 'JavaScript (ESNext)', icon: '/images/techstack/javascript.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
            { name: 'HTML5', icon: '/images/techstack/html-5.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
            { name: 'CSS3 & TailwindCSS', icon: '/images/techstack/tailwindcss.svg', link: 'https://tailwindcss.com/' },
            { name: 'PWAs', icon: '/images/techstack/pwa.svg', link: 'https://web.dev/progressive-web-apps/' },
            { name: 'WebAssembly', icon: '/images/techstack/wasm.svg', link: 'https://webassembly.org/' },
        ]
    },
    {
        name: 'Desktop Applications',
        technologies: [
            { name: 'ElectronJS', icon: '/images/techstack/electronjs.svg', link: 'https://www.electronjs.org/' },
            { name: '.NET MAUI', icon: '/images/techstack/maui.png', link: 'https://learn.microsoft.com/en-us/dotnet/maui/' }, // Repeat from Mobile but relevant
            { name: 'WPF', icon: '/images/techstack/wpf.jpg', link: 'https://learn.microsoft.com/en-us/dotnet/desktop/wpf/' },
            { name: 'WinForms', icon: '/images/techstack/winforms.png', link: 'https://learn.microsoft.com/en-us/dotnet/desktop/winforms/' },
            { name: 'Qt', icon: '/images/techstack/qt.svg', link: 'https://www.qt.io/' },
        ]
    },
    {
        name: 'Databases & Storage',
        technologies: [
            { name: 'PostgreSQL', icon: '/images/techstack/postgresql.svg', link: 'https://www.postgresql.org/' },
            { name: 'MySQL', icon: '/images/techstack/mysql.svg', link: 'https://www.mysql.com/' },
            { name: 'MongoDB', icon: '/images/techstack/mongodb.svg', link: 'https://www.mongodb.com/' },
            { name: 'SQLServer', icon: '/images/techstack/sqlserver.png', link: 'https://www.microsoft.com/en-us/sql-server/sql-server-2019' },
            { name: 'Redis', icon: '/images/techstack/redis.svg', link: 'https://redis.io/' },
            { name: 'Valkey', icon: '/images/techstack/valkey.png', link: 'https://valkey.redis.com/' },
            { name: 'SQLite', icon: '/images/techstack/sqlite.svg', link: 'https://www.sqlite.org/' },
            { name: 'ScyllaDB', icon: '/images/techstack/scylladb.webp', link: 'https://www.scylladb.com/' },
            { name: 'Cassandra', icon: '/images/techstack/cassandra.svg', link: 'https://cassandra.apache.org/_/index.html' },
            { name: 'PGVector VectorDB', icon: '/images/techstack/postgresql.svg', link: 'https://github.com/pgvector/pgvector' }, // PGVector link included in PostgreSQL
            { name: 'Pinecone VectorDB', icon: '/images/techstack/pinecone.png', link: 'https://www.pinecone.io/' }, // PGVector link included in PostgreSQL
            { name: 'Elasticsearch', icon: '/images/techstack/elasticsearch.svg', link: 'https://www.elastic.co/elasticsearch/' },
            { name: 'AWS S3 - Storage', icon: '/images/techstack/aws-s3.svg', link: 'https://aws.amazon.com/s3/' },
            { name: 'Azure Blob - Storage', icon: '/images/techstack/azure-blob.svg', link: 'https://azure.microsoft.com/en-us/services/storage/blobs/' },
        ]
    },
    {
        name: 'Cloud & DevOps',
        technologies: [
            { name: 'AWS', icon: '/images/techstack/aws.svg', link: 'https://aws.amazon.com/' },
            { name: 'Azure', icon: '/images/techstack/azure.svg', link: 'https://azure.microsoft.com/' },
            { name: 'GCP', icon: '/images/techstack/gcp.svg', link: 'https://cloud.google.com/' },
            { name: 'Docker', icon: '/images/techstack/docker.svg', link: 'https://www.docker.com/' },
            { name: 'Kubernetes', icon: '/images/techstack/kubernetes.svg', link: 'https://kubernetes.io/' },
            { name: 'Terraform', icon: '/images/techstack/terraform.svg', link: 'https://www.terraform.io/' },
            { name: 'Pulumi', icon: '/images/techstack/pulumi.svg', link: 'https://www.pulumi.com/' },
            { name: 'Ansible', icon: '/images/techstack/ansible.svg', link: 'https://www.ansible.com/' },
            { name: 'Serverless (Lambda, Functions)', icon: '/images/techstack/serverless.svg' }, // Links in specific cloud providers
            { name: 'GitHub Actions', icon: '/images/techstack/github.svg', link: 'https://github.com/features/actions' },
            { name: 'GitLab CI', icon: '/images/techstack/gitlab.svg', link: 'https://docs.gitlab.com/ee/ci/' },
            { name: 'Jenkins', icon: '/images/techstack/jenkins.svg', link: 'https://www.jenkins.io/' },
        ]
    },
    {
        name: 'Monitoring & Observability',
        technologies: [
            { name: 'OpenTelemetry', icon: '/images/techstack/opentelemetry.png', link: 'https://opentelemetry.io/' },
            { name: 'Prometheus', icon: '/images/techstack/prometheus.svg', link: 'https://prometheus.io/' },
            { name: 'Grafana', icon: '/images/techstack/grafana.svg', link: 'https://grafana.com/' },
            { name: 'ELK: Elasticsearch + Logstash + Kibana', icon: '/images/techstack/elasticsearch.svg', link: 'https://www.elastic.co/elastic-stack/' },
        ]
    },
    {
        name: 'AI & Machine Learning',
        technologies: [
            { name: 'Python', icon: '/images/techstack/python.svg', link: 'https://www.python.org/' },
            { name: 'Langchain', icon: '/images/techstack/langchain.png', link: 'https://www.langchain.com/' },
            { name: 'LlamaIndex', icon: '/images/techstack/llamaindex.png', link: 'https://www.llamaindex.ai/' },
            { name: 'LangGraph', icon: '/images/techstack/langgraph.png', link: 'https://www.langchain.com/langgraph' },
            { name: 'AutoGen', icon: '/images/techstack/autogen.svg', link: 'https://microsoft.github.io/autogen' },
            { name: 'MCP', icon: '/images/techstack/mcp.png', link: 'https://modelcontextprotocol.io/' }, // Assume internal or no public link
            { name: 'OpenAI API', icon: '/images/techstack/openai.webp', link: 'https://openai.com/api/' },
            { name: 'Hugging Face', icon: '/images/techstack/hugging-face.svg', link: 'https://huggingface.co/docs/transformers/index' },
            { name: 'TensorFlow', icon: '/images/techstack/tensorflow.svg', link: 'https://www.tensorflow.org/' },
            { name: 'PyTorch', icon: '/images/techstack/pytorch.svg', link: 'https://pytorch.org/' },
            { name: 'Scikit-learn', icon: '/images/techstack/scikitlearn.svg', link: 'https://scikit-learn.org/' },
            { name: 'PGVector VectorDB', icon: '/images/techstack/postgresql.svg', link: 'https://github.com/pgvector/pgvector' }, // PGVector link included in PostgreSQL
            { name: 'Pinecone VectorDB', icon: '/images/techstack/pinecone.png', link: 'https://www.pinecone.io/' }, // PGVector link included in PostgreSQL
            { name: 'OpenCV', icon: '/images/techstack/opencv.svg', link: 'https://opencv.org/' },
        ]
    },
    {
        name: 'Embedded Systems',
        technologies: [
            { name: 'C', icon: '/images/techstack/c.svg' },
            { name: 'C++', icon: '/images/techstack/cpp3.svg', link: 'https://isocpp.org/' },
            { name: 'MicroPython', icon: '/images/techstack/python.svg', link: 'https://micropython.org/' },
            { name: 'FreeRTOS', icon: '/images/techstack/freertos.png', link: 'https://www.freertos.org/' },
            { name: 'Zephyr', icon: '/images/techstack/zephyr.svg', link: 'https://www.zephyrproject.org/' },
            { name: 'PlatformIO', icon: '/images/techstack/platformio.svg', link: 'https://platformio.org/' },
            { name: 'ARM Cortex', icon: '/images/techstack/arm.jpg', link: 'https://www.arm.com/architecture/cpu' },
            { name: 'ESP32', icon: '/images/techstack/espressif.svg', link: 'https://www.espressif.com/' },
            { name: 'Raspberry Pi', icon: '/images/techstack/raspberry-pi.svg', link: 'https://www.raspberrypi.org/' },
            { name: 'Linux Kernel Dev', icon: '/images/techstack/linux-tux.svg', link: 'https://www.kernel.org/' },
            { name: 'Yocto', icon: '/images/techstack/yocto.svg', link: 'https://www.yoctoproject.org/' },
            { name: 'MQTT', icon: '/images/techstack/mqtt.svg', link: 'https://mqtt.org/' },
            { name: 'Modbus', icon: '/images/techstack/modbus.png', link: 'https://modbus.org/' },
            { name: 'CAN bus', icon: '/images/techstack/canbus.png', link: 'https://www.can-cia.org/' },
        ]
    },
    {
        name: 'Data Operations & Analytics',
        technologies: [
            { name: 'Python', icon: '/images/techstack/python.svg', link: 'https://www.python.org/' },
            { name: 'SQL', icon: '/images/techstack/sql.svg', link: 'https://sqlbolt.com/' }, // Generic concept
            { name: 'Apache Spark', icon: '/images/techstack/spark.webp', link: 'https://spark.apache.org/' },
            { name: 'Apache Kafka', icon: '/images/techstack/kafka.svg', link: 'https://kafka.apache.org/' },
            { name: 'Airflow', icon: '/images/techstack/airflow.svg', link: 'https://airflow.apache.org/' },
            // { name: 'dbt', icon: '/images/techstack/dbt.svg', link: 'https://www.getdbt.com/' },
            { name: 'Pandas', icon: '/images/techstack/pandas.svg', link: 'https://pandas.pydata.org/' },
            // { name: 'Looker', icon: '/images/techstack/looker.svg', link: 'https://cloud.google.com/looker' },
            { name: 'Tableau', icon: '/images/techstack/tableau.svg', link: 'https://www.tableau.com/' },
            { name: 'Power BI', icon: '/images/techstack/powerbi.svg', link: 'https://powerbi.microsoft.com/' },
        ]
    },
    {
        name: 'Bespoke Development',
        technologies: [
            { name: 'OpenGL', icon: '/images/techstack/opengl.svg', link: 'https://www.opengl.org/' },
            { name: 'Vulkan', icon: '/images/techstack/vulkan.svg', link: 'https://www.vulkan.org/' },
            { name: 'DirectX', icon: '/images/techstack/directx.png', link: 'https://www.microsoft.com/en-us/download/details.aspx?id=12083' },
            { name: 'VTK', icon: '/images/techstack/vtk.png', link: 'https://vtk.org/' },
            { name: 'GIS Tools', icon: '/images/techstack/gis.png' },
            { name: 'LiDAR', icon: '/images/techstack/lidar.png' },
            { name: 'WebAssembly', icon: '/images/techstack/wasm.svg', link: 'https://webassembly.org/' },
        ]
    }
];

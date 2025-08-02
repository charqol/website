

export const phoneCodes = [
    { value: "+1", label: "+1" },
    { value: "+44", label: "+44" },
    { value: "+33", label: "+33" },
    { value: "+49", label: "+49" },
    { value: "+61", label: "+61" },
    { value: "+7", label: "+7" },
    { value: "+81", label: "+81" },
    { value: "+86", label: "+86" },
    { value: "+91", label: "+91" },
    { value: "+52", label: "+52" },
    { value: "+55", label: "+55" },
    { value: "+27", label: "+27" },
    { value: "+82", label: "+82" },
    { value: "+34", label: "+34" },
    { value: "+39", label: "+39" },
    { value: "+36", label: "+36" },
    { value: "+31", label: "+31" },
    { value: "+47", label: "+47" },
    { value: "+46", label: "+46" },
    { value: "+45", label: "+45" },
    { value: "+41", label: "+41" },
    { value: "+43", label: "+43" },
    { value: "+32", label: "+32" },
    { value: "+351", label: "+351" },
    { value: "+353", label: "+353" },
    { value: "+48", label: "+48" },
    { value: "+66", label: "+66" },
    { value: "+60", label: "+60" },
    { value: "+65", label: "+65" },
    { value: "+64", label: "+64" },
    { value: "+971", label: "+971" },
    { value: "+972", label: "+972" },
    { value: "+966", label: "+966" },
    { value: "+90", label: "+90" },
    { value: "+30", label: "+30" },
    { value: "+420", label: "+420" },
    { value: "+380", label: "+380" },
    { value: "+94", label: "+94" },
    { value: "+62", label: "+62" },
    { value: "+84", label: "+84" }
];

export const positionOptions = [
    { value: "ceo", label: "CEO / President" },
    { value: "cto", label: "CTO / Technical Director" },
    { value: "coo", label: "COO / Operations Director" },
    { value: "cfo", label: "CFO / Finance Director" },
    { value: "vp", label: "VP / Executive" },
    { value: "director", label: "Director" },
    { value: "manager", label: "Manager" },
    { value: "developer", label: "Developer / Engineer" },
    { value: "designer", label: "Designer" },
    { value: "marketer", label: "Marketing Professional" },
    { value: "consultant", label: "Consultant" },
    { value: "analyst", label: "Analyst" },
    { value: "student", label: "Student" },
    { value: "other", label: "Other" }
];

export const tsParticlesOptions: any = {
    fullScreen: {
        enable: false
    },
    fpsLimit: 60,
    particles: {
        number: {
            value: 80,
            density: {
                enable: true
            }
        },
        color: {
            value: "#ffffff"
        },
        links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
                default: "out"
            },
            attract: {
                enable: false,
                rotate: {
                    x: 600,
                    y: 1200
                }
            }
        },
        size: {
            value: 2,
            animation: {
                enable: true,
                speed: 1,
                startValue: "random",
            }
        },
        opacity: {
            value: 0.5,
            animation: {
                enable: true,
                speed: 1,
                startValue: "random",
            }
        }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "grab"
            },
            onClick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                links: {
                    opacity: 1
                }
            },
            push: {
                quantity: 4
            }
        }
    },
    detectRetina: true,
    background: {
        color: "transparent"
    }
};

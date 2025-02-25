import { Github } from "lucide-svelte";

export const navigationData = {
    user: {
        name: 'shadcn',
        email: 'm@example.com',
        avatar: '/avatars/shadcn.jpg'
    },
    navQuickStart: [
        {
            title: 'Installation',
            url: '/quick-start/installation',
            // icon: SquareTerminal,
            isActive: true
        },   
    ],
    navMain: [
        {
            title: 'Avatar Group',
            url: '/components/avatar-group',
            // icon: SquareTerminal,
            isActive: true
        },
        {
            title: 'Code Block',
            url: '/components/code-block',
            // icon: SquareTerminal,
            isActive: true
        },
        {
            title: 'Code Snippet',
            url: '/components/code-snippet',
            // icon: SquareTerminal,
            isActive: true
        },
        {
            title: 'Copy Button',
            url: '/components/copy-button',
            // icon: SquareTerminal,
            isActive: true
        },
        {
            title: 'File Dropzone',
            url: '/components/file-dropzone',
            // icon: SquareTerminal,
            isActive: true,
            badge: 'Preview'
        },
        {
            title: 'Link',
            url: '/components/link',
            // icon: SquareTerminal,
            isActive: true
        },
        {
            title: 'Password Input',
            url: '/components/password-input',
            // icon: SquareTerminal,
            isActive: true
        },
        {
            title: 'Scroll Progress Indicator',
            url: '/components/scroll-progress-indicator',
            // icon: SquareTerminal,
            isActive: true
        },
        {
            title: 'Transfer List',
            url: '/components/transfer-list',
            // icon: SquareTerminal,
            isActive: true
        },
        {
            title: 'Virtual Select',
            url: '/components/virtual-select',
            badge: 'NEW',
            isActive: true
        },

        // {
        // 	title: 'Playground',
        // 	url: '#',
        // 	icon: SquareTerminal,
        // 	isActive: true,
        // 	items: [
        // 		{
        // 			title: 'History',
        // 			url: '#'
        // 		},
        // 		{
        // 			title: 'Starred',
        // 			url: '#'
        // 		},
        // 		{
        // 			title: 'Settings',
        // 			url: '#'
        // 		}
        // 	]
        // },
        // {
        // 	title: 'Models',
        // 	url: '#',
        // 	icon: Bot,
        // 	items: [
        // 		{
        // 			title: 'Genesis',
        // 			url: '#'
        // 		},
        // 		{
        // 			title: 'Explorer',
        // 			url: '#'
        // 		},
        // 		{
        // 			title: 'Quantum',
        // 			url: '#'
        // 		}
        // 	]
        // },
        // {
        // 	title: 'Documentation',
        // 	url: '#',
        // 	icon: BookOpen,
        // 	items: [
        // 		{
        // 			title: 'Introduction',
        // 			url: '#'
        // 		},
        // 		{
        // 			title: 'Get Started',
        // 			url: '#'
        // 		},
        // 		{
        // 			title: 'Tutorials',
        // 			url: '#'
        // 		},
        // 		{
        // 			title: 'Changelog',
        // 			url: '#'
        // 		}
        // 	]
        // },
        // {
        // 	title: 'Settings',
        // 	url: '#',
        // 	icon: Settings2,
        // 	items: [
        // 		{
        // 			title: 'General',
        // 			url: '#'
        // 		},
        // 		{
        // 			title: 'Team',
        // 			url: '#'
        // 		},
        // 		{
        // 			title: 'Billing',
        // 			url: '#'
        // 		},
        // 		{
        // 			title: 'Limits',
        // 			url: '#'
        // 		}
        // 	]
        // }
    ],
    navSecondary: [
        {
            title: 'GitHub',
            url: 'https://github.com/tzezar/shadcn-svelte-enhancements',
            icon: Github
        },
        // {
        // 	title: 'Feedback',
        // 	url: 'https://github.com/tzezar',
        // 	icon: Send
        // }
    ]
    // projects: [
    // 	{
    // 		name: 'Design Engineering',
    // 		url: '#',
    // 		icon: Frame
    // 	},
    // 	{
    // 		name: 'Sales & Marketing',
    // 		url: '#',
    // 		icon: ChartPie
    // 	},
    // 	{
    // 		name: 'Travel',
    // 		url: '#',
    // 		icon: Map
    // 	}
    // ]
};
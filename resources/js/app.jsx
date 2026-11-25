import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react'


import { createRoot } from 'react-dom/client'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import AdminLayout from './Layouts/AdminLayout';
createInertiaApp({
    title: (title) => `${title} - My App`,
    resolve: async (name) => {
        const page = await resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        );

        page.default.layout = page.default.layout || ((page) => <AdminLayout>{page}</AdminLayout>);

        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
})



// import '../css/app.css';

// import { createInertiaApp } from '@inertiajs/react';
// import { createRoot } from 'react-dom/client';
// import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
// import '../css/app.css';
// createInertiaApp({
//     resolve: (name) =>
//         resolvePageComponent(
//             `./Pages/${name}.jsx`,
//             import.meta.glob('./Pages/**/*.jsx'),
//         ),
//     setup({ el, App, props }) {
//         createRoot(el).render(<App {...props} />);
//     },
// });
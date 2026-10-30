// Generated from the design source. Navigation structure for the application shell.
export const NAV = {
    "student": [
        {
            "group": "Overview",
            "items": [
                {
                    "key": "dashboard",
                    "label": "Dashboard",
                    "route": "/dashboard",
                    "icon": "dashboard"
                }
            ]
        },
        {
            "group": "Learning",
            "items": [
                {
                    "key": "courses",
                    "label": "Explore Courses",
                    "route": "/courses",
                    "icon": "compass"
                },
                {
                    "key": "my",
                    "label": "My Courses",
                    "route": "/my-courses",
                    "icon": "library"
                }
            ]
        },
        {
            "group": "Communication",
            "items": [
                {
                    "key": "messages",
                    "label": "Messages",
                    "route": "/messages",
                    "icon": "users"
                }
            ]
        },
        {
            "group": "Account",
            "items": [
                {
                    "key": "password",
                    "label": "Change Password",
                    "route": "/change-password",
                    "icon": "edit"
                }
            ]
        }
    ],
    "admin": [
        {
            "group": "Overview",
            "items": [
                {
                    "key": "dashboard",
                    "label": "Dashboard",
                    "route": "/admin-dashboard",
                    "icon": "dashboard"
                }
            ]
        },
        {
            "group": "Courses",
            "items": [
                {
                    "key": "add",
                    "label": "Add Course",
                    "route": "/add-course",
                    "icon": "plus"
                },
                {
                    "key": "edit",
                    "label": "Edit / Delete Courses",
                    "route": "/edit-course",
                    "icon": "edit"
                }
            ]
        },
        {
            "group": "Students",
            "items": [
                {
                    "key": "enroll",
                    "label": "Manage Enrollments",
                    "route": "/manage-enrollment",
                    "icon": "users"
                }
            ]
        },
        {
            "group": "Communication",
            "items": [
                {
                    "key": "messages",
                    "label": "Messages",
                    "route": "/messages",
                    "icon": "users"
                }
            ]
        },
        {
            "group": "Account",
            "items": [
                {
                    "key": "password",
                    "label": "Change Password",
                    "route": "/change-password",
                    "icon": "edit"
                }
            ]
        }
    ]
};

export const ROLE_HOME = { student: "/dashboard", admin: "/admin-dashboard" };

export const FOOTERS = {
    "standard": "© 2026 Blushora",
    "learn": "© 2026 Blushora | Learn • Practice • Grow",
    "admin": "© 2026 Blushora | Administrator Panel"
};

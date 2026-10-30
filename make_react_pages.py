from pathlib import Path
from bs4 import BeautifulSoup, NavigableString, Comment
import re
import json


ROOT = Path.cwd()

FRONTEND = ROOT / "frontend"

REACT = ROOT / "react-frontend"

PAGES = REACT / "src" / "pages"


PAGES.mkdir(
    parents=True,
    exist_ok=True
)


# =========================================================
# HTML FILE -> REACT COMPONENT
# =========================================================

PAGE_NAMES = {

    "index.html":
        "Home",

    "login.html":
        "Login",

    "student_register.html":
        "Register",

    "admin_register.html":
        "AdminRegister",

    "student_dashboard.html":
        "StudentDashboard",

    "admin_dashboard.html":
        "AdminDashboard",

    "courses.html":
        "Courses",

    "course_details.html":
        "CourseDetails",

    "my_courses.html":
        "MyCourses",

    "start_course.html":
        "StartCourse",

    "certificate.html":
        "Certificate",

    "enrollment_success.html":
        "EnrollmentSuccess",

    "manage_enrollment.html":
        "ManageEnrollment",

    "add_course.html":
        "AddCourse",

    "edit_course.html":
        "EditCourse",

    "forgot_password.html":
        "ForgotPassword",

    "reset_password.html":
        "ResetPassword"

}


SCRIPT_NAMES = {

    "add_course.html":
        "add_course.js",

    "admin_dashboard.html":
        "admin_dashboard.js",

    "admin_register.html":
        "admin_register.js",

    "certificate.html":
        "certificate.js",

    "course_details.html":
        "course_details.js",

    "courses.html":
        "courses.js",

    "edit_course.html":
        "edit_course.js",

    "enrollment_success.html":
        "enrollment_success.js",

    "forgot_password.html":
        "forgot_password.js",

    "login.html":
        "login.js",

    "manage_enrollment.html":
        "manage_enrollment.js",

    "my_courses.html":
        "my_courses.js",

    "reset_password.html":
        "reset_password.js",

    "start_course.html":
        "start_course.js",

    "student_dashboard.html":
        "student_dashboard.js",

    "student_register.html":
        "student_register.js"

}


ROUTES = {

    "index.html":
        "/",

    "login.html":
        "/login",

    "student_register.html":
        "/register",

    "admin_register.html":
        "/admin-register",

    "student_dashboard.html":
        "/dashboard",

    "admin_dashboard.html":
        "/admin-dashboard",

    "courses.html":
        "/courses",

    "course_details.html":
        "/course-details",

    "my_courses.html":
        "/my-courses",

    "start_course.html":
        "/start-course",

    "certificate.html":
        "/certificate",

    "enrollment_success.html":
        "/enrollment-success",

    "manage_enrollment.html":
        "/manage-enrollment",

    "add_course.html":
        "/add-course",

    "edit_course.html":
        "/edit-course",

    "forgot_password.html":
        "/forgot-password",

    "reset_password.html":
        "/reset-password"

}


CSS_NAMES = {

    "index.html":
        "index.css",

    "login.html":
        "login.css",

    "student_register.html":
        "student_register.css",

    "admin_register.html":
        "admin_register.css",

    "student_dashboard.html":
        "student_dashboard.css",

    "admin_dashboard.html":
        "admin_dashboard.css",

    "courses.html":
        "courses.css",

    "course_details.html":
        "course_details.css",

    "my_courses.html":
        "my_courses.css",

    "start_course.html":
        "start_course.css",

    "certificate.html":
        "certificate.css",

    "enrollment_success.html":
        "enrollment_success.css",

    "manage_enrollment.html":
        "manage_enrollment.css",

    "add_course.html":
        "add_course.css",

    "edit_course.html":
        "edit_courses.css",

    "forgot_password.html":
        "forgot_password.css",

    "reset_password.html":
        "reset_password.css"

}


VARIANTS = {

    "index.html":
        "home",

    "courses.html":
        "student",

    "student_dashboard.html":
        "student",

    "course_details.html":
        "student3",

    "my_courses.html":
        "student3",

    "start_course.html":
        "student3",

    "certificate.html":
        "cert",

    "enrollment_success.html":
        "enrollment",

    "add_course.html":
        "admin",

    "edit_course.html":
        "admin",

    "manage_enrollment.html":
        "admin",

    "admin_dashboard.html":
        "adminnone"

}


VOID_TAGS = {

    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"

}


ATTRIBUTE_MAP = {

    "class":
        "className",

    "for":
        "htmlFor",

    "tabindex":
        "tabIndex",

    "readonly":
        "readOnly",

    "maxlength":
        "maxLength",

    "minlength":
        "minLength",

    "autocomplete":
        "autoComplete",

    "colspan":
        "colSpan",

    "rowspan":
        "rowSpan"

}


def quote(value):

    return json.dumps(
        str(value),
        ensure_ascii=False
    )


def convert_style(value):

    if not isinstance(value, str):

        return "{}"


    properties = []


    for item in value.split(";"):

        if ":" not in item:

            continue


        key, val = item.split(
            ":",
            1
        )


        key = key.strip()
        val = val.strip()


        if not key:

            continue


        key = re.sub(
            r"-([a-z])",
            lambda match:
                match.group(1).upper(),
            key
        )


        properties.append(
            f"{key}: {quote(val)}"
        )


    return (
        "{"
        +
        ", ".join(properties)
        +
        "}"
    )


def convert_text(value):

    value = str(value)


    value = value.replace(
        "{",
        "{'{' }"
    )


    value = value.replace(
        "}",
        "{'}' }"
    )


    return value.strip()


def convert_attributes(tag):

    attributes = []


    for key, value in tag.attrs.items():

        if key == "style":

            attributes.append(
                f"style={{{convert_style(value)}}}"
            )

            continue


        if (
            key.startswith("on")
            and
            isinstance(value, str)
        ):

            event_name = (
                key[2:].capitalize()
            )


            attributes.append(
                f'on{event_name}={{() => '
                f'window.eval({quote(value)})}}'
            )

            continue


        new_key = ATTRIBUTE_MAP.get(
            key,
            key
        )


        if isinstance(value, list):

            value = " ".join(value)


        if value is None:

            attributes.append(
                new_key
            )

            continue


        if value == key:

            attributes.append(
                new_key
            )

            continue


        attributes.append(
            f"{new_key}={quote(value)}"
        )


    if not attributes:

        return ""


    return (
        " "
        +
        " ".join(attributes)
    )


def convert_node(
    node,
    level=0
):

    indent = "    " * level


    if isinstance(
        node,
        Comment
    ):

        return (
            indent
            +
            "{/* "
            +
            str(node).strip()
            +
            " */}"
        )


    if isinstance(
        node,
        NavigableString
    ):

        text_value =convert_text(node)


        if not text_value:

            return ""


        return (
            indent
            +
            text_value
        )


    if not getattr(
        node,
        "name",
        None
    ):

        return ""


    if node.name in (
        "script",
        "style"
    ):

        return ""


    # =====================================
    # LOCAL <a> -> React <Link>
    # =====================================

    if node.name == "a":

        href =node.get("href")


        route = ROUTES.get(href)


        if route:

            attrs = []


            for key, value in node.attrs.items():

                if key == "href":

                    continue


                if key == "style":

                    attrs.append(
                        f"style={{{convert_style(value)}}}"
                    )

                    continue


                if (
                    key.startswith("on")
                    and
                    isinstance(value, str)
                ):

                    event_name = (
                        key[2:].capitalize()
                    )


                    attrs.append(
                        f'on{event_name}={{() => '
                        f'window.eval({quote(value)})}}'
                    )

                    continue


                new_key =ATTRIBUTE_MAP.get(
                        key,
                        key
                    )


                if isinstance(
                    value,
                    list
                ):

                    value = " ".join(
                        value
                    )


                attrs.append(
                    f"{new_key}={quote(value)}"
                )


            attribute_text = ""


            if attrs:

                attribute_text = " " +" ".join(attrs)


            children = []


            for child in node.children:

                converted =convert_node(
                        child,
                        level + 1
                    )


                if converted:

                    children.append(
                        converted
                    )


            if not children:

                return (
                    indent
                    +
                    f'<Link to={quote(route)}'
                    f'{attribute_text}>'
                    f'</Link>'
                )


            return (
                indent
                +
                f'<Link to={quote(route)}'
                f'{attribute_text}>'
                +
                "\n"
                +
                "\n".join(children)
                +
                "\n"
                +
                indent
                +
                "</Link>"
            )


    # =====================================
    # NORMAL ELEMENT
    # =====================================

    tag_name =node.name


    attribute_text =convert_attributes(node)


    if tag_name in VOID_TAGS:

        return (
            indent
            +
            f"<{tag_name}"
            f"{attribute_text}"
            f" />"
        )


    children = []


    for child in node.children:

        converted =convert_node(
                child,
                level + 1
            )


        if converted:

            children.append(
                converted
            )


    if not children:

        return (
            indent
            +
            f"<{tag_name}"
            f"{attribute_text}>"
            f"</{tag_name}>"
        )


    if (
        len(children) == 1
        and
        not children[0].lstrip().startswith("<")
        and
        "\n" not in children[0]
    ):

        return (
            indent
            +
            f"<{tag_name}"
            f"{attribute_text}>"
            +
            children[0].lstrip()
            +
            f"</{tag_name}>"
        )


    return (
        indent
        +
        f"<{tag_name}"
        f"{attribute_text}>"
        +
        "\n"
        +
        "\n".join(children)
        +
        "\n"
        +
        indent
        +
        f"</{tag_name}>"
    )


# =========================================================
# GENERATE EACH PAGE
# =========================================================

for html_file in FRONTEND.glob(
    "*.html"
):

    page_name =html_file.name


    component_name =PAGE_NAMES.get(
            page_name
        )


    if not component_name:

        continue


    html =html_file.read_text(
            encoding="utf-8"
        )


    soup =BeautifulSoup(
            html,
            "html.parser"
        )


    body =soup.body


    if body is None:

        continue


    header =body.find("header")


    footer =body.find("footer")


    has_header =header is not None


    has_footer =footer is not None


    if header:

        header.decompose()


    if footer:

        footer.decompose()


    content = []


    for child in body.children:

        converted =convert_node(
                child,
                3
            )


        if converted:

            content.append(
                converted
            )


    content_text ="\n".join(content)


    imports = [

        'import PageCss from "../components/PageCss";',

        'import LegacyScript from "../components/LegacyScript";'

    ]


    if "<Link " in content_text:

        imports.insert(
            0,
            'import { Link } from "react-router-dom";'
        )


    if has_header or has_footer:

        imports.insert(
            0,
            'import PageShell from "../components/PageShell";'
        )


    variant =VARIANTS.get(
            page_name,
            "none"
        )


    if has_header or has_footer:

        wrapped_content = (
            f'<PageShell variant="{variant}">\n'
            +
            content_text
            +
            "\n            </PageShell>"
        )

    else:

        wrapped_content = content_text


    css_file =CSS_NAMES[page_name]


    script_file =SCRIPT_NAMES.get(
            page_name
        )


    if script_file:

        if script_file == "login.js":

            script_component = (
                '<LegacyScript '
                'src="/legacy/js/login.js" '
                'module={true} />'
            )

        else:

            script_component = (
                f'<LegacyScript '
                f'src="/legacy/js/{script_file}" />'
            )

    else:

        script_component = ""


    component_code = (
        "\n".join(imports)
        +
        "\n\n"
        +
        f"export default function {component_name}() {{\n"
        +
        "    return (\n"
        +
        "        <>\n"
        +
        f'            <PageCss href="/css/{css_file}" />\n'
        +
        "            "
        +
        wrapped_content
        +
        "\n            "
        +
        script_component
        +
        "\n"
        +
        "        </>\n"
        +
        "    );\n"
        +
        "}\n"
    )


    output_file =PAGES /f"{component_name}.jsx"


    output_file.write_text(
        component_code,
        encoding="utf-8"
    )


    print(
        "Created:",
        output_file
    )


print()
print(
    "React page conversion completed."
)
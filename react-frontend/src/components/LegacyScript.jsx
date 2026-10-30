import {
    useEffect,
    useRef
} from "react";


function LegacyScript({
    src,
    module = false
}) {

    const executed =
        useRef(false);


    useEffect(() => {

        /*
         * React StrictMode runs effects twice
         * in development.
         *
         * This prevents the same legacy
         * script from being executed twice
         * during the same mount.
         */

        if (executed.current) {
            return;
        }


        executed.current = true;


        const script =
            document.createElement(
                "script"
            );


        script.src =
            src;


        script.type =
            module
                ? "module"
                : "text/javascript";


        script.async =
            false;


        script.onload =
            function () {

                /*
                 * Old JavaScript files use
                 * DOMContentLoaded.
                 *
                 * React has already rendered
                 * the DOM, so we manually trigger
                 * the event after loading the
                 * old script.
                 */

                document.dispatchEvent(
                    new Event(
                        "DOMContentLoaded"
                    )
                );


                /*
                 * Some existing files use
                 * window.addEventListener("load")
                 * or window.onload.
                 */

                window.dispatchEvent(
                    new Event("load")
                );

            };


        script.onerror =
            function (error) {

                console.error(
                    "Unable to load legacy script:",
                    src,
                    error
                );

            };


        document.body.appendChild(
            script
        );


        /*
         * We intentionally do not remove
         * the script here because React
         * StrictMode performs a temporary
         * cleanup during development.
         */

    }, [src, module]);


    return null;

}


export default LegacyScript;
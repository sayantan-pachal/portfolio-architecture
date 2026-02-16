import React from 'react';

function Edgecase() {
    return (
        // Full-page wrapper with center alignment
        <div className="py-16 px-4 flex flex-col items-center justify-center min-h-screen
            bg-[linear-gradient(180deg,#fff7e6,#ffe6cc)]
            dark:bg-[linear-gradient(180deg,#0f1724,#05060a_60%)]
            text-gray-900 dark:text-white"
        >
            <section>
                {/* Main error heading */}
                <h2 className="text-4xl font-bold text-center">
                    Not Found
                </h2>

                {/* Secondary message */}
                <h2 className="text-4xl mt-2 font-bold text-center">
                    Something went wrong !
                </h2>

                {/* Description */}
                <p className="text-lg max-w-3xl mt-4 mx-auto text-center text-gray-600 dark:text-gray-400">
                    The page you are looking for does not exist or an unexpected error has occurred.
                </p>

                <p className="text-lg max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-400">
                    Please check the URL or return to the homepage.
                </p>
            </section>
        </div>
    );
}

export default Edgecase;

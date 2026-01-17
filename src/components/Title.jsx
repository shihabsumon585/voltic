import React from 'react'

const Title = ({title, subtitle}) => {
    return (
        <div className="flex flex-col items-center justify-center mb-12 text-center">
            {/* Decorative Line & Icon */}
            <div className="flex items-center gap-2 mb-2">
                <div className="h-[2px] w-8 bg-yellow-500"></div>
                <span className="text-yellow-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                    >
                        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.972 9.5h4.778a.75.75 0 0 1 .58 1.222l-8 10a.75.75 0 0 1-1.233-.806L11.028 14.5H6.25a.75.75 0 0 1-.58-1.222l8-10a.75.75 0 0 1 .945-.183Z" clipRule="evenodd" />
                    </svg>
                </span>
                <div className="h-[2px] w-8 bg-yellow-500"></div>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase tracking-tight">
                {title} <span className="text-blue-600">.</span>
            </h2>

            {/* Subtitle */}
            {subtitle && (
                <p className="mt-3 text-slate-500 max-w-lg text-sm md:text-base">
                    {subtitle}
                </p>
            )}

            {/* Bottom Accent Line */}
            <div className="mt-4 h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>
    )
}

export default Title

"use client";

import Image from "next/image";

export const Github = ({ link, size = 28 } : { link: string; size?: number }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="inline-flex"
        style={{ width: size, height: size }}
    >
        <Image
            src="/images/github_img.png"
            alt="GitHub"
            width={size}
            height={size}
            className="w-full h-full object-cover block bg-transparent radius-[4px]"
        />
    </a>
);

export const Code = ({ link, size = 28 } : { link: string; size?: number }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Code"
        className="inline-flex"
        style={{ width: size, height: size }}
    >
        <Image
            src="/images/code_1.png"
            alt="Code"
            width={size}
            height={size}
            className="w-full h-full object-cover block bg-transparent radius-[4px]"
        />
    </a>
);

export const Document = ({ link, size = 28 } : { link: string; size?: number }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Document"
        className="inline-flex"
        style={{ width: size, height: size }}
    >
        <Image
            src="/images/document.png"
            alt="Document"
            width={size}
            height={size}
            className="w-full h-full object-cover block bg-transparent radius-[4px]"
        />
    </a>
);



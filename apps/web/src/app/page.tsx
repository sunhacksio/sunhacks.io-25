'use client';

import { useEffect, useState } from 'react';

export default function Home() {
	const [content, setContent] = useState<string>('');

	useEffect(() => {
		// Set the page title
		document.title = 'sunhacks 2025';

		fetch('/parallax.html')
			.then(response => response.text())
			.then(html => {
				// Extract the body content
				const parser = new DOMParser();
				const doc = parser.parseFromString(html, 'text/html');

				// Get the head content (styles, scripts, etc.)
				const headContent = doc.head.innerHTML;

				// Get the body content
				const bodyContent = doc.body.innerHTML;

				// Combine them
				const fullContent = `
          <div id="parallax-head" style="display: none;">${headContent}</div>
          <div id="parallax-body">${bodyContent}</div>
        `;

				setContent(fullContent);

				// Apply the head content to the document
				const headDiv = document.getElementById('parallax-head');
				if (headDiv) {
					const headElements = headDiv.children;
					for (let i = 0; i < headElements.length; i++) {
						const element = headElements[i];
						if (element.tagName === 'LINK' || element.tagName === 'SCRIPT') {
							document.head.appendChild(element.cloneNode(true));
						}
					}
				}
			})
			.catch(error => {
				console.error('Error loading parallax content:', error);
				setContent('<div style="text-align: center; padding: 50px; font-size: 24px;">Loading SunHacks 2025...</div>');
			});
	}, []);

	return (
		<div dangerouslySetInnerHTML={{ __html: content }} />
	);
}

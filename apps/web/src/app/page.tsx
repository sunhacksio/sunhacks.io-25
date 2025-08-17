'use client';

import { useEffect, useState } from 'react';

export default function Home() {
	const [content, setContent] = useState<string>('');

	useEffect(() => {
		// Set the page title
		document.title = 'sunhacks 2025';

		fetch('/parallax.html')
			.then(response => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.text();
			})
			.then(html => {
				setContent(html);
			})
			.catch(error => {
				console.error('Error loading parallax content:', error);
				setContent(`
          <div style="
            display: flex; 
            justify-content: center; 
            align-items: center; 
            height: 100vh;
            font-size: 24px;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #FF6B9D, #C44569, #F8B500);
            color: white;
            text-align: center;
            padding: 20px;
          ">
            <div>
              <h1>SunHacks 2025</h1>
              <p>Loading content...</p>
              <p style="font-size: 16px; margin-top: 20px;">
                If this message persists, please refresh the page.
              </p>
            </div>
          </div>
        `);
			});
	}, []);

	return (
		<div dangerouslySetInnerHTML={{ __html: content }} />
	);
}

export default function Home() {
	return (
		<html>
			<head>
				<title>sunhacks 2025</title>
				<meta httpEquiv="refresh" content="0;url=/parallax.html" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<style>{`
          body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #FF6B9D, #C44569, #F8B500);
            color: white;
            text-align: center;
          }
        `}</style>
			</head>
			<body>
				<div>
					<h1>SunHacks 2025</h1>
					<p>Redirecting to the main site...</p>
				</div>
				<script dangerouslySetInnerHTML={{
					__html: `
            window.location.href = '/parallax.html';
          `
				}} />
			</body>
		</html>
	);
}
